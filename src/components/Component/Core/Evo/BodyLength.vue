<template>
<div>
    <apexchart v-if="response" type="line" height="250" :options="graghKK.chartOptions" :series="raw"></apexchart>

</div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        color:{default:'#9C27B0'},
        title: { default: 'ความกว้างรอบอก' },
        graph: {
            default: {
                "name": "ความกว้างรอบอก",
                "type": "column",
                "data": []
            }
        },
        filter: { default: "ความกว้างรอบอก" }
    },
    data() {
        return ({
            // graph:{},
            raw: [],
            response: false,

            graghKK: {
                series: [],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: "line",
                    },
                    colors: [this.color,"rgb(0, 227, 150)"],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: "55%",
                            endingShape: "rounded",
                            dataLabels: {
                                position: "top", // top, center, bottom
                            },
                        },
                    },
                    stroke: {
                        width: [0, 4],
                    },
                    title: {
                        text: this.title,
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function (val) {
                            return val + " ซม. / วัน";
                        },
                        enabledOnSeries: [1],
                    },
                    xaxis: {
                        categories: ["แรกเกิด", "อายุ 240 วัน", "อายุ 400 วัน", "อายุ 600 วัน"],
                    },
                 
                    yaxis: [{
                            title: {
                                text: this.filter +" (ซม.)",
                            },
                        },
                        {
                            opposite: true,
                            title: {
                                text: "อัตราการเจริญเติบโต (ซม./วัน)",
                            },
                        },
                    ],
                    tooltip: {
                        y: [{
                                formatter: function (val) {
                                    return val + " ซม.";
                                },
                            },
                            {
                                formatter: function (val) {
                                    return val + " ซม. / วัน";
                                },
                            },
                        ],
                    },
                },
            }
        });
    },
    async mounted() {
        await this.generateData();
    },
    methods: {
        async generateData() {

            if (this.graph.data.length > 0) {
                let data = this.graph.data
                let scope = data[0]

                let days = [1, 240, 400, 600]
                let val = []
                for (let i = 0; i < days.length; i++) {
                    let res = (data[i] - scope) / days[i]
                    res = res.toFixed(2)
                    console.log(res);
                    val.push(res)
                }
                this.raw = [this.graph, {
                    "name": "การเจริญเติบโต",
                    "type": "line",
                    "data": val,
                }]
            }
            this.graghKK.title = this.title
            // this.graghKK.chartOptions.fill.colors = this.color
            this.graghKK.chartOptions.colors =  [this.color,"rgb(0, 227, 150)"],
            this.response = true;
        }

    }
}
</script>

<style>

</style>
