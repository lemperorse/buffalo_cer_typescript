<template>
  <div>

  </div>
</template>

<script lang="ts">
import { Component, Vue,  } from 'vue-property-decorator';
import {userModule} from "@/store/test";

@Component({
  components: {

  }
})
export default class Home extends Vue {
  public uu:String | null = null;
  model =  {
    email: '',
    password: ''
  }
  async test(){
    this.uu = userModule.Hi

  }

  async created(){
    // await userModule.logout()

  }
}
</script>
