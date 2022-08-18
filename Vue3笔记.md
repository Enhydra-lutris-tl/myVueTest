# Vue3学习笔记
### ref函数实现相应式
```vue
<template>
  <!--模板中可直接获取ref对象的数据-->
  <div>{{name}}</div>
</template>>
<script >
import {ref} from 'vue'
export default {
  setup(){
    //数据前使用ref实现数据的响应式
    let name = ref('11111')
    function ceshi(){
      //修改响应式数据内容需要.value获取数据
      name.value = '22222'
    }
    return {
      name,
      ceshi
    }
  }
}
</script>
```
### reactive函数响应式数据
1. 但只能处理对象和数组
```vue
<template>
  <!--模板中可直接获取ref对象的数据-->
  <div>{{name.a}}</div>
</template>>
<script >
import {reactive} from 'vue'
export default {
  setup(){
    //基本数据不要使用reactive
    let name = reactive(
        {
          a:'1111',
          b:'2222'
        }
    )
    function ceshi(){
      //修改reactive内容不需要.value获取数据
      name.a = '22222'
    }
    return {
      name,
      ceshi
    }
  }
}
</script>
```