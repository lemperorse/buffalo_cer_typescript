<template>
  <div class="flex flex-col h-full justify-center items-center -mt-64 md:mt-0">
    <form class="sign-up-form forms" v-if="step == 0">
      <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>
      <img src="https://sv1.picz.in.th/images/2020/11/19/bvS1Pn.png" alt="" />
      <div class="text-center mt-6" v-if="step == 0">
        <v-btn large @click="step = 1" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>
    <form
      @submit.prevent="step = 2"
      class="sign-up-form forms"
      v-if="step == 1"
    >
      <h2 class="font-bold text-md">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>
      <div class="relative w-full ml-2">
        <v-select
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
      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formUser.first_name"
          filled
          rounded
          name="name"
          label="ชื่อ"
          id="id"
          prepend-inner-icon="fas fa-users"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formUser.last_name"
          filled
          rounded
          name="name"
          label="สกุล"
          id="id"
          prepend-inner-icon="fas fa-users"
        ></v-text-field>
      </div>

      <div class="text-center mt-6">
        <v-btn
          outlined
          class="mr-2"
          large
          @click="step = step - 1"
          rounded
          color="purple darken-3"
          dark
          >ย้อนกลับ</v-btn
        >
        <v-btn large type="submit" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>

    <form
      @submit.prevent="step = 3"
      class="sign-up-form forms"
      v-if="step == 2"
    >
      <h2 class="font-bold text-md">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          v-model="formProfile.birthday"
          filled
          rounded
          type="date"
          name="name"
          label="วันเกิด"
          id="id"
          prepend-inner-icon="fas fa-calendar"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          v-model="formProfile.age"
          filled
          rounded
          type="number"
          name="name"
          label="อายุ"
          id="id"
          prepend-inner-icon="fas fa-calendar-day"
        ></v-text-field>
      </div>

      <div class="text-center mt-6">
        <v-btn
          outlined
          class="mr-2"
          large
          @click="step = step - 1"
          rounded
          color="purple darken-3"
          dark
          >ย้อนกลับ</v-btn
        >
        <v-btn large type="submit" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>
    <form
      @submit.prevent="step = 4"
      class="sign-up-form forms"
      v-if="step == 3"
    >
      <h2 class="font-bold text-md">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          v-model="formProfile.personal_id"
          filled
          rounded
          type="text"
          onkeypress="return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)))"
          id="username"
          name="username"
          minlength="13"
          maxlength="13"
          label="เลขบัตรประจำตัวประชาชน 13 หลัก (ไม่บังคับ)"
          prepend-inner-icon="fas fa-users"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-select
          :items="gender"
          item-text="value"
          item-value="id"
          v-model="formProfile.gender"
          filled
          rounded
          dense
          label="เพศ (ไม่บังคับ)"
          prepend-inner-icon="fas fa-venus-mars"
        />
      </div>

      <div class="text-center mt-6">
        <v-btn
          outlined
          class="mr-2"
          large
          @click="step = step - 1"
          rounded
          color="purple darken-3"
          dark
          >ย้อนกลับ</v-btn
        >
        <v-btn large type="submit" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>
    <form
      @submit.prevent="step = 5"
      class="sign-up-form forms"
      v-if="step == 4"
    >
      <h2 class="font-bold text-md">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formProfile.address"
          filled
          rounded
          name="name"
          label="บ้านเลขที่"
          id="id"
          prepend-inner-icon="fas fa-home"
        ></v-text-field>
      </div>
      <div class="relative w-full ml-2">
        <v-text-field
          v-model="location"
          filled
          rounded
          name="name"
          label="พิกัดฟาร์ม (ไม่บังคับ)"
          id="id"
          prepend-inner-icon="fas fa-home"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formProfile.mooban"
          filled
          rounded
          name="name"
          label="หมู่บ้าน, หมู่ที่  "
          id="id"
          prepend-inner-icon="fas fa-home"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          required
          @click="openCityDialog"
          v-model="CityFrom"
          type="text"
          filled
          rounded
          name="name"
          label="จังหวัด อำเภอ ตำบล"
          id="id"
          prepend-inner-icon="fas fa-hotel"
        ></v-text-field>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          v-model="formProfile.zipcode"
          type="number"
          filled
          rounded
          name="name"
          label="รหัสไปรษณีย์"
          id="id"
          prepend-inner-icon="fas fa-mail-bulk"
        ></v-text-field>
      </div>

      <div class="text-center">
        <v-btn
          outlined
          class="mr-2"
          large
          @click="step = step - 1"
          rounded
          color="purple darken-3"
          dark
          >ย้อนกลับ</v-btn
        >
        <v-btn large type="submit" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>
    <form
      @submit.prevent="register()"
      class="sign-up-form forms"
      v-if="step == 5"
    >
      <h2 class="font-bold text-md">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
      <div class="text-blue-500 text-center mb-3 font-bold">
        <h2 :class="headerClass">{{ header }}</h2>
      </div>

      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formUser.username"
          type="text"
          filled
          rounded
          name="name"
          label="ชื่อผู้ใช้"
          id="id"
          prepend-inner-icon="fas fa-users"
        ></v-text-field>
      </div>
      <div class="relative w-full ml-2">
        <v-text-field
          type="text"
          v-model="formUser.email"
          filled
          rounded
          name="name"
          label="อีเมล์ (ไม่บังคับ)"
          id="id"
          prepend-inner-icon="fas fa-at"
        ></v-text-field>
      </div>
      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formUser.password"
          type="password"
          filled
          rounded
          name="name"
          label="รหัสผ่าน"
          id="id"
          prepend-inner-icon="fas fa-key"
        ></v-text-field>
      </div>
      <div class="relative w-full ml-2">
        <v-text-field
          required
          v-model="formUser.password2"
          type="password"
          filled
          rounded
          name="name"
          label="ยืนยันรหัสผ่าน"
          id="id"
          prepend-inner-icon="fas fa-key"
        ></v-text-field>
      </div>

      <div class="text-center mt-6">
        <v-btn
          outlined
          class="mr-2"
          large
          @click="step = step - 1"
          rounded
          color="purple darken-3"
          dark
          >ย้อนกลับ</v-btn
        >
        <v-btn large type="submit" rounded color="purple darken-3" dark
          >ดำเนินการต่อ</v-btn
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Core } from "@/store/core";
import { City } from "@/store/city";
import { Auth } from "@/store/auth";
import { FormRegister, Profile, Province } from "@/models/core";
import CityDialog from "@/components/Dialog/City.vue";
import moment from "moment";
import { App } from "@/store/app";
import { User } from "@/store/user";
@Component({
  components: { CityDialog },
  computed: {},
})
export default class Home extends Vue {
  public step: number = 0;
  private gender: [] = [];
  private prefix: [] = [];
  public formUser: FormRegister | any = {};
  public formProfile: Profile | any = {};
  public location: any = "19.0290389,99.8906438";

  @Watch("formProfile.birthday")
  async onChangeProvince(val: string) {
    this.formProfile.age = moment().diff(val, "years", false);
  }
  async created() {
    await this.getLocation();
    this.gender = await Core.getChoice("เพศ");
    this.prefix = await Core.getChoice("คำนำหน้า");
  }

  async getLocation() {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((location: any) => {
        this.location = `${location.coords.latitude},${location.coords.longitude}`;
      });
    }
  }

  async register() {
    this.formProfile.geo = City.currentGeo?.id;
    this.formProfile.province = City.currentProvince?.id;
    this.formProfile.amphur = City.currentAmphur?.id;
    this.formProfile.district = City.currentDistrict?.id;
    this.formProfile.birthday = this.formProfile.birthday
      ? this.formProfile.birthday
      : "2021-06-06";
    this.formProfile.age = this.formProfile.age ? this.formProfile.age : 25;
    let user = await Auth.register(
      this.formUser,
      this.formProfile,
      this.location
    );
    if (user.id) {
      await App.success("สมัครสมาชิกสำเร็จ");
      await this.login();
      await this.$router.go(-1);
    } else {
      let errorText = JSON.stringify(user["username"])
        ? JSON.stringify(user["username"][0])
        : JSON.stringify(user.password);
      await App.error("ไม่สามารถสมัครสมาชิกได้ " + errorText);
    }
  }

  private async login() {
    await Auth.removeToken();
    let user: any = await Core.postHttp("/api/rest-auth/login/", this.formUser);
    if (user?.key) {
      await Auth.storeToken(user.key);
      await Auth.storeTokenToStorage(user.key);
      await User.loadUser();
      await this.$router.replace(User.routeUser);
    } else {
      await App.error("เข้าสู่ระบบล้มเหลว กรุณาตรวจสอบข้อมูลให้ถูกต้อง");
    }
  }

  async openCityDialog() {
    City.dialogCityState = true;
  }

  get CityFrom() {
    return City.showName;
  }
  get CityDialogLayout() {
    return City.dialogCityState;
  }

  get headerClass() {
    return this.step == 0 ? "text-xs" : "text-xl";
  }

  get header() {
    switch (this.step) {
      case 0:
        return "สร้างบัญด้วยขั้นตอนง่ายๆ เพียงไม่กี่ขั้นตอน";
      case 1:
        return "โปรดระบุชื่อของคุณ";
      case 2:
        return "วันเกิดของคุณคือวันที่เท่าไร";
      case 3:
        return "โปรดระบุข้อมูลส่วนตัว";
      case 4:
        return "ช่องทางการติดต่อของคุณ";
      case 5:
        return "โปรดระบุข้อมูลที่จะเข้าสู่ระบบ";
      default:
        console.log("No such day exists!");
        break;
    }
  }

  btn: string =
    "text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
  input: string =
    "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150";
}
</script>

<style>
.f-white {
  color: white !important;
}
</style>
