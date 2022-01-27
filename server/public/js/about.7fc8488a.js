(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a434:function(e,t,n){"use strict";var o=n("23e7"),r=n("da84"),l=n("23cb"),s=n("5926"),i=n("07fa"),c=n("7b0b"),u=n("65f0"),d=n("8418"),a=n("1dde"),b=a("splice"),p=r.TypeError,h=Math.max,f=Math.min,g=9007199254740991,x="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var n,o,r,a,b,m,v=c(this),w=i(v),j=l(e,w),O=arguments.length;if(0===O?n=o=0:1===O?(n=0,o=w-j):(n=O-2,o=f(h(s(t),0),w-j)),w+n-o>g)throw p(x);for(r=u(v,o),a=0;a<o;a++)b=j+a,b in v&&d(r,a,v[b]);if(r.length=o,n<o){for(a=j;a<w-o;a++)b=a+o,m=a+n,b in v?v[m]=v[b]:delete v[m];for(a=w;a>w-o+n;a--)delete v[a-1]}else if(n>o)for(a=w-o;a>j;a--)b=a+o-1,m=a+n-1,b in v?v[m]=v[b]:delete v[m];for(a=0;a<n;a++)v[a+j]=arguments[a+2];return v.length=w-o+n,r}})},d81d:function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").map,l=n("1dde"),s=l("map");o({target:"Array",proto:!0,forced:!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},d879:function(e,t,n){"use strict";n.r(t);n("a4d3"),n("e01a");var o=n("7a23"),r={class:"about w-full"},l={class:"w-full md:max-w-4xl mx-auto py-2 px-4 bg-white shadow-lg rounded-lg my-10"},s={class:"block mb-2"},i=Object(o["g"])("div",{class:"text-2xl mb-3 mt-2 text-gray-500"},"Create Survey",-1),c={key:0,class:"my-4 text-red-500 text"},u={class:"block mb-2"},d={class:"block mb-2 mt-10"},a=Object(o["g"])("div",{class:"text-xl mb-6 mt-2 text-gray-500"},"Questions",-1),b=["placeholder","onUpdate:modelValue"],p=["onClick"],h=Object(o["g"])("title",null,"Remove",-1),f=Object(o["g"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144M368 144L144 368"},null,-1),g=[h,f],x={class:"mt-10 mb-5 flex justify-end md:w-10/12 mx-auto"},m=Object(o["g"])("span",{class:"mr-2"},"Add",-1),v=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6",viewBox:"0 0 512 512"},[Object(o["g"])("title",null,"Add"),Object(o["g"])("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288M400 256H112"})],-1),w=[m,v],j={class:"my-8"},O=Object(o["g"])("span",{class:"mr-2"},"Save",-1),y=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-6 w-6",viewBox:"0 0 512 512"},[Object(o["g"])("title",null,"Save"),Object(o["g"])("path",{d:"M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})],-1),k=[O,y];function q(e,t,n,h,f,m){return Object(o["s"])(),Object(o["f"])("div",r,[Object(o["g"])("div",l,[Object(o["g"])("div",s,[i,f.error?(Object(o["s"])(),Object(o["f"])("div",c,Object(o["z"])(f.error),1)):Object(o["e"])("",!0),Object(o["E"])(Object(o["g"])("textarea",{type:"text",placeholder:"Survey Title (Think something catchy!!)",maxlength:"200","onUpdate:modelValue":t[0]||(t[0]=function(e){return f.surveyTitle=e}),class:"w-full text-xl md:w-10/12 px-2 pt-4 rounded-lg border-2 border-blue-200 shadow-md focus:outline-none focus:border-blue-400"},null,512),[[o["B"],f.surveyTitle]])]),Object(o["g"])("div",u,[Object(o["E"])(Object(o["g"])("textarea",{type:"text",placeholder:"Optional Description",maxlength:"200","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.description=e}),class:"w-full text-md md:w-10/12 px-2 pt-4 rounded-lg border-2 border-blue-200 shadow-md focus:outline-none focus:border-blue-400"},null,512),[[o["B"],f.description]])]),Object(o["g"])("div",d,[a,(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(f.questionsInput,(function(e,t){return Object(o["s"])(),Object(o["f"])("div",{key:e.index,class:"flex items-center md:w-10/12 mx-auto gap-2 mb-12"},[Object(o["E"])(Object(o["g"])("textarea",{type:"text",placeholder:"Question ".concat(t+1),maxlength:"200","onUpdate:modelValue":function(t){return e.text=t},class:"w-full text-lg px-2 pt-4 rounded-lg border-2 border-blue-200 shadow-md focus:outline-none focus:border-blue-400"},null,8,b),[[o["B"],e.text]]),(Object(o["s"])(),Object(o["f"])("svg",{onClick:function(e){return m.deleteQuestion(t)},xmlns:"http://www.w3.org/2000/svg",class:"inline-block h-8 w-8 cursor-pointer text-red-500",viewBox:"0 0 512 512"},g,8,p))])})),128))]),Object(o["g"])("div",x,[Object(o["g"])("button",{onClick:t[2]||(t[2]=function(){return m.addQuestion&&m.addQuestion.apply(m,arguments)}),class:"bg-white text-gray-800 font-bold rounded text-lg border-b-2 border-blue-400 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center"},w)])]),Object(o["g"])("div",j,[Object(o["g"])("button",{onClick:t[3]||(t[3]=function(){return m.createSurvey&&m.createSurvey.apply(m,arguments)}),class:"bg-white text-gray-800 font-bold rounded w-10/12 text-2xl border-b-2 border-green-400 hover:border-green-400 hover:bg-green-400 hover:text-white shadow-md justify-center py-4 px-6 inline-flex items-center"},k)])])}n("a434"),n("d81d");var M=n("e7b3"),A=n("22fe"),C=n("a18c"),Q={data:function(){return{surveyTitle:"",description:"",questionsInput:[{text:""}],error:null}},methods:{deleteQuestion:function(e){e>-1&&this.questionsInput.splice(e,1)},addQuestion:function(){this.questionsInput.push({text:""})},createSurvey:function(){var e=this;if(!this.surveyTitle||!this.questionsInput[0].text)return this.error="You forgot to set a title and questions for your survey";M["a"].createSurvey(this.surveyTitle,this.description).then((function(t){A["a"].createQuestions(t.id,e.questionsList).then((function(){C["a"].push({path:"/"})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},computed:{questionsList:function(){return this.questionsInput.map((function(e){return e.text}))}}},S=n("6b0d"),T=n.n(S);const B=T()(Q,[["render",q]]);t["default"]=B}}]);
//# sourceMappingURL=about.7fc8488a.js.map