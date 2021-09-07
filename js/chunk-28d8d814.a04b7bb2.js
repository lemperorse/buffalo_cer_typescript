(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28d8d814"],{"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"21d1":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("96cf");var n=r("1da1"),a=r("d4ec"),i=r("bee2"),u=r("262e"),s=r("2caf"),c=r("9ab4"),o=r("8d27"),l=r("dcc8"),p=r("0613"),f=function(e){Object(u["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.user=null,e.permission=null,e.routeUser="/",e.profile=null,e.farm=null,e}return Object(i["a"])(r,[{key:"autoCreateProfile",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/profile/create/",t));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getUser",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/rest-auth/user/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getProfile",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/user/account/myprofile/".concat(t,"/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadUser",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:if(t=e.sent,!t.pk){e.next=19;break}return e.next=6,l["a"].getHttp("/api/account/".concat(t.pk,"/"));case 6:return r=e.sent,e.next=9,this.getProfile(t.pk);case 9:return n=e.sent,this.user=Object.assign({},t,n,r,{user_id:t.pk,profile_id:n.id}),this.permission=r.is_staff,e.next=14,l["a"].getHttp("/user/buffalo/farm/".concat(t.pk,"/"));case 14:return this.farm=e.sent,this.routeUser=(r.is_staff,"/user/home"),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setUser",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:return t=e.sent,e.next=5,this.getProfile(t.pk);case 5:return r=e.sent,e.next=8,l["a"].getHttp("/api/account/".concat(t.pk,"/"));case 8:return n=e.sent,e.next=11,l["a"].getHttp("/user/buffalo/farm/".concat(t.pk,"/"));case 11:this.farm=e.sent,this.user=Object.assign({},t,r,n,{user_id:t.pk,profile_id:r.id});case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(o["b"]);f=Object(c["a"])([Object(o["a"])({generateMutationSetters:!0})],f);var d=new f({store:p["a"],name:"User"})},3951:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));r("96cf");var n=r("1da1"),a=r("d4ec"),i=r("bee2"),u=r("262e"),s=r("2caf"),c=r("9ab4"),o=r("8d27"),l=r("dcc8"),p=r("f175"),f=r("0613"),d=function(e){Object(u["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.Hi=null,e.token=localStorage.getItem("token"),e.user=null,e}return Object(i["a"])(r,[{key:"setUser",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getHttp("/api/account/".concat(t,"/"));case 2:this.user=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].postHttp("/api/register",t);case 2:if(a=e.sent,!a.id){e.next=10;break}return r.user=null===a||void 0===a?void 0:a.id,e.next=7,this.autoCreateProfile(r);case 7:return e.next=9,this.autoCreateFarm(null===a||void 0===a?void 0:a.first_name,null===a||void 0===a?void 0:a.id,n);case 9:return e.abrupt("return",a);case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"autoCreateProfile",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/profile/create/",t));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"autoCreateFarm",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/buffalo/farm/create/",{user_id:r,name:t,location:n||"19.0290389,99.8906438"}));case 1:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"registerAdmin",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].postHttp("/api/register",t);case 2:if(r=e.sent,!r.id){e.next=6;break}return e.next=6,this.autoAddAdmin(null===r||void 0===r?void 0:r.id);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"autoAddAdmin",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l["a"].postHttp("/api/changeAdmin/",{user:t}));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"removeToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p["a"].defaults.headers.common["Authorization"]="";case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"storeToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p["a"].defaults.headers.common["Authorization"]=null!=t?"Token ".concat(t):"";case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"storeTokenToStorage",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.setItem("token",t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"checkToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==this.token){e.next=6;break}return e.next=3,this.storeToken(this.token);case 3:return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"logout",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.clear(),e.next=3,l["a"].postHttp("/api/rest-auth/logout/",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(o["b"]);d=Object(c["a"])([Object(o["a"])({generateMutationSetters:!0})],d);var g=new d({store:f["a"],name:"Auth"})},"453c":function(e,t,r){"use strict";r("6958")},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),u=r("50c4"),s=r("a691"),c=r("1d80"),o=r("8aa5"),l=r("14c3"),p=Math.max,f=Math.min,d=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var x=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,b=x?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!x&&m||"string"===typeof n&&-1===n.indexOf(b)){var i=r(t,e,this,n);if(i.done)return i.value}var c=a(e),d=String(this),g="function"===typeof n;g||(n=String(n));var h=c.global;if(h){var y=c.unicode;c.lastIndex=0}var k=[];while(1){var R=l(c,d);if(null===R)break;if(k.push(R),!h)break;var O=String(R[0]);""===O&&(c.lastIndex=o(d,u(c.lastIndex),y))}for(var j="",E=0,_=0;_<k.length;_++){R=k[_];for(var C=String(R[0]),S=p(f(s(R.index),d.length),0),U=[],A=1;A<R.length;A++)U.push(v(R[A]));var T=R.groups;if(g){var I=[C].concat(U,S,d);void 0!==T&&I.push(T);var $=String(n.apply(void 0,I))}else $=w(C,d,S,U,T,n);S>=E&&(j+=d.slice(E,S)+$,E=S+C.length)}return j+d.slice(E)}];function w(e,r,n,a,u,s){var c=n+e.length,o=a.length,l=h;return void 0!==u&&(u=i(u),l=g),t.call(s,l,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>o){var p=d(l/10);return 0===p?t:p<=o?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):t}s=a[l-1]}return void 0===s?"":s}))}}))},6958:function(e,t,r){},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,u=String.prototype.replace,s=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],p=c||l||o;p&&(s=function(e){var t,r,a,s,p=this,f=o&&p.sticky,d=n.call(p),g=p.source,h=0,v=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),r=new RegExp("^(?:"+g+")",d)),l&&(r=new RegExp("^"+g+"$(?!\\s)",d)),c&&(t=p.lastIndex),a=i.call(f?r:p,v),f?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:c&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),l&&a&&a.length>1&&u.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d562:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("CityDialog"),r("router-view")],1)},a=[],i=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),u=r("d4ec"),s=r("bee2"),c=r("262e"),o=r("2caf"),l=r("9ab4"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"},[r("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[r("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},[r("router-link",{staticClass:"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",attrs:{to:"/"}},[e._v(" พันธุ์ประวัติควายไทย ")])],1),r("div",{staticClass:"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none",class:[e.navbarOpen?"block rounded shadow-lg":"hidden"],attrs:{id:"example-navbar-warning"}},[r("ul",{staticClass:"flex flex-col lg:flex-row list-none mr-auto"}),e._m(0)])])])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"flex flex-col lg:flex-row list-none lg:ml-auto"},[r("li",{staticClass:"flex items-center"},[r("a",{staticClass:"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F",target:"_blank"}},[r("i",{staticClass:"lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg"}),r("span",{staticClass:"lg:hidden inline-block ml-2"},[e._v("Share")])])]),r("li",{staticClass:"flex items-center"},[r("a",{staticClass:"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20",target:"_blank"}},[r("i",{staticClass:"lg:text-gray-300 text-gray-500 fab fa-app-store-ios text-lg leading-lg"}),r("span",{staticClass:"lg:hidden inline-block ml-2"},[e._v("Tweet")])])]),r("li",{staticClass:"flex items-center"},[r("a",{staticClass:"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",attrs:{href:"https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar",target:"_blank"}},[r("i",{staticClass:"lg:text-gray-300 text-gray-500 fab fa-google-play text-lg leading-lg"}),r("span",{staticClass:"lg:hidden inline-block ml-2"},[e._v("Star")])])]),r("li",{staticClass:"flex items-center"},[r("button",{staticClass:"bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-arrow-alt-circle-down"}),e._v(" ดาวน์โหลด ")])])])}],d={data:function(){return{navbarOpen:!1}},methods:{setNavbarOpen:function(){this.navbarOpen=!this.navbarOpen}},components:{}},g=d,h=r("2877"),v=Object(h["a"])(g,p,f,!1,null,null,null),x=v.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container mx-auto px-4"},[r("hr",{staticClass:"mb-6 border-b-1 border-gray-700"}),r("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[r("div",{staticClass:"w-full md:w-4/12 px-4"},[r("div",{staticClass:"text-sm text-gray-600 font-semibold py-1 text-center md:text-left"},[e._v(" ลิขสิทธิ์ © 2563 "),r("a",{staticClass:"text-white hover:text-gray-400 text-sm font-semibold py-1",attrs:{href:"https://www.creative-tim.com?ref=vn-footer-small"}},[e._v(" โดย ศูนย์วิจัยและบํารุงพันธุ์สัตว์พะเยา ")])])])])])])}],w=(r("0d03"),{data:function(){return{date:(new Date).getFullYear()}},props:{absolute:{type:Boolean,default:!1}}}),y=w,k=(r("453c"),Object(h["a"])(y,m,b,!1,null,"911b681a",null)),R=k.exports,O=r("4892"),j=r("60a3"),E=r("21d1"),_=r("3951"),C=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(u["a"])(this,r),t.apply(this,arguments)}return Object(s["a"])(r,[{key:"created",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].checkToken();case 2:return t=e.sent,e.next=5,E["a"].loadUser();case 5:if(r=e.sent,r||!t){e.next=11;break}return e.next=9,_["a"].logout();case 9:return e.next=11,location.reload();case 11:return e.next=13,this.$router.replace(E["a"].routeUser);case 13:console.log(E["a"].routeUser);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(j["c"]);C=Object(l["a"])([Object(j["a"])({components:{Navbar:x,CityDialog:O["a"],FooterSmall:R},computed:{}})],C);var S=C,U=S,A=Object(h["a"])(U,n,a,!1,null,null,null);t["default"]=A.exports},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),u=r("9263"),s=r("9112"),c=i("species"),o=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var g=i(e),h=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),v=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!h||!v||"replace"===e&&(!o||!l||f)||"split"===e&&!d){var x=/./[g],m=r(g,""[e],(function(e,t,r,n,a){return t.exec===u?h&&!a?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],w=m[1];n(String.prototype,e,b),n(RegExp.prototype,g,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}p&&s(RegExp.prototype[g],"sham",!0)}}}]);
//# sourceMappingURL=chunk-28d8d814.a04b7bb2.js.map