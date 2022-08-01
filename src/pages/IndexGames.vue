<template>
  <div class="back">
    <div class="menuBOX">
      <el-menu router>
        <el-sub-menu index="1">
          <template #title>
            <span>明日方舟</span>
          </template>
          <el-menu-item index="1-1" route="/IndexGames">世界观</el-menu-item>
          <el-menu-item index="1-2" route="/IndexGames">阵营</el-menu-item>
          <el-menu-item index="1-3" route="/IndexGames/GameCharacter">角色</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>故事</template>
            <el-menu-item index="1-4-1">主线</el-menu-item>
            <el-menu-item index="1-4-2">故事集</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span>原神</span>
          </template>
          <el-menu-item index="2-1">地区</el-menu-item>
          <el-menu-item index="2-2">角色</el-menu-item>
          <el-sub-menu index="2-3">
            <template #title>故事</template>
            <el-menu-item index="2-3-1">三级标题1</el-menu-item>
            <el-menu-item index="2-3-2">三级标题1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <span>剑网三</span>
          </template>
          <el-menu-item index="/IndexGames/Jx3Watch">首页</el-menu-item>
          <el-menu-item index="3-2">其他</el-menu-item>
          <el-sub-menu index="3-3">
            <template #title>故事</template>
            <el-menu-item index="3-3-1">三级标题1</el-menu-item>
            <el-menu-item index="3-3-2">三级标题1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </div>
    <router-view v-slot="{Component}">
      <transition name="indexGames">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "IndexGames",
}
</script>

<style scoped>
.back{
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: white;
}
.menuBOX{
  background: #2a2727;
  width: 10%;
  height: 100%;
  overflow: hidden;
}
.indexGames-enter-active,
.indexGames-leave-active{
  transition: all 0.5s ease-out;
}
.indexGames-enter-from{
  top: 100%;
}
.indexGames-enter-to,
.indexGames-leave-from{
  top: 0;
}
.indexGames-leave-to{
  top: -100%;
}
</style>