<template>
  <div class="id">
<!--    <h1>Hello App</h1>-->
      <router-view></router-view>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'; 

export default Vue.extend({
  name: 'App',

  components: { 
  },

  data: () => ({
    //
  }),
});
</script>
