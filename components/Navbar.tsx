import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre el Profesor', href: '#about' },
    { name: 'Horarios', href: '#schedule' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-wider">GILBERTO GARCIA BJJ</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#schedule"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Reservar Clase
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#schedule"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Reservar Clase
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;