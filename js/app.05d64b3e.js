(function(){"use strict";var t={296:function(t,e,s){var a=s(963),i=s(252);function l(t,e){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var n=s(744);const c={},o=(0,n.Z)(c,[["render",l]]);var r=o,d=s(201),u=s(577),v=s(262);const m=.750062,_=t=>t?t.charAt(0).toUpperCase()+t.slice(1):"",h=t=>Math.round(t*m),f=t=>new Date(1e3*t).toLocaleTimeString("ru-RU",{timeZone:"Atlantic/Reykjavik"}),p=t=>((0,i.dD)("data-v-f2361964"),t=t(),(0,i.Cn)(),t),w={class:"summary"},b=p((()=>(0,i._)("pre",null,null,-1))),g={class:"weather"},k={class:"temp"},y={class:"weather-desc text-block"},x={class:"city text-block"},I={class:"date text-block"};var z={__name:"WeatherSummary",props:{weatherInfo:{type:[Object,null],default:null,required:!0}},setup(t){const e=(new Date).toLocaleString("en-EN",{weekday:"short",year:"numeric",month:"long",day:"numeric"});(0,i.Fl)((()=>{}));return(s,a)=>((0,i.wg)(),(0,i.iD)("div",w,[b,(0,i._)("div",{style:(0,u.j5)({backgroundImage:"url('/src/assets/img/weather-main/snow.png')"}),class:"pic-main"},null,4),(0,i._)("div",g,[(0,i._)("div",k,(0,u.zw)(Math.round(t.weatherInfo?.main?.temp))+" °C ",1),(0,i._)("div",y,(0,u.zw)((0,v.SU)(_)(t.weatherInfo?.weather[0].description)),1)]),(0,i._)("div",x,(0,u.zw)(t.weatherInfo?.name)+", "+(0,u.zw)(t.weatherInfo?.sys?.country),1),(0,i._)("div",I,(0,u.zw)((0,v.SU)(e)),1)]))}};const D=(0,n.Z)(z,[["__scopeId","data-v-f2361964"]]);var j=D;const S=t=>((0,i.dD)("data-v-9a3e61f2"),t=t(),(0,i.Cn)(),t),U={class:"section highlights"},O=S((()=>(0,i._)("div",{class:"title"}," Today's Highlights ",-1))),q={class:"highlights-wrapper"},C={class:"highlight"},W={class:"card"},H=S((()=>(0,i._)("div",{class:"card-title"}," Wind ",-1))),L=S((()=>(0,i._)("div",{class:"card-pic card-pic--wind"},null,-1))),F={class:"card-info"},T={class:"card-justify"},M={class:"info-main"},Z={class:"info-main-num"},P=S((()=>(0,i._)("div",{class:"info-main-text"}," m/s ",-1))),$={class:"info-main"},A={class:"info-main-num"},E=S((()=>(0,i._)("div",{class:"info-main-text"}," deg ",-1))),K={class:"card-small"},N=S((()=>(0,i._)("div",{class:"card-small-title"}," Wind gusts ",-1))),R={class:"card-small-info"},V={key:0,class:"card-small-data"},B={class:"info-main-num"},G=S((()=>(0,i._)("div",{class:"info-main-text"}," m/s ",-1))),J=S((()=>(0,i._)("div",{class:"card-small-hint"},[(0,i._)("div",{class:"card-small-pic card-small-pic--wind"}),(0,i._)("div",{class:"card-small-text text-egorova"},[(0,i.Uk)(" Learn "),(0,i._)("a",{href:"https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5",target:"_blank"},"more"),(0,i.Uk)(" about gusts ")])],-1))),Q={class:"highlight"},X={class:"card"},Y=S((()=>(0,i._)("div",{class:"card-title"}," Pressure ",-1))),tt=S((()=>(0,i._)("div",{class:"card-pic card-pic--pressure"},null,-1))),et={class:"card-info"},st={class:"card-centered"},at={class:"info-main"},it={class:"info-main-num"},lt=S((()=>(0,i._)("div",{class:"info-main-text"}," mm ",-1))),nt={class:"card-small"},ct=S((()=>(0,i._)("div",{class:"card-small-title"}," Feels like ",-1))),ot={class:"card-small-info"},rt={class:"card-small-data"},dt={class:"info-main-num"},ut=S((()=>(0,i._)("div",{class:"info-main-text"}," °C ",-1))),vt=S((()=>(0,i._)("div",{class:"card-small-hint"},[(0,i._)("div",{class:"card-small-pic card-small-pic--margin card-small-pic--pressure"}),(0,i._)("div",{class:"card-small-text"}," How hot or cold it really feels ")],-1))),mt={class:"highlight"},_t={class:"card"},ht=S((()=>(0,i._)("div",{class:"card-title"}," Sunrise and sunset ",-1))),ft=S((()=>(0,i._)("div",{class:"card-pic card-pic--sun"},null,-1))),pt={class:"card-info"},wt={class:"states"},bt={class:"state"},gt=S((()=>(0,i._)("div",{class:"state-pic"},null,-1))),kt=S((()=>(0,i._)("div",{class:"state-title"}," Sunrise ",-1))),yt={class:"state-time"},xt={class:"state"},It=S((()=>(0,i._)("div",{class:"state-pic state-pic--flipped"},null,-1))),zt=S((()=>(0,i._)("div",{class:"state-title"}," Sunset ",-1))),Dt={class:"state-time"},jt={class:"card-small"},St=S((()=>(0,i._)("div",{class:"card-small-title"}," Cloudiness ",-1))),Ut={class:"card-small-info"},Ot={class:"card-small-data"},qt={class:"info-main-num"},Ct=S((()=>(0,i._)("div",{class:"info-main-text"}," % ",-1))),Wt=S((()=>(0,i._)("div",{class:"card-small-hint"},[(0,i._)("div",{class:"card-small-pic card-small-pic--sun"}),(0,i._)("div",{class:"card-small-text"}," The sky fraction obscured by clouds ")],-1)));var Ht={__name:"Highlights",props:{weatherInfo:{type:[Object,null],default:null,required:!0}},setup(t){const e=t,s=(0,i.Fl)((()=>f(e.weatherInfo?.sys?.sunrise+l.value))),a=(0,i.Fl)((()=>f(e.weatherInfo?.sys?.sunset+l.value))),l=(0,i.Fl)((()=>e.weatherInfo?.timezone));return(e,l)=>((0,i.wg)(),(0,i.iD)("div",U,[O,(0,i._)("div",q,[(0,i._)("div",C,[(0,i._)("div",W,[H,L,(0,i._)("div",F,[(0,i._)("div",T,[(0,i._)("div",M,[(0,i._)("div",Z,(0,u.zw)(t.weatherInfo?.wind?.speed),1),P]),(0,i._)("div",$,[(0,i._)("div",A,(0,u.zw)(t.weatherInfo?.wind?.deg),1),E])])])]),(0,i._)("div",K,[N,(0,i._)("div",R,[t.weatherInfo?.wind?.gust?((0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("div",B,(0,u.zw)(Math.round(t.weatherInfo?.wind?.gust)),1),G])):(0,i.kq)("",!0),J])])]),(0,i._)("div",Q,[(0,i._)("div",X,[Y,tt,(0,i._)("div",et,[(0,i._)("div",st,[(0,i._)("div",at,[(0,i._)("div",it,(0,u.zw)((0,v.SU)(h)(t.weatherInfo?.main?.pressure)),1),lt])])])]),(0,i._)("div",nt,[ct,(0,i._)("div",ot,[(0,i._)("div",rt,[(0,i._)("div",dt,(0,u.zw)(Math.round(t.weatherInfo?.main?.feels_like)),1),ut]),vt])])]),(0,i._)("div",mt,[(0,i._)("div",_t,[ht,ft,(0,i._)("div",pt,[(0,i._)("div",wt,[(0,i._)("div",bt,[gt,kt,(0,i._)("div",yt,(0,u.zw)(s.value),1)]),(0,i._)("div",xt,[It,zt,(0,i._)("div",Dt,(0,u.zw)(a.value),1)])])])]),(0,i._)("div",jt,[St,(0,i._)("div",Ut,[(0,i._)("div",Ot,[(0,i._)("div",qt,(0,u.zw)(t.weatherInfo?.clouds?.all),1),Ct]),Wt])])])])]))}};const Lt=(0,n.Z)(Ht,[["__scopeId","data-v-9a3e61f2"]]);var Ft=Lt;const Tt={class:"section-bottom"},Mt={class:"block-bottom"},Zt={class:"block-bottom-inner"},Pt=(0,i._)("div",{class:"block-bottom-pic pic-coords"},null,-1),$t={class:"block-bottom-texts"},At={class:"block-bottom-text-block"},Et={class:"block-bottom-text-block-title"},Kt=(0,i._)("div",{class:"block-bottom-text-block-desc"}," Longitude measures distance east or west of the prime meridian. ",-1),Nt={class:"block-bottom-text-block"},Rt={class:"block-bottom-text-block-title"},Vt=(0,i._)("div",{class:"block-bottom-text-block-desc"}," Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator. ",-1);var Bt={__name:"Coords",props:{coord:{type:Object,required:!0}},setup(t){return(e,s)=>((0,i.wg)(),(0,i.iD)("section",Tt,[(0,i._)("div",Mt,[(0,i._)("div",Zt,[Pt,(0,i._)("div",$t,[(0,i._)("div",At,[(0,i._)("div",Et," Longitude: "+(0,u.zw)(t.coord.lon),1),Kt]),(0,i._)("div",Nt,[(0,i._)("div",Rt," Latitude: "+(0,u.zw)(t.coord.lat),1),Vt])])])])]))}};const Gt=Bt;var Jt=Gt;const Qt={class:"section-bottom"},Xt={class:"block-bottom"},Yt={class:"block-bottom-inner"},te=(0,i._)("div",{class:"block-bottom-pic pic-humidity"},null,-1),ee={class:"block-bottom-texts"},se={class:"block-bottom-text-block"},ae={class:"block-bottom-text-block-title"},ie=(0,i._)("div",{class:"block-bottom-text-block-desc"},[(0,i.Uk)(" Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye. "),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" The same amount of water vapor results in higher relative humidity in cool air than warm air. ")],-1);var le={__name:"Humidity",props:{humidity:{type:Number,required:!0}},setup(t){return(e,s)=>((0,i.wg)(),(0,i.iD)("section",Qt,[(0,i._)("div",Xt,[(0,i._)("div",Yt,[te,(0,i._)("div",ee,[(0,i._)("div",se,[(0,i._)("div",ae," Humidity: "+(0,u.zw)(t.humidity)+" % ",1),ie])])])])]))}};const ne=le;var ce=ne;const oe="649986619640faa0e94aae1b03777ee4",re="https://api.openweathermap.org/data/2.5/weather",de=t=>((0,i.dD)("data-v-964c1de6"),t=t(),(0,i.Cn)(),t),ue={class:"page"},ve={class:"main"},me={class:"container"},_e={class:"laptop"},he={class:"sections"},fe={class:"info"},pe={class:"city-inner"},we=["onKeyup"],be={key:1,class:"error"},ge=de((()=>(0,i._)("div",{class:"error-title"}," Something Went Wrong! ",-1))),ke={key:0,class:"error-message"},ye={key:0,class:"section section-right"},xe={key:0,class:"sections"};var Ie={__name:"Main",setup(t){const e=(0,v.iH)("London"),s=(0,v.iH)(null),l=(0,i.Fl)((()=>200!==s?.value?.cod));function n(){fetch(`${re}?q=${e.value}&appid=${oe}&units=metric`).then((t=>t.json())).then((t=>s.value=t))}return(0,i.bv)(n),(t,c)=>((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("main",ve,[(0,i._)("div",me,[(0,i._)("div",_e,[(0,i._)("div",he,[(0,i._)("section",{class:(0,u.C_)(["section","section-left",{"section-error":l.value}])},[(0,i._)("div",fe,[(0,i._)("div",pe,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":c[0]||(c[0]=t=>e.value=t),type:"text",class:"search",onKeyup:(0,a.D2)(n,["enter"])},null,40,we),[[a.nr,e.value]])]),l.value?((0,i.wg)(),(0,i.iD)("div",be,[ge,s.value?.message?((0,i.wg)(),(0,i.iD)("div",ke,(0,u.zw)((0,v.SU)(_)(s.value?.message)),1)):(0,i.kq)("",!0)])):((0,i.wg)(),(0,i.j4)((0,v.SU)(j),{key:0,weatherInfo:s.value},null,8,["weatherInfo"]))])],2),l.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("section",ye,[(0,i.Wm)((0,v.SU)(Ft),{weatherInfo:s.value},null,8,["weatherInfo"])]))]),l.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",xe,[(0,i.Wm)((0,v.SU)(Jt),{coord:s.value.coord},null,8,["coord"]),(0,i.Wm)((0,v.SU)(ce),{humidity:s.value.main.humidity},null,8,["humidity"])]))])])])]))}};const ze=(0,n.Z)(Ie,[["__scopeId","data-v-964c1de6"]]);var De=ze;const je=[{path:"/",name:"home",component:De}],Se=(0,d.p7)({history:(0,d.r5)(),routes:je});var Ue=Se;(0,a.ri)(r).use(Ue).mount("#app")}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var l=e[a]={exports:{}};return t[a](l,l.exports,s),l.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,l){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],l=t[d][2];for(var c=!0,o=0;o<a.length;o++)(!1&l||n>=l)&&Object.keys(s.O).every((function(t){return s.O[t](a[o])}))?a.splice(o--,1):(c=!1,l<n&&(n=l));if(c){t.splice(d--,1);var r=i();void 0!==r&&(e=r)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[a,i,l]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,l,n=a[0],c=a[1],o=a[2],r=0;if(n.some((function(e){return 0!==t[e]}))){for(i in c)s.o(c,i)&&(s.m[i]=c[i]);if(o)var d=o(s)}for(e&&e(a);r<n.length;r++)l=n[r],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(d)},a=self["webpackChunkweather"]=self["webpackChunkweather"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(296)}));a=s.O(a)})();
//# sourceMappingURL=app.05d64b3e.js.map