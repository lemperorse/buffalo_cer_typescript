<template>
<v-card class="rounded-lg  h-full  " flat elevation="3">
    <v-card-title primary-title>
        <h2 class="wrap-txt ">รายงาน</h2>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text> 
        <div class="bg-gray-100   bg-opacity-95   p-4   rounded-3xl   flex justify-around items-center  ">
            <i class="text-4xl object-cover em em-male_sign" aria-role="presentation" aria-label=""></i>
            <div class="flex flex-col justify-center pl-2">
                <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ตัวผู้</p>
                <p class="text-black  text-justify font-semibold">{{data.male}} ตัว</p>
            </div>
        </div><br>
        <div class="bg-gray-100  bg-opacity-95 p-4 rounded-3xl    flex justify-around  items-center  ">
            <i class="text-4xl object-cover em em-female_sign" aria-role="presentation" aria-label=""></i>
            <div class="flex flex-col justify-center pl-2">
                <p class="text-gray-900 dark:text-gray-300 font-semibold text-xl">ตัวเมีย</p>
                <p class="text-black  text-justify font-semibold">{{data.female}} ตัว</p>
            </div>
        </div>
    </v-card-text>

    <v-card-actions class="mt-3 pt-5">
        <v-btn color="deep-purple accent-3" block text @click="$router.push('/user/reportbuffalo')">ดูรายงานควายของคุณ</v-btn>
    </v-card-actions>
</v-card>
</template>

<script lang="ts"> 
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
 @Component({
     components: {
          
     },
     computed: {

     }
 })
 export default class BuffMenu extends Vue {
 
     farm:any = User.farm;
    data:any = {}
     async created(){
         this.data = await Core.getHttp(`/user/buffalo/count/user/${this.farm.id}/`)
     }


}
</script>

<style>

</style>
