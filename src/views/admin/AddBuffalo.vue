<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <CardAddBuffalo />
  </div>
</template>

<script>
import CardAddBuffalo from "@/components/Component/Core/Buffalo/BuffaloCreate.vue";
export default {
  name: "add-farmer-page",
  components: {
    CardAddBuffalo
  },
};
</script>