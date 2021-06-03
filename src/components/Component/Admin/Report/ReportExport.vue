<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-blue-900 text-white']"
  >
    <div class="relative w-full mt-4 mb-4 px-4 max-w-full flex-grow flex-1">
      <h3 class="font-semibold text-base text-gray-800">
        รายงานจำนวนควาย
      </h3>
    </div>

    <div>
      <br><br>
            <center> <a target="_blank" class="bg-green-600 p-6" href="https://www.le-buffalo.ml/admin/buffalo/buffaloevolution/">ดูรรายงานความเคลื่อนไหวการใช้งานระบบ</a></center>

      <center>
     
      </center>
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