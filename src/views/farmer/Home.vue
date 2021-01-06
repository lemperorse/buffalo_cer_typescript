<template>
<div class="p-6 pt-20  ">
    <div class="px-1 md:px-10 mx-auto w-full">
        <div>
            <h2 class="text-2xl px-2"> <b>สวัสดี ,</b> {{user.first_name}}</h2> <br>
              <hr class="md:mt-4 mx-2">
            <h2 class="text-xl md:mt-4 px-2">จำนวนควายทั้งหมด</h2> <br>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2">
                    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
                </div>
                <div class="w-full lg:w-2/3 xl:w-2/3  px-2">
                    <div class="flex flex-row flex-wrap">
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ควายทั้งหมด" :statTitle="`${dashboard.buffalo_lifed} ตัว`" statIconName="em em-water_buffalo" statIconColor="bg-green-500" class="" />
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ควายที่มีชีวิต" :statTitle="`${dashboard.buffalo_lifed} ตัว`" statIconName="fas fa-heart" statIconColor="bg-blue-500" />
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ควายที่ไม่มีชีวิต" :statTitle="`${dashboard.buffalo_died} ตัว`" statIconName="fas fa-heart-broken" statIconColor="bg-red-500" />
                        </div>
                    </div>
                </div>

            </div>
            <hr class="md:mt-4 mx-2">
            <h2 class="text-xl md:mt-4 px-2">จำนวนควายในปัจจุบัน</h2> <br>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2">
                    <apexchart type="donut" :options="buffaloOptions" :series="buffaloSeries"></apexchart>
                </div>
                <div class="w-full lg:w-2/3 xl:w-2/3  px-2">
                    <div class="flex flex-row flex-wrap">
                        <div class="w-full  px-2">
                            <form @submit.prevent="getDataDetailGraph()" class="flex"> 
                                <v-select :items="STATUS" item-text="value" item-value="id"  v-model="STATUS_VAL"  label="สถานะ"></v-select>
                                <v-text-field v-model="AGE_START" label="เริ่มต้นอายุ"  ></v-text-field>
                                <v-text-field v-model="AGE_END" label="ถึงอายุ"  ></v-text-field>
                                <v-btn type="submit" small fab dark color="#006fdd"><v-icon>mdi-card-search</v-icon></v-btn>
                            </form>
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ทั้งหมด" :statTitle="`${CURRENT_BUFFALO.all} ตัว`" statIconName="mdi mdi-gender-male-female" statIconColor="bg-red-800"   />
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ตัวผู้" :statTitle="`${CURRENT_BUFFALO.male} ตัว`" statIconName="mdi mdi-gender-male" statIconColor="bg-blue-500" />
                        </div>
                        <div class="w-full lg:w-4/12 xl:w-4/12 px-2">
                            <card-stats statSubtitle="ตัวเมีย" :statTitle="`${CURRENT_BUFFALO.female} ตัว`" statIconName="mdi mdi-gender-female" statIconColor="bg-green-500" />
                        </div>
                    </div>
                </div>
            </div>
 

            <div class="flex flex-wrap mt-4">
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2">
                    <card-stat-with-btn statSubtitle="รายงานจำนวนควาย" statRoute="reportbuffalo" statIconName="em em-card_file_box" statIconColor="bg-purple-500" />
                </div>
                <div class="w-full lg:w-2/3 xl:w-2/3 px-2">
                    <card-stat-with-btn statSubtitle="รายงานการเจริญเติบโต" statRoute="reportsystem" statIconName="fas fa-chart-line" statIconColor="bg-indigo-500" />
                </div>
            </div>

            <hr class="mt-6 mx-2">
            <div class="flex flex-wrap mt-4">
                <div class="w-full xl:w-6/12 px-2">
                    <ChartBuffaloAll />
                </div>
                <div class="w-full xl:w-6/12 px-2">
                    <ChartBuffaloLive />
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
import ChartBuffaloAll from "@/components/Page/User/Home/ChartBuffaloAll.vue";
import ChartBuffaloLive from "@/components/Page/User/Home/ChartBuffaloLive.vue";

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

import { Geography } from '@/models/core'
import { Core } from '@/store/core'
import _ from 'lodash'
@Component({
    components: {
        CardStats,
        CardStatWithBtn,
        ChartBuffaloAll,
        ChartBuffaloLive

    },
    computed: {

    }
})
export default class Home extends Vue {
    user: any = {}
    dashboard: any = null
    farm: any = null
    series: any = [44, 55, 13, 43, 22]
    chartOptions: any = { labels: ['มีชีวิต', 'ไม่มีชีวิต', 'โอน', 'ย้าย', 'ขาย'], }
    buffaloOptions: any = { labels: ['ตัวผู้', 'ตัวเมีย'] }
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
        this.farm = await Core.getHttp(`/user/buffalo/farm/${this.user.pk}/`)
        let buffalos = await Core.getHttp(`/api/buffalo/buffalo/raw/?farm__id=${this.farm.id}`)
        buffalos = _.filter(buffalos, { status: this.STATUS_VAL });
        buffalos = _.filter(buffalos, (buffalo) => {
            return buffalo.age >= this.AGE_START && buffalo.age <= this.AGE_END;
        });
        this.buffaloSeries = [(_.filter(buffalos, { gender: 14 })).length, (_.filter(buffalos, { gender: 15 })).length]
        this.CURRENT_BUFFALO = {
            "male": (_.filter(buffalos, { gender: 14 })).length,
            "female": (_.filter(buffalos, { gender: 15 })).length,
            "all": buffalos.length
        }

    }

}
</script>

<style scoped> 
</style>
