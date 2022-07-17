<template>
<div class="personalBox">
  <div class="personBox" >
    <div class="headPortrait">
      <img alt="头像加载失败" :src="img">
    </div>
    <div class="personName">Enhydra lutris</div>
  </div>

  <div class="briefIntroduction">
    <input  v-model="msg" @mouseover="shuru" @mouseout="yichu">
  </div>
  <div class="personCall">
    <a class="iconfont icon-QQ" @mouseover="yiru" @mouseout="yichu"></a>
    <a class="iconfont icon-weibo" @mouseover="yiru" @mouseout="yichu"></a>
    <a class="iconfont icon-bilibili-fill" @mouseover="yiru" @mouseout="yichu"></a>
  </div>
  <div class="more" @mouseover="yiru" @mouseout="yichu">more+</div>
</div>
</template>

<script>
export default {
  name: "personalCard",
  data(){
    return{
      img:require('@/assets/headPortrait.jpg'),
      msg:'填写简介'
    }
  },
  props:{
    yichu:{
      type:Function
    },
    shuru:{
      type:Function
    },
    yiru:{
      type:Function
    }
  }

}
</script>

<style scoped>
.personalBox{
  position: relative;
  background: rgb(32,32,32);
  margin-left: calc(25% - 300px);
  height: 150px;
  width: 300px;
  border-radius: 8px;
  cursor: none;
}
.personBox{
  display: flex;
  align-items: center;
  width: 250px;
  margin: 15px 0 0 25px;
}
.headPortrait{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
img{
  height: 100%;
  width: 100%;
}
.personName{
  color: white;
  font-size: 20px;
  height: 25px;
  font-weight: bold;
  margin-left: 25px;
}
.briefIntroduction{
  margin: 10px 0 0 25px;
  width: 250px;
}
.briefIntroduction input{
  background: #2a2727;
  width: 100%;
  height: 25px;
  border-radius: 4px;
  border: none;
  color: white;
  outline: none;
  padding-left: 8px;
  cursor: none;
}
/*:focus选择器修改输入框聚焦时的样式*/
.briefIntroduction input:focus{
  background: #3e3a3a;
  border: white solid 2px;
}
.personCall{
  margin: 10px 0 0 25px;
  display: flex;
  justify-content: space-between;
  /*垂直居中*/
  align-items: center;
  height: 30px;
  width: 90px;

}
.personCall .iconfont{
  color: white;
  font-size: 20px;
}
.more{
  position: absolute;
  right: -5px;
  bottom: 0;
  height: 25px;
  width: 60px;
  font-weight: bold;
  color: #afafaf;
  background: #2a2727;
  border-radius:0 0 8px 0;
}
</style>