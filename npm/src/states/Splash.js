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
    this.load.spritesheet('pollo', 'assets/placeholders/pollo_ataque.png', 261/3, 107, 3);
    // this.load.spritesheet('pollo_caminar', 'assets/placeholders/pollo_caminar.png', 190/2, 107, 2);
    this.load.image('torre_alien', 'assets/placeholders/torre_alien.png');
    this.load.image('rayo', 'assets/placeholders/rayo.png');
    this.load.image('escudo', 'assets/placeholders/escudo.png');
    this.load.image('empujd', 'assets/placeholders/empuje_drch.png');
    this.load.image('empuji', 'assets/placeholders/empuje_izq.png');    
    this.load.spritesheet('pollo_ataque', 'assets/placeholders/pollo_ataque.png', 261/3, 107, 3);
    this.load.spritesheet('pollo_caminar', 'assets/placeholders/pollo_caminar.png', 190/2, 107, 3);
    // this.load.image('mushroom', 'assets/images/mushroom2.png');
    // this.load.image('fondo', 'assets/placeholders/fondo.jpg');
    this.load.image('menu', 'assets/placeholders/menu_juego.png');
    this.load.image('start', 'assets/placeholders/start_oscuro.png');
    this.load.image('instrucciones', 'assets/placeholders/instrucc_oscuro.png');
    this.load.image('creditos', 'assets/placeholders/creditos_oscuro.png');
    this.load.image('instruct_1', 'assets/placeholders/instruct_1.png');
    this.load.image('instruct_2', 'assets/placeholders/instruct_2.png');
    this.load.image('back', 'assets/placeholders/back.png');
    this.load.image('next', 'assets/placeholders/next.png');
    this.load.image('creditoscarg', 'assets/placeholders/creditos.png');
  }

  create () {
    this.state.start('Menu')
  }

}
