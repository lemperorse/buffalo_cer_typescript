<template>
<div>
    <div class="rounded-t bg-white mb-0 px-2 py-6 ">
        <div class="text-center flex justify-between ">
            <h6 class="text-gray-800 text-xl font-bold">
                รายละเอียดควาย
            </h6>
            <div v-if="!privateMode">
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
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form @submit.prevent="updateBuffalo" v-if="response">
            <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
                โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
            </v-alert>
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ข้อมูลทั่วไป
            </h6>
            
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.name" type="text" filled rounded dense label="ชื่อหรือหมายเลขควาย" id="id" prepend-inner-icon="em em-water_buffalo"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.price" type="number" filled rounded dense label="ราคา" id="id" prepend-inner-icon="fas fa-money-bill-wave"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.nid" type="number" filled rounded dense label="หมายเลข NID" id="id" prepend-inner-icon="fas fa-list-ol"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.microship" type="number" filled rounded dense label="หมายเลขไมโครซิป" id="id" prepend-inner-icon="fas fa-microchip"></v-text-field>
                </div>
                <div class="w-full">
                    <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
                    <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                        ข้อมูลลักษณะควาย
                    </h6>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.birthday" type="date" filled rounded dense label="วันเกิด" id="id"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-text-field :disabled="unEdit" required v-model="form.age" type="number" filled rounded dense label="อายุ(ปี) หรือ (ประเมินจากฟัน)" id="id" prepend-inner-icon="fas fa-birthday-cake"></v-text-field>
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-select :disabled="unEdit" required :items="sex" item-text="value" item-value="id" v-model="form.gender" filled rounded dense label="เพศ" prepend-inner-icon="fas fa-venus-mars" />
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-select :disabled="unEdit" :items="color" item-text="value" item-value="id" v-model="form.color" filled rounded dense label="สี" prepend-inner-icon="fas fa-palette" />
                </div>
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-select :disabled="unEdit" :items="status" item-text="value" item-value="id" v-model="form.status" filled rounded dense label="สถานะ" prepend-inner-icon="fas fa-file-alt" />
                </div> 
                <div class="w-full lg:w-6/12 md:px-4">
                    <v-select :disabled="unEdit" :items="froms" item-text="value" item-value="id" v-model="form.froms" filled rounded dense label="แหล่งที่มา" prepend-inner-icon="fas fa-file-import" />
                </div>
            </div>

            <div class="flex justify-center mt-6">
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
    Prop
} from 'vue-property-decorator';
import {
    Core
} from '@/store/core'

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { BuffaloForm } from "@/models/buffalo";
import { CoreForm } from "@/models/core";
import { App } from "@/store/app";
import { User } from "@/store/user";

@Component({
    components: {},
    computed: {},

})

export default class Farm extends Vue {

    @Prop({ default: false })
    privateMode!: boolean

    private farm: FarmForm | any = {}
    private form: BuffaloForm | any = {}
    private unEdit: boolean = true
    private response: boolean = false

    private sex: CoreForm[] | null = null
    private color: CoreForm[] | null = null
    private status: CoreForm[] | null = null
    private froms: CoreForm[] | null = null

    private publicMode: boolean = false

    private async created() {
        await this.setChoices();
        await this.run();
    }

    private async setChoices() {
        this.sex = await Core.getChoice(`เพศควาย`)
        this.color = await Core.getChoice(`สีควาย`)
        this.status = await Core.getChoice(`สถานะควาย`)
        this.froms = await Core.getChoice(`แหล่งที่มาของควาย`)
    }

    private async run() {
        await App.onLoad()
        let buffalo = this.$route.query.id
        // let profile = await Core.getHttp(`/api/profile/${user}/`)
        // this.farm = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
        this.form = await Core.getHttp(`/user/buffalo/buffalo/${buffalo}/`)

        this.response = true
        await App.offLoad()
    }

    @Watch('form.birthday')
    async onChangeDate(val: string) {
        this.form.age = moment().diff(val, 'years', false);
    }

    private async updateBuffalo() {
        delete this.form.back_image
        delete this.form.front_image
        let update = await Core.putHttp(`/user/buffalo/buffalo/${this.form.id}/`, this.form)
        if (update.id) {
            await this.run()
            this.unEdit = true
            await App.success("บันทึกข้อมูลสำเร็จ")

        } else {
            await App.error("โปรดระบุข้อมูลให้ครบถ้วน")
        }
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
