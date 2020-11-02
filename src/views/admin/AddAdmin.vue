<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <CardAddAdmin />
  </div>
</template>

<script>
import CardAddAdmin from "@/components/Page/Admin/AdminOther/AddAdmin/CardAddAdmin.vue";
export default {
  name: "add-admin-page",
  components: {
    CardAddAdmin
  },
};
</script>