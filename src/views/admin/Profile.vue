<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap-reverse">
      <div class="w-full lg:w-8/12 px-4">
        <AdminSetting />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <AdminProfile />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSetting from "@/components/Component/Admin/Admin/AdminSetting.vue";
import AdminProfile from "@/components/Component/Admin/Admin/AdminProfile.vue";
import {App} from "@/store/app";
import {Core} from "@/store/core";

export default {
  name: "profile-admin-page",
  components: {
    AdminSetting,
    AdminProfile,
  },

};
</script>

