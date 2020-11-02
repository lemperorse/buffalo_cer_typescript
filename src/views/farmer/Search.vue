<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div
        class="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0 ">
        <div class="relative w-full mt-4 mb-4 max-w-full flex-grow flex-1 px-2 py-2">
          <h3 class="font-semibold text-base text-gray-800">
            ค้นหาใบพันธุ์ประวัติ
          </h3>
        </div>

        <div class="relative px-2 py-2 flex flex-wrap ">
          <input type="text" placeholder="ค้นหา"
                 class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
          <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <i class="fas fa-search"></i>
          </span>
        </div>

        <div class="flex flex-wrap mt-4 mb-4">
          <div class="w-full lg:w-6/12 xl:w-4/12  px-2 py-2" v-for="i in 9">
            <card-stat-with-btn statTitle="เจ้าของ : นายแดง" statSubtitle="พ่อเปี้ย(1231)"
                                statRoute="cer"
                                statIconName="em em-water_buffalo" statIconColor="bg-gray-500"/>
          </div>
        </div>

        <!-- pagination -->
        <div class="py-2 mb-4">
          <nav class="block">
            <ul class="flex justify-center pl-0 rounded list-none flex-wrap">
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  <i class="fas fa-chevron-left -ml-px"></i>
                  <i class="fas fa-chevron-left -ml-px"></i>
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  <i class="fas fa-chevron-left -ml-px"></i>
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 text-white bg-indigo-500">
                  1
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  2
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  3
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  4
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  5
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  <i class="fas fa-chevron-right -mr-px"></i>
                </a>
              </li>
              <li>
                <a href="#pablo"
                   class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-indigo-500 bg-white text-indigo-500">
                  <i class="fas fa-chevron-right -mr-px"></i>
                  <i class="fas fa-chevron-right -mr-px"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import CardStatWithBtn from "@/components/Cards/CardStatWithBtn.vue";
export default {
  name: "search-page",
  components: {
    CardStatWithBtn
  },
};
</script>

