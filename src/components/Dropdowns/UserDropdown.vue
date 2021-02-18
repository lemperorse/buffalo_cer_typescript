<template>
<div class="">
    <a class="text-gray-600 block" href="#pablo" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
        <div class="items-center flex rounded-full border-4 border-white m-2">
            <span class="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full ">
                <img ref="profileImage" alt="..." class=" w-12 h-12 rounded-full align-middle border-none shadow-lg" :src="image" />
            </span>
        </div>
    </a>
    <div ref="popoverDropdownRef" class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }">
        <button @click="$router.push('/user/profile')& close()" class="ho hover:bg-purple-800 hover:text-white rounded-lg text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left">
            ข้อมูลส่วนตัว
        </button>
        <button @click="$router.push('/user/search')& close()" class="ho hover:bg-purple-800 hover:text-white rounded-lg text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left ">

            ค้นหาใบพันธุ์ประวัติ
        </button>
        <button @click="$router.push('/user/buffalo') & close() " class="ho hover:bg-purple-800 hover:text-white rounded-lg text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left">
            ข้อมูลควาย
        </button>
        <div class="h-0 my-2 border border-solid border-gray-200" />
        <button @click="logout()" class="ho hover:bg-red-800 hover:text-white rounded-lg text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left">
            ออกจากระบบ
        </button>
    </div>
</div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/team-1-800x800.jpg";
import { Auth } from "@/store/auth";
import { Core } from "@/store/core";
import {
    User
} from '@/store/user'

export default {
    data() {
        return {
            dropdownPopoverShow: false,
            image: image,
        };
    },
    async mounted() {
        await this.run()
    },
    methods: {

        async run() {
            let user = await User.getUser();
            console.log('[USER]', user)
            let profile = await Core.getHttp(`/user/account/myprofile/${user.pk}/`)
            this.formProfile = await Core.getHttp(`/user/account/profile/image/${profile.id}/`)
            if (this.formProfile.profile_image) {
                let profileImage = this.$refs.profileImage
                profileImage.src = this.formProfile.profile_image
            }

            await Auth.setUser(user.pk)
            this.response = true
        },
        toggleDropdown: function (event) {
            event.preventDefault();
            if (this.dropdownPopoverShow) {
                this.dropdownPopoverShow = false;
            } else {
                this.dropdownPopoverShow = true;
                createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                    placement: "bottom-start",
                });
            }
        },
        close() {
            this.dropdownPopoverShow = false;
        },
        async logout() {
            await Auth.logout();
            await location.reload()
        }
    },
};
</script>

<style scoped>
.ho{
    transition: 0.8s;  
} 
.ho:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(224, 224, 224, 0.25), 
    -5px -5px 30px 15px rgba(145, 145, 145, 0.22);
}
.bg1 {
    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233b00dd'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
