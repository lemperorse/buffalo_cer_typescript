<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                  class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
              >
                <img alt="..." class="w-5 mr-1" src=""/>
                Github
              </button>
              <button
                  class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
              >
                <img alt="..." class="w-5 mr-1" src=""/>
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400"/>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-500 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form @submit.prevent="login">
              <div class="relative w-full mb-3">
                <v-text-field label="ชื่อผู้ใช้" solo v-model="form.username" required></v-text-field>
              </div>

              <div class="relative w-full mb-3">
                <v-text-field type="password" label="รหัสผ่าน" solo v-model="form.password" required></v-text-field>
              </div>
              <div class="text-center mt-6">
                <button
                    :class="$btn"
                    type="submit"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-gray-300">
              <small>ลืมรหัสผ่าน</small>
            </a>
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
import {Core} from '@/store/core'
import {Auth} from '@/store/auth'
import {User} from '@/store/user'

import CityDialog from '@/components/Dialog/City.vue'
import {App} from "@/store/app";

@Component({
  components: {CityDialog},
  computed: {}
})

export default class Home extends Vue {
  private form: any = {
    "username":"root",
    "password":"Pautn1611"
  }

  private async login() {
    let user:any = await Core.postHttp('/api/rest-auth/login/', this.form)
    if(user?.key){
      await Auth.storeToken(user.key)
      await Auth.storeTokenToStorage(user.key)
      await User.loadUser()
      await this.$router.replace(User.routeUser)
    }else{
      await App.error("เข้าสู่ระบบล้มเหลว")
    }
  }

  private async created(){

  }

}
</script>
<style>

</style>
