<template>
  <div
      class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
  >
    <div class="relative w-full mt-4 mb-4 px-4 max-w-full flex-grow flex-1">
      <h3 class="font-semibold text-base text-gray-800">
        รายงานเชิงแผนที่
      </h3>
    </div>
    <div class="rounded-t mb-0 px-4 py-3 border-0">

      <div class="flex flex-wrap items-center">


        <!-- ค้นหา -->
        <div class="flex flex-wrap ">
          <div class="w-full lg:w-4/12 px-4">
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
          <div class="w-full lg:w-4/12 px-4">
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
          <div class="w-full lg:w-4/12 px-4">
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
        </div>

        <button class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          ค้นหา
        </button>

      </div>


      <div class="flex flex-wrap items-center">
        <div class="relative w-full pt-4 pb-4 px-4 max-w-full flex-grow flex-1">
          <img src="https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" srcset="">
        </div>
      </div>

    </div>

  </div>
</template>
<style>
.f-white{
  color:white!important;
}
</style>