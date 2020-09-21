(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{11:function(e,a,t){e.exports={container:"cards_container__OJNLu",card:"cards_card__hdGL3",infected:"cards_infected__3ItNI",recovered:"cards_recovered__1Dbbj",deaths:"cards_deaths__dgLOJ",active:"cards_active__1tc6r"}},14:function(e,a,t){e.exports={container:"App_container__346T7",appbar:"App_appbar__3ret_",image:"App_image__1XGvd",gif:"App_gif__1HBf0",heartImage:"App_heartImage__3g9v3",loader:"App_loader__G8sgr",footer:"App_footer__2WNC-"}},211:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(72),o=t.n(c),s=(t(92),t(4)),l=t.n(s),i=t(10),u=t(73),d=t(74),m=t(85),p=t(84),f=t(229),v=t(234),h=t(230),g=t(231),b=t(23),E=t.n(b),y=t(11),_=t.n(y),x=t(24),S=t.n(x),w=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.active,s=a.lastUpdate,l=e.stateName;if(!t)return"Loading...";var i=l?2:3;return r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:i,className:E()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:t.value,duration:"2.5",separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:i,className:E()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{variant:"h5"}," ",r.a.createElement(S.a,{start:0,end:n.value,duration:"2.5",separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:i,className:E()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:c.value,duration:"2.5",separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of deaths caused by COVID-19"))),l&&r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:i,className:E()(_.a.card,_.a.active)},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Active"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(S.a,{start:0,end:o.value,duration:"2.5",separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Number of active cases caused by COVID-19")))))},C=t(33),D=t(17),N=t.n(D),k="https://covid19.mathdro.id/api";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(i.a)(l.a.mark((function e(a){var t,n,r,c,o,s,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k,a&&(t="".concat(k,"/countries/").concat(a)),e.prev=2,e.next=5,N.a.get(t);case 5:if(n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,u=[],!a){e.next=16;break}return e.next=15,O(o.detail);case 15:u=e.sent;case 16:return e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i,stateData:u.data});case 19:e.prev=19,e.t0=e.catch(2);case 21:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(k,"/daily"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(k,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=t(44),U=t(79),G=t.n(U),J=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,s=a.active,u=e.country,d=e.stateName,m=Object(n.useState)([]),p=Object(C.a)(m,2),f=p[0],v=p[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=f.length?r.a.createElement(L.Line,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,g=function(){return d?{label:["Infected","Recovered","Deaths","Active"],background:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)","yellow"],data:[t.value,c.value,o.value,s.value]}:{label:["Infected","Recovered","Deaths"],background:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.value,c.value,o.value]}},b=t?r.a.createElement(L.Bar,{data:{labels:g().label,datasets:[{label:"People",backgroundColor:g().background,data:g().data}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u," ").concat(d?"-> ".concat(d):"")}}}):null;return r.a.createElement("div",{className:G.a.container},u?b:h)},V=t(233),P=t(232),R=t(80),W=t.n(R),M=function(e){var a=e.value,t=e.handleCountryChange,c=Object(n.useState)([]),o=Object(C.a)(c,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(V.a,{className:W.a.formControl},console.log(a),r.a.createElement(P.a,{value:a,onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),s.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},X=t(14),H=t.n(X),K=t(81),Q=t.n(K),T=t(82),$=t.n(T),q=t(45),z=t.n(q),F=t(83),Y=t.n(F),Z=function(e){var a=e.value,t=e.options,n=e.handleStateChange;return console.log("options",t),r.a.createElement(V.a,{className:Y.a.formControl},r.a.createElement(P.a,{value:a,onChange:function(e){return n(e.target.value)}},r.a.createElement("option",{value:""},"Select State"),t&&t.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},ee=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={displayData:{},data:{},country:"",stateName:"",loading:!1},e.handleCountryChange=function(){var a=Object(i.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({loading:!0}),a.next=3,I(t);case 3:n=a.sent,console.log("country with state data",n),e.setState({data:n,displayData:n,country:t,stateName:"",loading:!1});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleStateChange=function(a){e.setState({loading:!0});var t=e.state.data.stateData.find((function(e){return e.provinceState===a}));if(t){var n={confirmed:{value:t.confirmed},recovered:{value:t.recovered},deaths:{value:t.deaths},active:{value:t.active},lastUpdate:t.lastUpdate};e.setState({displayData:n,stateName:a,loading:!1})}else e.setState({displayData:e.state.data,stateName:"",loading:!1})},e.getStateOptions=function(){return e.state.data.stateData.map((function(e){return e.provinceState}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,I();case 3:a=e.sent,console.log(a),this.setState({data:a,displayData:a,loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.displayData,t=e.data,n=e.country,c=e.stateName,o=e.loading;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:H.a.appbar},r.a.createElement("img",{className:H.a.image,src:Q.a,alt:"imdage"})),r.a.createElement("img",{className:H.a.gif,src:z.a,alt:"loading..."})),r.a.createElement("div",{className:H.a.container},o?r.a.createElement("div",{className:H.a.loader},r.a.createElement("img",{src:z.a,alt:"loading..."})):r.a.createElement("div",{className:H.a.container},r.a.createElement(w,{data:a,stateName:c}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(M,{value:n,handleCountryChange:this.handleCountryChange}),n&&t&&t.stateData.length>1&&r.a.createElement("div",{style:{marginLeft:20}},r.a.createElement(Z,{value:c,options:this.getStateOptions(),handleStateChange:this.handleStateChange}))),r.a.createElement(J,{data:a,country:n,stateName:c})),r.a.createElement("div",{className:H.a.footer},"Last Updated ",new Date(a?a.lastUpdate:"").toDateString()," by ",r.a.createElement("img",{className:H.a.heartImage,src:$.a,alt:"heart"})," @ Ashish Kumar")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,a,t){e.exports=t.p+"static/media/Coronavirus.485a55b2.gif"},79:function(e,a,t){e.exports={container:"charts_container__21kEy"}},80:function(e,a,t){e.exports={fromControl:"countryPicker_fromControl__fkDEX"}},81:function(e,a,t){e.exports=t.p+"static/media/covid-19.b8480713.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/heart.fcd5c192.jpg"},83:function(e,a,t){e.exports={fromControl:"statePicker_fromControl__2Qfy8"}},87:function(e,a,t){e.exports=t(211)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.b015650c.chunk.js.map