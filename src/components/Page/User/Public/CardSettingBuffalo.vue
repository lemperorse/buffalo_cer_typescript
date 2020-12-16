<template>
  <div class="flex flex-wrap">

    <div class="w-full ">
      <ul class="flex mb-0  list-none flex-col pt-3 pb-4 md:flex-row animate__animated animate__bounceInUp animate__delay-1s">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="w-full hvr-grow text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-paw text-base mr-1"></i>ข้อมูลควาย
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class=" w-full hvr-grow text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-chart-line text-base mr-1"></i> การเจริญเติบโต
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="w-full hvr-grow text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="far fa-file-pdf text-base mr-1"></i> ใบพันธุ์ประวัติ
          </a>
        </li>

      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-full rounded animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1} ">
              <TabBuffaloData class="animate__animated animate__zoomIn" :privateMode="true" v-if="openTab === 1" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <TabBuffaloEvo class="animate__animated animate__zoomIn" :privateMode="true"  v-if="openTab === 2" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <TabBuffaloCert class="animate__animated animate__zoomIn" :privateMode="true"  v-if="openTab === 3" />
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


import {
  Core
} from '@/store/core'
import {
  Auth
} from '@/store/auth'
import {
  User
} from '@/store/user'
import {
  App
} from '@/store/app'

import TabBuffaloData from '@/components/Buffalo/TabBuffaloData.vue'
import TabBuffaloEvo from '@/components/Buffalo/TabBuffaloEvo.vue'
import TabBuffaloCert from '@/components/Buffalo/TabBuffaloCert.vue'
@Component({
  components: {
    TabBuffaloData,TabBuffaloEvo, TabBuffaloCert
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
  private date: string|null =  null
  private menu: boolean = false



  private async created() {
    await this.run()
  }
  toggleTabs(tabNumber:number){
    this.openTab = tabNumber
  }

  private async run() {
  }

  async deleteBuffalo(){
    let checkDelete = await App.confirm('คุณแน่ใจใช่ไหม','ที่จะลบควายตัวนี้')
    if(checkDelete){
      let buffalo = await Core.deleteHttp(`/user/buffalo/buffalo/${this.$route.query.id}/`)

      await App.success("ลบควายสำเร็จ")
      await this.$router.go(-1)

    }

  }




}
</script>

<style>
.f-white {
  color: white !important;
}
</style>