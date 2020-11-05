<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>

        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @submit.prevent="changePassword">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ตั้งค่ารหัสผ่าน
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสผ่านใหม่
                        </label>
                        <input v-model="formPassword.password" required type="password" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="" />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ยืนยันรหัสผ่านใหม่
                        </label>
                        <input v-model="formPassword.password2"  required type="password" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="" />
                    </div>
                  <div class="relative w-full mb-3">
                    <button type="submit" :class="'f-white bg-orange-600 '+$btn">อัพเดทรหัสผ่าน</button>
                  </div>

                </div>
            </div>
        </form>
            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                จัดการสิทธิ์
            </h6>
            <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                        สิทธ์การใช้งาน
                    </label>
                    <div class="relative">
                        <select  v-model="formProfile.status" @change="changeStatus" class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option :value="true">เปิดการใช้งาน (ผู้ใช้)</option>
                            <option :value="false">ปิดการใช้งาน</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ลบข้อมูลเกษตกร
            </h6>

            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <button @click="disableUser" class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            ลบข้อมูลเกษตกร
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-4"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                </button></div>


    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
} from 'vue-property-decorator';
import {
    Core
} from '@/store/core'
import {
    Auth
} from '@/store/auth'
import {
    User
} from '@/store/user'

import moment from "moment";
import { FarmForm } from "@/models/farm";

@Component({
    components: {},
    computed: {}
})

export default class ManagerClass extends Vue {
    public formPassword :object | any = {}
    public formUser: FarmForm | any = {}
    public formProfile: any = {}


    private async created() {
        await this.run();
    }

    private async run() {
        let user = this.$route.query.farmer
        this.formProfile = await Core.getHttp(`/api/profile/${user}/`)

        this.formUser = await Core.getHttp(`/api/account/${this.formProfile.user}/`)


    }

    async changeStatus(){
        console.log(this.formProfile)
        let profile = await Core.postHttp(`/user/account/user/${this.formProfile.id}/`,this.formProfile)
        if(profile.id){
          alert('จัดการสิทธิ์สำเร็จ')
        }
        await  this.run();
      }
  
      async disableUser(){
        let check = confirm("คุณแน่ใจใช่ไหมที่จะลบผู้ใช้คนนี้")
        if(check){
          let user = await Core.deleteHttp(`/user/account/user/${this.formUser.id}/`)
          if(user.id){
              alert("ลบผู้ใช้สำเร็จ")
              await this.$router.go(-1)
          }
        }
      }


    async changePassword(event: any) {
        if(this.formPassword.password == this.formPassword.password2 ){
          let change = await Core.putHttp(`/user/account/user/${this.formUser.id}/`,this.formPassword)
          this.formPassword = {}
          if(change.id){
            alert("เปลี่ยนรหัสผ่านสำเร็จ")
          }
        }else{
          alert("รหัสผ่านไม่ตรงกัน")
        }
    }




}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
