<template>
  <v-app>
    <div class="container mx-auto  h-full">
      <div class="flex content-center items-center justify-center  bg-white ">
          <h2>{{test_data}}</h2>
        <v-btn @click="Hi">ddd</v-btn>
        </div>
      </div>



  </v-app>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import {userModule} from '@/store/test'
import CityDialog from '@/components/Dialog/City.vue'
@Component({
  components: {CityDialog},
  computed: {}
})

export default class Home extends Vue {
    name:string = 'ss'

    async Hi(){
      alert('sssss')
    }

    async created(){
      await userModule.getData()
    }

    get test_data(){
      return userModule.Hi
    }

 }
</script>
<style>

</style>
