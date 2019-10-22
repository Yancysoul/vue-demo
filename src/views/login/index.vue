<template>
  <div class="login searchBlock">
    <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="5" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">
    </vue-particles>
    <div class="content">
      <div class="title"><span>系 统 登 录</span></div>
      <div class="content_form">
        <el-form :model="loginInfo" label-width="80px" :size="size" ref="loginInfo" :rules="rules">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="userpassword">
            <el-input v-model="loginInfo.userpassword" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="identify">
            <el-col :span="12">
              <el-input v-model="loginInfo.identify" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="12">
              <div class="code" @click="refreshCode" style="width: 112px;
              height: 40px; overflow: hidden; float: right;">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
            </el-col>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="12">
            <el-button type="success" @click="register" :size="size">新用户注册</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="submit('loginInfo')" @keyup.enter="submit('loginInfo')" :size="size">登录</el-button>
          </el-col>
          <el-col :span="24">
            <el-link type="primary" :underline="false" style="font-size: 12px;" @click="forgetPassword">忘记密码？</el-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import SIdentify from '../../components/identify'
export default {
  name: 'login',
  components: {SIdentify},
  data () {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      size: "big",
      loginInfo: {
        username: 'admin',
        userpassword: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        userpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        identify: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    
  },
  methods: {
    // 注册
    register () {
      this.$router.replace('/register')
    },
    // 登录
    submit (loginInfo) {
      this.$refs[loginInfo].validate((valid) => {
        if (valid) {
          if (this.loginInfo.identify !== this.identifyCode) {
            // this.$message({
            //   message: '验证码错误',
            //   type: 'warning'
            // })
            this.$message.warning('验证码错误')
            this.loginInfo.identify = ''
            this.refreshCode()
            return false;
          } else if (this.loginInfo.username === 'admin' && this.loginInfo.userpassword === '123456') {
            this.$store.dispatch('SetToken', "123")
            this.$router.push({path: '/'})
          } else {
            this.$message.warning('用户名或密码错误')
            return false;
          }
        } else {
          return false;
        }
      });
    },
    // 忘记密码
    forgetPassword () {
      // this.$router.replace('/register')
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
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
          .el-link {
            margin-top: 10px;
            float: right;
          }
        }
      }
    }
  }
}
</style>