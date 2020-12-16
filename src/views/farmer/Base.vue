<template>
  <div>
    <CityDialog/>
    <div class="flex   ">
      <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
           class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden  "></div>

      <div style="position:fixed; top:0!important;"
           :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in '"
           class=" z-30 inset-y-0 left-0 w-64  bg-white shadow-xxl   duration-300 transform  overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div class="flex items-center justify-center mt-8">
          <div class="flex items-center p-6">
            <img class="w-auto" src="https://sv1.picz.in.th/images/2020/11/17/bVc06z.png" alt="">
          </div>
        </div>
      <UserMenu />

      </div>


      <v-toolbar flat    style="position:fixed; background-color:transparent;"
                 class="w-full   lg:pl-64 z-20"  :class="(!view.atTopOfPage)?'bg-nav':''">
        <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg>
        </button>
        <v-spacer></v-spacer>
         <UserDropdown />
      </v-toolbar>
      <div class="lg:pl-64   w-full h-screen">
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
import UserMenu from "@/components/Sidebar/UserMenu.vue";
import FarmerSidebar from "@/components/Sidebar/FarmerSidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue"
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

@Component({
  components: {
    // FarmerNavbar,
    UserMenu,
    HeaderStats,
    FooterAdmin, CityDialog, UserDropdown
  },
  computed: {}
})

export default class Admin extends Vue {

  sidebarOpen: boolean = true;
  notificationOpen: boolean = false;
  view:any =  {
    atTopOfPage: true
  }
  async created() {
    console.log(this.$router.options.routes)
    window.addEventListener('scroll', this.handleScroll);
    await Auth.checkToken();
    await User.loadUser();
    if (User.routeUser == '/' || User.routeUser == '/admin/home') {
      await this.$router.replace(User.routeUser)
    }
  }

  handleScroll(){
    // when the user scrolls, check the pageYOffset
    if(window.pageYOffset>0){
      // user is scrolled
      if(this.view.atTopOfPage) this.view.atTopOfPage = false
    }else{
      // user is at top of page
      if(!this.view.atTopOfPage) this.view.atTopOfPage = true
    }
  }
}
</script>
<style>
.shadow-xxl{
  -webkit-box-shadow: -5px 0px 152px 2px rgba(184,184,184,1);
  -moz-box-shadow: -5px 0px 152px 2px rgba(184,184,184,1);
  box-shadow: -5px 0px 152px 2px rgba(184,184,184,1);
}

.bg-nav{
  background-color: white!important;
  -webkit-box-shadow: 0px 14px 152px 2px rgba(184,184,184,1);
  -moz-box-shadow: 0px 14px 152px 2px rgba(184,184,184,1);
  box-shadow: 0px 14px 152px 2px rgba(184,184,184,1);
}
</style>
