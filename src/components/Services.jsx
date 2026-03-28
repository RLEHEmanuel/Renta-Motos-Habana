export default function Services() {
  const servicios = [
    {
      id: 1,
      titulo: "⚡ Entrega Rápida",
      descripcion: "Recibe tu moto en 15 minutos",
      icon: "🚀",
    },
    {
      id: 2,
      titulo: "🛡️ Seguro Completo",
      descripcion: "Protección total en cada viaje",
      icon: "✅",
    },
    {
      id: 3,
      titulo: "24/7 Soporte",
      descripcion: "Ayuda disponible todo el tiempo",
      icon: "📞",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-4 text-blue-900 animate-fade-in-up">
          Servicios Premium
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Disfrutarás de la mejor experiencia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="text-center p-10 bg-white rounded-2xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl mb-4 animate-float">{servicio.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-lg">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
