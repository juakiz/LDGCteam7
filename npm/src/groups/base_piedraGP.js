import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ( game ) {
    super(game)

    this._state = game.state.getCurrentState();

    let piedra = this._state.bgGP.piedra1;    
    this.x = this.game.world.width/2;
    this.y = piedra.y - piedra.height;

    this.leftWeight = 0;
    this.rightWeight = 0;

    console.log(this._state);
    this.init()
  }

  init()
  {
      // WIDTH: 1062
    this.base_piedra = game.add.sprite(0, 0, 'base_piedra');
    this.base_piedra.anchor.set(0.5, 0.6);
    // console.log(this.base_piedra.width);

    this.add(this.base_piedra);

    // this.angle = -30;
    // this.game.add.tween(this).to({ angle: '+60'}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  }

  setAngle(newAngle)
  {
    this.game.add.tween(this).to({ angle: newAngle}, 50, Phaser.Easing.Sinusoidal.InOut, true);
  }

  getAngle()
  {
      return this.angle;
  }

  setLeftWeight(amount)
  {
    this.leftWeight = amount;
  }

  setRightWeight(amount)
  {
    this.rightWeight = amount;    
  }
  addU
  nit()
  {

  }

  update () {
    // this.angle += 1
  }
}
