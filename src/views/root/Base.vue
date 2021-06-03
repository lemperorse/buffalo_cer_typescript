<template>
<div>
    <CityDialog />
    <router-view />
</div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";
import CityDialog from '@/components/Dialog/City.vue';

import {
    Component,
    Vue,
} from 'vue-property-decorator';
import { User } from "@/store/user";
import { Auth } from "@/store/auth";

@Component({
    components: {
        Navbar,
        CityDialog,
        FooterSmall,
    },
    computed: {}
})

export default class Test extends Vue {

    async created() {
        await Auth.checkToken();
        await User.loadUser();
        await this.$router.replace(User.routeUser)
        console.log(User.routeUser)
    }

}
</script> 