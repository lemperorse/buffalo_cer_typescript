<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse">
      <div class="w-full md:w-12/12 lg:w-8/12 px-4">
        <CardSettingBuffalo />
      </div>
      <div class="w-full md:w-12/12 lg:w-4/12 px-4">
        <CardProfileBuffalo />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingBuffalo from "@/components/Page/Admin/BuffaloProfile/CardSettingBuffalo";
import CardProfileBuffalo from "@/components/Page/Admin/BuffaloProfile/CardProfileBuffalo";
export default {
  name: "buffalo-profile-page",
  components: {
    CardSettingBuffalo,
    CardProfileBuffalo
  },
};
</script>