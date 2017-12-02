import Globals from 'kernel/globals';
import LU from 'display/layout-utils';
import Unit from './BG/unit';
import params from 'params';

// import Overlay from './TUT/tutorial-overlay';

export default class BattleHandler {
	constructor(game, state) {
        this._game = game;
        this._state = state;

        // Main config for battle
        this.level = {};

        this.level.UnitCounter = 0;

        // Init object to handle the units will be spawned
        this.level.unitsToSpawn = {enemies:{}, allies:{}};
        for(let name in Globals.OBJ_UNIT_INFO)
        {
            if(Globals.OBJ_UNIT_INFO[name].enemy)
                this.level.unitsToSpawn.enemies[name] = 0;
            else
                this.level.unitsToSpawn.allies[name] = 0;
        }

        // Starting Unit Position
        this.level.spawnPoints = Globals.SPAWN_POINTS;     

        // Starting Sources
        this.level.sources = Globals.SOURCES;

        // Init spawned units obj
        this.level.spawnedUnits = {allies:[],enemies:[]};        

        // Lets start with one each enemy
        // this.level.unitsToSpawn.enemies["cartillery"] = 1;
        this.level.unitsToSpawn.enemies.deadeye = 1;

        this.isGamePaused = false;
        
        // console.log(this.level.unitsToSpawn);
	}
    
    init()  {
        this._BG = this._state.battleground;
        this._UI = this._state.UI;

        // First two units "cinematic"
        this.onFirstUnitDie = new Phaser.Signal();
        this.onFirstUnitDie.addOnce(this.gameStart, this);        

        let firstAllyType = "archer";
        let firstEnemyType = "deadeye";
        this.firstAlly = new Unit(this._game, this._BG, firstAllyType, Globals.SPAWN_POINTS.allies[firstAllyType][0].x, Globals.SPAWN_POINTS.allies[firstAllyType][0].y);
        this.firstEnemy = new Unit(this._game, this._BG, firstEnemyType, Globals.SPAWN_POINTS.enemies[firstEnemyType][0].x, Globals.SPAWN_POINTS.enemies[firstEnemyType][0].y);
        this.firstAlly.isFirstUnit = true;
        this.firstEnemy.isFirstUnit = true;
    }

    gameStart()// Game starts after cinematic
    {
        console.log("GAME STARTS")
        // this._UI.source.startTimer();
        this._UI.source.setCrystals(15);
        for(let i = 0; i < this._UI.unitIcons.length; i++)
            this._UI.unitIcons[i].toggleEnabled();
        if(params.tutorial_enabled)
          setTimeout(()=>{this._state.tutorial.init();}, 500);
    }

    onTimerEnd()
    {
        // console.log(this.level.unitsToSpawn);
        // console.log("TIMER ENDS!!", this._UI.source.current_income);
        this.spawnUnits(this.level.unitsToSpawn);
        this._UI.source.modCrystals(this._UI.source.current_income);
        // console.log( Globals.OBJ_UNIT_INFO);
        // Handle max number of enemies here
        if(this.level.unitsToSpawn.enemies.deadeye < Globals.OBJ_UNIT_INFO.deadeye.max_amount)        
            this.addUnitToSpawnPool("enemies", Globals.OBJ_UNIT_INFO.deadeye);
        if((this.level.unitsToSpawn.enemies.deadeye % 3 == 0 || this.level.unitsToSpawn.enemies.deadeye == 2) && this.level.unitsToSpawn.enemies.cartillery < Globals.OBJ_UNIT_INFO.cartillery.max_amount)
            this.addUnitToSpawnPool("enemies", Globals.OBJ_UNIT_INFO.cartillery);        
    }

    addUnitToSpawnPool(side, type)
    {
        // console.log(type);
        
        let unit = type.name;
        let level = type.level;

        let unitAmount = this.level.unitsToSpawn[side][unit]++;
        let odd = this.level.unitsToSpawn[side][unit] % 2 == 1;
        let factor = Math.floor(this.level.unitsToSpawn[side][unit]/2);
        let xOffset = factor * 0.866 * type.collision_range;
        let yOffset = factor * 0.5 * type.collision_range;
        // console.log(xOffset, yOffset);
        if(!odd)
            this.level.spawnPoints[side][unit].push(new Phaser.Point(
                this.level.spawnPoints[side][unit][0].x + xOffset,
                this.level.spawnPoints[side][unit][0].y + yOffset
            ));
        else if(this.level.unitsToSpawn[side][unit] != 1)
            this.level.spawnPoints[side][unit].push(new Phaser.Point(
                this.level.spawnPoints[side][unit][0].x - xOffset,
                this.level.spawnPoints[side][unit][0].y - yOffset
            ));

        if(side == "allies")
            this._UI.source.modIncome(level);
        // console.log("UPDATED SPAWN POOL:", this.level.unitsToSpawn);
    }

    spawnUnits(unitsToSpawn)
    {
      for(let ally in unitsToSpawn.allies)
        for(let i = 0; i < unitsToSpawn.allies[ally]; i++)
            new Unit(this._game, this._BG, ally, this.level.spawnPoints.allies[ally][i].x, this.level.spawnPoints.allies[ally][i].y);
      
      for(let enemy in unitsToSpawn.enemies)
        for(let i = 0; i < unitsToSpawn.enemies[enemy]; i++)
            new Unit(this._game, this._BG, enemy, this.level.spawnPoints.enemies[enemy][i].x, this.level.spawnPoints.enemies[enemy][i].y);
    }

    pauseGame()
    {
        // TODO: Pause spawn tween instead all tweens
        if(!this.isGamePaused)
        {
            this.isGamePaused = true;        
            this._game.tweens.pauseAll();
            // this._UI.source.pauseTimer();
            for(let ene of this.level.spawnedUnits.enemies)
                ene.spr_unit.animations.currentAnim.paused = true;
            for(let al of this.level.spawnedUnits.allies)
            {
                al.spr_unit.animations.currentAnim.paused = true;
            }
            for(let ui of this._UI.unitIcons)
            {
                for(let sp of ui.allLoadingSprites)
                    sp.animations.currentAnim.paused = true;
            }
        }
    }

    resumeGame()
    {
        if(this.isGamePaused)
        {
            this.isGamePaused = false;   
            this._game.tweens.resumeAll();
            // this._UI.source.resumeTimer();        
            for(let ene of this.level.spawnedUnits.enemies)
                ene.spr_unit.animations.currentAnim.paused = false;
            for(let al of this.level.spawnedUnits.allies)
            {
                al.spr_unit.animations.currentAnim.paused = false;
            }
            for(let ui of this._UI.unitIcons)
            {
                for(let sp of ui.allLoadingSprites)
                    sp.animations.currentAnim.paused = false;
            }
        }
    }
}