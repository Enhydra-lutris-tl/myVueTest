<template>
  <canvas id="myCanvas" width='1000' height='600'></canvas>
</template>

<script>
export default {
  name: "CanvasTest",
  mounted() {
      this.ceShi()
    },
  data(){
    return{
      img:require('@/assets/haita.png')
    }
  },
  methods: {
    ceShi() {
      var canvas = document.getElementById('myCanvas')
      var ctx = canvas.getContext('2d')
      canvas.style.cursor = 'none'
      //范围
      var w = 1000,
          h = 600

      class ball {
        constructor(dx, dy, color) {
          //初始坐标
          this.x = suiji(w)
          this.y = suiji(h)
          //目标坐标
          this.dx = dx
          this.dy = dy
          this.bx = 1
          this.by = 1
          this.ex = 1
          this.ey = 1
          //距离
          this.cx = this.dx - this.x
          this.cy = this.dy - this.y
          this.color = color
          this.r = 2
          this.time = 100
          this.ceshi = 1
        }


        guiji(h1) {
          if (h1 === 2 ){
            huadian(this.dx, this.dy, this.r, this.color)
          }else if(h1 === 1){
            this.x += this.cx/this.time
            this.y += this.cy/this.time
            huadian(this.x, this.y, this.r, this.color)
          }else {
            huadian(this.x, this.y, this.r, this.color)
          }
          // {
          //   this.x += this.cx/(this.time*10)
          //   this.y += this.cy/(this.time*10)
          //   huadian(this.x, this.y, this.r, this.color)
          // }
        }
      }


      // function range(i){
      //   return Math.random()*i
      // }


      function suiji(i) {
        return Math.floor(Math.random() * i)
      }

      function huadian(x, y, r, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      function yuanhuan(x, y, r, color){
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      var color = [
        '#45bfc3', '#4bcfbc', '#69dead', '#93ea98', '#c4f382', '#f9f871', '#13abd1', '#4293d3', '#7676c0', '#995498', '#a33561'
      ]

      function getImgData(img) {
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, 330, 267);
        var copy = ctx.getImageData(0, 0, 330, 267); // 获取像素点数据
        img.ballArr = [];
        // 筛选有效像素点
        ctx.clearRect(0, 0, w, h);
        for (var dy = 0; dy < 267; dy += 4) {
          for (var dx = 0; dx < 330; dx += 4) {
            // 像素点的序号
            var index = dx + dy * 330;
            // 帅选条件为透明度
            var a = copy.data[index * 4 + 3];
            var color2 = color[suiji(color.length)];
            if (a > 100) {
              // 符合条件条件的坐标绘制粒子
              let bal = new ball(dx+335, dy+166.5, color2);
              img.ballArr.push(bal);
              // bal.draw();
            }
          }
        }
      }


      //定义鼠标坐标数值
      var zuobiao = {
        mouseClientX: '', mouseClientY: ''
      }
      //计算鼠标相对于canvas的坐标
      document.onmousemove = function (e) {
        //canvas相对于网页窗口的位置
        var k = canvas.getBoundingClientRect()
        //鼠标位置 e.clientX +','+ e.clientY
        //鼠标相对于canvas的位置
        zuobiao.mouseClientX = e.clientX - k.left
        zuobiao.mouseClientY = e.clientY - k.top
      }

      //定时器
      var t1

      function animateBall(img) {
        clearInterval(t1)
        t1 = setInterval(function () {
          ctx.clearRect(0, 0, w, h)
          yuanhuan(zuobiao.mouseClientX, zuobiao.mouseClientY , 15 ,'#ffffff' )
          huadian(zuobiao.mouseClientX, zuobiao.mouseClientY , 5 ,'#ffffff' )
          for (let a = 0; a < img.ballArr.length; a++) {
            if (img.ballArr[a].by === 1) {
              img.ballArr[a].bx = img.ballArr[a].dx
              img.ballArr[a].by = img.ballArr[a].dy
            }
            // console.log(img.ballArr[a].dx === chushi.ballArr[a].dx)
            //计算点和鼠标的距离
            var m = img.ballArr[a].bx - zuobiao.mouseClientX,
                n = img.ballArr[a].by - zuobiao.mouseClientY
            if (m < 0) {
              m = m * -1
            } else if (n < 0) {
              n = n * -1
            }
            var banjing = Math.sqrt(m * m + n * n)
            var o = img.ballArr[a].x - zuobiao.mouseClientX,
                p = img.ballArr[a].y - zuobiao.mouseClientY
            if (o < 0) {
              o = o * -1
            } else if (p < 0) {
              p = p * -1
            }
            var banjing2 = Math.sqrt(o * o + p * p)


            var h1 = 2
            //筛选距离鼠标位置小于20的粒子，向鼠标位置靠拢
            if (banjing >= 0 && banjing < 20) {
              img.ballArr[a].dx = zuobiao.mouseClientX
              img.ballArr[a].dy = zuobiao.mouseClientY
              if (banjing2 >= 0 && banjing2 < 5 ) {
                if (img.ballArr[a].ceshi === 1){
                  img.ballArr[a].x = img.ballArr[a].bx
                  img.ballArr[a].y = img.ballArr[a].by
                  img.ballArr[a].cx = img.ballArr[a].dx - img.ballArr[a].x
                  img.ballArr[a].cy = img.ballArr[a].dy - img.ballArr[a].y
                  h1 = 1
                  img.ballArr[a].ceshi = 2
                }else {
                  h1 = 2
                }
              } else{
                h1 = 1
              }
            } else if(banjing <= 20){
              img.ballArr[a].dx = zuobiao.mouseClientX
              img.ballArr[a].dy = zuobiao.mouseClientY
              img.ballArr[a].cx = img.ballArr[a].dx - img.ballArr[a].x
              img.ballArr[a].cy = img.ballArr[a].dy - img.ballArr[a].y
              h1 = 1
            }else if (img.ballArr[a].dx === img.ballArr[a].bx && img.ballArr[a].dy === img.ballArr[a].by) {
              img.ballArr[a].x =img.ballArr[a].bx
              img.ballArr[a].y = img.ballArr[a].by
              h1 = 2
            } else {
              img.ballArr[a].x = zuobiao.mouseClientX
              img.ballArr[a].y = zuobiao.mouseClientY
              img.ballArr[a].dx = img.ballArr[a].bx
              img.ballArr[a].dy = img.ballArr[a].by
              img.ballArr[a].cx = img.ballArr[a].dx - img.ballArr[a].x
              img.ballArr[a].cy = img.ballArr[a].dy - img.ballArr[a].y
              h1 = 1
              img.ballArr[a].ceshi = 2
            }
            img.ballArr[a].guiji(h1)
          }

        }, 30)
      }




      //获取图片
      var img = new Image()
      img.src = this.img

      img.onload = function () {
        getImgData(img)
      }
      //使用目标点画图
      animateBall(img)
    }


  }
}
</script>

<style scoped>

</style>