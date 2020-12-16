<template>
<div>
    <div class="rounded-t bg-white mb-0 px-2 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">การเจริญเติบโต</h6>
            <div v-if="!privateMode">
                <button v-if="unEdit" @click="unEdit = !unEdit" class="f-white rounded p-2 bg-yellow-500 hover:bg-yellow-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                    <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
                </button>
                <button v-if="!unEdit" @click="unEdit = !unEdit" class="f-white rounded p-2 bg-red-500 hover:bg-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                    <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
                </button>
            </div>
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form @submit.prevent="updateBuffalo">
            <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
                โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
            </v-alert>
            <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
                แรกเกิด <span v-if="evo0" class="text-red-600">(ยังไม่มีข้อมูล)</span>
            </h6>

            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            น้ำหนัก(กก.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-weight text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.weight0" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความกว้างรอบอก(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.width0" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความยาวรอบลำตัว(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.length0" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความสูง(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-height text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.height0" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
                อายุ 240 วัน <span v-if="evo240" class="text-red-600">(ยังไม่มีข้อมูล)</span>
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            น้ำหนัก(กก.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-weight text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.weight240" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความกว้างรอบอก(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.width240" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความยาวรอบลำตัว(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.length240" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความสูง(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-height text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.height240" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
                อายุ 400 วัน <span v-if="evo400" class="text-red-600">(ยังไม่มีข้อมูล)</span>
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            น้ำหนัก(กก.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-weight text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.weight400" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความกว้างรอบอก(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.width400" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความยาวรอบลำตัว(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.length400" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความสูง(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-height text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.height400" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
                อายุ 600 วัน <span v-if="evo600" class="text-red-600">(ยังไม่มีข้อมูล)</span>
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            น้ำหนัก(กก.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-weight text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.weight600" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความกว้างรอบอก(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.width600" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความยาวรอบลำตัว(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-width text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.length600" />
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความสูง(ซม.)
                        </label>
                        <div class="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ">
                                <i class="fas fa-text-height text-lg text-gray-500"></i>
                            </span>
                            <input :disabled="unEdit" type="number" :class="`${$xinput} ${editMode} focus:ring-1 focus:ring-yellow-600` " v-model="form.height600" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-4">
                <button v-if="!unEdit" :class="`f-white ${$btnsuccess}`" type="submit">
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
    Prop
} from 'vue-property-decorator';
import {
    Core
} from '@/store/core'

import moment from "moment";
import { Evolution } from "@/models/buffalo";
import { App } from "@/store/app";

@Component
export default class TabBuff extends Vue {
    @Prop({ default: false })
    privateMode!: boolean

    private form: Evolution | any = {}
    private unEdit: boolean = true
    private response: boolean = false

    private async created() {

        await this.run();
    }

    private async run() {
        await App.onLoad()
        let buffalo = this.$route.query.id
        this.form = await Core.getHttp(`/user/buffalo/evolution/${buffalo}/`)

        this.response = true
        await App.offLoad()
    }

    @Watch('form.birthday')
    async onChangeDate(val: string) {
        this.form.age = moment().diff(val, 'years', false);
    }

    private async updateBuffalo() {
        let update = await Core.putHttp(`/user/buffalo/evolution/${this.form.id}/`, this.form)
        if (update.id) {
            await this.run()
            this.unEdit = true
            await App.success("บันทึกข้อมูลสำเร็จ")

        } else {
            await App.error("โปรดระบุข้อมูลให้ครบถ้วน")
        }
    }

    get evo0() {
        return (this.form.width0 || this.form.weight0 || this.form.width0 || this.form.length0) ? false : true
    }

    get evo240() {
        return (this.form.width240 || this.form.weight240 || this.form.width240 || this.form.length240) ? false : true
    }

    get evo400() {
        return (this.form.width400 || this.form.weight400 || this.form.width400 || this.form.length400) ? false : true
    }

    get evo600() {
        return (this.form.width600 || this.form.weight600 || this.form.width600 || this.form.length600) ? false : true
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
