// src/data/passes.js

// ✅ BASE URL (Pointing to events folder since these are event images)
const CLOUD_ROOT = "https://res.cloudinary.com/didcdkvu7/image/upload/f_auto,q_auto";

export const passes = [
  {
    name: "Musical Night",
    venue: "Infront of Natu building",
    desc: "An electrifying night filled with live bands, soulful music, and high-energy performances that bring the gathering alive.",
    image: `${CLOUD_ROOT}/musicalnight_evbulq.jpg`,
    time: "6:00 PM" 
  },
  {
    name: "Drama",
    venue: "Main Auditorium",
    desc: "Captivating stage performances showcasing powerful storytelling, emotions, and impactful social themes.",
    image: `${CLOUD_ROOT}/drama_rduuiu.jpg`,
    time: "5:30 PM"
  },
  {
    name: "Variety Show",
    venue: "Main Auditorium",
    desc: "A fun-filled showcase of diverse talents including dance, comedy, music, and unique performances by students.",
    image: `${CLOUD_ROOT}/variety_adg2hl.png`, // Note: Changed from btechdance to variety.png based on name, check if you prefer btechdance
    time: "6:00 PM"
  },
  {
    name: "Refreshment",
    venue: "Infront of ENTC Extention",
    desc: "A dedicated refreshment area offering a wide range of food and beverages to keep the energy high throughout the event.",
    // Ensure 'refreshment.jpeg' is uploaded to the 'events' folder in Cloudinary
    image: `${CLOUD_ROOT}/refreshment_jfgadr.jpeg`, 
    time: "All Day"
  },
];