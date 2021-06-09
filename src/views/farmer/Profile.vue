<template>
<div class="p-2">
    <div class="w-full lg:w-8/12 px-6 md:px-10">
        <h2 class="text-2xl"> <b>ข้อมูลส่วนตัวของฉัน</b> </h2> <span>ประวัติส่วนตัว ข้อมูลฟาร์ม ภาพถ่ายต่างๆ</span><br><br>
    </div>
    <div class="flex flex-wrap-reverse">
        <div class="w-full lg:w-8/12  md:px-10">
            <CardSettingFarmer />
        </div>
        <div class="w-full lg:w-4/12 ">
            <CardProfileFarmer />
        </div>
    </div>
</div>
</template>

<script>
import CardSettingFarmer from "@/components/Component/User/Profile/CardSettingFarmer";
import CardProfileFarmer from "@/components/Component/User/Profile/CardProfileFarmer";
export default {
    name: "profile-page",
    components: {
        CardSettingFarmer,
        CardProfileFarmer
    },
};
</script>
