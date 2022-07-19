<template>
 <div class="tagBox">
   <input
       type="checkbox"
       :id="title"
       v-show="false"
       v-model="modelValue"
       @change="tagChange"
       ref="checkbox"
   />
   <label :for="title" class="tagLabel" ref="tagLabel">{{title}}</label>
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
    }

  }
}
</script>

<style scoped>
.tagLabel{
  display: block;
  height: 20px;
  width: 40px;
  border-radius: 4px;
  line-height: 20px;
  font-size: 12px;
}
</style>