<template>
<v-app>
    <div class="container mx-auto  h-full">
        <div class="flex content-center items-center justify-center  ">
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div v-if="!userExist" class="rounded-t mb-0 px-6 py-6">
                        <button class="bg-white shadow-xl rounded-full mb-2" @click="$router.go(-1)">
                            <v-icon class="icon">mdi-chevron-left</v-icon>
                        </button>
                        <div class="text-center mb-3 ">
                            <h2 class=" ">เปลี่ยนรหัสผ่านด้วยตนเอง</h2>
                        </div>

                        <form @submit.prevent="checkUser()">
                            <div class="text-blue-500 text-center mb-3 font-bold">
                                <div class="mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"></div>
                                <div class="w-full md:w-12/12 pt-2">
                                    <v-text-field v-model="form.personal_id" rounded filled type="text" required label="เลขบัตรประจำตัวประชาชน" ></v-text-field>
                                </div>
                                <div class="w-full md:w-12/12 pt-2">
                                    <v-text-field v-model="form.tel" rounded filled type="text" label="เบอร์โทรที่ใช้สมัครสมาชิก"></v-text-field>
                                </div>
                                <v-btn type="submit" color="indigo accent-4" rounded dark large class="w-full">เปลี่ยนรหัสผ่าน</v-btn>
                                <!-- <button :class="'f-white bg-blue-600 '+btn" type="submit">
                                    ตรวจสอบ
                                </button> -->
                            </div>
                        </form>
                    </div>

                    <div v-else class="rounded-t mb-0 px-6 py-6">
                        <button class="bg-white shadow-xl rounded-full mb-2" @click="$router.go(-1)">
                            <v-icon class="icon">mdi-chevron-left</v-icon>
                        </button>
                        <div class="text-center mb-3 ">
                            <h2 class=" ">เปลี่ยนรหัสผ่านด้วยตนเอง</h2>
                        </div>

                        <form @submit.prevent="changePassword()">
                            <div class="text-blue-500 text-center mb-3 font-bold">
                                <div class="mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"></div>
                                <div class="w-full md:w-12/12 pt-2">
                                    <v-text-field v-model="password" rounded filled type="password" label="รหัสผ่านใหม่"></v-text-field>
                                </div>
                                <div class="w-full md:w-12/12 pt-2">
                                    <v-text-field v-model="passwordConfirm" rounded filled type="password" label="ยืนยันรหัสผ่านใหม่"></v-text-field>
                                </div><br>
                                <v-btn type="submit" v-if="password != '' && passwordConfirm != '' && password == passwordConfirm" color="indigo accent-4">เปลี่ยนรหัสผ่าน</v-btn>
                            </div>
                        </form>
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
@Component({
    components: {},
    computed: {}
})

export default class Home extends Vue {
    private form: object = {
        "personal_id": null,
        "tel": ""
    }
    private userExist: boolean = false
    private password: string = ''
    private passwordConfirm: string = ''
    private user: any = {}
    private async checkUser() {
        let checked = await Core.postHttp(`/api/forgetpassword/`, this.form)
        if (checked.user) {
            this.userExist = true
            this.user = checked
        } else {
            alert('ไม่พบ user ');
        }
        console.log(checked);
    }

    private async changePassword() {
        let form = {
            user: this.user.user,
            password: this.password
        }
        let changePasswordUser = await Core.postHttp(`/user/account/changepassword/`, form)
        if (changePasswordUser) {
            alert('สำเร็จแล้ว')
            await this.$router.push('/')
        } else {
            alert('ไม่สามารถแก้ไขรหัสผ่านได้')
        }
    }

}
</script>

<style>

</style>
