(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746908e5"],{37906:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Search Page")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{placeholder:"Enter Query"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("br"),r("b-button",{on:{click:e.search}},[e._v("Search")]),e.show?r("RecipePreviewList",{key:e.searchKey,attrs:{title:"Recipes that found",random:"search",query:e.query}}):e._e()],1)},a=[],n=r("99d8"),c={name:"searchPage",components:{RecipePreviewList:n["a"]},data:function(){return{query:"",show:!1,searchKey:0}},created:function(){this.show=!1,this.query="",this.searchKey=0},methods:{search:function(){""!=this.query&&(this.show=!0,this.searchKey++)}}},i=c,o=r("2877"),u=Object(o["a"])(i,s,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-746908e5.32bd801a.js.map