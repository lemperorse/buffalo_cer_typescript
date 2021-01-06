<template>
<div>
 <svg style="z-index:1;" class="absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#6c463e" fill-opacity="1" d="M0,96L15,106.7C30,117,60,139,90,149.3C120,160,150,160,180,154.7C210,149,240,139,270,128C300,117,330,107,360,96C390,85,420,75,450,96C480,117,510,171,540,176C570,181,600,139,630,138.7C660,139,690,181,720,176C750,171,780,117,810,122.7C840,128,870,192,900,202.7C930,213,960,171,990,160C1020,149,1050,171,1080,160C1110,149,1140,107,1170,112C1200,117,1230,171,1260,208C1290,245,1320,267,1350,256C1380,245,1410,203,1425,181.3L1440,160L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path>
</svg>
     <CityDialog />
    <div class="flex   " >
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden  "></div>

        <div style="position:fixed; top:0!important;" :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in '" class=" z-30 inset-y-0 left-0 w-64  bg-white shadow duration-300 transform  overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center p-6">
                    <img class="w-auto" src="https://sv1.picz.in.th/images/2020/11/17/bVc06z.png" alt="">
                </div>
            </div>
            <UserMenu />

        </div>

        <v-toolbar flat style="position:fixed; background-color:transparent;" class="w-full   lg:pl-64 z-20" :class="(!view.atTopOfPage)?'bg-nav':''">
            <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <v-spacer></v-spacer>
            <UserDropdown />
        </v-toolbar>
        <div class="lg:pl-64   w-full h-screen" style="z-index:1;" >
            <router-view />
            <footer-admin />
        </div>

    </div>

</div>
</template>

<script lang="ts">
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import CityDialog from '@/components/Dialog/City.vue'

import { User } from "@/store/user";
import { Auth } from "@/store/auth";
import { Component, Vue } from "vue-property-decorator";
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
        FooterAdmin,
        CityDialog,
        UserDropdown
    },
    computed: {}
})

export default class Admin extends Vue {

    sidebarOpen: boolean = true;
    notificationOpen: boolean = false;
    view: any = {
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

    handleScroll() {
        // when the user scrolls, check the pageYOffset
        if (window.pageYOffset > 0) {
            // user is scrolled
            if (this.view.atTopOfPage) this.view.atTopOfPage = false
        } else {
            // user is at top of page
            if (!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}
</script>

<style>
.shadow-xxl {
    -webkit-box-shadow: -5px 0px 152px 2px rgba(184, 184, 184, 1);
    -moz-box-shadow: -5px 0px 152px 2px rgba(184, 184, 184, 1);
    box-shadow: -5px 0px 152px 2px rgba(184, 184, 184, 1);
}

.bg-nav {
    background-color: white !important;
    -webkit-box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
    -moz-box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
    box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
}
</style>
