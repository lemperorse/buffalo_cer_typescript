<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
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

