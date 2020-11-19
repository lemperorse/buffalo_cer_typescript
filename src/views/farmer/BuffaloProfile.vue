<template>
  <div class="p-2 md:p-6 pt-20 md:pt-20">
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