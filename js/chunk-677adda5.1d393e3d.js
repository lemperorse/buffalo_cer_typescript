(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-677adda5"],{7496:function(t,e,a){"use strict";a("df86");var i=a("7560"),r=a("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},df86:function(t,e,a){},e858:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"container mx-auto  h-full flex justify-center items-center"},[a("div",{staticClass:"flex content-center items-center justify-center  "},[a("div",{staticClass:"w-full lg:w-6/12 px-4"},[a("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"},[a("div",{staticClass:"rounded-t mb-0 px-6 py-6"},[a("button",{staticClass:"bg-white shadow-xl rounded-full mb-2",on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),a("div",{staticClass:"text-center mb-3 "},[a("h2",{staticClass:" "},[t._v("ส่งคำขอไปที่ผู้ดูแลระบบ")])]),a("form",{on:{submit:function(e){return e.preventDefault(),t.calling()}}},[a("div",{staticClass:"text-blue-500 text-center mb-3 font-bold"},[a("div",{staticClass:"mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"}),a("div",{staticClass:"w-full md:w-12/12 pt-2"},[a("v-text-field",{attrs:{filled:"",rounded:"",required:"",label:"หมายเลขบัตรประชาชน"},model:{value:t.form.personal_id,callback:function(e){t.$set(t.form,"personal_id",e)},expression:"form.personal_id"}})],1),a("div",{staticClass:"w-full md:w-12/12 pt-2"},[a("v-text-field",{attrs:{filled:"",rounded:"",required:"",label:"หมายเลขโทรศัพท์ที่ติดต่อกลับได้"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),a("br"),a("v-btn",{staticClass:"w-full",attrs:{type:"submit",dark:"",rounded:"",large:"",color:"blue accent-4"}},[t._v("ส่งคำขอ")])],1)])])])])])]),a("CityDialog")],1)},r=[],s=(a("96cf"),a("1da1")),l=a("d4ec"),n=a("bee2"),o=a("262e"),c=a("2caf"),u=a("9ab4"),d=a("dcc8"),f=a("60a3"),p=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(l["a"])(this,a),t=e.apply(this,arguments),t.form={personal_id:null,tel:null,status:!1},t}return Object(n["a"])(a,[{key:"calling",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].postHttp("/user/account/forgetpassword/",this.form);case 2:e=t.sent,e&&(alert("ส่งคำขอไปที่ผู้ดูแลระบบแล้ว"),this.$router.push("/"));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(f["c"]);p=Object(u["a"])([Object(f["a"])({components:{},computed:{}})],p);var v=p,b=v,m=a("2877"),h=a("6544"),w=a.n(h),x=a("7496"),y=a("8336"),g=a("132d"),C=a("8654"),k=Object(m["a"])(b,i,r,!1,null,null,null);e["default"]=k.exports;w()(k,{VApp:x["a"],VBtn:y["a"],VIcon:g["a"],VTextField:C["a"]})}}]);
//# sourceMappingURL=chunk-677adda5.1d393e3d.js.map