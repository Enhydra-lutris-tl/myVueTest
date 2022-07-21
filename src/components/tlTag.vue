<template>
 <div class="tagButton" ref="tagLabel">
   <input
       type="checkbox"
       :id="title"
       v-show="false"
       v-model="modelValue"
       @change="tagChange"
       ref="checkbox"
   />
   <label :for="title" class="tagLabel" >{{title}}</label>
   <button type="button" class="tagDelete" @click="tagDelete" v-show="!modelValue">x</button>
 </div>
</template>

<script>
export default {
  name: "tlTag",
  props: ['title','color'],
  data(){
    return{
      modelValue:false
    }
  },
  mounted() {
    this.$refs.tagLabel.style.background = this.color
  },
  methods:{
    tagChange(){
      this.$emit('tagClick',this.modelValue,this.title)
      if (this.$refs.checkbox.checked){
        this.$refs.tagLabel.style.border = '#79bbff solid 2px'
      }else {
        this.$refs.tagLabel.style.border = 'none'
      }
    },
    tagDelete(){
      if (confirm('是否删除标签？删除后不可恢复！')){
        this.$emit('tagsDelete')
      }
    }

  }
}
</script>

<style scoped>
.tagButton{
  display: flex;
  margin: 5px 5px 0 5px;
  border-radius: 4px;
  border: solid 1px var(--el-border-color);
}
.tagLabel{
  display: block;
  height: 20px;
  width: 40px;
  border-radius: 4px;
  line-height: 20px;
  font-size: 12px;
}
.tagDelete{
  border: none;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
  border-radius: 4px;
  background: #606266;
}
.tagDelete:hover{
  background: #909399;
}
</style>