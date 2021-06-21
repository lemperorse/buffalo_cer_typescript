<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <ReportBuffalo />
      </div>
      <div class="w-full lg:w-12/12 px-4">
        <ChartBuffalo />
      </div>
    </div>

  </div>
</template>

<script>
import ReportBuffalo from "@/components/Component/User/Report/ReportBuffalo/ReportBuffalo.vue";
import ChartBuffalo from "@/components/Component/User/Report/ReportBuffalo/ChartBuffalo";
export default {
  name: "report-buffalo-page",
  components: {
    ChartBuffalo,
    ReportBuffalo
  },
};
</script>

