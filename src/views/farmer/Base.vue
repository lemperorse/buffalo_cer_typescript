<template>
  <div>
    <FarmerSidebar/>
    <div class="relative md:ml-64 bg-gray-200">
      <FarmerNavbar/>
      <!--      <header-stats />-->
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view/>
        <footer-admin/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import CityDialog from '@/components/Dialog/City.vue'

import {User} from "@/store/user";
import {Auth} from "@/store/auth";
import {Component, Vue} from "vue-property-decorator";
import FarmerNavbar from "@/components/Navbars/FarmerNavbar.vue";
import FarmerSidebar from "@/components/Sidebar/FarmerSidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue"
@Component({
  components: {
    FarmerNavbar,
    FarmerSidebar,
    HeaderStats,
    FooterAdmin,
  },
  computed: {}
})

export default class Admin extends Vue {


  async created() {
    await Auth.checkToken();
    await User.loadUser();
    if(User.routeUser == '/' || User.routeUser == '/admin/'){
      await this.$router.replace(User.routeUser )
    }
  }
}
</script>
