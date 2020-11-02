<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingBuffalo />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfileBuffalo />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingBuffalo from "@/components/Page/User/BuffaloProfile/CardSettingBuffalo";
import CardProfileBuffalo from "@/components/Page/User/BuffaloProfile/CardProfileBuffalo";
export default {
  name: "buffalo-profile-page",
  components: {
    CardSettingBuffalo,
    CardProfileBuffalo
  },
};
</script>