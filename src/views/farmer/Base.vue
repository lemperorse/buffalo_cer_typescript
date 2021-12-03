<template>
<div>

    <v-app id="inspire" >
        <IndexNavbar v-if="logined" class="z-50" />
        <CityDialog />
        <v-main class="grey lighten-3 bg-home">
            <div v-if="mobile">
                <div v-if="logined">
                    <router-view />
                </div>
            </div>

            <v-container v-else>
                <v-row justify="center">
                    <v-col cols="12" sm="12">
                        <div v-if="logined">
                            <router-view />
                        </div>
                    </v-col> 
                </v-row>
                <footer-admin class="" />
            </v-container>

        </v-main>
    </v-app>

</div>
</template>

<script lang="ts">
import {
    User
} from "@/store/user";
import {
    Auth
} from "@/store/auth";
import {
    Component,
    Vue
} from "vue-property-decorator";
import CityDialog from '@/components/Dialog/City.vue'
import FooterAdmin from "@/components/Footers/FooterAdmin.vue"
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import { City } from '@/store/city'
import { Core } from '@/store/core'
import { App } from '@/store/app'
@Component({
    components: {
        FooterAdmin,
        CityDialog,
        UserDropdown,
        IndexNavbar
    },
    computed: {}
})

export default class Admin extends Vue {

    sidebarOpen: boolean = true;
    notificationOpen: boolean = false;
    drawer: boolean = false;
    logined: boolean = false;

    view: any = {
        atTopOfPage: true
    }

    get mobile() {
        return this.$device.mobile
    }

    async created() {
        console.log(this.$router.options.routes)
        window.addEventListener('scroll', this.handleScroll);
        await Auth.checkToken();
        await App.onLoad();
        await City.getFullCity();
        await Core.getFullChoice();
        await App.offLoad();
        this.logined = await User.loadUser();
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

<style scoped>
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

.bg2 {
    background-color: #ff9d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    display: block;
    padding: 8px;
    color: white !important;
    ;
}

.topnav {
    /* overflow: hidden; */
    /* display: block; */
    display: none;
}

.bg-home {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3cpath d='M1008.3 504.46999999999997 L962.5799999999999 452.14L1033.0952646591738 430.649735340826z' stroke='%23d3b714' stroke-width='1.32' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='229.68' height='229.68' clip-path='url(%26quot%3b%23SvgjsClipPath1033%26quot%3b)' x='-79.52' y='-0.05' fill='url(%23SvgjsPattern1034)' transform='rotate(210.15%2c 35.32%2c 114.79)'%3e%3c/rect%3e%3cpath d='M1437 292.74 L1458.54 233.68L1472.9000713225682 288.34007132256824z' stroke='%23d3b714' stroke-width='1.3'%3e%3c/path%3e%3crect width='212.16' height='212.16' clip-path='url(%26quot%3b%23SvgjsClipPath1035%26quot%3b)' x='548.78' y='17.06' fill='url(%23SvgjsPattern1036)' transform='rotate(297.13%2c 654.86%2c 123.14)'%3e%3c/rect%3e%3ccircle r='83.30499678312297' cx='949.69' cy='202.41' stroke='%23037b0b' stroke-width='1.83' stroke-dasharray='3%2c 3'%3e%3c/circle%3e%3cpath d='M559.73 527.67a5.6 5.6 0 1 0-0.31-11.19 5.6 5.6 0 1 0 0.31 11.19zM559.29 511.68a5.6 5.6 0 1 0-0.32-11.2 5.6 5.6 0 1 0 0.32 11.2zM558.84 495.69a5.6 5.6 0 1 0-0.32-11.2 5.6 5.6 0 1 0 0.32 11.2zM558.39 479.69a5.6 5.6 0 1 0-0.32-11.19 5.6 5.6 0 1 0 0.32 11.19zM576.63 559.21a5.6 5.6 0 1 0-0.32-11.19 5.6 5.6 0 1 0 0.32 11.19zM576.18 543.22a5.6 5.6 0 1 0-0.32-11.2 5.6 5.6 0 1 0 0.32 11.2zM575.73 527.22a5.6 5.6 0 1 0-0.32-11.19 5.6 5.6 0 1 0 0.32 11.19zM575.28 511.23a5.6 5.6 0 1 0-0.32-11.2 5.6 5.6 0 1 0 0.32 11.2z' fill='%23037b0b'%3e%3c/path%3e%3crect width='297.6' height='297.6' clip-path='url(%26quot%3b%23SvgjsClipPath1037%26quot%3b)' x='1001.06' y='98.14' fill='url(%23SvgjsPattern1038)' transform='rotate(152.29%2c 1149.86%2c 246.94)'%3e%3c/rect%3e%3cpath d='M1185.34 12.66L1181.93 25.01 1169.14 24.39 1165.74 36.74 1152.94 36.13 1149.54 48.47 1136.75 47.86M1180.64 6.18L1177.24 18.53 1164.45 17.92 1161.04 30.26 1148.25 29.65 1144.85 41.99 1132.05 41.38' stroke='%23e73635' stroke-width='1.49' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='135.68' height='135.68' clip-path='url(%26quot%3b%23SvgjsClipPath1039%26quot%3b)' x='-13.28' y='302.03' fill='url(%23SvgjsPattern1040)' transform='rotate(185.07%2c 54.56%2c 369.87)'%3e%3c/rect%3e%3cpath d='M399.40000000000003 619.5699999999999 L409.13 550.85L431.74089624201895 612.685896242019z' fill='%23d3b714'%3e%3c/path%3e%3ccircle r='51.26689981895261' cx='905.72' cy='19.26' fill='%23e73635'%3e%3c/circle%3e%3crect width='300' height='300' clip-path='url(%26quot%3b%23SvgjsClipPath1041%26quot%3b)' x='1232.81' y='365.61' fill='url(%23SvgjsPattern1042)' transform='rotate(47.52%2c 1382.81%2c 515.61)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='229.68' height='6.38' patternUnits='userSpaceOnUse' id='SvgjsPattern1034'%3e%3crect width='229.68' height='3.19' x='0' y='0' fill='%23d3b714'%3e%3c/rect%3e%3crect width='229.68' height='3.19' x='0' y='3.19' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1033'%3e%3ccircle r='57.42' cx='35.32' cy='114.79'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.26' height='13.26' patternUnits='userSpaceOnUse' id='SvgjsPattern1036'%3e%3cpath d='M0 13.26L6.63 0L13.26 13.26' stroke='%23d3b714' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1035'%3e%3ccircle r='53.04' cx='654.86' cy='123.14'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='297.6' height='9.92' patternUnits='userSpaceOnUse' id='SvgjsPattern1038'%3e%3crect width='297.6' height='4.96' x='0' y='0' fill='%23d3b714'%3e%3c/rect%3e%3crect width='297.6' height='4.96' x='0' y='4.96' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1037'%3e%3ccircle r='74.4' cx='1149.86' cy='246.94'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='8.48' height='8.48' patternUnits='userSpaceOnUse' id='SvgjsPattern1040'%3e%3cpath d='M4.24 1L4.24 7.48M1 4.24L7.48 4.24' stroke='%23d3b714' fill='none' stroke-width='2.86'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1039'%3e%3ccircle r='33.92' cx='54.56' cy='369.87'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='7.5' height='7.5' patternUnits='userSpaceOnUse' id='SvgjsPattern1042'%3e%3cpath d='M0 7.5L3.75 0L7.5 7.5' stroke='%23e73635' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1041'%3e%3ccircle r='75' cx='1382.81' cy='515.61'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}
</style>
