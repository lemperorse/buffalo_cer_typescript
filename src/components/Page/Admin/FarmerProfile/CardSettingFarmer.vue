<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-user text-base mr-1"></i>ข้อมูลเกษตกร
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-tractor text-base mr-1"></i> ข้อมูลฟาร์ม
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="far fa-image text-base mr-1"></i> รูปภาพ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-green-600 bg-white': openTab !== 4, 'text-white bg-green-600': openTab === 4}">
            <i class="em em-water_buffalo   mr-1" style="font-size:10px;"></i> ข้อมูลควาย
          </a>
        </li>

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(5)" v-bind:class="{'text-green-600 bg-white': openTab !== 5, 'text-white bg-green-600': openTab === 5}">
            <i class="fas fa-cog text-base mr-1"></i> ตั้งค่า
          </a>
        </li>

      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <Profile v-if="openTab === 1" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <Farm v-if="openTab === 2" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <ImageUser  v-if="openTab === 3" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <button @click="$router.push(`buffalo/?farmer=${$route.query.farmer}`)" :class="`bg-purple-600 ${$btn}`">ดูข้อมูลควาย</button>
            </div>

            <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
               <Manager v-if="openTab === 5" />
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

import Profile from '@/components/User/Profile.vue';
import Farm from '@/components/User/Farm.vue';
import ImageUser from '@/components/User/Image.vue';
import Manager from '@/components/User/Manager.vue';
import {
  Core
} from '@/store/core'
import {
  Auth
} from '@/store/auth'
import {
  User
} from '@/store/user'

import CityDialog from '@/components/Dialog/City.vue'


@Component({
  components: {

    CityDialog, Profile, Farm, ImageUser, Manager,
  },
  computed: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  }
})

export default class Table extends Vue {

  private openTab : number = 1


  private async created() {

  }
  toggleTabs(tabNumber:number){
    this.openTab = tabNumber
  }




}
</script>


<style>
.f-white {
  color: white !important;
}
</style>