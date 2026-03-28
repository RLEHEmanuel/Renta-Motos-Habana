export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-4 animate-fade-in-up">
          ¿Listo para Comenzar?
        </h2>
        <p className="text-center text-yellow-400 mb-16 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Déjanos tus datos y nos contactaremos pronto
        </p>
        <div className="max-w-xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-2xl border-2 border-yellow-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-5 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 bg-gray-700 text-white placeholder-gray-400 transition"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-5 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 bg-gray-700 text-white placeholder-gray-400 transition"
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              className="w-full px-5 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 bg-gray-700 text-white placeholder-gray-400 transition"
            />
            <textarea
              placeholder="Cuéntanos qué moto te interesa"
              className="w-full px-5 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 bg-gray-700 text-white placeholder-gray-400 transition h-28"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 py-3 rounded-lg hover:from-yellow-300 hover:to-yellow-200 transition duration-300 font-bold text-lg shadow-lg transform hover:scale-105"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
