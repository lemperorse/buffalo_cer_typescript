<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center ">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-green-600 bg-white': openTab !== 1, 'text-white bg-green-600': openTab === 1}">
            <i class="fas fa-user text-base mr-1"></i>ข้อมูลเกษตกร
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-green-600 bg-white': openTab !== 2, 'text-white bg-green-600': openTab === 2}">
            <i class="fas fa-tractor text-base mr-1"></i> ข้อมูลฟาร์ม
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-green-600 bg-white': openTab !== 3, 'text-white bg-green-600': openTab === 3}">
            <i class="far fa-image text-base mr-1"></i> รูปภาพ
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
                  <h6 class="text-gray-800 text-xl font-bold">โปรไฟล์ของฉัน</h6>
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
                    ข้อมูลส่วนตัว
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          คำนำหน้า
                        </label>
                          <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                              <option>นาย</option>
                              <option>นาง</option>
                              <option>นางสาว</option>
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
                          เพศ
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" id="grid-state">
                            <option>ชาย</option>
                            <option>หญิง</option>
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
                          ชื่อ
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="Lucky"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          นามสกุล
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="Jesse"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          หมายเลขบัตรประชาชน
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="1234567890123"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          อายุ
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="40"
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />

                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ที่อยู่และติดต่อ
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ที่อยู่
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="123/123"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          เบอร์โทรศัพท์
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="0123456789"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ตำบล
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>จำป่าหวาย</option>
                            <option>แม่กา</option>
                            <option>แม่ต๋ำ</option>
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
                          อำเภอ
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>เมือง</option>
                            <option>แม่กา</option>
                            <option>แม่ใจ</option>
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
                          จังหวัด
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>พะเยา</option>
                            <option>แพร่</option>
                            <option>น่าน</option>
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
                          รหัสไปรณีย์
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>56000</option>
                            <option>56100</option>
                            <option>56200</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-4"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                  </button></div>

                </form>
              </div>
            </div>

            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-gray-800 text-xl font-bold">ข้อมูลฟาร์ม</h6>
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
                    เกี่ยวกับฟาร์ม
                  </h6>
                  <div class="flex flex-wrap">

                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ชื่อฟาร์ม
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="Lucky"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          จำนวนควาย(ตัว)
                        </label>
                        <input
                            type="number"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="12"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          กลุ่มเกษตกร
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>แม่กา</option>
                            <option>แม่ใจ</option>
                            <option>แม่ต๋ำ</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ที่อยู่ฟาร์ม
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ที่อยู่ฟาร์ม
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="123/123"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ตำบล
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>จำป่าหวาย</option>
                            <option>แม่กา</option>
                            <option>แม่ต๋ำ</option>
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
                          อำเภอ
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>เมือง</option>
                            <option>แม่กา</option>
                            <option>แม่ใจ</option>
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
                          จังหวัด
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>พะเยา</option>
                            <option>แพร่</option>
                            <option>น่าน</option>
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
                          รหัสไปรณีย์
                        </label>
                        <div class="relative">
                          <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                            <option>56000</option>
                            <option>56100</option>
                            <option>56200</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    พิกัด GPS
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          พิกัดฟาร์ม GPS(ละติจูด)
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="1234560"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          พิกัดฟาร์ม GPS(ลองติจูด)
                        </label>
                        <input
                            type="text"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value="1237890"
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
                  <h6 class="text-gray-800 text-xl font-bold">รูปภาพ</h6>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ภาพถ่ายบัตรประชาชน
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative flex justify-center w-full">
                        <img
                            class="w-128 h-48"
                            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                      </div>
                      <div class="flex justify-center mt-4"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        อัพโหลดรูปภาพ
                      </button></div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ภาพถ่ายฟาร์ม
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <div class="relative flex justify-center w-full">
                        <img
                            class="w-128 h-48"
                            src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                      </div>
                      <div class="flex justify-center mt-6"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        อัพโหลดรูปภาพ
                      </button></div>
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
                    ตั้งค่ารหัสผ่าน
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          รหัสผ่านใหม่
                        </label>
                        <input
                            type="password"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value=""
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        >
                          ยืนยันรหัสผ่านใหม่
                        </label>
                        <input
                            type="password"
                            class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            value=""
                        />
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    จัดการสิทธิ์
                  </h6>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        สิทธ์การใช้งาน
                      </label>
                      <div class="relative">
                        <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                          <option>ไม่มีสิทธิ์</option>
                          <option>สิทธิ์การใช้งาน(ผู้ใช้)</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-gray-400" />
                  <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    ลบข้อมูลเกษตกร
                  </h6>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <button class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          ลบข้อมูลเกษตกร
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-4"><button class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึก
                  </button></div>

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
      openTab: 1,
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
<style>
.f-white {
  color: white !important;
}
</style>