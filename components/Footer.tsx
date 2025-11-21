import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-white font-bold text-lg">Gilberto Garcia BJJ</h4>
          <p className="text-sm mt-1">Jiu-Jitsu Brasileño en Madrid – Acacias / Embajadores</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm">Profesor Gilberto "Betinho" Garcia Cerqueira</p>
          <p className="text-xs mt-2 opacity-60">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;