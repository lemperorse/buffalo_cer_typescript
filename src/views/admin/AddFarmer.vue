<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <AddFarmer />
  </div>
</template>

<script>
import CardAddFarmer from "@/components/Component/Admin/Farmer/AddFarmer.vue";
export default {
  name: "add-farmer-page",
  components: {
    CardAddFarmer
  },
};
</script>