function getStyle(obj,name){
    if(window.getComputedStyle){  //window为指定全局属性 不加window相当于变量
        return getComputedStyle(obj,null)[name]; //[name]代表不同的样式名，灵活
    }else{
        return obj.currentStyle[name]; //IE8及以下浏览器
    }
 }
 /* 
  * 第一个参数 obj 要执行动画的对象
  * attr:要执行动画的样式
  * 第二个参数 target 执行动画的目标位置
  * 第三个参数 speed 移动的速度(正数向右，负数向左)
  * callback 回调函数,在动画结束之后执行
  */

 //定义一个定时器,用来保存定时器标识
 /* 
  * 目前所有的定时器标识由全局变量timer保存
  * 所有的执行正在定时的定时器都在这个变量中保存
  */
 //var timer;
 function move(obj,attr,target,speed,callback){
     //关闭上一个定时器
     clearInterval(obj.timer);

     //获取元素目前的位置
     var current = parseInt(getStyle(obj,attr));

     //判断速度的正负值
     //如果从0向800移动，则speed为正
     //如果从800向0移动，则speed为负
     if(current > target){
         //此时速度应为负值
         speed = -speed;
     }

         //开启一个定时器
         //向执行动画的对象中添加timer属性，用来保存自己的定时器
         obj.timer = setInterval(function(){
             //获取box1原先的left值
             var oldValue = parseInt(getStyle(obj,attr));
             //向右移动后的新值
             var newValue = oldValue + speed;
             //当移动到大于800的时候
             //向左移动时需判断newValue是否小于target
             if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
                 newValue = target;
             }
             //将新值赋值给box1
             obj.style[attr] = newValue + "px";
             //当移动到800的时候，结束定时
             if(newValue == target){
                 clearInterval(obj.timer);
                 callback && callback();
             }
         },30);
 }