<template>
 <ProfileTable />
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import ProfileTable from "@/components/Page/Admin/Profile/Table.vue";

@Component({
  components: {ProfileTable},
  computed: {}
})

export default class Test extends Vue {
    name:string = 'ss'

    async created(){

    }


 }
</script>
<style>

</style>
