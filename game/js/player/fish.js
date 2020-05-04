//鱼
import {DataBus} from '../databus.js'
let databus = new DataBus();

export class Fish{
  constructor(){
    this.img  =wx.createImage();
    this.img.src="images/fish1.png"
    this.x =databus.canvas.width/4;
    this.y = databus.canvas.height/2;
    this.w = 41;
    this.h = 30;
    this.time = 0; //下落的事件
    this.newy = databus.canvas.height/2
  }
  render(){
    //模拟重力加速度
    let g = 0.98/2.9;
    //设置回弹偏移量
    let offsetUp = 30;
    //计算出位移值
    let offsetY = (g*this.time*(this.time-offsetUp))/2;
    this.newy = this.y + offsetY;
    this.time ++;

    //drawImage()
    databus.ctx.drawImage(this.img,0,0,this.w,this.h,this.x ,this.newy,this.w,this.h)
  }
}
