(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{NILm:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),r=(a("IzEo"),a("bx4M")),c=a("q1tI"),l=a.n(c),m=a("/MKj");function o(e){e.common;var t=e.dispatch,a=e.Home,m=a.desc,o=a.news;return Object(c["useEffect"])(()=>{t({type:"Home/getNews"})},[t]),l.a.createElement("div",null,l.a.createElement(r["a"],{title:"\u65b0\u51a0\u75c5\u6bd2",style:{width:"100%",marginBottom:20}},l.a.createElement("p",null,m.note1),l.a.createElement("p",null,m.note2),l.a.createElement("p",null,m.note3),l.a.createElement("p",null,m.remark1),l.a.createElement("p",null,m.remark2),l.a.createElement("p",null,m.remark3)),l.a.createElement("div",{style:{backgroundColor:"#fff",padding:20}},o.length>0&&l.a.createElement(n["b"],{itemLayout:"vertical",size:"default",pagination:!1,dataSource:o,renderItem:e=>l.a.createElement(n["b"].Item,{key:e.id,extra:l.a.createElement("img",{style:{width:245,height:180},alt:"",src:e.picUrl})},l.a.createElement(n["b"].Item.Meta,{title:l.a.createElement("a",{href:e.sourceUrl},e.title),description:"".concat(e.infoSource,"-").concat(e.pubDateStr)}),"".concat(e.summary,"..."))})))}t["default"]=Object(m["c"])(e=>{var t=e.common,a=e.Home;return{common:t,Home:a}})(o)}}]);