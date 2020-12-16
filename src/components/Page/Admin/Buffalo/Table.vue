<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-blue-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-gray-800">
            รายชื่อควาย
          </h3>
        </div>

        <!-- ค้นหา -->
        <div class="relative flex flex-wrap ">
          <input type="text" placeholder="ค้นหา"
                 class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
          <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <i class="fas fa-search"></i>
          </span>
        </div>

        <!-- เพิ่ม -->
        <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button
              @click="$router.push('/admin/addbuffalo')"
              class="bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
            เพิ่มควาย
          </button>
        </div>

      </div>
    </div>
    <!-- table -->
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
        <tr>
          <th
              class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            เจ้าของควาย
          </th>
          <th
              class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            ชื่อควาย
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            เบอร์หู
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            อายุ
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            เพศ
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            สี
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            สถานะ
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            ใบพันธุ์ประวัติ
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            การจัดการ
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in 5">
          <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
          >
            <img
                :src="team1"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
            />
            <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-gray-700' : 'text-white']"
            >
                นายจอห์น ชาวไร่
              </span>
          </th>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 "
          >
            ควาย1
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            0123
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            5 ปี
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex">
              ผู้
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex">
              ดำ
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex">
              มีชีวิต
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <button
                class="bg-red-500 f-white active:bg-red-600 font-bold uppercase text-xs px-1 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
              <i class="far fa-file-pdf text-2xl"></i>
            </button>

          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex items-center">
              <button
                  @click="$router.push('/admin/buffaloprofile')"
                  class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                ดูข้อมูล
              </button>
              <button

                  class="bg-red-500
                  active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 f-white "
                  type="button">
                ลบ
              </button>

            </div>
          </td>
        </tr>
        </tbody>
      </table>
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
</template>
<script>
import buffalo1 from "@/assets/img/buffalo-1.jpeg";
import team1 from "@/assets/img/team-1-800x800.jpg";

export default {
  data() {
    return {
      buffalo1,
      team1
    };
  },
  components: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style>
.f-white {
  color: white !important;
}
</style>