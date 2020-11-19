<template>
<div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
        <div class="w-full px-4" style="max-width:500px;">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
 
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div class="text-gray-500 text-center mb-3 font-bold flex justify-center pt-6">
                      <img class="w-48" src="https://sv1.picz.in.th/images/2020/11/17/bVc06z.png" alt="">
                    </div>
                    <form @submit.prevent="login">
<!--                        <div class="relative w-full mb-3">-->
<!--                            <v-text-field label="ชื่อผู้ใช้" solo v-model="form.username" required></v-text-field>-->
<!--                        </div>-->
                        <div class="mb-6 pt-3 rounded bg-white">
                          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3">ชื่อผู้ใช้</label>
                          <input v-model="form.username" type="text" class="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                        </div>

<!--                        <div class="relative w-full mb-3">-->
<!--                            <v-text-field type="password" label="รหัสผ่าน" solo v-model="form.password" required></v-text-field>-->
<!--                        </div>-->

                        <div class="mb-6 pt-3 rounded bg-white ">
                          <label class="block text-gray-700 text-sm font-bold mb-2 ml-3 ">รหัสผ่าน</label>
                          <input v-model="form.password" type="password" class="bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
                        </div>

                        <div class="text-center mt-6">
                            <button style="background-color:#404040;" :class="`f-white ${$btn}`" type="submit">
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="flex flex-wrap mt-6 relative">
                <div class="w-1/2">
                    <router-link to="/re-password" class="text-gray-300">
                        <small>ลืมรหัสผ่าน</small>
                    </router-link>
                </div>
                <div class="w-1/2 text-right">
                    <router-link to="/register" class="text-gray-300">
                        <small>สมัครสมาชิก</small>
                    </router-link>
                </div>
            </div>
        </div>


    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import { Core } from '@/store/core'
import { Auth } from '@/store/auth'
import { User } from '@/store/user'

import CityDialog from '@/components/Dialog/City.vue'
import { App } from "@/store/app";

@Component({
    components: { CityDialog },
    computed: {}
})

export default class Home extends Vue {
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

    private async created() {

    }

}
</script>

<style>
.f-white{
  color:white;
}
</style>
