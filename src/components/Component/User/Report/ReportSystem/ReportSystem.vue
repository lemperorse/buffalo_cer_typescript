<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 px-2 rounded">
    <div class="rounded-t mb-0 py-3 border-0 animate__animated animate__zoomIn">
        <div class="relative w-full md:w-auto px-1 max-w-full flex-grow flex-1 ">
            <h3 class="font-semibold text-base text-gray-800">
                <button style="color:#855737;" class="text-2xl" @click="$router.push('/user/profile')">รายงานการเจริญเติบโต</button>
                <span class="text-2xl"> ( ควายทั้งหมด {{buffalos.count}} ตัว) </span>
            </h3>
        </div><br>

    </div>

    <div class="py-2 ">

        <table style="width:100%">
            <tr>
                <th>ชื่อควาย</th>
                <th>น้ำหนัก(กก.)</th>
                <th>ความกว้างรอบอก(ซม.)</th>
                <th> ความยาวรอบลำตัว(ซม.)</th>
                <th> ความสูง(ซม.)</th>

            </tr>
            <tr v-for="buffalo,index in buffalos.results" :key="index">
                <td>{{buffalo.buffalo.name}}</td>
                <td>
                    <h2 v-if="buffalo.weight0">แรกเกิด : {{buffalo.weight0}}</h2>
                    <h2 v-if="buffalo.weight240">อายุ 240 วัน : {{buffalo.weight240}}</h2>
                    <h2 v-if="buffalo.weight400">อายุ 400 วัน : {{buffalo.weight400}}</h2>
                    <h2 v-if="buffalo.weight600">อายุ 600 วัน : {{buffalo.weight600}}</h2>
                </td>
                <td>
                    <h2 v-if="buffalo.width0">แรกเกิด : {{buffalo.width0}}</h2>
                    <h2 v-if="buffalo.width240">อายุ 240 วัน : {{buffalo.width240}}</h2>
                    <h2 v-if="buffalo.width400">อายุ 400 วัน : {{buffalo.width400}}</h2>
                    <h2 v-if="buffalo.width600">อายุ 600 วัน : {{buffalo.width600}}</h2>
                </td>
                <td>
                    <h2 v-if="buffalo.length0">แรกเกิด : {{buffalo.length0}}</h2>
                    <h2 v-if="buffalo.length240">อายุ 240 วัน : {{buffalo.length240}}</h2>
                    <h2 v-if="buffalo.length400">อายุ 400 วัน : {{buffalo.length400}}</h2>
                    <h2 v-if="buffalo.length600">อายุ 600 วัน : {{buffalo.length600}}</h2>
                </td>
                <td>
                    <h2 v-if="buffalo.height0">แรกเกิด : {{buffalo.height0}}</h2>
                    <h2 v-if="buffalo.height240">อายุ 240 วัน : {{buffalo.height240}}</h2>
                    <h2 v-if="buffalo.height400">อายุ 400 วัน : {{buffalo.height400}}</h2>
                    <h2 v-if="buffalo.height600">อายุ 600 วัน : {{buffalo.height600}}</h2>
                </td>
            </tr>

        </table>
     
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
    statusData: any = null
    sselect: any = ''
    @Watch('statusData')
    async changeStatus(value: any) {
        this.gselect = `&status__value=${value}`
        await this.run()
    }

    genderData: any = null
    gselect: any = ''
    @Watch('genderData')
    async changeGender(value: any) {
        this.gselect = `&gender__value=${value}`
        console.log(this.gselect);
        await this.run()
    }

    private async run() {
        await App.onLoad()
        let user = await User.getUser();
        this.user = await Core.getHttp(`/api/account/${user.pk}/`)
        this.farm = await Core.getHttp(`/user/buffalo/farm/${user.pk}/`)
        this.buffalos = await Core.getHttp(`/api/buffalo/evolution/?buffalo__farm=${this.farm.id}`)
        this.allPages = Math.ceil((this.buffalos ?.count / 9))
        this.response = true
        await App.offLoad()
    }
    private async handlePageChange(value: any) {
        this.buffalos = await Core.getHttp(`/api/buffalo/evolution/?buffalo__farm=${this.farm.id}&page=${value}`)
    }

}
</script>

<style>
.f-white {
    color: white !important;
}

table {
  width:100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
</style>
