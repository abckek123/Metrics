(function(t){function e(e){for(var s,c,i=e[0],o=e[1],d=e[2],u=0,f=[];u<i.length;u++)c=i[u],n[c]&&f.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=a("f23d"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-row",{attrs:{id:"main"}},[a("a-col",{staticClass:"header-wrapper",attrs:{span:24}},[a("a-col",{attrs:{span:6,offset:2}},[t._v("标题")])],1),a("a-col",{staticClass:"content-wrapper",attrs:{span:20,offset:2}},[a("p",[t._v("1.上传项目文件")]),a("div",{staticClass:"upload-area"},[a("a-upload-dragger",{staticClass:"upload-button",attrs:{action:"/upload",accept:".zip"}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("点击或拖动文件到此")]),a("p",{staticClass:"ant-upload-hint"},[t._v("上传的文件内仅包含一个版本的项目")])]),a("div",{staticClass:"button-area"},[a("a-button",{staticClass:"start-button",attrs:{type:"primary",loading:t.loading,size:"large",disabled:!t.uploaded,block:""},on:{click:t.launch}},[t._v("\n          开始计算\n        ")])],1)],1),a("p",[t._v("2.计算结果")]),a("div",{staticClass:"result-area"},[t.versionInfos.length>0?a("div",[a("a-tabs",t._l(t.versionInfos,function(t,e){return a("a-tab-pane",{key:e,attrs:{tab:t.version}},[a("versionInfo",{attrs:{"version-info":t}})],1)}),1)],1):a("div",[a("a-alert",{attrs:{message:"没有项目显示",type:"info",showIcon:"",description:"请从上方上传项目文件夹"}})],1)]),a("p",[t._v("3.预测结果")]),a("div",{staticClass:"result-area"},[t.predict?a("div",[a("a-tabs",[a("a-tab-pane",{key:"0",staticClass:"predict-wrapper",attrs:{tab:"预测变更"}},[a("div",{staticClass:"predict-data-wrapper"},t._l(t.predict.data,function(e,s){return a("div",{key:s,staticClass:"predict-data-item",class:{changed:!e.isChanged,"not-changed":e.isChanged}},[t._v("\n                "+t._s(e.className)+"\n                "),a("div",{staticClass:"tag"},[t._v("\n                  "+t._s(e.isChanged?"变化":"不变")+"\n                ")])])}),0),a("div",{staticClass:"canvas-wrapper"},[a("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"chart"}})])]),a("a-tab-pane",{key:"1",staticClass:"list",attrs:{tab:"模型信息"}},[a("a-list",{staticStyle:{width:"85%"},attrs:{grid:{gutter:40,column:3},dataSource:t.predict.model},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return a("a-list-item",{},[a("div",{staticClass:"item-wrapper"},[a("div",[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.value))])])])}}],null,!1,484578733)})],1)],1)],1):a("div",[a("a-alert",{attrs:{message:"没有项目显示",type:"info",showIcon:"",description:"请从上方上传项目文件夹"}})],1)])])],1)},c=[],i=(a("96cf"),a("3b8d")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-tabs",{attrs:{"tab-position":"left"},on:{change:t.changeTab}},[a("a-tab-pane",{key:"1",staticClass:"list",attrs:{tab:"基本信息"}},[a("a-list",{staticStyle:{width:"85%"},attrs:{grid:{gutter:40,column:2},dataSource:t.versionInfo.basic},scopedSlots:t._u([{key:"renderItem",fn:function(e,s){return a("a-list-item",{},[a("div",{staticClass:"item-wrapper"},[a("div",[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.value))])])])}}])})],1),a("a-tab-pane",{key:"2",staticClass:"table",attrs:{tab:"度量信息"}},[a("a-table",{attrs:{dataSource:t.dataSource,columns:t.columns,pagination:{pageSize:10},scroll:{x:!0}},scopedSlots:t._u([{key:"className",fn:function(e){return[a("div",{staticStyle:{color:"rgb(16, 142, 233)"}},[a("b",[t._v(t._s(e))])])]}},{key:"type",fn:function(e){return[a("div",{class:"type-"+e},[t._v(t._s(e))])]}},{key:"changeType",fn:function(e){var s=e[0],n=e[1],r=e[2];return[a("a-icon",{style:{color:n},attrs:{type:s}}),t._v("\n          "+t._s(r)+"\n        ")]}}])}),a("div",{staticClass:"chart-wrapper"},[a("div",{staticStyle:{width:"800px",height:"400px"},attrs:{id:t.versionInfo.version}})])],1)],1)],1)},d=[],l=a("a4bb"),u=a.n(l),f=(a("ac6a"),a("cebc")),p=a("75fc"),b=a("a6b6"),j=a("313e"),h=a.n(j),v={name:"VersionInfo",components:{AListItem:b["a"]},props:["versionInfo"],data:function(){return{chart:null,cTypeSlot:{updated:["sync","rgb(16, 142, 233)","变动"],unchanged:["check","#bfbfbf","不变"],deleted:["minus","rgb(237, 50, 66)","删除"],added:["plus","#0fbb5c","新增"],null:["close","#bfbfbf","无对比信息"]}}},computed:{title:function(){return["类名","类型","变更值","变化类型"].concat(Object(p["a"])(this.versionInfo.metric.head.slice(4)))},columns:function(){var t=this;return this.versionInfo.metric.head.map(function(e,a){var s=a>0?{width:50}:{fixed:"left"};return Object(f["a"])({title:t.title[a],dataIndex:e,scopedSlots:{customRender:e}},s,{sorter:function(t,a){return t[e]<a[e]?-1:t[e]==a[e]?0:1}})})},dataSource:function(){var t=this;return this.versionInfo.metric.data.map(function(e,a){var s={key:a};return e.forEach(function(e,a){s[t.columns[a].dataIndex]=3===a?t.cTypeSlot[e]:e}),s})},option:function(){var t={updated:0,unchanged:0,added:0,deleted:0};this.versionInfo.metric.data.forEach(function(e){return t[e[3]]++});var e=["变化的类","未变的类","增加的类","删除的类"];return{title:{text:"类变更类型占比",x:"center"},tooltip:{trigger:"item",formatter:"{b}类数量: {c}"},legend:{type:"scroll",orient:"vertical",right:10,data:e},series:[{name:"变化占比",type:"pie",data:e.map(function(e,a){return{name:e,value:t[u()(t)[a]]}})}]}}},methods:{changeTab:function(t){var e=this;"2"===t&&(this.chart?this.chart.setOption(this.option):setTimeout(function(){var t=document.getElementById(e.versionInfo.version);e.chart=h.a.init(t),e.chart.setOption(e.option)},0))}}},m=v,g=(a("adc3"),a("2877")),y=Object(g["a"])(m,o,d,!1,null,null,null),k=y.exports,_=a("bc3a"),w=a.n(_),C={computed:{option:function(){var t=this.predict.data.reduce(function(t,e){return!e.isChanged||t++,t},0),e=["将变化的","将不变的"];return{title:{text:"预测变化占比",x:"center"},tooltip:{trigger:"item",formatter:"{b}类数量: {c}"},legend:{type:"scroll",orient:"vertical",right:10,data:e},series:[{name:"变化占比",type:"pie",data:[{name:e[0],value:t},{name:e[1],value:this.predict.data.length-t}]}]}}},data:function(){return{loading:!1,uploaded:!0,chart:null,fileList:[],versionInfos:[{projectName:"junit 4",version:"4.1.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.1","class","16","updated"],["junit4,3","interface","10","added"],["junit4,3","interface","10","null"]]}},{projectName:"junit 4",version:"4.2.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.9","class","16","updated"],["junit4,9","interface","10","added"],["junit4,9","enum","10","added"]]}}],predict:{data:[{className:"org.junit.test2",isChanged:!0},{className:"org.junit.test3",isChanged:!1}],model:{}}}},methods:{fileListHandler:function(t){var e=t.file,a=t.fileList;return console.log(e,a),e},onComplete:function(){this.chart||(this.chart=h.a.init(document.getElementById("chart"))),this.chart.setOption(this.option)},launch:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,w.a.get("/launch");case 3:e=t.sent,console.log(e),200===e.status&&(this.versionInfos=e.data.data.versionInfo,this.predict=e.data.data.predict,this.onComplete()),this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),test:function(){this.versionInfos=[{projectName:"junit 4",version:"4.1.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType","loc"],data:[["junit4.9","class","16","updated",123],["junit4,9","interface","10","added",222],["junit4,9","enum","10","added",333]]}},{projectName:"junit 4",version:"4.7.0",basic:[{name:"key1",value:555}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.1","class","16","updated"],["junit4,3","class","10","added"],["junit4,3","class","10","added"],["junit4,3","class","10","added"]]}}]}},components:{versionInfo:k}},x=C,I=(a("7c55"),Object(g["a"])(x,r,c,!1,null,null,null)),z=I.exports;a("3aed");s["a"].config.productionTip=!1,s["a"].use(n["a"]),new s["a"]({render:function(t){return t(z)}}).$mount("#app")},"5c48":function(t,e,a){},"7c55":function(t,e,a){"use strict";var s=a("5c48"),n=a.n(s);n.a},"9bc7":function(t,e,a){},adc3:function(t,e,a){"use strict";var s=a("9bc7"),n=a.n(s);n.a}});
//# sourceMappingURL=app.2d22a3b7.js.map