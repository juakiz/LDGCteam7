import Phaser from 'phaser'
export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)
    this.init()
  }

  
  init()
  {
    this.menu = game.add.sprite(0, 0, 'menu');
    this.start = game.add.sprite(505, 312, 'start');
    this.instrucciones=game.add.sprite(333, 401, 'instrucciones');
    this.creditos=game.add.sprite(444, 489, 'creditos');
    this.start.alpha=0;
    this.instrucciones.alpha=0;
    this.creditos.alpha=0;
    this.add(this.menu);
    this.add(this.start);
    this.add(this.instrucciones);
    this.add(this.creditos);
    this.sonido = game.add.audio("musicamenu"); 
    game.sound.setDecodedCallback([ this.sonido ], function(){
        this.sonido.play();
    }, this);
    this.start.inputEnabled = true;
    this.start.events.onInputDown.addOnce(()=>{
      sonido.stop();
      game.state.start('Game');
    }, this);

    this.instrucciones.inputEnabled = true;
    this.instrucciones.events.onInputDown.addOnce(()=>{
      game.state.start('Instrucciones');
    }, this);

    this.creditos.inputEnabled = true;
    this.creditos.events.onInputDown.addOnce(()=>{
      game.state.start('Creditos');
    }, this);


  }
}
