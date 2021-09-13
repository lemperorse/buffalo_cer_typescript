<template>
  <div class="p-4">
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

    <div id="chart" style="overflow-x: scroll">
      <apexchart
        type="line"
        height="250"
        :options="graghKK.chartOptions"
        :series="graghKK.series"
      ></apexchart>
      <apexchart
        type="bar"
        height="250"
        :options="graghCM.chartOptions"
        :series="graghCM.series"
      ></apexchart>
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
    myBuffalos: [],
    buffalo: {},
    mySelect: null,
    graghKK: {
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
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
          text: "น้ำหนักและการเจริญเติบโต",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + " กก. / วัน";
          },
          enabledOnSeries: [1],
        },
        xaxis: {
          categories: [
            "แรกเกิด",
            "อายุ 240 วัน",
            "อายุ 400 วัน",
            "อายุ 600 วัน",
          ],
        },
        yaxis: [
          {
            title: {
              text: "น้ำหนัก (กก.)",
            },
          },
          {
            opposite: true,
            title: {
              text: "อัตราการเจริญเติบโต (กก.)",
            },
          },
        ],
        tooltip: {
          y: [
            {
              formatter: function (val) {
                return val + " กก.";
              },
            },
            {
              formatter: function (val) {
                return val + " กก. / วัน";
              },
            },
          ],
        },
      },
    },
    graghCM: {
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: true,
          style: { fontSize: "12px", colors: ["#fff"] },
          formatter: function (val) {
            return val + " ซม.";
          },
          offsetY: -20,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        title: {
          text: "ความกว้างรอบอกม ความยาวลำตัวและความสูง",
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
            text: "หน่วย (ซม.)",
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
  }),
  async created() {
    await this.getBuffalos();
  },
  methods: {
    async getBuffalos() {
      this.myBuffalos = await Core.getHttp(
        `/api/buffalo/evolutions/?buffalo__farm=${this.farm.id}`
      );
    },
    async changeMyBuffalo() {
      this.buffalo = await Core.getHttp(
        `api/buffalo/evolution/${this.mySelect}/`
      );
      await this.generateSeries();
    },
    async generateSeries() {
      let kk = [
        {
          name: "น้ำหนัก",
          type: "column",
          data: [
            this.buffalo.weight0,
            this.buffalo.weight240,
            this.buffalo.weight400,
            this.buffalo.weight600,
          ],
        },
        {
          name: "การเจริญเติบโต",
          type: "line",
          data: [
            0,
            this.calculate(this.buffalo.weight0, this.buffalo.weight240, 240),
            this.calculate(this.buffalo.weight0, this.buffalo.weight400, 400),
            this.calculate(this.buffalo.weight0, this.buffalo.weight600, 600),
          ],
        },
      ];
      let cm = [
        {
          name: "ความกว้างรอบอก",
          type: "column",
          data: [
            this.buffalo.width0,
            this.buffalo.width240,
            this.buffalo.width400,
            this.buffalo.width600,
          ],
        },
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
      this.graghKK.series = kk;
      this.graghCM.series = cm;
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
