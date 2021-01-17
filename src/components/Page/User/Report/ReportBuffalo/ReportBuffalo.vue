<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 px-2 rounded">
    <div class="rounded-t mb-0 py-3 border-0 animate__animated animate__zoomIn">
        <div class="relative w-full md:w-auto px-1 max-w-full flex-grow flex-1 ">
            <h3 class="font-semibold text-base text-gray-800">
                <button style="color:#855737;" class="text-2xl" @click="$router.push('/user/profile')">รายงานจำนวนควาย</button>
                <span class="text-2xl"> ( ควายทั้งหมด {{buffalos.count}} ตัว) </span>
            </h3>
        </div><br>

        <div class="flex flex-wrap items-center ">
            <!-- ค้นหา -->
            <form @submit.prevent="run" class="w-8/12">
                <div class="flex rounded border bg-gray-100 hover:shadow-lg">
                    <button>
                        <span class="w-auto flex justify-end items-center text-grey p-2">
                            <i class="fas fa-search text-xl"></i>
                        </span>
                    </button>
                    <input class="w-full" type="text" placeholder="ค้นหาควาย">
                </div>
            </form>

            <!-- เพิ่ม -->
            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                <button @click="$router.push(`buffalo/create`)" class="f-white rounded p-2 bg-indigo-500 hover:bg-indigo-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                    <i class="fas fa-plus-square text-lg"></i> เพิ่มควาย
                </button>
            </div>

        </div>
    </div>
    <div class="flex">
        <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                    สถานะ {{statusData}}
                </label>
                <div class="relative">
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                        <i class="fas fa-file-alt text-lg text-gray-500"></i>
                    </span>
                    <select v-model="statusData" required :class="`${$xinput}  focus:ring-1 focus:ring-yellow-600` ">
                        <option  value="">ทั้งหมด</option>
                        <option v-for="val,i in status" :key="i" :value="val.value">{{ val.value }}</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
         <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เพศ
                        </label>
                        <div class="relative">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-venus-mars text-lg text-gray-500"></i>
                            </span>
                            <select  v-model="genderData"  required :class="`${$xinput} focus:ring-1 focus:ring-yellow-600` ">
                               <option  value="">ทั้งหมด</option>
                                <option v-for="val,i in sex" :key="i" :value="val.value">{{ val.value }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

        
    </div>
    <!-- card -->
    <div class="block w-full overflow-x-auto bg-gray-100">
        <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3 hvr-grow" v-for="buffalo,index in buffalos.results" :key="index">
                <div class="bg-white border-b-2 border-blue-700 rounded shadow-full mx-4 my-2 animate__animated animate__zoomIn ">
                    <div class="flex-auto p-4 ">
                        <div class="flex flex-wrap ">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <span class="font-semibold text-xl text-gray-800">
                                    ชื่อควาย : {{buffalo.name}}
                                </span>
                                <h5 class="text-gray-500 uppercase font-bold text-xs">
                                    หมายเลข MICROCHIP : {{ buffalo.nid }}
                                </h5>

                                <h3>
                                    <button @click="$router.push(`buffalo/profile?id=${buffalo.id}`)" class="f-white rounded p-2 bg-blue-500 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">ดูรายละเอียด</button>
                                </h3>

                            </div>

                            <div class="relative w-auto pl-4 flex-initial">
                                <div>
                                    <img :src="(buffalo.back_image)?buffalo.back_image:'https://sv1.picz.in.th/images/2020/11/07/bb198v.jpg'" class="h-12 w-12 bg-white rounded-full border" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="py-2 ">

        <v-pagination v-model="page" color="#4361EE" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" :length="allPages" :total-visible="9" @input="handlePageChange" circle></v-pagination>

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

import {
    City
} from "@/store/city";
import MapView from '@/components/Maps/MapView.vue';

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { Map } from "@/store/map";
import { App } from "@/store/app";

@Component({
    components: { MapView },
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

export default class Farm extends Vue {
    private user: any = {}
    private farm: FarmForm | any = {}
    private buffalos: any = []
    private response: boolean = false

    private page: number = 1
    private allPages: number = 1
    private search: string = ''

    private async created() {
        await this.setChoices()
        await this.run();
    }

    sex: any = []
    color: any = []
    status: any = []
    froms: any = []
    private async setChoices() {
        this.sex = await Core.getChoice(`เพศควาย`)
        this.color = await Core.getChoice(`สีควาย`)
        this.status = await Core.getChoice(`สถานะควาย`)
        this.froms = await Core.getChoice(`แหล่งที่มาของควาย`)
    }
    statusData:any = null
     sselect:any = ''
    @Watch('statusData')
    async changeStatus(value:any ){
      this.gselect = `&status__value=${value}`
      await this.run()
    }

    genderData:any = null
    gselect:any = ''
    @Watch('genderData')
    async changeGender(value:any){
      this.gselect = `&gender__value=${value}`
      console.log(this.gselect );
      await this.run()
    }

    private async run() {
        await App.onLoad()
        let user = await User.getUser();
        this.user = await Core.getHttp(`/api/account/${user.pk}/`)
        this.farm = await Core.getHttp(`/user/buffalo/farm/${user.pk}/`)
        this.buffalos = await Core.getHttp(`/api/buffalo/buffalo/?farm__id=${this.farm.id}&search=${this.search}${this.gselect}${this.sselect}`)
        this.allPages = Math.ceil((this.buffalos?.count / 9))
        this.response = true
        await App.offLoad()
    }
    private async handlePageChange(value: any) {
        this.buffalos = await Core.getHttp(`/api/buffalo/buffalo/?farm__id=${this.farm.id}&search=${this.search}&page=${value}${this.gselect}${this.sselect}`)
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
