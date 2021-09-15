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
      <apexchart
        type="line"
        height="250"
        :options="graghKK.chartOptions"
        :series="graghKK.series"
      ></apexchart>
      
    </div>
           <div v-if="responseCM">
                  <BodyLength :graph="graphCM_data.chest" filter="ความกว้างรอบอก" color="#eb6e34" title="ความกว้างรอบอก ที่เพิ่มขึ้น" />
                <BodyLength :graph="graphCM_data.body" filter="ความยาวลำตัว"  color="#c4cf30" title="ความยาวลำตัว ที่เพิ่มขึ้น" />
                <BodyLength :graph="graphCM_data.height" filter="ความสูง"  color="#87507c" title="ความสูง ที่เพิ่มขึ้น"  /> 
                </div>
  </div>
</template>

<script>
import _ from "lodash";
import { Core } from "@/store/core";
import { User } from "@/store/user";
import BodyLength from '@/components/Component/Core/Evo/BodyLength.vue'

export default {
   components:{
    BodyLength
  },
  data: () => ({
    farm: User.farm,
    themFarm: [],
    themSelectFarm: null,
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
   responseCM:false,
    graphCM_data: {}
  }),
  async created() {
    await this.getFarms();
  },
  methods: {
            filterDataSeries(data,name){
        let response =  _.filter(data,{name:name})
        return (response[0])?response[0]:null
    },

    async getGraphCM(){
      this.graphCM_data = {
        "chest": this.filterDataSeries(this.graghCM.series,'ความกว้างรอบอก'),
          "body": this.filterDataSeries(this.graghCM.series,'ความยาวลำตัว'),
         "height": this.filterDataSeries(this.graghCM.series,'ความสูง')
      }
      
    },
    async getFarms() {
      this.themFarm = await Core.getHttp(`api/buffalo/farm/`);
    },
    async getBuffalos() {
      this.myBuffalos = await Core.getHttp(
        `/api/buffalo/evolutions/?buffalo__farm=${this.themSelectFarm}`
      );
    },
    async changeMyBuffalo() {
       this.responseCM = false;
      this.buffalo = await Core.getHttp(
        `api/buffalo/evolution/${this.mySelect}/`
      );
      await this.generateSeries();
         await this.getGraphCM();
      this.responseCM = true;
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
