import { useState } from 'react';

export default function Header({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-2xl fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-3xl font-black tracking-widest hover:scale-110 transition duration-500 cursor-pointer">
          <span className="text-yellow-400 wave-char wave-char-1">E</span>
          <span className="wave-char wave-char-2">-</span>
          <span className="wave-char wave-char-3">M</span>
          <span className="wave-char wave-char-4">O</span>
          <span className="wave-char wave-char-5">T</span>
          <span className="wave-char wave-char-6">O</span>
          <span className="wave-char wave-char-7">R</span>
          <span className="wave-char wave-char-8">E</span>
          <span className="wave-char wave-char-9"> </span>
          <span className="wave-char wave-char-10">N</span>
          <span className="wave-char wave-char-11">T</span>
        </div>

        {/* Botón Menu - Hamburger Icon Mejorado */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center gap-1.5 p-2 menu-button-hamburger hover:opacity-80 transition"
          aria-label="Toggle Menu"
        >
          <span className={`hamburger-line h-0.5 w-6 bg-white transition-all duration-500 ${
            menuOpen ? 'hamburger-top-open' : ''
          }`}></span>
          <span className={`hamburger-line h-0.5 w-6 bg-white transition-all duration-500 ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`hamburger-line h-0.5 w-6 bg-white transition-all duration-500 ${
            menuOpen ? 'hamburger-bottom-open' : ''
          }`}></span>
        </button>

        {/* Menú Desplegable */}
        {menuOpen && (
          <div className="dropdown-menu-professional">
            <ul className="flex flex-col">
              <li>
                <a
                  href="#inicio"
                  onClick={closeMenu}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#motos"
                  onClick={closeMenu}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold"
                >
                  Motos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={closeMenu}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold"
                >
                  Servicios
                </a>
              </li>
<li>
                <a
                  href="#contáctenos"
                  onClick={handleContactClick}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold"
                >
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
