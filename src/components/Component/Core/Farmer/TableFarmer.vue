<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 px-2 rounded ">
    <div class="rounded-t mb-0 py-3 border-0 animate__animated animate__zoomIn p-3">
        <div class="relative w-full md:w-auto px-1 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-gray-800">
                <button style="color:#855737;" class="text-2xl" @click="$router.push('/user/profile')">ควายในฟาร์ม</button>
                <span class="text-2xl"> / {{farm.name}}</span>
            </h3>
            <h2 class="text-base">เจ้าของ {{user.first_name}} </h2>
        </div><br>
        <div class="flex flex-wrap items-center ">
            <!-- ค้นหา -->
            <form @submit.prevent="run" class="w-1/2">
                <div class="flex rounded-full border bg-white hover:shadow-lg">
                    <button>
                        <span class="w-auto flex justify-end items-center text-grey p-2">
                            <i class="fas fa-search text-xl"></i>
                        </span>
                    </button>
                    <input v-model="search" class="w-full" type="text" placeholder="ค้นหาควาย ชื่อควาย, หมายเลข Microship, NID">
                    <div class="ml-2">
                        <v-btn type="submit" fab depressed color="orange darken-1" dark>
                            <v-icon>fas fa-search</v-icon>
                        </v-btn>
                    </div>
                </div>

            </form>

            <!-- เพิ่ม -->
            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                <v-btn class="bg2" dark rounded depressed large @click="$router.push(`buffalo/create`)">
                    <v-icon left dark>
                        fas fa-plus-square
                    </v-icon>
                    เพิ่มควาย
                </v-btn>
            </div>

        </div>
    </div>
    <!-- card -->
    <div class="block w-full overflow-x-auto rounded-lg">
        <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3 " v-for="buffalo,index in buffalos.results" :key="index" v-if="!buffalo.deleted">
                <!-- <v-card class="animate__animated animate__zoomIn"> -->
                <div class="border bg-white rounded-lg shadow  animate__animated animate__zoomIn ">
                    <div class="flex-auto p-4 ">
                        <div class="flex flex-wrap ">
                            <div class="relative w-auto flex-initial">
                                <div>
                                    <!-- <v-img class="h-16 w-16 bg-white rounded-full border" :src="(checkImg($api+buffalo.front_image))?$api+buffalo.front_image:'./assets/buffalo/buffalo.png'"></v-img> -->
                                    <v-img class="h-16 w-16 bg-white rounded-full border"  :src="$api +'/'+ buffalo.front_image"></v-img>
                                </div>
                            </div>
                            <div class="relative w-full pl-4 max-w-full flex-grow flex-1 text-left">
                                <span class="font-semibold text-xl text-gray-800">
                                    {{buffalo.name}}
                                </span>
                                <h5 class="text-gray-500 uppercase font-bold text-xs">
                                    <!-- MICROCHIP : {{ buffalo.microship }} -->
                                    <div v-if="buffalo.microship">MICROSHIP : {{ buffalo.microship }}</div>
                                    <div v-else>MICROSHIP : -</div>
                                </h5>
                                <div class="mt-1">
                                    <v-btn color="amber" dark rounded depressed @click="$router.push(`buffalo/profile?id=${buffalo.id}`)">ดูรายละเอียด</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </v-card> -->
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
    checkImg:any = Core.imageExists
    private user: any = {}
    private farm: FarmForm | any = {}
    private buffalos: any = []
    private response: boolean = false

    private page: number = 1
    private allPages: number = 1
    private search: string = ''

    private async created() {
        await this.run();
    }

    private async run() {
        await App.onLoad()
        let user = await User.getUser();
        this.user = await Core.getHttp(`/api/account/${user.pk}/`)
        this.farm = await Core.getHttp(`/user/buffalo/farm/${user.pk}/`)
        this.buffalos = await Core.getHttp(`/api/buffalo/buffalo/?farm__id=${this.farm.id}&search=${this.search}`)
        this.allPages = Math.ceil((this.buffalos ?.count / 9))
        this.response = true
        await App.offLoad()
    }
    private async handlePageChange(value: any) {
        this.buffalos = await Core.getHttp(`/api/buffalo/buffalo/?farm__id=${this.farm.id}&search=${this.search}&page=${value}`)
    }

}
</script>

<style scoped>
.f-white {
    color: white !important;
}
.bg2{
    background-color: #ff9d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
