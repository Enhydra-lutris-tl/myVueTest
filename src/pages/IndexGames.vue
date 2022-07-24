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
  </div>
</template>

<script>
export default {
  name: "IndexGames"
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
.menuBOX{
  background: #444444;
  width: 20%;
}
</style>