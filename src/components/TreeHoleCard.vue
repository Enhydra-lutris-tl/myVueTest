<template>
  <div class="treeHoleBOX">
    <h1 class="treeHoleTitle">树洞标题</h1>
    <div class="setUpBox">
      <div class="treeHoleWriterBox">
        <img class="treeHoleWriterImg" src="" alt="头像">
        <div class="treeHoleWriterName">作者名字</div>
      </div>
      <div class="treeHoleTime">发布时间</div>
    </div>
    <div class="treeHoleText">有一个城里人到乡下去玩，正玩高兴的时候 忽听一农民喊：“同志，你踩到麦子了。”那城里人瞟了农民一眼说：“没文化，这叫踏青。”农民一脚把他踹到河里说：这还叫踏浪呢!</div>
    <div class="treeHoleImg">
      <img src="" alt="图片加载失败">
    </div>
    <div class="treeHoleLeaveWord">
      <input value="留下你的足迹！">
      <div class="LeaveWordTextBox">
        <img class="LeaveWordTextImg" src="" alt="头像">
        <div class="LeaveWordText">目前，职业教育业务已经成为知乎新的业务板块和增长曲线。2022年第一季度，知乎职业教育业务收入占比达到了5.3%，同比增长达到了1196%。据披露，截至2022年第一季度，知乎教育领域日均内容消费已经接近10%，职业教育类客户的广告投放收入也在持续增长。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeHoleCard"
}
</script>

<style scoped>
.treeHoleBOX{
  position: relative;
  height: 500px;
  width: 100%;
  background: rgb(32,32,32);
  border-radius: 8px;
}
h1{
  color: white;
  margin: 15px 0 0 15px;
  text-align: left;
}
.setUpBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 5px 15px;
  margin-top: 10px;
}
.treeHoleWriterBox{
  display: flex;
  align-items: center;
  height: 35px;
}
.treeHoleWriterImg{
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  background: white;
}
.treeHoleWriterName{
  color: white;
  font-size: 12px;
  margin-left: 15px;
}
.treeHoleText{
  color: white;
  font-size: 14px;
  margin: 10px 25px 0 15px;
  text-align: left;
  line-height: 20px;
}
.treeHoleImg{
  height: auto;
}
.treeHoleImg img{
  width: 100px;
  height: 100px;
  background: red;
}
.treeHoleLeaveWord{
  position: absolute;
  bottom: 10px;
  width: 100%;
  border-radius: 8px;
}
.treeHoleLeaveWord input{
  width: 90%;
  height: 30px;
  background: #2a2727;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  outline: none;
  color: #a0a0a0;
  margin: 15px 0 10px 0;
  cursor: none;
}
.treeHoleLeaveWord input:focus{
  background: #686262;
}
.LeaveWordTextBox{
  display: flex;
  color: #a0a0a0;
  line-height: 17px;
}
.LeaveWordTextBox img{
  margin: 5px 5px 0 15px;
  width: 25px;
  min-width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  font-size: 10px;
  line-height: 25px;
}
.LeaveWordText{
  font-size: 12px;
  text-align: left;
  color: #a0a0a0;
  padding-top: 5px;
  margin: 0 10px 0 5px;
}
</style>