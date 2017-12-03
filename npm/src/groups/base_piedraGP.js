import Phaser from 'phaser'
import Unit from './../sprites/unitSP'

export default class extends Phaser.Group {
  constructor ( game ) {
    super(game/* , game.world */)
    this._state = game.state.getCurrentState();
    // this._state.add(this);

    this.UnitCounter = 0;
    
    let piedra = this._state.bgGP.piedra1;    
    this.x = this.game.world.width/2;
    this.y = piedra.y - piedra.height;

    this.leftWeight = 10;
    this.rightWeight = 10;
    this.balance = this.rightWeight - this.leftWeight;

    this.units = {aliens: [], vikings: []};

    this.KeyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.KeyW = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.KeyE = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.KeyI = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
    this.KeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    this.KeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.KeyQ.onDown.add(()=>{this.spawnUnit('pollo');});
    this.KeyW.onDown.add(()=>{this.spawnUnit('slime');});
    this.KeyE.onDown.add(()=>{this.spawnUnit('gusano');});
    this.KeyI.onDown.add(()=>{this.spawnUnit('vikingo1');});
    this.KeyO.onDown.add(()=>{this.spawnUnit('vikingo2');});
    this.KeyP.onDown.add(()=>{this.spawnUnit('vikingo3');});

    console.log(this._state);
    this.init();
  }

  init()
  {
      // WIDTH: 1062
    this.base_piedra = game.add.sprite(0, 0, 'base_piedra');
    this.base_piedra.anchor.set(0.5, 0.6);

    this.add(this.base_piedra);


    // this.angle = -30;
    // this.game.add.tween(this).to({ angle: '+60'}, 10000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    // console.log(this.exists);

    this.loop = this.game.time.events.loop(500, this.setBalance, this);    
  }

  spawnUnit(asset)
  {
    new Unit(game, this, asset);
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
    this.leftWeight += amount;
  }

  setRightWeight(amount)
  {
    this.rightWeight += amount;    
  }
  
  setBalance()
  {
    this.leftWeight = this.rightWeight = 0;
    let allUnits = this.units.aliens.concat(this.units.vikings);
    for(let i = 0; i < allUnits.length; i++)
    {
      // console.log(/* this.setLeftWeight( */allUnits[i].getWeight(/* ) */));
      if(allUnits[i].x < 0)
        this.setLeftWeight(allUnits[i].getWeight());
      else
        this.setRightWeight(allUnits[i].getWeight());
    }

    this.balance = this.rightWeight - this.leftWeight;
    // console.log(this.balance);
    this.balancetween = this.game.add.tween(this).to({ angle: this.balance}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    if(this.angle > 40)
      this.stoneFall(true);
    else if(this.angle < -40)
      this.stoneFall(false);
  }


  stoneFall (positive)
  {
    this.balancetween.stop();
    game.time.events.remove(this.loop);
    this.game.add.tween(this).to({ y: this.game.world.height *2}, 1000, Phaser.Easing.Quadratic.In, true);
  }
}
