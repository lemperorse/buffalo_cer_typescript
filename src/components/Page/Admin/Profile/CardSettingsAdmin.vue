<template>

  <div v-if="response"
       class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">โปรไฟล์ของฉัน</h6>
        <button
            v-if="unEdit"
            @click="unEdit = !unEdit"
            class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
        >
          แก้ไข
        </button>
        <button
            v-if="!unEdit"
            @click="unEdit = !unEdit"
            class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
        >
          ยกเลิกแก้ไข
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">

      <form @submit.prevent="updateProfile()">
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          ข้อมูลทั่วไป
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                ชื่อผู้ใช้งาน
              </label>
              <input disabled
                     v-model="form.username"
                     type="text"
                     :class="$xinput"
                     value="lucky.jesse"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                อีเมล
              </label>
              <input
                  :disabled="unEdit"
                  v-model="form.email"
                  type="email"
                  :class="$xinput"
                  value="jesse@example.com"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                ชื่อ
              </label>
              <input
                  :disabled="unEdit"
                  v-model="form.first_name"
                  type="text"
                  :class="$xinput"
                  value="Lucky"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                นามสกุล
              </label>
              <input
                  :disabled="unEdit"
                  v-model="form.last_name"
                  type="text"
                  :class="$xinput"
                  value="Jesse"
              />
            </div>
            <div class="relative w-full mb-3 mt-4" v-if="!unEdit">
              <button :class="'bg-green-600 '+$btn">อัพเดทโปรไฟล์</button>
            </div>
          </div>
        </div>
      </form>
        <hr class="mt-6 border-b-1 border-gray-400"/>
      <div class="text-center flex justify-between mt-6">
        <h6 class="text-gray-800 text-xl font-bold">รหัสผ่าน</h6>
      <button
          v-if="unPassword"
          @click="unPassword = !unPassword"
          class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
      >
        แก้ไข
      </button>
        <button
            v-if="!unPassword"
            @click="unPassword = !unPassword"
            class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
        >
          ยกเลิกแก้ไข
        </button>
      </div>
      <form @submit.prevent="changePassword" class="mt-6">

        <div class="flex flex-wrap">

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                รหัสผ่านใหม่
              </label>
              <input
                  required
                  :disabled="unPassword"
                  placeholder="8 อักษรขึ้นไป (A-Z a-z 0-9 สัญลักษณ์)"
                  v-model="iPassword.new_password1"
                  type="password"
                  :class="$xinput"
                  value=""
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
              >
                ยืนยันรหัสผ่านใหม่
              </label>
              <input
                  :disabled="unPassword"
                  required
                  placeholder="8 อักษรขึ้นไป (A-Z a-z 0-9 สัญลักษณ์)"
                  v-model="iPassword.new_password2"
                  type="password"
                  :class="$xinput"
                  value=""
              />
            </div>
            <div class="relative w-full mb-3 mt-4" v-if="!unPassword">
              <button type="submit" :class="'f-white bg-green-600 '+$btn">อัพเดทรหัสผ่าน</button>
            </div>
          </div>
        </div>
      </form>
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


@Component({
  components: {},
  computed: {}
})

export default class Home extends Vue {

  private response: boolean = false
  private form: any = User.user
  private iPassword :object = {}
  private unEdit :boolean = true
  private unPassword : boolean  = true
  private async created() {
    await this.run()
  }

  private async run() {
    await User.loadUser()
    this.form = User.user
    this.response = true
  }

  private async updateProfile(){
      let user = await Core.putHttp(`/api/account/${this.form.pk}/`,this.form)
      if(user.id){
          this.unEdit = true
      }
  }
  
  private async changePassword(){
    let password = await Core.postHttp(`/api/rest-auth/password/change/`,this.iPassword)
    if(password.detail){
      this.iPassword  = {}
      this.unPassword = true
    }else{
      alert('ไม่สามารถเปลี่ยนรหัสผ่านได้')
      this.iPassword  = {}
    }
  }

}
</script>

<style>
.f-white {
  color: white !important;
}
</style>
