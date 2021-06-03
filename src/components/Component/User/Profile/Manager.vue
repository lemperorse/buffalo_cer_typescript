<template>
<div>
    <div class="rounded-t bg-white mb-0 px-2 md:px-6 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6> 
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form @submit.prevent="changePassword">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ตั้งค่ารหัสผ่าน
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ">
                    <v-text-field required v-model="formPassword.password" type="password" placeholder="ระบุรหัสผ่าน ***" filled rounded dense label="รหัสผ่านใหม่" id="id" prepend-inner-icon="fas fa-key"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 px-4 ">
                    <v-text-field required v-model="formPassword.password2" type="password" placeholder="ระบุรหัสผ่าน ***" filled rounded dense label="ยืนยันรหัสผ่านใหม่" id="id" prepend-inner-icon="fas fa-key"></v-text-field>
                    <v-btn color="success" depressed type="submit" block large rounded>
                        <v-icon left>fas fa-save</v-icon>
                        อัพเดทรหัสผ่าน
                    </v-btn>
                </div>
            </div>
        </form>
        <hr class="mt-6 border-b-1 border-gray-400" v-if="admin" />
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase" v-if="admin">
            จัดการสิทธิ์
        </h6>
        <div class="w-full lg:w-12/12 px-4" v-if="admin">
            <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                    สิทธ์การใช้งาน
                </label>
                <div class="relative">
                    <select v-model="formProfile.status" @change="changeStatus" class="border-edit block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
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

        <hr class="mt-6 border-b-1 border-gray-400" v-if="admin" />
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase" v-if="admin">
            ลบข้อมูลเกษตกร
        </h6>

        <div class="flex flex-wrap" v-if="admin">
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                    <button @click="disableUser" class="f-white w-full rounded p-2 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                        ลบข้อมูลเกษตกรคนนี้
                    </button>
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
import { App } from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class ManagerClass extends Vue {
    public formPassword: object | any = {}
    public formUser: FarmForm | any = {}
    public formProfile: any = {}
    private currentFarmer: any = null

    private admin: any = null

    private async created() {
        await this.collingPermission()
        await this.run();
    }

    async collingPermission() {
        let user = await User.getUser();
        let userAll = await Core.getHttp(`/api/account/${user.pk}/`)
        if (userAll.is_staff) {
            this.admin = userAll.is_staff

            this.currentFarmer = this.$route.query.farmer
        } else {
            let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
            this.currentFarmer = profile.id
        }
    }

    private async run() {
        await App.onLoad()
        this.formProfile = await Core.getHttp(`/api/profile/${this.currentFarmer}/`)
        this.formUser = await Core.getHttp(`/api/account/${this.formProfile.user}/`)
        await App.offLoad();
    }

    async changeStatus() {
        console.log(this.formProfile)
        let profile = await Core.postHttp(`/user/account/user/${this.formProfile.id}/`, this.formProfile)
        if (profile.id) {
            await App.success("จัดการสิทธิ์สำเร็จ")
        }
        await this.run();
    }

    async disableUser() {
        let check = await App.confirm('คุณแน่ใจใช่ไหม', 'ี่จะลบผู้ใช้คนนี้')
        if (check) {
            let user = await Core.deleteHttp(`/user/account/user/${this.formUser.id}/`)
            if (user.id) {
                await App.success("ลบผู้ใช้สำเร็จ")
                await this.$router.go(-1)
            }
        }
    }

    async changePassword(event: any) {
        if (this.formPassword.password == this.formPassword.password2) {
            let change = await Core.putHttp(`/user/account/user/${this.formUser.id}/`, this.formPassword)
            this.formPassword = {}
            if (change.id) {
                await App.success("เปลี่ยนรหัสผ่านสำเร็จ")
            }
        } else {
            await App.error("รหัสผ่านไม่ตรงกัน")
        }
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
