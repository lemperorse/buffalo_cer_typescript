<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-blue-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full  max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    ข้อมูลผู้ดูแลระบบ
                </h3>
            </div>
        </div>

        <div class="flex flex-wrap items-center ">
            <!-- ค้นหา -->
            <form @submit.prevent="run" class="w-8/12">
                <div class="flex rounded border bg-gray-100 hover:shadow-lg">
                    <button>
                        <span class="w-auto flex justify-end items-center text-grey p-2">
                            <i class="fas fa-search text-xl"></i>
                        </span>
                    </button>
                    <input class="w-full" type="text" placeholder="ค้นหาเกษตกร">
                </div>
            </form>

            <!-- เพิ่ม -->
            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                <button @click="$router.push('/admin/addAdmin')" class="f-white rounded p-2 bg-indigo-500 hover:bg-indigo-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                    <i class="fas fa-plus-square text-lg"></i> เพิ่มผู้ดูแลระบบ
                </button>
            </div>
        </div>

    </div>
    <!-- table -->
    <div class="block w-full overflow-x-auto">

        <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        ชื่อ-สกุล
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        ชื่อผู้ใช้
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        สถานะ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        จัดการ
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"></th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="admin,i in admins.results" :key="i">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                        <img :src="(admin.profile_image)?admin.profile_image:`https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg`" class="h-12 w-12 bg-white rounded-full border" alt="..." />
                        <span class="ml-3 font-bold" :class="[color === 'light' ? 'text-gray-700' : 'text-white']">
                            {{ admin.first_name }} {{ admin.last_name }}
                        </span>
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        {{ admin.username }}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i class="fas fa-circle text-blue-500 mr-2"></i> ผู้ดูแลระบบ
                    </td>

                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="openDialog(admin)" class="f-white rounded p-2 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                                <i class="fas fa-eye"></i> ดูข้อมูล
                            </button>
                            <button @click="deleteAdmin(admin.id)" class="f-white rounded p-2 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                                <i class="fas fa-eraser"></i> ลบ
                            </button>

                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <!-- pagination -->
    <div class="py-2 mb-4">
        <v-app style="height:100px!important;">
            <v-pagination color="#4361EE" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" v-model="page" :length="allPages" :total-visible="7" @input="handlePageChange" circle></v-pagination>
            <v-dialog v-model="dialog" max-width="500px" persistent>
                <v-card>
                    <v-card-title>
                        ข้อมูลของ {{ form.first_name }}
                        <v-spacer></v-spacer>
                        <v-btn @click="closeDialog" icon text color="red" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <v-icon>fas fa-window-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-tabs>
                            <v-tab>ข้อมูลส่วนตัว</v-tab>
                            <v-tab-item class="pt-4">
                                <form @submit.prevent="updateUser">
                                    <div class="flex flex-wrap">
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative w-full mb-3">
                                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                    ชื่อ
                                                </label>
                                                <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                                        <i class="far fa-address-card text-lg text-gray-500"></i>
                                                    </span>
                                                    <input required type="text" v-model="form.first_name" :class="`${$xinput} border-edit focus:ring-1 focus:ring-yellow-600`" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative w-full mb-3">
                                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                    สกุล
                                                </label>
                                                <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                                        <i class="far fa-address-card text-lg text-gray-500"></i>
                                                    </span>
                                                    <input required type="text" v-model="form.last_name" :class="`${$xinput} border-edit focus:ring-1 focus:ring-yellow-600`" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-12/12 px-4 mt-2">
                                        <div class="relative w-full mb-3">
                                            <button class="f-white w-full rounded p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><i class="fas fa-pencil-alt text-lg"></i> แก้ไขข้อมูล</button>
                                        </div>
                                    </div>
                                </form>
                            </v-tab-item>
                            <v-tab>รหัสผ่าน</v-tab>
                            <v-tab-item class="pt-4">
                                <form @submit.prevent="updatePassword">
                                    <div class="flex flex-wrap">
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative w-full mb-3">
                                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                    รหัสผ่าน
                                                </label>
                                                <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                                        <i class="far fa-address-card text-lg text-gray-500"></i>
                                                    </span>
                                                    <input required type="password" v-model="password" :class="`${$xinput} border-edit focus:ring-1 focus:ring-yellow-600`" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative w-full mb-3">
                                                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                    ยืนยันรหัสผ่าน
                                                </label>
                                                <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                                        <i class="far fa-address-card text-lg text-gray-500"></i>
                                                    </span>
                                                    <input required type="password" v-model="passwordConfirm" :class="`${$xinput} border-edit focus:ring-1 focus:ring-yellow-600`" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-12/12 px-4 mt-2">
                                        <div class="relative w-full mb-3">
                                            <button v-if="password != '' && passwordConfirm != '' && password == passwordConfirm" class="f-white w-full rounded p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><i class="fas fa-pencil-alt text-lg"></i> แก้ไขข้อมูล</button>
                                        </div>
                                    </div>
                                </form>
                            </v-tab-item>
                        </v-tabs>

                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-app>

    </div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
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

import CityDialog from '@/components/Dialog/City.vue'
import { App } from "@/store/app";

@Component({
    components: {
        CityDialog
    },
    computed: {},
    props: {
        color: {
            default: "light",
            validator: function (value) {
                // The value must match one of these strings
                return ["light", "dark"].indexOf(value) !== -1;
            },
        },
    }
})

export default class Table extends Vue {

    private admins: any | null = null
    private response: boolean = false
    private page: number = 1
    private allPages: number = 1
    private search: string = ''
    private dialog: boolean = false
    private form: any = {}
    private password: string = ''
    private passwordConfirm: string = ''

    private async created() {
        await this.run();
    }

    private async run() {
        await App.onLoad();
        this.admins = await Core.getHttp(`/api/account/?is_staff=true&search=${this.search}`)
        this.allPages = Math.ceil((this.admins ?.count / 5))
        this.response = true
        await App.offLoad();
    }

    private async handlePageChange(value: any) {
        this.admins = await Core.getHttp(`/api/account/?is_staff=true&search=${this.search}&page=${value}`)
    }

    private async deleteAdmin(id: number) {
        let check = await App.confirm('คุณแน่ใจใช่ไหม', 'ที่จะลบผู้ดูแลระบบคนนี้')
        if (check) {
            await Core.deleteHttp(`/api/account/${id}/`)
            await this.run();
            await App.success("ลบผู้ดูแลระบบสำเร็จ")
        }
    }

    private async updateUser() {
        let user = await Core.putHttp(`/api/account/${this.form.id}/`, this.form)
        if (user.id) {
            await this.run()
            await App.success("แก้ไขข้อมูลสำเร็จ")
            await this.closeDialog()
        }
    }

    private async updatePassword() {
        let form = {
            user: this.form.id,
            password: this.password
        }
        let changePasswordUser = await Core.postHttp(`/user/account/changepassword/`, form)
        if (changePasswordUser) {
            alert('สำเร็จแล้ว')
            await this.closeDialog()
        } else {
            alert('ไม่สามารถแก้ไขรหัสผ่านได้')
        }
        await this.run()
    }

    private async openDialog(form: object) {
        this.form = form
        this.dialog = true
    }

    private async closeDialog() {
        this.form = {}
        this.dialog = false
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
