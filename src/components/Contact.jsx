export default function Contact({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 bg-opacity-95 p-10 rounded-2xl shadow-2xl border-2 border-yellow-400 max-w-xl w-full mx-4 animate-fade-in-up relative" onClick={(e) => e.stopPropagation()}>
        {/* Botón Cerrar X */}
<button
          onClick={onClose}
          className="absolute top-0 right-0 text-white hover:bg-transparent transition text-3xl font-bold w-10 h-10 flex items-center justify-center hover:text-yellow-400 rounded-full animate-pulse"
          aria-label="Cerrar"
        >
          ×
        </button>

        <h2 className="text-4xl font-black text-center mb-2 animate-fade-in-up text-white">
          ¿Listo para Comenzar?
        </h2>
        <p className="text-center text-yellow-400 mb-8 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Déjanos tus datos y nos contactaremos pronto
        </p>
        <form className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

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
  )
}