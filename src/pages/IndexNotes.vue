<template>
  <div class="back">
    <div class="classNavigation">
      <router-link to="/IndexNotes/NoteContent/html" class="classButton" active-class="active">html</router-link>
      <button class="classButton">css</button>
      <button class="classButton">js</button>
      <router-link to="/IndexNotes/NoteContent/post" class="classButton" active-class="active">postTest</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "IndexNotes",
}
</script>

<style scoped>
.back{
  position: absolute;
  display: flex;
  height: calc(100vh - 70px);
  width: 100%;
  padding: 50px 0 20px 0;
  overflow: hidden;
  color: white;
}
.classNavigation{
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%;
  height: auto;
  background: rgb(32,32,32);
  margin: 0 1% 0 18%;
}
.classButton{
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  outline: none;
  text-decoration-line: none;
  line-height: 40px;
  height: 40px;
  width: 80%;
  margin-top: 15px;
  background: rgb(32,32,32);
}
.classButton:hover{
  background: rgb(42,39,39);
  color: #cdcdcd;
}
.active{
  background: rgb(42,39,39);
  color: #cdcdcd;
}
</style>