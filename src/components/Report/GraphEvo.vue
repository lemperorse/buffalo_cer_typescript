<template>
  <div class="p-2">
    <div v-if="response">
      <!-- <pre>{{ series }}</pre> -->
      <!-- <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div> -->

      <div id="chart" style="overflow-x: scroll">
        <p>ค่าเฉลี่ยน้ำหนักในแต่ละปี (กก.)</p>
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="chartOptions"
          :series="seriesAll"
        ></apexchart>
        <br />
        <p>อัตราการเจริญเติบโตในแต่ละปี (กก.)</p>
        <apexchart
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          type="line"
          height="250"
          :options="chartOptions0"
          :series="series"
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

import { Amphur, Geography } from "@/models/core";
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

  series: any = [];
  seriesAll: any = [];
  chartOptions: any = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012],
    },
    yaxis: [],
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก.";
        },
      },
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  chartOptions0: any = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + " กก. / วัน";
      },
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {},
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + " กก. / วัน";
        },
      },
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
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
      this.series = _.filter(graph.series, ["type", "line"]);
      this.seriesAll = _.reject(graph.series, ["type", "line"]);
      this.chartOptions.xaxis.categories = graph.index;
      this.chartOptions0.xaxis.categories = graph.index;
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
