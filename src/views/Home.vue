<template>
<div class="home">
    <pre>{{geo}}</pre>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';


import {
    mapState
} from 'vuex';

import {
    userModule
} from "@/store/test";
import {Test, User} from '@/models/user'
import {Geography} from '@/models/core'
import {Core} from '@/store/core'
@Component({
    components: {

    },
    computed: {
     

    }
})
export default class Home extends Vue {

    private geo : Geography | null = null


  async created(){
    this.geo = await Core.getGeo();
  }
  async testChange(){

  }

}
</script>
