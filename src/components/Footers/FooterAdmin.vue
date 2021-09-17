<template>
<footer class="footer block py-4">
    <div class=" mx-auto px-4">
        <hr class="mb-4 border-b-1 border-gray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4"> 
                <div class="text-sm font-semibold py-1 text-center md:text-left text-black">
                    ลิขสิทธิ์ © 2563
                    <a href="" class="text-white hover:text-gray-800 text-sm font-semibold py-1">
                        โดย กรมปศุสัตว์ ศูนย์วิจัยและบํารุงพันธุ์สัตว์พะเยา
                    </a>
                </div>
            </div>
          
        </div>
    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
};
</script>
<style scoped>
.footer {
  
   left: 0;
   bottom: 0;
   width: 100%; 
   color: white;
   text-align: center;
}
</style>