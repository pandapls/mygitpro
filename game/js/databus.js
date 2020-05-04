//公共状态
let instance;
export class DataBus{
  constructor(){
    if(instance){
      return instance;
    }else{
      instance = this;
      this.gameover = false;//游戏状态
      this.canvas;
      this.ctx;//画布上下文对象
      this.obstaclelist = [];//障碍物列表
      this.timer = null ; // 游戏状态
    }
  }
  reset(){
    this.gameover = true;
    this.obstaclelist = [];
    this.timer = null;

  }
}