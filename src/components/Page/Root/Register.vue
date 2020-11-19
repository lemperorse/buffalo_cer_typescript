<template>
<div>
  <form class="sign-up-form forms"  v-if="step == 0">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>
    <img src="https://sv1.picz.in.th/images/2020/11/19/bvS1Pn.png" alt="">
    <div class="text-center mt-6" v-if="step == 0">
      <button @click="step = 1" :class="`${btn} bg-purple-600 f-white`" type="button">
        ดำเนินการต่อ
      </button>
    </div>

  </form>
  <form @submit.prevent="step = 2" class="sign-up-form forms"  v-if="step ==1">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">คำนำหน้า</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <select   required v-model="formProfile.prefix" :class="$xinput" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
          <option v-for="val,i in prefix" :key="i" :value="val.id">{{ val.value }}</option>
        </select>      </div>
    </div>
      <div class="relative w-full mb-3 ml-2">
        <label :class="$label" htmlFor="grid-password">ชื่อ</label>
        <div :class="$ininput">
           <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
          <input required v-model="formUser.first_name" type="text" :class="$input"  style="padding-left:40px;">
        </div>
      </div>


      <div class="relative w-full mb-3 ml-2">
        <label :class="$label" htmlFor="grid-password">สกุล</label>
        <div :class="$ininput">
          <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
          <input required v-model="formUser.last_name" type="text" :class="$input"  style="padding-left:40px;">
        </div>
      </div>

    <div class="text-center mt-6"  >
      <button   :class="`${btn} bg-purple-600 f-white`" type="submit">
        ดำเนินการต่อ
      </button>
    </div>

  </form>

  <form @submit.prevent="step = 3" class="sign-up-form forms"  v-if="step ==2">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">วันเกิด</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formProfile.birthday" type="date" :class="$input" style="padding-left:40px;">
      </div>
    </div>


    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">อายุ</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formProfile.age" type="text" :class="$input" style="padding-left:40px;" >
      </div>
    </div>

    <div class="text-center mt-6"  >
      <button   :class="`${btn} bg-purple-600 f-white`" type="submit">
        ดำเนินการต่อ
      </button>
    </div>

  </form>
  <form @submit.prevent="step = 4" class="sign-up-form forms"  v-if="step ==3">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">เลขบัตรประจำตัวประชาชน 13 หลัก</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formProfile.personal_id" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>
    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">เพศ</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <select   required v-model="formProfile.gender" :class="$xinput" class="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10">
          <option v-for="val,i in gender" :key="i" :value="val.id">{{ val.value }}</option>
        </select>      </div>
    </div>


    <div class="text-center mt-6"  >
      <button   :class="`${btn} bg-purple-600 f-white`" type="submit">
        ดำเนินการต่อ
      </button>
    </div>

  </form>
  <form @submit.prevent="step = 5" class="sign-up-form forms"  v-if="step ==4">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">บ้านเลขที่ หมู่ที่ </label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formProfile.address" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">หมู่บ้าน (ไม่บังคับ)</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input   v-model="formProfile.mooban" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">จังหวัด อำเภอ ตำบล</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input :disabled="(CityFrom)?true:false"  @click="openCityDialog"   required v-model="CityFrom" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">รหัสไปรศณีย์</label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formProfile.zipcode" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>

    <div class="text-center mt-6"  >
      <button   :class="`${btn} bg-purple-600 f-white`" type="submit">
        ดำเนินการต่อ
      </button>
    </div>

  </form>
  <form @submit.prevent="register()" class="sign-up-form forms"  v-if="step ==5">

    <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
    <div class="text-blue-500 text-center mb-3 font-bold">
      <h2 :class="headerClass">{{ header }}</h2>
    </div>

    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">ชื่อผู้ใช้ </label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formUser.username" type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>
    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">อีเมล์ (ไม่บังคับ) </label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input     type="text" :class="$input" style="padding-left:40px;">
      </div>
    </div>
    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">รหัสผ่าน </label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formUser.password" type="password" :class="$input" style="padding-left:40px;">
      </div>
    </div>
    <div class="relative w-full mb-3 ml-2">
      <label :class="$label" htmlFor="grid-password">ยืนยันรหัสผ่าน </label>
      <div :class="$ininput">
        <span :class="$iconinput"><i class="fas fa-users text-lg text-gray-500"></i></span>
        <input required v-model="formUser.password2" type="password" :class="$input" style="padding-left:40px;">
      </div>
    </div>

    <div class="text-center mt-6"  >
      <button   :class="`${btn} bg-green-600 f-white`" type="submit">
        ดำเนินการต่อ
      </button>
    </div>

  </form>

</div>
</template>

<script lang="ts">
import {
  Component,
  Vue, Watch,
} from 'vue-property-decorator';
import {Core} from "@/store/core";
import {City} from "@/store/city";
import {Auth} from "@/store/auth";
import {FormRegister, Profile, Province} from '@/models/core';
import CityDialog from '@/components/Dialog/City.vue';
import moment from 'moment';
import {App} from "@/store/app";
@Component({
  components: {CityDialog},
  computed: {}
})

export default class Home extends Vue {
  public step: number = 0
  private gender: [] = []
  private prefix: [] = []
  public formUser:FormRegister|any = {}
  public formProfile:Profile|any ={}

  @Watch('formProfile.birthday')
  async onChangeProvince(val: string) {
    this.formProfile.age = moment().diff(val, 'years', false);

  }
  async created() {
    this.gender = await Core.getChoice('เพศ')
    this.prefix = await Core.getChoice('คำนำหน้า')
  }

  async register() {
    this.formProfile.geo = City.currentGeo?.id
    this.formProfile.province = City.currentProvince?.id
    this.formProfile.amphur = City.currentAmphur?.id
    this.formProfile.district = City.currentDistrict?.id
    await Auth.register(this.formUser,this.formProfile)
    await App.success("สมัครสมาชิกสำเร็จ")
    await this.$router.go(-1)
  }



  async openCityDialog(){
    City.dialogCityState = true
  }

  get CityFrom(){
    return City.showName
  }
  get CityDialogLayout(){
    return City.dialogCityState
  }

  get headerClass() {
    return (this.step == 0) ? 'text-xs' : 'text-xl';
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

  btn: string = 'text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
  input: string = 'px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
}
</script>
<style>
  .f-white{
    color:white!important;
  }
</style>
