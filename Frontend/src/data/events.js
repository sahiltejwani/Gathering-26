// src/data/events.js

// ✅ BASE URL
// Make sure your images are in the folder: coep-gathering-2026/events
const CLOUD_ROOT = "https://res.cloudinary.com/didcdkvu7/image/upload/f_auto,q_auto";
export const events = [
  {
    id: 1,
    text: "AnC Exhibition",
    description: "A creative exhibition showcasing art, creativity, and innovative projects by students across various domains.",
    // Ensure file is named 'anc' in Cloudinary
    image: `${CLOUD_ROOT}/anc_xgq1u5.jpeg`, 
  },
  {
    id: 2,
    text: "Drama",
    description: "Powerful theatrical performances portraying stories, emotions, and social messages through stage acting.",
    image: `${CLOUD_ROOT}/drama_rduuiu.jpg`,
  },
  {
    id: 3,
    text: "Traditional Day",
    description: "A vibrant celebration of culture where students wear traditional attire and embrace heritage and diversity.",
    image: `${CLOUD_ROOT}/traditionalday_jgqwds.png`,
  },
  {
    id: 4,
    text: "Variety Show",
    description: "An entertaining mix of performances including singing, dancing, comedy, and unique talents.",
    image: `${CLOUD_ROOT}/variety_adg2hl.png`,
  },
  {
    id: 5,
    text: "Musical Night",
    description: "An electrifying night filled with live music, bands, and performances that set the stage on fire.",
    image: `${CLOUD_ROOT}/musicalnight_evbulq.jpg`,
  },
  {
    id: 6,
    text: "Kavya",
    description: "A soulful poetry and literature event celebrating words, emotions, and artistic expression.",
    image: `${CLOUD_ROOT}/kavya_uobqxh.jpg`,
  },
  {
    id: 7,
    text: "Bike Show",
    description: "A thrilling showcase of powerful bikes, stunts, and custom builds by biking enthusiasts.",
    image: `${CLOUD_ROOT}/bikeshow_hd0coj.jpg`,
  },
  {
    id: 8,
    text: "B.Tech Dance",
    description: "High-energy dance performances by B.Tech students featuring various dance styles and themes.",
    image: `${CLOUD_ROOT}/btechdance_bfmmvd.png`,
  },
  {
    id: 9,
    text: "Faculty Gathering",
    description: "A warm and engaging event celebrating the bond between faculty members with performances and interactions.",
    image: `${CLOUD_ROOT}/facultygathering_tkaqf8.png`,
  },
  {
    id: 10,
    text: "Inauguration Shabd",
    description: "The formal inauguration ceremony marking the beginning of the gathering with inspiring words and traditions.",
    image: `${CLOUD_ROOT}/inag_rh0ngn.png`,
  },
];