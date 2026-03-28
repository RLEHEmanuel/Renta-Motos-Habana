export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 border-t-4 border-yellow-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-slide-in-left">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contacto</h3>
            <p className="text-gray-400">📍 La Habana, Cuba</p>
            <p className="text-gray-400">📱 +53 (7) 123-4567</p>
            <p className="text-gray-400">✉️ info@motorentashabana.com</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#motos" className="hover:text-yellow-400 transition hover:translate-x-1 inline-block">Motos</a></li>
              <li><a href="#servicios" className="hover:text-yellow-400 transition hover:translate-x-1 inline-block">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-yellow-400 transition hover:translate-x-1 inline-block">Contacto</a></li>
            </ul>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Síguenos</h3>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-yellow-400 cursor-pointer transition transform hover:scale-110">Facebook</p>
              <p className="hover:text-yellow-400 cursor-pointer transition transform hover:scale-110">Instagram</p>
              <p className="hover:text-yellow-400 cursor-pointer transition transform hover:scale-110">WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Moto Rentas Habana. Todos los derechos reservados.</p>
          <p className="mt-2 text-yellow-400 font-semibold">🏍️ ¡Vive la aventura! 🏍️</p>
        </div>
      </div>
    </footer>
  )
}
