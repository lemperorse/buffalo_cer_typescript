<template>
<div class="p-6 pt-20  ">
    <div class="px-1 md:px-10 mx-auto w-full">
        <div>
            <v-row wrap>
                <v-col>
                    <v-card class="pa-2 wrap elevation-0 hvr-grow">
                        <div>สวัสดี {{user.first_name}}</div>
                        <div>Email : {{user.email}}</div>
                    </v-card>
                </v-col>
                <v-col md="auto">
                    <v-card class="pa-2 elevation-0 hvr-grow">
                        <center>
                            <v-avatar @click="$router.push('/user/buffalo')" rounded size="36"><img src="@/assets/buffalo/buffalo.png" alt=""></v-avatar>
                            <span @click="$router.push('/user/buffalo')">ควายของฉัน</span>
                        </center>
                    </v-card>
                </v-col>
                <v-col lg="2">
                    <v-card class="pa-2 wrap elevation-0 hvr-grow">
                        <center>
                            <v-avatar @click="$router.push('/user/profile')" rounded size="36"><img src="@/assets/password/password.png" alt=""></v-avatar>
                            <span @click="$router.push('/user/profile')">เปลี่ยนรหัสผ่าน</span>
                        </center>
                    </v-card>
                </v-col>
            </v-row>
            <div class="flex flex-wrap mb-10">
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2 mb-2">
                    <v-card max-height="380" rounded class="">
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
                            <v-btn color="success" block text>ความของฉัน</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2 mb-2">
                    <v-card max-height="380" rounded class="">
                        <v-card-title primary-title>
                            จำนวนควายในปัจจุบัน
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <apexchart type="donut" :options="buffaloOptions" :series="buffaloSeries"></apexchart>
                            <br><br>
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
                        </v-card-text>
                    </v-card>
                </div>
                <div class="w-full lg:w-1/3 xl:w-1/3 px-2 mb-2">
                    <v-card max-height="380" class="">
                        <v-card-title primary-title>
                            ค้นหาใบพันธ์ประวัติ
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <center>
                                <img class="hvr-grow" @click="$router.push('/user/search')" src="@/assets/certificate/certificate.png" height="222px" width="222px" alt="">
                            </center>
                        </v-card-text>
                        
                        <v-card-actions class="mt-3">
                            <v-btn color="success" block text @click="$router.push('/user/search')">ค้นหาใบพันธ์ประวัติ</v-btn>
                        </v-card-actions>
                        
                    </v-card>
                </div>
            </div> 

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

import { Geography } from '@/models/core'
import { Core } from '@/store/core'
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
