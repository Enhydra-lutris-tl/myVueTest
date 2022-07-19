<template>
  <div class="todoBox">
    <h1>My Todos</h1>
    <el-collapse
        accordion
        style="width: 90%;margin: 15px 5% 0 5%"
    >
      <el-collapse-item v-for="list in noTodo" :key="list.id" :disabled="showHidden">
        <!--自定义标题-->
        <template #title>
          <div class="titleBox">

            <div class="overviewBox">
              <el-checkbox
                  v-show="!showHidden"
                  @click="todoOver(list.id)"
                  v-model="list.done"
                  size="large"
              />
              <div class="todoText" v-show="!showHidden">{{list.title}}</div>
              <el-input
                  v-show="showHidden"
                  v-model="list.title"
                  style="height: 60%;width: 200px;margin-left: 10px"
              />
            </div>
            <!--TODO:展示所选标签组-->
            <div class="todoLabel">
              <el-tag
                  v-for="tag in list.todoTags" :key="tag.title"
                  :color="tag.color"
                  style="color:white;"
              >
                {{tag.title}}
              </el-tag>
            </div>
          </div>
        </template>
<!--        详细内容-->
        <div class="todoTextBox">
          <el-descriptions
              border
              style="width: 90%;margin: 15px 0 0 5%"
          >
<!--            开始时间-->
            <el-descriptions-item
              label="开始时间"
              label-align="center"
              align="left"
            >
              <div v-show="!showHidden">
                {{list.startTime}}
              </div>
              <div v-show="showHidden">
                <el-date-picker
                    type="datetime"
                    v-model="list.startTime"
                    placeholder="选择开始时间"
                    :default-time="defaultTime[0]"
                    value-format="YYYY/MM/DD HH:mm:ss"
                    style="width: 180px"
                ></el-date-picker>
              </div>

            </el-descriptions-item>

<!--            结束时间-->
            <el-descriptions-item
              label="结束时间"
              label-align="center"
              align="left"
            >
              <div v-show="!showHidden">
                {{list.endTime}}
              </div>
              <div v-show="showHidden">
                <el-date-picker
                    v-model="list.endTime"
                    type="datetime"
                    placeholder="选择结束时间"
                    :default-time="defaultTime[1]"
                    value-format="YYYY/MM/DD HH:mm:ss"
                    style="width: 180px"
                ></el-date-picker>
              </div>

            </el-descriptions-item>

<!--            完成时间-->
            <el-descriptions-item
              label="完成时间"
              label-align="center"
              align="left">待完成</el-descriptions-item>

<!--            描述说明-->
            <el-descriptions-item
                label="描述说明"
                label-align="center"
                align="left"
            >
              <div v-show="!showHidden">
                {{list.text}}
              </div>
              <div v-show="showHidden">
                <el-input
                    type="textarea"
                    v-model="list.text"
                    style="width: 100%"
                >

                </el-input>
              </div>
            </el-descriptions-item>

          </el-descriptions>

          <el-button-group style="margin: 15px 5% 0 0">
            <!--TODO:尝试用动态路由的方式和创建共同调用一个组件-->
            <el-button
              type="primary"
              :disabled="showHidden"
              @click="todoEdit(list.id)"
            >编辑</el-button>

            <el-button
              type="success"
              :disabled="!showHidden"
              @click="todoSave(list.id)"
            >保存</el-button>

            <el-button
              type="danger"
              @click="todoDelete(list.id)"
            >删除</el-button>
          </el-button-group>

        </div>
      </el-collapse-item>
    </el-collapse>


    <div class="todoOverTitle">已完成</div>
    <el-collapse accordion style="width: 90%;margin: 15px 5% 0 5%">
      <el-collapse-item v-for="list in overTodo" :key="list.id">
<!--        自定义标题-->
        <template #title>
          <div class="titleBox">
            <div class="overviewBox">
            <input type="checkbox" @click="todoOver(list.id)" v-model="list.done">
            <div class="todoText">{{list.title}}</div>
            </div>
            <div class="todoLabel">
              <el-tag
                  v-for="tag in list.todoTags" :key="tag.title"
                  :color="tag.color"
                  style="color:white;"
              >
                {{tag.title}}
              </el-tag>
            </div>
          </div>
        </template>
<!--        详细内容-->
        <div class="todoTextBox">
          <el-descriptions border
                           style="width: 90%;margin: 15px 0 0 5%"
          >
<!--            开始时间-->
            <el-descriptions-item
              label="开始时间"
              label-align="center"
              align="left">{{list.startTime}}</el-descriptions-item>

<!--            结束时间-->
            <el-descriptions-item
              label="结束时间"
              label-align="center"
              align="left">{{list.endTime}}</el-descriptions-item>

<!--            完成时间-->
            <el-descriptions-item
              label="完成时间"
              label-align="center"
              align="left"> {{ list.overTime }}</el-descriptions-item>

<!--            描述说明-->
            <el-descriptions-item
              label="描述说明"
              label-align="center"
              align="left">{{list.text}}</el-descriptions-item>

          </el-descriptions>
        </div>
      </el-collapse-item>
    </el-collapse>

    <el-button type="success"
               size="large"
               style="position: absolute;right: 5%;bottom: 15px"
               @click="newTodoChange(true)">
      创建
    </el-button>

    <!--添加待办选项卡-->

    <div class="newTodoBox" id="newTodoBox" v-show="newTodoBoxShow">
      <h3>添加</h3>
      <el-form :model="newTodo" style="width: 90%;margin: 15px 0 10px 5%">
        <!--填写标题-->
        <el-form-item label="标题">
          <el-input v-model="newTodo.title"></el-input>
        </el-form-item>

        <el-form-item label="选择一个标签">
          <div class="tagBox" shadow="never">
            <tlTag
                v-for="todoTag in todoTags" :key="todoTag.title"
                :title="todoTag.title"
                :color="todoTag.color"
                @tagClick="tagClick"
            ></tlTag>
          </div>
        </el-form-item>
<!--        选择开始时间-->
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="newTodo.startTime"
            type="datetime"
            placeholder="选择开始时间"
            :default-time="defaultTime[0]"
            value-format="YYYY/MM/DD HH:mm:ss"
          ></el-date-picker>
        </el-form-item>
<!--        选择结束时间-->
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="newTodo.endTime"
            type="datetime"
            placeholder="选择结束时间"
            :default-time="defaultTime[1]"
            value-format="YYYY/MM/DD HH:mm:ss"
          ></el-date-picker>
        </el-form-item>
        <!--填写详情-->
        <el-form-item label="详情" >
          <el-input v-model="newTodo.text" type="textarea"></el-input>
        </el-form-item>
<!--        提交和关闭按钮-->
        <el-form-item>
          <div class="newTodoButtonBox">
            <el-button type="primary" @click="newTodoSubmit(false)">提交</el-button>
            <el-button type="danger" @click="newTodoChange(false)">关闭</el-button>
          </div>

        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import tlTag from '@/components/tlTag'
export default {
  name: "PersonTodo",
  components: {tlTag},
  data(){
    return{
      lists:[
        {id:'001',
          title:'吃饭',
          text:'描述说明',
          startTime:'2022/07/21 00:00:00',
          endTime:'2022/07/21 00:00:00',
          done:false,
          overTime:'2022/07/21 00:00:00',
          todoTags:[]
        },

      ],
      todoTags:[
          {title:'工作',color:'#67C23A',tagChecked:false},
          {title:'个人',color:'#E6A23C',tagChecked:false},
          {title:'日常',color:'#909399',tagChecked:false},
      ],
      defaultTime:[
          new Date(2000,1,1,0,0,0),
          new Date(2000,1,1,23,59,59)
      ],
      newTodo:{
        id:'',
        title:'',
        text:'',
        startTime:'',
        endTime:'',
        done:false,
        overTime:'',
        todoTags:[]
      },
      newTodoBoxShow:false,
      showHidden:false,
    }
  },
  computed:{
    noTodo(){
      return this.lists.filter(a=>a.done!==true)
    },
    overTodo(){
      return this.lists.filter(a=>a.done!==false)
    },
    tagActive(){
      return this.todoTags.filter(a=>a.tagChecked===true)
    }
  },
  methods:{
    // 提交新建todo表单数据，并添加到lists中
    // TODO:id问题待解决
    newTodoSubmit(a){
      let x = JSON.parse(JSON.stringify(this.newTodo))//对象的深度拷贝方法
      x.todoTags = this.tagActive
      console.log(x)
      this.lists.push(x)
      this.newTodoChange(a)
      for (let key in this.newTodo){
        if (this.newTodo[key] !== this.newTodo['done']){
          this.newTodo[key] = ''
        }
      }
    },
    //tag触发事件
    tagClick(a,b){
      for (var i=0; i < this.todoTags.length;i++){
        if (this.todoTags[i].title===b){
          this.todoTags[i].tagChecked = a
          console.log(this.todoTags[i].tagChecked)
        }
      }
    },
    // 打开或者关闭卡片
    newTodoChange(a){
      this.newTodoBoxShow = a
    },
    // 编辑todo
    todoEdit(id){
      this.showHidden = true
      console.log(id)
    },
    //保存todo
    todoSave(){
      this.showHidden = false
    },
    // 删除todo
    todoDelete(id){
      // splice方法删除数组指定位置和指定数量的元素
      if (confirm('是否删除！')){
        this.lists = this.lists.filter(a=>a.id!==id)
      }
    },
    // 将已完成的todo移到已完成列表中
    todoOver(id){
      for (let i = 0; i < this.lists.length; i++){
        if (this.lists[i].id === id){
          this.lists[i].overTime = new Date().toLocaleString()
          this.lists[i].done = true
        }
      }
    },
  }


}
</script>

<style scoped>
.todoBox{
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 80px;
  border-radius: 8px;
  background: rgb(32,32,32);
}
h1{
  font-weight: bold;
  color: white;
}
.titleBox,
.overviewBox{
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
}
.titleBox{
  width: 100%;
  justify-content: space-between;
}

/*input[type = checkbox]{*/
/*  width: 20px;*/
/*}*/
.todoTextBox{
  text-align: right;
}
.todoText{
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: white;
}

.todoOverTitle{
  color: white;
  font-weight: bold;
  margin: 15px 0 0 15px;
  text-align: left;
}

.newTodoBox{
  /*display: none;*/
  position: absolute;
  background: rgba(23, 23, 23, 0.9);
  left: calc(50% - 150px);
  top: 10%;
  z-index: 2;
  width: 300px;
  height: auto;
  border-radius: 8px;
  transition: 0.3s;
}
.tagBox{
  display: flex;
  align-items: center;
  width: 100%;
}
.newTodoBox button{
  width: 50px;
  height: 30px;
  font-size: 12px;
  color: white;
  border-radius: 4px;
  border: none;
  margin: 10px 10px 10px 10px;
}
.newTodoButtonBox{
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
