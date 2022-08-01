<template>
<div class="jx3WatchBox">
  <div class="jx3ServerBox">
    <h3>主服务器状态</h3>
    <div class="jx3ServerWatchBox">
      <div
          class="jx3ServerWatch"
          v-for="serverState in serverStates"
          :key="serverState.id"
      >
        <div :class="'jx3StateIcon'+serverState.status"></div>
        <div class="jx3ServerName">{{ serverState.server }}</div>
      </div>
    </div>
    <div class="stateIconExplain">
      <div class="explain">
        <div class="jx3StateIcon1"></div><div class="explainText">为已开服</div>
      </div>
      <div class="explain">
        <div class="jx3StateIcon0"></div><div class="explainText">为未开服</div>
      </div>
      <div class="getServerTime">上次获取：{{getServerTime}}</div>
    </div>
    <button class="getButton" @click="getServerState">获取状态</button>
  </div>


  <div class="jx3DoEverydayBox">
    <div class="DoEverydayCard">
      <div class="DoEverydayList">
        <div class="doEverydayTitle">时间</div>
        <div class="doEverydayText">{{doEveryday.date}} 星期{{doEveryday.week}}</div>
      </div>
      <div class="DoEverydayList">
        <div class="doEverydayTitle">秘境日常</div>
        <div class="doEverydayText">{{doEveryday.war}}</div>
      </div>
      <div class="DoEverydayList">
        <div class="doEverydayTitle">战场日常</div>
        <div class="doEverydayText">{{doEveryday.battle}}</div>
      </div>
      <div class="DoEverydayList">
        <div class="doEverydayTitle">阵营日常</div>
        <div class="doEverydayText">{{doEveryday.camp}}</div>
      </div>
      <div class="DoEverydayList">
        <div class="doEverydayTitle">驰援日常</div>
        <div class="doEverydayText">{{doEveryday.relief}}</div>
      </div>
      <div class="DoEverydayList" v-show="doEverydayDraw">
        <div class="doEverydayTitle" >美人图</div>
        <div class="doEverydayText">{{doEveryday.draw}}</div>
      </div>
      <div class="DoEverydayList">
        <div class="doEverydayTitle">周常</div>
        <div class="doEverydayTexts">
          <div class="doEverydayText" v-for="(team,index) in doEveryday.team" :key="index">{{team}}</div>
        </div>
      </div>
    </div>
    <button class="getButton" @click="getDoEveryDay">日常获取</button>
  </div>

</div>
</template>

<script>
export default {
  name: "Jx3Watch",
  data(){
    return{
      serverStates:'',
      getServerTime:'',
      doEveryday:'',
    }
  },
  computed:{
    doEverydayDraw(){
      return  Object.prototype.hasOwnProperty.call(this.doEveryday, 'draw');
    }
  },
  created() {
    if (this.serverStates === ''){
      this.getServerState()
    }
    if (this.doEveryday === ''){
      this.getDoEveryDay()
    }
  },
  methods:{
    getServerState(){
      this.axios({
        url:'https://www.jx3api.com/app/check',
        method:'get'
      }).then(res=>{
        this.serverStates = res.data.data.filter(a=>a.server !== '大唐万象')
        this.getServerTime = new Date(res.data.time*1000).toLocaleString()
      })
    },
    getDoEveryDay(){
      this.axios({
        url:'https://www.jx3api.com/app/daily',
        method:'get',
        params:{
          server:'唯我独尊'
        }
      }).then(res=>{
        this.doEveryday = res.data.data;
      })
    }
  }
}
</script>

<style scoped>
.jx3WatchBox{
  position: absolute;
  left: 10%;
  width: 90%;
  height: 100%;
}
.jx3ServerBox{
  position: absolute;
  top: 30px;
  left: calc(50% - 400px);
  width: 800px;
  border: solid 1px var(--el-border-color);
}
.jx3ServerWatchBox{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.jx3ServerWatch{
  display: flex;
  align-items: center;
  width: 18%;
  height: 40px;
  background: #404040;
  margin: 5px 1% 5px 1%;
}
.jx3StateIcon1{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #38bd38;
  margin-left: 10px;
}
.jx3StateIcon0{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #d03636;
  margin-left: 10px;
}
.jx3ServerName{
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  margin-left: 15px;
}
.stateIconExplain{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 300px;
  height: 60px;
  margin-bottom: 15px;
}
.explain{
  display: flex;
  align-items: center;
  width: 45%;
  height: 45%;
}
.explainText{
  height: 22px;
  line-height: 22px;
  margin-left: 15px;
}
.getServerTime{
  width: 90%;
  margin-left: 10px;
  text-align: left;
}
.getButton{
  height: 30px;
  width: 80px;
  background: #404040;
  border: none;
}
.getButton:hover{
  background: #7b7b7b;
}
.jx3ServerBox .getButton{
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.jx3DoEverydayBox{
  position: absolute;
  border: solid 1px var(--el-border-color);
  top: 500px;
  min-width: 385px;
}
.DoEverydayList{
  display: flex;
  box-sizing: border-box;
  border: solid 1px var(--el-border-color);
}
.doEverydayTitle{
  background: #404040;
  text-align: right;
  min-width: 70px;
  padding: 5px 15px 5px 10px;
  border: solid 1px var(--el-border-color);
}
.doEverydayText{
  text-align: left;
  padding: 5px 15px 5px 10px;
}
.jx3DoEverydayBox .getButton{
  margin: 10px 0 10px 0;
}
</style>