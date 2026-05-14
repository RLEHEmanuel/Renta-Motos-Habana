import { useState } from 'react';

export default function MotosModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [filterSituacion, setFilterSituacion] = useState('');

  // Datos mock de motos basado en el schema
  const motos = [
    {
      id_moto: 1,
      matricula: 'HAB001',
      modelo: 'CB500',
      marca: 'Honda',
      color: 'Rojo',
      situacion: 'Disponible',
      kilometraje: 5000,
      precio_est: 35.00,
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
      precio_est: 40.00,
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
      precio_est: 30.00,
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
      precio_est: 45.00,
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
      precio_est: 50.00,
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
      precio_est: 32.00,
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
      precio_est: 55.00,
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
      precio_est: 60.00,
      imagen: '🏍️'
    },
  ];

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up font-sans">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
          <h2 className="text-3xl font-bold">Catálogo de Motos</h2>
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
                {colores.map((color) => (
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
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {moto.situacion}
                      </span>
                      <p className="text-lg font-black text-blue-900">
                        ${moto.precio_est}/día
                      </p>
                    </div>

                    {/* Botón Reservar */}
                    <button
                      disabled={moto.situacion !== 'Disponible'}
                      className={`w-full mt-3 py-2 rounded-lg font-bold text-sm transition ${
                        moto.situacion === 'Disponible'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {moto.situacion === 'Disponible' ? 'Reservar' : 'No disponible'}
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
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-bold transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
