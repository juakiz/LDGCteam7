export default class UnitInfo {
    constructor(name, anchor, attack, HP, frameInfo) {
  
        this.name = name;
        this.anchor = anchor;
        this.frames = this.makeFrames(frameInfo);
        this.attack = attack;
        this.HP = HP;
        this.frameInfo = frameInfo;
    }
  
    makeFrames(frameInfo)
    {
      let frames = {};
      frames.dying = [`${this.name}_dying.png`];
      frames.attacking = Phaser.Animation.generateFrameNames(`${this.name}_attacking`, 1, frameInfo[0], '.png', 1);
      return frames;
    }
  }
  