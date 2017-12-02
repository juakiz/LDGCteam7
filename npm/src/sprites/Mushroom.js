import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.init()
  }

  init()
  {
    game.add.tween(this).to({ angle:360, x: '+600'}, 1000, Phaser.Easing.Elastic.In, true, 0, -1, true);
  }

  // update () {
  //   this.angle += 1
  // }
}
