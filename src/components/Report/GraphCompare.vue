<template>
<div v-if="response">
    <div class="flex flex-wrap mt-4">
        <div class="w-full lg:w-6/12 md:px-4">
            <div class="flex flex-wrap">
                <div class="mt-4 lg:w-9/12 md:px-4">
                    <v-autocomplete @change="changeMyBuffalo()" v-if="myBuffalos" :items="myBuffalos" :item-value="'id'" item-text="name" label="เลือกควายของท่าน" v-model="mySelect" outlined></v-autocomplete>
                </div>
                <div>
                    <apexchart type="bar" height="430" :options="myChartOptions" :series="mySeries"></apexchart>
                </div>
            </div>

        </div>
        <div class="w-full lg:w-6/12 md:px-4 ">
            <div class="flex flex-wrap">
                <div class="mt-4 lg:w-6/12 md:px-4">
                    <v-autocomplete v-if="themFarm" :items="themFarm" :item-value="'id'" item-text="name" label="เลือกฟาร์ม" v-model="themSelectFarm" outlined></v-autocomplete>
                </div>
                <div class="mt-4 lg:w-6/12 md:px-4">
                    <v-autocomplete v-if="themFarm" :items="themFarm" :item-value="'id'" item-text="name" label="เลือกควาย" v-model="themSelectFarm" outlined></v-autocomplete>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import _ from 'lodash'
import {
    Core
} from '@/store/core'
import {
    User
} from '@/store/user'
export default {
    data: () => ({
        user: {},
        farm: User.farm,
        response: false,

        /////// yourself ///////
        mySelect: [],
        myBuffalos: null,
        myBuffaloWeight: [],
        myBuffaloWidth: [],
        myBuffaloLength: [],
        myBuffaloHeight: [],
        myBuffaloEach: [],

        mySeries: [{
            name: "น้ำหนัก",
            data: [0, 0, 0, 0]
        }, {
            name: "รอบอก",
            data: [0, 0, 0, 0]
        }, {
            name: "ความยาว",
            data: [0, 0, 0, 0]
        }, {
            name: "ส่วนสูง",
            data: [0, 0, 0, 0]
        }],
        myChartOptions: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#000']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: ['แรกเกิด', 'อายุ 240 วัน', 'อายุ 400 วัน', 'อายุ 600 วัน'],
            },
        },
        ////////// Another person //////////

        themFarm: null,
        themBuffalos: null,
        themSelectBuff: null,
        themSelectFarm: null,
        themBuffaloWeight: [],
        themBuffaloWidth: [],
        themBuffaloLength: [],
        themBuffaloHeight: [],
        themBuffaloEach: [],

        themSeries: [{
            name: "น้ำหนัก",
            data: [0, 0, 0, 0]
        }, {
            name: "รอบอก",
            data: [0, 0, 0, 0]
        }, {
            name: "ความยาว",
            data: [0, 0, 0, 0]
        }, {
            name: "ส่วนสูง",
            data: [0, 0, 0, 0]
        }],
        themChartOptions: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#000']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: ['แรกเกิด', 'อายุ 240 วัน', 'อายุ 400 วัน', 'อายุ 600 วัน'],
            },
        },

    }),
    async created() {
        await this.getFarm()
        await this.getBuffalos()
        this.response = true
    },
    methods: {

        ////////////////////////////////////////////  yourself /////////////////////////////////////////////////////////////////////////////
        async getBuffalos() {
            this.myBuffalos = await Core.getHttp(`/api/buffalo/buffalo/raw/?farm__id=${this.farm.id}`)
        },
        async getBuffaloEach(pk) {
            this.myBuffaloEach = await Core.getHttp(`api/buffalo/evolution/${pk}/`)
            await this.getMyData()

        },

        async changeMyBuffalo() {
            this.response = false
            this.myBuffaloWeight = []
            this.myBuffaloWidth = []
            this.myBuffaloLength = []
            this.myBuffaloHeight = []
            await this.getBuffaloEach(this.mySelect)
            this.response = true

        },
        async getMyData() {
            ////// Weight //////
            this.myBuffaloWeight.push(this.myBuffaloEach.weight0)
            this.myBuffaloWeight.push(this.myBuffaloEach.weight240)
            this.myBuffaloWeight.push(this.myBuffaloEach.weight400)
            this.myBuffaloWeight.push(this.myBuffaloEach.weight600)
            this.mySeries[0].data = this.myBuffaloWeight

            ////// Width //////
            this.myBuffaloWidth.push(this.myBuffaloEach.width0)
            this.myBuffaloWidth.push(this.myBuffaloEach.width240)
            this.myBuffaloWidth.push(this.myBuffaloEach.width400)
            this.myBuffaloWidth.push(this.myBuffaloEach.width600)
            this.mySeries[1].data = this.myBuffaloWidth

            ////// Length //////
            this.myBuffaloLength.push(this.myBuffaloEach.length0)
            this.myBuffaloLength.push(this.myBuffaloEach.length240)
            this.myBuffaloLength.push(this.myBuffaloEach.length400)
            this.myBuffaloLength.push(this.myBuffaloEach.length600)
            this.mySeries[2].data = this.myBuffaloLength

            ////// Height //////
            this.myBuffaloHeight.push(this.myBuffaloEach.height0)
            this.myBuffaloHeight.push(this.myBuffaloEach.height240)
            this.myBuffaloHeight.push(this.myBuffaloEach.height400)
            this.myBuffaloHeight.push(this.myBuffaloEach.height600)
            this.mySeries[3].data = this.myBuffaloHeight

        },

        //////////////////////////////////////////// Another person //////////////////////////////////////////////////////////////////    

        async getFarm() {
            this.themFarm = await Core.getHttp(`api/buffalo/farm/`)
            console.log(this.themFarm)
        }
    },

}
</script>

<style>

</style>
