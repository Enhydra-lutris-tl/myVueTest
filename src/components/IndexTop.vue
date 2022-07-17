<template>
  <div class="top-back">
    <div class="header-text">
      <ul>
        <li>HOME</li>
        <li>NEWS</li>
        <li>CHARACTERS</li>
      </ul>

    </div>

    <div class="header-main">
      <span class="trademark">ARKNIGHTS</span>
      <span class="logo">明/日/方/舟</span>
    </div>
    <div class="header-text">
      <ul>
        <li>HOME</li>
        <li>NEWS</li>
        <li>CHARACTERS</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHande'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'trademarkText';
  src: url(/src/font/DarkFalconDemoRegular-2.ttf);
  font-weight: bold;
}
@font-face {
  font-family: 'logoText';
  src: url(/src/font/ziti.ttf);
  font-weight: bold;
}
.top-back{
  position: absolute;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 90px;
  width: 100%;
  background:rgb(20,20,20);
  border-bottom: solid 3px;
  border-image: linear-gradient(90deg,rgb(20,20,20),rgb(20,20,20),aqua,rgb(20,20,20),rgb(20,20,20))30;

}
.header-main{
  background:rgb(20,20,20) ;
  height: 100px;
  width: 300px;
  border-radius: 15px;
  border-bottom: aqua solid 2px;
}

.trademark{
  font-family: trademarkText;
  display: block;
  margin-top: 5px;
  font-size:35px;
  color: white;

}

.logo{
  font-family: logoText;
  display: block;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;

}

.header-text{
  margin: 0 100px 0 100px;
}
ul{
  display: flex;
  margin: 0;
  height: 100%;

}

li{
  list-style: none;
  font-weight: bold;
  padding: 0 70px 0 70px;
  color: aliceblue;
  line-height: 90px;
  height: auto;
  transition: 0.5s;
}

li:hover{
  background: rgb(45, 45, 45);
}
</style>
