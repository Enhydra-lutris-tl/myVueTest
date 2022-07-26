<template>
  <div class="branchNameBox">
    <div
        v-for="branchName in branchNamed" :key="branchName.id"
        class="branchNameButton"
    >
      {{branchName.branchName}}
    </div>
  </div>


</template>

<script>
export default {
  name: "GameFunctionBranch",
  computed:{
    branchNamed(){
      var a = []
      for (let i=0; i < this.branch.length; i++){
        if (this.branch[i].id === this.$route.params.id){
          a = this.branch[i].branchNames
        }
      }
      return a
    }
  },
  data(){
    return{
      branch:[
        {
          id:'1',
          branchNames:[
              {id:'101',branchName:'冲锋手'},
              {id:'102',branchName:'战术家'},
              {id:'103',branchName:'尖兵'},
              {id:'104',branchName:'执旗手'},
          ]
        },
        {
          id:'2',
          branchNames:[
              {id:'201',branchName:'斗士'},
              {id:'202',branchName:'教官'},
              {id:'203',branchName:'武士'},
              {id:'204',branchName:'强攻手'},
              {id:'205',branchName:'术战者'},
              {id:'206',branchName:'领主'},
              {id:'207',branchName:'剑豪'},
              {id:'208',branchName:'无畏者'},
              {id:'209',branchName:'无畏者'},
              {id:'210',branchName:'解放者'},
              {id:'211',branchName:'收割者'},
          ]
        },
        {
          id:'3',
          branchNames:[
              {id:'301',branchName:'速射'},
              {id:'302',branchName:'重射手'},
              {id:'303',branchName:'投掷手'},
              {id:'304',branchName:'散射手'},
              {id:'305',branchName:'攻城手'},
              {id:'306',branchName:'神射手'},
              {id:'307',branchName:'炮手'},
          ]
        },
        {
          id:'4',
          branchNames:[
              {id:'401',branchName:'守护者'},
              {id:'402',branchName:'铁卫'},
              {id:'403',branchName:'驭法铁卫'},
              {id:'404',branchName:'不屈者'},
              {id:'405',branchName:'决战者'},
          ]
        },
        {
          id:'5',
          branchNames:[
              {id:'501',branchName:'医师'},
              {id:'502',branchName:'群愈师'},
              {id:'503',branchName:'疗养师'},

          ]
        },
        {
          id:'6',
          branchNames:[
              {id:'601',branchName:'吟游者'},
              {id:'602',branchName:'削弱者'},
              {id:'603',branchName:'护佑者'},
              {id:'604',branchName:'召唤师'},
              {id:'605',branchName:'凝滞者'},
          ]
        },
        {
          id:'7',
          branchNames:[
              {id:'701',branchName:'驭械术士'},
              {id:'702',branchName:'中坚术士'},
              {id:'703',branchName:'阵法术士'},
              {id:'704',branchName:'链术士'},
              {id:'705',branchName:'轰击术士'},
              {id:'706',branchName:'扩散术士'},
              {id:'707',branchName:'秘术师'},
          ]
        },
                  {
          id:'8',
          branchNames:[
              {id:'801',branchName:'陷阱师'},
              {id:'802',branchName:'处决者'},
              {id:'803',branchName:'行商'},
              {id:'804',branchName:'傀儡师'},
              {id:'805',branchName:'推击手'},
              {id:'806',branchName:'怪杰'},
              {id:'807',branchName:'钩锁师'},
              {id:'808',branchName:'伏击客'},
          ]
        },
      ]

    }
  }
}
</script>

<style scoped>
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
</style>