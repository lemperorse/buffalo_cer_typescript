<template>
<div class="">
    <v-app>
        <CityDialog />
        <div class="">
            <v-app-bar app class="bg-nav" dark>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>พันธุ์ควายไทย</v-toolbar-title>
                <v-spacer></v-spacer>
                <UserDropdown class="" />
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" fixed temporary>
                <v-list  dense>
                        <v-list-item-group active-class="deep-purple--text text--accent-4">
                            <v-list-item @click="$router.push('/user/home')">
                                <v-list-item-title class="row wrap p-2">
                                    <img src="@/assets/SmartFarm/1188011-smart-farm/png/039-warehouse.png" height="36px" width="36px" class="rounded-lg" alt="">
                                    <span class="mt-3 ml-2">หน้าแรก</span>
                                    </v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="$router.push('/user/profile')">
                                <v-list-item-title class="row wrap p-2">
                                    <img src="@/assets/SmartFarm/1188011-smart-farm/png/043-farmer.png" height="36px" width="36px" class="rounded-lg" alt="">
                                    <span class="mt-3 ml-2">ข้อมูลส่วนตัว</span>
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="$router.push('/user/search')">
                                <v-list-item-title class="row wrap p-2">
                                    <img src="@/assets/certificate/certificate.png" height="36px" width="36px" class="rounded-lg" alt="">
                                    <span class="mt-3 ml-2">ค้นหาใบพันธุ์ประวัติ</span>
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="$router.push('/user/buffalo')">
                            <v-list-item-title class="row wrap p-2">
                                    <img src="@/assets/buffalo/buffalo.png" height="36px" width="36px" class="rounded-lg" alt="">
                                    <span class="mt-3 ml-2">ข้อมูลควาย</span>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
            </v-navigation-drawer>
            <div class="w-full h-screen" style="z-index:1;">
                <v-container grid-list-xs>
                    <router-view />
                </v-container>
                <footer-admin class="bg1" />
            </div>
        </div>
    </v-app>
</div>
</template>

<script lang="ts">
import { User } from "@/store/user";
import { Auth } from "@/store/auth";
import { Component, Vue } from "vue-property-decorator";
import CityDialog from '@/components/Dialog/City.vue'
import UserMenu from "@/components/Sidebar/UserMenu.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue"
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

@Component({
    components: {
        UserMenu,
        FooterAdmin,
        CityDialog,
        UserDropdown
    },
    computed: {}
})

export default class Admin extends Vue {

    sidebarOpen: boolean = true;
    notificationOpen: boolean = false;
    drawer: boolean = false;

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
.bg-nav {
    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b00dd'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    -webkit-box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
    -moz-box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
    box-shadow: 0px 14px 152px 2px rgba(184, 184, 184, 1);
}

.bg1 {
    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b00dd'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
