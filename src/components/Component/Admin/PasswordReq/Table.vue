<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">

    <!-- table -->
    <div class="block w-full overflow-x-auto">
        <v-tabs>
            <v-tab>คำขอรหัสผ่าน</v-tab>
            <v-tab-item>
                <div class="p-4">
                    <table class="border-collapse w-full">
                        <thead>
                            <tr>
                                <th :class="th">ผู้ใช้ที่ร้องขอ</th>
                                <th :class="th">รหัสบัตรประจำจัวประชาชน</th>
                                <th :class="th">เบอร์โทร</th>
                                <th :class="th">ร้องขอเวลา</th>
                                <th :class="th">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="tr" v-for="item,indexIn in resuestIn.results" :key="indexIn">
                                <td :class="td">
                                    <div v-if="item.user">{{item.user.first_name}} {{item.user.last_name}}</div>
                                    <div v-else>ไม่พบผู้ใช้</div>
                                </td>
                                <td :class="td">{{item.personal_id}}</td>
                                <td :class="td">{{item.tel}}</td>
                                <td :class="td">{{convert(item.created_at)}}</td>
                                <td :class="td">
                                    <div class="flex flex-wrap">
                                        <button @click="$router.push(`/admin/farmerprofile?farmer=${item.user.id}`)" v-if="item.user" :class="`${$btn}  bg-blue-600`"> ไปที่ผู้ใช้คนนี้</button>
                                        <button @click="changeState(item.id)" :class="`${$btn}  bg-orange-600`"> ทำเครื่องหมายว่าแก้ไขแล้ว</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </v-tab-item>
            <v-tab>แก้ไขแล้ว</v-tab>
            <v-tab-item>
                <div class="p-4">
                    <table class="border-collapse w-full">
                        <thead>
                            <tr>
                                <th :class="th">ผู้ใช้ที่ร้องขอ</th>
                                <th :class="th">รหัสบัตรประจำจัวประชาชน</th>
                                <th :class="th">เบอร์โทร</th>
                                <th :class="th">ร้องขอเวลา</th>
                                <th :class="th">แก้ไขเมื่อ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="tr" v-for="item,indexIn in resuestOut.results" :key="indexIn">
                                <td :class="td">
                                    <div v-if="item.user">{{item.user.first_name}} {{item.user.last_name}}</div>
                                    <div v-else>ไม่พบผู้ใช้</div>
                                </td>
                                <td :class="td">{{item.personal_id}}</td>
                                <td :class="td">{{item.tel}}</td>
                                <td :class="td">{{convert(item.created_at)}}</td>
                                <td :class="td">{{convert(item.updated_at)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </v-tab-item>
        </v-tabs>
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

import moment from "moment";
import { App } from "@/store/app";

@Component({
    components: {},
    computed: {}
})

export default class PasswordRequest extends Vue {

    public formProfile: any = {}
    private response: boolean = false
    private resuestIn: any = null
    private resuestOut: any = null
    private async created() {
        await this.run();
    }

    convert(date: string) {
        return moment(date).format('DD/MM/YYYY hh:mm:ss');
    }

    private async changeState(id: number) {
        let check = await App.confirm('แน่ใจใช่ไหม', 'รายการนี้จะย้ายไปอยู่ที่แท็บแก้ไขแล้ว')
        if (check) {
            let raw = await Core.getHttp(`/api/forgot/${id}/`)
            raw.status = true
            let change = await Core.putHttp(`/api/forgot/${id}/`, raw)
            if (change) {
                await App.success('สำเร็จแล้ว')
            }
            await this.run();
        }

    }

    private async run() {
        this.resuestIn = await Core.getHttp(`/api/forgot/?status=false`)
        this.resuestOut = await Core.getHttp(`/api/forgot/?status=true`)
        this.response = true

    }

    th: string = 'p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell'
    tr: string = '"bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'
    td: string = 'w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static'
}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
