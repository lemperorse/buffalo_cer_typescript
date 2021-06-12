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
                <form @submit.prevent="run" class="w-full row wrap">
                    <!-- <input :class="$xinput" v-model="search" type="text" placeholder="ค้นหา เช่น ชื่อควาย ชื่อเจ้าของ ชื่อฟาร์ม กลุ่มเกษตรกร จังหวัด อำเภอ ตำบล ของฟาร์ม" /> -->
                    <div class="flex w-full rounded-full border bg-white hover:shadow-lg">
                        <button>
                            <span class="w-auto flex justify-end items-center text-grey p-2">
                                <i class="fas fa-search text-xl"></i>
                            </span>
                        </button>
                        <input v-model="search" class="w-full" type="text" placeholder="ค้นหา จังหวัด อำเภอ ตำบล ของฟาร์ม">
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
                            <div class="relative w-auto pl-4 flex-initial pt-3">
                                <div class="">
                                    <img :src="(buffalo.back_image)?buffalo.back_image:'https://images.pexels.com/photos/4835959/pexels-photo-4835959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'" class="h-24 w-24 bg-white rounded-full border" alt="..." />
                                </div>
                            </div>
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1 text-right">
                                <span class="font-semibold text-xs text-gray-800">
                                    MC/NID : {{ buffalo.microchip }}/ {{ buffalo.nid }}
                                </span>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    เจ้าของ : {{ buffalo.owner }}
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    ฟาร์ม : {{ buffalo.froms }}
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    กลุ่ม : {{ buffalo.group }}
                                </div>
                                <div class="text-gray-500 uppercase font-bold text-xs">
                                    ที่อยู่ : {{ buffalo.address }}
                                </div>
                                <span>
                                    <v-btn @click="$router.push(`buffalo/public?id=${buffalo.id}`)" rounded depressed dark color="amber">
                                        ดูรายละเอียด
                                    </v-btn>
                                </span>
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

    private async created() {
        await this.run();
    }

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
