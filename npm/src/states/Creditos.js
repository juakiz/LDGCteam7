/* globals __DEV__ */
import Phaser from 'phaser'
import Creditoscarg from '../groups/Creditoscarg'
export default class extends Phaser.State {
  preload () {
    this.init();
  }

  create () {

  }

  init()
  {
    this.Creditoscarg = new Creditoscarg(this.game);
  }

  update()
  {
    
  }

}