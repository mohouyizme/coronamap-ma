(this["webpackJsonpcorona-map"]=this["webpackJsonpcorona-map"]||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),c=n(14),s=n.n(c),l=(n(31),n(15)),m=n(16),u=n(20),p=n(17),h=n(21),d=n(35),g=n(37),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.props.statistics,o.a.createElement(d.a,{center:[29,-6],zoom:6,maxZoom:10,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},o.a.createElement(g.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),this.props.markers))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(36),f=n(38),y=n(7),b=y.locations.map((function(e){return o.a.createElement(v.a,{center:e.position,color:"red",radius:e.count},o.a.createElement(f.a,null,e.name,": ",e.count))})),x=0,k=[],w=0;y.locations.forEach((function(e){x+=e.count,k.push({id:w,content:e.name+": "+e.count}),w++}));var O=o.a.createElement("div",{id:"cities"},o.a.createElement(s.a,{listItems:k,heightOfItems:10,style:{}})),j=o.a.createElement("div",{id:"statistics"},[o.a.createElement("div",{id:"totalcases"},[o.a.createElement("h4",{style:{"text-align":"center"}},"Total confirm\xe9"),o.a.createElement("h2",{style:{"text-align":"center"}},x),o.a.createElement("h4",{style:{"text-align":"center"}},"Total d\xe9c\xe8s"),o.a.createElement("h2",{style:{"text-align":"center"}},y.deaths),o.a.createElement("h4",{style:{"text-align":"center"}},"Total gu\xe9ri"),o.a.createElement("h2",{style:{"text-align":"center"}},y.recovered),o.a.createElement("small",{style:{"text-align":"center"}},"Derni\xe8re mise \xe0 jour:\n"+y.lastUpdate)]),o.a.createElement("br",{},void 0),O]);r.a.render(o.a.createElement(E,{markers:b,statistics:j}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"lastUpdate":"2020-03-17 22:03","deaths":2,"recovered":1,"locations":[{"name":"Rabat/Sale","position":[34.0231,-6.8349],"count":12},{"name":"Casablanca","position":[33.595,-7.6186],"count":9},{"name":"Marrakech","position":[31.6258257,-7.9891608],"count":5},{"name":"Fes","position":[34.0345,-5.0096],"count":5},{"name":"Temara","position":[33.917166,-6.923804],"count":2},{"name":"Taroudant","position":[30.4707,-8.8782],"count":1},{"name":"Tetouan","position":[35.5697,-5.3738],"count":1},{"name":"Khouribga","position":[32.8851,-6.909],"count":1},{"name":"Fqih Ben Salah","position":[32.5027,-6.6867],"count":1},{"name":"Meknes","position":[33.8968225,-5.531844],"count":1},{"name":"Agadir","position":[30.4208,-9.583],"count":1},{"name":"Tangier","position":[35.777103,-5.803792],"count":2},{"name":"Oujda","position":[34.677874,-1.929306],"count":1},{"name":"Settat","position":[33.0024,-7.6199],"count":1},{"name":"Guelmim","position":[28.9863852,-10.0574351],"count":1}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.cee1a9f6.chunk.js.map