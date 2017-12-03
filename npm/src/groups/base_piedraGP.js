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

    this.KeyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.KeyS = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.KeyD = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.KeyJ = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    this.KeyK = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    this.KeyL = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
    this.KeyA.onDown.add(()=>{this.spawnUnit('pollo');});
    this.KeyS.onDown.add(()=>{this.spawnUnit('slime');});
    this.KeyD.onDown.add(()=>{this.spawnUnit('gusano');});
    this.KeyJ.onDown.add(()=>{this.spawnUnit('vikingo1');});
    this.KeyK.onDown.add(()=>{this.spawnUnit('vikingo2');});
    this.KeyL.onDown.add(()=>{this.spawnUnit('vikingo3');});

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

    this.game.time.events.loop(500, this.setBalance, this);    
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
    this.game.add.tween(this).to({ angle: this.balance}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
    if(this.balance > 40)
      this.stoneFall();
  }


  stoneFall ()
  {
    // let x = ;
    // let y = ;
    // this.game.add.tween(this).to({ x: this.balance, }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
  }
}
