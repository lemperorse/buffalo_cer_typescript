<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-paw text-base mr-1"></i>ข้อมูลควาย
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-chart-line text-base mr-1"></i> การเจริญเติบโต
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="far fa-file-pdf text-base mr-1"></i> ใบพันธุ์ประวัติ
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-green-600 bg-white': openTab !== 4, 'text-white bg-green-600': openTab === 4}">
            <i class="fas fa-cog text-base mr-1"></i> ตั้งค่า
          </a>
        </li>
      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">รายละเอียดควาย</h6>
                  <button
                      class="bg-orange-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                  >
                    แก้ไข
                  </button>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ข้อมูลทั่วไป
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชื่อหรือหมายเลขควาย
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="ควาย1"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลข NID
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="123"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลขไมโครซิป
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="123"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                              v-model="date"
                              label="วัน/เดือน/ปีเกิด"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                            ref="picker"
                            v-model="date"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          อายุ(ปี)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="6"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          เพศ
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>ผู้</option>
                            <option>เมีย</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          สี
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>ดำ</option>
                            <option>น้ำตาล</option>
                            <option>ขาว</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          สถานะ
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>มีชีวิต</option>
                            <option>ไม่มีชีวิต</option>
                            <option>โอน</option>
                            <option>ย้าย</option>
                            <option>ขาย</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />

                  <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                    ราคาและแหล่งที่มา
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          แหล่งที่มา
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>พ่อค้าคนกลาง</option>
                            <option>ตลาด</option>
                            <option>เพาะพันธุ์</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ราคา(บาท)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="15000"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />

                  <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                    พ่อพันธุ์และแม่พันธุ์
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชื่อหรือหมายเลขพ่อ
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="พ่อ1"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลข NID พ่อ
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลขไมโครชิปพ่อ
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="112"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชื่อหรือหมายเลขแม่
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="แม่1"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลข NID แม่
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="113"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลขไมโครชิปแม่
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="114"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400"/>

                  <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                    ขนาดควาย
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          น้ำหนัก(กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="110"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความสูง(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-8">
                    <button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                    </button>
                  </div>

                </form>
              </div>
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">การเจริญเติบโต</h6>
                  <button
                      @click="$router.push('/user/addbuffaloage')"
                      class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                  >
                    เพิ่มอายุ
                  </button>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    แรกเกิด
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          น้ำหนัก(กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="110"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชความสูง(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    อายุ 240 วัน
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          น้ำหนัก(กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="110"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชความสูง(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    อายุ 400 วัน
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          น้ำหนัก(กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="110"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชความสูง(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    อายุ 600 วัน
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          น้ำหนัก(กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="110"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชความสูง(เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="111"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-4"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                  </button></div>

                </form>
              </div>
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">ใบพันธุ์ประวัติ</h6>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ใบพันธุ์ประวัติอ้างอิง
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative flex justify-center w-full">
                        <img
                            class="w-128 h-48"
                            src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                      </div>
                      <div class="flex flex-wrap justify-center mt-4">
                        <button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          ดาวน์โหลด
                        </button>
                        <button class=" bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        อัพโหลดไฟล์
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />

                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ใบพันธุ์ประวัติทางการ
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative flex justify-center w-full">
                        <img
                            class="w-128 h-48"
                            src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                      </div>
                      <div class="flex justify-center mt-6">
                        <button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          ดาวน์โหลด
                        </button>
                        <button class=" bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          อัพโหลดไฟล์
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-8"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                  </button></div>

                </form>
              </div>
            </div>

            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">ตั้งค่า</h6>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ลบข้อมูลควาย
                  </h6>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <button class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          ลบข้อมูลควาย
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "green-tabs",
  data() {
    return {
      date: null,
      menu: false,
      openTab: 1,
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },

    save (date) {
      this.$refs.menu.save(date)
    },
  },
}
</script>
<style>
.f-white {
  color: white !important;
}
</style>