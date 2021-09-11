<template>
<div>

    <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
            <GraphA />
        </div>
         <div class="w-full md:w-1/2">
            <GraphB />
        </div>
    </div>
</div>
</template>

 
<script>
import GraphA from './GraphCompareA.vue'
import GraphB from './GraphCompareB.vue'
export default {
    components:{
        GraphA,GraphB
    }
}
</script>

 
<style>

 </style>
