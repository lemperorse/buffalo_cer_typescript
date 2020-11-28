<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6  ">
        <div class="text-center flex justify-between ">
            <h6 class="text-gray-800 text-xl font-bold">
                <button style="color:#a0aec0;" class=" text-sm" @click="$router.go(-1)">ควายทั้งหมด</button> /
                <button class="text-purole-600  ">สร้างควาย</button>
            </h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @submit.prevent="createBuffalo">
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ข้อมูลทั่วไป
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อหรือหมายเลขควาย
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                                <i class="em em-water_buffalo text-lg text-gray-500"></i>
                            </span> 
                            <input required v-model="form.name" type="text" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ราคา
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-money-bill-wave text-lg text-gray-500"></i>
                            </span> 
                            <input v-model="form.price" type="number" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลข NID
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-list-ol text-lg text-gray-500"></i>
                            </span> 
                            <input v-model="form.nid" type="number" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลขไมโครซิป
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-microchip text-lg text-gray-500"></i>
                            </span> 
                            <input v-model="form.microship" type="number" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <hr class="mt-6 border-b-1 border-gray-400" />
                    <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                        ข้อมูลลักษณะควาย
                    </h6>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            วันเกิด
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-calendar-day text-lg text-gray-500"></i>
                            </span>
                            <input required v-model="form.birthday" type="date" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>

                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            อายุ(ปี)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-birthday-cake text-lg text-gray-500"></i>
                            </span>
                            <input v-model="form.age" type="number" :class="`${$xinput} border-edit`" value=" " />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เพศ
                        </label>
                        <div class="relative">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-venus-mars text-lg text-gray-500"></i>
                            </span>
                            <select v-model="form.gender" required :class="`${$xinput} border-edit`" >
                                <option v-for="val,i in sex" :key="i" :value="val.id">{{ val.value }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            สี
                        </label>
                        <div class="relative">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-palette text-lg text-gray-500"></i>
                            </span>
                            <select v-model="form.color" required :class="`${$xinput} border-edit`" >
                                <option v-for="val,i in color" :key="i" :value="val.id">{{ val.value }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
 
                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            สถานะ
                        </label>
                        <div class="relative">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-file-alt text-lg text-gray-500"></i>
                            </span>
                            <select v-model="form.status" required :class="`${$xinput} border-edit`" >
                                <option v-for="val,i in status" :key="i" :value="val.id">{{ val.value }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            แหล่งที่มา
                        </label>
                        <div class="relative">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-file-import text-lg text-gray-500"></i>
                            </span>
                            <select v-model="form.froms" required :class="`${$xinput} border-edit`" >
                                <option v-for="val,i in froms" :key="i" :value="val.id">{{ val.value }}</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                รูปภาพ
            </h6>
            <div class="flex flex-wrap flex justify-center">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ภาพถ่ายด้านหน้า
                        </h6>
                        <img class="h-40 w-60" ref="frontImage" alt="">
                        <input required type="file" @change="frontChange">
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ภาพถ่ายด้านข้าง
                        </h6>
                        <img class="h-40 w-60" ref="backImage" alt="">
                        <input required style="width:260px;" type="file" @change="backChange">
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <div class="flex justify-center mt-6">
                <button class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
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

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { BuffaloForm } from "@/models/buffalo";
import { CoreForm } from "@/models/core";
import { User } from "@/store/user";
import {App} from "@/store/app";

@Component({
    components: {},
    computed: {},

})

export default class Farm extends Vue {
    private farm: FarmForm | any = {}
    private form: BuffaloForm | any = {}
    private response: boolean = false

    private sex: CoreForm[] | null = null
    private color: CoreForm[] | null = null
    private status: CoreForm[] | null = null
    private froms: CoreForm[] | null = null

    private async created() {
        await this.collingPermission()
        await this.setChoices();
        await this.run();
    }
    private async setChoices() {
        this.sex = await Core.getChoice(`เพศควาย`)
        this.color = await Core.getChoice(`สีควาย`)
        this.status = await Core.getChoice(`สถานะควาย`)
        this.froms = await Core.getChoice(`แหล่งที่มาของควาย`)
    }

    async collingPermission() {
        let user = await User.getUser();
        let userAll = await Core.getHttp(`/api/account/${user.pk}/`)
        if (userAll.is_staff) {
            let profile = await Core.getHttp(`/api/profile/${this.$route.query.farmer}/`)
            this.farm = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
            this.response = true

        } else {
            let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
            this.farm = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
            this.response = true
        }
    }

    private async run() {

    }

    @Watch('form.birthday')
    async onChangeDate(val: string) {
        this.form.age = moment().diff(val, 'years', false);
    }

    async frontChange(event: any) {
        let file = await Core.getBase64(event.target.files[0])
        let frontImage: any = this.$refs.frontImage
        frontImage.src = file
        this.form.front_image = file

    }

    async backChange(event: any) {
        let file = await Core.getBase64(event.target.files[0])
        let backImage: any = this.$refs.backImage
        backImage.src = file
        this.form.back_image = file

    }

    private async createBuffalo() {
        this.form.farm = this.farm.id
        let create = await Core.postHttp(`/user/buffalo/buffalo/`, this.form)
        if (create.id) {
            await Core.postHttp(`/api/buffalo/cert/create/`, { "buffalo": create.id })
            await Core.postHttp(`/api/buffalo/certreal/create/`, { "buffalo": create.id })
            await Core.postHttp(`/api/buffalo/evolution/create/`, { "buffalo": create.id })
            await App.success("บันทึกข้อมูลสำเร็จ")
            await this.$router.go(-1)
        } else {
            await App.error("โปรดระบุข้อมูลให้ครบถ้วน")
        }
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
