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
// IMPORTANT: Google Drive links (drive.google.com) DO NOT work for website backgrounds because Google blocks them (CORS).
// To use your specific photo, you MUST upload it to an image host like https://imgur.com/upload 
// and use the "Direct Link" (which ends in .jpg or .png).
export const IMAGES = {
  // I have restored a working placeholder so the site is visible.
  // Replace this string ONLY with a direct link from Imgur or similar.
  heroBackground: "https://imgur.com/a/c07WEpv", 
  
  // Suggested: Replace this with your Group Photo URL
  groupPhoto: "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", 
  
  // Other gallery assets
  genericAction: "https://images.unsplash.com/photo-1605296867304-6f2a492818b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  tatami: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
};