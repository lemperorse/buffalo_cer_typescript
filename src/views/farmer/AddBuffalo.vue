<template>
  <div class="p-2 pt-10 ">
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