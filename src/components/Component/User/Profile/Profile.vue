<template>
  <div class="rounded-full">
    <div class="bg-white mb-0 md:px-6 py-6">
      <div class="text-center flex flex-wrap justify-between">
        <h6 class="text-gray-800 text-xl font-bold">ข้อมูลเกษตกร</h6>
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
    <div class="flex-auto px-0 lg:px-10 py-10 pt-0">
      <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
        โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม
        <v-btn
          class="border-edit"
          x-small
          style="background-color: #eeeef3; color: #f59e0b"
          >ข้อความ</v-btn
        >
      </v-alert>
      <form @submit.prevent="update()">
        <h6 class="text-gray-500 md:px-4 text-sm mt-3 mb-6 font-bold uppercase">
          บัญชี
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              disabled
              required
              v-model="formUser.username"
              type="text"
              filled
              rounded
              dense
              label="ชื่อผู้ใช้งาน"
              id="id"
              prepend-inner-icon="fas fa-user"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              v-model="formUser.email"
              type="text"
              filled
              rounded
              dense
              label="อีเมล"
              id="id"
              placeholder="(ไม่บังคับ)"
              prepend-inner-icon="fas fa-envelope"
            ></v-text-field>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400 mx-4" />

        <h6 class="text-gray-500 text-sm mt-6 mb-6 md:px-4 font-bold uppercase">
          ข้อมูลส่วนตัว
        </h6>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 md:px-4">
            <v-select
              :disabled="unEdit"
              required
              :items="prefix"
              item-text="value"
              item-value="id"
              v-model="formProfile.prefix"
              filled
              rounded
              dense
              label="คำนำหน้า"
              prepend-inner-icon="fas fa-venus-mars"
            />
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formUser.first_name"
              type="text"
              filled
              rounded
              dense
              label="ชื่อ"
              id="id"
              prepend-inner-icon="fas fa-user"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formUser.last_name"
              type="text"
              filled
              rounded
              dense
              label="นามสกุล"
              id="id"
              prepend-inner-icon="fas fa-user"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              minlength="13"
              maxlength="13"
              required
              v-model="formProfile.personal_id"
              type="number"
              filled
              rounded
              dense
              label="รหัสบัตรประจำตัวประชาชน"
              prepend-inner-icon="far fa-address-card"
              onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.tel"
              type="text"
              filled
              rounded
              dense
              label="เบอร์โทร"
              id="id"
              prepend-inner-icon="fas fa-mobile-alt"
              onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-select
              :disabled="unEdit"
              required
              :items="gender"
              item-text="value"
              item-value="id"
              v-model="formProfile.gender"
              filled
              rounded
              dense
              label="เพศ"
              prepend-inner-icon="fas fa-venus-mars"
            />
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.birthday"
              type="date"
              filled
              rounded
              dense
              label="วันเกิด"
              id="id"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-4/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.age"
              type="number"
              filled
              rounded
              dense
              label="อายุ"
              id="id"
              prepend-inner-icon="fas fa-birthday-cake"
            ></v-text-field>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
        <h6 class="text-gray-500 text-sm mt-6 mb-6 md:px-4 font-bold uppercase">
          ที่อยู่
        </h6>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.address"
              type="text"
              filled
              rounded
              dense
              label="บ้านเลขที่"
              id="id"
              prepend-inner-icon="fas fa-user"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.mooban"
              type="text"
              filled
              rounded
              dense
              label="หมู่บ้าน"
              id="id"
              prepend-inner-icon="fas fa-home"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              :value="CityFrom"
              @click="openCityDialog"
              @focus="openCityDialog"
              type="text"
              filled
              rounded
              dense
              label="จังหวัด อำเภอ ตำบล"
              prepend-inner-icon="fas fa-globe-asia"
            />
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              :disabled="unEdit"
              required
              v-model="formProfile.zipcode"
              type="number"
              filled
              rounded
              dense
              label="รหัสไปรษณีย์"
              id="id"
              prepend-inner-icon="fas fa-paper-plane"
            ></v-text-field>
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
import { Component, Vue, Watch } from "vue-property-decorator";
import { Core } from "@/store/core";
import { Auth } from "@/store/auth";
import { User } from "@/store/user";

import { City } from "@/store/city";
import moment from "moment";
import { App } from "@/store/app";

@Component({
  components: {},
  computed: {},
})
export default class Profile extends Vue {
  private formUser: any = {};
  private formProfile: any = {};
  private prefix: any[] = [];
  private gender: any[] = [];
  private group: any[] = [];
  private currentFarmer: any = null;
  private unEdit: boolean = true;

  async created() {
    await this.collingPermission();
    await this.run();
  }

  async collingPermission() {
    let user = await User.getUser();
    let userAll = await Core.getHttp(`/api/account/${user.pk}/`);
    if (userAll.is_staff) {
      this.currentFarmer = this.$route.query.farmer;
    } else {
      let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`);
      this.currentFarmer = profile.id;
    }
  }

  async run() {
    await App.onLoad();
    this.prefix = await Core.getChoice("คำนำหน้า");
    this.gender = await Core.getChoice("เพศ");
    this.group = await Core.getChoice("กลุ่มเกษตรกร");
    this.formProfile = await Core.getHttp(
      `/api/profile/${this.currentFarmer}/`
    );
    this.formUser = await Core.getHttp(
      `/api/account/${this.formProfile.user}/`
    );
    await this.setCity();
    await App.offLoad();
  }

  @Watch("formProfile.birthday")
  async onChangeProvince(val: string) {
    this.formProfile.age = moment().diff(val, "years", false);
  }

  async setCity() {
    City.currentGeo = await Core.getHttp(
      `/user/account/geography/${this.formProfile.geo}/`
    );
    City.currentProvince = await Core.getHttp(
      `/user/account/province/${this.formProfile.province}/`
    );
    City.currentAmphur = await Core.getHttp(
      `/user/account/amphur/${this.formProfile.amphur}/`
    );
    City.currentDistrict = await Core.getHttp(
      `/user/account/district/${this.formProfile.district}/`
    );
    await City.setShowName();
  }

  async update() {
    this.formProfile.geo = City.currentGeo?.id;
    this.formProfile.province = City.currentProvince?.id;
    this.formProfile.amphur = City.currentAmphur?.id;
    this.formProfile.district = City.currentDistrict?.id;
    let profile = await Core.putHttp(
      `/api/profile/${this.currentFarmer}/`,
      this.formProfile
    );
    let user = await Core.putHttp(
      `/api/account/${this.formProfile.user}/`,
      this.formUser
    );

    if (user.id && profile.id) {
      this.unEdit = true;
      await App.success("แก้ไขข้อมูลสำเร็จ");
    } else {
      await App.error("เกิดข้อผิดพลาดในหารแก้ไขข้อมูล");
    }

    await this.run();
  }

  async openCityDialog() {
    City.dialogCityState = true;
  }

  get CityFrom() {
    return City.showName;
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
