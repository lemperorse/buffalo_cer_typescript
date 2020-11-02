<template>
  <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
    <v-container>
      <h2 class="font-bold text-3xl"><i class="em em-card_file_box" aria-role="presentation" aria-label=""></i> &nbsp; รายงานจำนวนควาย</h2>
      <v-breadcrumbs :items="bc" large>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <hr class="border-b-2 border-gray-400 ma-1">
    </v-container>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/1 xl:w-1/1 p-3">
        <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
          <div class="flex flex-col md:flex-row items-center">
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header class="font-bold ">
                  <div class="text-xl">ค้นหา</div>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <div class="flex flex-row items-center">
                    <v-select large dense class="" :items="items" label="มีชีวิต,ไม่มีชีวิต" flat outlined single-line></v-select>
                  </div>
                  <v-radio-group class=" " v-model="radios" :mandatory="false" :row="row">
                    <v-layout row wrap :class="`d-flex justify-space-around pa-1`">
                      <v-radio color="success" label="ทั้งหมด" value="ทั้งหมด"></v-radio>
                      <v-radio color="success" label="ตัวผู้" value="ตัวผู้"></v-radio>
                      <v-radio color="success" label="ตัวเมีย" value="ตัวเมีย"></v-radio>
                      <v-btn class="" depressed @click="$router.push('/')" color="blue" medium dense dark>
                        <v-icon>mdi-magnify</v-icon>ค้นหา
                      </v-btn>
                    </v-layout>
                  </v-radio-group>
                </v-expansion-panel-content>

              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/2 p-3">
          <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
            <h3 class="font-bold uppercase text-xl text-green-700 mb-2">สรุปควาย</h3>
            <v-card-title primary-title>
              <h3 class="font-bold text-lg">ควายทั้งหมด :</h3>
              <v-spacer></v-spacer>
              <span class="font-bold text-lg  text-gray-600"> 100 ตัว</span>
            </v-card-title>
            <v-card-title primary-title>
              <h3 class="font-bold text-lg">ควายที่มีชีวิต :</h3>
              <v-spacer></v-spacer>
              <span class="font-bold text-lg  text-gray-600"> 80 ตัว</span>
            </v-card-title>
            <v-card-title primary-title>
              <h3 class="font-bold text-lg">ควายที่ไม่มีชีวิต :</h3>
              <v-spacer></v-spacer>
              <span class="font-bold text-lg  text-gray-600"> 10 ตัว</span>
            </v-card-title>
            <v-card-title primary-title>
              <h3 class="font-bold text-lg">ควายตัวผู้ :</h3>
              <v-spacer></v-spacer>
              <span class="font-bold text-lg  text-gray-600"> 30 ตัว</span>
            </v-card-title>
            <v-card-title primary-title>
              <h3 class="font-bold text-lg">ควายตัวเมีย :</h3>
              <v-spacer></v-spacer>
              <span class="font-bold text-lg  text-gray-600"> 50 ตัว</span>
            </v-card-title>
          </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/2 p-3">
          <div class="bg-white border-b-4 border-green-500 rounded shadow-xl p-2">
            <h3 class="font-bold uppercase text-xl text-green-700 mb-2">สรุปควาย</h3>
            <div class="flex flex-row items-center">
              <column-chart :colors="['#009966']" :data="chartData"></column-chart>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>