<template>
<!-- Navbar -->
<nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
    <div class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
        <!-- Brand --> 
        <button class="bg-white shadow-xl rounded-full " @click="$router.go(-1)">
            <v-icon class="icon">mdi-chevron-left</v-icon>
        </button>  
        <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
            <user-dropdown />
        </ul>
    </div>
</nav>
<!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdownAdmin.vue";

export default {
    components: {
        UserDropdown,
    },
};
</script>
