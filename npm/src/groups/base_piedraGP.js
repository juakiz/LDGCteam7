import Phaser from 'phaser'
import Unit from './../sprites/unitSP'

export default class extends Phaser.Group {
  constructor ( game ) {
    super(game, game.world)

    this._state = game.state.getCurrentState();

    let piedra = this._state.bgGP.piedra1;    
    this.x = this.game.world.width/2;
    this.y = piedra.y - piedra.height;

    this.leftWeight = 0;
    this.rightWeight = 0;
    this.balance = 0;

    this.units = {aliens: [], vikings: []}

    // this.KeyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    // this.KeyW = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    // this.KeyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    // this.KeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    // this.KeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    // this.KeyL = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
    // this.KeyQ.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    // this.KeyW.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    // this.KeyA.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    // this.KeyP.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    // this.KeyO.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});
    // this.KeyL.onDown.add(()=>{this.pollo.animations.play('pollo_ataque', 10);});

    console.log(this._state);
    this.init()
  }

  init()
  {
      // WIDTH: 1062
    this.base_piedra = game.add.sprite(0, 0, 'base_piedra');
    this.base_piedra.anchor.set(0.5, 0.6);
    // console.log(this.base_piedra.width);

    this.unit = new Unit(game, this, -this.base_piedra.width/2, -this.base_piedra.height * this.base_piedra.anchor.y, 'pollo');
    this.unit.x += this.unit.width/2;
    
    this.add(this.base_piedra);
    this.add(this.unit);
    // this.add(this.pollo);

    // this.angle = -30;
    // this.game.add.tween(this).to({ angle: '+60'}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    console.log(this.exists);
    
  }

  update()
  {
      console.log("HOLA")
    //   if(this.unit)
    //     this.unit.x += 0.1;
  }

  addAlien(asset)
  {
        let unit = new Unit(game, this, -this.base_piedra.width/2, -this.base_piedra.height * this.base_piedra.anchor.y, asset);
        unit.x += this.unit.width/2;
        this.add(unit);
        this.units.aliens.push(unit);
  }

  addViking(asset)
  {
    let unit = new Unit(game, this, this.base_piedra.width/2, -this.base_piedra.height * this.base_piedra.anchor.y, asset);
    unit.x -= this.unit.width/2;
    this.add(unit);
    this.units.vikings.push(unit);
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
