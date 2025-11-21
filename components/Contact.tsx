import React from 'react';
import { Mail, MapPin, Instagram, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-slate-400">¿Tienes dudas? Estamos aquí para ayudarte a empezar tu camino.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Información de Contacto</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Teléfono / WhatsApp</h4>
                <p className="text-slate-300">+34 600 000 000</p> {/* Placeholder as per prompt */}
                <p className="text-xs text-slate-500 mt-1">Lunes a Viernes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-slate-300">contacto@gilbertogarcia.com</p> {/* Placeholder */}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                <Instagram size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Instagram</h4>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">@profesor_betinho_bjj</a> {/* Placeholder */}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-lg text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Ubicación</h4>
                <p className="text-slate-300">Zona Acacias / Embajadores</p>
                <p className="text-slate-300">Madrid, España</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-slate-900 rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Asunto</label>
                <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-colors" placeholder="Información sobre clases..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:translate-y-[-2px]">
                <span>Enviar Mensaje</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;