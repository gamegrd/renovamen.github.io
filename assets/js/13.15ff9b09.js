(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{406:function(t,s,e){},410:function(t,s,e){"use strict";e(406)},451:function(t,s,e){},539:function(t,s,e){"use strict";e(451)},548:function(t,s,e){"use strict";e.r(s);var i=e(409),a={github:"https://github.com/",linkedin:"https://www.linkedin.com/in/",facebook:"https://www.facebook.com/",twitter:"https://www.twitter.com/",zhihu:"https://www.zhihu.com/people/",weibo:"http://weibo.com/",email:"mailto:"},n={github:"ri-github-fill",linkedin:"ri-linkedin-box-fill",facebook:"ri-facebook-box-fill",twitter:"ri-twitter-fill",zhihu:"ri-zhihu-line",weibo:"ri-weibo-fill",email:"ri-mail-line"},r={components:{Common:i.a},methods:{snsLink:function(t,s){return a[s]+t},snsIcon:function(t){return n[t]}}},o=(e(539),e(410),e(32)),c=Object(o.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Common",{staticClass:"about-wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header__content"},[e("div",{staticClass:"header__basic col-md-4"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.$withBase(t.$page.frontmatter.avatar)}})]),t._v(" "),e("h3",{staticClass:"title"},[t._v(t._s(t.$page.frontmatter.name))]),t._v(" "),e("p",{staticClass:"subname"},[t._v(t._s(t.$page.frontmatter.subname))]),t._v(" "),e("div",{staticClass:"sns"},[t._l(t.$themeConfig.personalInfo.sns,(function(s,i){return e("div",{staticClass:"sns__item"},[e("a",{attrs:{target:"_blank",href:t.snsLink(s,i)}},[e("v-icon",{attrs:{name:t.snsIcon(i),scale:"1.82"}})],1)])})),t._v(" "),t.$page.frontmatter.cv?e("div",{staticClass:"sns__item"},[e("a",{attrs:{href:t.$page.frontmatter.cv}},[e("v-icon",{attrs:{name:"ai-cv",scale:"2.2"}})],1)]):t._e()],2)]),t._v(" "),e("div",{staticClass:"header__info col-md-8"},[e("h3",{staticClass:"title"},[t._v("Biography")]),t._v(" "),e("div",{staticClass:"bio-info"},[t._v("\n          Xiaohan is "),e("del",[t._v("a dragon lost in human world")]),t._v(" now a research assistant\n          supervised by "),e("a",{attrs:{href:"http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm",target:"_blank"}},[t._v("Prof. Tong Lin")]),t._v(".\n          Before that, she got her bachelor's degree in "),e("a",{attrs:{href:"http://sse.tongji.edu.cn",target:"_blank"}},[t._v("Software Engineering")]),t._v("\n          at "),e("a",{attrs:{href:"https://www.tongji.edu.cn",target:"_blank"}},[t._v("Tongji University")]),t._v(".\n          Her main research interests include Continual Learning and Meta Learning with deep architectures.\n          Besides, she is also interested in Natural Language Processing.\n        ")]),t._v(" "),e("div",{staticClass:"personal-info"},[e("div",{staticClass:"col-md-5 interests"},[e("p",{staticClass:"subtitle"},[t._v("Interests")]),t._v(" "),e("ul",t._l(t.$page.frontmatter.interests,(function(s,i){return e("li",{key:"interests-"+i},[e("p",{staticClass:"item",domProps:{innerHTML:t._s(s)}},[t._v(t._s(s))])])})),0)]),t._v(" "),e("div",{staticClass:"col-md-7 education"},[e("p",{staticClass:"subtitle"},[t._v("Education")]),t._v(" "),e("ul",t._l(t.$page.frontmatter.education,(function(s,i){return e("li",{key:"education-"+i},[e("p",{staticClass:"degree"},[t._v(t._s(s.degree)+", "+t._s(s.year))]),t._v(" "),e("p",{staticClass:"school"},[t._v(t._s(s.school))])])})),0)])])])])]),t._v(" "),e("Content",{staticClass:"theme-content"})],1)}),[],!1,null,null,null);s.default=c.exports}}]);