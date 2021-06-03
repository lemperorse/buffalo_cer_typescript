<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-blue-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full  max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    รายชื่อเกษตกร
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
                <button @click="$router.push('/admin/addfarmer')" class="f-white rounded p-2 bg-indigo-500 hover:bg-indigo-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                    <i class="fas fa-plus-square text-lg"></i> เพิ่มเกษตกร
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
                        ชื่อ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        เบอร์โทรศัพท์
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        จังหวัด
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        กลุ่มเกษตกร
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        สถานะการใช้งาน
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]">
                        การจัดการ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"></th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="farmer,i in farmers.results" :key="i">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                        <img :src="(farmer.profile_image)?farmer.profile_image:`https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg`" class="h-12 w-12 bg-white rounded-full border" alt="..." />
                        <span class="ml-3 font-bold" :class="[color === 'light' ? 'text-gray-700' : 'text-white']">
                            {{farmer.fullname}}
                        </span>
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        {{farmer.tel}}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        {{farmer.iprovince}}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex">
                            {{farmer.igroup}}
                        </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex" v-if="farmer.status">
                            <i class="fas fa-circle text-blue-500 mr-2"></i> ใช้งานปกติ
                        </div>
                        <div class="flex" v-else>
                            <i class="fas fa-circle text-red-500 mr-2"></i> ปิดการใช้งาน
                        </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push(`/admin/farmerprofile?farmer=${farmer.id}`)" class="f-white rounded p-2 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                                <i class="fas fa-eye "></i> ดูข้อมูล
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

    private farmers: any | null = null
    private response: boolean = false
    private page: number = 1
    private allPages: number = 1
    private search: string = ''

    private async created() {
        await this.run();
    }

    private async run() {
        await App.onLoad();
        this.farmers = await Core.getHttp(`/api/profile/?search=${this.search}`)
        this.allPages = Math.ceil((this.farmers ?.count / 5))
        this.response = true
        await App.offLoad();
    }

    private async handlePageChange(value: any) {
        this.farmers = await Core.getHttp(`/api/profile/?search=${this.search}&page=${value}`)
    }

    private async deleteFarmer(farmer: any) {
        let check = confirm('คุณแน่ใจใช่ไหมที่จะลบผู้ใช้นี้')
        if (check) {
            await Core.deleteHttp(`/api/profile/${farmer.id}/`)
            await Core.deleteHttp(`/api/account/${farmer.user.id}/`)
            await this.run();
        }
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
