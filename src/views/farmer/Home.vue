<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="ควายทั้งหมด" statTitle="321 ตัว"
                        statIconName="em em-water_buffalo" statIconColor="bg-green-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="ควายที่มีชีวิต" statTitle="250 ตัว"
                        statIconName="fas fa-heart" statIconColor="bg-blue-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="ควายที่ไม่มีชีวิต" statTitle="71 ตัว"
                        statIconName="fas fa-heart-broken" statIconColor="bg-red-500"/>
          </div>
        </div>
        <hr class="mt-6 ">

        <div class="flex flex-wrap mt-4">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stat-with-btn statSubtitle="รายงานจำนวนควาย"
                                statRoute="reportbuffalo"
                                statIconName="em em-card_file_box" statIconColor="bg-purple-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stat-with-btn statSubtitle="รายงานสรุปการเจริญเติบโต"
                                statRoute="reportmap"
                                statIconName="fas fa-chart-line" statIconColor="bg-indigo-500"/>
          </div>
        </div>

        <hr class="mt-6 ">
        <div class="flex flex-wrap mt-4">
          <div class="w-full xl:w-6/12 px-4">
            <ChartBuffaloAll />
          </div>
          <div class="w-full xl:w-6/12 px-4">
            <ChartBuffaloLive />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script lang="ts">
import ChartBuffaloAll from "@/components/Page/User/Home/ChartBuffaloAll.vue";
import ChartBuffaloLive from "@/components/Page/User/Home/ChartBuffaloLive.vue";
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {
  mapState
} from 'vuex';

import {
  userModule
} from "@/store/test";
import {Test, User} from '@/models/user'
import {Geography} from '@/models/core'
import {Core} from '@/store/core'
@Component({
  components: {
    ChartBuffaloAll,
    ChartBuffaloLive,
    CardStats,
    CardStatWithBtn

  },
  computed: {


  }
})
export default class Home extends Vue {

}
</script>
