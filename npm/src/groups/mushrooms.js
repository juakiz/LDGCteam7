import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init();
  }

  init()
  {
    let mushroom = new Mushroom({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        asset: 'mushroom',
        maxHP: 100
      })


    this.add(mushroom);
  }
}
