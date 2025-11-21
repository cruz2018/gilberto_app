import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const galleryImages = [
    { src: IMAGES.groupPhoto, alt: "Grupo de alumnos" },
    { src: IMAGES.tatami, alt: "Tatami de entrenamiento" },
    { src: IMAGES.genericAction, alt: "Entrenamiento técnico" },
    { src: "https://images.unsplash.com/photo-1564415315949-72504ecd756e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", alt: "Detalle cinturón" },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Galería</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Momentos de esfuerzo, aprendizaje y camaradería en nuestro tatami. El Jiu-Jitsu es para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="group relative h-72 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium px-4 py-2 border border-white/50 backdrop-blur-sm rounded-full text-sm">
                  Ver Foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;