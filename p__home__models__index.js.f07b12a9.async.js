(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"4ZnT":function(e,t,r){"use strict";var n=r("d6i3"),a=r.n(n),u=r("1l/V"),c=r.n(u),s=r("p0pE"),i=r.n(s),p=r("io9h"),o=Object(p["a"])({prefix:"/api",headers:{authoration:"apicode",apicode:"479f9156c5784dd092d42a58919ccc76"}});o.interceptors.request.use(function(){var e=c()(a.a.mark(function e(t,r){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{url:"".concat(t),options:i()({},r)});case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),o.interceptors.response.use(function(){var e=c()(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=9;break}return e.next=3,t.clone().json();case 3:if(r=e.sent,200!==r.code){e.next=8;break}return e.abrupt("return",r);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var d=o;function l(e){return f.apply(this,arguments)}function f(){return f=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/query",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function w(e){return h.apply(this,arguments)}function h(){return h=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/fynearby",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return x=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/tripQuery",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return v=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/spreadQuery",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function b(e){return k.apply(this,arguments)}function k(){return k=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/identifyRumor",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function g(e){return S.apply(this,arguments)}function S(){return S=c()(a.a.mark(function e(t){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",d("/country",{method:"get",params:t}));case 1:case"end":return e.stop()}},e)})),S.apply(this,arguments)}r.d(t,"c",function(){return l}),r.d(t,"d",function(){return w}),r.d(t,"a",function(){return m}),r.d(t,"b",function(){return y}),r.d(t,"e",function(){return b}),r.d(t,"f",function(){return g})},"6Mbx":function(e,t,r){"use strict";r.r(t);r("miYZ");var n=r("tsqr"),a=r("d6i3"),u=r.n(a),c=r("p0pE"),s=r.n(c),i=r("4ZnT");t["default"]={namespace:"Home",state:{page:1,num:10,desc:{},news:{},placeList:[],typeGroup:{1:"\u98de\u673a",2:"\u706b\u8f66",3:"\u5730\u94c1",4:"\u6c7d\u8f66"},arriveList:[],rumorList:[],collect:{}},reducers:{updateState(e,t){return s()({},e,t.payload)}},effects:{getNews(e,t){return u.a.mark(function r(){var n,a,c,s,p,o;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return n=e.payload,a=t.call,c=t.put,r.next=4,a(i["c"],n);case 4:if(s=r.sent,200!==s.code){r.next=8;break}return r.next=8,c({type:"updateState",payload:{desc:null===(p=s.newslist[0])||void 0===p?void 0:p.desc,news:null===(o=s.newslist[0])||void 0===o?void 0:o.news}});case 8:case"end":return r.stop()}},r)})()},getPlace(e,t){return u.a.mark(function r(){var a,c,s,p;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,c=t.call,s=t.put,r.next=4,c(i["d"],a);case 4:if(p=r.sent,200!==p.code){r.next=10;break}return r.next=8,s({type:"updateState",payload:{placeList:p.newslist}});case 8:r.next=11;break;case 10:n["b"].error(p.msg);case 11:case"end":return r.stop()}},r)})()},getArrive(e,t){return u.a.mark(function r(){var a,c,s,p;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,c=t.call,s=t.put,r.next=4,c(i["a"],a);case 4:if(p=r.sent,200!==p.code){r.next=10;break}return r.next=8,s({type:"updateState",payload:{arriveList:p.newslist}});case 8:r.next=11;break;case 10:n["b"].error(p.msg);case 11:case"end":return r.stop()}},r)})()},getMap(e,t){return u.a.mark(function r(){var a,c,s,p,o;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,c=t.call,s=t.put,r.next=4,c(i["b"],a);case 4:if(p=r.sent,200!==p.code){r.next=12;break}return o=p.newslist,o.forEach(e=>{e["name"]=e.provinceName,e["value"]=e.currentConfirmedCount}),r.next=10,s({type:"updateState",payload:{mapList:o}});case 10:r.next=13;break;case 12:n["b"].error(p.msg);case 13:case"end":return r.stop()}},r)})()},getRumor(e,t){return u.a.mark(function r(){var a,c,s,p;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,c=t.call,s=t.put,r.next=4,c(i["e"],a);case 4:if(p=r.sent,200!==p.code){r.next=10;break}return r.next=8,s({type:"updateState",payload:{rumorList:p.newslist}});case 8:r.next=11;break;case 10:n["b"].error(p.msg);case 11:case"end":return r.stop()}},r)})()},getStatistic(e,t){return u.a.mark(function r(){var a,c,s,p;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,c=t.call,s=t.put,r.next=4,c(i["f"],a);case 4:if(p=r.sent,"200"!==p.code){r.next=10;break}return r.next=8,s({type:"updateState",payload:{collect:p.data}});case 8:r.next=11;break;case 10:n["b"].error(p.msg);case 11:case"end":return r.stop()}},r)})()}}}}}]);