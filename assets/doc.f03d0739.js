var e=Object.assign;import{n as s,h as t,d as a,_ as c,i as o}from"./index.953e033d.js";import{d,r,c as i,o as n,a as l,b as m,w as u,e as p,v as h,f as v,g as _,F as g,h as f,i as A,j as b,t as k,k as E,l as D,m as j,T as w,n as I,p as L,u as V,q as P,s as O,x as T,y as x,z as U,A as R,B as N,C as y,D as C,E as S}from"./vendor.80bf15c7.js";var B=d({name:"app"});B.render=function(e,s,t,a,c,o){const d=r("router-view");return n(),i(d)};const F=d({name:"search",setup(){const e=l({nav:s,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});m((()=>{s.forEach((s=>{s.packages.forEach((s=>{e.navList.push(s)}))}))})),u((()=>e.searchVal),(s=>{s?e.searchList=e.navList.filter((e=>{if(!1===e.show)return!1;return new RegExp(s,"gi").test(e.name+" "+e.cName+e.desc)})):(e.searchCName="",e.searchIndex=0,e.searchList=[])}));return{data:e,onfocus:e=>{},choseList:s=>{let t=e.searchIndex;40==s.keyCode&&t++,38==s.keyCode&&t--,t<0&&(t=0);const a=e.searchList;if(a.length>0){const c=a[t]&&a[t].name;c&&(e.searchCurName=c,e.searchIndex=t,13==s.keyCode&&(e.$router.push({path:"/"+a[t].name}),e.searchCurName="",e.searchIndex=0,e.searchVal=""))}},onblur:s=>{setTimeout((()=>{e.searchList=[],e.searchVal=""}),200)},checklist:()=>{e.searchVal="",e.searchCurName="",e.searchIndex=0}}}}),H={class:"search-box"},Y={class:"search-list"};F.render=function(e,s,t,a,c,o){const d=r("router-link");return n(),i("div",H,[p(v("input",{type:"text",class:"search-input",placeholder:"在 NutUI 中搜索","onUpdate:modelValue":s[1]||(s[1]=s=>e.data.searchVal=s),onFocus:s[2]||(s[2]=(...s)=>e.onfocus&&e.onfocus(...s)),onBlur:s[3]||(s[3]=(...s)=>e.onblur&&e.onblur(...s)),onKeyup:s[4]||(s[4]=(...s)=>e.choseList&&e.choseList(...s))},null,544),[[h,e.data.searchVal]]),p(v("ul",Y,[(n(!0),i(g,null,f(e.data.searchList,((s,t)=>(n(),i("li",{class:e.data.searchCurName==s.name?"cur":"",onClick:t=>e.checklist(s),key:t},[v(d,{to:s.name.toLowerCase()},{default:A((()=>[b(k(s.name)+" ",1),v("span",null,k(s.cName),1)])),_:2},1032,["to"])],10,["onClick"])))),128))],512),[[_,e.data.searchList.length>0]])])};const X=E("/"),W=E("red");var G=d({name:"doc-header",components:{Search:F},setup(){const e=l({theme:"black",versonList:[{name:"1.x"},{name:"2.x"},{name:"3.x"}],verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),s=D((()=>function(e){return X.value==e.toLowerCase()})),a=D((()=>function(){return`doc-header-${W.value}`}));return{header:t,data:e,isActive:s,checkTheme:(s,t)=>{e.isShowSelect=!1,e.activeIndex=t,e.verson=s,0===t?window.location.href="//nutui.jd.com/1x/":1===t&&(window.location.href="https://nutui.jd.com/#/index")},themeName:a,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{e.isShowSelect=!1}}}});const J=v("div",{class:"header-logo"},[v("a",{class:"logo-link",href:"#"}),v("span",{class:"logo-border"})],-1),M={class:"header-nav"},q={class:"nav-box"},Q={class:"nav-list"},K={class:"nav-item"},z={href:"demo.html#/"},Z={class:"nav-item"},$={class:"header-select-hd"},ee=v("i",{class:""},null,-1),se={class:"header-select-bd"},te=v("li",{class:"nav-item"},[v("a",{class:"user-link",target:"_blank",href:"https://github.com/jdf2e/nutui"})],-1);G.render=function(e,s,t,a,c,o){const d=r("Search"),l=r("router-link");return n(),i("div",{class:["doc-header",e.themeName()]},[J,v("div",M,[v(d),v("div",q,[v("ul",Q,[v("li",K,[v(l,{to:e.header[0].path},{default:A((()=>[b(k(e.header[0].cName),1)])),_:1},8,["to"])]),v("li",{class:["nav-item",{active:e.isActive(e.header[1].path)}]},[v(l,{to:e.header[1].path},{default:A((()=>[b(k(e.header[1].cName),1)])),_:1},8,["to"])],2),v("li",{class:["nav-item",{active:e.isActive(e.header[2].name)}]},[v("a",z,k(e.header[2].cName),1)],2),v("li",{class:["nav-item",{active:e.isActive(e.header[3].name)}]},[v(l,{to:e.header[3].name},{default:A((()=>[b(k(e.header[3].cName),1)])),_:1},8,["to"])],2),v("li",Z,[v("div",{onFocus:s[1]||(s[1]=(...s)=>e.handleFocus&&e.handleFocus(...s)),onFocusout:s[2]||(s[2]=(...s)=>e.handleFocusOut&&e.handleFocusOut(...s)),tabindex:"0",class:["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]],onClick:s[3]||(s[3]=j((s=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[v("div",$,[b(k(e.data.verson),1),ee]),v(w,{name:"fade"},{default:A((()=>[p(v("div",se,[(n(!0),i(g,null,f(e.data.versonList,((s,t)=>(n(),i("div",{class:["header-select-item",{active:e.data.activeIndex===t}],key:t,onClick:j((a=>e.checkTheme(s.name,t)),["stop"])},k(s.name),11,["onClick"])))),128))],512),[[_,e.data.isShowSelect]])])),_:1})],34)]),te])])])],2)};var ae=d({name:"doc-nav",setup(){const e=D((()=>function(e){return X.value==e.toLowerCase()}));return m((()=>{console.log("123"+s)})),{isActive:e,nav:l(s),docs:l(a),currentRoute:X}}});const ce={class:"doc-nav"},oe={key:0};ae.render=function(e,s,t,a,c,o){const d=r("router-link");return n(),i("div",ce,[v("ol",null,[v("li",null,k(e.docs.name),1),v("ul",null,[(n(!0),i(g,null,f(e.docs.packages,(s=>(n(),i("li",{class:{active:e.isActive(s.name)},key:s},[s.isLink?(n(),i("a",{key:1,href:s.name,target:"_blank"},k(s.cName),9,["href"])):(n(),i(d,{key:0,to:s.name.toLowerCase()},{default:A((()=>[b(k(s.cName),1)])),_:2},1032,["to"]))],2)))),128))])]),(n(!0),i(g,null,f(e.nav,(e=>(n(),i("ol",{key:e},[v("li",null,k(e.name),1),v("ul",null,[(n(!0),i(g,null,f(e.packages,(e=>(n(),i(g,{key:e},[e.show?(n(),i("li",oe,[v(d,{to:e.name.toLowerCase()},{default:A((()=>[b(k(e.name)+"  ",1),v("b",null,k(e.cName),1)])),_:2},1032,["to"])])):I("",!0)],64)))),128))])])))),128))])};var de=d({name:"doc-footer",setup(){const e=l({theme:"red",themeList:[{name:"热情红",color:"red"},{name:"暗黑风",color:"black"},{name:"纯净白",color:"white"}],activeIndex:0,isShowSelect:!1});return{data:e,clickOut:()=>{document.addEventListener("click",(e=>{console.log("e.target",e.target)}),!1)},checkTheme:(s,t)=>{e.isShowSelect=!1,e.activeIndex=t,e.theme=s,W.value=s,console.log("themeColor1",W)}}}});const re={class:"doc-footer-content"},ie=v("div",{class:"doc-footer-list"},[v("img",{class:"doc-footer-logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAuCAYAAADjs904AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAC1xJREFUeNrtnHuMXFUdx2uhbFvAttB9zdz385xzZ9/vXYESIUqMz0KkQahEIhIJ0BD/E22iRP6QZ4gRgkKMGluKISEaE6ltI9YYSktNWiyFViy2ugVburt37jnb7vi7Z+7O3Nm587jtDt029yTf3NnZmblz7+f+fuf3OHcWLWrAOJpKLWYieZFK5LmNi5Jx0Y2PmrVlTHbGQYf2NTdfkpyRi3BQAQvZlN2WnIkLdGTbyQqaJsOnUtaS2O9NaU1UQiNMJlckZ3IBDq/ZWcYE5wATnRzMtb+Ibd0KeYWpJMcUsuukJF2anNGFBjiNBYB7Jg/YeSvCPV9HZbIFgqzfeDIZCP9vb2vrYgB7NADsZUW8Ijmj5wNiq7WUpchttB2vjvo/WPCDAHcbFclnS+BKuA+CKw+Uy4tMeCK2Si0YrWUK3g4Xwd2R+1ZQO1PRrRNtxpKERIMGSzvrWTqTA8iPx3qfiB8pwgUpTg6gfyeWC9fw80wnOaqhLyYkGhUFp5wWgPukmyI41vsksqEcMFkfKwiTUR9AfjQr2ysTEgstuhbJCnDLu2bhwuPtXhotS87MhWLZaSxNtVlX1U6DyA1UxtfXmkddzW72JDudnNnzPDby6Jg8HUTPE/D4K+d8sSj460wjLmiaqujh5CyfT8sVkApgZ4LUKMckZ8+5fN62RYs+AanSYYCbC8SmZGt1cqYbPYemnKZsO24tc6Up3AJg3QCuD/lP5+oRAPDuEOATkymzrLKVVa22SVVN0qV5grsC0qP9TMgwmnbuK0+ByDoAuw+0Iysiq9pnTbXZV4LVX151fwruZhreCdpLNfL5sv1p6CFm4NOg1z3RWFrvcfjlU9e0RdfOa8IwPlnxe9r6la5twut0cdJQV3FvhbTLXayLrqOLU456ddXjJOrVbmf+tbRLWu4/N9mprHK7VbFUUrn6Qb3BFnQKpQtVvWyf2Do5oFxWF7fhtqXucKq55Hv1rb4MnhPnpEZkDODmuNLOtrN25xLJQPT8Ieg/nojUs87FdfwmwM35orpN6t6/aWeYDe+zUY4hrj2nrOiauUesDYzYOeaAiPkM369j3MkyVi4v89dVv2OXvol1GTnWDerS7+D779GeYz16jqvXl5ZjfbDt04rqDzSgFkT75UJKygaV3d6A3F/XeRoWb2Sj4taS4xpND7IxIVd6Na62L2OCswngHoQ8+HOxq1+yrXsS/pafGjGFlyJ9/cFT8F1UwnLsC0VHtwLkQ0xHz43HaDtS08xwuEXAvu6N/M7YeoDDdSxfAWAzD7iDqwZgYxOHywFrecDdAeDeQJXgcsBFyHSgCJgOKm94A0pdgOmIdCMbmQN4JDXIPjUH8Dla7O8g950u5L9cAWSVi8LjLXARmA0PCDlgHIbr6wPXslrqAkwAcMcs4BoW3F0OmPVojwPgca5eX5qvqRLAfeoHrF8dB7Dj+a0yTvulwrRHh2IAHhbKAfsWPB+AqUi+AVDdcOUqAm5YpyAluqXxgFEpYOxvrWcjXPQDAdwKFhwDcE/eRfsZAmhxWAD0x2HAkzD3zn1NyTFwC5brtGCxMRYMQddXAeqZUGMhBLcC5CAl8mR008cE+H2G7EMcMLanqW0NlAI2owHHteCeogVHvq43ABy4ZrdXEaoew6Acw0WDBY8K8QBDwNVJ0+T7XprcDXNyZGMegL5bZrkyOQNQXdBJ0P9AE0zBDODOhAADbLw7OrJGK6mKvw1B1Xc9DdtnDbhgvfbbFNk3B4BB1l/D83kBcGYuYDMXqH7A3TUA98cAPBTHgiMAjwaANwZpRSlc51oIttxCUUN0Xpto1ZdEzL13MYn8nIroPgiibvIE3EtltJbK5EeglwHu66DDAPgDAJrlkPOAjzMVrSv7PNlcDkHV3tnIGXQKIHfPTYHiAUYHd/lFFWS9ygH7ETO276zqojNnAbhbrw04jgUPyfMDmKWcX4KF/strw6li1cp5KQSXyxPxmmrRM5XxT8B6j9eYfwMLxm9HngQNfYkZJBcCnPMj6MJ+dNtiJjoGejgO4HxuC6kTtj0OmNjHPGyuqmjBcQHzlMi34notWG084DEAfE0YcCoEOF0fYF6NkvAGADsVGVxFz78+4CO3ROa9PmA8BzAuB2zhGIDtg4XnifVYADgHj5+YN8DdQc670ADPuui5HR/aDi5aDLtoEumiOWDZeacItx7r5Xoj8ov6LtooddFUL3XRE4YRz0XjIuCsra8EuEcDyNRDVicHnJkDuMO8g8Pt5NpcPQ/WXiwUNXq0r1V8Xd8s4HzOW9ccPCgN1BXsjkIUPSa8GmnBlZsLEGQJEGQJlYOsfKDlvFACtg7AkCY9Vbl8CUGWhu+lxjwEWbjUgvn/sLk+n/f6kK2tlJj3FwHnK1k0Y3whgAsydle3YP1vs4Bpj/bl+QLMhpQdbEj+dF3HOyrcTMeEl2MBrr/Iga8DoDMlFlzdes8AuIFFDRwlgHEpYH7XBbH+EipuvFYsS+YtOJvRbbDgmQDyadqhD0bGHp0aArCsALhb66kMWIkJWH4BdH9dFjwm/BAAP9YQwJvz6dLva1pwMT166WOpZFUAnJ+LzX4AO12Inot1Zw74iCAsBsD7i1ZsvudltGv8aLwIV0VgvX8vumd9/ARRm6pbcLHuXAuwNyTdDoB3bq5xrBOjrUsA8AGw4s80BDBvJUokDdb7fk24GnmPKajtYwFcyHvLAedzXeunIcvNFzUCwPwzOo3bAxedY12w7TJmQG+zLn0raA8EVywE13fPVQM/DjhUd65pwQPpKwDwETok3VP1WMfEh9mYuPfUYPrScsDpqGYD2QSB1UGYf2M1G6YkGwHcd6pY7j88BRmxmw0mOgTBVrxmgz0LGFUE7NpGM0A+HrJeP2J+JhxAgmt+BODO8G7RrGbLkt2zqZHvmvU/0g5leXXASiwLDiLpNWxYOkGHpafosIjHh1t5gDnRl1oOfw9D5LwZ4B7LjqbLOm2RgGmajIUi59jtwqyAVjAF/wB0GOCeAZ0GvUsV/D1XIVfGLoWa+E1QzhcEXfW3C5EP2K4KOKhY3VNiwSHARUvW14AV/5Z16sfAcqcDwGcA8EnQn0HfnMzUXpDA06RQa9DtkYW6jmVQQgD5V2xE+i8bET+E7b9hexIi53+CW36SjQiRHpEXOq6dA5g3/EVnP2iaihENf4msA+0D7chKdsWGv29tEA23ZiXS4gc1FS8I1e6GPHennxpB5Fze8DfshwDuaWbar3u6XvfKTL/3O9vsz1pWe6XX+d/NJflmva9JJ9/wjxofGlddQrvk1W5GFbIdSutJ1N4U52Kd6JJXzjb2fR23V8e66/KjEeHS7HC61R1JiXQkdfWREWFxVY/qN/yvmdPwDyA3ZdMRS3YEs6WkaySTc1+yo+PdocrViSnZSJbsnK/BF93JzkwI8LkvujPI4VBRg03pyaK78zY25psLT/NukexMUHkels1q6E4A64IlT8PjZNnsgrBkEUtTQvWF725Kb6IyvoGq+Ppa3R9XM5s9zRKSM3uBDH7riop3hdKj7Z6W3LqyAOdcpwVSpSdcAcW7+UxBG/JgQ7VnDce7+cxAfdRAj8J2ZUKiQQNSofU8mBJj3j6q4kdClauguWDHu33URM/z3NdMbh9t2PAXmgPc2yB6jr4BXCYPMgVvgzm59AZwGfWB9Xqh3u+EJ5fmzFRHayGw2g7b6BvAddTOTLSuntZgMhoBX7EFpvC1V74rfivCTV8HAdYWcM2b5naO+E846PhokBp5WdVMfsJhwQEW9GUA90CwaiP+j7AY+JUAcPIjLAs3WsYrIBU6u59R0rQmyHtHWETlKhkXShSuWIJfj07OxEU4PhKEZRBgjUOAlfyU4cU4+LIYjQdZP9uYnI7zOv4P6uEbgrp0OB0AAAAASUVORK5CYII="})],-1),ne=v("div",{class:"doc-footer-list"},[v("h4",{class:"doc-footer-title"},"相关资源"),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://ling.jd.com/jdw"},"羚珑-中后台智能构建平台")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://taro-ui.jd.com"},"Taro UI")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://vitejs.dev"},"Vite")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"hhttps://cn.vuejs.org/index.html"},"Vue")])],-1),le=v("div",{class:"doc-footer-list"},[v("h4",{class:"doc-footer-title"},"社区"),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui"},"GitHub")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://www.zhihu.com/column/c_1263837684834889728"},"NUT UI 知乎专栏")]),v("div",{class:"doc-footer-item vx-item"},[b(" 微信 "),v("i",{class:"icon-vx"}),v("div",{class:"vx-box"},[v("p",{class:"vx-desc"},"微信交流群"),v("p",{class:"vx-desc"},"扫码添加好友"),v("img",{class:"img-code",src:"/nutui/assets/vx-code.89d526cc.png"}),v("p",{class:"vx-desc"},[b("回复"),v("span",{class:"vx-red"},"NutUI"),b("即刻进群")])])])],-1),me=v("div",{class:"doc-footer-list"},[v("h4",{class:"doc-footer-title"},"关于我们"),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"https://nutui.jd.com/#/joinus"},"加入我们")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"http://fe.jd.com"},"京东零售前端")]),v("div",{class:"doc-footer-item"},[v("a",{class:"sub-link",target:"_blank",href:"nutui@jd.com"},"联系我们")])],-1),ue=v("div",{class:"doc-footer-select-hd"},[v("i",{class:"icon-color"}),b("主题换肤")],-1),pe={class:"doc-footer-select-bd"},he=v("p",{class:"doc-footer-desc"},"2021 京东零售 - 基础业务体验部.All Rights Reserved.",-1);de.render=function(e,s,t,a,c,o){return n(),i("div",{class:["doc-footer",`doc-footer-${e.data.theme}`]},[v("div",re,[ie,ne,le,me,v("div",{class:"doc-footer-list",onClick:s[1]||(s[1]=j((s=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[ue,p(v("div",pe,[(n(!0),i(g,null,f(e.data.themeList,((s,t)=>(n(),i("div",{class:["doc-footer-select-item",{active:e.data.activeIndex===t}],key:t,onClick:j((a=>e.checkTheme(s.color,t)),["stop"])},[v("i",{class:`circle-${s.color}`},null,2),b(k(s.name),1)],10,["onClick"])))),128))],512),[[_,e.data.isShowSelect]])])]),he],2)};var ve=d({name:"doc-demo-preview",props:{url:String}});const _e={class:"doc-demo-preview"};ve.render=function(e,s,t,a,c,o){return n(),i("div",_e,[v("iframe",{src:e.url,frameborder:"0"},null,8,["src"])])};var ge=d({name:"doc",components:{[G.name]:G,[ae.name]:ae,[de.name]:de,[ve.name]:ve},setup(){const e=l({demoUrl:"demo.html"}),s=s=>{const{origin:t,pathname:a}=window.location;X.value=s.name,e.demoUrl=`${t}${a.replace("index.html","")}demo.html#${s.path}`};return m((()=>{const e=V();s(e)})),L((e=>{s(e)})),e}});const fe=P("data-v-54d73b6d");O("data-v-54d73b6d");const Ae={class:"doc-content"},be={class:"doc-content-document"};T();const ke=fe(((e,s,t,a,c,o)=>{const d=r("doc-header"),l=r("doc-nav"),m=r("router-view"),u=r("doc-footer"),p=r("doc-demo-preview");return n(),i(g,null,[v(d),v(l),v("div",Ae,[v("div",be,[v(m)]),v(u),v(p,{url:e.demoUrl},null,8,["url"])])],64)}));ge.render=ke,ge.__scopeId="data-v-54d73b6d";const Ee={baseUrl:"",isPrd:!0};Ee.isPrd=!0,Ee.baseUrl="http://nutui-server.jd.com";class De{checkStatus(e){const s={state:0,value:{},message:""};return!e||200!==e.status&&304!==e.status&&400!==e.status||(s.value=e.data),s}async request(e,s,t){const a=Object.assign({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.header);try{const c={method:s,url:Ee.baseUrl+e,data:t,params:t,timeout:3e4,withCredentials:!0,crossDomain:!0,headers:a},o=await x(c);return this.checkStatus(o)}catch(c){return console.error(c),null}}}class je{constructor(){this.httpClient=new De}getArticle(){return this.httpClient.request("/article/list","get",{})}saveUserInfo(e){return this.httpClient.request("/visit/saveVisitInfo","post",e)}}var we=d({name:"doc",components:{[G.name]:G,[de.name]:de},setup(){const s=l({articleList:[],tabData:[{title:"全部文章"}],activeIndex:0}),t=e=>{X.value=e.name};m((()=>{const e=V();t(e);(new je).getArticle().then((e=>{0==(null==e?void 0:e.state)&&(s.articleList=e.value.data.arrays)}))})),L((e=>{t(e)}));return e(e({},U(s)),{clickTab:e=>{s.activeIndex=e},toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}}),Ie="/nutui/assets/img-article.0250d52f.jpg";const Le=P("data-v-420a19d7");O("data-v-420a19d7");const Ve=v("div",{class:"resource-main"},[v("div",{class:"resource-main-content"},[v("h3",{class:"sub-title"},"资源"),v("p",{class:"sub-desc"},"这里汇总了NutUI 相关的所有的资源")])],-1),Pe={class:"resource-content"},Oe={key:0,class:"resource-block"},Te=v("h4",{class:"sub-title"},"设计资源",-1),xe=v("p",{class:"sub-desc"},[b("这里提供 NUT UI 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。你可以在这个"),v("span",{class:"sub-red"},"地址"),b("中反馈对新版本 Sketch Symbols 组件的意见。")],-1),Ue=v("div",{class:"no-data"},[v("img",{class:"nodata-img-joy",src:"/nutui/assets/img-joy.6d8227fe.png"}),v("p",{class:"nodata-desc"},"敬请期待")],-1),Re={key:1,class:"resource-block"},Ne=v("h4",{class:"sub-title"},"设计资源",-1),ye=v("p",{class:"sub-desc"},"想要了解 Nut Ui 设计体系背后的故事？如何才能更好的应用 Ant Design？你可以查阅下述我们为你精挑细选的文章。也欢迎关注Nut Ui 官方专栏，这里常有关于Nut Ui 设计体系下相关话题内容的最新分享和讨论.",-1),Ce={class:"tab-box"},Se={class:"tab-hd"},Be={class:"tab-bd"},Fe={class:"design-title"},He={class:"tab-bd"},Ye=v("div",{class:"design-item"},[v("img",{class:"img-design",src:Ie}),v("p",{class:"design-title"},"NutUI 落地实践-让组件库服务慧采协同采购业务")],-1),Xe=v("div",{class:"design-item"},[v("img",{class:"img-design",src:Ie}),v("p",{class:"design-title"},"NutUI 落地实践-让组件库服务慧采协同采购业务")],-1),We=R('<div class="resource-block" data-v-420a19d7><h4 class="sub-title" data-v-420a19d7>社区文章</h4><p class="sub-desc" data-v-420a19d7>想要了解 Nut Ui 设计体系背后的故事？如何才能更好的应用 Nut Ui？你可以查阅下述我们为你精挑细选的文章。也欢迎关注Nut Ui 官方专栏，这里常有关于Nut Ui 设计体系下相关话题内容的最新分享和讨论.</p><ul class="article-box" data-v-420a19d7><li class="article-item" data-v-420a19d7><a class="article-link" data-v-420a19d7> NutUI - 由京东出品，适合快速开发商城类h5、小程序的移动端 UI 组件库 </a></li><li class="article-item" data-v-420a19d7><a class="article-link" data-v-420a19d7> NutUI - 由京东出品，适合快速开发商城类h5、小程序的移动端 UI 组件库 </a></li></ul></div>',1);T();const Ge=Le(((e,s,t,a,c,o)=>{const d=r("doc-header"),l=r("doc-footer");return n(),i(g,null,[v(d),Ve,v("div",Pe,[0===e.articleList.length?(n(),i("div",Oe,[Te,xe,Ue])):(n(),i("div",Re,[Ne,ye,v("div",Ce,[v("div",Se,[(n(!0),i(g,null,f(e.tabData,((s,t)=>(n(),i("div",{class:["tab-hd-item",{active:e.activeIndex===t}],key:t,onClick:s=>e.clickTab(t)},k(s.title),11,["onClick"])))),128))]),p(v("div",Be,[(n(!0),i(g,null,f(e.articleList,(s=>(n(),i("div",{class:"design-item",key:s.id,onClick:t=>e.toLink(s.id)},[v("img",{class:"img-design",src:s.cover_image},null,8,["src"]),v("p",Fe,k(s.title),1)],8,["onClick"])))),128))],512),[[_,0===e.activeIndex]]),p(v("div",He,[Ye,Xe],512),[[_,1===e.activeIndex]])])])),We]),v(l)],64)}));we.render=Ge,we.__scopeId="data-v-420a19d7";var Je=d({name:"main",components:{[G.name]:G,[de.name]:de},setup(){const s=l({articleList:[]});m((()=>{(new je).getArticle().then((e=>{0==(null==e?void 0:e.state)&&(s.articleList=e.value.data.arrays.map((e=>{if(1==e.type)return e})).filter((e=>e)))}))}));const t=D((()=>function(){return`doc-content-${W.value}`}));return e(e({toIntro:function(){hs.push({path:"/intro"})}},U(s)),{themeName:t,toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}});const Me=P("data-v-5fb36471");O("data-v-5fb36471");const qe={class:"doc-content-index"},Qe={class:"content-left"},Ke=v("div",{class:"content-title"}," NutUI 3.0 ",-1),ze=v("div",{class:"content-smile"},null,-1),Ze=v("div",{class:"content-subTitle"},"一款具有京东风格的VUE组件",-1),$e={class:"content-button"},es=v("div",{class:"leftButtonText"},"开始使用",-1),ss=R('<div class="rightButton" data-v-5fb36471><div class="rightButtonText" data-v-5fb36471>扫码体验</div><div class="qrcodepart" data-v-5fb36471><div class="qrcode-text" data-v-5fb36471> 请使用手机扫码体验 </div><div class="qrcode" data-v-5fb36471></div></div></div>',1),ts=v("iframe",{style:{"margin-left":"20px"},src:"https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"},null,-1),as=v("div",{class:"content-right"},[v("div",{class:"content-img"})],-1),cs=v("div",{class:"doc-content-features"},[v("div",{class:"doc-content-hd"},[v("h4",{class:"doc-content-title"},"平台特色")]),v("ul",{class:"features-list"},[v("li",{class:"features-item"},[v("img",{src:"/nutui/assets/img-home-features1.2ef25c62.png"}),v("p",{class:"features-title"},"京东风格"),v("p",{class:"features-desc"},"遵循京东App9.0设计规范")]),v("li",{class:"features-item"},[v("img",{src:"/nutui/assets/img-home-features2.37cc104b.png"}),v("p",{class:"features-title"},"组件丰富"),v("p",{class:"features-desc a-l"},"提供70+组件，丰富的demo快速体验交互细节，覆盖各类场景满足各种功能的需求")]),v("li",{class:"features-item"},[v("img",{src:"/nutui/assets/img-home-features3.7207ff14.png"}),v("p",{class:"features-title"},"前沿技术"),v("p",{class:"features-desc"},"Vue3.X vite2.X typescript")]),v("li",{class:"features-item"},[v("img",{src:"/nutui/assets/img-home-features4.e29dd764.png"}),v("p",{class:"features-title"},"贴心通道"),v("p",{class:"features-desc"},[b("社区维护 高效服务"),v("br"),b("技术支持 经验沉淀")])])])],-1),os={key:0,class:"doc-content-more"},ds=v("div",{class:"doc-content-hd"},[v("h4",{class:"doc-content-title"},"更多内容"),v("a",{class:"sub-more",href:"https://jelly.jd.com/search/all?keyword=nutui",target:"_blank"},"More")],-1),rs={class:"more-list"},is={class:"more-title"};T();const ns=Me(((e,s,t,a,c,o)=>{const d=r("doc-header"),l=r("doc-footer");return n(),i(g,null,[v(d),v("div",{class:["doc-content",e.themeName()]},[v("div",qe,[v("div",Qe,[Ke,ze,Ze,v("div",$e,[v("div",{class:"leftButton",onClick:s[1]||(s[1]=(...s)=>e.toIntro&&e.toIntro(...s))},[es]),ss,ts])]),as]),cs,e.articleList.length>0?(n(),i("div",os,[ds,v("ul",rs,[(n(!0),i(g,null,f(e.articleList.slice(0,4),(s=>(n(),i("li",{class:"more-item",key:s.id,onClick:t=>e.toLink(s.id)},[v("img",{src:s.cover_image},null,8,["src"]),v("p",is,k(s.title),1)],8,["onClick"])))),128))])])):I("",!0)],2),v(l)],64)}));Je.render=ns,Je.__scopeId="data-v-5fb36471";const ls=[],ms={"/src/packages/actionsheet/doc.md":()=>c((()=>__import__("./doc.a8ab3679.js")),["/nutui/assets/doc.a8ab3679.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/address/doc.md":()=>c((()=>__import__("./doc.ae722007.js")),["/nutui/assets/doc.ae722007.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/avatar/doc.md":()=>c((()=>__import__("./doc.79f144eb.js")),["/nutui/assets/doc.79f144eb.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/backtop/doc.md":()=>c((()=>__import__("./doc.2d05fdc4.js")),["/nutui/assets/doc.2d05fdc4.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/button/doc.md":()=>c((()=>__import__("./doc.ceafb270.js")),["/nutui/assets/doc.ceafb270.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/calendar/doc.md":()=>c((()=>__import__("./doc.bb6dc1d7.js")),["/nutui/assets/doc.bb6dc1d7.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/cell/doc.md":()=>c((()=>__import__("./doc.c4d0cd35.js")),["/nutui/assets/doc.c4d0cd35.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/checkbox/doc.md":()=>c((()=>__import__("./doc.32eb1172.js")),["/nutui/assets/doc.32eb1172.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/checkboxgroup/doc.md":()=>c((()=>__import__("./doc.df82742b.js")),["/nutui/assets/doc.df82742b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/collapse/doc.md":()=>c((()=>__import__("./doc.c8d2aaa0.js")),["/nutui/assets/doc.c8d2aaa0.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/collapseitem/doc.md":()=>c((()=>__import__("./doc.1e0b7e07.js")),["/nutui/assets/doc.1e0b7e07.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/datepicker/doc.md":()=>c((()=>__import__("./doc.2a4d0648.js")),["/nutui/assets/doc.2a4d0648.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/dialog/doc.md":()=>c((()=>__import__("./doc.185889a4.js")),["/nutui/assets/doc.185889a4.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/drag/doc.md":()=>c((()=>__import__("./doc.7ac9a0a3.js")),["/nutui/assets/doc.7ac9a0a3.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/icon/doc.md":()=>c((()=>__import__("./doc.9458869f.js")),["/nutui/assets/doc.9458869f.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/infiniteloading/doc.md":()=>c((()=>__import__("./doc.a816e22e.js")),["/nutui/assets/doc.a816e22e.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/input/doc.md":()=>c((()=>__import__("./doc.0d00e76a.js")),["/nutui/assets/doc.0d00e76a.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/inputnumber/doc.md":()=>c((()=>__import__("./doc.550dbdc6.js")),["/nutui/assets/doc.550dbdc6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/layout/doc.md":()=>c((()=>__import__("./doc.ef9c78b5.js")),["/nutui/assets/doc.ef9c78b5.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/menu/doc.md":()=>c((()=>__import__("./doc.42297a3e.js")),["/nutui/assets/doc.42297a3e.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/navbar/doc.md":()=>c((()=>__import__("./doc.6dbfc98b.js")),["/nutui/assets/doc.6dbfc98b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/notify/doc.md":()=>c((()=>__import__("./doc.3c3a0dbe.js")),["/nutui/assets/doc.3c3a0dbe.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/overlay/doc.md":()=>c((()=>__import__("./doc.c147f305.js")),["/nutui/assets/doc.c147f305.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/picker/doc.md":()=>c((()=>__import__("./doc.b316e1d9.js")),["/nutui/assets/doc.b316e1d9.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/popup/doc.md":()=>c((()=>__import__("./doc.b84c5d23.js")),["/nutui/assets/doc.b84c5d23.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/price/doc.md":()=>c((()=>__import__("./doc.a2fd9492.js")),["/nutui/assets/doc.a2fd9492.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/pullrefresh/doc.md":()=>c((()=>__import__("./doc.e4747250.js")),["/nutui/assets/doc.e4747250.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/radio/doc.md":()=>c((()=>__import__("./doc.84a6d111.js")),["/nutui/assets/doc.84a6d111.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/radiogroup/doc.md":()=>c((()=>__import__("./doc.4698e208.js")),["/nutui/assets/doc.4698e208.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/range/doc.md":()=>c((()=>__import__("./doc.288cb4fc.js")),["/nutui/assets/doc.288cb4fc.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/rate/doc.md":()=>c((()=>__import__("./doc.891d93d5.js")),["/nutui/assets/doc.891d93d5.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/shortpassword/doc.md":()=>c((()=>__import__("./doc.13f3b6f6.js")),["/nutui/assets/doc.13f3b6f6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/swiper/doc.md":()=>c((()=>__import__("./doc.1b71b8b0.js")),["/nutui/assets/doc.1b71b8b0.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/swiperitem/doc.md":()=>c((()=>__import__("./doc.31e2fac6.js")),["/nutui/assets/doc.31e2fac6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/switch/doc.md":()=>c((()=>__import__("./doc.e21ab663.js")),["/nutui/assets/doc.e21ab663.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/tab/doc.md":()=>c((()=>__import__("./doc.d0e038c9.js")),["/nutui/assets/doc.d0e038c9.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/tabbar/doc.md":()=>c((()=>__import__("./doc.8f4e973b.js")),["/nutui/assets/doc.8f4e973b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/temp/doc.md":()=>c((()=>__import__("./doc.0a9abe6c.js")),["/nutui/assets/doc.0a9abe6c.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/toast/doc.md":()=>c((()=>__import__("./doc.990fe433.js")),["/nutui/assets/doc.990fe433.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/uploader/doc.md":()=>c((()=>__import__("./doc.54db39a1.js")),["/nutui/assets/doc.54db39a1.js","/nutui/assets/vendor.80bf15c7.js"])};for(const As in ms){let e=/packages\/(.*)\/doc.md/.exec(As)[1];ls.push({path:"/"+e,component:ms[As],name:e})}const us={"/src/docs/international.md":()=>c((()=>__import__("./international.07493412.js")),["/nutui/assets/international.07493412.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/intro.md":()=>c((()=>__import__("./intro.1c45f854.js")),["/nutui/assets/intro.1c45f854.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/joinus.md":()=>c((()=>__import__("./joinus.8bfbd768.js")),["/nutui/assets/joinus.8bfbd768.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/start.md":()=>c((()=>__import__("./start.734bfedf.js")),["/nutui/assets/start.734bfedf.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/theme.md":()=>c((()=>__import__("./theme.47fc7021.js")),["/nutui/assets/theme.47fc7021.js","/nutui/assets/vendor.80bf15c7.js"])};for(const As in us){let e=/docs\/(.*).md/.exec(As)[1];ls.push({path:"/"+e,component:us[As],name:e})}const ps=[{path:"/",name:"/",component:Je},{path:"/index",name:"index",component:ge,children:ls},{path:"/resource",name:"resource",component:we}];ps.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});const hs=N({history:y(),routes:ps,scrollBehavior(e){if(e.hash){const s=e.hash.split("#")[1],t=document.getElementById(s);setTimeout((()=>{t&&t.scrollIntoView(!0)}))}}});hs.afterEach(((e,s)=>{window.scrollTo(0,0),(new De).request("/user/saveVisitInfo","post",{headers:"",componentName:e.path.split("/")[1]})}));const vs={setup:()=>({onlineFun:function(){alert("hello")}})},_s=P("data-v-c6543ac2");O("data-v-c6543ac2");const gs=v("p",{class:"online-part"},[v("a",{href:"//gitpod.io/#https://github.com/jdf2e/nutui.git",target:"_blank",class:"online-btn"},"在线运行")],-1);T();const fs=_s(((e,s,t,a,c,o)=>(n(),i("div",null,[C(e.$slots,"highlight"),C(e.$slots,"default"),gs]))));vs.render=fs,vs.__scopeId="data-v-c6543ac2",o&&location.replace("demo.html"+location.hash),S(B).component("demo-block",vs).use(hs).mount("#doc");
