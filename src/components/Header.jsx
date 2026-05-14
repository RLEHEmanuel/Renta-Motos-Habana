import { useState } from 'react';
import MotosModal from './MotosModal';

export default function Header({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motosModalOpen, setMotosModalOpen] = useState(false);

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

  const handleMotosClick = () => {
    closeMenu();
    setMotosModalOpen(true);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-2xl fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-widest hover:scale-110 transition duration-500 cursor-pointer font-sans">
          <span className="text-yellow-400 wave-char wave-char-1">E</span>
          <span className="wave-char wave-char-2">-</span>
          <span className="wave-char wave-char-3">M</span>
          <span className="wave-char wave-char-4">o</span>
          <span className="wave-char wave-char-5">t</span>
          <span className="wave-char wave-char-6">o</span>
          <span className="wave-char wave-char-7">r</span>
          <span className="wave-char wave-char-8"> </span>
          <span className="wave-char wave-char-9">R</span>
          <span className="wave-char wave-char-10">e</span>
          <span className="wave-char wave-char-11">n</span>
          <span className="wave-char wave-char-12">t</span>
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
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold font-sans"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  onClick={handleMotosClick}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold font-sans cursor-pointer"
                >
                  Motos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={closeMenu}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold font-sans"
                >
                  Servicios
                </a>
              </li>
<li>
                <a
                  href="#contáctenos"
                  onClick={handleContactClick}
                  className="hover:text-yellow-400 transition duration-300 ease-in-out font-semibold font-sans"
                >
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <MotosModal isOpen={motosModalOpen} onClose={() => setMotosModalOpen(false)} />
    </header>
  )
}
