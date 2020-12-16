<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-blue-900 text-white']"
  >
    <div class="relative w-full mt-4 mb-4 px-4 max-w-full flex-grow flex-1">
      <h3 class="font-semibold text-base text-gray-800">
        รายงานความเคลื่อนไหวการใช้งานระบบ
      </h3>
    </div>
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <!-- ค้นหา -->
        <div class="relative flex flex-wrap ">
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
                  label="เลือกวันที่"
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

        <!-- เพิ่ม -->
        <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button

              class="bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
            ค้นหา
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
            ชื่อ
          </th>
          <th
              class="px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            นามสกุล
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            กิจกรรม
          </th>
          <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-blue-800 text-blue-300 border-blue-700',
              ]"
          >
            วันที่ใช้
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
        <tr v-for="i in 4">
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 "
          >
            นายมั่งมี
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            ศรีสุข
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            ผู้ใช้สมัครสมาชิกเอง
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex">
              2/11/2563
            </div>
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
          >
            <div class="flex items-center">
              <button
                  @click="$router.push('/admin/farmerprofile')"
                  class="bg-blue-500 f-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                ดูข้อมูล
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
import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team1,
      team2,
      date: null,
      menu: false,
    };
  },
  components: {},

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
  },

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