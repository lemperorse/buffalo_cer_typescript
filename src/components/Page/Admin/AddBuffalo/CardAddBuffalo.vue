<template>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-gray-800 text-xl font-bold">เพิ่มควาย</h6>
        </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                ข้อมูลทั่วไป
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อหรือหมายเลขควาย
                        </label>
                        <input type="text" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลข NID
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลขไมโครซิป
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            วันเกิด
                        </label>
                        <input type="date" :class="`${$xinput} border-edit`" value=" " />
                    </div>

                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            อายุ(ปี)
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            เพศ
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                                <option>ผู้</option>
                                <option>เมีย</option>
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
                            สี
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                                <option>ดำ</option>
                                <option>น้ำตาล</option>
                                <option>ขาว</option>
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
                            สถานะ
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                                <option>มีชีวิต</option>
                                <option>ไม่มีชีวิต</option>
                                <option>โอน</option>
                                <option>ย้าย</option>
                                <option>ขาย</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                ราคาและแหล่งที่มา
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            แหล่งที่มา
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-100 border border-gray-100 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">
                                <option>พ่อค้าคนกลาง</option>
                                <option>ตลาด</option>
                                <option>เพาะพันธุ์</option>
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
                            ราคา
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                พ่อพันธุ์และแม่พันธุ์
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อหรือหมายเลขพ่อ
                        </label>
                        <input type="text" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลข NID พ่อ
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลขไมโครชิปพ่อ
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชื่อหรือหมายเลขแม่
                        </label>
                        <input type="text" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลข NID แม่
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            หมายเลขไมโครชิปแม่
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                ขนาดควาย
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            น้ำหนัก(กิโลกรัม)
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความกว้างรอบอก(เซนติเมตร)
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ความยาวรอบลำตัว(เซนติเมตร)
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                            ชความสูง(เซนติเมตร)
                        </label>
                        <input type="number" :class="`${$xinput} border-edit`" value=" " />
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                รูปภาพ
            </h6>
            <div class="flex flex-wrap flex justify-center">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ภาพถ่ายด้านหน้า
                        </h6>
                        <v-file-input label="เลือกไฟล์" outlined dense></v-file-input>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ภาพถ่ายด้านข้าง
                        </h6>
                        <v-file-input label="เลือกไฟล์" outlined dense></v-file-input>
                    </div>
                </div>
            </div>

            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-6 mb-6 font-bold uppercase">
                ใบพันธุ์ประวัติ
            </h6>
            <div class="flex flex-wrap flex justify-center">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ใบพันธุ์ประวัติอ้างอิง
                        </h6>
                        <v-file-input label="เลือกรไฟล์" outlined dense></v-file-input>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            ใบพันธุ์ประวัติทางการ
                        </h6>
                        <v-file-input label="เลือกไฟล์" outlined dense></v-file-input>
                    </div>
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <button class="bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    บันทึกข้อมูล
                </button>
            </div>

        </form>
    </div>
</div>
</template>

<style>
.f-white {
    color: white !important;
}
</style>
