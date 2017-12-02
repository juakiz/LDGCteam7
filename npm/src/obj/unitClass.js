import Globals from './../../kernel/globals';
import LU from './../../display/layout-utils';
import params from 'params';

export default class Unit extends Phaser.Group {
  constructor(game, parent, type, posX, posY) {
    super(game, parent);

    this._game = game;
    this._state = game.state.getCurrentState();
    // this._view = this._state.view;
    this._BP = parent;
    // this._BH = this._state.BH;

    this.UID = ++this._BH.level.UnitCounter;

    this.x = posX;
    this.y = posY;
    
    this.type = Globals.OBJ_UNIT_INFO[type]; // Props: name, anchor, frames: {dying,attacking,walking}, collision_range, attack_range, attack_speed, hp, dmg, cost, level, enemy?.
    this.hp = this.type.hp;

    this.side = this.type.enemy ? "enemies": "allies";    

    // Y coord to end game
    this.winY = this.side == "enemies" ? posY + 450: posY - 450;

    this._animSpeed = params.animation_speed;

    this.walking_direction = this.type.enemy ? -1 : 1;

    this.init();
  }

  init()
  {
    this.spr_unit = imageLoader.spriteMake(0, 0, `${this.type.name}_attacking1.png`);
    this.spr_unit.anchor = this.type.anchor;

    // let anchor_debug = imageLoader.spriteMake(0, 0, `stuntank_bomb.png`);
    // anchor_debug.anchor.set(0.5);
    // this.spr_unit.addChild(anchor_debug);
    

    // SET UP ANIMATIONS
    // Attack anim
    this.ani_attacking = this.spr_unit.animations.add('attacking', this.type.frames.attacking);
    
    // Stand stance anim: pauses between attack animations (not perma-attack like crazy)
    this.ani_attacking_stand = this.spr_unit.animations.add('attack_stand', [this.type.frames.stand]);
    
    // Die anim
    this.ani_dying = this.spr_unit.animations.add('dying', this.type.frames.dying);
    
    // Walking anim
    this.ani_walking = this.spr_unit.animations.add('walking', this.type.frames.walking);
    this.ani_walking.enableUpdate = true;    
    this.ani_walking.onUpdate.add(this.updateWalking, this);
    // this.ani_walking.onComplete.add(this.walk, this);
    
    this.add(this.spr_unit);

    this._realEnemies = this.type.enemy ? this._BH.level.spawnedUnits.allies: this._BH.level.spawnedUnits.enemies; 
    this._realAllies = this.type.enemy ? this._BH.level.spawnedUnits.enemies: this._BH.level.spawnedUnits.allies;

    let random = utils.random(-400, 600);
    this.spawnTween = this._game.add.tween(this).from({alpha:0}, 500+random, Phaser.Easing.Linear.None, true)
    .onComplete.add(()=>{
      this._BH.level.spawnedUnits[this.side].push(this);
      this.walk();
    });
  }

  //////////////////////////////
  /////// Play Animation Methods
  attack(target)
  {
    let exist = false;
    for(let i = 0; i < this._realEnemies.length; i++)
      if(this._realEnemies[i].UID == target.UID)
        exist = true;

    if(exist)
    {
      if(this.type.name == "stuntank")
        this.bulletGenerator(target);
    
      this.ani_attacking.play(this._animSpeed).onComplete.add(()=>{
          // Handle attack speed
          this.ani_attacking_stand.play(1/this.type.attack_speed)
            .onComplete.add(this.attack, this);
      });
      target.modHP(this.type.dmg);
      // console.log(target);
      // target.die();
    }
    else
    {
      this.walk();
    }

  }
  
  die()
  {
    this.ani_dying.play(0);
    this.bloodEffect(this.spr_unit);
    if(this.isFirstUnit)
      this._BH.onFirstUnitDie.dispatch();
  }
  
  walk()
  {
    this.ani_walking.play(this._animSpeed, true);
  }

  /////////////////////////////
  /////// Updates (for better performance movement is taken from animation walk update callback)
  updateWalking()
  {
    if(this.side == "enemies" && this.y >= this.winY || this.side == "allies" && this.y <= this.winY)
    {
      if(this.side == "allies")
        this.ani_attacking.play(this._animSpeed, true);
      setTimeout(()=>{this._state.cta.show();}, 500);
    }

    // let speedX = 14;
    // let speedY = 14;
    
    let target = this.checkEnemyDistances(this._realEnemies);
    // let colliding = this.checkAllyDistances(this._realAllies);
    if(!target)
    {
      // console.log(colliding);
      // if(!colliding)
      // {
        this.x += params.movement_speed * this.walking_direction;
        this.y -= params.movement_speed * this.walking_direction;
      // }
      // else if(Math.round(utils.random(0,1)))
      // {
      //   this.x += 4 * this.walking_direction;
      //   this.x += 4 * this.walking_direction;
      // }
      // else if(this.y - this.x > 700)
      // {
      //   this.x += ((0.866*colliding.collision_range)/2) * this.walking_direction;
      //   this.y -= ((0.5*colliding.collision_range)/2) * this.walking_direction;
      // }
      // else
      // {
      //   this.x -= ((0.866*colliding.collision_range)/2) * this.walking_direction;
      //   this.y += ((0.5*colliding.collision_range)/2) * this.walking_direction;
      // }
    }
    else
    {
      this.attack(target);
    }
  }

  // update()
  // {
  //   for(let ally of this._BG.spawnedUnits.allies)
  //     if()
  // }

  /////////////////////////////
  /////// Effects
  bloodEffect(target)
  {
    // target.tint = 16777215;
    // this._game.add.tween(target).to({tint:16711680}, 120, Phaser.Easing.Linear.None, true, 0, 1, true);
    // target.tint = 16711680;
    this._game.add.tween(target).to({alpha:0}, 200, Phaser.Easing.Linear.None, true, 0, 0, false)
    .onComplete.add(()=>{
      this.spr_unit.destroy();
      for(let i = 0; i < this._realAllies.length; i++)
        if(this._realAllies[i].UID == this.UID)
          this._realAllies.splice(i, 1);
    });
  }
  
  bulletGenerator(target)
  {
    let bullet = imageLoader.spriteMake(this.x+11, this.y-28, 'stuntank_bomb.png');
    bullet.anchor.set(0.5);
    this._BG.add(bullet);
    this._game.add.tween(bullet).to({x: target.x, y: target.y}, Phaser.Math.distance(bullet.x, bullet.y, target.x , target.y)*2, Phaser.Easing.Quadratic.In, true)
    .onComplete.add(()=>{bullet.destroy();});
  }
  
  /////////////////////////////
  /////// Utils
  getPosition()
  {
    return new Phaser.point(this.x, this.y);
  }

  checkEnemyDistances(enemiesArray)
  {
    for(let en of enemiesArray)
    {
      if(Phaser.Math.distance(this.x, this.y, en.x , en.y) <= this.type.attack_range)
        return en;
    }
    return null;
  }

  checkAllyDistances(alliesArray)
  {
    for(let al of alliesArray)
    {
      if(Phaser.Math.distance(this.x, this.y, al.x , al.y) <= this.type.collision_range && Phaser.Math.distance(this.x, this.y, al.x , al.y) >= 10)
      {
        return al;
      }
    }
    return null;
  }

  modHP(amount)
  {
    this.hp -= amount;
    if(this.hp <= 0)
    {
      this.die();
    }
  }

  pauseSpawnTween()
  {
    this.spawnTween.pause();
  }

  resumeSpawnTween()
  {
    this.spawnTween.resume();    
  }
}