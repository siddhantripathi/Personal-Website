export const CONSTELLATIONS = {
  ursa_major: {
    name: "Ursa Major",
    points: [
      { x: 0.2, y: 0.3 },
      { x: 0.25, y: 0.32 },
      { x: 0.28, y: 0.35 },
      { x: 0.3, y: 0.38 },
      { x: 0.33, y: 0.4 },
      { x: 0.35, y: 0.37 },
      { x: 0.38, y: 0.35 }
    ],
    connections: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
  },
  orion: {
    name: "Orion",
    points: [
      { x: 0.6, y: 0.2 },
      { x: 0.63, y: 0.25 },
      { x: 0.65, y: 0.3 },
      { x: 0.67, y: 0.35 },
      { x: 0.62, y: 0.28 },
      { x: 0.68, y: 0.28 }
    ],
    connections: [[0,1], [1,2], [2,3], [1,4], [4,5]]
  },
  cassiopeia: {
    name: "Cassiopeia",
    points: [
      { x: 0.8, y: 0.15 },
      { x: 0.83, y: 0.18 },
      { x: 0.85, y: 0.15 },
      { x: 0.87, y: 0.18 },
      { x: 0.89, y: 0.15 }
    ],
    connections: [[0,1], [1,2], [2,3], [3,4]]
  },
  cygnus: {
    name: "Cygnus",
    points: [
      { x: 0.4, y: 0.6 },
      { x: 0.43, y: 0.65 },
      { x: 0.46, y: 0.7 },
      { x: 0.42, y: 0.67 },
      { x: 0.44, y: 0.67 }
    ],
    connections: [[0,1], [1,2], [1,3], [1,4]]
  },
  lyra: {
    name: "Lyra",
    points: [
      { x: 0.7, y: 0.5 },
      { x: 0.73, y: 0.53 },
      { x: 0.76, y: 0.51 },
      { x: 0.74, y: 0.55 }
    ],
    connections: [[0,1], [1,2], [1,3]]
  },
  perseus: {
    name: "Perseus",
    points: [
      { x: 0.15, y: 0.7 },
      { x: 0.18, y: 0.73 },
      { x: 0.21, y: 0.75 },
      { x: 0.17, y: 0.76 },
      { x: 0.19, y: 0.78 }
    ],
    connections: [[0,1], [1,2], [1,3], [3,4]]
  }
}; 