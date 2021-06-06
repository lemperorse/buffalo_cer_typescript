<template>
<v-app>
    <div class="container mx-auto  h-full">
        <div class="flex content-center items-center justify-center  ">
            <div class="w-full lg:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div class="rounded-t mb-0 px-6 py-6">
                        <button class="bg-white shadow-xl rounded-full mb-2" @click="$router.go(-1)">
                            <v-icon class="icon">mdi-chevron-left</v-icon>
                        </button>
                        <div class="text-center mb-3 ">
                            <h2 class=" ">ส่งคำขอไปที่ผู้ดูแลระบบ</h2>
                        </div>
                        <form @submit.prevent="calling()">
                            <div class="text-blue-500 text-center mb-3 font-bold">
                                <div class="mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"></div>
                                <div class="w-full md:w-12/12 pt-2">
                                    <v-text-field filled rounded required v-model="form.personal_id" label="หมายเลขบัตรประชาชน"></v-text-field>
                                </div>
                                <div class="w-full md:w-12/12 pt-2"> 
                                    <v-text-field filled rounded required v-model="form.tel" label="หมายเลขโทรศัพท์ที่ติดต่อกลับได้"></v-text-field>
                                </div><br>
                                <v-btn type="submit" dark rounded large color="blue accent-4" class="w-full">ส่งคำขอ</v-btn> 
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
import { Core } from "@/store/core";
import {
    Component,
    Vue,
    Watch,
} from 'vue-property-decorator';
@Component({
    components: {},
    computed: {}
})

export default class Home extends Vue {

    private form: any = {
        "personal_id": null,
        "tel": null,
        "status": false
    }

    private async calling() {
        let user = await Core.postHttp(`/user/account/forgetpassword/`, this.form)
        if (user) {
            alert('ส่งคำขอไปที่ผู้ดูแลระบบแล้ว')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
