<template>
  <div class="navigationBigBox" ref="navigationBigBox">
    <div class="unfoldButton" @click="navigationShrink">
      <div ref="buttonArrow">&lt;</div>
    </div>
    <div class="navigationBox">
      <router-link to='/IndexBody' class="navigationButton" active-class="active">首页</router-link>
      <router-link to='/IndexHomePage' class="navigationButton" active-class="active">主页</router-link>
      <router-link to="/IndexNotes" class="navigationButton" active-class="active">笔记</router-link>
      <router-link to="/IndexGames" class="navigationButton" active-class="active">游戏</router-link>
    </div>
  </div>

  <router-view v-slot="{Component}">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
  <canvas id="backCanvas" :width= width :height= height></canvas>
<!--  <IndexBody :yiru = 'yiru' :yichu = 'yichu'></IndexBody>-->
<!--  <IndexHomePage :yichu = 'yichu' :shuru = 'shuru' :yiru = 'yiru'></IndexHomePage>-->
  <div class="box" id="box">
    <div class="yuandian" id="yuandian"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight,
      mm:false
    }
  },
  mounted() {
    this.Back()
    this.mouseBack()
  },
  // 鼠标时间
  methods: {
    navigationShrink(){
      if (this.mm === false){
        this.$refs.navigationBigBox.style.right = '1%'
        this.$refs.buttonArrow.style.transform = 'rotate(180deg)'
        this.mm = true
      }else if (this.mm === true){
        this.$refs.navigationBigBox.style.right = '-50px'
        this.$refs.buttonArrow.style.transform = 'rotate(0deg)'
        this.mm = false
      }

    },
    yiru() {
      var box = document.getElementById('box')
      var yuandian = document.getElementById('yuandian')
      box.style.background = 'rgba(255,255,255,0.29)'
      box.style.transition = '0.1s'
      box.style.width = '40px'
      box.style.height = '40px'
      yuandian.style.background = 'none'
      yuandian.style.transition = '0.1s'
    },
    yichu() {
      var box = document.getElementById('box')
      var yuandian = document.getElementById('yuandian')
      box.style.background = 'none'
      box.style.transition = 'none'
      box.style.width = '50px'
      box.style.height = '50px'
      yuandian.style.background = 'white'
      yuandian.style.transition = 'none'
    },
    shuru(){
      var box = document.getElementById('box')
      var yuandian = document.getElementById('yuandian')
      box.style.background = 'rgba(255,255,255,0.29)'
      box.style.transition = '0.1s'
      box.style.width = '20px'
      box.style.height = '40px'
      yuandian.style.background = 'none'
      yuandian.style.transition = '0.1s'
    },
    mouseBack() {
      var box = document.getElementById('box')

      //定义鼠标坐标数值
      var weizhi = {
        mouseX: '', mouseY: ''
      }
      //计算鼠标相对于canvas的坐标
      document.onmousemove = function (e) {
        //canvas相对于网页窗口的位置
        weizhi.mouseX = e.clientX - 27
        weizhi.mouseY = e.clientY - 27
      }
      var t1

      function start() {
        clearInterval(t1)
        t1 = setInterval(function () {
          box.style.left = weizhi.mouseX + 'px'
          box.style.top = weizhi.mouseY + 'px'
        }, 30)
      }
      start()
    },
    Back(){
      var canvas = document.getElementById('backCanvas')
      var ctx = canvas.getContext('2d')
      document.documentElement.style.overflowY = 'hidden'
      //范围
      var w = this.width,
          h = this.height
      class ball{
        constructor(z,x,y,r,color2) {
          //随机点
          this.x = x
          this.y = y
          this.color2 = color2
          this.z = z
          this.r = r
        }
        guiji(){
          this.x += 0
          this.y += suijiTwo(suiji(10))
          if (this.y > h ){
            this.y = 0
          }
          zi(this.z,this.x,this.y,this.r,this.color2)
        }
      }
      //定义字符
      var zifu = ['E','n','h','y','d','r','a','l','u','t','r','l','s']
      //定义字符颜色
      var zifuColor = ['rgba(45,220,255,0.76)','rgba(0,233,238,0.75)','rgba(67,243,209,0.8)','rgba(131,249,174,0.73)','#befb8a','#f9f871']
      function zi(z, x, y, r, color2){
        ctx.beginPath()
        ctx.strokeStyle = color2
        ctx.font=r + 'px Arial';
        ctx.strokeText(z, x, y);
      }

      function suijiTwo(i){
        return Math.random()*i
      }

      function suiji(i){
        return Math.floor(Math.random()*i)
      }

      function shuzu(){
        var zu = []
        for (var i = 0; i < 300; i++){
          let duixiang = {x:suiji(w),y:suiji(h),r:suiji(3)}
          zu.push(duixiang)
        }
        return zu
      }

      function shuzutwo(shuzu) {
        shuzu.ballArr = []
        for (var i = 0; i < shuzu.length; i++){
          var x = shuzu[i].x
          var y = shuzu[i].y
          var z = zifu[suiji(zifu.length)]
          var r = suiji(30)
          var color2 = zifuColor[suiji(zifuColor.length)]

          let bal = new ball(z, x, y, r, color2)
          shuzu.ballArr.push(bal)
        }
        return shuzu
      }

      //定义鼠标坐标数值
      var weizhi = {
        mouseX:'',mouseY:''
      }
      //计算鼠标相对于canvas的坐标
      document.onmousemove = function (e) {
        //canvas相对于网页窗口的位置
        weizhi.mouseX = e.clientX - 27
        weizhi.mouseY = e.clientY - 27
      }
      var t1

      function start(shuzu2) {
        clearInterval(t1)
        t1 = setInterval(function (){
          ctx.clearRect(0,0,w,h)
          for (var i = 0; i < shuzu2.ballArr.length; i++){
            shuzu2.ballArr[i].guiji()
          }
        },30)
      }
      function yunxin(){
        var shuzu1 = shuzu()
        var shuzu2 = shuzutwo(shuzu1)
        start(shuzu2)
      }
      yunxin()
    },
    appSize(){
      var t2
      clearInterval(t2)
      t2 = setInterval(function (){
        var n = document.getElementById('app')
        n.style.width = document.documentElement.clientWidth + 'px'
        n.style.height = document.documentElement.clientHeight + 'px'
      },30)
    }
  }
}
</script>

<style>
body{
  background: rgb(0,0,0);
}
#app {
  text-align: center;
  height: auto;
}
canvas{
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}
.box{
  z-index: 3;
  position: fixed;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: white solid 2px;
  /*鼠标穿透*/
  pointer-events:none;

}
.yuandian{
  position: absolute;
  top: 23px;
  left: 23px;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: white;
}
.navigationBigBox{
  position: absolute;
  display: flex;
  z-index: 3;
  right: -50px;
  top: calc(50% - 120px);
  transition: right 1s;
}
.unfoldButton{
  height: 60px;
  width: 30px;
  border-radius: 4px 0 0 4px;
  background: rgb(32,32,32);
}
.unfoldButton div{
  margin-top: 20px;
  height: 20px;
  line-height: 20px;
  transition: 0.3s;
}
.navigationBox{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50px;
  border-radius: 0 4px 4px 4px;
  background: rgb(32,32,32);
}
.navigationButton{
  line-height: 60px;
  height: 30%;
  width: 100%;
  border-radius: 4px;
  text-decoration-line: none;
  color: white;
  outline: none;
}
.active{
  background: rgb(42,39,39);
  color: #cdcdcd;
}
.fade-enter-active,
.fade-leave-active{
  transition: all 0.5s ease-out;
}
.fade-enter-from{
  position: absolute;
  top: 100%;
}
.fade-enter-to,
.fade-leave-from{
  position: absolute;
  top: 0;
}
.fade-leave-to{
  position: absolute;
  top: -100%;
}
/*.fade-leave-active {*/
/*  transition: 0.5s;*/
/*  animation: fadeOut 0.5s;*/
/*}*/

@keyframes fadeIn {
  0%{
    top: 100%;
  }
  100%{
    top: 0;
  }
}
@keyframes fadeOut {
  0%{
    top: 0;
  }
  100%{
    top: -100%;
  }
}
</style>
