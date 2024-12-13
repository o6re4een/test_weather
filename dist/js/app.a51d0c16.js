(function(){"use strict";var t={6894:function(t,e,r){var n=r(5130),a=r(6768),o=r(4232);const i={key:0},c={key:0},s={key:1},u={class:"container"},h={class:"forecast-container"},l={class:"forecast"};function d(t,e,r,d,p,f){const m=(0,a.g2)("WeatherCard");return(0,a.uX)(),(0,a.CE)(a.FK,null,[e[5]||(e[5]=(0,a.Lk)("h1",null,"Прогноз погоды",-1)),e[6]||(e[6]=(0,a.Lk)("h3",null,null,-1)),p.weatherData?((0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("h3",null,"Температура "+(0,o.v_)(p.weatherData?.main.temp),1),(0,a.Lk)("h4",null,"Название города "+(0,o.v_)(p.weatherData?.name),1),(0,a.Lk)("h4",null,(0,o.v_)(p.weatherData?.weather[0].description),1)])):((0,a.uX)(),(0,a.CE)("div",i,[e[3]||(e[3]=(0,a.Lk)("h3",null,"Загрузка...",-1)),p.fetchError?((0,a.uX)(),(0,a.CE)("div",c,[(0,a.Lk)("h3",null,(0,o.v_)(p.fetchError),1)])):(0,a.Q3)("",!0)])),(0,a.Lk)("div",u,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>p.selectCity=t),onChange:e[1]||(e[1]=(...t)=>f.getWeatherData&&f.getWeatherData(...t))},e[4]||(e[4]=[(0,a.Lk)("option",null,"Нижний Тагил",-1),(0,a.Lk)("option",null,"Лондон",-1),(0,a.Lk)("option",null,"Москва",-1)]),544),[[n.u1,p.selectCity]]),(0,a.Lk)("div",null,[(0,a.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>f.getTwoWeekForeCast&&f.getTwoWeekForeCast(...t))},"Получить погоду")]),(0,a.Lk)("div",h,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(p.transaformedObjectArray,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{key:e},[(0,a.Lk)("h1",null,(0,o.v_)(e),1),(0,a.Lk)("div",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t,((t,e)=>((0,a.uX)(),(0,a.Wv)(m,{tempetature:t.tempetature,description:t.description,time:t.time,icon:t.icon,key:e},null,8,["tempetature","description","time","icon"])))),128))])])))),128))])])],64)}r(4114);const p={class:"weather-card"},f=["src"];function m(t,e,r,n,i,c){return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("img",{src:`https://openweathermap.org/img/wn/${r.icon}@2x.png`,alt:"weather",class:(0,o.C4)([{"weather-translate-animation":r.icon.includes("04")},"weather-img"])},null,10,f),(0,a.Lk)("h4",null,(0,o.v_)(r.description),1),(0,a.Lk)("p",null,(0,o.v_)(r.time),1),(0,a.Lk)("h3",null,(0,o.v_)(Number(r.tempetature).toFixed(0))+" C",1)])}var v={name:"WeatherCard",props:["tempetature","description","time","icon"]},w=r(1241);const C=(0,w.A)(v,[["render",m],["__scopeId","data-v-f182f886"]]);var k=C,g={name:"App",data(){return{weatherData:null,cityCoord:{"Нижний Тагил":[57.9194,59.965],"Лондон":[51.5085,-.1257],"Москва":[55.7558,37.6173]},weatherForecastData:null,fetchError:null,selectCity:"Нижний Тагил",transaformedObjectArray:{}}},mounted(){fetch("test_data.json").then((t=>t.json())).then((t=>{this.weatherForecastData=t})).catch((t=>this.fetchError=t))},watch:{weatherForecastData:{handler(t,e){this.transaformedObjectArray=this.transaformResponse(t)},deep:!0,immediate:!0}},methods:{getCityCoord(){return this.cityCoord[this.selectCity]},transaformResponse(t){const e={};return t?.list?.map((t=>{const r=t.dt_txt.split(" ")[0];e[r]?e[r].push({dt:t.dt,time:t.dt_txt.split(" ")[1],description:t.weather[0].description,tempetature:t.main.temp,icon:t.weather[0].icon}):e[r]=[{dt:t.dt,time:t.dt_txt.split(" ")[1],description:t.weather[0].description,tempetature:t.main.temp,icon:t.weather[0].icon}]})),e},getWeatherData(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.getCityCoord()[0]}&lon=${this.getCityCoord()[1]}&appid=f0859c7d2039eed0464bd527040b7b79&units=metric`).then((t=>t.json())).then((t=>{this.weatherData=t})).catch((t=>this.fetchError=t))},getTwoWeekForeCast(){fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.getCityCoord()[0]}&lon=${this.getCityCoord()[1]}&appid=f0859c7d2039eed0464bd527040b7b79&units=metric`).then((t=>t.json())).then((t=>{this.weatherForecastData=t,this.transaformResponse()})).catch((t=>this.fetchError=t))}},components:{WeatherCard:k}};const y=(0,w.A)(g,[["render",d]]);var b=y;(0,n.Ef)(b).mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,o){if(!n){var i=1/0;for(h=0;h<t.length;h++){n=t[h][0],a=t[h][1],o=t[h][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(h--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[n,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],c=n[1],s=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var h=s(r)}for(e&&e(n);u<i.length;u++)o=i[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(h)},n=self["webpackChunktest_weather"]=self["webpackChunktest_weather"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(6894)}));n=r.O(n)})();
//# sourceMappingURL=app.a51d0c16.js.map