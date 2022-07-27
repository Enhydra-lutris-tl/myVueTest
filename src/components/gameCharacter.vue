<template>
<div class="gameBack">

<!--  构建导航栏-->
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
  <div class="characterBranchBox">
    <div class="characterBranch">
      <div v-for="(list,index) in list" :key="index"
           @click="ceshi(index,$event)"
           ref="ceshi">{{list}}</div>
    </div>
  </div>


<!--  内容-->

  <div class="characterText">
    <!--  人物图片-->
    <div  class="characterImgBox">
      <img :src="imgs[0].img" class="characterImg" alt="图片未加载！" ref="index"/>
    </div>
    <div class="characterSynopsisCard">
      <div class="characterName">史尔特尔</div>
      <!--分支介绍-->
      <div class="functionBranchBox">
        <div class="functionBranchIcon">
          <img :src="imgs[0].branch.icon" alt="分支图标">
          <div>{{imgs[0].branch.name}}</div>
        </div>
        <div class="functionBranchText" >{{imgs[0].branch.text}}</div>
      </div>

      <!--角色属性-->
      <div class="characterAttributeBox">
        <el-descriptions title="角色属性" border :column="2">
          <el-descriptions-item label="职能/分支">近卫/术战者</el-descriptions-item>
          <el-descriptions-item label="再部署时间">70s</el-descriptions-item>
          <el-descriptions-item label="初始部署费用">19-21</el-descriptions-item>
          <el-descriptions-item label="阻挡数">1</el-descriptions-item>
          <el-descriptions-item label="攻击间隔">1.25s</el-descriptions-item>
        </el-descriptions>
      </div>

      <!--  技能介绍-->
      <div class="characterSkillBoxGroup">
        <div class="characterSkillBox">
          <div class="characterSkillIcon">
            <img :src="imgs[0].skill[0]" alt="技能图标">
          </div>
          <div class="characterSkillText">下次攻击的攻击力提升至200%，如果将目标击倒则立即恢复所有技力 </div>
        </div>
        <div class="characterSkillBox">
          <div class="characterSkillIcon">
            <img :src="imgs[0].skill[1]" alt="技能图标">
          </div>
          <div class="characterSkillText">攻击力+50%，攻击距离+1，攻击目标数+1，仅攻击到一个敌人时对其攻击力提升至140% </div>
        </div>
        <div class="characterSkillBox">
          <div class="characterSkillIcon">
            <img :src="imgs[0].skill[2]" alt="技能图标">
          </div>
          <div class="characterSkillText">立即恢复所有生命；攻击力+180%，攻击距离+2，攻击目标数+2，生命上限+5000，逐渐失去生命（60秒后到达最大生命20%/秒）；持续时间无限 </div>
        </div>
      </div>


    </div>

  </div>


</div>
</template>

<script>
export default {
  name: "gameCharacter",
  data(){
    return{
      imgs:[
        {
          id:'00001',
          name:'史尔特尔',
          img:require('@/assets/42.png'),
          skill:[require('@/assets/技能_烈焰魔剑.png'),require('@/assets/技能_熔核巨影.png'),require('@/assets/技能_黄昏.png')],
          branch:{icon:require('@/assets/职业分支图标_术战者.png'),name:'术战者',text:'攻击造成法术伤害'}
        },
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
      ],
      list:['1','2','3','4','5','6','7','8','9','10']
    }
  },
  methods:{
    ceshi(index,e){
      // 先清除active样式
      for (let x=0; x < this.$refs.ceshi.length; x++){
        this.$refs.ceshi[x].className = ''
      }
      //对点击的按钮添加active2样式
      if (e.target.className === ''){
        e.target.className = e.target.className + ' active2'
      }
      console.log(index)

    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.gameBack{
  position: relative;
  width: 90%;
  height: 100%;
  overflow: hidden;
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
.characterText{
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80%;
  top: 13%;
  left: 15%;
}
.characterImgBox{
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 700px;
  width: 700px;
  overflow: hidden;
  transition: 0.3s;
}
.characterImg{
  height: 100%;
  transition: 0.3s;
}
.characterSynopsisCard{
  background: rgba(42, 39, 39, 0.46);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.characterName{
  margin: 15px 0 15px 0;
  font-size: 28px;
}
.functionBranchBox{
  width: 96%;
  display: flex;
}
.functionBranchIcon{
  height: 60px;
  width: 60px;
}
.functionBranchIcon img{
  margin-top: 10px;
  height: 30px;
}
.functionBranchIcon div{
  font-size: 12px;
}
.functionBranchText{
  box-sizing: border-box;
  padding-left: 10px;
  height: 60px;
  width: 320px;
  text-align: left;
  font-size: 14px;
  line-height: 60px;
  border: solid 1px var(--el-border-color);
}

.characterAttributeBox{
  margin-top: 5px;
  width: 96%;
}
.characterSkillBoxGroup{
  width: 96%;
}
.characterSkillBox{
  display: flex;
  margin-top: 5px;
}

.characterSkillIcon{
  width: 80px;
  height: 80px;
}
.characterSkillIcon img{
  height: 100%;
}
.characterSkillText{
  height: 80px;
  width: 300px;
  box-sizing: border-box;
  font-size: 12px;
  padding: 5px 3px 2px 5px;
  line-height: 18px;
  border: solid 1px var(--el-border-color);
}
.characterBranchBox{

}
.characterBranch{
  position: absolute;
  top: calc(50% - 300px);
  left: 15px;
  width: 10%;
  height: 600px;
  background: white;
}
.characterBranch div{
  position: absolute;
  height: 60px;
  width: 100%;
  background: #0086b3;
  line-height: 60px;
}
.active2{
  font-size: 24px;
  color: #2a2727;
  border:solid 2px var(--el-border-color);
}
</style>