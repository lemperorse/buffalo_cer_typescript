(function(e){function n(n){for(var a,c,u=n[0],h=n[1],s=n[2],i=0,d=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(e[a]=h[a]);f&&f(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=h(h.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-04102b30":"d803dba0","chunk-36cc2006":"ec255b3d","chunk-24604c0e":"2dac3e81","chunk-2b4e7ec8":"07e36cec","chunk-2a227197":"d257a853","chunk-7b1d7c14":"32883f75","chunk-a3803aa4":"7d26d275","chunk-38d82a3a":"29c1d53c","chunk-d705463e":"26381a4b","chunk-545e80c9":"cd7bcce7","chunk-1d72fce4":"00f900c6","chunk-31159e52":"80a9f463","chunk-3153afd5":"4e4a939c","chunk-446529fe":"fe7e19c3","chunk-56f404b5":"5e9d333a","chunk-6a71904a":"3a1b97b6","chunk-d498a27c":"5ac33fb6","chunk-d4d36a92":"59e741b2","chunk-4af4e56c":"079628c0","chunk-2d221a52":"65a2fd6f","chunk-4dfaa1c8":"6ffd80df","chunk-62439076":"81f05a25","chunk-677adda5":"e9772829","chunk-47a2549a":"a670c798"}[e]+".js"}function h(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-2b4e7ec8":1,"chunk-2a227197":1,"chunk-7b1d7c14":1,"chunk-a3803aa4":1,"chunk-38d82a3a":1,"chunk-d705463e":1,"chunk-545e80c9":1,"chunk-1d72fce4":1,"chunk-31159e52":1,"chunk-3153afd5":1,"chunk-446529fe":1,"chunk-56f404b5":1,"chunk-6a71904a":1,"chunk-d498a27c":1,"chunk-d4d36a92":1,"chunk-4af4e56c":1,"chunk-62439076":1,"chunk-677adda5":1,"chunk-47a2549a":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-04102b30":"31d6cfe0","chunk-36cc2006":"31d6cfe0","chunk-24604c0e":"31d6cfe0","chunk-2b4e7ec8":"c5c5cd51","chunk-2a227197":"bc0ed340","chunk-7b1d7c14":"a4dde973","chunk-a3803aa4":"9cff6628","chunk-38d82a3a":"2b2dba4d","chunk-d705463e":"38abb664","chunk-545e80c9":"7264be9b","chunk-1d72fce4":"88efcc8c","chunk-31159e52":"4150a9ff","chunk-3153afd5":"f7efe43f","chunk-446529fe":"e2d9b71e","chunk-56f404b5":"c0260280","chunk-6a71904a":"3759021c","chunk-d498a27c":"15d3a4c5","chunk-d4d36a92":"90e70dd2","chunk-4af4e56c":"7a254714","chunk-2d221a52":"31d6cfe0","chunk-4dfaa1c8":"31d6cfe0","chunk-62439076":"d8d40033","chunk-677adda5":"b53b4043","chunk-47a2549a":"73a04cec"}[e]+".css",r=h.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===a||i===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],i=s.getAttribute("data-href");if(i===a||i===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),t(o)},f.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,h.nc&&i.setAttribute("nonce",h.nc),i.src=u(e);var d=new Error;s=function(n){i.onerror=i.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(n)},h.m=e,h.c=a,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)h.d(t,a,function(n){return e[n]}.bind(null,a));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="/buffalo_cer_typescript/",h.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0613":function(e,n,t){"use strict";var a=t("2b0e"),c=t("2f62");a["a"].use(c["a"]),n["a"]=new c["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"0bd4":function(e,n,t){var a={"./AddBuffalo.vue":["db3d","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-3153afd5"],"./Base.vue":["1bde","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-4af4e56c","chunk-62439076"],"./Buffalo.vue":["b4d9","chunk-04102b30","chunk-36cc2006","chunk-2b4e7ec8","chunk-38d82a3a"],"./BuffaloProfile.vue":["43c6","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-56f404b5"],"./BuffaloPublic.vue":["04d9","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-31159e52"],"./Home copy.vue":["6307","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-d4d36a92"],"./Home.vue":["8f37","chunk-04102b30","chunk-36cc2006","chunk-24604c0e","chunk-a3803aa4"],"./Profile.vue":["f461","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-6a71904a"],"./ReportBuffalo.vue":["adbb","chunk-04102b30","chunk-36cc2006","chunk-24604c0e","chunk-2b4e7ec8","chunk-2a227197"],"./ReportSystem.vue":["9037","chunk-04102b30","chunk-36cc2006","chunk-24604c0e","chunk-2b4e7ec8","chunk-7b1d7c14"],"./Search.vue":["db8f","chunk-04102b30","chunk-36cc2006","chunk-2b4e7ec8","chunk-d705463e"]};function c(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(a)},c.id="0bd4",e.exports=c},"6a76":function(e,n,t){var a={"./Base.vue":["d562","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-4af4e56c","chunk-4dfaa1c8"],"./Forgotpassword.vue":["d263","chunk-04102b30","chunk-47a2549a"],"./Forgotpassword_for_admin.vue":["e858","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-677adda5"],"./Forgotpassword_for_onyourown.vue":["4d73","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-1d72fce4"],"./Home.vue":["5d8a","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-446529fe"],"./QA.vue":["cadb","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-4af4e56c","chunk-2d221a52"],"./Register.vue":["b590","chunk-04102b30","chunk-36cc2006","chunk-545e80c9","chunk-24604c0e","chunk-d498a27c"]};function c(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],c=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(c)}))}c.keys=function(){return Object.keys(a)},c.id="6a76",e.exports=c},bd5d:function(e,n,t){"use strict";t("e778")},cd49:function(e,n,t){"use strict";t.r(n),t.d(n,"vm",(function(){return F}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=(t("f175"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"id"},[t("router-view")],1)}),r=[],o=a["a"].extend({name:"App",components:{},data:function(){return{}}}),u=o,h=t("2877"),s=Object(h["a"])(u,c,r,!1,null,null,null),i=s.exports,d=(t("d3b7"),t("8c4f")),f=function(e){return function(){return t("0bd4")("./".concat(e,".vue"))}},l=[{path:"",name:"name",component:f("Home")},{path:"/user/home",name:"หน้าแรก",icon:"em em-house_with_garden",show:!0,component:f("Home")},{path:"/user/search",name:"ค้นหาใบพันธ์ประวัติ",icon:"em em-card_file_box",show:!0,component:f("Search")},{path:"/user/cer",name:"cer",component:f("Cer")},{path:"/user/profile",name:"ข้อมูลส่วนตัวของฉัน",icon:"em em-male-farmer",show:!0,component:f("Profile")},{path:"/user/buffalo",name:"ควายของฉัน",icon:"em em-water_buffalo",show:!0,component:f("Buffalo")},{path:"buffalo/profile",name:"buffalo-profile",component:f("BuffaloProfile")},{path:"buffalo/public",name:"buffalo-public",component:f("BuffaloPublic")},{path:"buffalo/create",name:"addbuffaloage",component:f("AddBuffalo")},{path:"/user/reportbuffalo",name:"reportbuffalo",component:f("ReportBuffalo")},{path:"/user/reportsystem",name:"reportsystem",component:f("ReportSystem")}],p=function(e){return function(){return t("6a76")("./".concat(e,".vue"))}},k=[{path:"",name:"admin-home",component:p("Home")},{path:"qa",name:"admin-qa",component:p("QA")},{path:"/test/",name:"test",component:p("Test")},{path:"/register/",name:"register",component:p("Register")},{path:"/re-password/",name:"forgotpassword",component:p("Forgotpassword")},{path:"/re-password-admin/",name:"forgot-password-for-admin",component:p("Forgotpassword_for_admin")},{path:"/re-password-onyourown/",name:"forgot-password-for-onyourown",component:p("Forgotpassword_for_onyourown")}];a["a"].use(d["a"]);var b=[{path:"/",permission:"Root",component:function(){return Promise.all([t.e("chunk-04102b30"),t.e("chunk-36cc2006"),t.e("chunk-545e80c9"),t.e("chunk-4af4e56c"),t.e("chunk-4dfaa1c8")]).then(t.bind(null,"d562"))},children:k},{path:"/user/",permission:"User",component:function(){return Promise.all([t.e("chunk-04102b30"),t.e("chunk-36cc2006"),t.e("chunk-545e80c9"),t.e("chunk-4af4e56c"),t.e("chunk-62439076")]).then(t.bind(null,"1bde"))},children:l}],m=new d["a"]({base:"/buffalo_cer_typescript/",routes:b}),v=m,w=t("0613"),g=t("f309");a["a"].use(g["a"]);var y=new g["a"]({lang:{current:"th"}}),_=t("9062"),x=t.n(_),E=(t("e40d"),t("2cab"),t("1321")),O=t.n(E),P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.width>1025?t("v-card",{class:"rounded-lg "+e.c,attrs:{flat:"",elevation:"3"}},[t("v-card-title",{attrs:{"primary-title":""}},[t("h2",{staticClass:"wrap-txt "},[e._v(e._s(e.name))])]),t("v-divider"),t("v-card-text",[t("center",[t("img",{staticClass:"hvr-grow",attrs:{src:e.image,height:e.h,width:e.w,alt:""},on:{click:function(n){return e.$router.push(e.path)}}}),t("br"),t("h2",{staticClass:"font-bold text-black"},[e._v(" "+e._s(e.head))]),t("p",[e._v(e._s(e.txt)+" ")])])],1),t("v-card-actions",[t("v-btn",{attrs:{color:"deep-purple accent-3",block:"",text:""},on:{click:function(n){return e.$router.push(e.path)}}},[e._v(e._s(e.caption))])],1)],1):t("v-card",{attrs:{flat:"",elevation:"3"}},[t("v-card-title",{attrs:{"primary-title":""}},[t("h2",{staticClass:"wrap-txt "},[e._v(e._s(e.name))])]),t("v-divider"),t("div",{staticClass:"flex flex-row items-center"},[t("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[t("v-img",{attrs:{src:e.image}})],1),t("div",[t("h2",{staticClass:"font-bold text-black mt-6"},[e._v(" "+e._s(e.head))]),t("p",{staticClass:"text-gray-500"},[e._v(e._s(e.txt)+" ")]),t("v-card-actions",[t("v-btn",{attrs:{color:"deep-purple accent-3",block:"",text:""},on:{click:function(n){return e.$router.push(e.path)}}},[e._v(e._s(e.caption))])],1)],1)],1)],1)},C=[],$={props:{c:{default:"h-full"},h:{default:"200px"},w:{default:"200px"},image:{default:"/assets/buffalo/buffalo.png"},name:{default:"Title Menu"},caption:{default:""},path:{default:"/"},txt:{default:""},head:{default:"แก้ไขทันที"}},computed:{width:function(){return this.$vuetify.breakpoint.width}}},j=$,B=(t("bd5d"),t("6544")),S=t.n(B),A=t("8212"),R=t("8336"),T=t("b0af"),V=t("99d9"),N=t("ce7e"),U=t("adda"),L=Object(h["a"])(j,P,C,!1,null,null,null),D=L.exports;S()(L,{VAvatar:A["a"],VBtn:R["a"],VCard:T["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:V["c"],VDivider:N["a"],VImg:U["a"]}),a["a"].prototype.$api="http://www.buffalomarket.agri.up.ac.th:1003/",a["a"].prototype.$xbtn="text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",a["a"].prototype.$btn="text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",a["a"].prototype.$input="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150",a["a"].prototype.$input1="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full border hover:shadow-lg",a["a"].prototype.$rt="ยืนยัน",a["a"].prototype.$xinput="w-full pl-10 px-3 py-3 placeholder-gray-400 text-black bg-gray-100 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150",a["a"].prototype.$tr="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4",a["a"].prototype.$label="block uppercase text-gray-700 text-xs font-bold mb-2",a["a"].prototype.$innput="relative flex w-full flex-wrap items-stretch mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",a["a"].prototype.$iconinput="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1 mt-1 ",a["a"].prototype.$btnsuccess="w-full rounded m-4 p-2 bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",a["a"].prototype.$btnsuccess1="w-full rounded p-2 bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",a["a"].prototype.$search1="w-full pl-10 px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150",a["a"].use(x.a,{color:"red"}),a["a"].component("loading",x.a),a["a"].use(O.a),a["a"].component("apexchart",O.a),a["a"].component("Menu",D),a["a"].prototype.$server="http://www.buffalomarket.agri.up.ac.th:1003/",a["a"].config.productionTip=!1;var F=new a["a"]({router:v,store:w["a"],vuetify:y,render:function(e){return e(i)}}).$mount("#app")},e778:function(e,n,t){},f175:function(e,n,t){"use strict";var a=t("bc3a"),c=t.n(a),r={baseURL:Object({NODE_ENV:"production",VUE_APP_SERVER:"http://www.buffalomarket.agri.up.ac.th:1003/",BASE_URL:"/buffalo_cer_typescript/"}).baseURL||Object({NODE_ENV:"production",VUE_APP_SERVER:"http://www.buffalomarket.agri.up.ac.th:1003/",BASE_URL:"/buffalo_cer_typescript/"}).apiUrl||"http://www.buffalomarket.agri.up.ac.th:1003/"},o=c.a.create(r);n["a"]=o}});
//# sourceMappingURL=app.422784b3.js.map