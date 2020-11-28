<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">โปรไฟล์ของฉัน</h6>
            <button v-if="unEdit" @click="unEdit = !unEdit" class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
            </button>
            <button v-if="!unEdit" @click="unEdit = !unEdit" class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกแก้ไข
            </button>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">

        <form @submit.prevent="updateProfile()">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ข้อมูลทั่วไป
            </h6>
          <v-alert color="#F59E0B" type="info" outlined  v-if="!unEdit" >
          โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
          </v-alert>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            ชื่อผู้ใช้งาน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input disabled v-model="form.username" type="text" :class="`${$xinput} border-success`" value="lucky.jesse"  />
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            อีเมล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="far fa-envelope text-lg text-gray-500"></i>
                            </span> 
                             <input :disabled="unEdit" v-model="form.email" type="email" :class="`${$xinput} ${editMode}`" value="jesse@example.com"   />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            ชื่อ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input :disabled="unEdit" v-model="form.first_name" type="text" :class="`${$xinput} ${editMode}`" value="Lucky"  />
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            นามสกุล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input :disabled="unEdit" v-model="form.last_name" type="text" :class="`${$xinput} ${editMode}`"  value="Jesse"  />
                        </div>
                    </div>
                    <div class="relative w-full mb-3 mt-4" v-if="!unEdit">
                        <button :class="'bg-green-600 '+$btn"><i class="fas fa-save text-lg"></i> อัพเดทโปรไฟล์</button>
                    </div>
                </div>
            </div>
        </form>
        <hr class="mt-6 border-b-1 border-gray-400" />
        <div class="text-center flex justify-between mt-6">
            <h6 class="text-gray-800 text-xl font-bold">รหัสผ่าน</h6>
            <button v-if="unPassword" @click="unPassword = !unPassword" class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
            </button>
            <button v-if="!unPassword" @click="unPassword = !unPassword" class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกแก้ไข
            </button>
        </div>
        <form @submit.prevent="changePassword" class="mt-6">
          <v-alert color="#F59E0B" type="info" outlined  v-if="!unPassword" >
            โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
          </v-alert>
            <div class="flex flex-wrap">

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            รหัสผ่านใหม่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-key text-lg text-gray-500"></i>
                            </span>
                            <input required :disabled="unPassword" placeholder="8 อักษรขึ้นไป (A-Z a-z 0-9 สัญลักษณ์)" v-model="iPassword.new_password1" type="password"
                                   :class="`${$xinput} ${editModePassword}`" value="" />
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            ยืนยันรหัสผ่านใหม่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-key text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unPassword" required placeholder="8 อักษรขึ้นไป (A-Z a-z 0-9 สัญลักษณ์)" v-model="iPassword.new_password2" type="password" :class="`${$xinput} ${editModePassword}`" value=""  />
                        </div>
                    </div>
                    <div class="relative w-full mb-3 mt-4" v-if="!unPassword">
                        <button type="submit" :class="'f-white bg-green-600 '+$btn"><i class="fas fa-save text-lg"></i> อัพเดทรหัสผ่าน</button>
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
import { Core } from '@/store/core'
import { Auth } from '@/store/auth'
import { User } from '@/store/user'
import {App} from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class Home extends Vue {

    private response: boolean = false
    private form: any = User.user
    private iPassword: object = {}
    private unEdit: boolean = true
    private unPassword: boolean = true
    private async created() {
        await this.run()
    }

    private async run() {
      await App.onLoad()
        await User.loadUser()
        this.form = User.user
        this.response = true
      await App.offLoad()
    }

    private async updateProfile() {
        let user = await Core.putHttp(`/api/account/${this.form.pk}/`, this.form)
        if (user.id) {
            this.unEdit = true
          await App.success("แก้ไขข้อมูลสำเร็จแล้ว")
        }
    }

    private async changePassword() {
        let password = await Core.postHttp(`/api/rest-auth/password/change/`, this.iPassword)
        if (password.detail) {
            this.iPassword = {}
            this.unPassword = true
            await App.success("แก้ไขรหัสผ่านสำเร็จแล้ว")
        } else {
            await App.error("ไม่สามารถเปลี่ยนรหัสผ่านได้")
            this.iPassword = {}
        }
    }

    get editMode(){
      return (this.unEdit )?'border-success':'border-edit'
    }

  get editModePassword(){
    return (this.unPassword )?'border-success':'border-edit'
  }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
