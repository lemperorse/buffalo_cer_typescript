<template>
  <div>
       
  </div>
</template>

<script>
export default {
    async created () {
     let appInBrowser  = cordova.InAppBrowser.open('https://www.buffalocert.agri.up.ac.th/admin/', '_blank','hideurlbar=yes,closebuttoncaption=กลับไปหน้าผู้ใช้','');
       appInBrowser.addEventListener('exit',  async (event)=> {
          await this.$router.go(-1)
    }); 
    }  
}
</script>

<style>

</style>