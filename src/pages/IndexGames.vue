<template>
  <div class="back">
    <div class="menuBOX">
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>明日方舟</span>
          </template>
          <el-menu-item index="1-1">阵营</el-menu-item>
          <el-menu-item index="1-2">角色</el-menu-item>
          <el-sub-menu index="1-3">
            <template #title>故事</template>
            <el-menu-item index="1-3-1">三级标题1</el-menu-item>
            <el-menu-item index="1-3-2">三级标题1</el-menu-item>
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
      </el-menu>
    </div>
    <gameCharacter></gameCharacter>
  </div>
</template>

<script>
import GameCharacter from "@/components/gameCharacter";
export default {
  name: "IndexGames",
  components: {GameCharacter}
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
}
</style>