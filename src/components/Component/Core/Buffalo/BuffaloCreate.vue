<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6  ">
        <div class="text-center flex justify-between ">
            <h6 class="text-gray-800 text-xl font-bold">
                <button style="color:#a0aec0;" class=" text-sm" @click="$router.go(-1)">ควายทั้งหมด</button> /
                <button class="text-purple-600  ">เพิ่มควาย</button>
            </h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @submit.prevent="createBuffalo">
            <h6 class="text-gray-500 text-sm mx-4 mt-3 mb-6 font-bold uppercase">
                ข้อมูลทั่วไป
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field required v-model="form.name" filled rounded dense label="ชื่อหรือหมายเลขควาย" prepend-inner-icon="mdi-cow"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field type="number" v-model="form.price" filled rounded dense label="ราคา" prepend-inner-icon="fas fa-money-bill-wave "></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field type="number" v-model="form.nid" filled rounded dense label="หมายเลข NID" prepend-inner-icon="fas fa-list-ol"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field type="number" v-model="form.microship" filled rounded dense label="หมายเลขไมโครซิป" prepend-inner-icon="fas fa-list"></v-text-field>
                </div>
                <div class="w-full">
                    <hr class="mt-6 mx-4 border-b-1 border-gray-400" />
                    <h6 class="text-gray-500 text-sm mt-6 mx-4 mb-6 font-bold uppercase">
                        ข้อมูลลักษณะควาย
                    </h6>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field required v-model="form.birthday" type="date" filled rounded dense label="ว/ด/ป"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-text-field v-model="form.age" type="number" filled rounded dense label="อายุ(ปี) หรือ (ประเมินจากฟัน)" prepend-inner-icon="fas fa-birthday-cake"></v-text-field>
                </div>
                 <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field     v-model="form.age_month" type="number" filled rounded dense label="อายุ(เดือน) หรือ (ประเมินจากฟัน)" id="id" prepend-inner-icon="fas fa-birthday-cake"></v-text-field>
                </div>
                
                <div class="w-full lg:w-6/12 px-4">
                    <v-select :items="sex" item-text="value" item-value="id" v-model="form.gender" filled rounded dense label="เพศ" prepend-inner-icon="fas fa-venus-mars" />
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-select :items="color" item-text="value" item-value="id" v-model="form.color" filled rounded dense label="สี" prepend-inner-icon="fas fa-palette" />
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <v-select :items="status" item-text="value" item-value="id" v-model="form.status" filled rounded dense label="สถานะ" prepend-inner-icon="fas fa-file-alt" />
                </div> 
                <div class="w-full lg:w-6/12 px-4">
                    <v-select :items="froms" item-text="value" item-value="id" v-model="form.froms" filled rounded dense label="แหล่งที่มา" prepend-inner-icon="fas fa-file-import" />
                </div>
            </div>
            <hr class="mt-6 mx-4 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mx-4 mt-6 mb-6 font-bold uppercase">
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

            <hr class="mt-6 mb-6 mx-4 border-b-1 border-gray-400" />
            <v-btn class="bg2" type="submit" block dark large rounded>บันทึกข้อมูล</v-btn> 

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
import { App } from "@/store/app";

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
         let month = (moment().diff(val, 'months', false)  -12) /12
        this.form.age_month = Math.floor(month);
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

<style scoped>
.f-white {
    color: white !important;
}
.bg2{
    background-color: #ff9d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
