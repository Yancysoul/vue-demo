<template>
  <div class="login">
    <div class="content">
      <div class="title"><span>系 统 登 录</span></div>
      <div class="content_form">
        <el-form :model="loginInfo" label-width="70px" :size="size">
          <el-form-item label="用户名：">
            <el-input v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="loginInfo.userpassword" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="12">
            <el-button type="success">新用户注册</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary">登录</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      size: "big",
      loginInfo: {}
    }
  }
}
</script>

<style scope lang="scss">
.login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login_background.jpg') center top no-repeat;
  background-size: cover;
  .content {
    background-color: #fff;
    border-radius: 6px;
    width: 400px;
    position: absolute;
    top: 30%;
    left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    .title {
      width: 100%;
      padding: 20px 0;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      background: linear-gradient(to right, rgba(135, 92, 238, 0.5), rgba(237, 170, 255, 0.5));
      span {
        background: linear-gradient(to left, rgb(135, 92, 238), rgb(237, 170, 255));
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    .content_form {
      padding: 40px 40px 40px 30px;
      .el-row {
        .el-col {
          text-align: center;
          .el-button {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>