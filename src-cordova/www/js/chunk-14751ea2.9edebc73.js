(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14751ea2"],{"19fe":function(e,t,r){"use strict";r("63dc")},2881:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r("99af"),r("b0c0"),r("96cf");var n=r("1da1"),a=r("d4ec"),s=r("bee2"),i=r("262e"),u=r("2caf"),o=r("9ab4"),c=r("8d27"),l=r("dcc8"),p=r("0613"),m=function(e){Object(i["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.dialogCityState=!1,e.currentGeo=null,e.currentProvince=null,e.currentAmphur=null,e.currentDistrict=null,e.showName=null,e}return Object(s["a"])(r,[{key:"getGeo",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/geo/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getProvince",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/province/?geo=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAmphur",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/amphur/?province=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getDistrict",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/district/?amphur=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setShowName",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,i,u,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=null===(t=this.currentProvince)||void 0===t?void 0:t.name,i=null===(r=this.currentGeo)||void 0===r?void 0:r.name,u=null===(n=this.currentAmphur)||void 0===n?void 0:n.name,o=null===(a=this.currentDistrict)||void 0===a?void 0:a.name,this.showName="".concat(i,"-").concat(s,"-").concat(u,"-").concat(o);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(c["b"]);m=Object(o["a"])([Object(c["a"])({generateMutationSetters:!0})],m);var f=new m({store:p["a"],name:"City"})},3951:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("96cf");var n=r("1da1"),a=r("d4ec"),s=r("bee2"),i=r("262e"),u=r("2caf"),o=r("9ab4"),c=r("8d27"),l=r("dcc8"),p=r("f175"),m=r("0613"),f=function(e){Object(i["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.Hi=null,e.token=localStorage.getItem("token"),e}return Object(s["a"])(r,[{key:"register",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].postHttp("/api/register",t);case 2:if(n=e.sent,!n.id){e.next=9;break}return r.user=null===n||void 0===n?void 0:n.id,e.next=7,this.autoCreateProfile(r);case 7:return e.next=9,this.autoCreateFarm(null===n||void 0===n?void 0:n.first_name,null===n||void 0===n?void 0:n.id);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"autoCreateProfile",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/profile/create/",t));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"autoCreateFarm",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/buffalo/farm/create/",{user_id:r,name:t}));case 1:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"registerAdmin",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].postHttp("/api/register",t);case 2:if(r=e.sent,!r.id){e.next=6;break}return e.next=6,this.autoAddAdmin(null===r||void 0===r?void 0:r.id);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"autoAddAdmin",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/changeAdmin/",{user:t}));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"storeToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p["a"].defaults.headers.common["Authorization"]=null!=t?"Token ".concat(t):"";case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"storeTokenToStorage",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.setItem("token",t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"checkToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==this.token){e.next=3;break}return e.next=3,this.storeToken(this.token);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.clear(),e.next=3,l["a"].postHttp("/api/rest-auth/logout/",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(c["b"]);f=Object(o["a"])([Object(c["a"])({generateMutationSetters:!0})],f);var d=new f({store:m["a"],name:"Auth"})},"63dc":function(e,t,r){},b6f4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative md:pt-32 pb-32 pt-12 mt-24"},[r("CardAddAdmin")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"},[r("div",{staticClass:"rounded-t bg-white mb-0 px-6 py-6"},[r("div",{staticClass:"text-center flex justify-between"},[r("h6",{staticClass:"text-gray-800 text-xl font-bold"},[e._v("เพิ่มผู้ดูแลระบบ")]),r("button",{staticClass:"bg-red-500 f-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" กลับไปหน้าข้อมูลผู้ดูแลระบบ ")])])]),r("div",{staticClass:"flex-auto px-4 lg:px-10 py-10 pt-0"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("h6",{staticClass:"text-gray-500 text-sm mt-3 mb-6 font-bold uppercase"},[e._v(" บัญชี ")]),r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2"},[e._v(" ชื่อ ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.first_name,expression:"formUser.first_name"}],class:e.$xinput,attrs:{required:"",type:"text",value:" "},domProps:{value:e.formUser.first_name},on:{input:function(t){t.target.composing||e.$set(e.formUser,"first_name",t.target.value)}}})])]),r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2"},[e._v(" นามสกุล ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.last_name,expression:"formUser.last_name"}],class:e.$xinput,attrs:{required:"",type:"text",value:" "},domProps:{value:e.formUser.last_name},on:{input:function(t){t.target.composing||e.$set(e.formUser,"last_name",t.target.value)}}})])]),r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2"},[e._v(" ชื่อผู้ใช้งาน ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.username,expression:"formUser.username"}],class:e.$xinput,attrs:{required:"",type:"text",value:" "},domProps:{value:e.formUser.username},on:{input:function(t){t.target.composing||e.$set(e.formUser,"username",t.target.value)}}})])]),r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2"},[e._v(" อีเมล์ ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.email,expression:"formUser.email"}],class:e.$xinput,attrs:{type:"text",placeholder:"(ไม่บังคับ)"},domProps:{value:e.formUser.email},on:{input:function(t){t.target.composing||e.$set(e.formUser,"email",t.target.value)}}})])]),r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2",attrs:{htmlFor:"grid-password"}},[e._v(" รหัสผ่าน ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.password,expression:"formUser.password"}],class:e.$xinput,attrs:{required:"",type:"password",value:""},domProps:{value:e.formUser.password},on:{input:function(t){t.target.composing||e.$set(e.formUser,"password",t.target.value)}}})])]),r("div",{staticClass:"w-full lg:w-6/12 px-4"},[r("div",{staticClass:"relative w-full mb-3"},[r("label",{staticClass:"block uppercase text-gray-700 text-xs font-bold mb-2",attrs:{htmlFor:"grid-password"}},[e._v(" ยืนยันรหัสผ่าน ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.formUser.password2,expression:"formUser.password2"}],class:e.$xinput,attrs:{required:"",type:"password",value:""},domProps:{value:e.formUser.password2},on:{input:function(t){t.target.composing||e.$set(e.formUser,"password2",t.target.value)}}})])])]),e._m(0)])])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center mt-6"},[r("button",{staticClass:"bg-green-500 f-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"submit"}},[e._v(" บันทึกข้อมูล ")])])}],u=(r("96cf"),r("1da1")),o=r("d4ec"),c=r("bee2"),l=r("262e"),p=r("2caf"),m=r("9ab4"),f=r("60a3"),d=r("dcc8"),v=r("3951"),h=r("2881"),g=r("c1df"),b=r.n(g),w=function(e){Object(l["a"])(r,e);var t=Object(p["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.formUser={},e.formProfile={},e.prefix=[],e.gender=[],e.group=[],e}return Object(c["a"])(r,[{key:"created",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.run();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"run",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getChoice("คำนำหน้า");case 2:return this.prefix=e.sent,e.next=5,d["a"].getChoice("เพศ");case 5:return this.gender=e.sent,e.next=8,d["a"].getChoice("กลุ่มเกษตรกร");case 8:this.group=e.sent;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onChangeProvince",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.formProfile.age=b()().diff(t,"years",!1);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["a"].registerAdmin(this.formUser);case 2:t=e.sent,t.id?(alert("Success"),this.formUser={}):alert("Error");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"openCityDialog",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:h["a"].dialogCityState=!0;case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"CityFrom",get:function(){return h["a"].showName}}]),r}(f["b"]);Object(m["a"])([Object(f["c"])("formProfile.birthday")],w.prototype,"onChangeProvince",null),w=Object(m["a"])([Object(f["a"])({components:{},computed:{}})],w);var x=w,y=x,k=(r("19fe"),r("2877")),C=Object(k["a"])(y,s,i,!1,null,null,null),j=C.exports,O={name:"add-admin-page",components:{CardAddAdmin:j}},R=O,U=Object(k["a"])(R,n,a,!1,null,null,null);t["default"]=U.exports}}]);
//# sourceMappingURL=chunk-14751ea2.9edebc73.js.map