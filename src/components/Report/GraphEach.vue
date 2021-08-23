<template>
<div v-if="response">
    <div class="flex flex-wrap">
        <div class="mt-4 lg:w-1/4 md:px-4">
            <v-autocomplete v-if="buffalos" @change="changeBuffalo()" :items="buffalos" :item-value="'id'" item-text="name" label="เลือกควาย" v-model="selectBuffalo" outlined></v-autocomplete>
        </div>
    </div>
    <div>
        <apexchart type="bar" height="430" :options="chartOptions" :series="series"></apexchart>
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
        buffalos: null,
        selectBuffalo: null,
        buffaloEach: null,
        buffaloWeight: [],
        buffaloWidth: [],
        buffaloLength: [],
        buffaloHeight: [],

        series: [{
            name: "น้ำหนัก",
            data: [44, 55, 41, 64]
        }, {
            name: "รอบอก",
            data: [53, 32, 33, 52]
        }, {
            name: "ความยาวรอบตัว",
            data: [15, 20, 11, 22]
        }, {
            name: "ส่วนสูง",
            data: [43, 22, 43, 32]
        }],
        chartOptions: {
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
        await this.getBuffalos()
        this.response = true;
    },
    methods: {
        async getBuffalos() {
            this.buffalos = await Core.getHttp(`/api/buffalo/buffalo/raw/?farm__id=${this.farm.id}`)
            this.selectBuffalo = this.buffalos[0].id
            await this.getBuffaloEach(this.selectBuffalo)
        },
        async getBuffaloEach(pk) {
            this.buffaloEach = await Core.getHttp(`api/buffalo/evolution/${pk}/`)
            await this.getData()

        },
        async changeBuffalo() {
            this.response = false
            this.buffaloWeight = []
            this.buffaloWidth = []
            this.buffaloLength = []
            this.buffaloHeight = []
            await this.getBuffaloEach(this.selectBuffalo)
            this.response = true

        },
        async getData() {
            ////// Weight //////
            this.buffaloWeight.push(this.buffaloEach.weight0)
            this.buffaloWeight.push(this.buffaloEach.weight240)
            this.buffaloWeight.push(this.buffaloEach.weight400)
            this.buffaloWeight.push(this.buffaloEach.weight600)
            this.series[0].data = this.buffaloWeight

            ////// Width //////
            this.buffaloWidth.push(this.buffaloEach.width0)
            this.buffaloWidth.push(this.buffaloEach.width240)
            this.buffaloWidth.push(this.buffaloEach.width400)
            this.buffaloWidth.push(this.buffaloEach.width600)
            this.series[1].data = this.buffaloWidth

            ////// Length //////
            this.buffaloLength.push(this.buffaloEach.length0)
            this.buffaloLength.push(this.buffaloEach.length240)
            this.buffaloLength.push(this.buffaloEach.length400)
            this.buffaloLength.push(this.buffaloEach.length600)
            this.series[2].data = this.buffaloLength

            ////// Height //////
            this.buffaloHeight.push(this.buffaloEach.height0)
            this.buffaloHeight.push(this.buffaloEach.height240)
            this.buffaloHeight.push(this.buffaloEach.height400)
            this.buffaloHeight.push(this.buffaloEach.height600)
            this.series[3].data = this.buffaloHeight

        },

    }

}
</script>

<style>

</style>
