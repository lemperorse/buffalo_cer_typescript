<template>
<div class="p-2">

    <div class="flex flex-col md:flex-row flex-wrap mt-6">
        <div class="w-full md:w-1/4  p-2     ">
            <div class=" bg-green-100  p-4 rounded-3xl    flex justify-around  items-center  ">
                <i class="text-4xl object-cover  em em-water_buffalo" aria-role="presentation" aria-label="WATER BUFFALO"></i>
                <div class="flex flex-col justify-center pl-2">
                    <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ควายในฟาร์ม</p>
                    <p class="text-black  text-justify font-semibold">{{dashboard.buffalo_all}} ตัว</p>
                </div>
            </div>

        </div><br>
        <div class="w-full md:w-1/4  p-2    ">
            <div class=" bg-gray-200  p-4 rounded-3xl    flex justify-around  items-center  ">
                <i class="text-4xl object-cover em em-water_buffalo" aria-role="presentation" aria-label="HEAVY BLACK HEART"></i>
                <div class="flex flex-col justify-center pl-2">
                    <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ควายที่ไม่ได้อยู่ในฟาร์ม</p>
                    <p class="text-black  text-justify font-semibold">{{dashboard.buffalo_disable}} ตัว</p>
                </div>
            </div>
        </div>

        <div class="w-full md:w-1/4  p-2   ">
            <div class=" bg-gray-100  p-4 rounded-3xl    flex justify-around  items-center  ">
                <i class="text-4xl object-cover em em-male_sign" aria-role="presentation" aria-label=""></i>
                <div class="flex flex-col justify-center pl-2">
                    <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ตัวผู้</p>
                    <p class="text-black  text-justify font-semibold">{{data.male}} ตัว</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/4  p-2 ">
            <div class=" bg-gray-100  p-4 rounded-3xl    flex justify-around  items-center  ">
                <i class="text-4xl object-cover em em-female_sign" aria-role="presentation" aria-label=""></i>
                <div class="flex flex-col justify-center pl-2">
                    <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ตัวเมีย</p>
                    <p class="text-black  text-justify font-semibold">{{data.female}} ตัว</p>
                </div>
            </div>

        </div>
    </div>

    <div :class="`flex ${width > 1366 ? `flex-row`:`flex-col`} mt-6`">
        <div :class="`${width > 1366 ? `w-1/2`:`w-full`} p-6`">
            <v-card class="rounded-lg h-450" outlined>
                <v-card-title primary-title>
                    จำนวนควายทั้งหมด
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
                </v-card-text>
                <br>
                <br>
                <v-card-actions>
                    <v-btn @click="$router.push('/user/buffalo')" color="deep-purple accent-3" block text>รายการควายของฉัน</v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <div :class="`${width > 1366 ? `w-1/2`:`w-full`} p-6`">
            <v-card rounded class="rounded-lg h-420" outlined>
                <v-card-title primary-title>
                    จำนวนควายในปัจจุบัน
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <apexchart type="pie" :options="buffaloOptions" :series="buffaloSeries"></apexchart>

                </v-card-text>

                <v-card-actions class="pt-3">
                    <div class="w-full px-2">
                        <form @submit.prevent="getDataDetailGraph()" class="flex">
                            <v-select :items="STATUS" item-text="value" item-value="id" v-model="STATUS_VAL" label="สถานะ"></v-select>
                            <v-text-field v-model="AGE_START" label="เริ่มต้นอายุ"></v-text-field>
                            <v-text-field v-model="AGE_END" label="ถึงอายุ"></v-text-field>
                            <v-btn type="submit" small fab dark color="#006fdd">
                                <v-icon>mdi-card-search</v-icon>
                            </v-btn>
                        </form>
                    </div>
                </v-card-actions>
            </v-card>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import ChartBuffaloAll from "@/components/Component/User/Chart/ChartBuffaloAll.vue";
import ChartBuffaloLive from "@/components/Component/User/Chart/ChartBuffaloLive.vue";
import {
    Component,
    Vue,
} from 'vue-property-decorator';

import {
    mapState
} from 'vuex';

import {
    User
} from '@/store/user'

import {
    Geography
} from '@/models/core'
import {
    Core
} from '@/store/core'
import _ from 'lodash'
@Component({
    components: {
        ChartBuffaloAll,
        ChartBuffaloLive,
    },
    computed: {

    }
})
export default class Home extends Vue {

    user: any = {}
    farm: any = User.farm;
    data: any = {}
    dashboard: any = null
    series: any = [44, 55, 13, 43, 22]
    chartOptions: any = {
        labels: ['มีชีวิต', 'ไม่มีชีวิต', 'โอน', 'ย้าย', 'ขาย'],
    }
    buffaloOptions: any = {
        labels: ['ตัวผู้', 'ตัวเมีย']
    }
    buffaloSeries: any = [0, 0]
    GENDER: any = ['ผู้', 'เมีย'];
    STATUS: any = null;
    STATUS_VAL: any = 19
    AGE_START: number = 0
    AGE_END: number = 20
    CURRENT_BUFFALO: any = null

    async created() {
        this.user = await User.getUser();
        await this.getChoice()
        await this.getDataGraph()
        await this.getDataDetailGraph();
        this.data = await Core.getHttp(`/user/buffalo/count/user/${this.farm.id}/`)

    }

    async getChoice() {
        this.STATUS = await Core.getChoice(`สถานะควาย`)
    }

    async getDataGraph() {
        let api = await Core.getHttp(`/api/buffalo/dashboard/`)
        this.dashboard = api.dashboard;
        this.series = [this.dashboard.buffalo_lifed, this.dashboard.buffalo_died, this.dashboard.buffalo_transfer, this.dashboard.buffalo_move, this.dashboard.buffalo_sell]
    }

    async getDataDetailGraph() {
        let buffalos = await Core.getHttp(`/api/buffalo/buffalo/raw/?farm__id=${this.farm.id}`)
        buffalos = _.filter(buffalos, {
            status: this.STATUS_VAL
        });
        buffalos = _.filter(buffalos, (buffalo) => {
            return buffalo.age >= this.AGE_START && buffalo.age <= this.AGE_END;
        });
        this.buffaloSeries = [(_.filter(buffalos, {
            gender: 14
        })).length, (_.filter(buffalos, {
            gender: 15
        })).length]
        this.CURRENT_BUFFALO = {
            "male": (_.filter(buffalos, {
                gender: 14
            })).length,
            "female": (_.filter(buffalos, {
                gender: 15
            })).length,
            "all": buffalos.length
        }

    }

    get width() {
        return this.$vuetify.breakpoint.width
    }

}
</script>

<style scoped>
.box {
    display: flex;
    width: 100%;
    height: 8px;
    margin: 5px 0px 60px 0px;
}

.box-sm {
    height: 8px;
    margin: 0;
    flex-grow: 1;
    transition: all .8s ease-in-out;
    cursor: pointer;
}

.box-sm:hover {
    flex-grow: 12;
}
</style>
