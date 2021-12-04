<template>
<div>
    <section class="h-screen  flex   text-white">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://sv1.picz.in.th/images/2021/12/04/65BtVV.png);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <img class="ximhg" src="https://sv1.picz.in.th/images/2021/12/04/65kTER.png" alt="">
                <h1 class="text-2xl font-bold text-left tracking-wide">เว็บไซต์พันธุ์ควายไทย (ฺBuffalo Cert)</h1>
                <p class="text-xl my-4">สำหรับเก็บข้อมูลควายและใบพันธุ์ประวัติควายของคุณ</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">

            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-log">
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://sv1.picz.in.th/images/2021/12/04/65BtVV.png);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">
                <div class="my-6">
                    <center><img class="w-32 md:w-64" src="https://sv1.picz.in.th/images/2021/12/04/65BKRS.png" alt=""></center>
                    <h2 class="text-white  text-3xl md:text-4xl font-semibold">พันธุ์ควายไทย</h2>
                    <h2 class="text-xl">Buffalo Cert</h2>
                </div>
                 
                <form action="" class="sm:w-2/3 w-full px-4 mx-auto">
                    <form @submit.prevent="login()" class="sign-in-form forms" v-if="tab == 0"> 

                        <div class="relative w-full   mb-3 mt-4">
                            <v-text-field required v-model="form.username" placeholder="ระบุชื่อผู้ใช้ของคุณ" type="text" solo rounded label="ชื่อผู้ใช้" prepend-inner-icon="mdi mdi-account"></v-text-field>
                        </div>
                        <div class="relative w-full   mb-3 ">
                            <v-text-field required v-model="form.password" placeholder="ระบุรหัสผ่านของคุณ" type="password" solo rounded label="รหัสผ่าน" prepend-inner-icon="mdi mdi-form-textbox-password"></v-text-field>
                        </div>

                        <div class="w-full ">
                            <v-btn large type="submit" class="w-full" rounded color="success"><span class="text-base font-semibold">เข้าสู่ระบบ</span></v-btn> <br> <br>
                            <v-btn @click="dialogLogin=true" large class="w-full" outlined rounded dark><span class="text-base font-semibold">สมัครสมาชิก</span></v-btn>

                        </div>

                        <v-toolbar color="transparent" flat>
                            <v-btn large dark text @click="$router.push('/re-password')"><span class="text-white text-base font-semibold">ลืมรหัสผ่าน</span></v-btn>
                            <v-spacer></v-spacer>

                            <v-btn large dark text @click="goAdmin()"><span class="text-white text-base font-semibold">ผู้ดูแลระบบ</span></v-btn>
                        </v-toolbar>
 
                        <p class="mt-10 social-text text-sm font-semibold">ลิขสิทธิ์ © 2563 <br> โดย กรมปศุสัตว์ ศูนย์วิจัยและบํารุงพันธุ์สัตว์พะเยา</p>

                    </form>
                </form>
            </div>
        </div>
    </section>
    <v-dialog v-model="dialogLogin" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                <span class="text-xl">สมัครสมาชิก</span> <v-spacer></v-spacer> <v-btn color="red" x-large @click="dialogLogin = false" text fab ><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                 <Register  />
            </v-card-text>
        </v-card>
    </v-dialog>
    <!-- <div :class="`containerR ${switchc}`" ref="main">
        <div class="forms-containerR">
            <div class="signin-signup">
                <form @submit.prevent="login()" class="sign-in-form forms" v-if="tab == 0">
                    <h2 class="title">เข้าสู่ระบบ</h2>

                    <div class="relative w-full md:w-8/12 mb-3 mt-4">
                        <v-text-field required v-model="form.username" placeholder="ระบุชื่อผู้ใช้ของคุณ" type="text" filled rounded label="ชื่อผู้ใช้" prepend-inner-icon="mdi mdi-account"></v-text-field>
                    </div>
                    <div class="relative w-full md:w-8/12 mb-3 ">
                        <v-text-field required v-model="form.password" placeholder="ระบุรหัสผ่านของคุณ" type="password" filled rounded label="รหัสผ่าน" prepend-inner-icon="mdi mdi-form-textbox-password"></v-text-field>
                    </div>

                    <div class="w-full md:w-8/12"> 
                        <button :class="`${$btn} bg-blue-600 rounded-full`">เข้าสู่ระบบ</button>
                    </div>

                    <div class="w-full md:w-8/12 flex flex-wrap   relative">
                        <div class="w-1/2">
                            <router-link to="/re-password" class="text-gray-600 text-xl  ">
                                <small>ลืมรหัสผ่าน</small>
                            </router-link>
                        </div>
                        <div class="w-1/2 text-right">
                            <a :href="api+'/admin/'" class="text-gray-600  text-xl  ">
                                <small>ผู้ดูแลระบบ</small>
                            </a>
                        </div>
                    </div> 
                    <v-divider class="mt-8" style="width:70%;"></v-divider>
                    <p class="social-text">ลิขสิทธิ์ © 2563 โดย กรมปศุสัตว์ ศูนย์วิจัยและบํารุงพันธุ์สัตว์พะเยา</p>

                </form>

                <v-app v-if="tab == 1">
                    <Register  />
                </v-app>

            </div>
        </div>

        <div class="panels-containerR ">
            <div class="panel  left-panel">
                <div class="content ">
                    <h3>คุณเป็นสมาชิกเเล้วหรือยัง ?</h3>
                    <p>
                        เข้าร่วมเป็นสมาชิกกับเว็บไซต์พันธุ์ควายไทยเพื่อเก็บข้อมูลพันธุ์ควายและพันธุ์ประวัติของคุณง่ายๆเพียงไม่กี่ขั้นตอน !
                    </p>
                    <v-btn @click="ChangeTo('sign-up-mode')" outlined dark rounded>เข้าร่วมกับเรา</v-btn>

                </div>
                <img src="https://sv1.picz.in.th/images/2020/11/19/bpmWRe.png" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>คุณเป็นสมาชิกอยู่แล้ว ?</h3>
                    <p>
                        หากคุณเป็นสมาชิกกับเราอยู่แล้วสามารถเข้าสู่ระบบได้ในทันที !
                    </p>

                    <v-btn @click="ChangeTo('')" outlined dark rounded>เข้าสู่ระบบ</v-btn>

                </div>
                <img src="https://sv1.picz.in.th/images/2020/11/19/bpm9nW.png" class="image" alt="" />
            </div>
        </div>
    </div> -->
</div>
</template>

<script lang="ts">
import Register from '@/components/Component/Core/Register.vue';

import {
    Component,
    Vue,
} from 'vue-property-decorator';
import { User } from "@/store/user";
import { Auth } from "@/store/auth";
import { Core } from "@/store/core";
import { App } from "@/store/app";
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const containerR = document.querySelector(".containerR");
@Component({
    components: {
        Register,
    },
    computed: {}
})

export default class Test extends Vue {
    api: any = process.env.VUE_APP_SERVER
    tab: number = 0
    switchc: string = ''
    dialogLogin:boolean = false
    private form: any = {
        "username": "",
        "password": ""
    }

    private async login() {
        await Auth.removeToken();
        let user: any = await Core.postHttp('/api/rest-auth/login/', this.form)
        if (user.key) {
            await Auth.storeToken(user.key)
            await Auth.storeTokenToStorage(user.key)
            await User.loadUser()
            await this.$router.replace(User.routeUser)
        } else {
            await App.error("เข้าสู่ระบบล้มเหลว กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
        }
    }

    async created() {
        await Auth.checkToken();
        await User.loadUser();
        await this.$router.replace(User.routeUser)
        console.log(User.routeUser)

    }

    async goAdmin() {

        if (this.$device.android || this.$device.ios) {
            await this.$router.push('adminmobile')
        } else {
            window.location.href = 'https://www.buffalocert.agri.up.ac.th/admin/';
        }
    }

    async ChangeTo(val: string) {
        this.switchc = val
        await this.sleep(1000)
        this.tab = (val) ? 1 : 0
    }
    async sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
</script>

<style>
 

.bg-log {
    background-color: #555555;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23555555' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23525052' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%234f4b4f' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%234c464c' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23494149' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23463c46' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23433743' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%233f3340' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%233c2e3d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%2339293a' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23362538' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23332035' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23301b32' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%232d172f' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2329122c' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23260d29' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23230727' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
.ximhg {
    width:auto;
  }
@media only screen and (min-width: 1980px) {
  .ximhg {
    width:600px;
  }
}
</style>
