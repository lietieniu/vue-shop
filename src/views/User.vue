<template>
  <div>
    <van-row @click="showModal2">
      <van-col span="6">
        <img :src="userImg" alt="" />
      </van-col>
      <van-col span="10">{{ nickName }}</van-col>
      <van-col span="8"><van-icon name="arrow" /></van-col>
    </van-row>
    <div class="login_modal" v-if="show">
      <!-- 1.section解决冒泡问题 -->
      <section @click="showModal"></section>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { goLogin } from "../request/api";
export default {
  name: "User",
  data() {
    return {
      userImg: require("@/assets/user.zhimg.webp"),
      username: "",
      password: "",
      show: false,
      nickName: "点击登录",
    };
  },
  created() {
    //1.每次进入user页面,直接有无token,有的话就在localStorage上获得userinfo数据,设置用户信息
    //没有的话就要提示登录弹框,进行登录
    let token = localStorage.getItem("token");
    if (token) {
      let userinfo = localStorage.getItem("userinfo");
      let newUserInfo = JSON.parse(userinfo);
      this.userImg = newUserInfo.avatar;
      this.nickName = newUserInfo.username;
    }else{
      this.show=true
    }
  },
  methods: {
    //1.提交函数
    onSubmit(value) {
      // let data=qs.stringify(value); 对象形式-->key=value
      // console.log("data", value);

      //2.点击登录进行传递数据
      goLogin({
        username: value.username,
        pwd: value.password,
      }).then((res) => {
        console.log("res", res);
        if (res.errno == 0) {
          let { token, userInfo } = res.data;
          //2.1登录成功后设置对应用户Token
          let newUserInfo = JSON.stringify(userInfo);
          localStorage.setItem("token", token);
          localStorage.setItem("userinfo", newUserInfo);
          //2.2修改用户头像和昵称
          this.userImg = userInfo.avatar;
          this.nickName = userInfo.username;

          //2.3登录成功提示
          this.$toast.success("登录成功");
          //模态框0.8秒关闭
          setTimeout(() => {
            this.show = false;
          }, 400);
        } else {
          if (res.errno == 602) {
            this.$toast.fail(res.errmsg);
          }
        }
      });
    },
    //2.登录弹框是否显示
    showModal() {
      this.show = false;
    },
    showModal2() {
      // let token = localStorage.getItem("token");
      // if (token) {
      //   return;
      // } else {
      //   this.show = true;
      // }
      this.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.van-row {
  padding: 0.2rem 4%;
  background-color: #333;
  color: #fff;
  img {
    width: 0.8rem;
    border-radius: 50%;
    display: block;
  }
  .van-col {
    // 文本的行高和图片高度相同(图片高度宽度相同)
    line-height: 0.8rem;
    font-size: 0.18rem;
    &:last-child {
      text-align: right;
    }
  }
}
.login_modal {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  section {
    //section标签就是来解决冒泡问题的
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .van-form {
    position: absolute;
    top: 30vh;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    padding: 0.1rem;
    box-sizing: border-box;
    background-color: #fff;
  }
}
</style>