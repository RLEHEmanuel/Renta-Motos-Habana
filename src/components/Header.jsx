export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-2xl sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-3xl font-black tracking-widest hover:scale-110 transition duration-500 cursor-pointer">
          <span className="wave-char wave-char-1">H</span>
          <span className="wave-char wave-char-2">A</span>
          <span className="wave-char wave-char-3">V</span>
          <span className="wave-char wave-char-4">A</span>
          <span className="wave-char wave-char-5">N</span>
          <span className="wave-char wave-char-6">A</span>
          <span className="text-yellow-400 wave-char wave-char-7">C</span>
          <span className="text-yellow-400 wave-char wave-char-8">C</span>
        </div>
        <ul className="flex gap-8 text-base font-semibold">
          <li>
            <a
              href="#inicio"
              className="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#motos"
              className="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Motos
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
