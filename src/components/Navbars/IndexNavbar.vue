<template>
<nav class=" fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg bg1 shadow ">
    <div class="container  mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <router-link to="/">
                <a class="text-white text-md font-bold leading-relaxed inline-block whitespace-no-wrap uppercase" href="#pablo">
                    พันธ์ุประวัติ
                </a>
            </router-link>
            <button class="cursor-pointer bg-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="setNavbarOpen">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <div class="lg:flex flex-grow items-center" :class="[navbarOpen ? 'block' : 'hidden']" id="example-navbar-warning">
            <ul class="flex flex-col lg:flex-row list-none mr-auto">
                <li class="flex items-center md:w-1/4">
                    <a class="flex items-center md:text-sm text-xl" @click="$router.push('/user/home')">
                        <img src="@/assets/SmartFarm/1188011-smart-farm/png/039-warehouse.png" height="24px" width="24px" class="rounded-lg" alt="">
                        <span class=" ml-2">หน้าแรก</span>
                    </a>
                </li>
                <li class="flex items-center md:w-1/4">
                    <a class="flex items-center md:text-sm text-xl" @click="$router.push('/user/profile')">
                        <img src="@/assets/SmartFarm/1188011-smart-farm/png/043-farmer.png" height="24px" width="24px" class="rounded-lg" alt="">
                        <span class=" ml-2">ข้อมูลส่วนตัว</span>
                    </a>
                </li>
                <li class="flex items-center md:w-1/4">
                    <a class="flex items-center md:text-sm text-xl" @click="$router.push('/user/search')">
                        <img src="@/assets/certificate/certificate.png" height="24px" width="24px" class="rounded-lg" alt="">
                        <span class=" ml-2">ใบพันธุ์ประวัติ</span>
                    </a>
                </li>
                <li class="flex items-center md:w-1/4">
                    <a class="flex items-center md:text-sm text-xl" @click="$router.push('/user/buffalo')">
                        <img src="@/assets/buffalo/buffalo.png" height="24px" width="24px" class="rounded-lg" alt="">
                        <span class=" ml-2">ข้อมูลควาย</span>
                    </a>
                </li>

            </ul>
            <v-spacer></v-spacer>
            <ul class="">  
                <li class="">
                    <UserDropdown class="" />
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
    data() {
        return {
            navbarOpen: false,
        };
    },
    methods: {
        setNavbarOpen: function () {
            this.navbarOpen = !this.navbarOpen;
        },
    },
    components: {
        IndexDropdown,
        UserDropdown,
    },
};
</script>
<style scoped>
.bg1{
    background-color: #ee5522;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23ca481d' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
}
a{
    color: white;
}
</style>
