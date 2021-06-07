<template>
<div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ข้อมูลฟาร์ม</h6> 
            <v-btn color="orange" dark large depressed rounded v-if="unEdit" @click="unEdit = !unEdit">
                <v-icon left dark>
                    fas fa-pencil-alt
                </v-icon>แก้ไข
            </v-btn>
            <v-btn color="error" dark large depressed rounded v-if="!unEdit" @click="unEdit = !unEdit">
                <v-icon left dark>
                    fas fa-pencil-alt
                </v-icon>ยกเลิกการแก้ไข
            </v-btn>

        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
            โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
        </v-alert>
        <form @submit.prevent="update" v-if="response">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 mx-4 font-bold uppercase">
                เกี่ยวกับฟาร์ม
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12  md:px-4">
                    <v-text-field :disabled="unEdit" v-model="form.name" type="text" filled rounded dense label="ชื่อฟาร์ม" id="id" prepend-inner-icon="fas fa-home"></v-text-field>
                </div>
                <div class="w-full lg:w-12/12 md:px-4 ">
                    <v-select :disabled="unEdit" required :items="group" item-text="value" item-value="id" v-model="form.group" filled rounded dense label="กลุ่มเกษตกร" prepend-inner-icon="fas fa-users" />
                </div>
            </div> 
            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 mx-4 font-bold uppercase">
                ที่อยู่ฟาร์ม
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 md:px-4 ">
                    <v-text-field :disabled="unEdit" v-model="form.address" type="text" filled rounded dense label="ที่อยู่ฟาร์ม" id="id" prepend-inner-icon="fas fa-home"></v-text-field>
                </div>
                <div class="w-full lg:w-12/12  md:px-4">
                    <v-text-field :disabled="unEdit" :value="CityFrom" @click="openCityDialog " @focus="openCityDialog"  type="text" filled rounded dense label="จังหวัด อำเภอ ตำบล" prepend-inner-icon="fas fa-globe-asia" />
                </div>
                <div class="w-full lg:w-12/12  md:px-4">
                    <v-text-field :disabled="unEdit" v-model="form.zipcode" type="text" filled rounded dense label="รหัสไปรษณีย์" id="id" prepend-inner-icon="fas fa-paper-plane"></v-text-field>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 mx-4 font-bold uppercase">
                พิกัด GPS
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full ">
                    <div class="relative w-full mb-3">
                        <MapView :name="'locations'" :center="{'Latitude':form.latitude,'Longitude' :form.longitude }" :locations="[
                  {'Latitude':form.latitude,'Longitude' :form.longitude } ,]" :zoom="18" :disableDefaultUI="false" :scaleControl="false" :zoomControl="false"></MapView>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" v-model="form.latitude" type="text" filled rounded dense label="พิกัดฟาร์ม GPS(ละติจูด)" id="id" prepend-inner-icon="fas fa-map-marker-alt"></v-text-field>
                </div> 
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" v-model="form.longitude" type="text" filled rounded dense label="พิกัดฟาร์ม GPS(ลองติจูด)" id="id" prepend-inner-icon="fas fa-map-marker-alt"></v-text-field>
                </div> 
            </div>

            <div class="flex justify-center mt-4">
                <v-btn color="deep-purple accent-3" depressed type="submit" v-if="!unEdit" block large rounded>
                    <v-icon left>fas fa-save</v-icon>
                    บันทึกข้อมูล
                </v-btn>
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
    App
} from '@/store/app'

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
    private group: any[] = []
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
        await App.onLoad()
        this.group = await Core.getChoice('กลุ่มเกษตรกร')
        let profile = await Core.getHttp(`/api/profile/${this.currentFarmer}/`)
        this.form = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
        await this.setCity();
        this.response = true
        await App.offLoad();
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
            await App.success("แก้ไขข้อมูลสำเร็จ")
        } else {
            await App.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล")
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
    get editMode() {
        return (this.unEdit) ? 'border-success' : 'border-edit'
    }
}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
