<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="เกษตกรทั้งหมด" statTitle="321 คน"
                        statIconName="em em-male-farmer" statIconColor="bg-green-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="สมาชิกใหม่ในเดือนนี้" statTitle="123 คน"
                        statIconName="em em-magnet" statIconColor="bg-blue-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats statSubtitle="ควายทั้งหมด" statTitle="924"
                        statIconName="em em-water_buffalo" statIconColor="bg-red-500"/>
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
            <card-stat-with-btn statSubtitle="รายงานเชิงแผนที่"
                                statRoute="reportmap"
                        statIconName="em em-world_map" statIconColor="bg-indigo-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stat-with-btn statSubtitle="รายงานความเคลื่อนไหว"
                                statRoute="reportflow"
                        statIconName="em em-desktop_computer" statIconColor="bg-gray-500"/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4 xl:mt-4">
            <card-stat-with-btn statSubtitle="ส่งออกข้อมูลการเจริญเติบโต"
                                statRoute="reportexport"
                                statIconName="em em-herb" statIconColor="bg-green-500"/>
          </div>
        </div>

        <hr class="mt-6 ">
        <div class="flex flex-wrap mt-4">
          <div class="w-full xl:w-6/12 px-4">
            <ChartUser />
          </div>
          <div class="w-full xl:w-6/12 px-4">
            <ChartBuf />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import ChartUser from "@/components/Page/Admin/Home/ChartUser.vue";
import ChartBuf from "@/components/Page/Admin/Home/ChartBuf.vue";
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
import {Vue} from "vue-property-decorator";

export default {
  name: "dashboard-page",
  components: {
    ChartUser,
    ChartBuf,
    CardStats,
    CardStatWithBtn,
  },

};

</script>
