<template>
  <div class="menus">
    <!-- 左侧导航栏 -->
    <el-container>
      <el-aside width="200px" style="backgroundColor:#324157;color:#fff;">
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="item in menusList">
            <el-submenu v-if="item.children && item.children.length" :key="item.path" :index="item.path">
              <!-- 一级标题 -->
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="item1 in item.children">
                <el-submenu v-if="item1.children && item1.children.length" :key="item1.path" :index="item1.path">
                  <!-- 二级标题 -->
                  <template slot="title">
                    <i :class="item1.icon"></i>
                    <span>{{ item1.name }}</span>
                  </template>
                  <template v-for="item2 in item1.children">
                    <!-- 三级标题 -->
                    <el-submenu v-if="item2.children && item2.children.length" :key="item2.path" :index="item2.path">
                      <template slot="title">
                        <i :class="item2.icon"></i>
                        <span>{{ item2.name }}</span>
                      </template>
                    </el-submenu>
                    <el-menu-item v-else :key="item2.path" :index="item2.path">
                      <i :class="item2.icon"></i><span slot="title">{{ item2.name }}</span>
                    </el-menu-item>
                  </template>
                </el-submenu>
                <el-menu-item v-else :key="item1.path" :index="item1.path">
                  <i :class="item1.icon"></i><span slot="title">{{ item1.name }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :key="item.path" :index="item.path">
              <i :class="item.icon"></i><span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <!-- 中间主体部分 -->
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {
    menusList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>
  .menus {
    height: 100%;
  }
  .menus .el-container {
    height: 100%;
  }
  .menus .el-container .el-aside{
    height: 100%;
  }
  .menus .el-menu{
    border: none;
  }
</style>
