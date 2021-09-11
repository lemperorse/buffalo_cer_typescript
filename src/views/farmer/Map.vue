<template>
<div class="p-2" v-if="response">
       <div class="w-full lg:w-8/12 px-6 md:px-10">
        <h2 class="text-2xl"> <b>แผนที่</b> </h2> <span>แผนที่แสดงที่ตั้ง ฟาร์ม ที่เกษตรกรคนอื่นๆ บันทึกไว้</span><br><br>
    </div>
    <v-card class="rounded-lg elevation-3">
        <Map  :locations="locations" />
        
    </v-card>
</div>
</template>

<script lang="ts">
 import BuffMenu from "@/components/Report/Menu.vue";

 import {
     Component,
     Vue,
 } from 'vue-property-decorator';
 

 import {
     User
 } from '@/store/user'

 
 import {
     Core
 } from '@/store/core'
 import _ from 'lodash'
 import Map from '@/components/Maps/MapView2.vue'
 @Component({
     components: {
         Map
     },
     computed: {

     }
 })
 export default class MapData extends Vue {

     user: any = User.user
     profile: any = User.profile

     width: any = this.$vuetify.breakpoint.width
     rawFarm:any = []
     locations:any = []
     response:boolean = false;
     async created() {
         this.rawFarm = await Core.getHttp(`/user/buffalo/farm/`)
         let map = _.map(this.rawFarm ,(r)=>{
             let rawMap = (r.location).split(',')
             return  {'Latitude':rawMap[0] ,'Longitude':rawMap[1] }
         })
         this.locations = map
        this.response = true;
     }

   
 }
</script>

 
