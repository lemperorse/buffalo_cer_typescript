<template>
  <div>

    <div :class="`containerR ${switchc}`" ref="main">
      <div class="forms-containerR">
        <div class="signin-signup">
          <form @submit.prevent="login()" class="sign-in-form" v-if="tab == 0" >
            <h2 class="title"><i class="em em-water_buffalo text-2xl" aria-role="presentation" aria-label="WATER BUFFALO"></i> เข้าสู่ระบบ</h2>

            <div class="relative w-full md:w-8/12 mb-3 mt-4">
              <label :class="$label" htmlFor="grid-password">ชื่อผู้ใช้ </label>
              <div :class="$ininput">
                <span :class="$iconinput"><i class="mdi mdi-account text-lg text-gray-500"></i></span>
                <input required v-model="form.username" placeholder="ระบุชื่อผู้ใช้ของคุณ" type="text" :class="$input" style="padding-left:40px;">
              </div>
            </div>
            <div class="relative w-full md:w-8/12 mb-3 ">
              <label :class="$label" htmlFor="grid-password">รหัสผ่าน </label>
              <div :class="$ininput">
                <span :class="$iconinput"><i class="mdi mdi-form-textbox-password text-lg text-gray-500"></i></span>
                <input required v-model="form.password"  placeholder="ระบุรหัสผ่านของคุณ" type="password" :class="$input" style="padding-left:40px;">
              </div>
            </div>

            <div class="w-full md:w-8/12">
              <button :class="`${$btn} bg-green-600`">เข้าสู่ระบบ</button>
            </div>
            <div class="w-full md:w-8/12 flex flex-wrap   relative">
              <div class="w-1/2">
                <router-link to="/re-password" class="text-gray-600">
                  <small>ลืมรหัสผ่าน</small>
                </router-link>
              </div>
              <div class="w-1/2 text-right">
                <router-link to="/register" class="text-gray-600">
                  <small>สมัครสมาชิก</small>
                </router-link>
              </div>
            </div>
            <v-divider class="mt-8" style="width:70%;"></v-divider>
            <p class="social-text">ลิขสิทธิ์ © 2563 โดย ชยุต ดงปาลีธรรม และ คณะ</p>

          </form>



          <Register  v-if="tab == 1"  />



<!--          <form action="#" class="sign-up-form">-->
<!--            <h2 class="title">Sign up</h2>-->
<!--            <div class="input-field">-->
<!--              <i class="fas fa-user"></i>-->
<!--              <input type="text" placeholder="Username" />-->
<!--            </div>-->
<!--            <div class="input-field">-->
<!--              <i class="fas fa-envelope"></i>-->
<!--              <input type="email" placeholder="Email" />-->
<!--            </div>-->
<!--            <div class="input-field">-->
<!--              <i class="fas fa-lock"></i>-->
<!--              <input type="password" placeholder="Password" />-->
<!--            </div>-->
<!--            <input type="submit" class="btn" value="Sign up" />-->
<!--            <p class="social-text">Or Sign up with social platforms</p>-->
<!--            <div class="social-media">-->
<!--              <a href="#" class="social-icon">-->
<!--                <i class="fab fa-facebook-f"></i>-->
<!--              </a>-->
<!--              <a href="#" class="social-icon">-->
<!--                <i class="fab fa-twitter"></i>-->
<!--              </a>-->
<!--              <a href="#" class="social-icon">-->
<!--                <i class="fab fa-google"></i>-->
<!--              </a>-->
<!--              <a href="#" class="social-icon">-->
<!--                <i class="fab fa-linkedin-in"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--          </form>-->
        </div>
      </div>

      <div class="panels-containerR ">
        <div class="panel  left-panel">
          <div class="content ">
            <h3>คุณเป็นสมาชิกเเล้วหรือยัง ?</h3>
            <p>
              เข้าร่วมเป็นสมาชิกกับเว็บไซต์พันธุ์ควายไทยเพื่อเก็บข้อมูลพันธุ์ควายและพันธุ์ประวัติของคุณง่ายๆเพียงไม่กี่ขั้นตอน !
            </p>
            <button class="btn transparent" id="sign-up-btn" @click="ChangeTo('sign-up-mode')">
              เข้าร่วมกับเรา
            </button>
          </div>
          <img src="https://sv1.picz.in.th/images/2020/11/19/bpmWRe.png" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>คุณเป็นสมาชิกอยู่แล้ว ?</h3>
            <p>
              หากคุณเป็นสมาชิกกับเราอยู่แล้วสามารถเข้าสู่ระบบได้ในทันที !
            </p>
            <button class="btn transparent" id="sign-in-btn" @click="ChangeTo('')">
              เข้าสู่ระบบ
            </button>
          </div>
          <img src="https://sv1.picz.in.th/images/2020/11/19/bpm9nW.png" class="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";
import Register from '@/components/Page/Root/Register.vue';

import {
  Component,
  Vue,
} from 'vue-property-decorator';
import {User} from "@/store/user";
import {Auth} from "@/store/auth";
import {Core} from "@/store/core";
import {App} from "@/store/app";
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const containerR = document.querySelector(".containerR");
@Component({
  components: {  Navbar,Register,
    FooterSmall,},
  computed: {}
})

export default class Test extends Vue {
  tab:number = 0
  switchc : string = ''
  private form: any = {
    "username": "root",
    "password": "Pautn1611"
  }

  private async login() {
    await Auth.removeToken();
    let user: any = await Core.postHttp('/api/rest-auth/login/', this.form)
    if (user ?.key) {
      await Auth.storeToken(user.key)
      await Auth.storeTokenToStorage(user.key)
      await User.loadUser()
      await this.$router.replace(User.routeUser)
    } else {
      await App.error("เข้าสู่ระบบล้มเหลว กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
    }
  }


  async created(){
    await  Auth.checkToken();
    await User.loadUser();
    await this.$router.replace(User.routeUser)
    console.log(User.routeUser)
  }

  async ChangeTo(val:string){
    this.switchc = val
    await this.sleep(1000)
    this.tab = (val)?1:0
  }
  async sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.containerR {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-containerR {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}


div.sign-up-form {
  opacity: 1;
  z-index: 99;
}
form.sign-in-form {

  z-index: 2;
}





.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}
.panels-containerR {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.containerR:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  background: rgb(102,50,17);
  background: linear-gradient(90deg, rgba(102,50,17,1) 0%, rgba(126,78,29,1) 100%);
  transform: translateY(-50%);
//background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);


  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.containerR.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.containerR.sign-up-mode .left-panel .image,
.containerR.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.containerR.sign-up-mode .signin-signup {
  left: 25%;
}

.containerR.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.containerR.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.containerR.sign-up-mode .right-panel .image,
.containerR.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.containerR.sign-up-mode .left-panel {
  pointer-events: none;
}

.containerR.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .containerR {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .containerR.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-containerR {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 400px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .containerR:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .containerR.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .containerR.sign-up-mode .left-panel .image,
  .containerR.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .containerR.sign-up-mode .right-panel .image,
  .containerR.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .containerR.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .containerR {
    padding: 1.5rem;
  }

  .containerR:before {
    bottom: 72%;
    left: 50%;
  }

  .containerR.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}

</style>
<style>
.bgb{
  background-color: #9a6755;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%233a1500' fill-opacity='0.78' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: 50px;
  background-repeat: repeat;
}
</style>