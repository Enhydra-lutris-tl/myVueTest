<template>
  <div class="back" id="back">
    <PersonalCard :yichu = 'this.yichu' :shuru = 'this.shuru' :yiru = 'this.yiru'></PersonalCard>
    <div class="backBody">
      <PersonTodo></PersonTodo>
      <TreeHoleCard></TreeHoleCard>
    </div>
    <TimeCard></TimeCard>
  </div>
</template>

<script>
import TimeCard from "@/components/TimeCard";
import PersonalCard from "@/components/PersonalCard";
import TreeHoleCard from "@/components/TreeHoleCard";
import PersonTodo from "@/components/PersonTodo";
export default {
  name: "indexNews",
  data(){
    return{
      img:require('@/assets/NWES-IMG.jpeg'),
    }
  },
  components:{
    PersonTodo,
    TreeHoleCard,
    PersonalCard,
    TimeCard,
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
  },
}
</script>

<style scoped>
.back{
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 70px);
  padding: 50px 0 20px 0;
  width: 100%;
  overflow: hidden;
  cursor: none;
}
.backBody{
  width: 45%;
  border-radius: 8px;
  overflow: auto;
}

</style>