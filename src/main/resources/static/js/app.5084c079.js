(function(e){function t(t){for(var s,i,c=t[0],o=t[1],d=t[2],u=0,f=[];u<c.length;u++)i=c[u],n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=a("f23d"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{id:"main"}},[a("a-col",{staticClass:"header-wrapper",attrs:{span:24}},[a("a-col",{attrs:{span:6,offset:2}},[e._v("标题")])],1),a("a-col",{staticClass:"content-wrapper",attrs:{span:20,offset:2}},[a("p",[e._v("1.上传项目文件")]),a("div",{staticClass:"upload-area"},[a("a-upload-dragger",{staticClass:"upload-button",attrs:{action:"/upload",accept:".zip",fileList:e.fileList}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[e._v("点击或拖动文件到此")]),a("p",{staticClass:"ant-upload-hint"},[e._v("上传的文件内仅包含一个版本的项目")])]),a("div",{staticClass:"button-area"},[a("a-button",{staticClass:"start-button",attrs:{type:"primary",loading:e.loading,size:"large",disabled:!e.uploaded,block:""},on:{click:e.launch}},[e._v("\n          开始计算\n        ")])],1)],1),a("p",[e._v("2.计算结果")]),a("div",{staticClass:"result-area"},[e.versionInfos.length>0?a("div",[a("a-tabs",e._l(e.versionInfos,function(e,t){return a("a-tab-pane",{key:t,attrs:{tab:e.version}},[a("versionInfo",{attrs:{"version-info":e}})],1)}),1)],1):a("div",[a("a-alert",{attrs:{message:"没有项目显示",type:"info",showIcon:"",description:"请从上方上传项目文件夹"}})],1)]),a("p",[e._v("3.预测结果")]),a("div",{staticClass:"result-area"},[e.predict?a("div",[a("a-tabs",[a("a-tab-pane",{key:"0",staticClass:"predict-wrapper",attrs:{tab:"预测变更"}},[a("div",{staticClass:"predict-data-wrapper"},e._l(e.predict.data,function(t,s){return a("div",{key:s,staticClass:"predict-data-item",class:{changed:!t.isChanged,"not-changed":t.isChanged}},[e._v("\n                "+e._s(t.className)+"\n                "),a("div",{staticClass:"tag"},[e._v("\n                  "+e._s(t.isChanged?"变化":"不变")+"\n                ")])])}),0),a("div",{staticClass:"canvas-wrapper"},[a("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"chart"}})])]),a("a-tab-pane",{key:"1",staticClass:"list",attrs:{tab:"模型信息"}},[a("a-list",{staticStyle:{width:"85%"},attrs:{grid:{gutter:40,column:3},dataSource:e.predict.model},scopedSlots:e._u([{key:"renderItem",fn:function(t,s){return a("a-list-item",{},[a("div",{staticClass:"item-wrapper"},[a("div",[e._v(e._s(t.name))]),a("div",[e._v(e._s(t.value))])])])}}],null,!1,484578733)})],1)],1)],1):a("div",[a("a-alert",{attrs:{message:"没有项目显示",type:"info",showIcon:"",description:"请从上方上传项目文件夹"}})],1)])])],1)},i=[],c=(a("96cf"),a("3b8d")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-tabs",{attrs:{"tab-position":"left"},on:{change:e.changeTab}},[a("a-tab-pane",{key:"1",staticClass:"list",attrs:{tab:"基本信息"}},[a("a-list",{staticStyle:{width:"85%"},attrs:{grid:{gutter:40,column:2},dataSource:e.versionInfo.basic},scopedSlots:e._u([{key:"renderItem",fn:function(t,s){return a("a-list-item",{},[a("div",{staticClass:"item-wrapper"},[a("div",[e._v(e._s(t.name))]),a("div",[e._v(e._s(t.value))])])])}}])})],1),a("a-tab-pane",{key:"2",staticClass:"table",attrs:{tab:"度量信息"}},[a("a-table",{attrs:{dataSource:e.dataSource,columns:e.columns,pagination:{pageSize:10},scroll:{x:!0}},scopedSlots:e._u([{key:"className",fn:function(t){return[a("div",{staticStyle:{color:"rgb(16, 142, 233)"}},[a("b",[e._v(e._s(t))])])]}},{key:"type",fn:function(t){return[a("div",{class:"type-"+t},[e._v(e._s(t))])]}},{key:"changeType",fn:function(t){var s=t[0],n=t[1],r=t[2];return[a("a-icon",{style:{color:n},attrs:{type:s}}),e._v("\n          "+e._s(r)+"\n        ")]}}])}),a("div",{staticClass:"chart-wrapper"},[a("div",{staticStyle:{width:"800px",height:"400px"},attrs:{id:e.versionInfo.version}})])],1)],1)],1)},d=[],l=a("a4bb"),u=a.n(l),f=(a("ac6a"),a("cebc")),p=a("75fc"),b=a("a6b6"),j=a("313e"),h=a.n(j),v={name:"VersionInfo",components:{AListItem:b["a"]},props:["versionInfo"],data:function(){return{chart:null,cTypeSlot:{updated:["sync","rgb(16, 142, 233)","变动"],unchanged:["check","#bfbfbf","不变"],deleted:["minus","rgb(237, 50, 66)","删除"],added:["plus","#0fbb5c","新增"],null:["close","#bfbfbf","无对比信息"]}}},computed:{title:function(){return["类名","类型","变更值","变化类型"].concat(Object(p["a"])(this.versionInfo.metric.head.slice(4)))},columns:function(){var e=this;return this.versionInfo.metric.head.map(function(t,a){var s=a>0?{width:50}:{fixed:"left"};return Object(f["a"])({title:e.title[a],dataIndex:t,scopedSlots:{customRender:t}},s,{sorter:function(e,a){return e[t]<a[t]?-1:e[t]==a[t]?0:1}})})},dataSource:function(){var e=this;return this.versionInfo.metric.data.map(function(t,a){var s={key:a};return t.forEach(function(t,a){s[e.columns[a].dataIndex]=3===a?e.cTypeSlot[t]:t}),s})},option:function(){var e={updated:0,unchanged:0,added:0,deleted:0};this.versionInfo.metric.data.forEach(function(t){return e[t[3]]++});var t=["变化的类","未变的类","增加的类","删除的类"];return{title:{text:"类变更类型占比",x:"center"},tooltip:{trigger:"item",formatter:"{b}类数量: {c}"},legend:{type:"scroll",orient:"vertical",right:10,data:t},series:[{name:"变化占比",type:"pie",data:t.map(function(t,a){return{name:t,value:e[u()(e)[a]]}})}]}}},methods:{changeTab:function(e){var t=this;"2"===e&&(this.chart?this.chart.setOption(this.option):setTimeout(function(){var e=document.getElementById(t.versionInfo.version);t.chart=h.a.init(e),t.chart.setOption(t.option)},0))}}},m=v,g=(a("adc3"),a("2877")),y=Object(g["a"])(m,o,d,!1,null,null,null),k=y.exports,_=a("bc3a"),w=a.n(_),x={computed:{option:function(){var e=this.predict.data.reduce(function(e,t){return!t.isChanged||e++,e},0),t=["将变化的","将不变的"];return{title:{text:"预测变化占比",x:"center"},tooltip:{trigger:"item",formatter:"{b}类数量: {c}"},legend:{type:"scroll",orient:"vertical",right:10,data:t},series:[{name:"变化占比",type:"pie",data:[{name:t[0],value:e},{name:t[1],value:this.predict.data.length-e}]}]}}},data:function(){return{loading:!1,uploaded:!0,chart:null,fileList:[{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"}],versionInfos:[{projectName:"junit 4",version:"4.1.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.1","class","16","updated"],["junit4,3","interface","10","added"],["junit4,3","interface","10","null"]]}},{projectName:"junit 4",version:"4.2.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.9","class","16","updated"],["junit4,9","interface","10","added"],["junit4,9","enum","10","added"]]}}],predict:{data:[{className:"org.junit.test2",isChanged:!0},{className:"org.junit.test3",isChanged:!1}],model:{}}}},methods:{fileListHandler:function(e){var t=e.file,a=e.fileList;return console.log(t,a),t},onComplete:function(){this.chart||(this.chart=h.a.init(document.getElementById("chart"))),this.chart.setOption(this.option)},launch:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,w.a.get("/launch");case 3:t=e.sent,console.log(t),200===t.status&&(this.versionInfos=t.data.data.versionInfo,this.predict=t.data.data.predict,this.onComplete()),this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),test:function(){this.versionInfos=[{projectName:"junit 4",version:"4.1.0",basic:[{name:"key1",value:123},{name:"key2",value:321}],metric:{head:["className","type","changeValue","changeType","loc"],data:[["junit4.9","class","16","updated",123],["junit4,9","interface","10","added",222],["junit4,9","enum","10","added",333]]}},{projectName:"junit 4",version:"4.7.0",basic:[{name:"key1",value:555}],metric:{head:["className","type","changeValue","changeType"],data:[["junit4.1","class","16","updated"],["junit4,3","class","10","added"],["junit4,3","class","10","added"],["junit4,3","class","10","added"]]}}]}},components:{versionInfo:k}},C=x,I=(a("7c55"),Object(g["a"])(C,r,i,!1,null,null,null)),z=I.exports;a("3aed");s["a"].config.productionTip=!1,s["a"].use(n["a"]),new s["a"]({render:function(e){return e(z)}}).$mount("#app")},"5c48":function(e,t,a){},"7c55":function(e,t,a){"use strict";var s=a("5c48"),n=a.n(s);n.a},"9bc7":function(e,t,a){},adc3:function(e,t,a){"use strict";var s=a("9bc7"),n=a.n(s);n.a}});
//# sourceMappingURL=app.5084c079.js.map