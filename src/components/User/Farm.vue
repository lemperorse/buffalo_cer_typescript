<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ข้อมูลฟาร์ม</h6>

            <button v-if="unEdit" @click="unEdit = !unEdit" class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
            </button>
            <button v-if="!unEdit" @click="unEdit = !unEdit" class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
            </button>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @submit.prevent="update" v-if="response">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                เกี่ยวกับฟาร์ม
            </h6>
            <div class="flex flex-wrap">

                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อฟาร์ม
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="form.name" type="text" :class="$xinput" value="Lucky" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                        </div> 
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ที่อยู่ฟาร์ม
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ที่อยู่ฟาร์ม
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-home text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="form.address" type="text" :class="$xinput" value="123/123" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                        </div> 
                    </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            จังหวัด อำเภอ ตำบล
                        </label>
                        <div class="relative">

                            <div class="relative flex w-full flex-wrap items-stretch mb-3">
                              <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                  <i class="fas fa-globe-asia text-lg text-gray-500"></i>
                              </span>

                              <input :value="CityFrom" @click="openCityDialog " @focus="openCityDialog" type="text" :class="$xinput" :disabled="unEdit" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                              </div>
                            </div> 

                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            รหัสไปรษณีย์
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-paper-plane text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="form.zipcode" type="text" :class="$xinput" value="123/123" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                        </div>
                    </div>
                </div>

            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                พิกัด GPS
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full  px-4">
                    <div class="relative w-full mb-3">
                        <MapView :name="'locations'" :center="{'Latitude':form.latitude,'Longitude' :form.longitude }" :locations="[
                  {'Latitude':form.latitude,'Longitude' :form.longitude } ,]" :zoom="18" :disableDefaultUI="false" :scaleControl="false" :zoomControl="false"></MapView>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            พิกัดฟาร์ม GPS(ละติจูด)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-map-marker-alt text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="form.latitude" type="text" :class="$xinput" value="1234560" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            พิกัดฟาร์ม GPS(ลองติจูด)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-map-marker-alt text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" v-model="form.longitude" type="text" :class="$xinput" value="1234560" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-4">
                <button v-if="!unEdit" :class="`bg-green-600 f-white ${$btn}`" type="submit">
                    <i class="fas fa-save text-lg"></i> บันทึก
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
import MapView from '@/components/Maps/MapView.vue';

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { Map } from "@/store/map";

@Component({
    components: { MapView },
    computed: {}
})

export default class Farm extends Vue {
    public form: FarmForm | any = {}
    private response: boolean = false
    private unEdit: boolean = true
    private currentFarmer: any = null

    private async created() {
        await this.collingPermission()
        await this.run();
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

    private async run() {
        let profile = await Core.getHttp(`/api/profile/${this.currentFarmer}/`)
        this.form = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
        await this.setCity();
        this.response = true
    }

    async update() {
        this.response = false
        this.form.geo = City.currentGeo ?.id
        this.form.province = City.currentProvince ?.id
        this.form.amphur = City.currentAmphur ?.id
        this.form.district = City.currentDistrict ?.id
        let farm = await Core.putHttp(`/api/buffalo/farm/${this.form.id}/`, this.form)
        if (farm.id) {
            this.unEdit = true
            alert('Success')
        } else {
            alert('Error')
        }
        await this.run();
    }

    @Watch('latCore')
    async changeMapCore() {
        this.form.latitude = Map.lat
        this.form.longitude = Map.lng
        await this.update();
    }
    get latCore() {
        return Map.lat
    }
    get lngCore() {
        return Map.lng
    }

    async setCity() {
        if (this.form != null) {
            City.currentGeo = await Core.getHttp(`/user/account/geography/${this.form.geo}/`)
            City.currentProvince = await Core.getHttp(`/user/account/province/${this.form.province}/`)
            City.currentAmphur = await Core.getHttp(`/user/account/amphur/${this.form.amphur}/`)
            City.currentDistrict = await Core.getHttp(`/user/account/district/${this.form.district}/`)
            await City.setShowName()
        }

    }

    async openCityDialog() {
        City.dialogCityState = true
    }

    get CityFrom() {
        return City.showName
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
