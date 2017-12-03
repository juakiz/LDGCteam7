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
    this.polloq = game.add.sprite(30, 620, 'polloicon');
    this.polloqo = game.add.sprite(30, 620, 'polloicon1');
    this.calaveraw= game.add.sprite(140, 620, 'calaveraicon');
    this.calaverawo= game.add.sprite(140, 620, 'calaveraicon1');
    this.gusanoe= game.add.sprite(250, 620, 'gusanoicon');
    this.gusanoeo= game.add.sprite(250, 620, 'gusanoicon1');
    this.vikingo1i= game.add.sprite(940, 620, 'vikingo1c');
    this.vikingo1io= game.add.sprite(940, 620, 'vikingo1o');
    this.vikingo2o= game.add.sprite(1050, 620, 'vikingo2c');
    this.vikingo2oo= game.add.sprite(1050, 620, 'vikingo2o');
    this.vikingo3p= game.add.sprite(1160, 620, 'vikingo3c');
    this.vikingo3po= game.add.sprite(1160, 620, 'vikingo3o');
    this.rayoizq.alpha=0;
    this.rayoder.alpha=0;
    this.escizq.alpha=0;
    this.escder.alpha=0;
    this.empuji.alpha=0;
    this.empujd.alpha=0;
    this.polloqo.alpha=0;
    this.calaverawo.alpha=0;
    this.gusanoeo.alpha=0;
    this.vikingo1io.alpha=0;
    this.vikingo2oo.alpha=0;
    this.vikingo3po.alpha=0;
    this.add(this.ui);
    this.add(this.rayoizq);
    this.add(this.rayoder);
    this.add(this.escizq);
    this.add(this.escder);
    this.add(this.empujd);
    this.add(this.empuji);
    this.add(this.polloq);
    this.add(this.polloqo);
    this.add(this.calaveraw);
    this.add(this.calaverawo); 
    this.add(this.gusanoe); 
    this.add(this.gusanoeo); 
    this.add(this.vikingo1i); 
    this.add(this.vikingo2o);
    this.add(this.vikingo3p);  
    game.load.audio("MiSonido","music/Hearts_forged_with_fire.mp3");

    this.debugKeyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.debugKeyA.onDown.add(()=>{
      this.rayoizq.alpha=1;
      }, this);
    this.debugKeyA.onUp.add(()=>{
    this.rayoizq.alpha=0;
      }, this);
    
    this.debugKeyL = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
    this.debugKeyL.onDown.add(()=>{
      this.rayoder.alpha=1;
      }, this);
    this.debugKeyL.onUp.add(()=>{
    this.rayoder.alpha=0;
      }, this);

    this.debugKeyS = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.debugKeyS.onDown.add(()=>{
      this.escizq.alpha=1;
      }, this);
    this.debugKeyS.onUp.add(()=>{
    this.escizq.alpha=0;
      }, this);
    
    this.debugKeyK = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    this.debugKeyK.onDown.add(()=>{
      this.escder.alpha=1;
      }, this);
    this.debugKeyK.onUp.add(()=>{
    this.escder.alpha=0;
      }, this);

    this.debugKeyD = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.debugKeyD.onDown.add(()=>{
      this.empuji.alpha=1;
      }, this);
    this.debugKeyD.onUp.add(()=>{
    this.empuji.alpha=0;
      }, this);

    this.debugKeyJ = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    this.debugKeyJ.onDown.add(()=>{
      this.empujd.alpha=1;
      }, this);
    this.debugKeyJ.onUp.add(()=>{
    this.empujd.alpha=0;
      }, this);
    
    this.debugKeyQ = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.debugKeyQ.onDown.add(()=>{
      this.polloqo.alpha=1;
      }, this);
    this.debugKeyQ.onUp.add(()=>{
    this.polloqo.alpha=0;
      }, this);
    
    this.debugKeyW = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.debugKeyW.onDown.add(()=>{
      this.calaverawo.alpha=1;
      }, this);
    this.debugKeyW.onUp.add(()=>{
    this.calaverawo.alpha=0;
      }, this);
    
    this.debugKeyE = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.debugKeyE.onDown.add(()=>{
      this.gusanoeo.alpha=1;
      }, this);
    this.debugKeyE.onUp.add(()=>{
    this.gusanoeo.alpha=0;
      }, this);
    
    this.debugKeyI = this.game.input.keyboard.addKey(Phaser.Keyboard.I);
    this.debugKeyI.onDown.add(()=>{
      this.vikingo1io.alpha=1;
      }, this);
    this.debugKeyI.onUp.add(()=>{
    this.vikingo1io.alpha=0;
      }, this);
    
    this.debugKeyO = this.game.input.keyboard.addKey(Phaser.Keyboard.O);
    this.debugKeyO.onDown.add(()=>{
      this.vikingo2oo.alpha=1;
      }, this);
    this.debugKeyO.onUp.add(()=>{
    this.vikingo2oo.alpha=0;
      }, this);
    
    this.debugKeyP = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
    this.debugKeyP.onDown.add(()=>{
      this.vikingo3po.alpha=1;
      }, this);
    this.debugKeyP.onUp.add(()=>{
    this.vikingo3po.alpha=0;
      }, this)
    
    
  }
}
