<template>
<div>
    <div class="rounded-t bg-white mb-0 px-2 md:px-6 py-6">
        <div class="text-center flex flex-wrap justify-between">
            <h6 class="text-gray-800 text-xl font-bold">รูปภาพ</h6> 
        </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
        <form>
            <h6 class="text-gray-500 text-sm mt-3 mb-6 mx-4 font-bold uppercase">
                ภาพถ่ายบัตรประชาชน
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative flex justify-center w-full">
                        <img ref="personalImage" class="w-128 h-48" src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                    </div>
                    <div class="flex justify-center mt-4">
                        <input type="file" ref="personal" @change="personalChange">
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 mx-4 font-bold uppercase">
                ภาพถ่ายฟาร์ม
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative flex justify-center w-full">
                        <img ref="farmImage" id="farmImage" class="w-128 h-48" src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    </div>
                    <div class="flex justify-center mt-6">
                        <input type="file" ref="farm" @change="farmChange">
                    </div>
                </div>
            </div>

        </form>
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
import { App } from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class ImageClass extends Vue {
    public form: FarmForm | any = {}
    public formProfile: any = {}
    private currentFarmer: any = null
  api: any = process.env.VUE_APP_SERVER
    private async created() {
        await this.collingPermission()
        await this.run();
    }

    async collingPermission() {
        let user = await User.getUser();
        let userAll = await Core.getHttp(`/api/account/${user.pk}/`)
        if (userAll.is_staff) {
            this.currentFarmer = this.$route.query.farmer
        } else {
            let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
            this.currentFarmer = profile.id
        }
    }

    private async run() {
        await App.onLoad()
        this.formProfile = await Core.getHttp(`/user/account/personal/image/${this.currentFarmer}/`)
        this.form = await Core.getHttp(`/user/buffalo/farm/image/${this.formProfile.user}/`)
        if (this.formProfile.presonal_image) {
            let personalImage: any = this.$refs.personalImage
            personalImage.src = this.api+ this.formProfile.presonal_image
        }

        if (this.form.farm_image) {
            let farmImage: any = this.$refs.farmImage
            farmImage.src = this.api+  this.form.farm_image
        }
        await App.offLoad();
    }

    async farmChange(event: any) {
        console.log(event.target.files)
        let file = await this.getBase64(event.target.files[0])
        let farmImage: any = this.$refs.farmImage
        farmImage.src = file
        this.form.farm_image = file
        let data = await Core.putHttp(`/user/buffalo/farm/image/${this.form.id}/`, this.form)
        if (data.id) {
            await App.success("อัพโหลดรูปภาพสำเร็จ")
        }
    }

    async personalChange(event: any) {
        console.log(event.target.files)
        let file = await this.getBase64(event.target.files[0])
        let personalImage: any = this.$refs.personalImage
        personalImage.src = file
        this.formProfile.presonal_image = file
        let data = await Core.putHttp(`/user/account/personal/image/${this.formProfile.id}/`, this.formProfile)
        if (data.id) {
            await App.success("อัพโหลดรูปภาพสำเร็จ")
        }
    }

    async getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
