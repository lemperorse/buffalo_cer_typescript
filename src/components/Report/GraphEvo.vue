<template>
<div class="p-2" >

    <div v-if="response">
 
        <!-- <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div> -->

         <div id="chart" style="overflow-x: scroll;">
        <apexchart type="line" :width="($vuetify.breakpoint.mobile)?`1900`:`100%`" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

    </div>

    <div v-else>
        <v-alert type="primary" :value="true">
            ยังไม่มีข้อมูลการเจริญเติบโตบันทึกไว้
        </v-alert>
    </div>

</div>
</template>

<script lang="ts">
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
    components: {},
    computed: {

    }
})
export default class Graph extends Vue {
    response: boolean = false
    farm: any = User.farm
    series: any = [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }]

    chartOptions: any = {
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
            text: 'อัตราการเจริญเติบโตของควาย',
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          
          {show: false,},{show: false,},{show: false,},
           {
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                     
                    },
                    labels: {
                     
                    },
                    title: {
                        text: "น้ำหนัก",
                        
                    },
                    tooltip: {
                        enabled: true
                    }
                },
           {
                    seriesName: 'อัตราการเจริญเติบโต',
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: 'rgb(119, 93, 208)'
                    },
                    labels: {
                        style: {
                            colors: 'rgb(119, 93, 208)',
                        }
                    },
                    title: {
                        text: "อัตราการเจริญเติบโต",
                        style: {
                            color: 'rgb(119, 93, 208)',
                        }
                    },
                    tooltip: {
                        enabled: true
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
    }

    async created() {
        let loadGraph = await this.getGraphSeries();
        this.response = loadGraph
    }

    async getGraphSeries() {
        
        let graph = await Core.getHttp(`/report/evo/${this.farm.id}/`)
        if (graph.success) {
            this.series = graph.series
            this.chartOptions.xaxis.categories = graph.index
            return graph.success
        } else {
            return graph.success
        }
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
