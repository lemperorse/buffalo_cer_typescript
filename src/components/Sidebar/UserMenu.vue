<template>
  <nav class="mt-10">
    <button class="flex  text-left mt-4 py-2 px-6   w-full hvr-grow "
            :class="($route.path == route.path)?'bg-yellow-900 bg-opacity-25 ':''"
            v-for="route,index in routes" :key="index" v-if="route.show" @click="changeRoute(route.path)">
      <span class="mx-3 " :class="($route.path == route.path)?'text-yellow-900':'txt-gray-600'" >
        <span class="mr-2 " :class="route.icon"></span>{{route.name}} </span>
    </button>
   </nav>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import _ from 'lodash'
@Component({
  components: {

  },
  computed: {}
})

export default class Menu extends Vue {

  routes = []

  async created() {
    console.log(this.$route);
      let routerAll:any = _.find(this.$router.options.routes, function (x:any) { return x.permission == 'User'  })
    this.routes = routerAll.children

  }

  async changeRoute(path:string) {
    try {
      await this.$router.push(path)
    } catch (error) {

    }

  }
}
</script>

<style>
.txt-menu{
  color:rgba(153,97,40,1)
}
.bg-active{
  background: rgb(85,40,6);
  background: linear-gradient(97deg, rgba(85,40,6,1) 0%, rgba(153,97,40,1) 100%);

}





</style>