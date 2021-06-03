<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24 ">
    <div class="flex flex-wrap-reverse ">
      <div class="w-full lg:w-8/12 px-4">
        <FarmerSetting />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <FarmerProfile />
      </div>
    </div>
  </div>
</template>

<script>
import FarmerSetting from "@/components/Component/Admin/Farmer/FarmerSetting";
import FarmerProfile from "@/components/Component/Admin/Farmer/FarmerProfile";
export default {
  name: "farmer-profile-page",
  components: {
    FarmerSetting,
    FarmerProfile
  },
};
</script>