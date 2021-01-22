<template>
  <div class="login">
    <div class="poster">
      <Logo />
      <h1 class="title">
        nuxt-portal-template
      </h1>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item>
          <h1 class="form-title">
            Nuxt后台管理模板
          </h1>
        </el-form-item>
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn-box">
          <el-button type="primary" round @click="onSubmit">
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  layout: 'alone',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const res = await this.$user.login(this.form)
      if (res.code === 0) {
        this.$store.dispatch('user/setToken', { token: res.token })
        Cookie.set('token', res.token)
        this.$router.push('/')
        console.log(this.$store.state, 'state')
      }
      console.log('登录信息', res)
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  height: 100vh;
  display: flex;
  background-color: #00103d;
  .poster{
    flex: 1;
    text-align: center;
    margin: auto;
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
  }
  .form{
    width: 800px;
    padding: 100px;
    box-sizing: border-box;
    margin: auto;
    margin-right: 50px;
    .form-title {
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
      font-size: 30px;
      text-align: center;
      color: #ffffff;
      letter-spacing: 4px;
    }
    .login-btn-box{
      text-align: center;
    }
    /deep/.el-form-item__label{
      color: #ffffff;
      font-size: 18px;
    }
    /deep/.el-button{
      width: 240px;
      font-size: 16px;
      letter-spacing:10px
    }
  }
}
</style>
