<template>
  <div class="todoBox">
    <h1>My Todos</h1>
    <h4 v-show="!noTodo.length" class="todoMessage">{{todoMessage}}</h4>
    <el-collapse accordion style="width: 90%;margin: 15px 5% 0 5%" v-show="noTodo.length">
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
            <input type="checkbox" @click="noTodoOver(list.id)" v-model="list.done">
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
        <!--详细内容-->
        <div class="todoTextBox">
          <el-descriptions border style="width: 90%;margin: 15px 0 0 5%">
            <!--开始时间-->
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

    <el-button
        type="success"
        size="large"
        style="position: absolute;right: calc(5% + 73px);bottom: 15px"
        @click="todoStatisticsShowing"
    >
      统计
    </el-button>
    <el-button
        type="success"
        size="large"
        style="position: absolute;right: 5%;bottom: 15px"
        @click="newTodoChange(true)"
    >
      创建
    </el-button>

    <!--添加待办选项卡-->
    <div class="todoStatisticsBack" v-show="todoStatisticsShow">
      <div class="todoStatisticsTip">
        <h4 style="margin:10px 0 10px 0">完成情况</h4>
        <el-descriptions
            :column = "1"
            border
            style="width: 90%;margin-left: 5%"
        >
          <el-descriptions-item label="未完成占比:">{{option[1].noTodo}}%</el-descriptions-item>
          <el-descriptions-item label="已完成占比:">{{option[1].overTodo}}%</el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="todoStatisticsBox" id="todoStatisticsBox"></div>

    </div>
    <div class="newTodoBox" id="newTodoBox" v-show="newTodoBoxShow">
      <h3 style="margin-top: 10px">添加</h3>
      <el-form :model="newTodo" style="width: 90%;margin: 15px 0 10px 5%">
        <!--填写标题-->
        <el-form-item label="标题">
          <el-input v-model="newTodo.title" style="width: 50%"></el-input>
        </el-form-item>

        <el-form-item label="选择一个标签">
          <div class="tagBox">
            <tlTag
                v-for="todoTag in todoTags" :key="todoTag.title"
                :title="todoTag.title"
                :color="todoTag.color"
                :tagChecked="todoTag.tagChecked"
                @tagClick="tagClick"
                @tagsDelete="tagsDelete(todoTag.title)"
            >
            </tlTag>

            <el-tooltip content="点击创建新的标签!" placement="top">
              <el-button class="tagAdd" type="success" @click="tagAdd" v-show="tagAddShow">添加+</el-button>
            </el-tooltip>
            <el-button class="tagAdd" type="danger" @click="tagAdd" v-show="!tagAddShow">取消</el-button>
          </div>
          <div class="tagAddBox" v-show="!tagAddShow">
            <el-input
                placeholder="输入tag名"
                v-model="newTag.title"
                maxlength="2"
                minlength="1"
                @keyup.enter="tagAddSubmit"
                style="width: 65%;"
            />
            <el-color-picker v-model="newTag.color" show-alpha/>
            <el-button class="tagAdd" type="success" @click="tagAddSubmit" v-show="!tagAddShow">提交</el-button>
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
import {ElMessage} from "element-plus";
export default {
  name: "PersonTodo",
  components: {tlTag},
  mounted() {
    var t1
    clearInterval(t1)
    var todoOvers = this.$echarts.init(document.getElementById('todoStatisticsBox'))
    t1 = setInterval(()=>{
      todoOvers.setOption(this.option[0])
    },1000)
    this.todoStatisticsShowing()
  },
  data(){
    return{
      // lists:[
      //   {id:'001',
      //     title:'吃饭',
      //     text:'描述说明',
      //     startTime:'2022/07/21 00:00:00',
      //     endTime:'2022/07/21 00:00:00',
      //     done:false,
      //     overTime:'2022/07/21 00:00:00',
      //     todoTags:[]
      //   },
      // ],
      lists:JSON.parse(localStorage.getItem('lists')),
      todoTags:JSON.parse(localStorage.getItem('todoTags')),
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
      newTag:{title:'',color:'',tagChecked:false},
      tagAddShow:true,
      todoStatisticsShow:true
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
    },
    todoMessage(){
      return (this.overTodo.length)?'待办全部完成！':'暂无待办，欢迎新建！'
    },
    option(){
      const a = this.lists
      const b = a.filter(x=>x.done === true)
      const c = a.length - b.length
      return [{
        title:{
          text:'待办完成率',
          left:'center',
          textStyle:{
            color: 'white'
          }
        },
        tooltip:{
          show:true,
          trigger:'item',
          triggerOn:'mousemove|click',
          // backgroundColor:'white',
        },
        series: [
          {
            type: 'pie',
            stillShowZeroSum: false,
            data: [
              {
                value: b.length,
                name: '已完成'
              },
              {
                value: c,
                name: '未完成'
              }
            ],
            radius:'50%'
          }
        ]
      },
        {noTodo:c/a.length*100,overTodo:b.length/a.length*100}
      ]
    }

  },
  beforeCreate(){
    if (!JSON.parse(localStorage.getItem('lists'))){
        var lists = []
        localStorage.setItem('lists',JSON.stringify(lists))
    }
    if(!JSON.parse(localStorage.getItem('todoTags'))){
      var todoTags = [
          {title:'工作',color:'#67C23A',tagChecked:false},
          {title:'个人',color:'#E6A23C',tagChecked:false},
          {title:'日常',color:'#909399',tagChecked:false},
      ]
      localStorage.setItem('todoTags',JSON.stringify(todoTags))
    }
  },

  methods:{
    // 提交新建todo表单数据，并添加到lists中
    newTodoSubmit(a){
      // 判断标题和内容是否为空，阻止提交
      if (this.newTodo.title === ''||this.newTodo.text === ''){
        alert('标题或者内容为空，请补充')
      }else {
        let x = JSON.parse(JSON.stringify(this.newTodo))// 对象的深度拷贝方法
        x.todoTags = this.tagActive
        x.id = JSON.stringify(Math.random()*Math.random()*100)
        // 判断用户所选Tag数是否大于2，阻止提交
        if (x.todoTags.length > 2){
          alert('选择Tag数大于2，请精简！')
        }else {
          this.lists.push(x)
          this.newTodoChange(a)
          for (let key in this.newTodo){
            if (this.newTodo[key] !== this.newTodo['done']){
              this.newTodo[key] = ''
            }
          }
          localStorage.setItem('lists',JSON.stringify(this.lists))
        }
      }
    },
    //添加标签按钮
    tagAdd(){
      this.tagAddShow = !this.tagAddShow
    },
    //添加tag----提交
    tagAddSubmit(){
      if (this.newTag.title === ''||this.newTag.color === ''){
        alert('标题或颜色不能为空')
      }else{
        let x = JSON.parse(JSON.stringify(this.newTag))
        this.todoTags.push(x)
        ElMessage({
          message:`Tag:[${this.newTag.title}]已添加`,
          type:'success'
        })
        // 清除其他标签已选中状态
        for (let a = 0; a < this.todoTags.length; a++){
          this.todoTags[a].tagChecked = false
        }
      //提交到本地存储
        localStorage.setItem('todoTags',JSON.stringify(this.todoTags))
        for (let key in this.newTag){
          if (this.newTag[key] !== this.newTag['tagChecked']){
            this.newTag[key] = ''
          }
        }
        this.tagAdd()
      }

    },
    //删除tag,自定义事件
    tagsDelete(title){
      this.todoTags = this.todoTags.filter(a=>a.title!==title)
      localStorage.setItem('todoTags',JSON.stringify(this.todoTags))
      ElMessage({
        message:`Tag:[${title}]已删除`,
        type:'warning'
      })
    },

    //tag触发事件
    tagClick(a){
      for (let i=0; i < this.todoTags.length;i++){
        if (this.todoTags[i].title===a){
          this.todoTags[i].tagChecked = !this.todoTags[i].tagChecked
        }
      }
    },
    // 打开或者关闭卡片
    newTodoChange(a){
      this.newTodoBoxShow = a
    },
    // 编辑todo
    todoEdit(){
      this.showHidden = true
      // localStorage.setItem('lists',JSON.stringify(this.lists))
    },
    //保存todo
    todoSave(){
      this.showHidden = false
      localStorage.setItem('lists',JSON.stringify(this.lists))
      ElMessage({
        message:`改动已保存！`,
        type:'success'
      })
    },
    // 删除todo
    todoDelete(id){
      // splice方法删除数组指定位置和指定数量的元素
      if (confirm('是否删除！')){
        this.lists = this.lists.filter(a=>a.id!==id)
        localStorage.setItem('lists',JSON.stringify(this.lists))
        ElMessage({
          message:`所选TODO已删除！！！`,
          type:'warning'
        })
      }else {
        ElMessage({
          message: `删除操作终止！`,
          type: 'message'
        })
      }
    },
    // 将未完成的todo移到已完成列表中
    todoOver(id){
      for (let i = 0; i < this.lists.length; i++){
        if (this.lists[i].id === id && this.lists[i].done === false){
          this.lists[i].done = true
          this.lists[i].overTime = new Date().toLocaleString()
        }
      }
      localStorage.setItem('lists',JSON.stringify(this.lists))
    },
    // 将已完成的todo移到未完成列表中
    noTodoOver(id){
      for (let i = 0; i < this.lists.length; i++){
        if (this.lists[i].id === id && this.lists[i].done === true){
            this.lists[i].overTime = ''
            this.lists[i].done = false
        }
      }
      localStorage.setItem('lists',JSON.stringify(this.lists))
    },
    //统计图显示和隐藏
    todoStatisticsShowing(){
      this.todoStatisticsShow = !this.todoStatisticsShow
    }
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
.todoStatisticsBack{
  position: relative;
  height: 300px;
  width: 90%;
  margin: 15px 0 0 5%;
  background: rgb(42,39,39);
  border-radius: 8px;
}
.todoStatisticsTip{
  position: absolute;
  background: #141414;
  border-radius: 4px;
  left: 10px;
  top: 10px;
  width: 40%;
  height: calc(100% - 20px);
}
.todoStatisticsBox{
  position: absolute;
  background: #141414;
  z-index: 1;
  right: 10px;
  top: 10px;
  padding-top: 10px;
  width: 55%;
  height: calc(100% - 30px);
  border-radius: 4px;
}

.todoMessage{
  margin-top: 15px;
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
  margin: 15px 0 0 5%;
  text-align: left;
}

.newTodoBox{
  position: absolute;
  background: rgb(23, 23, 23);
  left: 5%;
  top: 25%;
  z-index: 2;
  width: 90%;
  height: auto;
  border-radius: 8px;
  transition: 0.3s;
}

.tagBox{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.tagAdd{
  height: 18px;
  width: 58px;
  margin: 5px 0 0 10px;
  border-radius: 4px;
  border: white solid 1px;
  font-size: 12px;
}
.tagAddBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 40px;
  margin:10px 0 0 5px;
  padding: 0 5px 0 5px;
  border-radius: 4px;
  border: solid 1px var(--el-border-color);
}

.newTodoButtonBox{
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
