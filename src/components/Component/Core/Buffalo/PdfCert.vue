<template>
  <div>
    <v-btn
      @click="exporPDF()"
      color="deep-purple accent-1"
      depressed
      dark
      block
      large
      rounded
    >
      <v-icon left>fas fa-file-download</v-icon>
      ดาวน์โหลดใบพันธุ์ประวัติอ้างอิง
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
  created() {
    this.load();
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
    },
    dDate(datd) {
      var dd = moment.locale("th");
      this.date = moment(datd).add(543, "year").format("LL");
      return this.date;
    },
    farm(dataFarm, id) {
      let bfFarm = _.find(dataFarm, { id: id });
      return bfFarm;
    },
    findChoice(id) {
      let choice = _.find(this.choices, { id: id });
      return choice.value;
    },

    async exporPDF() {
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
            text: "ใบพันธุ์ประวัติควาย",
            style: "header",
            alignment: "center",
            margin: [0, 20],
          },
          {
            text: [
              "ชื่อ ",
              {
                text: this.dataBuffalo.name,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
              " หมายเลข NID ",
              {
                text: this.dataBuffalo.nid,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
              " (ไมโครชิป) ",
              {
                text: this.dataBuffalo.microship,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
            ],
            style: "subheader",
            alignment: "center",
          },
          {
            text: [
              " วันเกิด ",
              {
                text: this.dataBuffalo.cbirthday,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
              "  สี ",
              {
                text: this.dataBuffalo.ccolor,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
              "  เพศ ",
              {
                text: this.dataBuffalo.cgender,
                italics: true,
                fontSize: 18,
                bold: true,
                margin: [40, 0, 40, 0],
              },
            ],
            style: "subheader",
            alignment: "center",
          },
          {
            margin: [40, 0, 40, 0],
            fontSize: 18,
            table: {
              widths: [50, 200, 100, 200],
              body: [
                [
                  {
                    text: "เจ้าของปัจจุบัน " + this.dataFarm.owner,
                    border: [false, false, false, false],
                    colSpan: 3,
                  },
                  {},
                  {},
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  {
                    text: "ฟาร์ม " + this.dataFarm.name,
                    border: [false, false, false, false],
                    colSpan: 3,
                  },
                  {},
                  {},
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  {
                    text: " ",
                    border: [false, false, false, false],
                    colSpan: 4,
                  },
                  {},
                  {},
                  {},
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: "พ่อ",
                    border: [false, false, false, false],
                  },
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: this.dataParent.father_nid,
                    border: [false, false, false, true],
                  },
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                  {
                    text:
                      this.dataBuffalo.name + " (" + this.dataBuffalo.nid + ")",
                    border: [false, false, false, true],
                    alignment: "right",
                  },
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  { text: "แม่", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                ],
                [
                  { text: " ", border: [false, false, false, false] },
                  {
                    text: this.dataParent.mother_nid,
                    border: [false, false, false, true],
                  },
                  { text: " ", border: [false, false, false, false] },
                  { text: " ", border: [false, false, false, false] },
                ],
              ],
            },
            layout: {
              hLineStyle: function (i, node) {
                return { dash: { length: 10, space: 1 } };
              },
              vLineStyle: function (i, node) {
                return { dash: { length: 10, space: 1 } };
              },
            },
          },
        ],

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
      // pdfMake.createPdf(docDefinition).open({}, window);
      pdfMake.createPdf(docDefinition).print();
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