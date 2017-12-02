import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init()
  }

  init()
  {
    // this.bg = game.add.sprite(0, 0, 'fondo');


    // this.add(this.bg);

    // this.game.add.tween(this).to({ x: '+10', y: '+10'}, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  }

  // update () {
  //   this.angle += 1
  // }
}
