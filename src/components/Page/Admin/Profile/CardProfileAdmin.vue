<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 flex justify-center">
          <div class="relative">
            <img
                alt="..."
                :src="team2"
                class="shadow-xl rounded-full h-auto align-middle border-none -mt-16 w-48 h-48"
            />
            <div class="flex justify-center">
              <button
                  class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          แอดมิน สโตน
        </h3>
        <div
            class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
        >
          <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
          ไทยแลน, เชียงใหม่
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
