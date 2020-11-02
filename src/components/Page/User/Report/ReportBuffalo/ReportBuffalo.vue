<template>
  <div
      class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
  >
    <div class="relative w-full  mt-4 mb-4 px-4 max-w-full flex-grow flex-1">
      <h3 class="font-semibold text-base text-gray-800">
        รายงานจำนวนควาย
      </h3>
    </div>
    <div class="rounded-t mb-0 px-4 py-3 border-0">

      <div class="flex flex-wrap items-center">

        <!-- ค้นหา -->
        <div class="flex flex-wrap ">
          <div class="w-full lg:w-6/12 px-4">
            <div class="mt-4">
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio" name="accountType" value="personal">
                  <span class="ml-2">ทั้งหมด</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input type="radio" class="form-radio" name="accountType" value="busines">
                  <span class="ml-2">ตัวผู้</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input type="radio" class="form-radio" name="accountType" value="busines">
                  <span class="ml-2">ตัวเมีย</span>
                </label>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <div class="relative">
                <select
                    class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500"
                    id="grid-state">
                  <option>มีชีวิต</option>
                  <option>ไม่มีชีวิต</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- ค้นหา -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <button
                class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
              ค้นหา
            </button>
          </div>
        </div>

      </div>
    </div>


    <hr class="mt-6 pb-6 border-b-1 border-gray-400"/>

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap ">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              ควายทั้งหมด(ตัว) :
            </label>
            <input
                type="text"
                readonly
                class="px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                value="100"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              ควายที่มีชีวิต(ตัว) :
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
              ควายที่ไม่มีชีวิต(ตัว) :

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
              ควายตัวผู้(ตัว) :

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
              ควายตัวเมีย(ตัว) :
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