import React from 'react';
import { Award, History, MapPin, Users } from 'lucide-react';
import { PROFESSOR_INFO, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Conoce al maestro</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Sobre el Profesor</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.groupPhoto} 
                  alt="Profesor Betinho y alumnos" 
                  className="w-full h-auto object-cover filter hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-white font-bold text-lg border-l-4 border-blue-500 pl-3">GFTeam Madrid</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{PROFESSOR_INFO.name}</h3>
              <p className="text-blue-600 font-medium text-xl mt-1">"{PROFESSOR_INFO.nickname}"</p>
            </div>

            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p>
                Con una trayectoria dedicada a las artes marciales, el Profesor Betinho es un referente de disciplina y técnica. 
                Su enfoque no es solo crear luchadores, sino formar personas a través de los valores del Budo.
              </p>
              <p>
                Afiliado al <strong>Mestre Júlio César Pereira (GFTeam)</strong>, una de las escuelas más prestigiosas del mundo, 
                Betinho trae a Madrid la esencia del Jiu-Jitsu Brasileño auténtico, combinado con su vasta experiencia en 
                Lucha Libre y Judo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 text-slate-900 font-bold">
                  <Award className="mr-2 text-blue-600" size={20} /> Graduaciones
                </div>
                <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                  {PROFESSOR_INFO.ranks.map((rank, i) => (
                    <li key={i}>{rank}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 text-slate-900 font-bold">
                  <History className="mr-2 text-blue-600" size={20} /> Experiencia
                </div>
                <p className="text-sm text-slate-600">{PROFESSOR_INFO.experience}</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 text-slate-900 font-bold">
                  <Users className="mr-2 text-blue-600" size={20} /> Filosofía
                </div>
                <p className="text-sm text-slate-600">{PROFESSOR_INFO.philosophy}</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3 text-slate-900 font-bold">
                  <MapPin className="mr-2 text-blue-600" size={20} /> Ubicación
                </div>
                <p className="text-sm text-slate-600">{PROFESSOR_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;