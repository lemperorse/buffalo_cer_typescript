<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettingsAdmin />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfileAdmin />
      </div>
    </div>
  </div>
</template>

<script>
import CardSettingsAdmin from "@/components/Page/Admin/Profile/CardSettingsAdmin.vue";
import CardProfileAdmin from "@/components/Page/Admin/Profile/CardProfileAdmin.vue";

export default {
  name: "profile-admin-page",
  components: {
    CardSettingsAdmin,
    CardProfileAdmin,
  },
};
</script>

