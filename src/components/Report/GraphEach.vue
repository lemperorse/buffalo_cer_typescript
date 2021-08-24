<template>
<div class="p-2">

    <div v-if="response"><br><br>
        <div class="flex flex-col md:flex-row">
            <v-autocomplete dense :items="farms" :item-value="'id'" item-text="name" label="เลือกฟาร์ม" v-model="mySelect" outlined></v-autocomplete>
            <v-btn class="ml-6" @click="addFarm()" color="success">+ เพิ่มฟาร์ม</v-btn>
        </div>

        <div id="chart">
           
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
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
    farms: any = []
    series: any = []
    mySelect: any = null
    infarms: any = []

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
            text: 'อัตราการเจริญเติบโตของควาย เปรียบเที่ยบรายฟาร์ม',
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: []
        },
        yaxis: [

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

    years: any = []
    rawData: any = []

    async created() {
        await this.getFarms()
        await this.getGraphSeries();
        this.response = true
    }

    async getFarms() {
        this.farms = await Core.getHttp(`api/buffalo/farm/`)
    }

    async addFarm() {
        this.response = false
        let graph = await Core.getHttp(`/report/evoall/${this.mySelect}/`)
        if (graph.success) {
            this.series.push(graph.series_chart)
            this.rawData = (graph.series_obj).concat(this.rawData)
            this.years = this.arrayUnique((graph.index).concat(this.years))
            this.years = this.years.sort(function(a:any, b:any){return a-b});
            this.chartOptions.xaxis.categories = this.years
            this.infarms.push(graph.farm)
            await this.generateDataChart()
            this.response = true
        } else {
            this.response = true
            return graph.success
        }

    }

    async getGraphSeries() {
        let graph = await Core.getHttp(`/report/evoall/${this.farm.id}/`)
        if (graph.success) {
            this.rawData = (graph.series_obj).concat(this.rawData)
            this.series.push(graph.series_chart)
            this.years = (graph.index).concat(this.years)
            this.years = this.years.sort(function(a:any, b:any){return a-b});
            this.chartOptions.xaxis.categories = this.years
            this.infarms.push(graph.farm)
            await this.generateDataChart()
        } else {
            return graph.success
        }
    }

    async generateDataChart() {
        let output = []

        for (let index = 0; index < this.infarms.length; index++) {

            output.push({
                "name": this.infarms[index],
                "type": 'line',
                "data": await this.getDataSeries(this.infarms[index])
            })
        }
        this.series = output

    }

    async getDataSeries(farm: any) {
        let output = []
        for (let index = 0; index < this.years.length; index++) {
            let data: any = _.find(this.rawData, { index: this.years[index], farm: farm })
            if (data) {
                output.push(data.val);
            } else {
                output.push(0);
            }

        }
        console.log(output);
        return output;
    }

    arrayUnique(array: []) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    }

}
</script>
