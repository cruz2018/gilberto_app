import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { SCHEDULE_DATA } from '../constants';

const Schedule: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    day: 'Lunes'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log("Booking requested:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', day: 'Lunes' });
  };

  return (
    <section id="schedule" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Horarios de Clase</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Entrena con consistencia y disciplina. Nuestras clases están diseñadas para todos los niveles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Schedule Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-slate-900 p-4">
              <h3 className="text-white font-bold text-xl flex items-center justify-center">
                <Calendar className="mr-2" /> Horario Semanal
              </h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 border-b-2 border-slate-200 font-semibold text-slate-700">Día</th>
                      <th className="p-4 border-b-2 border-slate-200 font-semibold text-slate-700">Hora</th>
                      <th className="p-4 border-b-2 border-slate-200 font-semibold text-slate-700">Actividad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCHEDULE_DATA.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="p-4 border-b border-slate-100 text-slate-900 font-medium">{item.day}</td>
                        <td className="p-4 border-b border-slate-100 text-blue-600 font-medium">{item.time}</td>
                        <td className="p-4 border-b border-slate-100 text-slate-600">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 flex items-center">
                  <User className="mr-2" size={16} />
                  <strong>Clases Privadas:</strong> Disponibles mediante cita previa. Perfectas para perfeccionar detalles técnicos o aprender a tu ritmo.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-blue-600 p-4">
              <h3 className="text-white font-bold text-xl flex items-center justify-center">
                <Clock className="mr-2" /> Reservar Clase de Prueba
              </h3>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-slate-600">Te contactaremos pronto para confirmar tu asistencia.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="day" className="block text-sm font-medium text-slate-700 mb-1">Día Preferido</label>
                    <select
                      id="day"
                      name="day"
                      value={formData.day}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      {SCHEDULE_DATA.map(item => (
                        <option key={item.day} value={item.day}>{item.day} - {item.time}</option>
                      ))}
                      <option value="Privada">Clase Privada (Consultar)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Reservar Ahora
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;