<template>
<!-- <div class="bg-gray-100"> -->
<div class="">
    <div class="w-full">
        <h1 class="text-2xl font-semibold uppercase md:text-3xl p-6">ค้นหาใบพันธุ์ประวัติ</h1>
        <div class="flex w-full p-6">
            <div class="flex ">
                <form @submit.prevent="run" class="mt-4 w-full row wrap">
                    <!-- <input :class="$xinput" v-model="search" type="text" placeholder="ค้นหา เช่น ชื่อควาย ชื่อเจ้าของ ชื่อฟาร์ม กลุ่มเกษตรกร จังหวัด อำเภอ ตำบล ของฟาร์ม" /> -->
                    <div class="flex w-full rounded-full border bg-white hover:shadow-lg">
                        <button>
                            <span class="w-auto flex justify-end items-center text-grey p-2">
                                <i class="fas fa-search text-xl"></i>
                            </span>
                        </button>
                        <input v-model="search" class="w-full" type="text" placeholder="ค้นหา เช่น ชื่อควาย ชื่อเจ้าของ ชื่อฟาร์ม กลุ่มเกษตรกร จังหวัด อำเภอ ตำบล ของฟาร์ม">
                        <div class="ml-2">
                            <v-btn type="submit" fab depressed color="orange darken-1" dark>
                                <v-icon>fas fa-search</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="flex w-full p-6">
            <div class="flex  -mt-8"> 
                <form @submit.prevent="run2"  class="w-full row wrap"> 
                    <div class="flex w-full rounded-full border bg-white hover:shadow-lg">
                        <button>
                            <span class="w-auto flex justify-end items-center text-grey p-2">
                                <i class="fas fa-search text-xl"></i>
                            </span>
                        </button>
                        <input v-model="search2" class="w-full" type="text" placeholder="ค้นหา จังหวัด อำเภอ ตำบล ของฟาร์ม">
                        <div class="ml-2">
                            <v-btn type="submit" fab depressed color="orange darken-1" dark>
                                <v-icon>fas fa-search</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- card --><br>
    <div class="block w-full overflow-x-auto rounded-lg -mt-10">
        <div class="flex flex-wrap mb-4">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3 " v-for="buffalo,index in buffalos.results" :key="index">
                <div class="border bg-white rounded-lg shadow  animate__animated animate__zoomIn ">
                    <div class="flex-auto p-4 ">
                        <div class="flex flex-wrap">
                            <div class="relative w-auto  flex-initial pt-3">
                                <div class="">
                                    <!-- <v-img class="h-16 w-16 bg-white rounded-full border" :src="(checkImg($api+buffalo.front_image))?$api+buffalo.front_image:'./assets/buffalo/buffalo.png'"></v-img> -->
                                    <v-img :src="$api +'/'+ buffalo.front_image" class="h-24 w-24 bg-white rounded-full border" alt="..." />
                                    <!-- <img  :src="($api+buffalo.front_image)?$api+buffalo.front_image:'https://images.pexels.com/photos/4835959/pexels-photo-4835959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" class="h-24 w-24 bg-white rounded-full border" alt="..." /> -->
                                </div>
                            </div> 
                            <div class="relative w-full pl-4 max-w-full flex-grow flex-1 text-left">
                                <span class="font-semibold text-xs text-gray-800">
                                    {{ buffalo.name }}
                                </span>
                                <div class="font-semibold text-xs text-gray-800">
                                    <!-- MC : {{ buffalo.microship }}/ {{ buffalo.nid }} -->
                                    <div v-if="buffalo.microship">MC : {{ buffalo.microship }}</div>
                                    <div v-else>MC : -</div>
                                </div>
                                <div class="font-semibold text-xs text-gray-800">
                                    <div v-if="buffalo.nid">NID : {{ buffalo.nid }}</div>
                                    <div v-else>NID : -</div>
                                    <!-- NID : {{ buffalo.microchip }}/ {{ buffalo.nid }} -->
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    <div v-if="buffalo.owner">เจ้าของ : {{ buffalo.owner }}</div>
                                    <div v-else>เจ้าของ : -</div>
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    <div v-if="buffalo.froms">ฟาร์ม : {{ buffalo.froms }}</div>
                                    <div v-else>ฟาร์ม : -</div>
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    <div v-if="buffalo.group">กลุ่ม : {{ buffalo.group }}</div>
                                    <div v-else>กลุ่ม : -</div>
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    <div v-if="buffalo.address">ที่อยู่ : {{ buffalo.address }}</div>
                                    <div v-else>ที่อยู่ : -</div>
                                </div>
                                <div class="mt-1">
                                    <v-btn @click="$router.push(`buffalo/public?id=${buffalo.id}`)" rounded depressed dark color="amber">
                                        ดูรายละเอียด
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-2 ">
        <br><br>
        <v-pagination color="#4361EE" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" v-model="page" :length="allPages" :total-visible="9" @input="handlePageChange" circle></v-pagination>
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
    private search2: string = ''

    private async created() {
        await this.run();
        // await this.loadProvinces();
        // await this.loadProducts()
    }

    // async loadProducts() {
    //     let search = this.$route.query.search
    //     search = (search) ? `search=${search}` : ''
    //     this.buffalos = await Core.getHttp(`/api/buffalo/all/?search=${this.search}${this.province}`)
    // }

    private async run() {
        await App.onLoad()
        let user = await User.getUser();
        this.user = await Core.getHttp(`/api/account/${user.pk}/`)
        this.farm = await Core.getHttp(`/user/buffalo/farm/${user.pk}/`)
        this.buffalos = await Core.getHttp(`/api/buffalo/all/?search=${this.search}`)
        this.allPages = Math.ceil((this.buffalos ?.count / 12))
        this.response = true
        await App.offLoad();
    }

    // provinces: any = null
    // province: any = '';
    // async loadProvinces() {
    //     this.provinces = await Core.getHttp(`/api/province/`)
    // }

    private async run2() {
        await App.onLoad()
        let user = await User.getUser();
        this.user = await Core.getHttp(`/api/account/${user.pk}/`)
        this.farm = await Core.getHttp(`/user/buffalo/farm/${user.pk}/`)
        this.buffalos = await Core.getHttp(`/api/buffalo/all/?search=${this.search2}`)
        this.allPages = Math.ceil((this.buffalos ?.count / 12))
        this.response = true
        await App.offLoad();
    }

    private async handlePageChange(value: any) {
        await App.onLoad()
        this.buffalos = await Core.getHttp(`/api/buffalo/all/?page=${value}&search=${this.search}`)
        await App.offLoad();
    }
 
}
</script>

<style>
.ssss {
    background-color: #45200c;
    /* background-image: url("https://images.pexels.com/photos/693857/pexels-photo-693857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); */
    /* background-image: url("https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); */
    background-image: url("https://images.pexels.com/photos/5980/food-sunset-love-field.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    /* background-attachment: fixed; */
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
