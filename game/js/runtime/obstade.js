//海平面背景
import {DataBus} from '../databus.js'
let databus = new DataBus();

export class Obstacle{
  constructor(top,src,imgtype){

    this.x=databus.canvas.width-50;
    this.y=0;
    this.w=86;
    this.h=406;
    this.img=wx.createImage();
    this.img.src=src;
    this.top = top;
    this.imgtype=imgtype;
    this.speed = 2;
  }
  render(){
   if(this.imgtype=="up"){
     //随机距离减去自身高度
     this.y = this.top - this.h;

   }else{
    let height = databus.canvas.height/5;
    this.y = this.top + height;
   }
   this.x = this.x - this.speed;
    databus.ctx.drawImage(this.img,0,0,this.w,this.h,this.x,this.y,this.w,this.h)

  }
}
