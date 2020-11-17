<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    ข้อมูลผู้ดูแลระบบ
                </h3>
            </div>

            <!-- ค้นหา -->
            <form @submit.prevent="run">
                <div class="relative flex flex-wrap ">
                    <input type="text" v-model="search" placeholder="ค้นหา" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </form>

            <!-- เพิ่ม -->
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button @click="$router.push('/admin/addAdmin')" class="bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อ-สกุล
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อผู้ใช้
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        สถานะ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        จัดการ
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
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
                        <i class="fas fa-circle text-green-500 mr-2"></i> ผู้ดูแลระบบ
                    </td>

                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="openDialog(admin)" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                <i class="fas fa-eye"></i> ดูข้อมูล
                            </button>
                            <button @click="deleteAdmin(admin.id)" class="bg-red-500
                  active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 f-white " type="button">
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
            <v-pagination v-model="page" :length="allPages" :total-visible="7" @input="handlePageChange" circle></v-pagination>
            <v-dialog v-model="dialog" max-width="500px" persistent>
                <v-card>
                    <v-card-title>
                        ข้อมูลของ {{ form.first_name }}
                        <v-spacer></v-spacer>
                        <v-btn @click="closeDialog" icon text>
                            <v-icon>fas fa-window-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>

                        <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                            ข้อมูลส่วนตัว
                        </h6>
                        <form @submit.prevent="updateUser">
                            <div class="flex flex-wrap">

                                <div class="w-full lg:w-12/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            ชื่อ
                                        </label>
                                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                                <i class="far fa-address-card text-lg text-gray-500"></i>
                                            </span>
                                            <input required type="text" v-model="form.first_name" :class="$xinput" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                                        </div> 
                                    </div>
                                </div>
                                <div class="w-full lg:w-12/12 px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            สกุล
                                        </label>
                                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                                <i class="far fa-address-card text-lg text-gray-500"></i>
                                            </span>
                                            <input required type="text" v-model="form.last_name" :class="$xinput" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-12/12 px-4 mt-2">
                                <div class="relative w-full mb-3">
                                    <button :class="`bg-orange-600 f-white ${$btn}`"><i class="fas fa-pencil-alt text-lg"></i> แก้ไขข้อมูล</button>
                                </div>
                            </div>
                        </form>

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
import {App} from "@/store/app";

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
        let check = await App.confirm('คุณแน่ใจใช่ไหม','ที่จะลบผู้ดูแลระบบคนนี้')
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
