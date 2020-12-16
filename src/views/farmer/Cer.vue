<template>
<div class="relative md:pt-32 pb-32 pt-12 mt-24">

    <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center border rounded ">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-blue-600 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1}">
                    <i class="fas fa-user text-base mr-1"></i>ข้อมูลเจ้าของควาย
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center border rounded">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-blue-600 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2}">
                    <i class="far fa-file-pdf text-base mr-1"></i> ใบพันธุ์ประวัติ
                </a>
            </li>
        </ul>

        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                    <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text-gray-800 text-xl font-bold">โปรไฟล์ ของ ....</h6>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                    ข้อมูลเจ้าของควาย
                                </h6>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                ชื่อเจ้าของควาย
                                            </label>
                                            <input type="text" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="ชาวไร่" />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                กลุ่ม
                                            </label>
                                            <div class="relative">
                                                <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                                                    <option>กลุ่มแม่กา</option>
                                                    <option>กลุ่มแม่ใจ</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                ชื่อฟาร์ม
                                            </label>
                                            <input type="text" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="ฟาร์มโชค" />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                ชื่อควาย
                                            </label>
                                            <input type="text" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="ควาย1" />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                                                ที่อยู่ฟาร์ม
                                            </label>
                                            <input type="text" class="px-3 py-3 placeholder-gray-400 bg-gray-100 text-black rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" value="123/123" />
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>

                    <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text-gray-800 text-xl font-bold">ใบพันธุ์ประวัติ</h6>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                        ใบพันธุ์ประวัติอ้างอิง
                                    </h6>
                                    <div class="flex flex-wrap">
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative flex justify-center w-full">
                                                <img class="w-128 h-48" src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="mt-6 border-b-1 border-gray-400 mx-4" />

                                    <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                        ใบพันธุ์ประวัติทางการ
                                    </h6>
                                    <div class="flex flex-wrap">
                                        <div class="w-full lg:w-12/12 px-4">
                                            <div class="relative flex justify-center w-full">
                                                <img class="w-128 h-48" src="https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: "cer-page",
    data() {
        return {
            openTab: 1,
        }
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        }
    }
}
</script>

<style>
.f-white {
    color: white !important;
}
</style>
