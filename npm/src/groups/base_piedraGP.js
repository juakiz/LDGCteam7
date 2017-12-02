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
    this.balance = 0;

    console.log(this._state);
    this.init()
  }

  init()
  {
      // WIDTH: 1062
    this.base_piedra = game.add.sprite(0, 0, 'base_piedra');
    this.base_piedra.anchor.set(0.5, 0.6);
    // console.log(this.base_piedra.width);

    this.pollo = game.add.sprite(0, -this.base_piedra.height * this.base_piedra.anchor.y, 'pollo_ataque');
    this.pollo.anchor.set(0.5,1);
    this.pollo.animations.add('pollo_ataque');
    this.pollo.animations.add('pollo_caminar');
    this.KeyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.KeyZ = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
    this.KeyA.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    this.KeyZ.onDown.add(()=>{this.pollo.animations.play('pollo_caminar', 10);});
    
    
    // this.pollo.animations.play('attack', 10, true);


    this.add(this.base_piedra);
    this.add(this.pollo);

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
  
  setBalance()
  {
    this.balance = this.rightWeight - this.leftWeight;
  }


  update () {
    // this.angle += 1
  }
}
