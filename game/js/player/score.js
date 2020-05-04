//海平面背景
import {DataBus} from '../databus.js'
let databus = new DataBus();

export class Score{
  constructor(){
    this.x = 10
    this.y = 40
    this.score = "count：0"
    this.isScore = true;

  }
  render(){
    databus.ctx.strokeText( this.score, this.x, this.y)
    databus.ctx.strokeStyle  = "white"; 
    databus.ctx.font = "30px 华文彩云";
    
  }
}
