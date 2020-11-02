<template>
  <div
      class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
  >
    <div class="relative w-full  mt-4 mb-4 px-4 max-w-full flex-grow flex-1">
      <h3 class="font-semibold text-base text-gray-800">
        รายงานการเจริญเติบโตพันธุ์ประวัติรายฟาร์ม
      </h3>
    </div>

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap ">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              ชื่อฟาร์ม :
            </label>
            <input
                type="text"
                readonly
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="ฟาร์มโชค"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              แรกเกิด(ตัว) :
            </label>
            <input
                readonly
                type="number"
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="80"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              อายุ 240 วัน (ตัว) :

            </label>
            <input
                readonly
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="20"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              อายุ 400 วัน (ตัว) :

            </label>
            <input
                readonly
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="50"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              อายุ 600 วัน (ตัว) :
            </label>
            <input
                readonly
                type="text"
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="30"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.f-white {
  color: white !important;
}
</style>