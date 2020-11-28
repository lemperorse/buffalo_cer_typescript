<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-6 py-6  ">
      <div class="text-center flex justify-between ">
        <h6 class="text-gray-800 text-xl font-bold">
          รายระเอียดควาย
        </h6>
        <div v-if="!privateMode">
          <button v-if="unEdit" @click="unEdit = !unEdit"
                  class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">
            <i class="fas fa-pencil-alt text-lg"></i> แก้ไข
          </button>
          <button v-if="!unEdit" @click="unEdit = !unEdit"
                  class="bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">
            <i class="fas fa-pencil-alt text-lg"></i> ยกเลิกการแก้ไข
          </button>
        </div>

      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updateBuffalo" v-if="response">
        <v-alert color="#F59E0B" type="info" outlined  v-if="!unEdit" >
          โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม <v-btn class="border-edit" x-small style="background-color:#eeeef3; color:#F59E0B;">ข้อความ</v-btn>
        </v-alert>
        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
          ข้อมูลทั่วไป
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                ชื่อหรือหมายเลขควาย
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                                <i class="em em-water_buffalo text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" required v-model="form.name" type="text" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                ราคา
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-money-bill-wave text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" v-model="form.price" type="number" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                หมายเลข NID
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-list-ol text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" v-model="form.nid" type="number" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                หมายเลขไมโครซิป
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-microchip text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" v-model="form.microship" type="number" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full">
            <hr class="mt-6 border-b-1 border-gray-400"/>
            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
              ข้อมูลลักษณะควาย
            </h6>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                วันเกิด
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-calendar-day text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" required v-model="form.birthday" type="date" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                อายุ(ปี)
              </label>
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-birthday-cake text-lg text-gray-500"></i>
                            </span>
                <input :disabled="unEdit" v-model="form.age" type="number" :class="`${$xinput} ${editMode}`"  value=" "
                       />
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                เพศ
              </label>
              <div class="relative">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-venus-mars text-lg text-gray-500"></i>
                            </span>
                <select :disabled="unEdit" v-model="form.gender" required :class="`${$xinput} ${editMode}`" 
                        >
                  <option v-for="val,i in sex" :key="i" :value="val.id">{{ val.value }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                สี
              </label>
              <div class="relative">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-palette text-lg text-gray-500"></i>
                            </span>
                <select :disabled="unEdit" v-model="form.color" required :class="`${$xinput} ${editMode}`" 
                        >
                  <option v-for="val,i in color" :key="i" :value="val.id">{{ val.value }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                สถานะ
              </label>
              <div class="relative">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-file-alt text-lg text-gray-500"></i>
                            </span>
                <select :disabled="unEdit" v-model="form.status" required :class="`${$xinput} ${editMode}`" 
                        >
                  <option v-for="val,i in status" :key="i" :value="val.id">{{ val.value }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                แหล่งที่มา
              </label>
              <div class="relative">
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-2">
                                <i class="fas fa-file-import text-lg text-gray-500"></i>
                            </span>
                <select :disabled="unEdit" v-model="form.froms" required :class="`${$xinput} ${editMode}`" 
                        >
                  <option v-for="val,i in froms" :key="i" :value="val.id">{{ val.value }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400"/>

        <div class="flex justify-center mt-6">
          <button v-if="!unEdit"
                  class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit">
            <i class="fas fa-save text-lg"></i> บันทึกข้อมูล
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
  Watch,Prop
} from 'vue-property-decorator';
import {
  Core
} from '@/store/core'

import moment from "moment";
import {FarmForm} from "@/models/farm";
import {BuffaloForm} from "@/models/buffalo";
import {CoreForm} from "@/models/core";
import {App} from "@/store/app";
import {User} from "@/store/user";

@Component({
  components: {},
  computed: {},


})

export default class Farm extends Vue {

  @Prop({default: false})
  privateMode!:boolean


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

  get editMode(){
    return (this.unEdit )?'border-success':'border-edit'
  }

}
</script>

<style>
.f-white {
  color: white !important;
}
</style>
