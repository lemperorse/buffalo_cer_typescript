<template>
  <div class="p-2">
    <div v-if="response">
      <!-- <pre>{{ viewData }}</pre> -->
      <!-- <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div> -->

      <div id="chart" style="overflow-x: scroll">
        <p>แรกเกิด</p>
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="chartOptions0"
          :series="series0"
        ></apexchart>
        <p>อายุ 240 วัน</p>
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="chartOptions240"
          :series="series240"
        ></apexchart>
        <p>อายุ 400 วัน</p>
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="chartOptions400"
          :series="series400"
        ></apexchart>
        <p>อายุ 600 วัน</p>
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="chartOptions600"
          :series="series600"
        ></apexchart>
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
import { Component, Vue } from "vue-property-decorator";

import { mapState } from "vuex";

import { User } from "@/store/user";

import { Geography } from "@/models/core";
import { Core } from "@/store/core";
import _, { forEach } from "lodash";
@Component({
  components: {},
  computed: {},
})
export default class Graph extends Vue {
  response: boolean = false;
  farm: any = User.farm;
  viewData: any = [];

  series0: any = [];
  series240: any = [];
  series400: any = [];
  series600: any = [];
  chartOptions0: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: "#FFEE58",
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
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + " กก.";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["แรกเกิด", "อายุ 240 วัน", "อายุ 400 วัน", "อายุ 600 วัน"],
    },
    yaxis: {
      title: {
        text: "น้ำหนัก (กก.)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก.";
        },
      },
    },
  };
  chartOptions240: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: "#F4511E",
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
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + " กก.";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["แรกเกิด", "อายุ 240 วัน", "อายุ 400 วัน", "อายุ 600 วัน"],
    },
    yaxis: {
      title: {
        text: "น้ำหนักอายุ 240 วัน (กก.)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก.";
        },
      },
    },
  };
  chartOptions400: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: "#43A047",
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
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + " กก.";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["แรกเกิด", "อายุ 240 วัน", "อายุ 400 วัน", "อายุ 600 วัน"],
    },
    yaxis: {
      title: {
        text: "น้ำหนักอายุ 400 วัน (กก.)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก.";
        },
      },
    },
  };
  chartOptions600: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: "#5E35B1",
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
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + " กก.";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["แรกเกิด", "อายุ 240 วัน", "อายุ 400 วัน", "อายุ 600 วัน"],
    },
    yaxis: {
      title: {
        text: "น้ำหนักอายุ 600 วัน (กก.)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก.";
        },
      },
    },
  };

  async created() {
    let loadGraph = await this.getGraphSeries();
    this.response = loadGraph;
  }

  async getGraphSeries() {
    let graph = await Core.getHttp(`/report/evo/${this.farm.id}/`);
    this.viewData = graph;
    if (graph.success) {
      this.series0 = _.filter(graph.series, ["name", "แรกเกิด"]);
      this.series240 = _.filter(graph.series, ["name", "240 วัน"]);
      this.series400 = _.filter(graph.series, ["name", "400 วัน"]);
      this.series600 = _.filter(graph.series, ["name", "600 วัน"]);
      this.chartOptions0.xaxis.categories = graph.index;
      this.chartOptions240.xaxis.categories = graph.index;
      this.chartOptions400.xaxis.categories = graph.index;
      this.chartOptions600.xaxis.categories = graph.index;
      return graph.success;
    } else {
      return graph.success;
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
  transition: all 0.8s ease-in-out;
  cursor: pointer;
}

.box-sm:hover {
  flex-grow: 12;
}
</style>
