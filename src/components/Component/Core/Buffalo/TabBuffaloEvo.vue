<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-2 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-gray-800 text-xl font-bold">การเจริญเติบโต</h6>
        <div v-if="!privateMode">
          <v-btn
            color="orange"
            dark
            large
            depressed
            rounded
            v-if="unEdit"
            @click="unEdit = !unEdit"
          >
            <v-icon left dark> fas fa-pencil-alt </v-icon>แก้ไข
          </v-btn>
          <v-btn
            color="error"
            dark
            large
            depressed
            rounded
            v-if="!unEdit"
            @click="unEdit = !unEdit"
          >
            <v-icon left dark> fas fa-pencil-alt </v-icon>ยกเลิกการแก้ไข
          </v-btn>
        </div>
      </div>
    </div>
    <div>
      <div id="chart" style="overflow-x: scroll">
        <apexchart
          type="line"
          :width="$vuetify.breakpoint.mobile ? `1900` : `100%`"
          height="350"
          :options="gragh.chartOptions"
          :series="gragh.series"
        ></apexchart>
      </div>
    </div>
    <div class="flex-auto px-1 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updateBuffalo">
        <v-alert color="#F59E0B" type="info" outlined v-if="!unEdit">
          โหมดแก้ไข ระบุข้อมูลที่ต้องการแก้ไขในช่องข้อความสีส้ม
          <v-btn
            class="border-edit"
            x-small
            style="background-color: #eeeef3; color: #f59e0b"
            >ข้อความ</v-btn
          >
        </v-alert>
        <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
          แรกเกิด <span v-if="evo0" class="text-red-600">(ยังไม่มีข้อมูล)</span>
        </h6>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.weight0"
              name="name"
              label="น้ำหนัก(กก.)"
              id="id"
              prepend-inner-icon="fas fa-weight"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.width0"
              name="name"
              label="ความกว้างรอบอก(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.length0"
              name="name"
              label="ความยาวรอบลำตัว(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.height0"
              name="name"
              label="ความสูง(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-height"
            ></v-text-field>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
        <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
          อายุ 240 วัน
          <span v-if="evo240" class="text-red-600">(ยังไม่มีข้อมูล)</span>
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.weight240"
              name="name"
              label="น้ำหนัก(กก.)"
              id="id"
              prepend-inner-icon="fas fa-weight"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.width240"
              name="name"
              label="ความกว้างรอบอก(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.length240"
              name="name"
              label="ความยาวรอบลำตัว(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.height240"
              name="name"
              label="ความสูง(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-height"
            ></v-text-field>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
        <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
          อายุ 400 วัน
          <span v-if="evo400" class="text-red-600">(ยังไม่มีข้อมูล)</span>
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.weight400"
              name="name"
              label="น้ำหนัก(กก.)"
              id="id"
              prepend-inner-icon="fas fa-weight"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.width400"
              name="name"
              label="ความกว้างรอบอก(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.length400"
              name="name"
              label="ความยาวรอบลำตัว(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.height400"
              name="name"
              label="ความสูง(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-height"
            ></v-text-field>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-gray-400 mx-4" />
        <h6 class="text-blue-600 text-sm mt-3 mb-6 font-bold uppercase">
          อายุ 600 วัน
          <span v-if="evo600" class="text-red-600">(ยังไม่มีข้อมูล)</span>
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.weight600"
              name="name"
              label="น้ำหนัก(กก.)"
              id="id"
              prepend-inner-icon="fas fa-weight"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.width600"
              name="name"
              label="ความกว้างรอบอก(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.length600"
              name="name"
              label="ความยาวรอบลำตัว(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-width"
            ></v-text-field>
          </div>
          <div class="w-full lg:w-6/12 md:px-4">
            <v-text-field
              filled
              rounded
              dense
              :disabled="unEdit"
              type="number"
              v-model="form.height600"
              name="name"
              label="ความสูง(ซม.)"
              id="id"
              prepend-inner-icon="fas fa-text-height"
            ></v-text-field>
          </div>
        </div>

        <div class="flex justify-center mt-4">
          <v-btn
            class="bg2"
            dark
            depressed
            type="submit"
            v-if="!unEdit"
            block
            large
            rounded
          >
            <v-icon left>fas fa-save</v-icon>
            บันทึกข้อมูล
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Core } from "@/store/core";

import moment from "moment";
import { Evolution } from "@/models/buffalo";
import { App } from "@/store/app";

@Component
export default class TabBuff extends Vue {
  @Prop({
    default: false,
  })
  privateMode!: boolean;
  form: Evolution | any = {};
  private unEdit: boolean = true;
  private response: boolean = false;

  gragh: any = {
    series: [],
    chartOptions: {
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
      title: {
        text: "",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: ["แรกเกิด", "240 วัน", "400 วัน", "600 วัน"],
      },
      yaxis: [
        {
          seriesName: "น้ำหนัก",
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#008FFB",
          },
          labels: {
            style: {
              colors: "#008FFB",
            },
          },
          title: {
            text: "น้ำหนัก",
            style: {
              color: "#008FFB",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "ความกว้างรอบอก",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              colors: "#00E396",
            },
          },
          title: {
            text: "ความกว้างรอบอก",
            style: {
              color: "#00E396",
            },
          },
        },
        {
          seriesName: "ความยาวลำตัว",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FEB019",
          },
          labels: {
            style: {
              colors: "#FEB019",
            },
          },
          title: {
            text: "ความยาวลำตัว",
            style: {
              color: "#FEB019",
            },
          },
        },
        {
          seriesName: "ความสูง",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "rgb(255, 69, 96)",
          },
          labels: {
            style: {
              colors: "rgb(255, 69, 96)",
            },
          },
          title: {
            text: "ความสูง",
            style: {
              color: "rgb(255, 69, 96)",
            },
          },
        },
        {
          seriesName: "การเจริญเติบโต",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "rgb(119, 93, 208)",
          },
          labels: {
            style: {
              colors: "rgb(119, 93, 208)",
            },
          },
          title: {
            text: "การเจริญเติบโต",
            style: {
              color: "rgb(119, 93, 208)",
            },
          },
        },
      ],
      tooltip: {
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
    },
  };

  private async created() {
    await this.run();
  }
  private async run() {
    await App.onLoad();
    let buffalo = this.$route.query.id;
    this.form = await Core.getHttp(`/user/buffalo/evolution/${buffalo}/`);
    this.response = true;
    await this.generateSeries();
    await App.offLoad();
  }

  @Watch("form.birthday")
  async onChangeDate(val: string) {
    this.form.age = moment().diff(val, "years", false);
  }

  private async updateBuffalo() {
    let update = await Core.putHttp(
      `/user/buffalo/evolution/${this.form.id}/`,
      this.form
    );
    if (update.id) {
      await this.run();
      this.unEdit = true;
      await App.success("บันทึกข้อมูลสำเร็จ");
      await location.reload();
    } else {
      await App.error("โปรดระบุข้อมูลให้ครบถ้วน");
    }
  }

  get evo0() {
    return this.form.width0 ||
      this.form.weight0 ||
      this.form.width0 ||
      this.form.length0
      ? false
      : true;
  }

  get evo240() {
    return this.form.width240 ||
      this.form.weight240 ||
      this.form.width240 ||
      this.form.length240
      ? false
      : true;
  }

  get evo400() {
    return this.form.width400 ||
      this.form.weight400 ||
      this.form.width400 ||
      this.form.length400
      ? false
      : true;
  }

  get evo600() {
    return this.form.width600 ||
      this.form.weight600 ||
      this.form.width600 ||
      this.form.length600
      ? false
      : true;
  }
  get editMode() {
    return this.unEdit ? "border-success" : "border-edit";
  }
  async generateSeries() {
    let series = [
      {
        name: "น้ำหนัก",
        type: "column",
        data: [
          this.form.weight0,
          this.form.weight240,
          this.form.weight400,
          this.form.weight600,
        ],
      },
      {
        name: "ความกว้างรอบอก",
        type: "column",
        data: [
          this.form.width0,
          this.form.width240,
          this.form.width400,
          this.form.width600,
        ],
      },
      {
        name: "ความยาวลำตัว",
        type: "column",
        data: [
          this.form.length0,
          this.form.length240,
          this.form.length400,
          this.form.length600,
        ],
      },
      {
        name: "ความสูง",
        type: "column",
        data: [
          this.form.height0,
          this.form.height240,
          this.form.height400,
          this.form.height600,
        ],
      },
      {
        name: "การเจริญเติบโต",
        type: "line",
        data: [
          0,
          this.calculate(this.form.weight0, this.form.weight240, 240),
          this.calculate(this.form.weight0, this.form.weight400, 400),
          this.calculate(this.form.weight0, this.form.weight600, 600),
        ],
      },
    ];

    this.gragh.series = series;
  }
  calculate(first: any, now: any, numDay: any) {
    let result = (now - first) / numDay;
    return this.convertNum(result);
  }
  convertNum(num: any) {
    let result = num.toFixed(2);
    return Number(result);
  }
}
</script>

<style scoped>
.f-white {
  color: white !important;
}

.bg2 {
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
