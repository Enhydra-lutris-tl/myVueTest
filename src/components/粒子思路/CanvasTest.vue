<template>
  <canvas id="myCanvas2" width="1200" height="760"></canvas>
</template>

<script>
export default {
  name: "CanvasTest",
  mounted() {
      this.ceShi()
    },
  methods: {
    ceShi() {
      var canvas = document.getElementById('myCanvas2')
      var ctx = canvas.getContext('2d')
      //范围
      var w = 1200
      var h = 760

      class ball{
        constructor(x2,y2,r,color) {
          this.x1 = suiji(w)
          this.y1 = suiji(h)
          this.x2 = x2
          this.y2 = y2
          this.dx = this.x2 - this.x1
          this.dy = this.y2 - this.y1
          this.color = color
          this.r = r
        }

        guiji(count) {
          // 后面是速度方程 时间单位为1
          this.x1 += this.dx*2/100*(1-count/100);
          this.y1 += this.dy*2/100*(1-count/100);
          huadian(this.x1, this.y1, this.r, this.color);
        }
      }




      // function range(i){
      //   return Math.random()*i
      // }

      function duixiang(){
        var b = []
        for (var i=0; i < 100; i++){
          let a = {x:suiji(w),y:suiji(h)}
          b.push(a)
        }
        return b
      }

      function suiji(i){
        return Math.floor(Math.random()*i)
      }

      function huadian(x, y, r, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      var t1

      var shuju1 = duixiang()
      var shuju2 = duixiang()

      function shuzus(shuju){
        console.log('11111111111')
        shuju.ballArr = [];
        for (var i = 0; i<shuju.length;i++){
          if (i<25){
            var color = '#bf4ab3'
          }else if(i>25 && i<50){
            color = '#4551c3'
          }else if(i>50 && i<75){
            color = '#ff5890'
          }else{
            color = '#ff876c'
          }
          var r = suiji(20)
          var x2 = shuju[i].x;
          var y2 = shuju[i].y;
          let bal = new ball(x2,y2,r,color);
          shuju.ballArr.push(bal);
        }
        return shuju
      }


      function animateBall(list2) {
        var count = 1;
        // shuzu();
        clearInterval(t1)
        //setInterval() 间隔指定的毫秒数不停地执行指定的代码,第一个参数是函数（function）,第二个参数间隔的毫秒数。
        t1 = setInterval(function () {
          // console.log(ballArr);
          ctx.clearRect(0, 0, w, h);
          for (var a=0 ; a<list2.ballArr.length;a++){
            list2.ballArr[a].guiji(count)
          }
          if (count === 100) {
            clearInterval(t1);  //clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
          }
          count++;
        }, 30)
      }

      function start(a,b,t){
        var list2 = a
        var list3 = b
        setTimeout(()=>{
          renlateTow(list2,list3)
          animateBall(list2)
        },4000*t)


      }

      function renlateTow(list2,list3){

        for (let i = 0; i <list2.length ;i++){
          let v = suiji(list3.length)
          list2.ballArr[i].x1 = list3.ballArr[v].x2
          list2.ballArr[i].dx = list2.ballArr[i].x2 - list2.ballArr[i].x1
          list2.ballArr[i].y1 = list3.ballArr[v].y2
          list2.ballArr[i].dy = list2.ballArr[i].y2 - list2.ballArr[i].y1
        }
      }
      //先获取对象数组
      var a = shuzus(shuju1)
      var b = shuzus(shuju2)
      setTimeout(() => {
          const target = () => {
            start(a,b,0)
            start(b,a,1)
            return target
          }
          setInterval(target(), 8000)
      }, 200)




      //   class ball{
      //     constructor(dx, dy) {
      //       this.x = range(w)
      //       this.y = range(h)
      //       //目标位置
      //       this.dx = dx
      //       this.dy = dy
      //       this.jx = this.dx-this.x
      //       this.jy = this.dy-this.y
      //       this.time = 100
      //       this.color = 'red'
      //     }
      //
      //     guiji(count){
      //         // 后面是速度方程 时间单位为1
      //         // this.x += this.initialX /100;
      //         // this.y += this.initialY /100;
      //         this.x += this.jx * 2 / this.time * (1 - count / this.time);
      //         this.y += this.jy * 2 / this.time * (1 - count / this.time);
      //         huadian(this.x, this.y, 5, this.color);
      //     }
      //
      //   }
      //
      //
      //   function huadian(x, y, r, color) {
      //     //
      //     ctx.beginPath();
      //     ctx.fillStyle = color;
      //     ctx.arc(x, y, r, 0, Math.PI*2);
      //     ctx.fill();
      //   }
      //

      //
      //   function yunxing(){
      //     var shuzu = []
      //     for (var i=0; i<10; i++){
      //       for (var v=0; v<10; v++){
      //
      //         let b = new ball(i,v);
      //         shuzu.push(b);
      //       }
      //     }
      //   }
      //   function xunhuan(){
      //     yunxing()
      //
      //   }
      //   xunhuan()
      // }
    },


  }
}
</script>

<style scoped>

</style>