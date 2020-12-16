<template>
<div class="">
    <div class="rounded-t bg-white mb-0 px-2 md:px-6 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ข้อมูลเกษตกร</h6>
            <button v-if="unEdit" @click="unEdit = !unEdit" class="f-white rounded p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
            </button>
            <button v-if="!unEdit" @click="unEdit = !unEdit" class="f-white rounded p-2 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
            </button>
        </div>
    </div>
    <div class="flex-auto px-0 lg:px-10 py-10 pt-0">
      <v-alert color="#F59E0B" type="info" outlined  v-if="!unEdit" >
        โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
      </v-alert>
        <form @submit.prevent="update()">
            <h6 class="text-gray-500 px-4 text-sm mt-3 mb-6 font-bold uppercase">
                บัญชี
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อผู้ใช้งาน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-user text-lg text-gray-500"></i>
                            </span>
                             <input disabled required v-model="formUser.username" type="text" :class="`${$xinput} border-success`"  value=" " />
                        </div>
                       
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            อีเมล์
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="far fa-envelope text-lg text-gray-500"></i>
                            </span> 
                             <input :disabled="unEdit" v-model="formUser.email" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " placeholder="(ไม่บังคับ)"  value=" " />
                        </div> 
                    </div>
                </div>

            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 px-4 font-bold uppercase">
                ข้อมูลส่วนตัว
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-3/12 px-4">
                    <div class="relative w-full mb-3"> 
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            คำนำหน้า
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <select :disabled="unEdit" required v-model="formProfile.prefix" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600`" >
                              <option v-for="val,i in prefix" :key="i" :value="val.id" >{{ val.value }}</option>
                            </select>
                        </div> 
                        
                    </div>
                </div>
                <div class="w-full lg:w-5/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input :disabled="unEdit" required v-model="formUser.first_name" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600`"  value=" " />
                        </div> 
                    </div>
                </div>

                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            นามสกุล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input :disabled="unEdit" required v-model="formUser.last_name" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full  lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสบัตรประจำตัวประชาชน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="far fa-address-card text-lg text-gray-500"></i>
                            </span> 
                            <input  onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"  :disabled="unEdit" v-model="formProfile.personal_id" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " />
                        </div> 
                        
                    </div>
                </div>
                <div class="w-full lg:w-6/12  px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เบอร์โทร
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-mobile-alt text-lg text-gray-500"></i>
                            </span>
                            <input onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" :disabled="unEdit" v-model="formProfile.tel" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " />
                        </div> 
                    </div>
                </div>
              <div class="w-full pb-6  px-4">
                <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
              </div>

                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เพศ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-venus-mars text-lg text-gray-500"></i>
                            </span>
                            <select :disabled="unEdit" required v-model="formProfile.gender" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " >
                              <option v-for="val,i in gender" :key="i" :value="val.id">{{ val.value }}</option>
                            </select>
                        </div> 
                    </div>
                </div>

                <div class="w-full lg:w-5/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            วันเกิด
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-calendar-day text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" required v-model="formProfile.birthday" type="date" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" " />
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-3/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            อายุ
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-birthday-cake text-lg text-gray-500"></i>
                            </span>
                            <input disabled v-model="formProfile.age" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" "  />
                        </div>
                    </div>
                </div>

              <div class="w-full pb-6  px-4">
                <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
              </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            บ้านเลขที่
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" required v-model="formProfile.address" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" " />
                        </div> 
                        
                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            หมู่บ้าน
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" required v-model="formProfile.mooban" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" " />
                        </div> 
                    </div>
                </div>

                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            จังหวัด อำเภอ ตำบล
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-globe-asia text-lg text-gray-500"></i>
                            </span>
                            <input :value="CityFrom" @click="openCityDialog " @focus="openCityDialog" type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " :disabled="unEdit" />
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสไปรษณีย์
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-paper-plane text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="formProfile.zipcode" required type="text" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " value=" " />
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-center mt-6">
                <button v-if="!unEdit" :class="`f-white ${$btnsuccess}`" type="submit">
                    <i class="fas fa-save text-lg"></i>  บันทึกข้อมูล
                </button>
            </div>

        </form>

    </div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
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
    City
} from "@/store/city";
import moment from "moment";
import {App} from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class Profile extends Vue {
    private formUser: any = {}
    private formProfile: any = {}
    private prefix: any[] = []
    private gender: any[] = []
    private group: any[] = []
    private currentFarmer: any = null
    private unEdit: boolean = true

    async created() {
        await this.collingPermission();
        await this.run()
    }

    async collingPermission() {
        let user = await User.getUser();
        let userAll = await Core.getHttp(`/api/account/${user.pk}/`)
        if (userAll.is_staff) {
            this.currentFarmer = this.$route.query.farmer
        } else {
            let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
            this.currentFarmer = profile.id
        }
    }

    async run() {
        await App.onLoad()
        this.prefix = await Core.getChoice('คำนำหน้า')
        this.gender = await Core.getChoice('เพศ')
        this.group = await Core.getChoice('กลุ่มเกษตรกร')
        this.formProfile = await Core.getHttp(`/api/profile/${this.currentFarmer}/`)
        this.formUser = await Core.getHttp(`/api/account/${this.formProfile.user}/`)
        await this.setCity()
        await App.offLoad()
    }

    @Watch('formProfile.birthday')
    async onChangeProvince(val: string) {
        this.formProfile.age = moment().diff(val, 'years', false);

    }

    async setCity() {
        City.currentGeo = await Core.getHttp(`/user/account/geography/${this.formProfile.geo}/`)
        City.currentProvince = await Core.getHttp(`/user/account/province/${this.formProfile.province}/`)
        City.currentAmphur = await Core.getHttp(`/user/account/amphur/${this.formProfile.amphur}/`)
        City.currentDistrict = await Core.getHttp(`/user/account/district/${this.formProfile.district}/`)
        await City.setShowName()
    }

    async update() {
        this.formProfile.geo = City.currentGeo ?.id
        this.formProfile.province = City.currentProvince ?.id
        this.formProfile.amphur = City.currentAmphur ?.id
        this.formProfile.district = City.currentDistrict ?.id
        let profile = await Core.putHttp(`/api/profile/${this.currentFarmer}/`, this.formProfile)
        let user = await Core.putHttp(`/api/account/${this.formProfile.user}/`, this.formUser)

        if (user.id && profile.id) {
            this.unEdit = true
            await App.success("แก้ไขข้อมูลสำเร็จ")
        } else {
            await App.error("เกิดข้อผิดพลาดในหารแก้ไขข้อมูล")
        }

        await this.run();

    }

    async openCityDialog() {
        City.dialogCityState = true
    }

    get CityFrom() {
        return City.showName
    }
  get editMode(){
    return (this.unEdit )?'border-success':'border-edit'
  }

}
</script>

<style>
.f-white {
    color: white !important;
} 
</style>
