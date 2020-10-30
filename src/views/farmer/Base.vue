<template>
  <div>
    <FarmerSidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <FarmerNavbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import FarmerNavbar from "@/components/Navbars/FarmerNavbar.vue";
import FarmerSidebar from "@/components/Sidebar/FarmerSidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    FarmerNavbar,
    FarmerSidebar,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
