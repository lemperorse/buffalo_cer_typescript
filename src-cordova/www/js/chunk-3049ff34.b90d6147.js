(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3049ff34"],{"17b3":function(e,t,r){},"18ff":function(e,t,r){},"7d55":function(e,t,r){"use strict";r("18ff")},"841c":function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("1d80"),s=r("129f"),l=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var i=n(e),o=String(this),c=i.lastIndex;s(c,0)||(i.lastIndex=0);var u=l(i,o);return s(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},"891e":function(e,t,r){"use strict";r("99af"),r("d81d"),r("0d03"),r("a9e3"),r("d3b7"),r("e25e"),r("25f0"),r("4795");var a=r("2909"),n=r("5530"),i=(r("17b3"),r("9d26")),s=r("dc22"),l=r("a9ad"),o=r("de2c"),c=r("7560"),u=r("58df");t["a"]=Object(u["a"])(l["a"],Object(o["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(e){return e%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10),t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var r=t%2===0?1:0,n=Math.floor(t/2),i=this.length-n+1+r;if(this.value>n&&this.value<i){var s=this.value-n+2,l=this.value+n-2-r;return[1,"..."].concat(Object(a["a"])(this.range(s,l)),["...",this.length])}if(this.value===n){var o=this.value+n-1-r;return[].concat(Object(a["a"])(this.range(1,o)),["...",this.length])}if(this.value===i){var c=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(c,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){var r=[];e=e>0?e:1;for(var a=e;a<=t;a++)r.push(a);return r},genIcon:function(e,t,r,a,n){return e("li",[e("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{type:"button","aria-label":n},on:r?{}:{click:a}},[e(i["a"],[t])])])},genItem:function(e,t){var r=this,a=t===this.value&&(this.color||"primary"),n=t===this.value,i=n?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":t===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(i,t)},on:{click:function(){return r.$emit("input",t)}}}),[t.toString()])},genItems:function(e){var t=this;return this.items.map((function(r,a){return e("li",{key:a},[isNaN(Number(r))?e("span",{class:"v-pagination__more"},[r.toString()]):t.genItem(e,r)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})},c20b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative md:pt-32 pb-32 pt-12 mt-24"},[r("Table")],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.response?r("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded",class:["light"===e.color?"bg-white":"bg-green-900 text-white"]},[r("div",{staticClass:"rounded-t mb-0 px-4 py-3 border-0"},[r("div",{staticClass:"flex flex-wrap items-center"},[e._m(0),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.run(t)}}},[r("div",{staticClass:"relative flex flex-wrap "},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10",attrs:{type:"text",placeholder:"ค้นหา"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._m(1)])]),r("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[r("button",{staticClass:"bg-indigo-500 f-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(t){return e.$router.push("/admin/addfarmer")}}},[e._v(" เพิ่มเกษตกร ")])])])]),r("div",{staticClass:"block w-full overflow-x-auto"},[r("table",{staticClass:"items-center w-full bg-transparent border-collapse"},[r("thead",[r("tr",[r("th",{staticClass:"px-6  align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]},[e._v(" ชื่อ ")]),r("th",{staticClass:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]},[e._v(" เบอร์โทรศัพท์ ")]),r("th",{staticClass:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]},[e._v(" จังหวัด ")]),r("th",{staticClass:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]},[e._v(" กลุ่มเกษตกร ")]),r("th",{staticClass:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]},[e._v(" การจัดการ ")]),r("th",{staticClass:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left",class:["light"===e.color?"bg-gray-100 text-gray-600 border-gray-200":"bg-green-800 text-green-300 border-green-700"]})])]),r("tbody",e._l(e.farmers.results,(function(t,a){return r("tr",{key:a},[r("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"},[r("img",{staticClass:"h-12 w-12 bg-white rounded-full border",attrs:{src:t.profile_image?t.profile_image:"https://sv1.picz.in.th/images/2020/11/04/bQMzml.jpg",alt:"..."}}),r("span",{staticClass:"ml-3 font-bold",class:["light"===e.color?"text-gray-700":"text-white"]},[e._v(" "+e._s(t.fullname)+" ")])]),r("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"},[e._v(" "+e._s(t.tel)+" ")]),r("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"},[r("i",{staticClass:"fas fa-circle text-red-500 mr-2"}),e._v(" "+e._s(t.iprovince)+" ")]),r("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"},[r("div",{staticClass:"flex"},[e._v(" "+e._s(t.igroup)+" ")])]),r("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"},[r("div",{staticClass:"flex items-center"},[r("button",{staticClass:"bg-green-500 f-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"},on:{click:function(r){return e.$router.push("/admin/farmerprofile?farmer="+t.id)}}},[e._v(" ดูข้อมูล ")]),r("button",{staticClass:"bg-red-500\r\n                  active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 f-white ",attrs:{type:"button"},on:{click:function(r){return e.deleteFarmer(t)}}},[e._v(" ลบ ")])])])])})),0)])]),r("div",{staticClass:"py-2 mb-4"},[r("v-app",{staticStyle:{height:"100px!important"}},[r("v-pagination",{attrs:{length:e.allPages,"total-visible":7,circle:""},on:{input:e.handlePageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)]):e._e()},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1"},[r("h3",{staticClass:"font-semibold text-base text-gray-800"},[e._v(" รายชื่อเกษตกร ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"},[r("i",{staticClass:"fas fa-search"})])}],l=(r("99af"),r("c975"),r("ac1f"),r("841c"),r("96cf"),r("1da1")),o=r("d4ec"),c=r("bee2"),u=r("262e"),d=r("2caf"),p=r("9ab4"),h=r("60a3"),g=r("dcc8"),f=r("4892"),b=function(e){Object(u["a"])(r,e);var t=Object(d["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.farmers=null,e.response=!1,e.page=1,e.allPages=1,e.search="",e}return Object(c["a"])(r,[{key:"created",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.run();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"run",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].getHttp("/api/profile/?search=".concat(this.search));case 2:this.farmers=e.sent,this.allPages=Math.ceil((null===(t=this.farmers)||void 0===t?void 0:t.count)/5),this.response=!0;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handlePageChange",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].getHttp("/api/profile/?search=".concat(this.search,"&page=").concat(t));case 2:this.farmers=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteFarmer",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=confirm("คุณแน่ใจใช่ไหมที่จะลบผู้ใช้นี้"),!r){e.next=8;break}return e.next=4,g["a"].deleteHttp("/api/profile/".concat(t.id,"/"));case 4:return e.next=6,g["a"].deleteHttp("/api/account/".concat(t.user.id,"/"));case 6:return e.next=8,this.run();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),r}(h["b"]);b=Object(p["a"])([Object(h["a"])({components:{CityDialog:f["a"]},computed:{},props:{color:{default:"light",validator:function(e){return-1!==["light","dark"].indexOf(e)}}}})],b);var v=b,x=v,m=(r("7d55"),r("2877")),w=r("6544"),y=r.n(w),_=r("7496"),C=r("891e"),$=Object(m["a"])(x,i,s,!1,null,null,null),k=$.exports;y()($,{VApp:_["a"],VPagination:C["a"]});var j={name:"farmer-all-page",components:{Table:k}},O=j,I=Object(m["a"])(O,a,n,!1,null,null,null);t["default"]=I.exports}}]);
//# sourceMappingURL=chunk-3049ff34.b90d6147.js.map