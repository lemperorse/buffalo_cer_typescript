(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d82a3a"],{"61dd":function(t,e,a){"use strict";a("ad00")},ad00:function(t,e,a){},b4d9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-2 pt-8"},[a("Table")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 px-2 rounded "},[a("div",{staticClass:"rounded-t mb-0 py-3 border-0 animate__animated animate__zoomIn p-3"},[a("div",{staticClass:"relative w-full md:w-auto px-1 max-w-full flex-grow flex-1"},[a("h3",{staticClass:"font-semibold text-base text-gray-800"},[a("button",{staticClass:"text-2xl",staticStyle:{color:"#855737"},on:{click:function(e){return t.$router.push("/user/profile")}}},[t._v("ควายในฟาร์ม")]),a("span",{staticClass:"text-2xl"},[t._v(" / "+t._s(t.farm.name))])]),a("h2",{staticClass:"text-base"},[t._v("เจ้าของ "+t._s(t.user.first_name)+" ")])]),a("br"),a("div",{staticClass:"flex flex-wrap items-center "},[a("form",{staticClass:"w-1/2",on:{submit:function(e){return e.preventDefault(),t.run(e)}}},[a("div",{staticClass:"flex rounded-full border bg-white hover:shadow-lg"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full",attrs:{type:"text",placeholder:"ค้นหาควาย ชื่อควาย, หมายเลข Microship, NID"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("div",{staticClass:"ml-2"},[a("v-btn",{attrs:{type:"submit",fab:"",depressed:"",color:"orange darken-1",dark:""}},[a("v-icon",[t._v("fas fa-search")])],1)],1)])]),a("div",{staticClass:"relative w-full max-w-full flex-grow flex-1 text-right"},[a("v-btn",{staticClass:"bg2",attrs:{dark:"",rounded:"",depressed:"",large:""},on:{click:function(e){return t.$router.push("buffalo/create")}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" fas fa-plus-square ")]),t._v(" เพิ่มควาย ")],1)],1)])]),a("div",{staticClass:"block w-full overflow-x-auto rounded-lg"},[a("div",{staticClass:"flex flex-wrap mb-4"},t._l(t.buffalos.results,(function(e,s){return e.deleted?t._e():a("div",{key:s,staticClass:"w-full md:w-1/2 xl:w-1/3 p-3 "},[a("div",{staticClass:"border bg-white rounded-lg shadow  animate__animated animate__zoomIn "},[a("div",{staticClass:"flex-auto p-4 "},[a("div",{staticClass:"flex flex-wrap "},[a("div",{staticClass:"relative w-auto pl-4 flex-initial"},[a("div",[a("v-img",{staticClass:"h-16 w-16 bg-white rounded-full border",attrs:{src:t.$api+e.front_image}})],1)]),a("div",{staticClass:"relative w-full pr-4 max-w-full flex-grow flex-1 text-right"},[a("span",{staticClass:"font-semibold text-xl text-gray-800"},[t._v(" ชื่อควาย : "+t._s(e.name)+" ")]),a("h5",{staticClass:"text-gray-500 uppercase font-bold text-xs"},[t._v(" หมายเลข MICROCHIP : "+t._s(e.nid)+" ")]),a("span",[a("v-btn",{attrs:{color:"amber",dark:"",rounded:"",depressed:""},on:{click:function(a){return t.$router.push("buffalo/profile?id="+e.id)}}},[t._v("ดูรายละเอียด")])],1)])])])])])})),0)]),a("div",{staticClass:"py-2 "},[a("v-pagination",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",attrs:{color:"#4361EE",length:t.allPages,"total-visible":9,circle:""},on:{input:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[a("span",{staticClass:"w-auto flex justify-end items-center text-grey p-2"},[a("i",{staticClass:"fas fa-search text-xl"})])])}],l=(a("99af"),a("c975"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),c=a("d4ec"),o=a("bee2"),u=a("262e"),f=a("2caf"),d=a("9ab4"),p=a("60a3"),v=a("dcc8"),h=a("21d1"),m=a("25d1"),b=a("d4d8"),x=function(t){Object(u["a"])(a,t);var e=Object(f["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.checkImg=v["a"].imageExists,t.user={},t.farm={},t.buffalos=[],t.response=!1,t.page=1,t.allPages=1,t.search="",t}return Object(o["a"])(a,[{key:"created",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.run();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"run",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b["a"].onLoad();case 2:return t.next=4,h["a"].getUser();case 4:return a=t.sent,t.next=7,v["a"].getHttp("/api/account/".concat(a.pk,"/"));case 7:return this.user=t.sent,t.next=10,v["a"].getHttp("/user/buffalo/farm/".concat(a.pk,"/"));case 10:return this.farm=t.sent,t.next=13,v["a"].getHttp("/api/buffalo/buffalo/?farm__id=".concat(this.farm.id,"&search=").concat(this.search));case 13:return this.buffalos=t.sent,this.allPages=Math.ceil((null===(e=this.buffalos)||void 0===e?void 0:e.count)/9),this.response=!0,t.next=18,b["a"].offLoad();case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"handlePageChange",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["a"].getHttp("/api/buffalo/buffalo/?farm__id=".concat(this.farm.id,"&search=").concat(this.search,"&page=").concat(e));case 2:this.buffalos=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(p["c"]);x=Object(d["a"])([Object(p["a"])({components:{MapView:m["a"]},computed:{},props:{color:{default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}}})],x);var g=x,w=g,_=(a("61dd"),a("2877")),C=a("6544"),k=a.n(C),y=a("8336"),O=a("132d"),j=a("adda"),I=a("891e"),P=Object(_["a"])(w,n,i,!1,null,"71c286e2",null),R=P.exports;k()(P,{VBtn:y["a"],VIcon:O["a"],VImg:j["a"],VPagination:I["a"]});var $={name:"buffalo-all-page",components:{Table:R}},E=$,H=Object(_["a"])(E,s,r,!1,null,null,null);e["default"]=H.exports}}]);
//# sourceMappingURL=chunk-38d82a3a.29c1d53c.js.map