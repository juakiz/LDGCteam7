import Phaser from 'phaser'
// import Globalss from 'Globalss'

export default class extends Phaser.Group {
  constructor (game, parent, asset) {
    super(game, parent);
    // this.anchor.setTo(0.5, 1);
    
    // UNIT INFO OBJECT
    this.OBJ_UNIT_INFO = {
      pollo:    {faction: 'aliens', speed: 6, dmg: 1, hp: 20, aWalk: [0,1], aAttack: [1,2,3]},
      slime:    {faction: 'aliens', speed: 4, dmg: 1, hp: 40, aWalk: [0,1,2,3], aAttack: [3,4,5]},
      gusano:   {faction: 'aliens', speed: 2, dmg: 2, hp: 30, aWalk: [0,1], aAttack: [0,1,2]},
      vikingo1: {faction: 'vikings', speed: 6, dmg: 1, hp: 20, aWalk: [0,1,2,3], aAttack: [3,4,5]},
      vikingo2: {faction: 'vikings', speed: 4, dmg: 2, hp: 40, aWalk: [0,1,2,3], aAttack: [3,4,5]},
      vikingo3: {faction: 'vikings', speed: 2, dmg: 1, hp: 30, aWalk: [0,1,2,3], aAttack: [3,4,5]},
    };
    
    this.type = this.OBJ_UNIT_INFO[asset];
    this.faction = this.type.faction;
    this.speed = this.type.speed;
    this.arr_unit = parent.units;

    this.UID = ++parent.UnitCounter;    

    this.sign = this.faction == 'aliens' ? 1 : -1;
    this.hp = this.type.hp;

    this.piedra = parent.base_piedra;
    // -this.base_piedra.width/2, -this.base_piedra.height * this.base_piedra.anchor.y,
    this.x = -this.piedra.width/2 * this.sign;
    this.y = -this.piedra.height * this.piedra.anchor.y;

    if(this.faction == 'aliens')
    {
      this.enemies = this.arr_unit.vikings;
      this.allies = this.arr_unit.aliens;
      this.arr_unit.aliens.push(this);
    }
    else if(this.faction == 'vikings')
    {
      this.enemies = this.arr_unit.aliens;
      this.allies = this.arr_unit.vikings;      
      this.arr_unit.vikings.push(this);
    }
    else
    {
      console.log("Error al cargar la faccion!!!!!!");
    }

    this.realWeight = this.hp;
    
    this.init(asset, this.type.aAttack, this.type.aWalk);
  }

//  update () {
//     this.x += 0.5;
//  }

 init(asset, aAttack, aWalk){
  this.unit = game.add.sprite(0, 0, asset);
  
  this.unit.anchor.set(0.5, 1);
  this.collision = 50;//this.unit.width*0.6;
  // console.log(this, this.collision);
  this.x += this.collision * this.sign;
  this.ani_ataque = this.unit.animations.add('ataque', aAttack);
  this.ani_caminar = this.unit.animations.add('caminar', aWalk);
  this.ani_caminar.enableUpdate = true;
  this.ani_caminar.onUpdate.add(this.updateWalking, this);
  console.log ("I'm " , this.unit);
  this.walk();

  this.add(this.unit);
 }

 walk()
 {
  this.ani_caminar.play(10, true);
 }

 attack(target)
 {
   let exist = false;
   for(let i = 0; i < this.enemies.length; i++)
     if(this.enemies[i].UID == target.UID)
       exist = true;

   if(exist)
   {   
     this.ani_ataque.play(8).onComplete.add(()=>{
      target.modHP(this.type.dmg);
      this.attack(target);
     });
     // console.log(target);
     // target.die();
   }
   else
   {
     this.walk();
   }

 }

 updateWalking()
 {

   let target = this.checkEnemyDistances(this.enemies);
   if(!target)
   {
    this.x += this.speed * this.sign;    
   }
   else
   {
     this.attack(target);
   }
 }

 checkEnemyDistances(enemiesArray)
 {
   for(let en of enemiesArray)
   {
     if(Math.abs(this.x - en.x) <= this.collision)
       return en;
   }
   return null;
 }

 modHP(amount)
 {
   this.hp -= amount;
   if(this.hp <= 0)
   {
    for(let i = 0; i < this.allies.length; i++)
    if(this.allies[i].UID == this.UID)
      this.allies.splice(i, 1);

        
    this.destroy();
   }
 }

 getWeight()
 {
    return this.realWeight * Math.abs(this.x/531);
 }

//  stop()
//  {
//   this.speed = 0;
//  }
}
