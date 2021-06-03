<template>
  <div class="p-2 md:p-6 pt-20 md:pt-20 bg-gray-100">
    <div class="relative w-full md:w-auto px-4 max-w-full flex-grow flex-1 ">
      <h3 class="font-semibold text-base text-gray-800">
        <button style="color:#855737;" class="text-xl md:text-2xl" @click="$router.go(-1)">ควายของฉัน</button>
        <span class="text-xl"> / รายละเอียดควาย </span>
      </h3>
    </div>
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
import CardSettingBuffalo from "@/components/Component/Core/Buffalo/CardSettingBuffalo";
import CardProfileBuffalo from "@/components/Component/Core/Buffalo/CardProfileBuffalo";
export default {
  name: "buffalo-profile-page",
  components: {
    CardSettingBuffalo,
    CardProfileBuffalo
  },
};
</script>