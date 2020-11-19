<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">

          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-500 text-center mb-3 font-bold pt-4">
              <h2 class="text-xl">ติต่อผู้ดูแลระบบ</h2>
            </div>

          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { Core } from '@/store/core'
import { Auth } from '@/store/auth'
import { User } from '@/store/user'

import CityDialog from '@/components/Dialog/City.vue'
import { App } from "@/store/app";

@Component({
  components: { CityDialog },
  computed: {}
})

export default class Home extends Vue {
  private form: any = {
    "username": "root",
    "password": "Pautn1611"
  }


  private async created() {

  }

}
</script>

<style>

</style>
