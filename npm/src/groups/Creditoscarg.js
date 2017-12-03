import Phaser from 'phaser'
export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)
    this.init()
  }

  
  init()
  {
    this.creditos = game.add.sprite(0, 0, 'creditoscarg');
    this.back = game.add.sprite(1050, 648, 'back');
    this.back.alpha=0;
    this.add(this.creditos);
    this.add(this.back);    

    this.back.inputEnabled = true;
    this.back.events.onInputDown.addOnce(()=>{
      game.state.start('Menu');
    }, this);


  }
}