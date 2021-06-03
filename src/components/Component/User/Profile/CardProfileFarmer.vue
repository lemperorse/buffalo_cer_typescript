<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInLeft animate__delay-1s">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <img ref="profileImage" alt="..." src="https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg" class="shadow-xl h-40 w-40 rounded-full align-middle border-none -mt-16 w-48 h-48" />
                    <div class="flex justify-center mt-4" v-if="response">
                        <input type="file" ref="profile" @change="profileChange" style="display:none;" />
                        <v-btn color="primary" @click="$refs.front.click()" rounded depressed large>อัพโหลดรูปภาพ</v-btn>

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

<style>
.f-white {
    color: white !important;
}
</style>
