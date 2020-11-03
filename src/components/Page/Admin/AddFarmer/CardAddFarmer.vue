<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">เพิ่มเกษตกร</h6>
        <button
            @click="$router.go(-1)"
            class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
        >
          กลับไปหน้าข้อมูลเกษตรกร
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="register">
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          บัญชี
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                ชื่อผู้ใช้งาน
              </label>
              <input required v-model="formUser.username" type="text" :class="$xinput" value=" "/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                อีเมล์
              </label>
              <input   v-model="formUser.email" type="text" :class="$xinput" placeholder="(ไม่บังคับ)"/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                รหัสผ่าน
              </label>
              <input required v-model="formUser.password" type="password" :class="$xinput" value=""/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                ยืนยันรหัสผ่าน
              </label>
              <input required v-model="formUser.password2" type="password" :class="$xinput" value=""/>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400"/>

        <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
          ข้อมูลส่วนตัว
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-2/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                คำนำหน้า
              </label>
              <select required v-model="formProfile.prefix" :class="$xinput">
                <option v-for="val,i in prefix" :key="i" :value="val.id">{{ val.value }}</option>
              </select>
              <!--                  <input type="text" :class="$xinput" value=" " />-->
            </div>
          </div>
          <div class="w-full lg:w-5/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                ชื่อ
              </label>
              <input required v-model="formUser.first_name" type="text" :class="$xinput" value=" "/>
            </div>
          </div>

          <div class="w-full lg:w-5/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                นามสกุล
              </label>
              <input required v-model="formUser.last_name" type="text" :class="$xinput" value=" "/>
            </div>
          </div>
          <div class="w-full  px-4">
            <div class="relative w-full mb-3">
              <label v-model="formProfile.personal_id" class="block uppercase text-gray-700 text-xs font-bold mb-2">
                รหัสบัตรประจำตัวประชาชน
              </label>
              <input type="text" :class="$xinput"/>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                เพศ
              </label>
              <select required v-model="formProfile.gender" :class="$xinput">
                <option v-for="val,i in gender" :key="i" :value="val.id">{{ val.value }}</option>
              </select>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                วันเกิด
              </label>
              <input required v-model="formProfile.birthday" type="date" :class="$xinput" value=" "/>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                อายุ
              </label>
              <input disabled v-model="formProfile.age" type="text" :class="$xinput" value=" "/>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                กลุ่มเกษตกร
              </label>
              <select required v-model="formProfile.group" :class="$xinput">
                <option v-for="val,i in group" :key="i" :value="val.id">{{ val.value }}</option>
              </select>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                บ้านเลขที่
              </label>
              <input required v-model="formProfile.address" type="text" :class="$xinput" value=" "/>
            </div>
          </div>

          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                หมู่บ้าน
              </label>
              <input required v-model="formProfile.mooban" type="text" :class="$xinput" value=" "/>
            </div>
          </div>



          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3" @click="openCityDialog ">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                จังหวัด อำเภอ ตำบล
              </label>
              <input required :value="CityFrom" @click="openCityDialog " type="text" :class="$xinput" disabled/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label v-model="formProfile.zipcode" class="block uppercase text-gray-700 text-xs font-bold mb-2">
                รหัสไปรษณีย์
              </label>
              <input required type="text" :class="$xinput" value=" "/>
            </div>
          </div>

        </div>

        <div class="flex justify-center mt-6">
          <button
              class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit">
            บันทึกข้อมูล
          </button>
        </div>

      </form>

    </div>

  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue, Watch,
} from 'vue-property-decorator';
import {
  Core
} from '@/store/core'
import {
  Auth
} from '@/store/auth'
import {
  User
} from '@/store/user'

import {
  City
} from "@/store/city";
import moment from "moment";

@Component({
  components: {},
  computed: {}
})

export default class Home extends Vue {
  private formUser: any = {}
  private formProfile: any = {}
  private prefix: any[] = []
  private gender: any[] = []
  private group: any[] = []
  async created() {
    await this.run()
  }

  async run() {
    this.prefix = await Core.getChoice('คำนำหน้า')
    this.gender = await Core.getChoice('เพศ')
    this.group = await Core.getChoice('กลุ่มเกษตรกร')
  }

  @Watch('formProfile.birthday')
  async onChangeProvince(val: string) {
    this.formProfile.age = moment().diff(val, 'years', false);

  }

  async register() {
    this.formProfile.geo = City.currentGeo?.id
    this.formProfile.province = City.currentProvince?.id
    this.formProfile.amphur = City.currentAmphur?.id
    this.formProfile.district = City.currentDistrict?.id
    let user = await Auth.register(this.formUser,this.formProfile)
    if(user.id){
          alert('Success')
          this.formUser = {}
          this.formProfile = {}
    }else{
      alert('Error')
    }
  }


  async openCityDialog() {
    City.dialogCityState = true
  }

  get CityFrom() {
    return City.showName
  }

}
</script>

<style>
.f-white {
  color: white !important;
}
</style>
