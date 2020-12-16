<template>
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16 animate__animated animate__bounceInUp animate__delay-1s">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <img ref="profileImage" alt="..." src="https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg" class="shadow-lg h-40 w-40 rounded-full align-middle border-none -mt-16 w-48 h-48" />
                    <div class="flex justify-center mt-4" v-if="response">
                        <input type="file" ref="profile" @change="profileChange" style="display:none;" />

                        <button @click="$refs.profile.click()" class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            อัพโหลดรูปภาพ
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-12" v-if="response">
            <h3 class="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                {{User.first_name}}&nbsp; {{User.last_name}}
            </h3>
            <div class="text-lg leading-normal mt-0 mb-2 text-gray-500 font-bold  ">
                <i class="fas fa-user mr-2 text-lg text-gray-500"></i>
                {{User.username}}
            </div>

            <div class="mb-2 text-purple-500 ">
                <i class="fas fa-envelope mr-2 text-lg text-purple-500"></i>
                {{User.email}}
            </div>
            <br><br>
            <!--        <div class="mb-2 text-gray-700">-->
            <!--          <i class="fas fa-university mr-2 mb-12 text-lg text-gray-500"></i>-->
            <!--          เบอร์โทรศัพท์ 0123456789-->
            <!--        </div>-->
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
import { App } from "@/store/app";

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
        let user = this.$route.query.farmer
        this.formProfile = await Core.getHttp(`/user/account/profile/image/${user}/`)
        if (this.formProfile.profile_image) {
            let profileImage: any = this.$refs.profileImage
            profileImage.src = this.formProfile.profile_image
        }

        await Auth.setUser(this.formProfile.user)
        this.response = true
    }

    async profileChange(event: any) {

        let file = await this.getBase64(event.target.files[0])

        let profileImage: any = this.$refs.profileImage
        profileImage.src = file
        this.formProfile.profile_image = file
        let data = await Core.putHttp(`/user/account/profile/image/${this.formProfile.id}/`, this.formProfile)
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
