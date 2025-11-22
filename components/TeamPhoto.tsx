
import React from 'react';
import { IMAGES } from '../constants';

const TeamPhoto: React.FC = () => {
  return (
    <section className="w-full bg-slate-900 relative">
       {/* Container for the full width image */}
      <div className="w-full h-[50vh] min-h-[400px] relative overflow-hidden">
         <img 
           src={IMAGES.teamPhoto} 
           alt="Equipo Gilberto Garcia Jiu-Jitsu" 
           referrerPolicy="no-referrer"
           className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
         />
         {/* Overlay text */}
         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white/90 text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-2xl uppercase border-b-4 border-blue-600 pb-2">
              Familia BJJ
            </h2>
         </div>
      </div>
    </section>
  );
};

export default TeamPhoto;
