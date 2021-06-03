<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <ReportFlow />
      </div>
    </div>

  </div>
</template>

<script>
import ReportFlow from "@/components/Component/Admin/Report/ReportFlow.vue";

export default {
  components: {
    ReportFlow,
  },
};
</script>

