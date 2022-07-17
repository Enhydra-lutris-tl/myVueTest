<template>
  <div class="back">
    <div class="title">
      <div class="mainTitle">My Tree Hole</div>
      <div class="buttonBox">
        <button @mouseover="this.yiru" @mouseout="this.yichu">
          <a class="iconfont icon-dizhi"></a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexBody",
  data(){
    return{
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    }
  },
  props:{
    yiru:{
      type:Function
    },
    yichu:{
      type:Function
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'download';
  src: url(/src/font/Literata-Regular-opsz=72.ttf);
  font-weight: normal;
}

.back{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /*隐藏鼠标指针*/
  cursor: none;
}
.title{
  width: 600px;
  position: absolute;
  left: calc(50% - 300px);
}

.mainTitle{
  font-family: download;
  font-weight: bold;
  font-size: 76px;
  color: white;
}
.buttonBox{
  position: relative;
  /*calc 计算属性*/
  left: calc(50% - 37px);
  top: 60px;
  height: 74px;
  width: 74px;
  border-radius: 50%;
  background-image: linear-gradient(#2ddcff,#00e9ee,#43f3d1,#83f9ae,#befb8a,#f9f871);
}
button{
  position: absolute;
  left: 2px;
  top: 2px;
  height: 70px;
  width: 70px;
  background: #2a2727;
  border-radius: 50%;
  border: none;
  cursor: none;
  transition: 0.3s;
}

button:hover{
  animation-play-state: paused;
  background: rgba(255, 255, 255, 0.19);
}

a{
  display: block;
  position: absolute;
  width: 70px;
  height: 70px;
  line-height: 70px;
  top: 0;
  left: 0;
  font-size: 50px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  /*定义一个动画*/
  animation: jrbutton 1s;
  /*动画持续进行*/
  animation-iteration-count: infinite
}
@keyframes jrbutton {
  0%{top: 0}
  50%{top: 5px}
  100%{top: 0}
}
</style>