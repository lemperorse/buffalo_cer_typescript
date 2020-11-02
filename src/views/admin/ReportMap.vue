<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <ReportMap />
      </div>
    </div>

  </div>
</template>

<script>
import ReportMap from "@/components/Page/Admin/Report/ReportMap.vue";
import MapExample from "@/components/Maps/MapExample.vue";
import {Vue} from "vue-property-decorator";

export default {
  components: {
    ReportMap,
    MapExample
  },

};


</script>

