<template>
<div>

    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">ใบพันธุ์ประวัติ</h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">

        <v-tabs v-model="tab">
            <v-tab>
                ใบพันธุ์ประวัติอ้างอิง
            </v-tab>
            <v-tab-item>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4 mt-4">
                      <form  @submit.prevent="updateCert">
                        <div class="flex flex-wrap">
                          <div class="w-full   px-4">
                            <div class="relative w-full mb-3">
                              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                พ่อพันธุ์
                              </label>
                              <div class="flex">
                                <input   v-model="form.father_nid" type="text" :class="$xinput" value="Lucky" />
                                <v-btn @click="dialogFather = true" class="bg-green-600 ml-2" style="background-color: green;" dark icon rounded><v-icon>fas fa-search</v-icon></v-btn>
                              </div>

                            </div>
                          </div>

                            <div class="w-full   px-4">
                                <div class="relative w-full mb-3">
                                    <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                      แม่พันธุ์
                                    </label>
                                    <div class="flex">
                                        <input  v-model="form.mother_nid" type="text" :class="$xinput" value="Lucky" />
                                        <v-btn  @click="dialogMother = true"  class="bg-green-600 ml-2" style="background-color: green;" dark icon rounded><v-icon>fas fa-search</v-icon></v-btn>
                                    </div>

                                </div>
                            </div>
                          <div class="w-full   px-4">
                            <div class="relative w-full mb-3">
                              <button type="submit" :class="`bg-green-600 f-white ${$btn}`">บันทึก</button>

                            </div>
                            <hr>
                            <div class="relative w-full mb-3 mt-4">
                              <button type="button" @click="openCert"
                                      :class="`bg-purple-600 f-white ${$btn}`">ดาวน์โหลดเอกสาร</button>
                            </div>


                          </div>


                        </div>
                      </form>
                    </div>
                </div>

            </v-tab-item>
            <v-tab>
                ใบพันธุ์ประวัติทางการ
            </v-tab>
            <v-tab-item>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">

                        <div class="flex justify-center mt-6">
                          <input @change="certChange" type="file">
                        </div>
                      <br>
                      <hr>
                      <div class="relative w-full mb-3 mt-4">
                        <button type="button" @click="openRealCret"
                                :class="`bg-purple-600 f-white ${$btn}`">ดาวน์โหลดเอกสาร</button>
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
                    เลือกพ่อพันธ์ุ <v-spacer></v-spacer>
                  <v-btn @click="chooseFather = null ;  dialogFather = false" class="bg-green-600 ml-2"  icon rounded><v-icon>fas fa-times</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-autocomplete v-model="chooseFather" return-object item-text="name" :items="buffalos"></v-autocomplete>
                    <button @click="chooseFatherData()" :class="`bg-green-600 ${$btn}`">เลือก</button>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogMother" persistent max-width="500px" style="z-index: 1003;">
            <v-card>
                <v-card-title primary-title>
                    เลือกแม่พันธ์ุ <v-spacer></v-spacer>
                  <v-btn @click="chooseMother = null ;  dialogMother = false" class="bg-green-600 ml-2"  icon rounded><v-icon>fas fa-times</v-icon></v-btn>

                 </v-card-title>
                <v-card-text>
                    <v-autocomplete v-model="chooseMother" return-object item-text="name" :items="buffalos"></v-autocomplete>
                    <button @click="chooseMotherData()" :class="`bg-green-600 ${$btn}`">เลือก</button>
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
} from 'vue-property-decorator';
import {
    Core
} from '@/store/core'

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { BuffaloForm } from "@/models/buffalo";
import { CoreForm } from "@/models/core";

@Component({
    components: {},
    computed: {},

})

export default class Farm extends Vue {
    private farm: FarmForm | any = {}
    private form:  any = {}
    private formCertReal :any ={}
    private buffalo: BuffaloForm | any = {}
    private buffalos: any = []
    private unEdit: boolean = true
    private response: boolean = false
    private tab : number = 0

    private dialogFather: boolean = false
    private dialogMother: boolean = false
    private chooseFather: any | null = null
    private chooseMother: any | null = null

    private async created() {
        await this.run();
    }

    private async run() {
        this.buffalo = await Core.getHttp(`/user/buffalo/buffalo/${this.$route.query.id}/`)
        this.buffalos = await Core.putHttp(`/user/buffalo/buffalo/?farm=${this.buffalo.farm}`, {})
        this.form = await Core.getHttp(`/user/buffalo/cert/${this.$route.query.id}/`)
        this.formCertReal = await Core.getHttp(`/user/buffalo/certreal/${this.$route.query.id}/`)
        this.response = true
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
      this.dialogMother= false
    }
  }

    private async updateCert() {
        let update = await Core.putHttp(`/user/buffalo/cert/${this.form.id}/`, this.form)
        if (update.id) {
            await this.run()
            this.unEdit = true
            alert("บันทึกข้อมูลสำเร็จ")

        } else {
            alert('โปรดระบุข้อมูลให้ครบถ้วน')
        }
    }

  async certChange(event:any){
    let file = event.target.files[0]
    const form = new FormData();
    form.append("real_cer", file);
    form.append("buffalo",this.buffalo.id)
    let data = await Core.putHttp(`/api/buffalo/certreal/${this.formCertReal.id}/`,form)
    if(data.id){
      await this.run();
      alert("success")
    }
  }
  openCert(){
    window.open( `http://192.168.1.112:8000/user/buffalo/print/${this.$route.query.id}`, '_blank');

  }
  openRealCret(){
    window.open(this.formCertReal.real_cer, '_blank');
  }


}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
