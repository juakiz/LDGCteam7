/* globals __DEV__ */
import Phaser from 'phaser'
import Mushrooms from '../groups/mushrooms'
import BG from '../groups/backgroundGP'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    // banner.font = 'Bangers'
    // banner.padding.set(10, 16)
    // banner.fontSize = 40
    // banner.fill = '#77BFA3'
    // banner.smoothed = false
    // banner.anchor.setTo(0.5)


console.log(this.game, this);
    this.mushroomGP = new Mushrooms(this.game);
    this.bgGP = new BG(this.game);



    // this.game.add.existing(this.mushroom)
  }

  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(this.mushroom, 32, 32)
  //   }
  // }
}
