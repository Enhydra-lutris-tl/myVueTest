<template>
    <div class="noteContent">
      <h1>个人笔记</h1>

      <el-collapse accordion style="width: 80%;margin:15px 0 0 10%" >
        <el-collapse-item
            v-for="htmlNote in htmlNotes" :key="htmlNote.name"
            :title="htmlNote.title"
            :name="htmlNote.name"
            :disabled="htmlNote.disabled"
        >
          <div>{{htmlNote.titleText}}</div>
          <hr>
          <div class="noteImg" v-show="htmlNote.noteImgUrls.length">
            <h3>图片</h3>
            <el-image
                v-for="(noteImgUrl,index) in htmlNote.noteImgUrls" :key="index"
                style="width: 80px;height: 80px;margin: 15px 10px 15px 10px"
                :src="noteImgUrl"
                fit=cover
                :preview-src-list="htmlNote.noteImgUrls"
            />
            <hr>
          </div>

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
          {title:'我曾经',name:'1',titleText:'笔记内容',disabled:false,
            noteImgUrls:[
                require('@/assets/slideImg1.jpeg'),
                require('@/assets/slideImg2.jpeg'),
                require('@/assets/slideImg3.jpeg'),
            ]
          },
          {title:'一怒之下',name:'2',titleText:'笔记内容',disabled:false,noteImgUrls:[]},
          {title:'吃了',name:'3',titleText:'笔记内容',disabled:false,noteImgUrls:[]},
          {title:'三斤',name:'4',titleText:'笔记内容',disabled:false,noteImgUrls:[]},
          {title:'核桃',name:'5',titleText:'笔记内容',disabled:false,noteImgUrls:[]},
      ],
    }
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