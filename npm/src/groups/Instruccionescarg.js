import Phaser from 'phaser'
export default class extends Phaser.Group {
  constructor ( game, state ) {
    super(game, state)
    this.init()
  }

  
  init()
  {
    this.instruct_1 = game.add.sprite(0, 0, 'instruct_1');
    this.instruct_2 = game.add.sprite(0, 0, 'instruct_2');
    this.next = game.add.sprite(1048, 648, 'next');
    this.back = game.add.sprite(1050, 648, 'back');
    this.instruct_1.alpha=1;
    this.instruct_2.alpha=0;
    this.next.alpha=0;
    this.back.alpha=0;
    this.add(this.instruct_1);
    this.add(this.instruct_2);
    this.add(this.next);
    this.add(this.back);

    this.next.inputEnabled = true;
    this.next.events.onInputDown.addOnce(()=>{
      this.instruct_1.alpha=0;
      this.instruct_2.alpha=1;
      this.back.inputEnabled = true;
    }, this);

    this.back.inputEnabled = false;
    this.back.events.onInputDown.addOnce(()=>{
      game.state.start('Menu');
    }, this);



  }
}