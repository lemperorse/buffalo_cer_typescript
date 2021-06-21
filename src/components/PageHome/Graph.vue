<template>
<div >
      <div class="m-2   w-full">
                    <v-card class="rounded-lg   shadow-xl" flat elevation="3">
                        <v-card-title primary-title>
                            จำนวนควายทั้งหมด
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text> 
                            <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
                        </v-card-text>
                        <br>
                        <br>
                        <v-card-actions>
                            <v-btn @click="$router.push('/user/buffalo')" color="deep-purple accent-3" block text>ควายของฉัน</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div class="m-2 bg-green-400 w-full">
                    <v-card rounded class="rounded-lg  " flat elevation="3">
                        <v-card-title primary-title>
                            จำนวนควายในปัจจุบัน
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <apexchart type="donut" :options="buffaloOptions" :series="buffaloSeries"></apexchart>

                        </v-card-text>

                        <v-card-actions class="pt-3">
                            <div class="w-full px-2">
                                <form @submit.prevent="getDataDetailGraph()" class="flex">
                                    <v-select :items="STATUS" item-text="value" item-value="id" v-model="STATUS_VAL" label="สถานะ"></v-select>
                                    <v-text-field v-model="AGE_START" label="เริ่มต้นอายุ"></v-text-field>
                                    <v-text-field v-model="AGE_END" label="ถึงอายุ"></v-text-field>
                                    <v-btn type="submit" small fab dark color="#006fdd">
                                        <v-icon>mdi-card-search</v-icon>
                                    </v-btn>
                                </form>
                            </div>
                        </v-card-actions>
                    </v-card>
                </div>

</div>
</template>

<script lang="ts">
import ChartBuffaloAll from "@/components/Component/User/Chart/ChartBuffaloAll.vue";
import ChartBuffaloLive from "@/components/Component/User/Chart/ChartBuffaloLive.vue";
import {
    Component,
    Vue,
} from 'vue-property-decorator';

import {
    mapState
} from 'vuex';

import {
    User
} from '@/store/user'

import { Geography } from '@/models/core'
import { Core } from '@/store/core'
import _ from 'lodash'
@Component({
    components: {
        ChartBuffaloAll,
        ChartBuffaloLive,
    },
    computed: {

    }
})
export default class Home extends Vue {
    

}
</script>

<style scoped>
.box {
    display: flex;
    width: 100%;
    height: 8px;
    margin: 5px 0px 60px 0px;
}

.box-sm {
    height: 8px;
    margin: 0;
    flex-grow: 1;
    transition: all .8s ease-in-out;
    cursor: pointer;
}

.box-sm:hover {
    flex-grow: 12;
}
</style>
