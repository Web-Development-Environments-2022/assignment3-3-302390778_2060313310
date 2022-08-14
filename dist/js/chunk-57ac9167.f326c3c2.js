(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ac9167"],{"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"38c6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.recipe?n("div",[n("h1",[e._v(e._s(e.recipe.title))]),n("img",{staticClass:"center",staticStyle:{"border-radius":"15px",border:"1px solid blue"},attrs:{src:e.recipe.image}}),n("div",{staticClass:"recipe-body"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"center"},[n("div",{staticClass:"mb-3"},[n("div",{attrs:{id:"likesMinMeals"}},[n("img",{attrs:{src:r("6469"),width:"30px",height:"25px"}}),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes | "),n("img",{attrs:{src:r("0ed2"),width:"26px",height:"26px"}}),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes | "),n("img",{attrs:{src:r("85f7"),width:"30px",height:"30px"}}),e._v(" "+e._s(e.recipe.servings)+" meals ")]),e.recipe.vegetarian?n("b-button",{staticClass:"infoBtn",attrs:{variant:"info"}},[e._v("vegetarian")]):e._e(),e.recipe.vegan?n("b-button",{staticClass:"infoBtn",attrs:{variant:"info"}},[e._v("vegan")]):e._e(),e.recipe.glutenFree?n("b-button",{staticClass:"infoBtn",attrs:{variant:"info"}},[e._v("gluten free")]):e._e()],1),n("table",[n("th",[e._v("Ingredients:")]),e._l(e.recipe.extendedIngredients,(function(t,r){return n("tr",{key:r+"_"+t.id},[n("td",[n("li",[e._v(e._s(t.original))])])])}))],2),n("br"),n("br"),e._m(0),n("ul",{staticClass:"list-group",staticStyle:{"line-height":"160%"}},[n("span",[e._v(e._s(e.recipe.instructions))])])])])])]):e._e()])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h5",[r("strong",[e._v("Instructions:")])])}],i=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),s={data:function(){return{recipe:null}},methods:{saveRecipe:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.axios.post(t.$root.store.server_domain+"/addFavorites",{withCredentials:!0},{params:{recipeId:e}});case 2:response=r.sent;case 3:case"end":return r.stop()}}),r)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,s,c,o,u,l,p,d,v,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,t.next=4,e.axios.get("https://wikirecipe.cs.bgu.ac.il/users/getLocalRecipeFromClick",{params:{recipeId:e.$route.params.recipeId}});case 4:r=t.sent,200!==r.status&&e.$router.replace("/NotFound"),t.next=13;break;case 8:return t.prev=8,t.t0=t["catch"](1),console.log("error.response.status",t.t0.response.status),e.$router.replace("/NotFound"),t.abrupt("return");case 13:n=r.data.message,a=n.instructions,i=n.extendedIngredients,s=n.aggregateLikes,c=n.readyInMinutes,o=n.image,u=n.title,l=n.glutenFree,p=n.vegetarian,d=n.vegan,v=n.servings,console.log(r.data.message),g={instructions:a,extendedIngredients:i,aggregateLikes:s,readyInMinutes:c,image:o,title:u,glutenFree:l,vegetarian:p,vegan:d,servings:v},e.recipe=g,t.next=22;break;case 19:t.prev=19,t.t1=t["catch"](0),console.log(t.t1);case 22:case"end":return t.stop()}}),t,null,[[0,19],[1,8]])})))()}},c=s,o=(r("d7c1"),r("2877")),u=Object(o["a"])(c,n,a,!1,null,"b7593798",null);t["default"]=u.exports},5280:function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),s=r("50c4"),c=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("14c3"),p=Math.max,d=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g,x=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=n.REPLACE_KEEPS_$0,E=h?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!h&&_||"string"===typeof n&&-1===n.indexOf(E)){var i=r(t,e,this,n);if(i.done)return i.value}var o=a(e),v=String(this),g="function"===typeof n;g||(n=String(n));var f=o.global;if(f){var m=o.unicode;o.lastIndex=0}var I=[];while(1){var R=l(o,v);if(null===R)break;if(I.push(R),!f)break;var w=String(R[0]);""===w&&(o.lastIndex=u(v,s(o.lastIndex),m))}for(var y="",S=0,$=0;$<I.length;$++){R=I[$];for(var C=String(R[0]),k=p(d(c(R.index),v.length),0),P=[],T=1;T<R.length;T++)P.push(x(R[T]));var A=R.groups;if(g){var U=[C].concat(P,k,v);void 0!==A&&U.push(A);var N=String(n.apply(void 0,U))}else N=b(C,v,k,P,A,n);k>=S&&(y+=v.slice(S,k)+N,S=k+C.length)}return y+v.slice(S)}];function b(e,r,n,a,s,c){var o=n+e.length,u=a.length,l=f;return void 0!==s&&(s=i(s),l=g),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var p=v(l/10);return 0===p?t:p<=u?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):t}c=a[l-1]}return void 0===c?"":c}))}}))},"85f7":function(e,t,r){e.exports=r.p+"img/serving.ddb51d96.png"},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],p=o||l||u;p&&(c=function(e){var t,r,a,c,p=this,d=u&&p.sticky,v=n.call(p),g=p.source,f=0,x=e;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),x=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",x=" "+x,f++),r=new RegExp("^(?:"+g+")",v)),l&&(r=new RegExp("^"+g+"$(?!\\s)",v)),o&&(t=p.lastIndex),a=i.call(d?r:p,x),d?a?(a.input=a.input.slice(f),a[0]=a[0].slice(f),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:o&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),l&&a&&a.length>1&&s.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),s=r("9263"),c=r("9112"),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),v=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var g=i(e),f=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),x=f&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!f||!x||"replace"===e&&(!u||!l||d)||"split"===e&&!v){var h=/./[g],_=r(g,""[e],(function(e,t,r,n,a){return t.exec===s?f&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=_[0],b=_[1];n(String.prototype,e,E),n(RegExp.prototype,g,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}p&&c(RegExp.prototype[g],"sham",!0)}},d7c1:function(e,t,r){"use strict";var n=r("5280"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-57ac9167.f326c3c2.js.map