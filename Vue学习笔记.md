# Vue2相关的学习笔记
## Vuex
### 关于
>1. 概念：专门在vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式管理，也是一种组件间的通信方式，且适用于任意组件间通信。
>2. 个人理解：vuex将各组件都需要使用和调整的数据进行了整合，进行统一管理。
### Actions [传递和协调信息]
1. 作用:
    1. 当dispatch需要Actions提供业务逻辑时。
    2. 将信息提供到Mutations
2. 如果不需要额外操作，可直接跳过此步骤，直接调用commit函数
### Mutations [执行]
1. 执行组件传递的动作
2. 和开发者工具进行通信
### State [数据]
1. 数据类型：Object 作用：存储数据

### 实现流程
1. vue对象调用vuex中的Dispatch传递给Actions  
state中需要准备相关数据
```js
const state = {
    stateValue:''
}
```   
```js
this.$store.dispatch('动作',value)
```
2. Actions接收信息，程序员调用commit()使用Mutations中的函数  
mutations中的函数建议大写  
```js
const action = {
    动作(context,value){
        context.commit('动作',value)
    }
}
```
3. Mutations中的[动作]函数生效获得state中的数据，和收到的值  
```js
const mutations = {
    // 动作建议大写
    动作(state,value){
       state.stateValue += value
    }
}
```
4. 组件中调用stateValue  
```vue
<div>{{$store.state.stateValue}}</div>
```
### 环境搭建
1. 安装vuex  
```
npm i vuex
```
2. 引入vuex
```js
import Vuex from 'vuex'
app.use(Vuex)
```
3. src文件夹下创建store文件夹，在store文件夹下创建index.js文件
4. 配置内容
```js
//引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)
// 准备actions--用于响应组件动作
const actions = {}
//准备mutations--用于操作数据（state）
const mutations = {}
//准备state--用于存储数据
const state = {}
//getters配置项，类似组件中的计算属性,非必须
const getters ={
    
}
// 创建并暴露store
export default new Vuex.Store({
   actions,
   mutations,
   satte,
   getter
})
```
5. main.js中引入store  
```js
import store from './store'
```
### vuex代码优化 mapState和mapGetter
1. mapState可以取代this.$store.state.xxx  
   mapGetters可以取代this.$store.getters.xxx
2. 引入  
```
import {mapState,mapGetter} from 'vuex'
// 原写法
computed:{
   a(){
       return this.$store.state.stateValue
   }
}
// 优化写法
...mapState({a:'stateValue'})
```

### vuex代码优化 mapActions和mapMutations
1. mapActions可以取代this.$store.dispatch.xxx  
   mapMutations可以取代this.$store.commit.xxx
   
2. 引入  
```
import {mapActions,mapMutations} from 'vuex'
// 原写法
computed:{
   a(){
       return this.$store.dispatch('b',value)
   }
}
// 优化写法,调用需要传递参数
...mapActions({a:'b'})
```