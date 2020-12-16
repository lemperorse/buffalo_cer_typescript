<template>
<div class="bg-gray-100">
    <div class="w-full bg-cover bg-center ssss" style="height:20rem; ">
        <div class="flex items-center justify-center h-full w-full ">
            <div class="  flex flex-col justify-center items-center" style="width:100%;">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">ค้นหาใบพันธุ์ประวัติ</h1>
                <form @submit.prevent="run" class="mt-4 w-8/12 md:w-6/12">
                    <input :class="$xinput" v-model="search" type="text" placeholder="ค้นหา เช่น ชื่อควาย ชื่อเจ้าของ ชื่อฟาร์ม กลุ่มเกษตรกร จังหวัด อำเภอ ตำบล ของฟาร์ม" />
                </form>
            </div>
        </div>
    </div>

    <!-- card --><br>
    <div class="px-4 md:px-10 mx-auto w-full overflow-x-auto animate__animated animate__bounceInLeft ">
        <div class="flex flex-wrap justify-center ">
            <div class="w-full p-3 md:w-56 hvr-grow" v-for="buffalo,index in buffalos.results" :key="index">
                <div class=" w-full bg-white rounded-lg shadow-lg  border-2">
                    <v-img class="rounded-t-lg h-48 w-full" :src="(buffalo.front_image)?buffalo.front_image:'https://sv1.picz.in.th/images/2020/11/07/bb198v.jpg'" />
                    <div class="p-5">
                        <h1 class="text-2xl font-bold text-yellow-800 py-2">{{buffalo.name}}</h1>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            MC/NID : {{ buffalo.microchip }}/ {{ buffalo.nid }}
                        </h5>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            เจ้าของ : {{ buffalo.owner }}
                        </h5>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            ฟาร์ม : {{ buffalo.froms }}
                        </h5>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            กลุ่ม : {{ buffalo.group }}
                        </h5>
                        <hr>
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            ที่อยู่ : {{ buffalo.address }}
                        </h5><br>
                        <button :class="`${$btn} f-white rounded p-2 bg-blue-500 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`" @click="$router.push(`buffalo/public?id=${buffalo.id}`)">
                            <v-icon style="color:white;">mdi mdi-eye</v-icon>&nbsp;ดูรายละเอียด
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="py-2 ">
        <br><br>
        <v-pagination color="#4361EE" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" v-model="page" :length="allPages" :total-visible="9" @input="handlePageChange" circle></v-pagination>
        <!-- color="#9871221" -->
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
    background-image: url("https://images.pexels.com/photos/693857/pexels-photo-693857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%2345200c' cx='50' cy='0' r='50'/%3E%3Cg fill='%234d2510' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23552a14' cx='50' cy='100' r='50'/%3E%3Cg fill='%235e2e18' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%2366331c' cx='50' cy='200' r='50'/%3E%3Cg fill='%236f381f' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23783d23' cx='50' cy='300' r='50'/%3E%3Cg fill='%23804227' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%2389482b' cx='50' cy='400' r='50'/%3E%3Cg fill='%23934d30' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%239c5234' cx='50' cy='500' r='50'/%3E%3Cg fill='%23a55738' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23af5d3d' cx='50' cy='600' r='50'/%3E%3Cg fill='%23b96241' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c26846' cx='50' cy='700' r='50'/%3E%3Cg fill='%23cc6d4a' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d6734f' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e07854' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ea7e59' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f5835e' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ff8963' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E"); */
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

}

.shadow-full {
    -webkit-box-shadow: 0px 0px 152px 2px rgba(184, 184, 184, 1);
    -moz-box-shadow: 0px 0px 152px 2px rgba(184, 184, 184, 1);
    box-shadow: 0px 0px 152px 2px rgba(184, 184, 184, 1);
}
</style>
