<template>
<div>
    <div class="rounded-t bg-white mb-0 px-2 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ใบพันธุ์ประวัติ</h6>
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <v-tabs v-model="tab" next-icon="mdi-arrow-right" prev-icon="mdi-arrow-left" show-arrows>
            <v-tab>
                ใบพันธุ์ประวัติอ้างอิง
            </v-tab>
            <v-tab-item>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-1 mt-4">
                        <form v-if="!privateMode" @submit.prevent="updateCert">
                            <div class="flex flex-wrap">
                                <div class="w-full px-1">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            พ่อพันธุ์
                                        </label>
                                        <div class="flex">
                                            <v-text-field v-model="form.father_nid" filled rounded type="text" name="name" label="พ่อพันธุ์" id="id"></v-text-field>
                                            <v-btn @click="dialogFather = true" class="success ml-2"  dark depressed fab>
                                                <v-icon>fas fa-search</v-icon>
                                            </v-btn>
                                        </div>

                                    </div>
                                </div>

                                <div class="w-full   px-1">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            แม่พันธุ์
                                        </label>
                                        <div class="flex">
                                            <v-text-field v-model="form.mother_nid" filled rounded type="text" name="name" label="แม่พันธุ์" id="id"></v-text-field>
                                            <v-btn @click="dialogMother = true" class="success ml-2" dark depressed fab>
                                                <v-icon>fas fa-search</v-icon>
                                            </v-btn>
                                        </div>

                                    </div>
                                </div>
                                <div class="w-full px-1">
                                    <div class="relative w-full mb-3">
                                        <v-btn color="deep-purple accent-3" depressed type="submit" class="" block large rounded>
                                            <v-icon left>fas fa-save</v-icon>
                                            บันทึกข้อมูล
                                        </v-btn>
                                    </div>

                                </div>

                            </div>
                        </form>
                        <br>
                        <hr class="mx-1">
                        <div class="relative w-full mb-3 mt-4 px-1">
                            <v-btn v-if="form.mother_nid && form.father_nid" @click="openCert($api)" color="purple" depressed dark block large rounded>
                                <v-icon left>fas fa-file-download</v-icon>
                                    ดาวน์โหลดเอกสาร
                            </v-btn>
                            <v-alert v-else color="#ff5766" outlined type="info"> ไม่ข้อมูลให้ดาวน์โหลด </v-alert>
                        </div>
                    </div>
                </div>

            </v-tab-item>
            <v-tab>
                ใบพันธุ์ประวัติทางการ
            </v-tab>
            <v-tab-item>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">

                        <div class="flex justify-center mt-6" v-if="!privateMode">
                            <input @change="certChange" type="file">
                        </div>
                        <br><br>
                        <hr>

                        <div class="relative w-full mb-3 mt-4">
                            <v-btn v-if="formCertReal.real_cer" @click="openRealCret" color="purple" depressed dark block large rounded>
                                <v-icon left>fas fa-file-download</v-icon>
                                    ดาวน์โหลดเอกสาร
                            </v-btn>
                            <v-alert v-else color="#ff5766" outlined type="info"> ไม่ข้อมูลให้ดาวน์โหลด </v-alert>
                        </div>

                    </div>
                </div>

            </v-tab-item>
        </v-tabs>

    </div>
    <v-app>

        <v-dialog v-model="dialogFather" persistent max-width="500px" style="z-index: 1003;">
            <v-card>
                <v-card-title primary-title>
                    เลือกพ่อพันธ์ุ
                    <v-spacer></v-spacer>
                    <v-btn @click="chooseFather = null ;  dialogFather = false" class="bg-blue-600 ml-2" icon rounded>
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-autocomplete v-model="chooseFather" return-object item-text="name" :items="buffalos"></v-autocomplete>
                    <button @click="chooseFatherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogMother" persistent max-width="500px" style="z-index: 1003;">
            <v-card>
                <v-card-title primary-title>
                    เลือกแม่พันธ์ุ
                    <v-spacer></v-spacer>
                    <v-btn @click="chooseMother = null ;  dialogMother = false" class="bg-blue-600 ml-2" icon rounded>
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>

                </v-card-title>
                <v-card-text>
                    <v-autocomplete v-model="chooseMother" return-object item-text="name" :items="buffalos"></v-autocomplete>
                    <button @click="chooseMotherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>

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

@Component({
    components: {},
    computed: {},

})

export default class Farm extends Vue {

    @Prop({ default: false })
    privateMode!: boolean

    private farm: FarmForm | any = {}
    private form: any = {}
    private formCertReal: any = {}
    private buffalo: BuffaloForm | any = {}
    private buffalos: any = []
    private unEdit: boolean = true
    private response: boolean = false
    private tab: number = 0

    private dialogFather: boolean = false
    private dialogMother: boolean = false
    private chooseFather: any | null = null
    private chooseMother: any | null = null

    private async created() {
        await this.run();
    }

    private async run() {
        await App.onLoad()
        this.buffalo = await Core.getHttp(`/user/buffalo/buffalo/${this.$route.query.id}/`)
        this.buffalos = await Core.putHttp(`/user/buffalo/buffalo/?farm=${this.buffalo.farm}`, {})
        this.form = await Core.getHttp(`/user/buffalo/cert/${this.$route.query.id}/`)
        this.formCertReal = await Core.getHttp(`/user/buffalo/certreal/${this.$route.query.id}/`)
        this.response = true
        await App.offLoad()
    }

    private async chooseFatherData() {
        if (this.chooseFather) {
            this.form.father = this.chooseFather.id
            this.form.father_nid = `${this.chooseFather.name} (${this.chooseFather.nid})`
            this.dialogFather = false
        }
    }

    private async chooseMotherData() {
        if (this.chooseMother) {
            this.form.mother = this.chooseMother.id
            this.form.mother_nid = `${this.chooseMother.name} (${this.chooseMother.nid})`
            this.dialogMother = false
        }
    }

    private async updateCert() {
        let update = await Core.putHttp(`/user/buffalo/cert/${this.form.id}/`, this.form)
        if (update.id) {
            await this.run()
            this.unEdit = true
            await App.success("บันทึกข้อมูลสำเร็จ")

        } else {
            await App.error("โปรดระบุข้อมูลให้ครบถ้วน")
        }
    }

    async certChange(event: any) {
        let file = event.target.files[0]
        const form = new FormData();
        form.append("real_cer", file);
        form.append("buffalo", this.buffalo.id)
        let data = await Core.putHttp(`/api/buffalo/certreal/${this.formCertReal.id}/`, form)
        if (data.id) {
            await this.run();
            await App.success("บันทึกข้อมูลสำเร็จ")
        }
    }

    openCert(api: string) {
        window.open(`${api}${this.$route.query.id}`, '_blank');

    }

    openRealCret() {
        window.open(this.formCertReal.real_cer, '_blank');
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
