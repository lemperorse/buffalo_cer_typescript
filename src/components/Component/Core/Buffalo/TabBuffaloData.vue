<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-2 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">รายละเอียดควาย</h6>
        <div v-if="!privateMode">
          <v-btn
            color="orange"
            dark
            large
            depressed
            rounded
            v-if="unEdit"
            @click="unEdit = !unEdit"
          >
            <v-icon left dark> fas fa-pencil-alt </v-icon>แก้ไข
          </v-btn>
          <v-btn
            color="error"
            dark
            large
            depressed
            rounded
            v-if="!unEdit"
            @click="unEdit = !unEdit"
          >
            <v-icon left dark> fas fa-pencil-alt </v-icon>ยกเลิกการแก้ไข
          </v-btn>
        </div>
      </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
      <v-alert type="error" class="rounded-lg" v-if="form.deleted"
        >ควายตัวนี้ไม่ได้อยู่ในฟาร์มแล้ว เจ้าของอาจลบ หรือยกเลิกข้อมูลควาย
        แล้ว</v-alert
      >
      <form @submit.prevent="updateBuffalo" v-if="response">
        <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
          โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม
          <v-btn
            class="border-edit"
            x-small
            style="background-color: #eeeef3; color: #f59e0b"
            >ข้อความ</v-btn
          >
        </v-alert>
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          ข้อมูลทั่วไป
        </h6>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.name"
              type="text"
              filled
              rounded
              dense
              label="ชื่อหรือหมายเลขควาย"
              id="id"
              prepend-inner-icon="mdi-cow"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.price"
              type="number"
              filled
              rounded
              dense
              label="ราคา"
              id="id"
              prepend-inner-icon="fas fa-money-bill-wave"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.nid"
              type="number"
              filled
              rounded
              dense
              label="หมายเลข NID"
              id="id"
              prepend-inner-icon="fas fa-list-ol"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.microship"
              type="number"
              filled
              rounded
              dense
              label="หมายเลขไมโครซิป"
              id="id"
              prepend-inner-icon="fas fa-microchip"
            ></v-text-field>
          </div>
          <div class="w-full">
            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
              ข้อมูลลักษณะควาย
            </h6>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.birthday"
              type="date"
              filled
              rounded
              dense
              label="วันเกิด"
              id="id"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="form.age"
              type="number"
              filled
              rounded
              dense
              label="อายุ(ปี) หรือ (ประเมินจากฟัน)"
              id="id"
              prepend-inner-icon="fas fa-birthday-cake"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              v-model="form.age_month"
              type="number"
              filled
              rounded
              dense
              label="อายุ(เดือน) หรือ (ประเมินจากฟัน)"
              id="id"
              prepend-inner-icon="fas fa-birthday-cake"
            ></v-text-field>
          </div>

          <div class="w-full lg:w-6/12 md:px-4">
            <v-select
              :disabled="unEdit"
              required
              :items="sex"
              item-text="value"
              item-value="id"
              v-model="form.gender"
              filled
              rounded
              dense
              label="เพศ"
              prepend-inner-icon="fas fa-venus-mars"
            />
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-select
              :disabled="unEdit"
              :items="color"
              item-text="value"
              item-value="id"
              v-model="form.color"
              filled
              rounded
              dense
              label="สี"
              prepend-inner-icon="fas fa-palette"
            />
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
       
            <v-select
              :disabled="unEdit"
              :items="gene" 
              v-model="form.genes"
              filled
              rounded
              dense
              label="พันธุ์ควาย"
              prepend-inner-icon="fas fa-list-ul"
            />
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-select
              :disabled="unEdit"
              :items="status"
              item-text="value"
              item-value="id"
              v-model="form.status"
              filled
              rounded
              dense
              label="สถานะ"
              prepend-inner-icon="fas fa-file-alt"
            />
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-select
              :disabled="unEdit"
              :items="froms"
              item-text="value"
              item-value="id"
              v-model="form.froms"
              filled
              rounded
              dense
              label="แหล่งที่มา"
              prepend-inner-icon="fas fa-file-import"
            />
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <v-btn
            class="bg2"
            dark
            depressed
            type="submit"
            v-if="!unEdit"
            block
            large
            rounded
          >
            <v-icon left>fas fa-save</v-icon>
            บันทึกข้อมูล
          </v-btn>
        </div>
      </form>
    </div>
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
import { User } from "@/store/user";

@Component({
  components: {},
  computed: {},
})
export default class Farm extends Vue {
  @Prop({ default: false })
  privateMode!: boolean;

  private farm: FarmForm | any = {};
  private form: BuffaloForm | any = {};
  private unEdit: boolean = true;
  private response: boolean = false;

  private sex: CoreForm[] | null = null;
  private color: CoreForm[] | null = null;
  private status: CoreForm[] | null = null;
  private froms: CoreForm[] | null = null;
  private gene: any[] | null = null;

  private publicMode: boolean = false;

  private async created() {
    await this.setChoices();
    await this.run();
  }

  private async setChoices() {
    this.sex = await Core.getChoice(`เพศควาย`);
    this.color = await Core.getChoice(`สีควาย`);
    this.status = await Core.getChoice(`สถานะควาย`);
    this.froms = await Core.getChoice(`แหล่งที่มาของควาย`);
    this.gene =  await Core.getHttp(`/user/buffalo/genes`)
  }

  private async run() {
    await App.onLoad();
    let buffalo = this.$route.query.id;
    // let profile = await Core.getHttp(`/api/profile/${user}/`)
    // this.farm = await Core.getHttp(`/user/buffalo/farm/${profile.user}/`)
    this.form = await Core.getHttp(`/user/buffalo/buffalo/${buffalo}/`);

    this.response = true;
    await App.offLoad();
  }

  @Watch("form.birthday")
  async onChangeDate(val: string) {
    this.form.age = moment().diff(val, "years", false);
    let month = (moment().diff(val, "months", false) - 12) / 12;
    this.form.age_month = Math.floor(month);
  }

  private async updateBuffalo() {
    delete this.form.back_image;
    delete this.form.front_image;
    let update = await Core.putHttp(
      `/user/buffalo/buffalo/${this.form.id}/`,
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

  get editMode() {
    return this.unEdit ? "border-success" : "border-edit";
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
