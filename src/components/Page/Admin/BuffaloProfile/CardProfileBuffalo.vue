<template>
<div>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img style="width:150px; height:150px;" ref="frontImage" src="https://sv1.picz.in.th/images/2020/11/07/bjhzBy.png" class="shadow-xl rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านหน้า</h2>
                            </center> <br>
                            <input type="file" ref="front" @change="frontChange" style="display:none;" />
                            <button @click="$refs.front.click()" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                อัพโหลดรูปภาพ
                            </button> <br>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="mt-6 pb-6 border-b-1 border-gray-400 " />

    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div class="px-6 ">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="relative">
                        <img ref="backImage" style="width:150px; height:150px;" src="https://sv1.picz.in.th/images/2020/11/07/bjhzBy.png" class="shadow-xl rounded-full  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
                        <div class="flex flex-col justify-center  mt-4">
                            <center>
                                <h2 class="text-xl font-bold">ภายถ่ายด้านข้าง</h2>
                            </center> <br>
                            <input type="file" ref="back" @change="backChange" style="display:none;" />
                            <button @click="$refs.back.click()" class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
            alert("success")
        }
    }
    async backChange(event: any) {

        let file = await Core.getBase64(event.target.files[0])
        let backImage: any = this.$refs.backImage
        backImage.src = file
        let data = await Core.putHttp(`/user/buffalo/image/${this.$route.query.id}/`, { "back_image": file })
        if (data.id) {
            alert("success")
        }
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
