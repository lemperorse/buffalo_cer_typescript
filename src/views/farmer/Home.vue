<template>
<div class="p-2">
    <div class="px-1 md:px-10 mx-auto w-full">
        <div>
            <v-row class="p-4 pb-6 ">
                <div>
                    <!-- <pre>{{user}}</pre> -->
                    <div class="pa-2 wrap elevation-0   ">

                        <div class="row wrap px-3">
                            <v-avatar size="86">
                                <v-img :src="$api+'/'+user.profile_image"></v-img>
                            </v-avatar>
                            <div class=" ml-2 align-self-center">
                                <div class="text-3xl font-bold">{{user.first_name}} {{user.last_name}}</div>
                                <div class="text-base">@{{user.username}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div> 
                    <!-- <v-btn color="grey lighten-1" rounded elevation="0">
                        <i class="em em-female-technologist text-xl mr-2" aria-role="presentation" aria-label=""></i> <b>ติดต่อผู้ดูแลระบบ</b>
                    </v-btn> --> 
                </div> 
            </v-row>

            <div :class="(width > 1025)?`grid grid-cols-1 lg:grid-cols-4 gap-4`:''">
                <div class="m-2 w-full">
                    <Menu name="ข้อมูลส่วนตัว" path="/user/profile?tab=1" image="./assets/home/user.PNG" head="แก้ไขข้อมูล" txt="ชื่อสกุล ที่อยู่ อีเมล์ รวมถึงข้อมมูลส่วนตัวต่างๆ ของคุณ" caption="จัดการข้อมูล" />
                </div>
                <div class="m-2 w-full">
                    <Menu name="ฟาร์มของฉัน" path="/user/profile?tab=2" image="./assets/home/ข้อมูลส่วนตัว.png" head="ข้อมูลฟาร์ม" txt="บันทึกข้อมูล เพื่อให้สำนักงาน ทราบว่าฟาร์มคุณอยู่ที่ใด" caption="จัดการข้อมูล" />
                </div>

                <div class="m-2 w-full">

                    <Menu name="ควายของฉัน" path="/user/buffalo" image="./assets/home/ข้อมูลควาย.png" head="ควายในฟาร์มของฉัน" txt="เพิ่ม ลบข้อมูลทั่วไป สถานะ ใบพันธุ์ประวัติ ควายของคุณ" caption="จัดการข้อมูล" />
                </div>

                <div class="m-2 w-full  ">
                    <BuffMenu />
                </div>

                <div class="m-2 w-full">
                    <Menu name="แผนที่" path="/user/map" image="./assets/home/map.PNG" head="ฟาร์มอื่นๆ" txt="แผนที่แสดงที่ตั้ง ฟาร์ม ที่เกษตรกรคนอื่นๆ บันทึกไว้" caption="ดูข้อมูล" />

                </div>

                <div class="m-2 w-full">
                    <Menu name="ค้นหาใบพันธ์ประวัติ" path="/user/search" image="./assets/home/ใบcer.png" head="ควายในฟาร์มอื่นๆ" txt="ค้นหาข้อมูลใบพันธุ์ประวัติควาย ในฟาร์มอื่นๆ" caption="ดูข้อมูลควาย" />

                </div>

                <div class="m-2 w-full">
                    <Menu name="ยืนยันตัวตน" path="/user/profile?tab=3" image="./assets/home/id.PNG" head="คุณเป็นใคร" txt="บันทึดรูปถ่ายบัตรประจำตัวประชาชน ที่ตั้งฟาร์ม ให้รู้ว่าคุณมีตัวตนจริง" caption="บันทึกข้อมูล" />
                </div>

                <div class="m-2 w-full">
                    <Menu name="ความปลอดภัย" path="/user/profile?tab=5" image="./assets/home/lock.PNG" head="เปลี่ยนรหัสผ่าน" txt="หากคุณต้องการเปลี่ยนแปลงรหัสผ่านใหม่ในการเข้าใช้งานระบบ" caption="แก้ไขข้อมูล" />
                </div>

            </div>

        </div>
    </div>

</div>
</template>

<script lang="ts">
 import BuffMenu from "@/components/Report/Menu.vue";

 import {
     Component,
     Vue,
 } from 'vue-property-decorator';

 import {
     mapState
 } from 'vuex';

 import {
     User
 } from '@/store/user'

 import {
     Geography
 } from '@/models/core'
 import {
     Core
 } from '@/store/core'
 import _ from 'lodash'
 @Component({
     components: {
         BuffMenu
     },
     computed: {

     }
 })
 export default class Home extends Vue {

     user: any = User.user
     profile: any = User.profile

     width: any = this.$vuetify.breakpoint.width

     async created() {

     }

     // get user(){
     //     return User.user
     // }

     //  get user(){
     //     return User.profile
     // }

 }
</script>

<style scoped>
.box {
    display: flex;
    width: 100%;
    height: 8px;
    margin: 5px 0px 60px 0px;
}

.box-sm {
    height: 8px;
    margin: 0;
    flex-grow: 1;
    transition: all .8s ease-in-out;
    cursor: pointer;
}

.box-sm:hover {
    flex-grow: 12;
}
</style>
