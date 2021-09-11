<template>
  <div class="p-4">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <v-autocomplete
          @change="getBuffalos()"
          v-if="themFarm"
          :items="themFarm"
          :item-value="'id'"
          item-text="name"
          label="เลือกฟาร์ม"
          v-model="themSelectFarm"
          outlined
        ></v-autocomplete>
      </div>
      <div class="w-full md:w-1/2 pl-2">
        <v-autocomplete
          @change="changeMyBuffalo()"
          v-if="myBuffalos"
          :items="myBuffalos"
          :item-value="'id'"
          item-text="buffalo.name"
          label="เลือกควายของท่าน"
          v-model="mySelect"
          outlined
        ></v-autocomplete>
      </div>
    </div>

    <div id="chart" style="overflow-x: scroll">
      <span>น้ำหนัก (กก.)</span>
      <apexchart
        type="bar"
        height="250"
        :options="graghWeight.chartOptions"
        :series="graghWeight.series"
      ></apexchart>
      <span>ความกว้างรอบอก (ซม.)</span>
      <apexchart
        type="bar"
        height="250"
        :options="graghWidth.chartOptions"
        :series="graghWidth.series"
      ></apexchart>
      <span>ความยาวรอบลำตัว (ซม.)</span>
      <apexchart
        type="bar"
        height="250"
        :options="graghLength.chartOptions"
        :series="graghLength.series"
      ></apexchart>
      <span>ความสูง (ซม.)</span>
      <apexchart
        type="bar"
        height="250"
        :options="graghHeight.chartOptions"
        :series="graghHeight.series"
      ></apexchart>
      <!-- <span>อัตราการเจริญเติบโต (กก.)</span>
      <apexchart
        type="bar"
        height="250"
        :options="graghGrowth.chartOptions"
        :series="graghGrowth.series"
      ></apexchart> -->
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { Core } from "@/store/core";
import { User } from "@/store/user";
export default {
  data: () => ({
    farm: User.farm,
    themFarm: [],
    themSelectFarm: null,
    myBuffalos: [],
    buffalo: {},
    mySelect: null,
    graghWeight: {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: "#7E57C2",
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
          formatter: function (val) {
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
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
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
            formatter: function (val) {
              return val + " กก.";
            },
          },
        },
      },
    },
    graghWidth: {
      series: [],
      chartOptions: {
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
          formatter: function (val) {
            return val + " ซม.";
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
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
        },
        yaxis: {
          title: {
            text: "ความยาวรอบลำตัว (ซม.)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " ซม.";
            },
          },
        },
      },
    },
    graghLength: {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: "#3399ff",
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
          formatter: function (val) {
            return val + " ซม.";
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
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
        },
        yaxis: {
          title: {
            text: "ความยาวรอบลำตัว (ซม.)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " ซม.";
            },
          },
        },
      },
    },
    graghHeight: {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: "#66ff99",
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
          formatter: function (val) {
            return val + " ซม.";
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
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
        },
        yaxis: {
          title: {
            text: "ความสูง (ซม.)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " ซม.";
            },
          },
        },
      },
    },
    graghGrowth: {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: "#EC407A",
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
          formatter: function (val) {
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
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
        },
        yaxis: {
          title: {
            text: "อัตราการเจริญเติบโต (กก.)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " กก.";
            },
          },
        },
      },
    },
  }),
  async created() {
    await this.getFarms();
  },
  methods: {
    async getFarms() {
      this.themFarm = await Core.getHttp(`api/buffalo/farm/`);
    },
    async getBuffalos() {
      this.myBuffalos = await Core.getHttp(
        `/api/buffalo/evolutions/?buffalo__farm=${this.themSelectFarm}`
      );
    },
    async changeMyBuffalo() {
      this.buffalo = await Core.getHttp(
        `api/buffalo/evolution/${this.mySelect}/`
      );
      await this.generateSeries();
    },
    async generateSeries() {
      let weight = [
        {
          name: "น้ำหนัก",
          data: [
            this.buffalo.weight0,
            this.buffalo.weight240,
            this.buffalo.weight400,
            this.buffalo.weight600,
          ],
        },
      ];
      let width = [
        {
          name: "ความกว้างรอบอก",
          data: [
            this.buffalo.width0,
            this.buffalo.width240,
            this.buffalo.width400,
            this.buffalo.width600,
          ],
        },
      ];
      let length = [
        {
          name: "ความยาวลำตัว",
          type: "column",
          data: [
            this.buffalo.length0,
            this.buffalo.length240,
            this.buffalo.length400,
            this.buffalo.length600,
          ],
        },
      ];
      let height = [
        {
          name: "ความสูง",
          type: "column",
          data: [
            this.buffalo.height0,
            this.buffalo.height240,
            this.buffalo.height400,
            this.buffalo.height600,
          ],
        },
      ];
      let growth = [
        {
          name: "การเจริญเติบโต",
          data: [
            0,
            this.calculate(this.buffalo.weight0, this.buffalo.weight240, 240),
            this.calculate(this.buffalo.weight0, this.buffalo.weight400, 400),
            this.calculate(this.buffalo.weight0, this.buffalo.weight600, 600),
          ],
        },
      ];
      this.graghWidth.series = width;
      this.graghWeight.series = weight;
      this.graghLength.series = length;
      this.graghHeight.series = height;
      this.graghGrowth.series = growth;
    },
    calculate(first, now, numDay) {
      let result = (now - first) / numDay;
      return this.convertNum(result);
    },
    convertNum(num) {
      let result = num.toFixed(2);
      return Number(result);
    },
  },
};
</script>

<style>
</style>
