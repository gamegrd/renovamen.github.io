(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(t,e,a){},377:function(t,e,a){},379:function(t,e,a){"use strict";var s=a(375);a.n(s).a},383:function(t,e,a){"use strict";var s=a(377);a.n(s).a},384:function(t,e,a){"use strict";var s={props:{pageInfo:{type:Object,default:function(){return{}}}},computed:{headerImage:function(){return this.pageInfo.bgImage?{backgroundImage:"url(".concat(this.$withBase(this.pageInfo.bgImage.path),")")}:{}}}},n=(a(383),a(54)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header",class:{"style-img":t.pageInfo.bgImage},style:t.headerImage},[t.pageInfo.bgImage&&t.pageInfo.bgImage.mask?a("div",{staticClass:"header-mask",style:{background:t.pageInfo.bgImage.mask}}):t._e(),t._v(" "),a("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.pageInfo.title||t.$page.frontmatter.title)+"\n    ")]),t._v(" "),t.pageInfo.subtitle?a("h3",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.pageInfo.subtitle)+"\n    ")]):t._e()])}),[],!1,null,"367b2c3c",null);e.a=i.exports},411:function(t,e,a){},459:function(t,e,a){t.exports=a.p+"assets/img/default-link-avatar.59621d5c.jpg"},460:function(t,e,a){"use strict";var s=a(411);a.n(s).a},520:function(t,e,a){"use strict";a.r(e);var s=a(378),n=a(384),i={components:{Common:s.a,PageHeader:n.a}},r=(a(460),a(379),a(54)),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PageHeader",{attrs:{pageInfo:t.$themeConfig.pageConfig.links}}),t._v(" "),s("Common",{staticClass:"links-wrapper"},[s("div",{staticClass:"links-group"},t._l(t.$page.frontmatter.links,(function(e,n){return s("div",{key:"link-group-"+n,staticClass:"section"},[s("h2",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("ul",t._l(e.items,(function(e,n){return s("li",{key:"link-"+n},[s("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:e.img?t.$withBase(e.img):a(459)}}),t._v(" "),s("span",{staticClass:"sitename"},[t._v(t._s(e.sitename))]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(e.desc))])])])})),0),t._v(" "),s("hr",{staticStyle:{visibility:"hidden"}})])})),0)])],1)}),[],!1,null,null,null);e.default=l.exports}}]);