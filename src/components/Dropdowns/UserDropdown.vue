<template>
  <div>
    <a
      class="text-gray-600 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full"
        >
          <img ref="profileImage"
            alt="..."

            class=" w-12 h-12 rounded-full align-middle border-none shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <button
        @click="$router.push('/user/profile')& close()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left"
      >
        ข้อมูลส่วนตัว
      </button>
      <button
          @click="$router.push('/user/search')& close()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left "
      >

        ค้นหาใบพันธุ์ประวัติ
      </button>
      <button
          @click="$router.push('/user/buffalo') & close() "
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left"
      >
        ข้อมูลควาย
      </button>
      <div class="h-0 my-2 border border-solid border-gray-200" />
      <button
          @click="logout()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left"
      >
        ออกจากระบบ
      </button>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/team-1-800x800.jpg";
import {Auth} from "@/store/auth";
import {Core} from "@/store/core";
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
        let profileImage  = this.$refs.profileImage
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
    close(){
        this.dropdownPopoverShow = false;
    },
    async logout(){
      await Auth.logout();
      await location.reload()
    }
  },
};
</script>
