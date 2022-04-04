<template>
<v-app>
    <div class="container mx-auto  h-full">
        <div class="flex content-center items-center justify-center  ">
            <div class="w-full lg:w-8/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6     ">
                    <div class="rounded-t mb-0 px-6 py-6">

                        <div class="text-center mb-3 ">
                            <h2 class="font-bold text-xl">สมัครสมาชิก พันธุ์ประวัติควายไทย</h2>
                        </div>
                        <div class="text-blue-500 text-center mb-3 font-bold">
                            <h2 :class="headerClass">{{ header }}</h2>

                        </div>
                        <hr class="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">

                        <div class="text-center mt-6" v-if="step == 0">
                            <button @click="step = 1" :class="`${btn} bg-purple-600 text-white rounded-full`" type="button">
                                ดำเนินการต่อ
                            </button>
                        </div>
                        <!--------------------------------------------STEP 1 Name Surname------------------------------------------------------------------>
                        <div class="text-center mt-6" v-if="step == 1">
                            <form @submit.prevent="step=2">
                                <div class="flex md:flex-row  flex-col">
                                    <div class="w-full md:w-5/12  p-2 ">
                                        <v-select v-model="formProfile.prefix" :items="prefix" item-text="value" item-value="id" required :rules="[v => !!v || 'ต้องระบุ']" :label="prefix[0].name" filled rounded></v-select>
                                    </div>
                                    <div class="w-full md:w-6/12  p-2   ">
                                        <v-text-field v-model="formUser.first_name" required :rules="[v => !!v || 'ต้องระบุ']" filled rounded label="ชื่อ"></v-text-field>
                                    </div>
                                    <div class="w-full md:w-6/12 p-2   ">
                                        <v-text-field v-model="formUser.last_name" required :rules="[v => !!v || 'ต้องระบุ']" filled rounded label="สกุล"></v-text-field>
                                    </div>
                                </div>
                                <button type="submit" :class="'bg-blue-600 '+btn">
                                    ดำเนินการต่อ
                                </button>
                            </form>
                        </div>
                        <!--------------------------------------------STEP 2  ------------------------------------------------------------------>
                        <div class="" v-if="step==2">
                            <center>
                                <v-date-picker v-model="formProfile.birthday" class="mt-4"></v-date-picker>
                                <v-text-field class="mt-4" v-model="formProfile.age" required solo label="อายุ"></v-text-field>

                            </center>
                            <button @click="step=3" :class="'bg-blue-600  '+btn">
                                ดำเนินการต่อ
                            </button>
                        </div>
                        <!--------------------------------------------STEP 3 ------------------------------------------------------------------>
                        <div class="" v-if="step==3">
                            <v-select v-model="formProfile.gender" :items="gender" item-text="value" item-value="id" required :rules="[v => !!v || 'ต้องระบุ']" :label="gender[0].name" solo></v-select>

                            <button @click="step=4" :class="'bg-blue-600 '+btn">
                                ดำเนินการต่อ
                            </button>
                        </div>

                        <!--------------------------------------------STEP 3 ------------------------------------------------------------------>
                        <div class="" v-if="step==4">
                            <form @submit.prevent="step=5">
                                <v-text-field v-model="formProfile.personal_id" required label="เลขบัตรประจำตัวประชาชน 13 หลัก" solo></v-text-field>
                                <v-text-field v-model="formProfile.address" required label="บ้านเลขที่ หมู่ที่ " solo></v-text-field>
                                <v-text-field v-model="formProfile.mooban" label="หมู่บ้าน (ไม่บังคับ)" solo></v-text-field>
                                <v-text-field required :readonly="(CityFrom)?true:false" solo v-model="CityFrom" @click="openCityDialog" label="จังหวัด อำเภอ ตำบล"></v-text-field>
                                <v-text-field v-model="formProfile.zipcode" required label="รหัสไปรษณีย์"   type="number" solo></v-text-field>
                                <button type="submit" :class="'bg-blue-600 '+btn">
                                    ดำเนินการต่อ
                                </button>
                            </form>
                        </div>

                        <!--------------------------------------------STEP 5 ------------------------------------------------------------------>
                        <div class="" v-if="step==5">
                            <form @submit.prevent="register()">
                                <v-text-field v-model="formUser.username" required label="ชื่อผู้ใช้" solo></v-text-field>
                                <v-text-field label="อีเมล (ไม่บังคับ)" solo></v-text-field>
                                <v-text-field v-model="formUser.password" type="password" required label="รหัสผ่าน" solo></v-text-field>
                                <v-text-field v-model="formUser.password2" type="password" required label="ยืนยันรหัสผ่าน" solo></v-text-field>
                                <button type="submit" :class="'bg-blue-600 '+btn">
                                    สมัครสมาชิก
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    <CityDialog />
</v-app>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
} from 'vue-property-decorator';
import { Core } from "@/store/core";
import { City } from "@/store/city";
import { Auth } from "@/store/auth";
import { FormRegister, Profile, Province } from '@/models/core';
import CityDialog from '@/components/Dialog/City.vue';
import moment from 'moment';
import { App } from "@/store/app";
@Component({
    components: { CityDialog },
    computed: {}
})

export default class Home extends Vue {
    public step: number = 0
    private gender: [] = []
    private prefix: [] = []
    public formUser: FormRegister | any = {}
    public formProfile: Profile | any = {}

    @Watch('formProfile.birthday')
    async onChangeProvince(val: string) {
        this.formProfile.age = moment().diff(val, 'years', false);

    }
    async created() {
        this.gender = await Core.getChoice('เพศ')
        this.prefix = await Core.getChoice('คำนำหน้า')
    }

    async register() {
        this.formProfile.geo = City.currentGeo ?.id
        this.formProfile.province = City.currentProvince ?.id
        this.formProfile.amphur = City.currentAmphur ?.id
        this.formProfile.district = City.currentDistrict ?.id
        let user = await Auth.register(this.formUser, this.formProfile,'19.01,99.44')
        if(user.id){
            alert(user.id);
            await App.success("สมัครสมาชิกสำเร็จ")
           // await this.$router.go(-1)
        }else{
            await App.error('ไม่สามารถสมัครสมาชิกได้ '+JSON.stringify(user));
        }
    
    }

    async openCityDialog() {
        City.dialogCityState = true
    }

    get CityFrom() {
        return City.showName
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
                return "คุณเพศอะไร";
            case 4:
                return "โปรดระบุข้อมูลส่วนตัว และช่องทางการติดต่อของคุณ";
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

</style>
