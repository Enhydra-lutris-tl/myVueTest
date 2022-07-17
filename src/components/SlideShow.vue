<template>
<!--  轮播组件-->
  <div class="slideBack">
      <div class="slideImgBox">
          <div class="slideImg" v-for="(img,index) in img" v-show="index===mark" :key="index">
            <img class="slideImg2" :src='img' alt="图片挂了！">
          </div>
      </div>

    <ul class="slideText">
      <li class="slideText1">Main story cpisode 08 ROARNGFLARE releascd</li>
      <li class="slideText2">EVENT/ 2020.11.01</li>
    </ul>
    <ul class="slidePage">
      <li class="slidePage1" v-for="(img,index) in img" :class="{'active':index===mark}" :key="index"></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "SlideShow",
  data(){
    return {
      mark:0,
      img:[
          require('@/assets/slideImg1.jpeg'),
          require('@/assets/slideImg2.jpeg'),
          require('@/assets/slideImg3.jpeg')
      ]
    }
  },
  methods:{

    autoPlay () {
      this.mark++;
      if (this.mark === 3) { //当遍历到最后一张图片置零
        this.mark = 0
   }
  },
  play () {
      setInterval(this.autoPlay, 3000)
  },
  change (i) {
      this.mark = i
  }
 },
 created () {
    this.play()
 }
}

</script>

<style scoped>
.slideBack{
  position: absolute;
  top: 30%;
  left: 14%;
  background: rgb(32,34,36);
  height: 520px;
  width: 440px;
  overflow: hidden;
  /*添加阴影* 前两个属性为位置 第三属性为模糊程度 第四属性为颜色/
  /*box-shadow: 5px 5px 5px rgb(62, 62, 64);*/
}
.slideImgBox{
  width: 440px;
  height: 400px;
}
.slideImg{
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 440px;
  height: 400px;

}
.slideImg2{
  height: 100%;
}
.slideText{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin-top: 20px;
  padding-left: 40px;
}
.slideText1{
  color: white;
  margin-bottom: 20px;
}
.slideText2{
  color: #636363;
}
.slidePage{
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 10px 15px 0 0;
}
.slidePage1{
  width: 10px;
  height: 10px;
  margin: 0 3px 0 3px;
  background: white;
  transition: 0.3s;
}
.active{
  width: 25px;
  background: aqua;
}




</style>