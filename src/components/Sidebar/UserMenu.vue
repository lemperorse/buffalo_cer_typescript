<template>
<nav class="mt-10 ">
    <hr class="p-2">
    <button class="flex text-left p-3 mt-1 w-full text-md ho rounded-lg" :class="($route.path == route.path)?'bg1 ':''" v-for="route,index in routes" :key="index" v-if="route.show" @click="changeRoute(route.path)">
        <span class="mx-3 " :class="($route.path == route.path)?'text-white':'txt-gray-600'">
            <span class="mr-2 " :class="route.icon"></span>{{route.name}} </span>
    </button>
</nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
        let routerAll: any = _.find(this.$router.options.routes, function (x: any) { return x.permission == 'User' })
        this.routes = routerAll.children

    }

    async changeRoute(path: string) {
        try {
            await this.$router.push(path)
        } catch (error) {

        }

    }
}
</script>

<style>
.txt-menu {
    color: rgba(153, 97, 40, 1)
}

.bg-active {
    background: rgb(85, 40, 6);
    background: linear-gradient(97deg, rgba(85, 40, 6, 1) 0%, rgba(153, 97, 40, 1) 100%);

}
.ho{
    transition: 0.8s;  
} 
.ho:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(224, 224, 224, 0.25), 
    -5px -5px 30px 15px rgba(145, 145, 145, 0.22);
}
.bg1 {
    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b00dd'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
