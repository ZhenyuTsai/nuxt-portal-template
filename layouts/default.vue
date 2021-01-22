<template>
  <div class="louyout-default">
    <el-container>
      <el-header>
        <span>Header</span>
        <el-link type="primary" :underline="false" @click="loginout">退出登录</el-link>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <element-menu :menus-list="list"></element-menu>
        </el-aside>
        <el-main :style="{'height':windowHeight + 'px',}" style="overflow:auto;">
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ElementMenu from '@/components/ElementMenu'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  components: {
    'element-menu': ElementMenu
  },
  data () {
    return {
      windowHeight: '500px',
      list: [
        {
          path: '/home',
          name: '首页',
          icon: 'el-icon-house',
          children: []
        },
        {
          path: '/about',
          name: '详情',
          icon: 'el-icon-news',
          children: []
        }
      ]
    }
  },
  mounted () {
    const that = this
    that.windowHeight = document.documentElement.clientHeight - 60
    window.onresize = function () {
      that.windowHeight = document.documentElement.clientHeight - 60
    }
  },
  methods: {
    loginout () {
      this.$store.dispatch('user/removeToken')
      Cookie.remove('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.louyout-default .el-main{
  padding: 0;
}
.louyout-default .el-header{
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #122c46;
  color: #fff;
}
body{
  margin: 0;
  padding: 0;

}
</style>
