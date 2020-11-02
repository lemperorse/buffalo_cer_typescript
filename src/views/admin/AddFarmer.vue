<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <CardAddFarmer />
  </div>
</template>

<script>
import CardAddFarmer from "@/components/Page/Admin/AddFarmer/CardAddFarmer.vue";
export default {
  name: "add-farmer-page",
  components: {
    CardAddFarmer
  },
};
</script>