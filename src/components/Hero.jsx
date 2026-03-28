export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full particle-random-1"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full particle-random-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-200 rounded-full particle-random-3"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-200 rounded-full particle-random-4"></div>
        <div className="absolute top-2/5 left-2/5 w-1.5 h-1.5 bg-yellow-400 rounded-full particle-random-5"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full particle-random-6"></div>
        <div className="absolute bottom-2/5 right-1/4 w-2 h-2 bg-yellow-100 rounded-full particle-random-7"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-100 rounded-full particle-random-8"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full particle-random-9"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full particle-random-10"></div>
        <div className="absolute bottom-1/2 right-2/3 w-1.5 h-1.5 bg-yellow-400 rounded-full particle-random-11"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-200 rounded-full particle-random-12"></div>
        <div className="absolute bottom-2/3 left-2/5 w-2 h-2 bg-yellow-200 rounded-full particle-random-13"></div>
        <div className="absolute top-3/5 right-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full particle-random-14"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl font-black mb-6 leading-tight animate-fade-in-up">
          ¡Vive la Libertad sobre dos Ruedas!
        </h1>
        <p className="text-2xl mb-10 text-yellow-200 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Explora La Habana con nuestras motos de a lo cubano
        </p>
        <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up animate-pulse-glow" style={{ animationDelay: '0.4s' }}>
          Reservar Ahora
        </button>
      </div>
    </section>
  )
}
