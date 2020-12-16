<template>
<div class="p-6 pt-20 bg-gray-100">
    <div class="px-1 md:px-10 mx-auto w-full">
        <div>
            <h2 class="text-2xl px-2"> <b>สวัสดี ,</b> {{user.first_name}}</h2> <br>
            <!-- Card stats -->
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-4/12 px-2">
                    <card-stats statSubtitle="ควายทั้งหมด" statTitle="321 ตัว" statIconName="em em-water_buffalo" statIconColor="bg-green-500" class=""/>
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-2">
                    <card-stats statSubtitle="ควายที่มีชีวิต" statTitle="250 ตัว" statIconName="fas fa-heart" statIconColor="bg-blue-500" />
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12 px-2">
                    <card-stats statSubtitle="ควายที่ไม่มีชีวิต" statTitle="71 ตัว" statIconName="fas fa-heart-broken" statIconColor="bg-red-500" />
                </div>
            </div>
            <hr class="md:mt-4 mx-2">
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

    async created() {
        this.user = await User.getUser();

    }

}
</script>

<style scoped> 
</style>
