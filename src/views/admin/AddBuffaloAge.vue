<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div
        class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-gray-800 text-xl font-bold">เพิ่มอายุ</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-12/12 px-4">
              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                >
                  อายุ(วัน)
                </label>
                <div class="relative">
                  <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                    <option>แรกเกิด</option>
                    <option>240 วัน</option>
                    <option>400 วัน</option>
                    <option>600 วัน</option>
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

          <div class="flex justify-center mt-8">
            <button
                @click="$router.push('/admin/buffaloprofile')"
                class=" bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              บันทึก
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buffalo-age-page",
  data() {
    return {
    };
  },
  components: {
  },

};
</script>
<style>
.f-white {
  color: white !important;
}
</style>