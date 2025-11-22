
import React from 'react';
import { CheckCircle, ArrowDown } from 'lucide-react';
import { BENEFITS_LIST, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBackground} 
          alt="Background Texture" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text readability over the logo/poster */}
        <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 animate-fade-in-up">
          Madrid - Acacias / Embajadores
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          GILBERTO GARCIA <span className="text-blue-500 block mt-2">JIU-JITSU</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubre el arte suave con el <strong>Profesor Betinho</strong>. 
          Más de 30 años de experiencia forjando carácter, técnica y disciplina en el tatami.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#schedule" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Ver Horarios
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm"
          >
            Contactar
          </a>
        </div>

        {/* Benefits Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto border-t border-white/10 pt-8">
          {BENEFITS_LIST.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex items-center mb-2 text-blue-400">
                <CheckCircle size={20} className="mr-2" />
                <h3 className="font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
