<template>
  <div>
    <v-btn
      @click="exporEndorse()"
      color="deep-purple accent-3"
      depressed
      dark
      block
      large
      rounded
    >
      <v-icon left>fas fa-file-download</v-icon>
      ดาวน์โหลดใบประกาศนียบัตรรับรองพันธุ์ประวัติ
    </v-btn>
  </div>
</template>

<script>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Core } from "@/store/core";
import moment from "moment";
import pdfMake from "pdfmake";
import pdfFonts from "@/assets/custom-fonts.js";
import App from "@/store/app";
import _ from "lodash";
import htmlToPdfmake from "html-to-pdfmake";
export default {
  components: {},

  data() {
    return {
      dataParent: {},
      dataBuffalo: {},
      dataFarm: {},
      dataBf: {},
      choices: Core.choices,
    };
  },
  computed: {},
  watch: {},
  async created() {
    await this.load();
  },
  methods: {
    async load() {
      this.dataParent = await Core.getHttp(
        `/user/buffalo/cert/${this.$route.query.id}/`
      );
      this.dataBuffalo = await Core.getHttp(
        `/user/buffalo/buffalo/${this.$route.query.id}/`
      );
      this.dataBf = await Core.getHttp(`/api/buffalo/farm/`);
      this.dataFarm = this.farm(this.dataBf, this.dataBuffalo.farm);
      this.dataBuffalo.ccolor = this.findChoice(this.dataBuffalo.color);
      this.dataBuffalo.cgender = this.findChoice(this.dataBuffalo.gender);

      this.dataBuffalo.cbirthday = this.dDate(this.dataBuffalo.birthday);
      this.dataBuffalo.nowdays = this.dDate(0);

      console.log(this.dataFarm);
      console.log(this.dataBuffalo.farm);
    },
    dDate(datd) {
      var dd = moment.locale("th");
      if (datd == 0) {
        this.date = moment().add(543, "year").format("LL");
        return this.date;
      } else {
        this.date = moment(datd).add(543, "year").format("LL");
        return this.date;
      }
    },
    farm(dataFarm, id) {
      let bfFarm = _.find(dataFarm, { id: id });
      return bfFarm;
    },
    findChoice(id) {
      let choice = _.find(this.choices, { id: id });
      return choice.value;
    },

    async exporEndorse() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.fonts = {
        // download default Roboto font from cdnjs.com
        Roboto: {
          normal:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
          bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
          italics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
          bolditalics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
        },
        THSarabun: {
          normal: "THSarabunNew.ttf",
          bold: "THSarabunNew Bold.ttf",
          italics: "THSarabunNew Italic.ttf",
          bolditalics: "THSarabunNew BoldItalic.ttf",
        },
        Kanit: {
          normal: "Kanit-Regular.ttf",
          bold: "Kanit-Medium.ttf",
          italics: "Kanit-Italic.ttf",
          bolditalics: "Kanit-MediumItalic.ttf",
        },
      };

      const docDefinition = {
        pageSize: "A4",
        pageMargins: [60, 40, 60, 40],
        pageOrientation: "landscape",
        defaultStyle: {
          font: "THSarabun",
        },
        content: [
          {
            margin: [40, 0, 40, 0],
            fontSize: 18,
            table: {
              widths: [50, 200, 100, 200],
              body: [
                [
                  {
                    stack: [
                      {
                        image: "building",
                        alignment: "left",
                        width: 70,
                        margin: [0, 0, 0, 0],
                        border: [false, false, false, false],
                      },
                      {
                        text: " ",
                        alignment: "left",
                        fontSize: 9,
                        border: [false, false, false, false],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  {
                    text: "ใบประกาศนียบัตรรับรองพันธุ์ประวัติ",
                    alignment: "center",
                    fontSize: 24,
                    bold: true,
                    margin: 20,
                    colSpan: 3,
                    border: [false, false, false, false],
                  },
                  {},
                  {},
                ],
              ],
            },
          },
          {
            margin: [40, 0, 40, 0],
            fontSize: 18,
            table: {
              widths: [200, 150, 100, 250],
              body: [
                [
                  { text: "", border: [false, false, false, false] },
                  { text: "", border: [false, false, false, false] },
                  { text: "", border: [false, false, false, false] },
                  {
                    text: "ทะเบียนกรมปศุสัตว์ เลขที่ .......................",
                    border: [false, false, false, false],
                  },
                ],
                [
                  { text: "", border: [false, false, false, false] },
                  { text: "", border: [false, false, false, false] },
                  { text: "", border: [false, false, false, false] },
                  {
                    text: "วันที่ " + this.dataBuffalo.nowdays,
                    border: [false, false, false, false],
                  },
                ],
              ],
            },
          },
          {
            margin: [40, 10, 40, 10],
            fontSize: 18,
            table: {
              widths: [350, 350],
              body: [
                [
                  {
                    text: [
                      {
                        text: "ชื่อ : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: this.dataBuffalo.name,
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  { text: "", border: [false, false, false, false] },
                ],
                [
                  {
                    text: [
                      {
                        text: "หมายเลขประจำตัวสัตว์ : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: this.dataBuffalo.microship,
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  {
                    text: [
                      {
                        text: "ผู้ปรับปรุงพันธุ์ : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: "ศูนย์วิจัยและบำรุงพันธุ์สัตว์ตาก กรมปศุสัตว์",
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                ],
                [
                  {
                    text: [
                      {
                        text: "วันเกิด  : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: this.dataBuffalo.cbirthday,
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  {
                    text: [
                      {
                        text: "เพศ  : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: this.dataBuffalo.cgender,
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  {
                    text: [
                      {
                        text: "สี  : ",
                        fontSize: 18,
                        bold: true,
                        margin: [40, 0, 40, 0],
                      },
                      {
                        text: this.dataBuffalo.ccolor,
                        fontSize: 18,
                        margin: [40, 0, 40, 0],
                      },
                    ],
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                ],
              ],
            },
          },
          {
            margin: [40, 10, 40, 10],
            fontSize: 22,
            table: {
              widths: [25, 75, 150, 150, 75, 25],
              body: [
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: "ให้ไว้แก่ : ",
                    bold: true,
                    alignment: "right",
                    border: [false, false, false, false],
                  },
                  {
                    text: "นายชยุต ดงปาลีธรรม์",
                    colSpan: 3,
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  {
                    text: "",
                    colSpan: 2,
                    border: [false, false, false, false],
                  },
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: "เพื่อแสดงการรองรับพันธุ์ประวัติกับกรมปศุสัตว์เรียบร้อยแล้ว",
                    bold: true,
                    colSpan: 5,
                    border: [false, false, false, false],
                    alignment: "center",
                  },
                  {
                    text: "",
                    border: [false, false, false, false],
                  },
                ],
              ],
            },
          },
          {
            margin: [40, 20, 40, 0],
            fontSize: 20,
            table: {
              widths: [25, 300, 10, 300, 25],
              body: [
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: "....................................................................",
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: "....................................................................",
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  {
                    text: " ",
                    border: [false, false, false, false],
                  },
                  {
                    text: "ผู้ตรวจสอบ",
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: " ",
                    alignment: "center",
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                ],
              ],
            },
          },
        ],
        images: {
          building:
            "data:image/png;base64,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",
        },
        styles: {
          header: {
            fontSize: 20,
            bold: true,
          },
          subheader: {
            fontSize: 18,
            bold: false,
          },
        },
      };
      pdfMake.createPdf(docDefinition).open({}, window);
      // pdfMake.createPdf(docDefinition).print();
    },
  },
};
</script>

<style>
.vertical-divider {
  padding: 40px 40px 40px 40px;
  border: 3px black;
  border-style: dotted hidden dotted dotted;
  z-index: 1;
  width: 25%;
  height: 25%;
  left: 25%;
  position: absolute;
}
.center-element {
  position: absolute;
  align-items: center;
  z-index: 1;
  left: -20%;
  bottom: 40%;
  background: white;
  padding: 5px;
}
.top-element {
  position: absolute;
  align-items: center;
  z-index: 1;
  top: -10%;
  right: -45%;
  background: white;
  padding: 5px;
}
.bottom-element {
  position: absolute;
  align-items: center;
  z-index: 1;
  top: 92%;
  right: -50%;
  background: white;
  padding: 5px;
}
</style>