<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-paw text-base mr-1"></i>ข้อมูลควาย
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-chart-line text-base mr-1"></i> การเจริญเติบโต
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="far fa-file-pdf text-base mr-1"></i> ใบพันธุ์ประวัติ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-green-600 bg-white': openTab !== 4, 'text-white bg-green-600': openTab === 4}">
            <i class="fas fa-cog text-base mr-1"></i> ตั้งค่า
          </a>
        </li>
      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <TabBuffaloData v-if="openTab === 1" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <TabBuffaloEvo v-if="openTab === 2" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <TabBuffaloCert v-if="openTab === 3" />
            </div>

            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ลบข้อมูลควาย
                  </h6>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <button @click="deleteBuffalo()" class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          <i class="fas fa-eraser text-lg"></i> ลบข้อมูลควาย
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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

  }
  toggleTabs(tabNumber:number){
    this.openTab = tabNumber
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