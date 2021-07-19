<template>
<footer  class="footer">
    <div class="container mx-auto px-4">
        <hr class="mb-6 border-b-1 border-gray-700" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4">
                <div class="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                    ลิขสิทธิ์ © 2563
                    <a href="https://www.creative-tim.com?ref=vn-footer-small" class="text-white hover:text-gray-400 text-sm font-semibold py-1">
                        โดย ศูนย์วิจัยและบํารุงพันธุ์สัตว์พะเยา
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
    props: {
        absolute: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%; 
   color: white;
   text-align: center;
}
</style>