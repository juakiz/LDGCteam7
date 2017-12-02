import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init()
  }

  init()
  {
    this.ui = game.add.sprite(0, 0, 'ui');
    this.add(this.ui);
  }
}
