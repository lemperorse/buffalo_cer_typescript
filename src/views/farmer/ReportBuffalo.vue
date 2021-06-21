<template>
<div class="p-2 pt-10">
    <div class="w-full lg:w-8/12 px-6 md:px-10">
        <h2 class="text-2xl"> <b>รายงาน</b> </h2> <span>ดูรายงานต่างๆ ในฟาร์มของคุณ เช่นข้อมูลควาย ข้อมูลการเจริญเติบโต </span><br><br>
    </div>

    <div class="p-2 rounded-xl shadow-xl bg-white">
        <v-tabs v-model="tab">
            <v-tab>
                รายงานควาย
            </v-tab>
            <v-tab tab>
                รายงานการเจริญเติบโต
            </v-tab>
            <v-tab-item >
                <div class="p-2"  v-if="tab == 0">
                    <Graph />
                </div>

            </v-tab-item>
            <v-tab-item v-if="tab == 1">
              <GraphEvo />
            </v-tab-item>
        </v-tabs>
    </div>

</div>
</template>

<script>
import Graph from '@/components/Report/Graph.vue'
import GraphEvo from '@/components/Report/GraphEvo.vue'

export default {
    name: "report-buffalo-page",
    components: {
        Graph, GraphEvo,  
    },
    data:()=>{
      return ({
        tab:1
      })
    }
};
</script>
