import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)

    this.init()
  }

  
  init()
  {
    this.rayoizq = game.add.sprite(-2, 55, 'rayo');
    this.ui = game.add.sprite(0, 0, 'ui');
    this.rayoder = game.add.sprite(1126, 55, 'rayo');
    this.escizq = game.add.sprite(148, 58, 'escudo');
    this.escder = game.add.sprite(915, 58, 'escudo');
    this.empujd = game.add.sprite(737, 56, 'empujd');
    this.empuji = game.add.sprite(358, 56, 'empuji');
    this.rayoizq.alpha=0;
    this.rayoder.alpha=0;
    this.escizq.alpha=0;
    this.escder.alpha=0;
    this.empuji.alpha=0;
    this.empujd.alpha=0;
    this.add(this.ui);
    this.add(this.rayoizq);
    this.add(this.rayoder);
    this.add(this.escizq);
    this.add(this.escder);
    this.add(this.empujd);
    this.add(this.empuji);

    this.debugKeyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.debugKeyQ.onDown.add(()=>{
      this.rayoizq.alpha=1;
      }, this);
    this.debugKeyQ.onUp.add(()=>{
    this.rayoizq.alpha=0;
      }, this);
    
    this.debugKeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.debugKeyP.onDown.add(()=>{
      this.rayoder.alpha=1;
      }, this);
    this.debugKeyP.onUp.add(()=>{
    this.rayoder.alpha=0;
      }, this);

    this.debugKeyW = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.debugKeyW.onDown.add(()=>{
      this.escizq.alpha=1;
      }, this);
    this.debugKeyW.onUp.add(()=>{
    this.escizq.alpha=0;
      }, this);
    
    this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    this.debugKeyO.onDown.add(()=>{
      this.escder.alpha=1;
      }, this);
    this.debugKeyO.onUp.add(()=>{
    this.escder.alpha=0;
      }, this);

    this.debugKeyE = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.debugKeyE.onDown.add(()=>{
      this.empuji.alpha=1;
      }, this);
    this.debugKeyE.onUp.add(()=>{
    this.empuji.alpha=0;
      }, this);

    this.debugKeyI = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
    this.debugKeyI.onDown.add(()=>{
      this.empujd.alpha=1;
      }, this);
    this.debugKeyI.onUp.add(()=>{
    this.empujd.alpha=0;
      }, this);


    
  }
}
