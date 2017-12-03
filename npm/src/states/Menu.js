/* globals __DEV__ */
import Phaser from 'phaser'
import menucarg from '../groups/Menucarg'
export default class extends Phaser.State {
  preload () {
    this.init();
  }

  create () {

  }

  init()
  {
    this.menucarg = new menucarg(this.game);
  }

  update()
  {
    
  }

}
