<template>
<div v-if="response" class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <img alt="..." src="https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg" class="shadow-xl rounded-full h-auto align-middle border-none -mt-16 w-48 h-48" />
                </div>
            </div>
        </div>
        <div class="text-center mt-12 mb-12">
            <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                <i class="far fa-address-card mr-2 text-lg text-gray-500"></i> {{user.first_name}} {{user.last_name}}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i class="fas fa-edit mr-2 text-lg text-gray-500"></i>
                แอดมิน
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';
import { Core } from '@/store/core'
import { Auth } from '@/store/auth'
import { User } from '@/store/user'
import {App} from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class Home extends Vue {
    private response: boolean = false
    private user: any = User.user

    private async created() {
        await User.loadUser()
        this.user = User.user
        this.response = true
    }


}
</script>
