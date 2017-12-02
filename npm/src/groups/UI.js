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
    this.debugKeyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.debugKeyQ.onDown.add(this.pene, this);

  }

  pene()
  {
    //var qKey;
    //qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    game.camera.shake(0.05, 500);
    //  this.game.add.tween(this).to({ x: '+10', y: '+10'}, 100, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
  }
}
