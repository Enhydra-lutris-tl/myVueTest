<template>
<div class="gameBack">

<!--  构建导航栏-->
<!--  职能导航栏-->
  <div class="gameFunction">
    <div
        v-for="(gameFunction,index) in gameFunctions" :key="gameFunction.id"
        class="gameFunctionButton"
        ref="gameFunctionButton"
        @click="getGameFunctionName(gameFunction.name,index)"
    >
      {{gameFunction.name}}
    </div>
  </div>
  <hr>
<!--  分支导航栏-->
  <div class="branchNameBox">
    <div
        v-for="branchName in gameFunctionBranch.branchNames" :key="branchName.id"
        class="branchNameButton"
    >
      {{branchName.branchName}}
    </div>
  </div>
<!--  角色导航栏-->
  <div class="characterBranchBox">
    <div class="characterBranch" ref="characterBranch">
      <div v-for="(list,index) in characterLists" :key="index"
           @click="getCharacterName(index,$event)"
           ref="CharacterName"
      >
        {{list}}
      </div>
    </div>
    <div class="characterBranch2" ref="characterBranch2">
      <div v-for="(list,index) in characterLists" :key="index"
           @click="getCharacterName(index,$event)"
           ref="CharacterName"
      >
        {{list}}
      </div>
    </div>
  </div>


<!--  内容-->
  <div class="characterText">
    <!--  人物图片-->
    <div  class="characterImgBox">
      <img :src="imgs[0].img" class="characterImg" alt="图片未加载！" ref="index"/>
      <div class="characterClothesButtonGroup">
        <div
            v-for="(characterClothes,index) in characterClothes" :key="index"
            type="info"
            class="characterClothesButton"
        >
          {{characterClothes}}
        </div>
      </div>

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
          {id:'01',name:'先锋'},
          {id:'02',name:'近卫'},
          {id:'03',name:'狙击'},
          {id:'04',name:'重装'},
          {id:'05',name:'医疗'},
          {id:'06',name:'辅助'},
          {id:'07',name:'术士'},
          {id:'08',name:'特种'},
      ],
      branch:[
        {
          id:'先锋',
          branchNames:[
              {id:'0101',branchName:'冲锋手'},
              {id:'0102',branchName:'战术家'},
              {id:'0103',branchName:'尖兵'},
              {id:'0104',branchName:'执旗手'},
          ]
        },
        {
          id:'近卫',
          branchNames:[
              {id:'0201',branchName:'斗士'},
              {id:'0202',branchName:'教官'},
              {id:'0203',branchName:'武士'},
              {id:'0204',branchName:'强攻手'},
              {id:'0205',branchName:'术战者'},
              {id:'0206',branchName:'领主'},
              {id:'0207',branchName:'剑豪'},
              {id:'0208',branchName:'无畏者'},
              {id:'0209',branchName:'无畏者'},
              {id:'0210',branchName:'解放者'},
              {id:'0211',branchName:'收割者'},
          ]
        },
        {
          id:'狙击',
          branchNames:[
              {id:'0301',branchName:'速射'},
              {id:'0302',branchName:'重射手'},
              {id:'0303',branchName:'投掷手'},
              {id:'0304',branchName:'散射手'},
              {id:'0305',branchName:'攻城手'},
              {id:'0306',branchName:'神射手'},
              {id:'0307',branchName:'炮手'},
          ]
        },
        {
          id:'重装',
          branchNames:[
              {id:'0401',branchName:'守护者'},
              {id:'0402',branchName:'铁卫'},
              {id:'0403',branchName:'驭法铁卫'},
              {id:'0404',branchName:'不屈者'},
              {id:'0405',branchName:'决战者'},
          ]
        },
        {
          id:'医疗',
          branchNames:[
              {id:'0501',branchName:'医师'},
              {id:'0502',branchName:'群愈师'},
              {id:'0503',branchName:'疗养师'},

          ]
        },
        {
          id:'辅助',
          branchNames:[
              {id:'0601',branchName:'吟游者'},
              {id:'0602',branchName:'削弱者'},
              {id:'0603',branchName:'护佑者'},
              {id:'0604',branchName:'召唤师'},
              {id:'0605',branchName:'凝滞者'},
          ]
        },
        {
          id:'术士',
          branchNames:[
              {id:'0701',branchName:'驭械术士'},
              {id:'0702',branchName:'中坚术士'},
              {id:'0703',branchName:'阵法术士'},
              {id:'0704',branchName:'链术士'},
              {id:'0705',branchName:'轰击术士'},
              {id:'0706',branchName:'扩散术士'},
              {id:'0707',branchName:'秘术师'},
          ]
        },
        {
          id:'特种',
          branchNames:[
              {id:'0801',branchName:'陷阱师'},
              {id:'0802',branchName:'处决者'},
              {id:'0803',branchName:'行商'},
              {id:'0804',branchName:'傀儡师'},
              {id:'0805',branchName:'推击手'},
              {id:'0806',branchName:'怪杰'},
              {id:'0807',branchName:'钩锁师'},
              {id:'0808',branchName:'伏击客'},
          ]
        },
      ],
      characterLists:['松果','塞雷娅','蓝毒','史尔特尔','阿米娅','煌','赫默','闪灵','泥岩','伊芙利特'],
      characterClothes:['精英一','精英二','xxx'],
      ceshi1:'重装'
    }
  },
  computed:{
    gameFunctionBranch(){
      for (let i = 0; i < this.branch.length; i++){
        if (this.branch[i].id === this.ceshi1){
          var a = this.branch[i]
        }
      }
      return a
    }
  },

  methods:{
    getGameFunctionName(name,index){
      for (let i = 0; i < this.$refs.gameFunctionButton.length; i++){
        this.$refs.gameFunctionButton[i].className = 'gameFunctionButton'
      }
      this.ceshi1 = name
      this.$refs.gameFunctionButton[index].className = 'gameFunctionButton active'
    },
    getCharacterName(index,e){
      // 先清除active样式
      for (let x=0; x < this.$refs.CharacterName.length; x++){
        this.$refs.CharacterName[x].className = ''
      }
      //对点击的按钮添加active2样式
      //二次点击当前活动选项无效
      if (e.target.className === ''){
        this.$refs.characterBranch.style.top = `${240 - (index+1)*60}px`
        //判断index值 给予二号框top值
        if (index === 3){
          this.$refs.characterBranch2.style.top = '600px'
        }else if (0 <= index && index < 3){
          this.$refs.characterBranch2.style.top = `${this.$refs.characterBranch.offsetTop - 600}px`
        }else {
          this.$refs.characterBranch2.style.top = `${this.$refs.characterBranch.offsetTop + 600}px`
        }
        this.$refs.CharacterName[index].className = 'CharacterName-active'
      }
    }
  },
  mounted() {
    this.$refs.CharacterName[3].className = 'CharacterName-active'
  }
}
</script>

<style scoped>
.gameBack{
  position: absolute;
  left: 10%;
  width: 90%;
  height: 100%;
  overflow: hidden;
}
/*导航相关*/
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
.branchNameBox{
  display: flex;
}
.branchNameButton{
  background: #2a2727;
  width: 60px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  transition: 0.3s;
}
.branchNameButton:hover{
  background: #3e3a3a;
}
/*角色内容相关*/
.characterText{
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 80%;
  top: 13%;
  left: 15%;
}
.characterImgBox{
  position: relative;
  height: 700px;
  width: 700px;
  overflow: hidden;
}
.characterImg{
  width: 100%;
}
.characterClothesButtonGroup{
  position: absolute;
  top: 0;
  left: 30%;
  display: flex;
}
.characterClothesButton{
  background: rgb(42,39,39);
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  transition: 0.3s;
}
.characterClothesButton:hover{
  background: rgb(69, 69, 69);
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
  position: absolute;
  top: calc(50% - 300px);
  height: 600px;
  width: 10%;
  overflow: hidden;
}
.characterBranch{
  position: absolute;
  z-index: 1;
  width: 100%;
  left: 15px;
  /*transition: 0.3s;*/
}
.characterBranch2{
  position: absolute;
  z-index: 1;
  width: 100%;
  left: 15px;
  top: 600px;
  font-size: 22px;
  /*transition: 0.3s;*/

}
.characterBranch div{
  height: 60px;
  width: 100%;
  line-height: 60px;
}
.characterBranch2 div{
  height: 60px;
  width: 100%;
  line-height: 60px;
}
.CharacterName-active{
  font-size: 26px;
  color: #00e9ee;
  transition: 0.3s;
}
</style>