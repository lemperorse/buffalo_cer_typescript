<template>
<div>
    <!-- <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s"> -->
    <v-card class="relative mt-24 rounded-lg animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img style="width:150px; height:150px;" ref="frontImage" src="assets/buffalo/buffalo.png" class="shadow-lg rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านหน้า</h2>
                            </center> 
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
    <!-- </div> --> 

    <!-- <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s"> -->
    <v-card class="relative mt-24 rounded-lg animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-6 ">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img ref="backImage" style="width:150px; height:150px;" src="assets/buffalo/buffalo.png" class="shadow-lg rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านข้าง</h2>
                            </center> 
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
    <!-- </div> -->
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
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

import moment from "moment";
import { FarmForm } from "@/models/farm";
import {App} from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class ImageClass extends Vue {
    api: any = process.env.VUE_APP_SERVER
    public formProfile: any = {}
    private response: boolean = false

    private async created() {
        await this.run();
    }

    private async run() {
        let buffalo = await Core.getHttp(`/user/buffalo/image/${this.$route.query.id}/`)
        if (buffalo.front_image) {
            let pathFront= this.api+buffalo.front_image
            let frontImage: any = this.$refs.frontImage
            frontImage.src = (this.imageExists(pathFront))?pathFront:'./assets/buffalo/buffalo.png'
        }
        if (buffalo.back_image) {
            let pathBack = this.api+buffalo.back_image
            let backImage: any = this.$refs.backImage
            backImage.src = (this.imageExists(pathBack))?pathBack:'./assets/buffalo/buffalo.png'
        }

        await Auth.setUser(this.formProfile.user)
        this.response = true
    }

    async frontChange(event: any) {
        let file = await Core.getBase64(event.target.files[0])
        let frontImage: any = this.$refs.frontImage
        frontImage.src = file
        let data = await Core.postHttp(`/user/buffalo/image/${this.$route.query.id}/`, { "front_image": file })
        if (data.id) {
          await App.success("อัพโหลดรูปภาพสำเร็จ")
        }
    }
    async backChange(event: any) {

        let file = await Core.getBase64(event.target.files[0])
        let backImage: any = this.$refs.backImage
        backImage.src = file
        let data = await Core.putHttp(`/user/buffalo/image/${this.$route.query.id}/`, { "back_image": file })
        if (data.id) {
          await App.success("อัพโหลดรูปภาพสำเร็จ")
        }
    }

    imageExists(image_url:any){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

}
</script>

<style scoped>
.f-white {
    color: white !important;
}
.bg2{
    background-color: #ff9d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
