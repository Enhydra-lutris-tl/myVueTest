<template>
<div class="gameBack">
  <div class="gameFunction">
    <router-link
        v-for="(gameFunction,index) in gameFunctions" :key="index"
        :to="'/IndexGames/GameFunctionBranch/'+gameFunction.id"
        class="gameFunctionButton"
        active-class="active"
    >
      {{gameFunction.name}}
    </router-link>
  </div>
  <hr>
  <router-view></router-view>
  <div class="gameFunctionBranch"></div>
  <div  class="characterImgBox" v-for="img in imgs" :key="img.id">
    <img :src="img.img" class="characterImg" alt="图片未加载！" ref="index"/>
  </div>
</div>
</template>

<script>
export default {
  name: "gameCharacter",
  data(){
    return{
      imgs:[
        {id:'00001',name:'史尔特尔',img:require('@/assets/42.png')},
          {id:'00002',name:'白金',img:require('@/assets/bg.png')},
          {id:'00003',name:'拉普兰德',img:require('@/assets/lpld.png')},
          {id:'00004',name:'慕斯',img:require('@/assets/ms.png')},
          {id:'00005',name:'松果',img:require('@/assets/sg.png')},
          {id:'00006',name:'幽灵鲨',img:require('@/assets/yls.png')},
      ],
      gameFunctions:[
          {id:'1',name:'先锋'},
          {id:'2',name:'近卫'},
          {id:'3',name:'狙击'},
          {id:'4',name:'重装'},
          {id:'5',name:'医疗'},
          {id:'6',name:'辅助'},
          {id:'7',name:'术士'},
          {id:'8',name:'特种'},
      ]
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style scoped>
.gameBack{
  width: 90%;
  height: 100%;
  overflow: auto;
}
.gameFunction{
  display: flex;
  width: 100%;
  background: #2a2727;
}
.gameFunctionButton{
  display: block;
  height: 40px;
  width: 120px;
  line-height: 40px;
  background: #2a2727;
  text-decoration-line: none;
  outline: none;
  color: white;
  font-size: 18px;
  transition: 0.3s;
}
.active{
  background: #3e3a3a;
}
.characterImgBox{
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 5px;
  height: 60%;
  width: 650px;
  overflow: hidden;
  transition: 0.3s;
}
.characterImg{
  height: 100%;
  transition: 0.3s;
}
</style>