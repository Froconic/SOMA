(window.webpackJsonp=window.webpackJsonp||[]).push([[30,4,11,15,16,17,18],{300:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleFwd"},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Last Page")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleBack"},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("First Page")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var r={name:"SingleFwd"},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Forward")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var r={name:"SingleBack"},l=n(41),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("title",[t._v("Back")]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);n(219);var r=n(300),l=n(301),c=n(302),o=n(303),d={name:"Pagination",components:{DoubleFwd:r.default,DoubleBack:l.default,SingleFwd:c.default,SingleBack:o.default},props:{total:{type:Number,default:0},perPage:{type:Number,default:5}},computed:{buttonStyles:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out"},disabledStyle:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300"},totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},v=n(41),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"pagination mb-0"},[n("li",{staticClass:"page-item list-unstyled"},[1===t.currentPage?n("div",{staticClass:"page-link"},[n("span",{staticClass:"hidden sm:inline"},[t._v("First")])]):n("NuxtLink",{staticClass:"page-link",attrs:{to:{name:"blog-page-page",params:{page:1}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("First")])])],1),t._v(" "),n("li",{staticClass:"page-item list-unstyled"},[1===t.currentPage?n("div",{staticClass:"page-link"},[n("span",{staticClass:"hidden sm:inline"},[t._v("Prev")])]):n("NuxtLink",{staticClass:"page-link",attrs:{to:{name:"blog-page-page",params:{page:t.prevPage}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("Prev")])])],1),t._v(" "),n("li",{staticClass:"page-item list-unstyled"},[t.currentPage===t.totalPages?n("div",{staticClass:"page-link"},[n("span",{staticClass:"hidden sm:inline"},[t._v("Next")])]):n("NuxtLink",{staticClass:"page-link",attrs:{to:{params:{page:t.nextPage}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("Next")])])],1),t._v(" "),n("li",{staticClass:"page-item list-unstyled"},[t.currentPage===t.totalPages?n("div",{staticClass:"page-link"},[n("span",{staticClass:"hidden sm:inline"},[t._v("Last")])]):n("NuxtLink",{staticClass:"page-link",attrs:{to:{name:"blog-page-page",params:{page:t.totalPages}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("Last")])])],1)])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi41IDVDMTQuODkwNSA1IDEzLjAwODIgNi44MjQ2MyAxMiA4QzEwLjk5MTggNi44MjQ2MyA5LjEwOTUgNSA3LjUgNUM0LjY1MSA1IDMgNy4yMjIxOCAzIDEwLjA1MDRDMyAxMy4xODM1IDYgMTYuNSAxMiAyMEMxOCAxNi41IDIxIDEzLjI1IDIxIDEwLjI1QzIxIDcuNDIxNzcgMTkuMzQ5IDUgMTYuNSA1WiIgZmlsbD0iIzIxMjUyOSIvPg0KPC9zdmc+DQo="},308:function(t,e,n){"use strict";n.r(e);var r=n(26),l=(n(63),n(219),{data:function(){return{page:1,titles:[]}},name:"ArticleList",components:{Pagination:n(304).default},created:function(){this.fetchData},props:{articles:{type:Array,default:Array},total:{type:Number,default:0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(t.url);case 2:n=e.sent,t.titles=n.data;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(41),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-list"},[r("div",{staticClass:"row mb-4"},[t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"col-md-6 col-lg-4"},[r("NuxtLink",{staticClass:"card card-body justify-content-between",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("div",{staticClass:"text-small d-flex"},[r("div",{staticClass:"mr-2"},[r("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(article.category))]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),r("span",{staticClass:"badge badge-primary-alt text-primary"},[r("img",{attrs:{src:n(305),alt:""}})])],1)]),t._v(" "),r("img",{attrs:{src:article.cover,alt:""}}),t._v(" "),r("div",[r("h4",[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"flex-grow"},[t._v(" "+t._s(article.description))]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mt-3"},[r("span",{staticClass:"text-small text-muted"},[t._v("by ")]),t._v(" "),r("span",{staticClass:"text-small ml-1"},[t._v(" "+t._s(article.author))])])])])],1)})),t._v(" "),t.total?r("div",{staticClass:"container mx-auto my-5 max-w-5xl"}):t._e()],2),t._v(" "),r("div",{staticClass:"row mb-4 justify-content-center"},[t.total>5?r("Pagination",{attrs:{total:t.total}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(304).default})},312:function(t,e,n){"use strict";var r=n(26);n(63);e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var l,c,o,d,v,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=parseInt(n.page),c=6,t.next=4,e("articles").fetch();case 4:return o=t.sent,d=o.length,v=Math.ceil(d/c),m=d%c,f=function(){return 1===l?0:l===v?d-m:(l-1)*c},t.next=11,e("articles").only(["title","description","img","cover","slug","createdAt"]).sortBy("createdAt","desc").limit(c).skip(f()).fetch();case 11:if(h=t.sent,0!==l&&h.length){t.next=14;break}return t.abrupt("return",r({statusCode:404,message:"No articles found!"}));case 14:return t.abrupt("return",{allArticles:o,paginatedArticles:h});case 15:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},346:function(t,e,n){"use strict";n.r(e);var r=n(26),l=(n(11),n(63),n(312)),c={name:"ArticleListPage",components:{ArticleList:n(308).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.app,r=t.params,c=t.error,e.next=3,Object(l.a)(n,r,c);case 3:return content=e.sent,e.abrupt("return",{allArticles:content.allArticles,paginatedArticles:content.paginatedArticles});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Articles Page ".concat(this.$route.params.page),link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/blog/").concat(this.$route.params.page)}]}}},o=n(41),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"bg-black blog-posts",attrs:{id:"blog-posts"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center mb-4"},[n("div",{staticClass:"col col-md-auto"},[n("Search")],1),t._v(" "),n("ArticleList",{attrs:{articles:t.paginatedArticles,total:t.allArticles.length}})],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-light bg-primary",attrs:{"data-speed":"0.5","data-overlay":""}},[n("div",{staticClass:"container pb-6"},[n("div",{staticClass:"row justify-content-center text-center"},[n("div",{staticClass:"col-xl-5 col-lg-6 col-md-8"},[n("h1",{staticClass:"display-3 text-light mb-5"},[t._v("Blog")]),t._v(" "),n("p",{staticClass:"lead "},[t._v("Thoughts on "),n("br"),t._v("Magic | Mystery | Mysticism")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:n(220).default,ArticleList:n(308).default})}}]);