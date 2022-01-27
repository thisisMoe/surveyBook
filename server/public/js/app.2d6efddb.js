(function(e){function t(t){for(var r,s,i=t[0],u=t[1],a=t[2],l=0,b=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7fc8488a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var a=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22fe":function(e,t,n){"use strict";var r=n("d4ec"),c=n("bee2"),o=(n("d3b7"),n("bc3a")),s=n.n(o),i="/api/surveys",u=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"createQuestions",value:function(e,t){return new Promise((function(n,r){s.a.post("".concat(i,"/").concat(e,"/questions/multiple"),{questions:t}).then((function(e){n(e.data)})).catch((function(e){return r(e)}))}))}},{key:"getQuestions",value:function(e){return new Promise((function(t,n){s.a.get("".concat(i,"/").concat(e,"/questions")).then((function(e){t(e.data)})).catch((function(e){return n(e)}))}))}}]),e}();t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"px-6 md:px-10 pb-10 pt-4 h-full"},o=Object(r["g"])("h1",{class:"text-5xl mb-16 mt-8"},"Survey Book",-1),s={id:"nav"},i={class:"border-b-2"},u={class:"flex cursor-pointer justify-center gap-4"},a=Object(r["h"])("Surveys"),l=Object(r["h"])("Create Survey");function d(e,t){var n=Object(r["x"])("router-link"),d=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["f"])("div",c,[o,Object(r["g"])("div",s,[Object(r["g"])("div",i,[Object(r["g"])("div",u,[Object(r["i"])(n,{"active-class":"bg-white text-gray-700",class:"py-2 px-6 rounded-t-lg text-gray-500",to:"/"},{default:Object(r["D"])((function(){return[a]})),_:1}),Object(r["i"])(n,{"active-class":"bg-white text-gray-700",class:"py-2 px-6 rounded-t-lg text-gray-500",to:"/create"},{default:Object(r["D"])((function(){return[l]})),_:1})])])]),Object(r["i"])(d)])}n("c09a");var b=n("6b0d"),f=n.n(b);const g={},h=f()(g,[["render",d]]);var v=h,p=(n("927c"),n("ba8c"),n("a18c"));Object(r["c"])(v).use(p["a"]).mount("#app")},"5e81":function(e,t,n){"use strict";n("db02")},"927c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("6c02"),c=(n("a4d3"),n("e01a"),n("7a23")),o={class:"home"},s={key:0},i={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},u={key:1},a=Object(c["g"])("div",{class:"fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center"},[Object(c["g"])("div",{class:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})],-1),l=[a],d={key:2,class:"text-2xl mt-8"};function b(e,t,n,r,a,b){var f=Object(c["x"])("SurveyCardComponent");return Object(c["s"])(),Object(c["f"])("div",o,[a.loaded?(Object(c["s"])(),Object(c["f"])("div",s,[Object(c["g"])("div",i,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(a.surveys,(function(e){return Object(c["s"])(),Object(c["d"])(f,{key:e.id,id:e.id,title:e.title,description:e.description},null,8,["id","title","description"])})),128))])])):(Object(c["s"])(),Object(c["f"])("div",u,l)),a.surveys.length||1!=a.loaded?Object(c["e"])("",!0):(Object(c["s"])(),Object(c["f"])("div",d," No surveys found, Let's create a new Survey "))])}var f={class:"w-100 sm:max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-12 flex flex-col justify-between"},g={class:"text-gray-800 text-xl font-semibold my-6"},h={class:"mt-2 text-gray-500"},v={class:"flex justify-between mt-6"},p=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6 text-green-600",viewBox:"0 0 512 512"},[Object(c["g"])("title",null,"Results"),Object(c["g"])("rect",{x:"64",y:"320",width:"48",height:"160",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(c["g"])("rect",{x:"288",y:"224",width:"48",height:"256",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(c["g"])("rect",{x:"400",y:"112",width:"48",height:"368",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(c["g"])("rect",{x:"176",y:"32",width:"48",height:"448",rx:"8",ry:"8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})],-1),j=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-8 w-8",viewBox:"0 0 512 512"},[Object(c["g"])("title",null,"Start Survey"),Object(c["g"])("path",{d:"M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"})],-1);function O(e,t,n,r,o,s){var i=Object(c["x"])("router-link");return Object(c["s"])(),Object(c["f"])("div",f,[Object(c["g"])("div",null,[Object(c["g"])("h2",g,Object(c["z"])(n.title),1),Object(c["g"])("p",h,Object(c["z"])(n.description),1)]),Object(c["g"])("div",v,[Object(c["i"])(i,{to:{path:"/result/".concat(n.id)}},{default:Object(c["D"])((function(){return[p]})),_:1},8,["to"]),Object(c["i"])(i,{to:{path:"/survey/".concat(n.id)},class:"text-lg font-medium text-blue-400"},{default:Object(c["D"])((function(){return[j]})),_:1},8,["to"])])])}var y={name:"SurveyCardComponent",props:["id","title","description"]},w=n("6b0d"),m=n.n(w);const x=m()(y,[["render",O]]);var k=x,C=n("e7b3"),S={name:"Home",components:{SurveyCardComponent:k},data:function(){return{surveys:[],error:"",loaded:!1}},created:function(){var e=this;C["a"].getSurveys().then((function(t){e.surveys=t,e.loaded=!0})).catch((function(t){return e.error=t}))}};const q=m()(S,[["render",b]]);var P=q,z={key:0},_={class:"text-3xl text-gray-500 mt-8 mb-3"},A={class:"mb-6 text-gray-500"},M={class:"text-xl my-8"},D={class:"flex justify-center items-center mb-6"},N={class:"bg-gray-200 rounded-lg flex gap-8"},Q={class:"inline-flex rounded-lg"},B=["name","id"],E=["for"],L={class:"inline-flex rounded-lg"},T=["name","id"],R=["for"],H=Object(c["g"])("span",{class:"mr-2"},"Submit",-1),J=Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6",viewBox:"0 0 512 512"},[Object(c["g"])("title",null,"Cloud Upload"),Object(c["g"])("path",{d:"M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),Object(c["g"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 255.79l-64-64-64 64M256 448.21V207.79"})],-1),Y=[H,J],U={key:1},V=Object(c["g"])("div",{class:"fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center"},[Object(c["g"])("div",{class:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})],-1),F=[V];function G(e,t,n,r,o,s){return o.loaded?(Object(c["s"])(),Object(c["f"])("div",z,[Object(c["g"])("div",_,Object(c["z"])(o.survey.title),1),Object(c["g"])("div",A,Object(c["z"])(o.survey.description),1),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(o.questions,(function(e){return Object(c["s"])(),Object(c["f"])("div",{key:e.id,class:"w-full md:max-w-4xl mx-auto mb-10 py-2 px-4 bg-white shadow-lg rounded-lg"},[Object(c["g"])("div",M,Object(c["z"])(e.text),1),Object(c["g"])("div",D,[Object(c["g"])("div",N,[Object(c["g"])("div",Q,[Object(c["g"])("input",{type:"radio",onChange:t[0]||(t[0]=function(e){return s.onChange(e)}),value:"1",name:"answer-".concat(e.id),id:"yes-".concat(e.id),hidden:""},null,40,B),Object(c["g"])("label",{for:"yes-".concat(e.id),class:"radio text-center text-lg self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"},"Yes",8,E)]),Object(c["g"])("div",L,[Object(c["g"])("input",{type:"radio",onChange:t[1]||(t[1]=function(e){return s.onChange(e)}),value:"0",name:"answer-".concat(e.id),id:"no-".concat(e.id),hidden:""},null,40,T),Object(c["g"])("label",{for:"no-".concat(e.id),class:"radio text-center text-lg self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"},"No",8,R)])])])])})),128)),Object(c["g"])("button",{onClick:t[2]||(t[2]=function(){return s.submit&&s.submit.apply(s,arguments)}),class:"bg-white text-gray-800 font-bold rounded mt-6 w-10/12 text-2xl border-b-4 border-green-400 hover:border-green-400 hover:bg-green-400 hover:text-white shadow-md justify-center py-4 px-6 inline-flex items-center"},Y)])):(Object(c["s"])(),Object(c["f"])("div",U,F))}n("ac1f"),n("1276"),n("a9e3"),n("4de4");var I=n("22fe"),K={props:["id"],data:function(){return{survey:null,loaded:!1,questions:[],answers:[],newArray:[]}},created:function(){var e=this;C["a"].getSurvey(this.id).then((function(t){e.survey=t,I["a"].getQuestions(e.survey.id).then((function(t){e.questions=t,e.loaded=!0})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},methods:{onChange:function(e){var t=e.target.id.split("-")[1],n=e.target.value,r={question_id:Number(t),answer:Number(n)};this.answers.filter((function(e){e.question_id}))?(this.newArray=this.answers.filter((function(e){return e.question_id!=t})),this.answers=this.newArray,this.answers.push(r)):this.answers.push(r)},submit:function(){var e=this;C["a"].submitAnswers(this.answers).then((function(){ke.push({path:"/result/".concat(e.id)})}))}}};n("5e81");const W=m()(K,[["render",G]]);var X=W,Z={key:0,class:"text-3xl text-gray-500 mt-8 mb-3"},$={key:1,class:"mb-6 text-gray-500"};function ee(e,t,n,r,o,s){var i=Object(c["x"])("question-result");return Object(c["s"])(),Object(c["f"])("div",null,[o.survey?(Object(c["s"])(),Object(c["f"])("div",Z,Object(c["z"])(o.survey.title),1)):Object(c["e"])("",!0),o.survey?(Object(c["s"])(),Object(c["f"])("div",$,Object(c["z"])(o.survey.description),1)):Object(c["e"])("",!0),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(o.questions,(function(e){return Object(c["s"])(),Object(c["d"])(i,{key:e.id,question:e},null,8,["question"])})),128))])}var te={class:"w-full md:max-w-4xl mx-auto mb-10 py-2 px-4 bg-white shadow-lg rounded-lg"},ne={class:"text-xl my-8"},re={class:"bg-red-400 w-full",style:{height:"20px"}},ce={class:"flex justify-between my-2"},oe={class:"text-green-500"},se={class:"text-red-500"};function ie(e,t,n,r,o,s){return Object(c["s"])(),Object(c["f"])("div",te,[Object(c["g"])("div",ne,Object(c["z"])(n.question.text),1),Object(c["g"])("div",re,[Object(c["g"])("div",{class:"bg-green-400 h-full",style:Object(c["o"])({width:"".concat(o.answers.yes/(o.answers.yes+o.answers.no)*100,"%")})},null,4)]),Object(c["g"])("div",ce,[Object(c["g"])("div",oe,"Yes ("+Object(c["z"])(o.answers.yes)+")",1),Object(c["g"])("div",se,"No ("+Object(c["z"])(o.answers.no)+")",1)])])}var ue=n("5530"),ae=(n("159b"),n("d4ec")),le=n("bee2"),de=(n("99af"),n("bc3a")),be=n.n(de),fe="/api/surveys",ge=function(){function e(){Object(ae["a"])(this,e)}return Object(le["a"])(e,null,[{key:"getAnswers",value:function(e,t){return new Promise((function(n,r){be.a.get("".concat(fe,"/").concat(e,"/questions/").concat(t,"/answers")).then((function(e){n(e.data)})).catch((function(e){return r(e)}))}))}}]),e}(),he=ge,ve={props:["question"],data:function(){return{answers:{}}},created:function(){var e=this,t={yes:0,no:0};he.getAnswers(1,this.question.id).then((function(n){n.forEach((function(e){1==e.answer?t.yes++:0==e.answer&&t.no++})),e.answers=Object(ue["a"])({},t)}))},methods:{}};const pe=m()(ve,[["render",ie]]);var je=pe,Oe={components:{QuestionResult:je},props:["id"],data:function(){return{loaded:!1,questions:[],survey:null,answersData:[]}},created:function(){var e=this;C["a"].getSurvey(this.id).then((function(t){e.survey=t,I["a"].getQuestions(e.id).then((function(t){e.questions=t}))}))}};const ye=m()(Oe,[["render",ee]]);var we=ye,me=[{path:"/",name:"Home",component:P},{path:"/survey/:id",name:"Survey",component:X,props:!0},{path:"/result/:id",name:"Result",component:we,props:!0},{path:"/create",name:"Create",component:function(){return n.e("about").then(n.bind(null,"d879"))}}],xe=Object(r["a"])({history:Object(r["b"])("/"),routes:me}),ke=t["a"]=xe},ba8c:function(e,t,n){},c09a:function(e,t,n){"use strict";n("cd86")},cd86:function(e,t,n){},db02:function(e,t,n){},e7b3:function(e,t,n){"use strict";var r=n("d4ec"),c=n("bee2"),o=(n("d3b7"),n("bc3a")),s=n.n(o),i="/api/surveys",u=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getSurveys",value:function(){return new Promise((function(e,t){s.a.get(i).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))}))}},{key:"getSurvey",value:function(e){return new Promise((function(t,n){s.a.get("".concat(i,"/").concat(e)).then((function(e){return t(e.data[0])})).catch((function(e){return n(e)}))}))}},{key:"createSurvey",value:function(e,t){return new Promise((function(n,r){s.a.post(i,{title:e,description:t}).then((function(e){n(e.data)})).catch((function(e){return r(e)}))}))}},{key:"submitAnswers",value:function(e){return new Promise((function(t,n){s.a.post("".concat(i,"/submit"),{answers:e}).then((function(e){t(e.data)})).catch((function(e){return n(e)}))}))}}]),e}();t["a"]=u}});
//# sourceMappingURL=app.2d6efddb.js.map