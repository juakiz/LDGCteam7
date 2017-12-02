/* globals __DEV__ */
import Phaser from 'phaser'
import BG from '../groups/backgroundGP'
import BasePiedraGP from '../groups/base_piedraGP'
import UI from '../groups/UI'

export default class extends Phaser.State {
  init () {}
  preload () {
    // this.load.image('fondo', 'assets/placeholders/fondo.jpg');
    // this.load.image('base_piedra', 'assets/placeholders/base_piedra.png');
    // this.load.image('piedra_1', 'assets/placeholders/piedra_1.png');
  }

  create () {
    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    // banner.font = 'Bangers'
    // banner.padding.set(10, 16)
    // banner.fontSize = 40
    // banner.fill = '#77BFA3'
    // banner.smoothed = false
    // banner.anchor.setTo(0.5)

    // this.game.add.existing(this.mushroom)
    this.init();
  }

  init()
  {
    console.log(this.world, this.game.world);
    // this.mushroomGP = new Mushrooms(this.game);
    this.bgGP = new BG(this.game);
    this.basePiedraGP = new BasePiedraGP(this.game);



    this.UI = new UI(this.game);

    this.game.input.onDown.add(this.shake, this);
  }

  shake() {
  
    //  You can set your own intensity and duration
    this.game.camera.shake(0.15, 1000);
  
  }
  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(this.mushroom, 32, 32)
  //   }
  // }
}
