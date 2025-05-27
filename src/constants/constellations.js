export const CONSTELLATIONS = {
  andromeda: {
    name: "Andromeda",
    points: [
      { x: 0.138, y: 0.577 },
      { x: 0.228, y: 0.637 },
      { x: 0.318, y: 0.697 },
      { x: 0.408, y: 0.667 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  aquarius: {
    name: "Aquarius",
    points: [
      { x: 0.539, y: 0.444 },
      { x: 0.599, y: 0.504 },
      { x: 0.659, y: 0.444 },
      { x: 0.719, y: 0.624 },
      { x: 0.779, y: 0.564 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4]
    ],
  },
  aries: {
    name: "Aries",
    points: [
      { x: 0.518, y: 0.184 },
      { x: 0.598, y: 0.214 },
      { x: 0.678, y: 0.174 },
      { x: 0.758, y: 0.2 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  bootes: {
    name: "Bootes",
    points: [
      { x: 0.069, y: 0.052 },
      { x: 0.169, y: 0.032 },
      { x: 0.269, y: 0.042 },
      { x: 0.259, y: 0.122 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0]
    ],
  },
  cancer: {
    name: "Cancer",
    points: [
      { x: 0.742, y: 0.502 },
      { x: 0.762, y: 0.532 },
      { x: 0.782, y: 0.512 },
      { x: 0.772, y: 0.482 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  capricorn: {
    name: "Capricorn",
    points: [
      { x: 0.441, y: 0.648 },
      { x: 0.501, y: 0.688 },
      { x: 0.561, y: 0.708 },
      { x: 0.621, y: 0.678 },
      { x: 0.681, y: 0.716 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ],
  },
  cassiopeia: {
    name: "Cassiopeia",
    points: [
      { x: 0.263, y: 0.127 },
      { x: 0.323, y: 0.217 },
      { x: 0.383, y: 0.127 },
      { x: 0.443, y: 0.217 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  cygnus: {
    name: "Cygnus",
    points: [
      { x: 0.844, y: 0.114 },
      { x: 0.844, y: 0.474 },
      { x: 0.844, y: 0.834 },
      { x: 0.944, y: 0.474 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [1, 3]
    ],
  },
  draco: {
    name: "Draco",
    points: [
      { x: 0.275, y: 0.719 },
      { x: 0.335, y: 0.779 },
      { x: 0.395, y: 0.739 },
      { x: 0.455, y: 0.809 },
      { x: 0.515, y: 0.769 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ],
  },
  gemini: {
    name: "Gemini",
    points: [
      { x: 0.08, y: 0.75 },
      { x: 0.08, y: 0.85 },
      { x: 0.16, y: 0.75 },
      { x: 0.16, y: 0.85 }
    ],
    connections: [
      [0, 1],
      [2, 3],
      [1, 3]
    ],
  },
  leo: {
    name: "Leo",
    points: [
      { x: 0.589, y: 0.094 },
      { x: 0.599, y: 0.134 },
      { x: 0.719, y: 0.154 },
      { x: 0.769, y: 0.114 },
      { x: 0.819, y: 0.094 },
      { x: 0.869, y: 0.114 },
      { x: 0.929, y: 0.094 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ],
  },
  libra: {
    name: "Libra",
    points: [
      { x: 0.192, y: 0.448 },
      { x: 0.212, y: 0.478 },
      { x: 0.312, y: 0.478 },
      { x: 0.332, y: 0.448 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  lyra: {
    name: "Lyra",
    points: [
      { x: 0.46, y: 0.83 },
      { x: 0.469, y: 0.93 },
      { x: 0.541, y: 0.93 },
      { x: 0.55, y: 0.83 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0]
    ],
  },
  orion: {
    name: "Orion",
    points: [
      // Shoulders (Betelgeuse & Bellatrix)
      { x: 0.72, y: 0.18 },   // Betelgeuse (left shoulder) 0
      { x: 0.79, y: 0.2 },   // Bellatrix (right shoulder) 1
  
      // Belt (Alnitak, Alnilam, Mintaka)
      { x: 0.73, y: 0.25 },  // Left belt star 2
      { x: 0.75, y: 0.26 },  // Center belt star 3
      { x: 0.77, y: 0.27 },  // Right belt star 4
  
      // Legs (Rigel & Saiph)
      { x: 0.78, y: 0.34 },  // Rigel (right foot) 5
      { x: 0.72, y: 0.32 },  // Saiph (left foot) 6
  
      
    ],
    connections: [
     
      [0, 1],  // Shoulders correct
      [0, 2],  // Left shoulder to left belt correct
      [2, 3],  // Belt stars correct 
      [3, 4],  // Belt stars correct
      [4, 1],  // Right belt to right shoulder correct
      [2, 6],  // Left belt to left foot
      [4, 5],  // Right belt to right foot
      [5, 6]   //feet correct
    ], 
  },
  perseus: {
    name: "Perseus",
    points: [
      { x: 0.633, y: 0.301 },
      { x: 0.643, y: 0.341 },
      { x: 0.673, y: 0.351 },
      { x: 0.703, y: 0.331 },
      { x: 0.733, y: 0.381 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ],
  },
  pegasus: {
    name: "Pegasus",
    points: [
      { x: 0.723, y: 0.685 },
      { x: 0.723, y: 0.815 },
      { x: 0.853, y: 0.815 },
      { x: 0.853, y: 0.685 },
      { x: 0.803, y: 0.755 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 3],
      [2, 4]
    ],
  },
  pisces: {
    name: "Pisces",
    points: [
      { x: 0.125, y: 0.525 },
      { x: 0.145, y: 0.545 },
      { x: 0.205, y: 0.525 },
      { x: 0.265, y: 0.545 },
      { x: 0.325, y: 0.525 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ],
  },
  sagittarius: {
    name: "Sagittarius",
    points: [
      { x: 0.419, y: 0.521 },
      { x: 0.479, y: 0.581 },
      { x: 0.499, y: 0.651 },
      { x: 0.579, y: 0.591 },
      { x: 0.679, y: 0.551 },
      { x: 0.599, y: 0.621 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5]
    ],
  },
  scorpio: {
    name: "Scorpio",
    points: [
      { x: 0.559, y: 0.731 },
      { x: 0.619, y: 0.791 },
      { x: 0.659, y: 0.701 },
      { x: 0.739, y: 0.761 },
      { x: 0.659, y: 0.651 },
      { x: 0.719, y: 0.791 },
      { x: 0.779, y: 0.721 },
      { x: 0.839, y: 0.791 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7]
    ],
  },
  taurus: {
    name: "Taurus",
    points: [
      { x: 0.198, y: 0.314 },
      { x: 0.238, y: 0.404 },
      { x: 0.318, y: 0.374 },
      { x: 0.358, y: 0.254 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3]
    ],
  },
  ursa_major: {
    name: "Ursa Major",
    points: [
      // Bowl of the dipper
      { x: 0.185, y: 0.12 },  // Dubhe (bottom left of bowl) 0
      { x: 0.18, y: 0.08 },  // Merak (top left of bowl) 1
      { x: 0.22, y: 0.085 }, // Phecda (top right of bowl) 2
      { x: 0.21, y: 0.12 },  // Megrez (bottom right of bowl) 3
      
      // Handle of the dipper
      { x: 0.23, y: 0.07 },  // Alioth (first handle star) 4
      { x: 0.27, y: 0.065},  // Mizar (middle handle star) 5
      { x: 0.31, y: 0.071 }   // Alkaid (end of handle) 6
    ],
    connections: [
      // Bowl connections
      [0, 1],  // Left side of bowl
      [1, 2],  // Bottom of bowl
      [2, 3],  // Right side of bowl
      [3, 0],  // Top of bowl
      
      // Handle connections
      [4, 2],  // Bowl to handle
      [4, 5],  // Handle middle
      [5, 6]   // Handle end
    ],
  },
  ursa_minor: {
    name: "Ursa Minor",
    points: [
      { x: 0.503, y: 0.233 },
      { x: 0.543, y: 0.293 },
      { x: 0.583, y: 0.318 },
      { x: 0.623, y: 0.293 },
      { x: 0.663, y: 0.268 },
      { x: 0.703, y: 0.293 },
      { x: 0.743, y: 0.318 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ],
  },
  virgo: {
    name: "Virgo",
    points: [
      { x: 0.764, y: 0.58 },
      { x: 0.824, y: 0.61 },
      { x: 0.864, y: 0.68 },
      { x: 0.904, y: 0.62 },
      { x: 0.944, y: 0.66 }
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4]
    ],
  }
};

