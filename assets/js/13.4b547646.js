(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{406:function(t,e,n){},407:function(t,e,n){"use strict";n(406)},450:function(t,e,n){},537:function(t,e,n){"use strict";n(450)},546:function(t,e,n){"use strict";n.r(e);var i=n(410),s={github:"https://github.com/",linkedin:"https://www.linkedin.com/in/",facebook:"https://www.facebook.com/",twitter:"https://www.twitter.com/",zhihu:"https://www.zhihu.com/people/",weibo:"http://weibo.com/",email:"mailto:"},a={github:"ri-github-fill",linkedin:"ri-linkedin-box-fill",facebook:"ri-facebook-box-fill",twitter:"ri-twitter-fill",zhihu:"ri-zhihu-line",weibo:"ri-weibo-fill",email:"ri-mail-line"},o={components:{Common:i.a},methods:{snsLink:function(t,e){return s[e]+t},snsIcon:function(t){return a[t]}}},r=(n(537),n(407),n(32)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{staticClass:"about-wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"header__content"},[n("div",{staticClass:"header__basic col-md-4"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.$withBase(t.$page.frontmatter.avatar)}})]),t._v(" "),n("h3",{staticClass:"title"},[t._v(t._s(t.$page.frontmatter.name))]),t._v(" "),n("p",{staticClass:"subname"},[t._v(t._s(t.$page.frontmatter.subname))]),t._v(" "),n("div",{staticClass:"sns"},[t._l(t.$themeConfig.personalInfo.sns,(function(e,i){return n("div",{staticClass:"sns__item"},[n("a",{attrs:{target:"_blank",href:t.snsLink(e,i)}},[n("v-icon",{attrs:{name:t.snsIcon(i),scale:"1.82"}})],1)])})),t._v(" "),t.$page.frontmatter.cv?n("div",{staticClass:"sns__item"},[n("a",{attrs:{href:t.$page.frontmatter.cv}},[n("v-icon",{attrs:{name:"ai-cv",scale:"2.2"}})],1)]):t._e()],2)]),t._v(" "),n("div",{staticClass:"header__info col-md-8"},[n("h3",{staticClass:"title"},[t._v("Biography")]),t._v(" "),n("div",{staticClass:"bio-info"},[t._v("\n          I'm "),n("del",[t._v("a dragon lost in human world")]),t._v(" now an intern at CETC\n          and a research assistant at Peking University supervised by\n          "),n("a",{attrs:{href:"http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm",target:"_blank"}},[t._v("\n            Prof. Tong Lin\n          ")]),t._v(".\n          Before that, I got my bachelor's degree in\n          "),n("a",{attrs:{href:"http://sse.tongji.edu.cn",target:"_blank"}},[t._v("\n            Software Engineering\n          ")]),t._v("\n          at\n          "),n("a",{attrs:{href:"https://www.tongji.edu.cn",target:"_blank"}},[t._v("\n            Tongji University\n          ")]),t._v(".\n          I'm currently working on topics related to exploring the capability\n          of machines to develop intelligent behavior upon what they have learned,\n          like meta-learning and continual learning.\n        ")]),t._v(" "),n("div",{staticClass:"personal-info"},[n("div",{staticClass:"col-md-5 interests"},[n("p",{staticClass:"subtitle"},[t._v("Interests")]),t._v(" "),n("ul",t._l(t.$page.frontmatter.interests,(function(e,i){return n("li",{key:"interests-"+i},[n("p",{staticClass:"item",domProps:{innerHTML:t._s(e)}},[t._v(t._s(e))])])})),0)]),t._v(" "),n("div",{staticClass:"col-md-7 education"},[n("p",{staticClass:"subtitle"},[t._v("Education")]),t._v(" "),n("ul",t._l(t.$page.frontmatter.education,(function(e,i){return n("li",{key:"education-"+i},[n("p",{staticClass:"degree"},[t._v(t._s(e.degree)+", "+t._s(e.year))]),t._v(" "),n("p",{staticClass:"school"},[t._v(t._s(e.school))])])})),0)])])])])]),t._v(" "),n("Content",{staticClass:"theme-content"})],1)}),[],!1,null,null,null);e.default=l.exports}}]);