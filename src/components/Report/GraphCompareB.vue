<template>
<div class="p-4">

    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
            <v-autocomplete @change="getBuffalos()" v-if="themFarm" :items="themFarm" :item-value="'id'" item-text="name" label="เลือกฟาร์ม" v-model="themSelectFarm" outlined></v-autocomplete>

        </div>
        <div  class="w-full md:w-1/2 pl-2">
            <v-autocomplete @change="changeMyBuffalo()" v-if="myBuffalos" :items="myBuffalos" :item-value="'id'" item-text="name" label="เลือกควายของท่าน" v-model="mySelect" outlined></v-autocomplete>
        </div>
    </div>

    <div id="chart" style="overflow-x: scroll;">
        <apexchart type="line" :width="($vuetify.breakpoint.mobile)?`1900`:`100%`" height="350" :options="chartOptions" :series="series"></apexchart>
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
        farm: User.farm,
        themFarm: [],
        themSelectFarm: null,
        myBuffalos: [],
        buffalo: {},
        mySelect: null,
        series: [],
        chartOptions: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [1, 1, 4]
            },
            title: {
                text: ' ',
                align: 'left',
                offsetX: 110
            },
            xaxis: {
                categories: ["แรกเกิด", "240 วัน", "400 วัน", "600 วัน"],
            },
            yaxis: [{
                    seriesName: 'น้ำหนัก',
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        style: {
                            colors: '#008FFB',
                        }
                    },
                    title: {
                        text: "น้ำหนัก",
                        style: {
                            color: '#008FFB',
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: 'ความกว้างรอบอก',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            colors: '#00E396',
                        }
                    },
                    title: {
                        text: "ความกว้างรอบอก",
                        style: {
                            color: '#00E396',
                        }
                    },
                },
                {
                    seriesName: 'ความยาวลำตัว',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#FEB019'
                    },
                    labels: {
                        style: {
                            colors: '#FEB019',
                        },
                    },
                    title: {
                        text: "ความยาวลำตัว",
                        style: {
                            color: '#FEB019',
                        }
                    }
                },
                {
                    seriesName: 'ความสูง',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: 'rgb(255, 69, 96)',
                    },
                    labels: {
                        style: {
                            colors: 'rgb(255, 69, 96)',
                        },
                    },
                    title: {
                        text: "ความสูง",
                        style: {
                            color: 'rgb(255, 69, 96)',
                        }
                    }
                },
                {
                    seriesName: 'การเจริญเติบโต',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: 'rgb(119, 93, 208)',
                    },
                    labels: {
                        style: {
                            colors: 'rgb(119, 93, 208)',
                        },
                    },
                    title: {
                        text: "การเจริญเติบโต",
                        style: {
                            color: 'rgb(119, 93, 208)',
                        }
                    }
                },
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                },
            },
            legend: {
                horizontalAlign: 'left',
                offsetX: 40
            }
        },

    }),
    async created() {
        await this.getFarms();

    },
    methods: {
        async getFarms() {
            this.themFarm = await Core.getHttp(`api/buffalo/farm/`)
        },
        async getBuffalos() {
            this.myBuffalos = await Core.getHttp(`/api/buffalo/buffalo/raw/?farm__id=${this.themSelectFarm}`)
        },
        async changeMyBuffalo() {
            this.buffalo = await Core.getHttp(`api/buffalo/evolution/${this.mySelect}/`)
            await this.generateSeries();
        },
        async generateSeries() {
            let series = [{
                    name: 'น้ำหนัก',
                    type: 'column',
                    data: [this.buffalo.weight0, this.buffalo.weight240, this.buffalo.weight400, this.buffalo.weight600, ]
                },
                {
                    name: 'ความกว้างรอบอก',
                    type: 'column',
                    data: [this.buffalo.width0, this.buffalo.width240, this.buffalo.width400, this.buffalo.width600, ]
                },
                {
                    name: 'ความยาวลำตัว',
                    type: 'column',
                    data: [this.buffalo.length0, this.buffalo.length240, this.buffalo.length400, this.buffalo.length600, ]
                },
                {
                    name: 'ความสูง',
                    type: 'column',
                    data: [this.buffalo.height0, this.buffalo.height240, this.buffalo.height400, this.buffalo.height600, ]
                },
                {
                    name: 'การเจริญเติบโต',
                    type: 'line',
                    data: [
                        0,
                        this.calculate(this.buffalo.weight0, this.buffalo.weight240, 240),
                        this.calculate(this.buffalo.weight0, this.buffalo.weight400, 400),
                        this.calculate(this.buffalo.weight0, this.buffalo.weight600, 600),
                    ]
                },
            ]

            this.series = series
        },
        calculate(first, now, numDay) {
            let result = (now - first) / numDay
            return this.convertNum(result)
        },
        convertNum(num) {
            let result = num.toFixed(2);
            return Number(result)
        }
    }
}
</script>

<style>

</style>
