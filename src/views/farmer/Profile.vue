<template>
  <div class="p-2 md:p-6 pt-20 md:pt-20">
    <div class="flex flex-wrap-reverse">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingFarmer />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfileFarmer />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingFarmer from "@/components/Page/User/Profile/CardSettingFarmer";
import CardProfileFarmer from "@/components/Page/User/Profile/CardProfileFarmer";
export default {
  name: "profile-page",
  components: {
    CardSettingFarmer,
    CardProfileFarmer
  },
};
</script>

