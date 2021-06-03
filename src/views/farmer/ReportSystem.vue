<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <ReportSystem />
      </div>
      <div class="w-full lg:w-12/12 px-4">
        <!-- <ChartSystem /> -->
      </div>
    </div>

  </div>
</template>

<script>
import ReportSystem from "@/components/Component/User/Report/ReportSystem/ReportSystem.vue";
import ChartSystem from "@/components/Component/User/Report/ReportSystem/ChartSystem";
export default {
  name: "report-system-page",
  components: {
    ChartSystem,
    ReportSystem
  },
};
</script>

