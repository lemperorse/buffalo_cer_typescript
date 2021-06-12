<template>
<!-- <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s"> -->
<v-card class="relative mt-24 animate__animated animate__bounceInLeft animate__delay-1s rounded-lg">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <!-- {{formProfile.profile_image}} -->
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <img ref="profileImage" alt="..." src="https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg" class="shadow-xl h-40 w-40 rounded-full align-middle border-none -mt-16 w-48 h-48" />
                    <div class="flex justify-center mt-4" v-if="response">
                        <input type="file" ref="profile" @change="profileChange" style="display:none;" />
                        <v-btn class="bg2" dark @click="$refs.profile.click()" rounded depressed large>อัพโหลดรูปภาพ</v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-12" v-if="response">
            <h3 class="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                <i class="far fa-address-card mr-2 text-lg text-gray-500"></i> {{User.first_name}}&nbsp; {{User.last_name}}
            </h3>
            <br>
        </div>
    </div>
</v-card>
<!-- </div> -->
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
        this.run();
    }

    private async run() {
        let user = await User.getUser();
        console.log('[USER]', user)
        let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
        this.formProfile = await Core.getHttp(`/user/account/profile/image/${profile.id}/`)
        if (this.formProfile.profile_image) {
            let profileImage: any = this.$refs.profileImage
            profileImage.src = this.formProfile.profile_image
        }

        await Auth.setUser(user.pk)
        this.response = true
    }

    async profileChange(event: any) {
        let file = await this.getBase64(event.target.files[0])
        let profileImage: any = this.$refs.profileImage
        profileImage.src = file
        this.formProfile.profile_image = file
        let data = await Core.putHttp(`/user/account/profile/image/${this.formProfile.id}/`, this.formProfile)
        if (data.id) {
            alert("success")
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

    get User() {
        return Auth.user
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
