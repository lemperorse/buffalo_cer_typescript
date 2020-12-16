<template>
<div>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img style="width:150px; height:150px;" ref="frontImage" src="https://sv1.picz.in.th/images/2020/11/07/bjhzBy.png" class="shadow-lg rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านหน้า</h2>
                            </center> <br>
                            <input type="file" ref="front" @change="frontChange" style="display:none;" />
                            <button @click="$refs.front.click()" class="f-white rounded p-2 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                                อัพโหลดรูปภาพ
                            </button> <br>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="mt-6 pb-6 border-b-1 border-gray-400 animate__animated animate__bounceInLeft animate__delay-1s" />

    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-6 ">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img ref="backImage" style="width:150px; height:150px;" src="https://sv1.picz.in.th/images/2020/11/07/bjhzBy.png" class="shadow-lg rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านข้าง</h2>
                            </center> <br>
                            <input type="file" ref="back" @change="backChange" style="display:none;" />
                            <button @click="$refs.back.click()" class="f-white rounded p-2 bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="button">
                                อัพโหลดรูปภาพ
                            </button> <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

    public formProfile: any = {}
    private response: boolean = false

    private async created() {
        await this.run();
    }

    private async run() {
        let buffalo = await Core.getHttp(`/user/buffalo/image/${this.$route.query.id}/`)
        if (buffalo.front_image) {
            let frontImage: any = this.$refs.frontImage
            frontImage.src = buffalo.front_image
        }
        if (buffalo.back_image) {
            let backImage: any = this.$refs.backImage
            backImage.src = buffalo.back_image
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

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
