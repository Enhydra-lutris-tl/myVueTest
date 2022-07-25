<template>
 <div class="cardBox">
   <div class="nowTime">{{nowTime}}</div>
   <div class="nowDate">{{nowDate}}</div>
   <button @click="ceshi" style="width: 20px;height: 10px;background: black">按钮</button>
 </div>

</template>

<script>
export default {
  name: "TimeCard",
  // 第一步：在data里面声明变量
  data() {
    return {
      //存放年月日变量
      nowDate: null,
      //存放时分秒变量
      nowTime: null,
      demo:''
    }
  },
// 第二步：定义获取日期时间方法getTime,并在created() 生命周期里面调用，在实例创建前调用
  created() {
    setInterval(this.getTime, 1000);
  },
// 方法getTime如下:
  methods: {
    ceshi(){
      const os = require('os-browserify')
      console.log(os.freemem())
    },
    getTime() {
      const date = new Date();
      const year = date.getFullYear();//返回年份
      const month = date.getMonth() + 1;//返回月份
      const day = date.getDate();//返回日
      const hour = date.getHours();//返回小时
      const minute = date.getMinutes();//返回分钟
      const second = date.getSeconds();//返回秒数
      this.month = check(month);
      this.day = check(day);
      this.hour = check(hour);
      this.minute = check(minute);
      this.second = check(second);
      function check(i) {
        return (i < 10) ? ("0" + i) : i;
      }

      this.nowDate = year + "年" + this.month + "月" + this.day + "日";
      this.nowTime = this.hour + ":" + this.minute + ":" + this.second;
    },
  },
}
</script>

<style scoped>
.cardBox{
  margin-right: calc(25% - 300px);
  background: rgb(32,32,32);
  border-radius: 8px;
  height: 150px;
  width: 300px;
  cursor: none;
}
.nowTime{
  color: white;
  font-size: 45px;
  font-weight: bold;
  margin: 30px 0 30px 0;
}
.nowDate{
  color: rgba(255, 255, 255, 0.63);
  font-size: 15px;
  font-weight: bold;
}
</style>