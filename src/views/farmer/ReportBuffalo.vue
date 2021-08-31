<template>
<div class="p-2 pt-10">
    <div class="w-full lg:w-8/12 px-6 md:px-10">
        <h2 class="text-2xl"> <b>รายงาน</b> </h2> <span>ดูรายงานต่างๆ ในฟาร์มของคุณ เช่นข้อมูลควาย ข้อมูลการเจริญเติบโต </span><br><br>
    </div>

    <!-- <div class="p-2 rounded-xl shadow-xl bg-white">
        <v-tabs v-model="tab"  fixed-tabs >
            <v-tab>
                รายงานควาย
            </v-tab>
            <v-tab>
                รายงานการเจริญเติบโต
            </v-tab>
            <v-tab>
                รายงานเปรียบเทียบรายฟาร์ม
            </v-tab>
            <v-tab>
                รายงานน้ำหนักเฉลี่ย
            </v-tab>
            <v-tab>
                รายงานเปรียบเทียบรายตัว
            </v-tab>
            <v-tab-item>
                <div class="p-2" v-if="tab == 0">
                    <Graph />
                </div>

            </v-tab-item>
            <v-tab-item touchless>
                <div v-if="tab == 1">
                    <GraphEvo />
                </div>

            </v-tab-item>
            <v-tab-item>
                <div v-if="tab == 2">
                    <GraphEach />
                </div>

            </v-tab-item>
            <v-tab-item>
                <div v-if="tab == 3">
                    <GraphAVG />
                </div>

            </v-tab-item>
            <v-tab-item>
                <div v-if="tab == 3">
                    <GraphCompare />
                </div>

            </v-tab-item>
        </v-tabs>
    </div> -->
    <div class="flex ">
        <div class="row wrap">
            <v-btn @click="toggleTabs(0)" class="m-1 " rounded x-large elevation="1" :color="(tab == 0)?`green accent-3`:`tw`">
                <i class="em em-water_buffalo" aria-role="presentation" aria-label="WATER BUFFALO"></i>
                <span class="font-bold">รายงานควาย</span>
            </v-btn>
            <v-btn @click="toggleTabs(1)" class="m-1" rounded x-large elevation="1" :color="(tab == 1)?`green accent-3`:``">
                <i class="em em-bar_chart" aria-role="presentation" aria-label="BAR CHART"></i>
                <span class="font-bold">รายงานการเจริญเติบโต</span>
            </v-btn>
            <v-btn @click="toggleTabs(2)" class="m-1" rounded x-large elevation="1" :color="(tab == 2)?`green accent-3`:``">
                <i class="em em-clipboard" aria-role="presentation" aria-label="CLIPBOARD"></i>
                <span class="font-bold">รายงานเปรียบเทียบรายฟาร์ม</span>
            </v-btn>
            <v-btn @click="toggleTabs(3)" class="m-1" rounded x-large elevation="1" :color="(tab == 3)?`green accent-3`:``">
                <i class="em em-abacus" aria-role="presentation" aria-label="ABACUS"></i>
                <span class="font-bold">รายงานเปรียบเทียบรายตัว</span>
            </v-btn>
        </div>
    </div>

    <v-card class="mt-6 relatives rounded-lg animate__animated animate__bounceInLeft animate__delay-1s">
        <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
                <div v-bind:class="{'hidden': tab !== 0, 'block': tab === 0}">
                    <Graph class="animate__animated animate__zoomIn" v-if="tab === 0" />
                </div>

                <div v-bind:class="{'hidden': tab !== 1, 'block': tab === 1}">
                    <GraphEvo class="animate__animated animate__zoomIn" v-if="tab === 1" />
                </div>

                <div v-bind:class="{'hidden': tab !== 2, 'block': tab === 2}">
                    <GraphEach class="animate__animated animate__zoomIn" v-if="tab === 2" />
                </div>
                <div v-bind:class="{'hidden': tab !== 3, 'block': tab === 3}">
                    <GraphCompare class="animate__animated animate__zoomIn" v-if="tab === 3" />
                </div>
            </div>
        </div>
    </v-card>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
} from 'vue-property-decorator';

import Graph from '@/components/Report/Graph.vue'
import GraphEvo from '@/components/Report/GraphEvo.vue'
import GraphEach from '@/components/Report/GraphEach.vue'
import GraphAVG from '@/components/Report/GraphAVG.vue'
import GraphCompare from '@/components/Report/GraphCompare.vue'

@Component({
    components: {
        Graph,
        GraphEvo,
        GraphEach,
        GraphAVG,
        GraphCompare
    },
    computed: {},
    props: {
        color: {
            default: "light",
            validator: function (value) {
                return ["light", "dark"].indexOf(value) !== -1;
            },
        },
    }
})

export default class Table extends Vue {

    private tab: number = 0

    private async created() {

        await this.defaultTab();

    }

    async defaultTab() {
        let path: number = Number(this.$route.query.tab);
        return path ? await this.toggleTabs(path) : null
    }
    async toggleTabs(tabNumber: number) {
        console.log(this.$route.fullPath)
        if (this.$route.query.tab != String(tabNumber)) {
            await this.$router.push({
                query: {
                    'tab': String(tabNumber)
                }
            });
        }
        this.tab = tabNumber
    }

}
</script> 