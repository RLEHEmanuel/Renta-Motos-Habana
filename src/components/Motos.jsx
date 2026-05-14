export default function Motos() {
  const motos = [
    {
      id: 1,
      nombre: "Moto Clásica",
      precio: "$30/día",
      imagen: "🏍️",
      desc: "Perfecta para principiantes",
    },
    {
      id: 2,
      nombre: "Moto Deportiva",
      precio: "$50/día",
      imagen: "🏎️",
      desc: "Para los más aventureros",
    },
    {
      id: 3,
      nombre: "Moto Turismo",
      precio: "$40/día",
      imagen: "🛵",
      desc: "Comodidad garantizada",
    },
  ]

  return (
    <section id="motos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-blue-900 animate-fade-in-up font-sans">
          Nuestras Motos
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg animate-fade-in-up font-sans" style={{ animationDelay: '0.1s' }}>
          Selecciona la que se adapte a ti
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motos.map((moto, index) => (
            <div
              key={moto.id}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-b-4 border-gray-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-7xl mb-4 text-center animate-float">{moto.imagen}</div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900 font-sans">
                {moto.nombre}
              </h3>
              <p className="text-gray-600 mb-4 text-sm font-sans">{moto.desc}</p>
              <p className="text-gray-900 text-3xl font-bold mb-6 font-sans">
                {moto.precio}
              </p>
              <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 font-bold text-lg shadow-lg transform hover:scale-105 font-sans">
                Reservar
              </button>
            </div>
          ))}
        </div>        <div className="mt-12 text-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-lg transform hover:scale-105 animate-fade-in-up font-sans" style={{ animationDelay: '0.45s' }}>
            Ver Catálogo Completo
          </button>
        </div>      </div>
    </section>
  )
}
