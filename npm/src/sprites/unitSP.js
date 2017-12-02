import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor (game, parent, x, y, asset ) {
    super(game, parent);
    // this.anchor.setTo(0.5, 1);
    this.x = x;
    this.y = y;

    this.init(asset);
  }

 update () {
    this.x += 0.5;
 }

 init(asset){
  this.pollo = game.add.sprite(0, 0, asset);
  this.pollo.anchor.set(0.5, 1);
  // this.pollo.animations.add('ataque', [0,1]);
  // this.pollo.animations.add('caminar', [2]);
  // this.KeyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
  // this.KeyZ = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
  // this.KeyA.onDown.add(()=>{this.pollo.animations.play('ataque', 10, true);});
  // this.KeyZ.onDown.add(()=>{this.pollo.animations.play('caminar', 10, true);});

  

  this.add(this.pollo);
 }
}
