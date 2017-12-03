/* globals __DEV__ */
import Phaser from 'phaser'
import Instruccionescarg from '../groups/Instruccionescarg'
export default class extends Phaser.State {
  preload () {
    this.init();
  }

  create () {

  }

  init()
  {
    this.Instruccionescarg = new Instruccionescarg(this.game);
  }

  update()
  {
    
  }

}