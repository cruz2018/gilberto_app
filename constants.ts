
export const PROFESSOR_INFO = {
  name: "Gilberto Garcia Cerqueira",
  nickname: "Professor Betinho",
  ranks: [
    "Cinturón negro de Jiu-Jitsu (3º grado)",
    "3º Dan en Lucha Libre",
    "3º Dan en Judo"
  ],
  experience: "Más de 30 años practicando y más de 20 años enseñando.",
  affiliation: "Mestre Júlio César Pereira (GFTeam)",
  location: "Madrid – Zona Acacias / Embajadores",
  philosophy: "Enfoque técnico, eficiente, basado en fundamentos, defensa personal y evolución del practicante."
};

export const SCHEDULE_DATA = [
  { day: "Lunes", time: "19:00 a 20:30", type: "Jiu-Jitsu / Grappling" },
  { day: "Miércoles", time: "19:00 a 20:30", type: "Jiu-Jitsu / Grappling" },
  { day: "Viernes", time: "19:00 a 20:30", type: "Jiu-Jitsu / Grappling" },
];

export const BENEFITS_LIST = [
  { title: "Mejora Física", description: "Aumenta tu resistencia, fuerza y flexibilidad de forma funcional." },
  { title: "Autodefensa", description: "Aprende técnicas reales para protegerte en situaciones de riesgo." },
  { title: "Autoconfianza", description: "Supera retos en el tatami y traslada esa seguridad a tu vida diaria." },
  { title: "Reducción de Estrés", description: "Desconecta de la rutina y canaliza tu energía positivamente." },
  { title: "Desarrollo Mental", description: "Mejora tu concentración, disciplina y capacidad de resolución de problemas." },
];

// IMAGES CONSTANTS
// IMPORTANT: Google Drive links DO NOT work for websites. Google blocks them.
// You MUST upload your photos to https://imgur.com/upload and use the "Direct Link" (ending in .jpg/.png).
export const IMAGES = {
  // Hero Background: Action shot of guys training/grappling
  heroBackground: "https://images.unsplash.com/photo-1605296867304-6f2a492818b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
  
  // Team Photo (Full width banner) - User provided image "gil2"
  teamPhoto: "https://i.imgur.com/LKq73Wi.jpeg",

  // Professor/Group Photo (About section) - Using an action shot to avoid duplication
  groupPhoto: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  
  // Other gallery assets
  genericAction: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  tatami: "https://images.unsplash.com/photo-1564415315949-72504ecd756e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};
