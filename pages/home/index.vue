<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-portal-template
      </h1>
      <div>
        <el-button @click="getUserInfo">
          获取用户信息
        </el-button>
        <el-button @click="test">
          测试接口
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async getUserInfo () {
      const data = await this.$user.getUserInfo()
      console.log('用户信息', data)
    },
    test () {
      console.log(this.$user.test({ k: 56654, e: 123321132 }), '48554665')
    }
  }
}
</script>

<style scoped>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container{
  height: 100%;
}
.container div{
  transform: translateY(50%);
  text-align: center;
}
</style>
