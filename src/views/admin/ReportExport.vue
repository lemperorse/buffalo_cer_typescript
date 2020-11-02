<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <ReportExport />
      </div>
    </div>

  </div>
</template>

<script>
import ReportExport from "@/components/Page/Admin/Report/ReportExport.vue";

export default {
  components: {
    ReportExport,
  },
};
</script>

