import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init()
  }

  init()
  {
    this.base_piedra = game.add.sprite(this.game.world.width/2, this.game.world.height/2, 'base_piedra');
    this.base_piedra.anchor.set(0.5, 1);

    this.add(this.base_piedra);

    // this.game.add.tween(this).to({ x: '+10', y: '+10'}, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  }

  // update () {
  //   this.angle += 1
  // }
}
