<template>
<div class="flex flex-wrap">
    <div class="w-full">
        <ul class="flex flex-col mb-0 list-none flex-wrap pt-3 pb-4 md:flex-row animate__animated animate__bounceInUp animate__delay-1s">
            <li class="-mb-px last:mr-0 flex-auto text-center rounded-lg cursor-pointer md:m-2 pb-1 ">
                <a class="w-full text-base font-bold uppercase px-5 py-3 shadow rounded-full block leading-normal row wrap" v-on:click="toggleTabs(1)" v-bind:class="{'text-black bg-white': openTab !== 1, 'text-white  bg-yellow-500': openTab === 1}">
                    <img src="/assets/buffalo/buffalo.png" height="24px" width="24px" class="rounded-lg" alt="">
                    <span class="text-black pl-2">ข้อมูลควาย</span>
                </a>
            </li>
            <li class="-mb-px last:mr-0 flex-auto text-center rounded-lg cursor-pointer md:m-2 pb-1">
                <a class="w-full text-base font-bold uppercase px-5 py-3 shadow rounded-full block leading-normal row wrap" v-on:click="toggleTabs(2)" v-bind:class="{'text-black bg-white': openTab !== 2, 'text-white  bg-yellow-500': openTab === 2}">
                    <img src="/assets/farm/2826134-agriculture/png/065-plant.png" height="24px" width="24px" class="rounded-lg" alt="">
                    <span class="text-black pl-2">การเจริญเติบโต</span>
                </a>
            </li>
            <li class="-mb-px last:mr-0 flex-auto text-center rounded-lg cursor-pointer md:m-2 pb-1">
                <a class="w-full text-base font-bold uppercase px-5 py-3 shadow rounded-full block leading-normal row wrap" v-on:click="toggleTabs(3)" v-bind:class="{'text-black bg-white': openTab !== 3, 'text-white  bg-yellow-500': openTab === 3}">
                    <img src="/assets/farm/2826134-agriculture/png/076-award.png" height="24px" width="24px" class="rounded-lg" alt="">
                    <span class="text-black pl-2">ใบพันธุ์ประวัติ</span>
                </a>
            </li>
            <li class="-mb-px last:mr-0 flex-auto text-center rounded-lg cursor-pointer md:m-2 pb-1">
                <a class="w-full text-base font-bold uppercase px-5 py-3 shadow rounded-full block leading-normal row wrap" v-on:click="toggleTabs(4)" v-bind:class="{'text-black bg-white': openTab !== 4, 'text-white  bg-yellow-500': openTab === 4}">
                    <img src="/assets/farm/2826134-agriculture/png/068-phone.png" height="24px" width="24px" class="rounded-lg" alt="">
                    <span class="text-black pl-2">ตั้งค่า</span>
                </a>
            </li>
        </ul>

        <!-- <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg shadow-lg"> -->
            <v-card class="relative rounded-lg">
                <div class="px-4 py-5 flex-auto">
                    <div class="tab-content tab-space">
                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                            <TabBuffaloData class="animate__animated animate__zoomIn" v-if="openTab === 1" />
                        </div>

                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                            <TabBuffaloEvo class="animate__animated animate__zoomIn" v-if="openTab === 2" />
                        </div>

                        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                            <TabBuffaloCert class="animate__animated animate__zoomIn" v-if="openTab === 3" />
                        </div>

                        <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}" class="animate__animated animate__zoomIn">
                            <div class="rounded-lg-t bg-white mb-0 px-6 py-6">
                                <div class="text-center flex justify-between">
                                    <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>
                                </div>
                            </div>
                            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                        ลบข้อมูลควาย
                                    </h6>

                                    <div class="flex flex-wrap">
                                        <div class="w-full lg:w-6/12 px-4">
                                            <div class="relative w-full mb-3">
                                                <v-btn color="error" large depressed @click="deleteBuffalo()">
                                                    <v-icon left>
                                                        fas fa-eraser
                                                    </v-icon>
                                                    ลบข้อมูลควาย
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </v-card>
        <!-- </div> -->

    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
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
import {
    App
} from '@/store/app'

import TabBuffaloData from '@/components/Component/Core/Buffalo/TabBuffaloData.vue'
import TabBuffaloEvo from '@/components/Component/Core/Buffalo/TabBuffaloEvo.vue'
import TabBuffaloCert from '@/components/Component/Core/Buffalo/TabBuffaloCert.vue'
@Component({
    components: {
        TabBuffaloData,
        TabBuffaloEvo,
        TabBuffaloCert
    },
    computed: {},
    props: {
        color: {
            default: "light",
            validator: function (value) {
                // The value must match one of these strings
                return ["light", "dark"].indexOf(value) !== -1;
            },
        },
    }
})

export default class Table extends Vue {

    private openTab: number = 1
    private date: string | null = null
    private menu: boolean = false

    private async created() {
        await this.run()
    }
    toggleTabs(tabNumber: number) {
        this.openTab = tabNumber
    }

    private async run() {}

    async deleteBuffalo() {
        let checkDelete = await App.confirm('คุณแน่ใจใช่ไหม', 'ที่จะลบควายตัวนี้')
        if (checkDelete) {
            let buffalo = await Core.deleteHttp(`/user/buffalo/buffalo/${this.$route.query.id}/`)

            await App.success("ลบควายสำเร็จ")
            await this.$router.go(-1)

        }

    }

}
</script>

<style>
 .ho {
     transition: 0.8s;
 }

 .ho:hover {
     transform: scale(0.9, 0.9);
     box-shadow: 5px 5px 30px 15px rgba(224, 224, 224, 0.25),
         -5px -5px 30px 15px rgba(145, 145, 145, 0.22);
 }

 .bg1 {
     background-color: #333333;
     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b00dd'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
     background-attachment: fixed;
     background-size: cover;
 }
</style>
