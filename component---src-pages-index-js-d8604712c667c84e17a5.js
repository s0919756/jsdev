(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2ab6":function(e,t,a){"use strict";var r=a("Wbzz");t.a=function(e){void 0===e&&(e=0);var t=Object(r.useStaticQuery)("1281750623").allMarkdownRemark.nodes.map((function(e){return{id:e.id,ttr:e.timeToRead,slug:e.fields.slug,authors:e.frontmatter.authors,date:e.frontmatter.date,publishedDate:e.frontmatter.publishedDate,hero:e.frontmatter.hero?e.frontmatter.hero.childImageSharp.fluid.src:null,tags:e.frontmatter.posttags,title:e.frontmatter.title}}));return e>0?t.slice(0,e>t.length?t.length:e):t}},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("8Svw"),l=a("Wbzz"),s=a("2ab6"),c=a("vzeB"),d=function(e){var t=e.tagMap,a=t.posts,r=t.details;return n.a.createElement("section",{className:"jsd-card jsd-card-secondary"},n.a.createElement("header",{className:"jsd-card-header"},n.a.createElement("h3",{className:"jsd-card-header-headline"},n.a.createElement(l.Link,{to:r.slug,title:r.title,"aria-label":r.title},"#",r.id))),n.a.createElement("div",null,a.map((function(e){var t=e.title+" - by "+e.authors.join(" and ")+" - published "+e.publishedDate;return n.a.createElement(l.Link,{key:"sidebar-post-"+e.id,to:e.slug,title:t,"aria-label":t,className:"jsd-link jsd-link-contentful fs-s l:fs-base"},e.title)}))))},o=function(){var e=function(e){var t={};return e.forEach((function(e){var a=e.tags[0];t.hasOwnProperty(a)||(t[a]={posts:[]}),t[a].posts.push(e)})),{map:function(){return t},keys:function(){return Object.keys(t)}}}(Object(s.a)(25)),t=Object(c.a)(e.keys()),a=function(e,t){var a=e.map(),r=e.keys();return t.all().forEach((function(e){r.includes(e.id)&&(a[e.id].details=e)})),{toArray:function(){return e.keys().map((function(e){return a[e]}))},data:Object.assign({},e.map())}}(e,t).toArray().map((function(e){return n.a.createElement(d,{key:"sidebar-tag-group-"+e.details.id,tagMap:e})}));return n.a.createElement("aside",{className:"side-bar sidebar-additional grid gap-4","aria-label":"Secondary sidebar"},a)},u=a("nmTy"),m=a("+etW");t.a=function(e){var t=e.sidebarTag,a=e.children;return n.a.createElement("div",{className:"site-container"},n.a.createElement("header",null,n.a.createElement(i.a,null)),n.a.createElement("div",{id:"page-content",className:"universal-page-content-wrapper"},n.a.createElement("div",{id:"page-content-inner"},n.a.createElement("div",{className:"jsd-layout jsd-layout-3-cols jsd-layout-3-cols-drop-right-left",id:"index-container"},n.a.createElement("div",{id:"sidebar-wrapper-left",className:"sidebar-wrapper sidebar-wrapper-left jsd-layout-sidebar-left"},n.a.createElement(u.a,{sidebarTag:t})),n.a.createElement("main",{className:"jsd-list-main"},a),n.a.createElement("div",{id:"sidebar-wrapper-right",className:"sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right"},n.a.createElement(o,null))))),n.a.createElement(m.a,null))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),l=a("vrFN"),s=a("zLVn"),c=a("9TCl"),d=a("GR6k"),o=a("2ab6"),u=a("ANU2"),m=function(e){e.offset,e.limit;var t=Object(o.a)(),a=Object(u.a)(),r=t.map((function(e,t){var r=e.hero,i=Object(s.a)(e,["hero"]);return i.hero=null,0===t?(i.hero=r||(a||null),n.a.createElement(d.a,{key:""+i.id,post:i,title:i.title})):n.a.createElement(c.a,{key:""+i.id,post:i,title:i.title})}));return n.a.createElement("div",{id:"rendered-article-feed"},r)},p=(t.default=function(e){var t,a=e.data,r=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.a.createElement(i.a,{location:r,title:s},n.a.createElement(l.a,{title:"All Posts",location:r,twitterCreator:"thejsdev"}),n.a.createElement("header",{className:"mb-2"},n.a.createElement("h2",{className:"fs-m fw-heavy m-0 ff-monospace"},"Posts")),n.a.createElement("div",{id:"homepage-feed"},n.a.createElement(m,null)))},"3159585216")}}]);
//# sourceMappingURL=component---src-pages-index-js-d8604712c667c84e17a5.js.map