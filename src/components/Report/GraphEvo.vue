<template>
<div class="p-2" v-if="response">

    <apexchart type="line" height="350" :options="graph.chartOptions" :series="graph.series"></apexchart>
    <div class="flex flex-wrap justify-center  mt-2">
        <v-btn  @click="(age='0')&&(generateData())" class="mr-4" rounded>แรกเกิด</v-btn>
        <v-btn   @click="(age='240')&&(generateData())" class="mr-4" rounded>อายุ 240 วัน</v-btn>
        <v-btn   @click="(age='400')&&(generateData())" class="mr-4" rounded>อายุ 400 วัน</v-btn>
        <v-btn   @click="(age='600')&&(generateData())" class="mr-4" rounded>อายุ 600 วัน</v-btn>
    </div>

    <div>
        <br>
        <ReportSystem />
    </div>
 
</div>
</template>

<script lang="ts">
import ReportSystem from "@/components/Component/User/Report/ReportSystem/ReportSystem.vue";

import {
    Component,
    Vue,
} from 'vue-property-decorator';

import {
    mapState
} from 'vuex';

import {
    User
} from '@/store/user'

import {
    Geography
} from '@/models/core'
import {
    Core
} from '@/store/core'
import _, {
    forEach
} from 'lodash'
@Component({
    components: { ReportSystem },
    computed: {

    }
})
export default class Home extends Vue {

    user: any = {}
    farm: any = User.farm;

    rawEvo: any = []

    graph: any = {
        series: [{
                name: "น้ำหนัก",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            },
            {
                name: "ความกว้างรอบอก",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            },
            {
                name: 'ความยาวลำตัว',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            },
            {
                name: 'ความสูง',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            }
        ],
        chartOptions: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            title: {
                text: '',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function (val: any, opts: any) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: [],
            },
            tooltip: {
                y: [{
                        title: {
                            formatter: function (val: any) {
                                return val + " (กก.)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val: any) {
                                return val + " (ซม.)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val: any) {
                                return val + " (ซม.)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val: any) {
                                return val + " (ซม.)"
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },
    }
    age: any = '0'
    rawValue: any = {}

    response: boolean = false

    async created() {
        await this.getBuffaloEvo();
        await this.getData();
        await this.generateData();
        this.response = true
    }

    async getBuffaloEvo() {
        this.rawEvo = await Core.getHttp(`/api/buffalo/evolutions/?buffalo__farm=${this.farm.id}`)
    }

    async generateData() {
          this.response =false;
        await this.getData();

        let buffalo = _.map(this.rawEvo, (r: any) => {
            return r.buffalo.name
        });
        this.graph.chartOptions.xaxis.categories = buffalo
        this.graph.series[0].data = this.rawValue[`age${this.age}`].weight
        this.graph.series[1].data = this.rawValue[`age${this.age}`].width
        this.graph.series[2].data = this.rawValue[`age${this.age}`].length
        this.graph.series[3].data = this.rawValue[`age${this.age}`].height
  this.response =true;
    }

    async getData() {
        let ages = [0, 240, 400, 600]
        let data: any = {}
        ages.forEach(age => {
            data[`age${age}`] = {
                weight: _.map(this.rawEvo, `weight${age}`),
                width: _.map(this.rawEvo, `width${age}`),
                length: _.map(this.rawEvo, `width${age}`),
                height: _.map(this.rawEvo, `height${age}`),
            }
        });
        this.rawValue = data;

        console.log(data)
    }

    async get240() {

    }
    async get400() {

    }
    async get600() {

    }

    get width() {
        return this.$vuetify.breakpoint.width
    }

}
</script>

<style scoped>
.box {
    display: flex;
    width: 100%;
    height: 8px;
    margin: 5px 0px 60px 0px;
}

.box-sm {
    height: 8px;
    margin: 0;
    flex-grow: 1;
    transition: all .8s ease-in-out;
    cursor: pointer;
}

.box-sm:hover {
    flex-grow: 12;
}
</style>
