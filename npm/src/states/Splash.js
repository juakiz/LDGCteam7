import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('fondo', 'assets/placeholders/fondo.jpg');
    this.load.image('base_piedra', 'assets/placeholders/base_piedra.png');
    this.load.image('piedra_1', 'assets/placeholders/piedra.png');
    this.load.image('ui', 'assets/placeholders/ui.png');
    this.load.image('torre_vikingos_cortada', 'assets/placeholders/torre_vikingos.png');
    // this.load.spritesheet('pollo_caminar', 'assets/placeholders/pollo_caminar.png', 190/2, 107, 2);
    this.load.image('torre_alien', 'assets/placeholders/torre_alien.png');
    this.load.image('rayo', 'assets/placeholders/rayo.png');
    this.load.image('escudo', 'assets/placeholders/escudo.png');
    this.load.image('empujd', 'assets/placeholders/empuje_drch.png');
    this.load.image('empuji', 'assets/placeholders/empuje_izq.png');    
    this.load.spritesheet('pollo', 'assets/placeholders/pollo.png', 350/4, 107, 4);
    this.load.spritesheet('slime', 'assets/placeholders/slime.png', 875/6, 221, 6);
    this.load.spritesheet('gusano', 'assets/placeholders/gusano.png', 480/2, 212, 2);
    this.load.spritesheet('vikingo1', 'assets/placeholders/vikingo-01.png', 730/6, 115, 6);
    this.load.spritesheet('vikingo2', 'assets/placeholders/vikingo-02.png', 1133/6, 187, 6);
    this.load.spritesheet('vikingo3', 'assets/placeholders/vikingo-03.png', 1128/6, 207, 6);

    // this.load.image('mushroom', 'assets/images/mushroom2.png');
    // this.load.image('fondo', 'assets/placeholders/fondo.jpg');
  }

  create () {
    this.state.start('Game')
  }
}
