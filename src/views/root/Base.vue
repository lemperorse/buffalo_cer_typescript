<template>
  <div>
    <navbar />
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
            class="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            :style="`background-image: url('@/assets/img/register_bg_2.png');`"
        ></div>
        <router-view />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";


import {
  Component,
  Vue,
} from 'vue-property-decorator';
import {User} from "@/store/user";
import {Auth} from "@/store/auth";

@Component({
  components: {  Navbar,
    FooterSmall,},
    computed: {}
})

export default class Test extends Vue {


  async created(){
    await  Auth.checkToken();
    await User.loadUser();
    await this.$router.replace(User.routeUser)
    console.log(User.routeUser)
  }


}
</script>
