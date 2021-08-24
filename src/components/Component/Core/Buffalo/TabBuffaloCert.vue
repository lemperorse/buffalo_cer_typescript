<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-2 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">ใบพันธุ์ประวัติ</h6>
      </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
      <v-tabs
        v-model="tab"
        next-icon="mdi-arrow-right"
        prev-icon="mdi-arrow-left"
        show-arrows
      >
        <v-tab> ใบพันธุ์ประวัติอ้างอิง </v-tab>
        <v-tab-item>
          <div class="flex flex-wrap">
            <div class="w-full px-1 mt-4">
              <form v-if="!privateMode" @submit.prevent="updateCert">
                <div
                  class="
                    lg:grid lg:grid-flow-col
                    md:grid md:grid-flow-col
                    lg:grid-cols-2 lg:grid-rows-1
                    md:grid-cols-2 md:grid-rows-1
                    gap-2
                  "
                >
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        พ่อพันธุ์
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.father_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="พ่อพันธุ์"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogFather = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        แม่พันธุ์
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.mother_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="แม่พันธุ์"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogMother = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    lg:grid lg:grid-flow-col
                    md:grid md:grid-flow-col
                    lg:grid-cols-2 lg:grid-rows-1
                    md:grid-cols-2 md:grid-rows-1
                    gap-2
                  "
                >
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        ปู่
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.grand_father_male_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="ปู่"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogFatherMale = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        ย่า
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.grand_mother_male_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="ย่า"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogMotherMale = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    lg:grid lg:grid-flow-col
                    md:grid md:grid-flow-col
                    lg:grid-cols-2 lg:grid-rows-1
                    md:grid-cols-2 md:grid-rows-1
                    gap-2
                  "
                >
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        ตา
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.grand_father_female_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="ตา"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogFatherFemale = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-1">
                    <div class="relative w-full mb-3">
                      <label
                        class="
                          block
                          uppercase
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        htmlFor="grid-password"
                      >
                        ยาย
                      </label>
                      <div class="flex">
                        <v-text-field
                          v-model="form.grand_mother_female_nid"
                          filled
                          rounded
                          type="text"
                          name="name"
                          label="ยาย"
                          id="id"
                        ></v-text-field>
                        <v-btn
                          @click="dialogMotherFemale = true"
                          class="success ml-2"
                          dark
                          depressed
                          fab
                        >
                          <v-icon>fas fa-search</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full px-1">
                  <div class="relative w-full mb-3">
                    <v-btn
                      dark
                      class="bg2"
                      depressed
                      type="submit"
                      block
                      large
                      rounded
                    >
                      <v-icon left>fas fa-save</v-icon>
                      บันทึกข้อมูล
                    </v-btn>
                  </div>
                </div>
              </form>
              <br />
              <hr class="mx-1" />
              <br />
              <div class="relative w-full mb-3 mt-4 px-1">
                <PdfCert v-if="form.mother_nid && form.father_nid" />
                <br />
                <PdfEndorse v-if="form.mother_nid && form.father_nid" />
                <v-alert v-else color="#ff5766" outlined type="info">
                  ไม่ข้อมูลให้ดาวน์โหลด
                </v-alert>
              </div>
            </div>
          </div>
        </v-tab-item>
        <v-tab> ใบพันธุ์ประวัติทางการ </v-tab>
        <v-tab-item>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="flex justify-center mt-6" v-if="!privateMode">
                <input @change="certChange" type="file" />
              </div>
              <br /><br />
              <hr />

              <div class="relative w-full mb-3 mt-4">
                <v-btn
                  v-if="formCertReal.real_cer"
                  @click="openRealCret"
                  color="purple"
                  depressed
                  dark
                  block
                  large
                  rounded
                >
                  <v-icon left>fas fa-file-download</v-icon>
                  ดาวน์โหลดเอกสาร
                </v-btn>
                <v-alert v-else color="#ff5766" outlined type="info">
                  ไม่ข้อมูลให้ดาวน์โหลด
                </v-alert>
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs>
    </div>
    <v-app>
      <v-dialog
        v-model="dialogFather"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกพ่อพันธ์ุ
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseFather = null;
                dialogFather = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseFather"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseFatherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseFatherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialogMother"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกแม่พันธ์ุ
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseMother = null;
                dialogMother = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseMother"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseMotherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseMotherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- ปู่ย่า -->
      <v-dialog
        v-model="dialogFatherMale"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกพ่อพันธ์ุ
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseFatherMale = null;
                dialogFatherMale = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseFatherMale"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseFatherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseFatherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialogMotherMale"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกย่า
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseMotherMale = null;
                dialogMotherMale = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseMotherMale"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseMotherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseMotherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- ตายาย -->
      <v-dialog
        v-model="dialogFatherFemale"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกพ่อพันธ์ุ
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseFatherFemale = null;
                dialogFatherFemale = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseFatherFemale"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseFatherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseFatherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialogMotherFemale"
        persistent
        max-width="500px"
        style="z-index: 1003"
      >
        <v-card>
          <v-card-title primary-title>
            เลือกยาย
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              @click="
                chooseMotherFemale = null;
                dialogMotherFemale = false;
              "
              class="bg-blue-600 ml-2"
              icon
              rounded
            >
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-autocomplete
              filled
              rounded
              v-model="chooseMotherFemale"
              return-object
              item-text="name"
              :items="buffalos"
            ></v-autocomplete>
            <v-btn
              @click="chooseMotherData()"
              color="purple"
              dark
              large
              rounded
              block
              >เลือก</v-btn
            >
            <!-- <button @click="chooseMotherData()" :class="`bg-blue-600 ${$btn}`">เลือก</button> -->
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Core } from "@/store/core";

import moment from "moment";
import { FarmForm } from "@/models/farm";
import { BuffaloForm } from "@/models/buffalo";
import { CoreForm } from "@/models/core";
import { App } from "@/store/app";

import PdfCert from "@/components/Component/Core/Buffalo/PdfCert.vue";
import PdfEndorse from "@/components/Component/Core/Buffalo/PdfEndorse.vue";

@Component({
  components: { PdfCert, PdfEndorse },
  computed: {},
})
export default class Farm extends Vue {
  @Prop({ default: false })
  privateMode!: boolean;

  private farm: FarmForm | any = {};
  private form: any = {};
  private formCertReal: any = {};
  private buffalo: BuffaloForm | any = {};
  private buffalos: any = [];
  private unEdit: boolean = true;
  private response: boolean = false;
  private tab: number = 0;

  private dialogFather: boolean = false;
  private dialogMother: boolean = false;
  private dialogFatherMale: boolean = false;
  private dialogMotherMale: boolean = false;
  private dialogFatherFemale: boolean = false;
  private dialogMotherFemale: boolean = false;
  private chooseFather: any | null = null;
  private chooseMother: any | null = null;
  private chooseFatherMale: any | null = null;
  private chooseMotherMale: any | null = null;
  private chooseFatherFemale: any | null = null;
  private chooseMotherFemale: any | null = null;
  api: any = process.env.VUE_APP_SERVER;
  private async created() {
    await this.run();
  }

  private async run() {
    await App.onLoad();
    this.buffalo = await Core.getHttp(
      `/user/buffalo/buffalo/${this.$route.query.id}/`
    );
    this.buffalos = await Core.putHttp(
      `/user/buffalo/buffalo/?farm=${this.buffalo.farm}`,
      {}
    );
   let cert  = await Core.getHttp(
      `/user/buffalo/cert/${this.$route.query.id}/`
    );
    if(!cert.id){
        let form  = {
    "mother": "",
    "mother_nid": "",
    "father": "",
    "father_nid": "",
    "grand_father_male": "",
    "grand_father_male_nid": "",
    "grand_mother_male": "",
    "grand_mother_male_nid": "",
    "grand_father_female": "",
    "grand_father_female_nid": "",
    "grand_mother_female": "",
    "grand_mother_female_nid": "", 
    "buffalo": this.$route.query.id
}
this.form = await Core.postHttp(
      `/api/buffalo/cert/create/`,form
    );

    }else{
       this.form = cert
    }
    this.formCertReal = await Core.getHttp(
      `/user/buffalo/certreal/${this.$route.query.id}/`
    );
    this.response = true;
    await App.offLoad();
  }

  private async chooseFatherData() {
    if (this.chooseFather) {
      this.form.father = this.chooseFather.id;
      this.form.father_nid = `${this.chooseFather.name} (${this.chooseFather.nid})`;
      this.dialogFather = false;
    }
    if (this.chooseFatherMale) {
      this.form.grand_father_male = this.chooseFatherMale.id;
      this.form.grand_father_male_nid = `${this.chooseFatherMale.name} (${this.chooseFatherMale.nid})`;
      this.dialogFatherMale = false;
    }
    if (this.chooseFatherFemale) {
      this.form.grand_father_female = this.chooseFatherFemale.id;
      this.form.grand_father_female_nid = `${this.chooseFatherFemale.name} (${this.chooseFatherFemale.nid})`;
      this.dialogFatherFemale = false;
    }
  }

  private async chooseMotherData() {
    if (this.chooseMother) {
      this.form.mother = this.chooseMother.id;
      this.form.mother_nid = `${this.chooseMother.name} (${this.chooseMother.nid})`;
      this.dialogMother = false;
      console.log("Mother");
    }
    if (this.chooseMotherFemale) {
      this.form.grand_mother_female = this.chooseMotherFemale.id;
      this.form.grand_mother_female_nid = `${this.chooseMotherFemale.name} (${this.chooseMotherFemale.nid})`;
      this.dialogMotherFemale = false;
      console.log("Mother-1");
    }
    if (this.chooseMotherMale) {
      this.form.grand_mother_male = this.chooseMotherMale.id;
      this.form.grand_mother_male_nid = `${this.chooseMotherMale.name} (${this.chooseMotherMale.nid})`;
      this.dialogMotherMale = false;
      console.log("Mother-2");
    }
  }

  private async updateCert() {
    let update = await Core.putHttp(
      `/user/buffalo/cert/${this.form.id}/`,
      this.form
    );
    if (update.id) {
      await this.run();
      this.unEdit = true;
      await App.success("บันทึกข้อมูลสำเร็จ");
      await location.reload();
    } else {
      await App.error("โปรดระบุข้อมูลให้ครบถ้วน");
    }
  }

  async certChange(event: any) {
    let file = event.target.files[0];
    const form = new FormData();
    form.append("real_cer", file);
    form.append("buffalo", this.buffalo.id);
    let data = await Core.putHttp(
      `/api/buffalo/certreal/${this.formCertReal.id}/`,
      form
    );
    if (data.id) {
      await this.run();
      await App.success("บันทึกข้อมูลสำเร็จ");
    }
  }

  openCert() {
    window.open(
      `${this.api}/cert/buffalo?id=${this.$route.query.id}`,
      "_blank"
    );
  }

  openRealCret() {
    console.log(`${this.api}/${this.formCertReal.real_cer}`);
    window.open(`${this.api}/${this.formCertReal.real_cer}`, "_blank");
  }
}
</script>

<style scoped>
.f-white {
  color: white !important;
}
.bg2 {
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
