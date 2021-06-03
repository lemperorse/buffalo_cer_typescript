<template>
  <div class="relative md:pt-32 pb-32 pt-12 mt-24">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-12/12 px-4">
        <Table />
      </div>

    </div>
  </div>
</template>

<script>
import Table from "@/components/Component/Admin/PasswordReq/Table.vue";

export default {
  name: "profile-admin-page",
  components: {
    Table,
  },
};
</script>

