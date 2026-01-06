// src/data/sports.js

// ✅ BASE URL
// Make sure this path matches your Cloudinary folder structure
const CLOUD_ROOT = "https://res.cloudinary.com/didcdkvu7/image/upload/f_auto,q_auto";

export const sportsData = [
  {
    id: 1,
    name: "Cricket",
    // From screenshot: cricket_jgbpbq
    img: `${CLOUD_ROOT}/cricket_jgbpbq.jpg`, 
    type: "Outdoor",
  },
  {
    id: 2,
    name: "Box Cricket",
    // From screenshot: boxcricket_bsmnlq
    img: `${CLOUD_ROOT}/boxcricket_bsmnlq.jpg`,
    type: "Outdoor",
  },
  {
    id: 3,
    name: "Basketball",
    // From screenshot: basketball_sdyn7e
    img: `${CLOUD_ROOT}/basketball_sdyn7e.jpg`,
    type: "Outdoor",
  },
  {
    id: 4,
    name: "Volleyball",
    // From screenshot: volleyball_x95zib
    img: `${CLOUD_ROOT}/volleyball_x95zib.jpg`,
    type: "Outdoor",
  },
  {
    id: 5,
    name: "Futsal",
    // From screenshot: futsal_fwfvfn
    img: `${CLOUD_ROOT}/futsal_fwfvfn.jpg`,
    type: "Outdoor",
  },
  {
    id: 6,
    name: "Hockey",
    // From screenshot: hockey_jiwihd
    img: `${CLOUD_ROOT}/hockey_jiwihd.jpg`,
    type: "Outdoor",
  },
  {
    id: 7,
    name: "Kabaddi",
    // From screenshot: kabaddi_pcmbut
    img: `${CLOUD_ROOT}/kabaddi_pcmbut.jpg`,
    type: "Outdoor",
  },
  {
    id: 8,
    name: "Running",
    // From screenshot: running_quh1ch
    img: `${CLOUD_ROOT}/running_quh1ch.jpg`,
    type: "Outdoor",
  },
  {
    id: 9,
    name: "Javelin Throw",
    // From screenshot: javelin_fkbpz7
    img: `${CLOUD_ROOT}/javelin_fkbpz7.jpg`,
    type: "Outdoor",
  },
  {
    id: 10,
    name: "Carrom",
    // From screenshot: carrom_kwt8yq
    img: `${CLOUD_ROOT}/carrom_kwt8yq.jpg`,
    type: "Indoor",
  },
];