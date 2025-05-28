export const CONSTELLATIONS = {



  cancer: {
    name: "Cancer",
    points: [
      { x: 0.75, y: 0.5 }, //0
      { x: 0.755, y: 0.45 }, //1
      { x: 0.757, y: 0.40 }, //2
      { x: 0.755, y: 0.35 }, //3
      { x: 0.79, y: 0.55 } //4
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4]
    ],
  },
  capricorn: {
    name: "Capricorn",
    points: [
      { x: 0.6, y: 0.58 }, //center 0
      { x: 0.56, y: 0.575 }, //left 1
      { x: 0.545, y: 0.570 }, //left 2 
      { x: 0.58, y: 0.67 }, //going down 3
      { x: 0.59, y: 0.68 }, // going down 4
      { x: 0.610, y: 0.69 }, // going down 5
      { x: 0.615, y: 0.68}, // going up 6
      { x: 0.62, y: 0.66 }, // going up 7
      { x: 0.63, y: 0.60 }, // going up 8
      { x: 0.632, y: 0.54 }, // final connection 9
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [0,9]
    ],
  },
  cassiopeia: {
    name: "Cassiopeia",
    points: [
      { x: 0.25, y: 0.2 }, //0
      { x: 0.3, y: 0.25 }, //1
      { x: 0.32, y: 0.22 }, //2
      { x: 0.36, y: 0.26 }, //3
      { x: 0.4, y: 0.22 } //4
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ],
  },
  cygnus: {
    name: "Cygnus",
    points: [
      { x: 0.92, y: 0.4 },    // top 0 
      { x: 0.94, y: 0.45 },   // middle 1 
      { x: 0.88, y: 0.49 },   // left 1 2
      { x: 0.85, y: 0.515 },  // left 2 3
      { x: 0.97, y: 0.42 },   // right 1 4
      { x: 0.99, y: 0.38 },   // right 2 5
      { x: 0.95, y: 0.48 },   // bottom 1 6
      { x: 0.965, y: 0.53 },  // bottom 2 7
      { x: 0.97, y: 0.55 }    // bottom 3 8
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4],
      [4, 5],
      [1, 6],
      [6, 7],
      [7, 8]
    ],
  },

  gemini: {
    name: "Gemini",
    points: [
      { x: 0.06, y: 0.85 }, //1
      { x: 0.08, y: 0.80 }, //2
      { x: 0.06, y: 0.7 }, //3
      { x: 0.04, y: 0.68 }, //4
      { x: 0.02, y: 0.65 }, //5
      { x: 0.025, y: 0.60 }, //6
      { x: 0.039, y: 0.59 }, //7
      { x: 0.055, y: 0.60 }, //8
      { x: 0.075, y: 0.68 }, //9
      { x: 0.085, y: 0.72 }, //10
      { x: 0.1, y: 0.8 },
      { x: 0.12, y: 0.81 } //11
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 11]
    ],
  },
  leo: {

    name: "Leo",

    points: [

      { x: 0.27, y: 0.30 }, // top from right (Alpha Leonis) 0
      { x: 0.265, y: 0.28 }, //  absolute top 1
      { x: 0.22, y: 0.33 }, //2nd from top (Zeta Leonis) 2
      { x: 0.225, y: 0.36 }, // connection to body (Mu Leonis) 3
      { x: 0.16, y: 0.37 }, // left body 1 Leonis 4
      { x: 0.12, y: 0.4 }, // left body 2 (Beta Leonis) 5
      { x: 0.164, y: 0.41 },  // left body 3 Leonis 6
      { x: 0.25, y: 0.42 }, // left body 4 (Beta Leonis) 7
      { x: 0.24, y: 0.40 } // left body 5(Beta Leonis) 8

    ],

    connections: [

      [0, 1],

      [1, 2],

      [2, 3],

      [3, 4],

      [4, 5],

      [5, 6],

      [6, 7],

      [7, 8],
      [8,3]

    ],

  },
  libra: {
    name: "Libra",
    points: [
      { x: 0.815, y: 0.5 }, //0 
      { x: 0.81, y: 0.45 }, //1
      { x: 0.83, y: 0.40 }, //2
      { x: 0.85, y: 0.46 }, //3
      { x: 0.835, y: 0.49 }//4
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [1,3]
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
  
      { x: 0.7, y: 0.15 }, // 7 arm connection
      { x: 0.72, y: 0.10 }, // 8 
      { x: 0.75, y: 0.12 }, // 9
      { x: 0.85, y: 0.27 }, // 10 bow
      { x: 0.85, y: 0.20 }, // 11
      { x: 0.84, y: 0.16 }, // 12
      { x: 0.83, y: 0.33 }, // 13
      { x: 0.81, y: 0.35}, // 14
    ],
    connections: [
     
      [0, 1],  // Shoulders correct
      [0, 2],  // Left shoulder to left belt correct
      [2, 3],  // Belt stars correct 
      [3, 4],  // Belt stars correct
      [4, 1],  // Right belt to right shoulder correct
      [2, 6],  // Left belt to left foot
      [4, 5],  // Right belt to right foot
      [5, 6],   //feet correct
      [0, 7],
      [7, 8],
      [7,9],
      [1, 10],
      [10, 11],
      [11, 12],
      [10, 13],
      [13, 14]
    ], 
  },

  pegasus: {
    name: "Pegasus",
    points: [
      { x: 0.4, y: 0.4 }, //top left 0
      { x: 0.5, y: 0.41 }, //top right 1
      { x: 0.41, y: 0.55 }, //bottom left 2
      { x: 0.515, y: 0.56 }, //bottom right 3
      { x: 0.55, y: 0.38 }, //head 1 4
      { x: 0.58, y: 0.32 }, //head 2 5
      { x: 0.62, y: 0.28 }, //head 3 6
      { x: 0.65, y: 0.35 }, //head 4 7
      { x: 0.53, y: 0.56 }, //legleft 1 8
      { x: 0.55, y: 0.56 }, //legleft 2 9
      { x: 0.59, y: 0.59 }, //legleft 3 10
      { x: 0.575, y: 0.64 }, //legleft 4 11
      { x: 0.55, y: 0.58 }, //legright 1 12
      { x: 0.565, y: 0.6 }, //legright 2 13
      { x: 0.568, y: 0.64 } //legright 3 14
    ],
    connections: [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0],
      [1,4],
      [4, 5],
      [5, 6],
      [6, 7],
      [3, 8],
      [8, 9],
      [9, 10],
      [10, 11],
      
      [3, 12],
      [12, 13],
      [13, 14],
     
      

    ],
  },
  pisces: {
    name: "Pisces",
    points: [
      { x: 0.225, y: 0.5 },//0
      { x: 0.220, y: 0.52 },//1
      { x: 0.223, y: 0.54 },//2
      { x: 0.210, y: 0.565 },//3
      { x: 0.190, y: 0.585 },//4
      { x: 0.170, y: 0.605 },//5
      { x: 0.190, y: 0.600},//6
      { x: 0.210, y: 0.605 },//7
      { x: 0.220, y: 0.610 },//8
      { x: 0.230, y: 0.615 },//9
      { x: 0.235, y: 0.605 },//10
      { x: 0.245, y: 0.618 },//11
      { x: 0.240, y: 0.629 },//12
      { x: 0.230, y: 0.628 }//13
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 2],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 11],
      [11, 12],
      [12, 13],
      [13, 9]

    ],
  },
 
  scorpio: {
    name: "Scorpio",
    points: [
      { x: 0.5, y: 0.65 }, //top left head 0
      { x: 0.505, y: 0.70 }, //center head 1
      { x: 0.505, y: 0.73 }, //right of head 2
      { x: 0.508, y: 0.75 },//rightmost of head 3
      { x: 0.48, y: 0.75 },// below center head 4
      { x: 0.47, y: 0.76 },//2nd below center head 5
      { x: 0.46, y: 0.79 },//3rd below center head 6
      { x: 0.42, y: 0.83 },// 4th below center head 7  
      { x: 0.415, y: 0.86 }, // 5th below center head 8  
      { x: 0.41, y: 0.89 }, // 6th below center head 9
      { x: 0.39, y: 0.91 }, // 7th below center head 10
      { x: 0.37, y: 0.92 }, // 8th below center head 11
      { x: 0.362, y: 0.93 }, // 9th below center head 12
      { x: 0.36, y: 0.87 }, // 10th below center head 13
      { x: 0.375, y: 0.83 }, // 11th below center head 14
      { x: 0.385, y: 0.85}, // 12th below center head 15
      { x: 0.392, y: 0.80} // 13th below center head 16
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [10, 11],
      [11, 12],
      [12, 13],
      [13, 14],
      [14, 15],
      [15, 16]
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
      { x: 0.45, y: 0.233 }, //0
      { x: 0.44, y: 0.273 }, //1
      { x: 0.49, y: 0.283 }, //2
      { x: 0.50, y: 0.253 },// 3 
      { x: 0.44, y: 0.2 }, //4
      { x: 0.45, y: 0.16 },//5
      { x: 0.455, y: 0.14 }//6
    ],
    connections: [
      [0, 1],
      [0, 3],
      [1, 2],
      [2, 3],
      [0, 4],
      [4, 5],
      [5, 6]
    ],
  },


  virgo: {
      name: "Virgo",
      points: [
        // Head & torso (Y-shape)
        { x: 0.95, y: 0.72 },   // 0: Head (Zavijava) - shifted from 0.8
        { x: 0.91, y: 0.7 },   // 1: Left head (Porrima) - shifted from 0.76
        { x: 0.93, y: 0.75 },   // 2: Right shoulder (Auva) - shifted from 0.78
        { x: 0.89, y: 0.76 },   // 3: Waist (Vindemiatrix) - shifted from 0.74
        { x: 0.85, y: 0.77 },   // 4: Hip (Spica - brightest star) - shifted from 0.7
   
        // Arms
        { x: 0.80, y: 0.72 },   // 5: Left arm - shifted from 0.65
        { x: 0.79, y: 0.69 },   // 6:left arm 2 - shifted from 0.64
        { x: 0.79, y: 0.8 },   // 7: right arm - shifted from 0.64
        { x: 0.75, y: 0.85 }, // 8 right arm 2 - shifted from 0.6
   
        //legs
        { x: 0.70, y: 0.76 },   // 9 waist to both - shifted from 0.55
        { x: 0.65, y: 0.72 },   // 10: Left leg - shifted from 0.50
        { x: 0.63, y: 0.73}, //11 left leg 2 - shifted from 0.45
        { x: 0.63, y: 0.81 }, //12 right leg - shifted from 0.48
        { x: 0.61, y: 0.82 } //13 right leg 2 - shifted from 0.46
      ],
    connections: [
      // Core Y-shape
      [0, 1],    // Head to left shoulder
      [0, 2],    // Head to right shoulder
      [1, 3],    // Left shoulder to waist
      [2, 3],    // Right shoulder to waist
      [3, 4],    // Waist to Spica (hip)
  
      // Arms
      [4, 5],    // Left shoulder to left arm
      [5, 6],    // Right shoulder to right arm
      [4, 7],
      [7, 8],

      //waist to both
      [4, 9],
      [9, 10],
      [10, 11],
      [9, 12],
      [12, 13]
    ],
  }
};

