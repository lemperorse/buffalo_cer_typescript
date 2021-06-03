<template>
  <div class="p-2 md:p-6 pt-20 md:pt-20 bg-gray-100">
    <CardAddBuffalo class="animate__animated  animate__fadeInUp" />
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