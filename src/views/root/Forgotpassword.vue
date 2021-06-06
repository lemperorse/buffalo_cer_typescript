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
                            <h2 class="font-bold ">ลืมรหัสผ่าน</h2>
                        </div>
                        <div class="text-blue-500 text-center mb-3 font-bold">
                            <div class="mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"></div>
                            <p class="flex justify-center text-gray-600 pt-4 text-sm">กรุณาเลือกวิธีการเปลี่ยนรหัสผ่าน</p>
                        </div>
                        <div class="text-center mt-6">
                            <v-btn color="purple accent-4" rounded dark large depressed class="w-full" @click="$router.push('/re-password-admin')">ส่งคำขอไปที่ผู้ดูแลระบบ</v-btn>
                        </div>
                        <div class="text-center mt-6">
                            <v-btn color="purple accent-4" rounded dark large depressed class="w-full" @click="$router.push('/re-password-onyourown')">เปลี่ยนรหัสผ่านด้วยตนเอง</v-btn>
                        </div>

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
@Component({
    components: {},
    computed: {}
})

export default class Home extends Vue {

    btn: string = 'text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
    input: string = 'px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
}
</script>

<style>

</style>
