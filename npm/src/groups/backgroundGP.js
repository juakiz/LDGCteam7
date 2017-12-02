import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init()
  }

  init()
  {
    this.bg = game.add.sprite(0, 0, 'fondo');
    this.piedra1 = game.add.sprite(1280/2, 720, 'piedra_1');
    this.piedra1.anchor.set(0.5,1)

    this.add(this.bg);
    this.add(this.piedra1);

    // this.game.add.tween(this).to({ x: '+10', y: '+10'}, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  }

  // update () {
  //   this.angle += 1
  // }
}
