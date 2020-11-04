<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 class="font-semibold text-base text-gray-800">
                    รายชื่อเกษตกร
                </h3>
            </div>

            <!-- ค้นหา -->    <form @submit.prevent="run" >
            <div class="relative flex flex-wrap ">
                <input type="text" v-model="search" placeholder="ค้นหา" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10" />
                <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <i class="fas fa-search"></i>
                </span>
            </div>  </form>

            <!-- เพิ่ม -->
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button @click="$router.push('/admin/addfarmer')" class="bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    เพิ่มเกษตกร
                </button>
            </div>

        </div>
    </div>
    <!-- table -->
    <div class="block w-full overflow-x-auto" >

        <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        ชื่อ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        เบอร์โทรศัพท์
                    </th>

                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        จังหวัด
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        กลุ่มเกษตกร
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]">
                        การจัดการ
                    </th>
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left" :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-green-800 text-green-300 border-green-700',
              ]"></th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="farmer,i in farmers.results" :key="i">
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                        <img :src="(farmer.profile_image)?farmer.profile_image:`https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg`" class="h-12 w-12 bg-white rounded-full border" alt="..." />
                        <span class="ml-3 font-bold" :class="[color === 'light' ? 'text-gray-700' : 'text-white']">
                            {{farmer.fullname}}
                        </span>
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {{farmer.tel}}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i class="fas fa-circle text-red-500 mr-2"></i> {{farmer.iprovince}}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex">
                          {{farmer.igroup}}
                        </div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <div class="flex items-center">
                            <button @click="$router.push(`/admin/farmerprofile?farmer=${farmer.id}`)" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                ดูข้อมูล
                            </button>
                            <button @click="deleteFarmer(farmer)" class="bg-red-500
                  active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 f-white " type="button">
                                ลบ
                            </button>

                        </div>
                    </td>
                </tr>


            </tbody>
        </table>
    </div>

    <!-- pagination -->
    <div class="py-2 mb-4">
      <v-app style="height:100px!important;">
        <v-pagination
            v-model="page"
            :length="allPages"
            :total-visible="7"
            @input="handlePageChange"
            circle
        ></v-pagination>
      </v-app>

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

import CityDialog from '@/components/Dialog/City.vue'

@Component({
    components: {
        CityDialog
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

    private farmers: any | null= null
    private response :boolean = false
    private page : number = 1
    private allPages : number = 1
    private search : string = ''

    private async created() {
      await this.run();
    }

    private async run(){
      this.farmers = await Core.getHttp(`/api/profile/?search=${this.search}`)
      this.allPages = Math.ceil((this.farmers?.count / 5))
      this.response = true
    }

  private async handlePageChange(value:any) {
    this.farmers = await Core.getHttp(`/api/profile/?search=${this.search}&page=${value}`)
  }

  private async deleteFarmer(farmer:any){
    let check = confirm('คุณแน่ใจใช่ไหมที่จะลบผู้ใช้นี้')
    if(check){
      await Core.deleteHttp(`/api/profile/${farmer.id}/`)
      await Core.deleteHttp(`/api/account/${farmer.user.id}/`)
      await this.run();
    }
  }


}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
