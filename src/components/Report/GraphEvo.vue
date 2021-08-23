<template>
  <div class="p-2" v-if="response">
    <apexchart
      type="bar"
      height="350"
      :options="graph.chartOptions"
      :series="graph.series"
    ></apexchart>
    <div class="flex flex-wrap justify-center mt-2">
      <v-btn
        color="success"
        @click="(age = '0') && generateData()"
        class="mr-4 m-2"
        rounded
        >แรกเกิด</v-btn
      >
      <v-btn
        color="success"
        @click="(age = '240') && generateData()"
        class="mr-4 m-2"
        rounded
        >อายุ 240 วัน</v-btn
      >
      <v-btn
        color="success"
        @click="(age = '400') && generateData()"
        class="mr-4 m-2"
        rounded
        >อายุ 400 วัน</v-btn
      >
      <v-btn
        color="success"
        @click="(age = '600') && generateData()"
        class="mr-4 m-2"
        rounded
        >อายุ 600 วัน</v-btn
      >
    </div>

    <div>
      <br />
      <ReportSystem />
    </div>
  </div>
</template>

<script lang="ts">
import ReportSystem from "@/components/Component/User/Report/ReportSystem/ReportSystem.vue";

import { Component, Vue } from "vue-property-decorator";

import { mapState } from "vuex";

import { User } from "@/store/user";

import { Geography } from "@/models/core";
import { Core } from "@/store/core";
import _, { forEach } from "lodash";
@Component({
  components: { ReportSystem },
  computed: {},
})
export default class Home extends Vue {
  user: any = {};
  farm: any = User.farm;

  rawEvo: any = [];

  graph: any = {
    series: [
      {
        name: "น้ำหนัก (กก.)",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "ความกว้างรอบอก (ซม.)",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "ความยาวรอบลำตัว (ซม.)",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
      {
        name: "ความสูง (ซม.)",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
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
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: " ",
        },
      },
      fill: {
        opacity: 1,
      },
      // tooltip: {
      //     y: {
      //         formatter: function (val :any) {
      //             return "$ " + val + " thousands"
      //         }
      //     }
      // }
    },
  };
  age: any = "0";
  rawValue: any = {};

  response: boolean = false;

  async created() {
    await this.getBuffaloEvo();
    await this.getData();
    await this.generateData();
    this.response = true;
  }

  async getBuffaloEvo() {
    this.rawEvo = await Core.getHttp(
      `/api/buffalo/evolutions/?buffalo__farm=${this.farm.id}`
    );
  }

  async generateData() {
    this.response = false;
    await this.getData();

    let buffalo = _.map(this.rawEvo, (r: any) => {
      return r.buffalo.name;
    });
    this.graph.chartOptions.xaxis.categories = buffalo;
    this.graph.series[0].data = this.rawValue[`age${this.age}`].weight;
    this.graph.series[1].data = this.rawValue[`age${this.age}`].width;
    this.graph.series[2].data = this.rawValue[`age${this.age}`].length;
    this.graph.series[3].data = this.rawValue[`age${this.age}`].height;
    this.response = true;
  }

  async getData() {
    let ages = [0, 240, 400, 600];
    let data: any = {};
    ages.forEach((age) => {
      data[`age${age}`] = {
        weight: _.map(this.rawEvo, `weight${age}`),
        width: _.map(this.rawEvo, `width${age}`),
        length: _.map(this.rawEvo, `width${age}`),
        height: _.map(this.rawEvo, `height${age}`),
      };
    });
    this.rawValue = data;

    console.log(data);
  }

  async get240() {}
  async get400() {}
  async get600() {}

  get width() {
    return this.$vuetify.breakpoint.width;
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
