<template>
  <div>
    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 flex justify-center">
            <div class="relative">
              <img
                  src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="shadow-xl rounded  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
              <div class="flex justify-center">
                <button
                    class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                  อัพโหลดรูปภาพ
                </button>
              </div>

            </div>
          </div>
        </div>
        <div class="text-center mt-12 mb-12">
          <h3
              class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
          >
            ควาย
          </h3>
          <h3
              class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
          >
            ภายถ่ายด้านหน้า
          </h3>
        </div>
      </div>
    </div>

    <hr class="mt-6 pb-6 border-b-1 border-gray-400 "/>

    <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
    >
      <div class="px-6 ">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4 flex justify-center">
            <div class="relative">
              <img
                  src="https://images.pexels.com/photos/1058350/pexels-photo-1058350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="shadow-xl rounded  h-auto align-middle border-none -mt-16 w-48 h-48" alt="" srcset="">
              <div class="flex justify-center">
                <button
                    class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                  อัพโหลดรูปภาพ
                </button>
              </div>

            </div>
          </div>
        </div>
        <div class="text-center mt-12 mb-12">
          <h3
              class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
          >
            ควาย
          </h3>
          <h3
              class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
          >
            ภายถ่ายด้านข้าง
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team1 from "@/assets/img/team-1-800x800.jpg";

export default {
  data() {
    return {
      team1,
    };
  },
};
</script>
