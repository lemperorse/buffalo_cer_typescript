<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <v-card class="mt-4" elevation="2" v-if="$vuetify.breakpoint.mobile">
        <v-tabs flat show-arrows>
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-tab
            @click="toggleTabs(1)"
            class="m-2"
            rounded
            elevation="3"
            :color="openTab == 1 ? `green` : ``"
          >
            <img
              src="assets/farm/2826134-agriculture/png/006-farmer.png"
              height="24px"
              width="24px"
              class="rounded-lg"
              alt=""
            />
            <span class="font-bold">ข้อมูลเกษตกร</span>
          </v-tab>
          <v-tab
            @click="toggleTabs(2)"
            class="m-2"
            rounded
            elevation="3"
            :color="openTab == 2 ? `green` : ``"
          >
            <img
              src="assets/farm/2826134-agriculture/png/028-barn.png"
              height="24px"
              width="24px"
              class="rounded-lg"
              alt=""
            />
            <span class="font-bold">ฟาร์มของฉัน</span>
          </v-tab>
          <v-tab
            @click="toggleTabs(3)"
            class="m-2"
            rounded
            elevation="3"
            :color="openTab == 3 ? `green` : ``"
          >
            <img
              src="assets/farm/2826134-agriculture/png/083-desktop.png"
              height="24px"
              width="24px"
              class="rounded-lg"
              alt=""
            />
            <span class="font-bold">ยืนยันตัวตน</span>
          </v-tab>
          <v-tab
            @click="toggleTabs(5)"
            class="m-2"
            rounded
            elevation="3"
            :color="openTab == 5 ? `green` : ``"
          >
            <img
              src="assets/farm/2826134-agriculture/png/068-phone.png"
              height="24px"
              width="24px"
              class="rounded-lg"
              alt=""
            />
            <span class="font-bold">ความปลอดภัย</span>
          </v-tab>
        </v-tabs>
      </v-card>

      <div v-else>
        <v-btn
          @click="toggleTabs(1)"
          class="m-2"
          rounded
          elevation="3"
          :color="openTab == 1 ? `green` : ``"
        >
          <img
            src="assets/farm/2826134-agriculture/png/006-farmer.png"
            height="24px"
            width="24px"
            class="rounded-lg"
            alt=""
          />
          <span class="font-bold">ข้อมูลเกษตกร</span>
        </v-btn>
        <v-btn
          @click="toggleTabs(2)"
          class="m-2"
          rounded
          elevation="3"
          :color="openTab == 2 ? `green` : ``"
        >
          <img
            src="assets/farm/2826134-agriculture/png/028-barn.png"
            height="24px"
            width="24px"
            class="rounded-lg"
            alt=""
          />
          <span class="font-bold">ฟาร์มของฉัน</span>
        </v-btn>
        <v-btn
          @click="toggleTabs(3)"
          class="m-2"
          rounded
          elevation="3"
          :color="openTab == 3 ? `green` : ``"
        >
          <img
            src="assets/farm/2826134-agriculture/png/083-desktop.png"
            height="24px"
            width="24px"
            class="rounded-lg"
            alt=""
          />
          <span class="font-bold">ยืนยันตัวตน</span>
        </v-btn>
        <v-btn
          @click="toggleTabs(5)"
          class="m-2"
          rounded
          elevation="3"
          :color="openTab == 5 ? `green` : ``"
        >
          <img
            src="assets/farm/2826134-agriculture/png/068-phone.png"
            height="24px"
            width="24px"
            class="rounded-lg"
            alt=""
          />
          <span class="font-bold">ความปลอดภัย</span>
        </v-btn>
      </div>

      <v-card
        class="
          mt-6
          relatives
          rounded-lg
          animate__animated animate__bounceInLeft animate__delay-1s
        "
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <Profile
                class="animate__animated animate__zoomIn"
                v-if="openTab === 1"
              />
            </div>

            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <Farm
                class="animate__animated animate__zoomIn"
                v-if="openTab === 2"
              />
            </div>

            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <ImageUser
                class="animate__animated animate__zoomIn"
                v-if="openTab === 3"
              />
            </div>
            <div v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">
              <Manager
                class="animate__animated animate__zoomIn"
                v-if="openTab === 5"
              />
            </div>
          </div>
        </div>
      </v-card>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Profile from "@/components/Component/User/Profile/Profile.vue";
import Farm from "@/components/Component/User/Profile/Farm.vue";
import ImageUser from "@/components/Component/User/Profile/Image.vue";
import Manager from "@/components/Component/User/Profile/Manager.vue";
import { Core } from "@/store/core";
import { Auth } from "@/store/auth";
import { User } from "@/store/user";

import CityDialog from "@/components/Dialog/City.vue";

@Component({
  components: {
    CityDialog,
    Profile,
    Farm,
    ImageUser,
    Manager,
  },
  computed: {},
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
})
export default class Table extends Vue {
  private openTab: number = 1;

  private async created() {
    await this.defaultTab();
  }

  async defaultTab() {
    let path: number = Number(this.$route.query.tab);
    return path ? await this.toggleTabs(path) : null;
  }
  async toggleTabs(tabNumber: number) {
    console.log(this.$route.fullPath);
    if (this.$route.query.tab != String(tabNumber)) {
      await this.$router.push({
        query: {
          tab: String(tabNumber),
        },
      });
    }
    this.openTab = tabNumber;
  }
}
</script>

<style>
.f-white {
  color: white !important;
}

.ho {
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

.bg2 {
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
