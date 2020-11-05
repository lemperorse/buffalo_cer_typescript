<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse ">
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
import CardSettingFarmer from "@/components/Page/Admin/FarmerProfile/CardSettingFarmer";
import CardProfileFarmer from "@/components/Page/Admin/FarmerProfile/CardProfileFarmer";
export default {
  name: "farmer-profile-page",
  components: {
    CardSettingFarmer,
    CardProfileFarmer
  },
};
</script>