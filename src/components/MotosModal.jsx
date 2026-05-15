import { useState, useEffect } from 'react';

export default function MotosModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [filterSituacion, setFilterSituacion] = useState('');

  // Datos mock de motos basado en el schema (ahora en state para permitir añadir)
  const initialMotos = [
    {
      id_moto: 1,
      matricula: 'HAB001',
      modelo: 'CB500',
      marca: 'Honda',
      color: 'Rojo',
      situacion: 'Disponible',
      kilometraje: 5000,
      precio_est: 35.0,
      imagen: '🏍️'
    },
    {
      id_moto: 2,
      matricula: 'HAB002',
      modelo: 'MT-07',
      marca: 'Yamaha',
      color: 'Azul',
      situacion: 'Disponible',
      kilometraje: 3200,
      precio_est: 40.0,
      imagen: '🏍️'
    },
    {
      id_moto: 3,
      matricula: 'HAB003',
      modelo: 'Rebel 500',
      marca: 'Honda',
      color: 'Negro',
      situacion: 'Disponible',
      kilometraje: 8500,
      precio_est: 30.0,
      imagen: '🏍️'
    },
    {
      id_moto: 4,
      matricula: 'HAB004',
      modelo: 'GSX-S750',
      marca: 'Suzuki',
      color: 'Plateado',
      situacion: 'Disponible',
      kilometraje: 12000,
      precio_est: 45.0,
      imagen: '🏍️'
    },
    {
      id_moto: 5,
      matricula: 'HAB005',
      modelo: 'Street Twin',
      marca: 'Triumph',
      color: 'Rojo',
      situacion: 'Alquilada',
      kilometraje: 6800,
      precio_est: 50.0,
      imagen: '🏍️'
    },
    {
      id_moto: 6,
      matricula: 'HAB006',
      modelo: 'Ninja 400',
      marca: 'Kawasaki',
      color: 'Verde',
      situacion: 'Disponible',
      kilometraje: 2100,
      precio_est: 32.0,
      imagen: '🏍️'
    },
    {
      id_moto: 7,
      matricula: 'HAB007',
      modelo: 'V-Strom 650',
      marca: 'Suzuki',
      color: 'Naranja',
      situacion: 'Disponible',
      kilometraje: 15000,
      precio_est: 55.0,
      imagen: '🏍️'
    },
    {
      id_moto: 8,
      matricula: 'HAB008',
      modelo: 'Scrambler Icon',
      marca: 'Ducati',
      color: 'Amarillo',
      situacion: 'Mantenimiento',
      kilometraje: 4500,
      precio_est: 60.0,
      imagen: '🏍️'
    },
  ];

  const [motos, setMotos] = useState(initialMotos);
  const [showAddForm, setShowAddForm] = useState(false);

  // New moto form state
  const [newMatricula, setNewMatricula] = useState('');
  const [newModelo, setNewModelo] = useState('');
  const [newMarca, setNewMarca] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newSituacion, setNewSituacion] = useState('Disponible');
  const [newPrecio, setNewPrecio] = useState('');
  const [newKilometraje, setNewKilometraje] = useState('');
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Filtrar motos según la búsqueda
  const filteredMotos = motos.filter(moto => {
    const matchesSearch = 
      moto.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moto.marca.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesColor = !filterColor || moto.color === filterColor;
    const matchesSituacion = !filterSituacion || moto.situacion === filterSituacion;
    
    return matchesSearch && matchesColor && matchesSituacion;
  });

  const colores = [...new Set(motos.map(m => m.color))];
  const situaciones = [...new Set(motos.map(m => m.situacion))];
  // Ordenar colores alfabéticamente para selects y búsqueda
  const sortedColors = colores.slice().sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

  useEffect(() => {
    // Reset add-moto form when modal is closed so it doesn't persist open/filled
    if (!isOpen) {
      setShowAddForm(false);
      setNewMatricula('');
      setNewModelo('');
      setNewMarca('');
      setNewColor('');
      setNewSituacion('Disponible');
      setNewPrecio('');
      setNewKilometraje('');
      setErrors({});
    }
  }, [isOpen]);

  const validateForm = () => {
    const errs = {};
    if (!newMatricula.trim()) errs.matricula = 'Matrícula requerida';
    if (!newModelo.trim()) errs.modelo = 'Modelo requerido';
    if (!newMarca.trim()) errs.marca = 'Marca requerida';
    if (!newColor || !newColor.trim()) errs.color = 'Color requerido';
    // matrícula formato básico (3-10 chars alfanuméricos o guion)
    if (!/^[A-Z0-9-]{3,10}$/i.test(newMatricula.trim())) errs.matricula = 'Formato matrícula inválido (3-10 letras/números)';
    // matrícula única (ignorar la propia si estamos editando)
    const mat = newMatricula.trim().toLowerCase();
    if (motos.some(m => m.matricula.toLowerCase() === mat && (editMode ? m.id_moto !== editingId : true))) errs.matricula = 'La matrícula ya existe';
  const precioNum = parseFloat(newPrecio);
  if (isNaN(precioNum) || precioNum <= 0) errs.precio = 'Precio debe ser mayor que 0';
  // kilometraje entero >= 0
  const kmNum = parseInt(newKilometraje, 10);
  if (isNaN(kmNum) || kmNum < 0) errs.kilometraje = 'Kilometraje inválido (>= 0)';
    if (!['Disponible', 'Alquilada', 'Mantenimiento'].includes(newSituacion)) errs.situacion = 'Situación inválida';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleAddMoto = () => {
    if (!validateForm()) return;
    const colorValue = newColor;
    if (!colorValue || !colorValue.trim()) {
      setErrors((s) => ({ ...s, color: 'Color requerido' }));
      return;
    }
    if (editMode && editingId != null) {
      // update existing moto
      const updated = motos.map(m => {
        if (m.id_moto === editingId) {
          return {
            ...m,
            matricula: newMatricula.trim(),
            modelo: newModelo.trim(),
            marca: newMarca.trim(),
            color: colorValue.trim(),
            situacion: newSituacion,
            precio_est: parseFloat(newPrecio) || 0,
            kilometraje: parseInt(newKilometraje, 10) || 0,
          };
        }
        return m;
      });
      setMotos(updated);
      // limpiar estado de edición
      setEditMode(false);
      setEditingId(null);
    } else {
      // add new
      const nextId = motos.length ? Math.max(...motos.map(m => m.id_moto)) + 1 : 1;
      const added = {
        id_moto: nextId,
        matricula: newMatricula.trim() || `HAB${String(nextId).padStart(3, '0')}`,
        modelo: newModelo.trim() || 'Modelo',
        marca: newMarca.trim() || 'Marca',
        color: colorValue.trim(),
        situacion: newSituacion || 'Disponible',
        kilometraje: parseInt(newKilometraje, 10) || 0,
        precio_est: parseFloat(newPrecio) || 0,
        imagen: '🏍️'
      };
      setMotos([added, ...motos]);
    }
    // limpiar form
    setNewMatricula(''); setNewModelo(''); setNewMarca(''); setNewColor(''); setNewSituacion('Disponible'); setNewPrecio(''); setNewKilometraje('');
    setErrors({});
    setShowAddForm(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up font-sans">
        {/* Header (ventana modal) */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Catálogo de Motos</h2>
          <button onClick={onClose} aria-label="Cerrar catálogo" className="text-white bg-transparent hover:bg-white/10 px-3 py-1 rounded">
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Barra de Búsqueda y Filtros */}
          <div className="mb-8 flex flex-col gap-4">
            {/* Búsqueda */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por matrícula, modelo o marca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-gray-900 placeholder-gray-500 transition"
              />
              <span className="material-icons absolute right-4 top-3.5 text-gray-400">search</span>
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={filterColor}
                onChange={(e) => setFilterColor(e.target.value)}
                className="px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-gray-900 transition"
              >
                <option value="">Todos los colores</option>
                {sortedColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>

              <select
                value={filterSituacion}
                onChange={(e) => setFilterSituacion(e.target.value)}
                className="px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-gray-900 transition"
              >
                <option value="">Todas las situaciones</option>
                {situaciones.map((situacion) => (
                  <option key={situacion} value={situacion}>
                    {situacion}
                  </option>
                ))}
              </select>
            </div>
            {/* Form para añadir nueva moto */}
            {showAddForm && (
              <div className="my-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <h4 className="font-bold mb-3">{editMode ? 'Editar moto' : 'Poner otra moto'}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input value={newMatricula} onChange={(e) => setNewMatricula(e.target.value)} placeholder="Matrícula" className="px-4 py-2 border rounded text-gray-900 placeholder-gray-500" />
                  <input value={newModelo} onChange={(e) => setNewModelo(e.target.value)} placeholder="Modelo" className="px-4 py-2 border rounded text-gray-900 placeholder-gray-500" />
                  <input value={newMarca} onChange={(e) => setNewMarca(e.target.value)} placeholder="Marca" className="px-4 py-2 border rounded text-gray-900 placeholder-gray-500" />
                  {/* Color ahora es un select ordenado + opción 'Otro' */}
                  <div>
                    <select value={newColor || ''} onChange={(e) => { setNewColor(e.target.value); }} className="px-4 py-2 border rounded text-gray-900 w-full">
                      <option value="">Seleccionar color</option>
                      {sortedColors.map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                  <select value={newSituacion} onChange={(e) => setNewSituacion(e.target.value)} className="px-4 py-2 border rounded text-gray-900">
                    <option value="Disponible">Disponible</option>
                    <option value="Alquilada">Alquilada</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                  </select>
                  <input value={newPrecio} onChange={(e) => setNewPrecio(e.target.value)} placeholder="Precio por día" type="number" className="px-4 py-2 border rounded text-gray-900" />
                  <input value={newKilometraje} onChange={(e) => setNewKilometraje(e.target.value)} placeholder="Kilometraje" type="number" className="px-4 py-2 border rounded text-gray-900" />
                </div>
                {/* Mostrar errores */}
                <div className="mt-2">
                  {errors.matricula && <p className="text-sm text-red-600">{errors.matricula}</p>}
                  {errors.modelo && <p className="text-sm text-red-600">{errors.modelo}</p>}
                  {errors.marca && <p className="text-sm text-red-600">{errors.marca}</p>}
                  {errors.color && <p className="text-sm text-red-600">{errors.color}</p>}
                  {errors.precio && <p className="text-sm text-red-600">{errors.precio}</p>}
                  {errors.situacion && <p className="text-sm text-red-600">{errors.situacion}</p>}
                </div>

                <div className="mt-4 flex gap-3">
                  <button onClick={handleAddMoto} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold">{editMode ? 'Guardar cambios' : 'Añadir moto'}</button>
                  <button onClick={() => { setShowAddForm(false); setEditMode(false); setEditingId(null); }} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Cancelar</button>
                  {editMode && (
                    <button
                      onClick={() => {
                        if (!editingId) return;
                        const ok = window.confirm('¿Eliminar esta moto? Esta acción no se puede deshacer.');
                        if (!ok) return;
                        setMotos(motos.filter(m => m.id_moto !== editingId));
                        setShowAddForm(false);
                        setEditMode(false);
                        setEditingId(null);
                      }}
                      className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
                    >
                      Eliminar moto
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Grid de Motos */}
          {filteredMotos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredMotos.map((moto) => (
                <div
                  key={moto.id_moto}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border-2 border-gray-200 hover:shadow-lg hover:border-blue-400 transition duration-300 transform hover:-translate-y-1"
                >
                  {/* Imagen */}
                  <div className="text-6xl text-center mb-3">{moto.imagen}</div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">{moto.modelo}</h3>
                    <p className="text-sm text-gray-600">{moto.marca}</p>

                    <div className="pt-2 border-t border-gray-300">
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Matrícula:</span> {moto.matricula}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Color:</span> {moto.color}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">KM:</span> {moto.kilometraje.toLocaleString()}
                      </p>
                    </div>

                    {/* Estado y Precio */}
                    <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
              moto.situacion === 'Disponible'
                ? 'bg-green-100 text-green-700'
                : moto.situacion === 'Alquilada'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {moto.situacion}
                      </span>
                      <p className="text-lg font-black text-blue-900">
                        ${moto.precio_est}/día
                      </p>
                    </div>

                    {/* Botón Editar (antes Reservar) */}
                    <button
                      className={`w-full mt-3 py-2 rounded-lg font-bold text-sm transition bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transform hover:scale-105`}
                      onClick={() => {
                        // populate form with moto data for editing
                        setNewMatricula(moto.matricula);
                        setNewModelo(moto.modelo);
                        setNewMarca(moto.marca);
                        setNewColor(moto.color);
                        setNewSituacion(moto.situacion);
                        setNewPrecio(String(moto.precio_est));
                        setNewKilometraje(String(moto.kilometraje || 0));
                        setShowAddForm(true);
                        setEditMode(true);
                        setEditingId(moto.id_moto);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-xl text-gray-600">No se encontraron motos con esos criterios.</p>
              <p className="text-sm text-gray-500 mt-2">Intenta cambiar los filtros de búsqueda.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600 font-sans">
            Mostrando <span className="font-bold text-gray-900">{filteredMotos.length}</span> de <span className="font-bold text-gray-900">{motos.length}</span> motos
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold transition"
            >
              Poner otra moto
            </button>

            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-bold transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Handler to add a new moto will be implemented inline above using state
