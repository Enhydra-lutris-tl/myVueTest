<template>
    <div class="cardBox">
      <ul class="slideText">
        <li class="slideText1">{{slideText1}}</li>
        <li class="slideText2">{{slideText2}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "NewsCard",
  data(){
    return{
      slideText1:'Main story cpisode 08 ROARNGFLARE releascd',
      slideText2:'EVENT/ 2020.11.01'
    }
  }
}
</script>

<style scoped>
.cardBox{
  width: 440px;
  height: 150px;
  background:rgb(32,34,36);
  margin-left: 15px;
  transition: 0.3s;
}
.cardBox:hover{
  width: 450px;
  height: 160px;
}
.slideText{
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 40px;
  margin-top: 30px;
  height: 100px;
}
.slideText1{
  color: #d5d5d5;
  margin-bottom: 20px;
  font-weight: bold;
}
.slideText2{
  color: #636363;
}
</style>