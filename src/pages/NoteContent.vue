<template>
    <div class="noteContent">
      <h1>{{$route.params.id}}</h1>

      <el-collapse accordion style="width: 80%;margin:15px 0 0 10%" >
        <el-collapse-item
            v-for="newData in newDatas" :key="newData.id"
            :name="newData.id"
        >
          <template #title>
            <div style="font-size: 18px;font-weight: bold">{{newData.name}}</div>
          </template>
          <div style="text-align: left">{{newData.body}}</div>
          <hr>
          <div class="noteReply">
            <h3>评论内容</h3>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>

<script>
export default {
  name: "NoteContent",
  data(){
    return{
      htmlNotes:[
          {name:'我曾经',id:'1',body:'笔记内容'},
          {name:'一怒之下',id:'2',body:'笔记内容'},
          {name:'吃了',id:'3',body:'笔记内容'},
          {name:'三斤',id:'4',body:'笔记内容'},
          {name:'核桃',id:'5',body:'笔记内容'},
      ],
      postData:[]
    }
  },
  computed:{
    newDatas(){
      var a = 0
      if (this.$route.params.id === 'html'){
        a = this.htmlNotes
      }else {
        a = this.postData
      }
      return a
    }
  },
  methods:{
    getJoke(){
      this.axios.get(`http://jsonplaceholder.typicode.com/posts/${1}/comments`).then(
          (response)=>{
            this.postData = response.data
          },
          (error)=>{
            console.log(error)
          }
      )
    }
  },
  mounted() {
    console.log(this)
    this.getJoke()
  }

}
</script>

<style scoped>
.noteContent{
  border-radius: 8px;
  width: 45%;
  background: rgb(32,32,32);
  overflow:hidden;
}
h1,
h3{
  color: white;
  margin-top: 15px;
}
.noteImg,.noteReply{
  text-align: left;
}
</style>