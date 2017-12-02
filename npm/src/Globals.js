import UnitInfo from 'obj/unit-info';

export default class Globals {
  constructor() {
    throw new Error('AbstractClassError');
  }
}

// UNIT INFO OBJECT
Globals.OBJ_UNIT_INFO = {
    aliens: {
        //(name, attack, HP, frameInfo)
        pollo:     new UnitInfo('pollo', 2, 50),
        gusano:     new UnitInfo('gusano', 2, 50),
        babosa:     new UnitInfo('babosa', 2, 50)
    },
    vikings: {

    }
};

// // UNIT SPAWN POINTS
// Globals.SPAWN_POINTS = {
//   allies: {
//     archer:   [new Phaser.Point(420, 795)],
//     disciple: [new Phaser.Point(420 + Globals.OBJ_UNIT_INFO.archer.collision_range*1.4, 795 - Globals.OBJ_UNIT_INFO.archer.collision_range*1.4)],
//     stuntank: [new Phaser.Point(420 - Globals.OBJ_UNIT_INFO.stuntank.collision_range*0.7, 795 + Globals.OBJ_UNIT_INFO.stuntank.collision_range*0.7)]
//   },
//   enemies: {
//     deadeye:    [new Phaser.Point(845, 375)],
//     cartillery: [new Phaser.Point(/* -25.98 +  */845 + Globals.OBJ_UNIT_INFO.deadeye.collision_range*1.4,/* +15 +  */375 - Globals.OBJ_UNIT_INFO.deadeye.collision_range*1.4)]
//   }
// };

// // INITIAL SOURCES
// Globals.SOURCES = {
//   crystals: params.starting_crystals,
//   income: params.starting_income
// };
