<template>
<div>
    <v-toolbar class="bg2">
        <v-app-bar-nav-icon dark @click="navbarOpen=!navbarOpen" class="d-flex d-md-none"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-white">พันธุ์ควายไทย</v-toolbar-title>
          <v-btn class="d-none d-md-flex ml-3" text dark v-for="(menu,i) in menus" :key="i" @click="$router.push(menu.path)"  >
                    <img class="h-8 w-auto" :src="menu.image" alt=""> <span class="ml-2">
                        {{menu.name}}
                    </span>
                </v-btn> 
        <v-spacer></v-spacer>
        <UserDropdown class="" />
    </v-toolbar>

    <v-bottom-sheet v-model="navbarOpen" inset>
        <v-sheet height="200px">
            <div class="flex flex-col"> 
                <v-btn v-for="(menu,i) in menus" :key="i" text @click="$router.push(menu.path)" >
                    <img class="h-8 w-auto" :src="menu.image" alt=""> 
                    <span class="ml-2">
                        {{menu.name}}
                    </span>
                </v-btn>
            </div>
        </v-sheet>
    </v-bottom-sheet>

</div>
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
    data() {
        return {
            navbarOpen: false,
            menus: [
                {
                name: 'หน้าแรก',
                image: '/assets/farm/2826134-agriculture/png/005-farm.png',
                path: '/user/home',
                },
                {
                name: 'ข้อมูลส่วนตัว',
                image: '/assets/farm/2826134-agriculture/png/006-farmer.png',
                path: '/user/profile',
                },
                {
                name: 'ใบพันธุ์ประวัติ',
                image: '/assets/farm/2826134-agriculture/png/076-award.png',
                path: '/user/search',
                },
                {
                name: 'ข้อมูลควาย',
                image: '/assets/buffalo/buffalo.png',
                path: '/user/buffalo',
                }
            ]

        };
    },
    methods: {
        setNavbarOpen: function () {
            this.navbarOpen = !this.navbarOpen;
        },
    },
    components: {
        UserDropdown,
    },
};
</script>

<style scoped>
.bg1 {
    background-color: #ff9d00;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
.bg2{
    background-image: linear-gradient(-45deg, #8E0E00 0%, #1F1C18 100%);
}
.bg3{
    background-image: linear-gradient(-45deg, #fdeff9 0%,#ec38bc,#7303c0, #03001e 100%);
}
</style>
