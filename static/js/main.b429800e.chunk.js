(this.webpackJsonpabcgame=this.webpackJsonpabcgame||[]).push([[0],{100:function(e,a,r){},101:function(e,a,r){},124:function(e,a,r){},125:function(e,a,r){},126:function(e,a,r){},127:function(e,a,r){},128:function(e,a,r){},129:function(e,a,r){},130:function(e,a,r){},131:function(e,a,r){"use strict";r.r(a);var t=r(2),i=r(0),o=r.n(i),s=r(9),g=r.n(s),n=r(22),c=(r(76),r(15)),l=r(11),m=r(55),d=r.n(m),v=r(169),w=r(161),u=r(165),b=r(167),j=r(166),h=r(168);r(80);var p=function(e){return Object(t.jsx)(w.a,{className:"game-tile-root",variant:"outlined",onClick:function(){return e.onGameTileClick(e.gameTile.value)},children:Object(t.jsxs)(u.a,{children:[Object(t.jsx)(j.a,{style:{backgroundSize:"contain"},className:"game-tile-media",image:e.gameTile.imageurl}),Object(t.jsx)(b.a,{className:"game-tile-card-content",children:Object(t.jsx)(h.a,{gutterBottom:!0,variant:"subtitle1",children:e.gameTile.title})})]})})};r(84);var f=function(){window.dataLayer.push({event:"pageview",page:{url:"/app",title:"choose category"}});var e=Object(l.f)(),a=function(a){console.log("gameTileClick(home): "+a),window.dataLayer.push({event:"event",eventProps:{category:"game",action:"category",label:a}}),e.push({pathname:"/app/level",search:"?category="+a,state:{category:a}})};return Object(i.useEffect)((function(){localStorage.removeItem("wordsSolvedArray"),localStorage.removeItem("currentWordTextFieldsSolved")})),Object(t.jsx)("div",{className:"home",children:Object(t.jsxs)("div",{className:"game-body",children:[Object(t.jsxs)(v.a,{style:{marginTop:0},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"fairy-tale",title:"\u05d0\u05b7\u05d2\u05bc\u05b8\u05d3\u05d5\u05b9\u05ea",imageurl:"/fairy-tale/frog.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"love",title:"\u05d0\u05b7\u05d4\u05b2\u05d1\u05b8\u05d4",imageurl:"/love/heart.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"food",title:"\u05d0\u05b9\u05db\u05b6\u05dc",imageurl:"/food/cherry.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"home",title:"\u05d1\u05bc\u05b7\u05d1\u05bc\u05b7\u05d9\u05b4\u05ea",imageurl:"/home/image.svg"},onGameTileClick:a})})]}),Object(t.jsxs)(v.a,{style:{marginTop:12},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"animals",title:"\u05d1\u05bc\u05b7\u05e2\u05b2\u05dc\u05b5\u05d9 \u05d7\u05b7\u05d9\u05bc\u05b4\u05d9\u05dd",imageurl:"/animals/giraffe.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"fruits-and-vegetables",title:"\u05d9\u05b0\u05e8\u05b8\u05e7\u05d5\u05b9\u05ea \u05d5\u05bc\u05e4\u05b5\u05e8\u05d5\u05b9\u05ea",imageurl:"/fruits-and-vegetables/027-strawberry.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"tools",title:"\u05db\u05bc\u05b5\u05dc\u05b4\u05d9\u05dd",imageurl:"/tools/hammer.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"science",title:"\u05de\u05b7\u05d3\u05bc\u05b8\u05e2 \u05d5\u05b0\u05d7\u05b8\u05dc\u05b8\u05dc",imageurl:"/science/planet-earth.svg"},onGameTileClick:a})})]}),Object(t.jsxs)(v.a,{style:{marginTop:12},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"kitchen",title:"\u05de\u05b4\u05d8\u05b0\u05d1\u05bc\u05b8\u05d7",imageurl:"/kitchen/oven-mitts.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"devices",title:"\u05de\u05b7\u05db\u05b0\u05e9\u05c1\u05b4\u05d9\u05e8\u05b4\u05d9\u05dd",imageurl:"/devices/desk-lamp.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"medicine",title:"\u05e8\u05b0\u05e4\u05d5\u05bc\u05d0\u05b8\u05d4",imageurl:"/medicine/hospital.svg"},onGameTileClick:a})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"transport",title:"\u05ea\u05bc\u05b7\u05d7\u05b0\u05d1\u05bc\u05d5\u05bc\u05e8\u05b8\u05d4",imageurl:"/transport/aeroplane.svg"},onGameTileClick:a})})]})]})})},x=r(39),O=r.n(x);r(99);var y=function(e){window.dataLayer.push({event:"pageview",page:{url:"/app/level",title:"choose level"}});var a=Object(l.f)(),r=O.a.parse(e.location.search).category,o=function(e){window.dataLayer.push({event:"event",eventProps:{category:"game",action:"level",label:e}}),a.push({pathname:"/app/game",search:"?category="+r+"&level="+e,state:{category:r,level:e}})};return Object(i.useEffect)((function(){localStorage.removeItem("wordsSolvedArray"),localStorage.removeItem("currentWordTextFieldsSolved")})),Object(t.jsx)("div",{className:"home",children:Object(t.jsx)("div",{className:"game-body ",children:Object(t.jsxs)(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"first-letter",title:"\u05d0\u05d5\u05b9\u05ea \u05e4\u05bc\u05d5\u05b9\u05ea\u05b7\u05d7\u05b7\u05ea",imageurl:"/first-letter.svg"},onGameTileClick:o})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"last-letter",title:"\u05d0\u05d5\u05b9\u05ea \u05e1\u05d5\u05b9\u05d2\u05b6\u05e8\u05b6\u05ea",imageurl:"/last-letter.svg"},onGameTileClick:o})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"middle-letter",title:"\u05d0\u05d5\u05b9\u05ea \u05d0\u05b6\u05de\u05b0\u05e6\u05b8\u05e2\u05b4\u05d9\u05ea",imageurl:"/middle-letter.svg"},onGameTileClick:o})}),Object(t.jsx)(v.a,{item:!0,xs:6,sm:3,children:Object(t.jsx)(p,{gameTile:{value:"entire-word",title:"\u05db\u05bc\u05b8\u05dc \u05d4\u05b7\u05de\u05bc\u05b4\u05dc\u05bc\u05b8\u05d4",imageurl:"/entire-word.svg"},onGameTileClick:o})})]})})})},k=r(45),S=r(57),T=r.n(S),N=r(56),C=r.n(N),I=r(170),G=r(171),L=[{category:"home",words:[{image:"bed.svg",word:"\u05de\u05d9\u05d8\u05d4"},{image:"couch.svg",word:"\u05e1\u05e4\u05d4"},{image:"electric.svg",word:"\u05de\u05e0\u05d5\u05e8\u05d4"},{image:"buildings.svg",word:"\u05d5\u05d9\u05dc\u05d5\u05df"},{image:"adornment.svg",word:"\u05db\u05e8\u05d9\u05ea"},{image:"archive.svg",word:"\u05d0\u05e8\u05d5\u05df"},{image:"bed-2.svg",word:"\u05de\u05d9\u05d8\u05d4"},{image:"blossom.svg",word:"\u05d0\u05d2\u05e8\u05d8\u05dc"},{image:"image.svg",word:"\u05ea\u05de\u05d5\u05e0\u05d4"},{image:"framed.svg",word:"\u05de\u05e8\u05d0\u05d4"},{image:"chair.svg",word:"\u05db\u05e1\u05d0"},{image:"circular-clock.svg",word:"\u05e9\u05e2\u05d5\u05df"}]},{category:"tools",words:[{image:"scissors.svg",word:"\u05de\u05e1\u05e4\u05e8\u05d9\u05dd"},{image:"measuring-tape.svg",word:"\u05de\u05d8\u05e8"},{image:"pliers.svg",word:"\u05e6\u05d1\u05ea"},{image:"saw.svg",word:"\u05de\u05e1\u05d5\u05e8"},{image:"hammer.svg",word:"\u05e4\u05d8\u05d9\u05e9"},{image:"shovel.svg",word:"\u05d0\u05ea"},{image:"pencil.svg",word:"\u05e2\u05e4\u05e8\u05d5\u05df"},{image:"axe.svg",word:"\u05d2\u05e8\u05d6\u05df"},{image:"paintbrush.svg",word:"\u05de\u05d1\u05e8\u05e9\u05ea"},{image:"drill.svg",word:"\u05de\u05e7\u05d3\u05d7\u05d4"},{image:"screwdriver.svg",word:"\u05de\u05d1\u05e8\u05d2"},{image:"nail.svg",word:"\u05de\u05e1\u05de\u05e8"}]},{category:"transport",words:[{image:"racer-man.svg",word:"\u05e9\u05d5\u05d8\u05e8"},{image:"concrete-mixer.svg",word:"\u05de\u05e2\u05e8\u05d1\u05dc  \u05d1\u05d8\u05d5\u05df"},{image:"motorbike.svg",word:"\u05d0\u05d5\u05e4\u05e0\u05d5\u05e2"},{image:"helicopter.svg",word:"\u05de\u05e1\u05d5\u05e7"},{image:"sailboat.svg",word:"\u05e1\u05d9\u05e8\u05d4"},{image:"aeroplane.svg",word:"\u05de\u05d8\u05d5\u05e1"},{image:"taxi.svg",word:"\u05de\u05d5\u05e0\u05d9\u05ea"},{image:"garbage-truck.svg",word:"\u05de\u05e9\u05d0\u05d9\u05ea  \u05d6\u05d1\u05dc"},{image:"loader.svg",word:"\u05d8\u05e8\u05e7\u05d8\u05d5\u05e8"},{image:"racer-woman.svg",word:"\u05e9\u05d5\u05d8\u05e8\u05ea"},{image:"truck.svg",word:"\u05de\u05e9\u05d0\u05d9\u05ea"},{image:"bus.svg",word:"\u05d0\u05d5\u05d8\u05d5\u05d1\u05d5\u05e1"},{image:"hot-air-balloon.svg",word:"\u05db\u05d3\u05d5\u05e8   \u05e4\u05d5\u05e8\u05d7"},{image:"traffic-light.svg",word:"\u05e8\u05de\u05d6\u05d5\u05e8"},{image:"bicycle.svg",word:"\u05d0\u05d5\u05e4\u05e0\u05d9\u05d9\u05dd"},{image:"helmet.svg",word:"\u05e7\u05e1\u05d3\u05d4"},{image:"car.svg",word:"\u05de\u05db\u05d5\u05e0\u05d9\u05ea"},{image:"medal.svg",word:"\u05de\u05d3\u05dc\u05d9\u05d4"},{image:"zeppelin.svg",word:"\u05e6\u05e4\u05dc\u05d9\u05df"},{image:"cup.svg",word:"\u05d2\u05d1\u05d9\u05e2"},{image:"van.svg",word:"\u05d0\u05d5\u05d8\u05d5   \u05d2\u05dc\u05d9\u05d3\u05d4"}]},{category:"love",words:[{image:"fairy.svg",word:"\u05e4\u05d9\u05d4"},{image:"key.svg",word:"\u05de\u05e4\u05ea\u05d7"},{image:"suit.svg",word:"\u05d7\u05dc\u05d9\u05e4\u05d4"},{image:"unicorn.svg",word:"\u05d7\u05d3\u05e7\u05e8\u05df"},{image:"rainbow.svg",word:"\u05e7\u05e9\u05ea    \u05d1\u05e2\u05e0\u05df"},{image:"engagement-ring.svg",word:"\u05d8\u05d1\u05e2\u05ea"},{image:"wedding-cake.svg",word:"\u05e2\u05d5\u05d2\u05d4"},{image:"sunglasses.svg",word:"\u05de\u05e9\u05e7\u05e4\u05d9\u05dd"},{image:"teddy-bear.svg",word:"\u05d3\u05d5\u05d1\u05d9"},{image:"romantic-music.svg",word:"\u05de\u05d5\u05e1\u05d9\u05e7\u05d4"},{image:"balloon.svg",word:"\u05d1\u05dc\u05d5\u05df"},{image:"heart.svg",word:"\u05dc\u05d1"}]},{category:"science",words:[{image:"jupiter.svg",word:"\u05e6\u05d3\u05e7"},{image:"mars.svg",word:"\u05de\u05d0\u05d3\u05d9\u05dd"},{image:"magnet.svg",word:"\u05de\u05d2\u05e0\u05d8"},{image:"venus.svg",word:"\u05e0\u05d2\u05d4"},{image:"uranus.svg",word:"\u05d0\u05d5\u05e8\u05d5\u05df"},{image:"shooting-star.svg",word:"\u05db\u05d5\u05db\u05d1   \u05e0\u05d5\u05e4\u05dc"},{image:"saturn.svg",word:"\u05e9\u05d1\u05ea\u05d0\u05d9"},{image:"mercury.svg",word:"\u05d7\u05de\u05d4"},{image:"pluto.svg",word:"\u05e4\u05dc\u05d5\u05d8\u05d5"},{image:"neptune.svg",word:"\u05e8\u05d4\u05d1"},{image:"test-tube.svg",word:"\u05de\u05d1\u05d7\u05e0\u05d4"},{image:"robot.svg",word:"\u05e8\u05d5\u05d1\u05d5\u05d8"},{image:"alien.svg",word:"\u05d7\u05d9\u05d6\u05e8"},{image:"rocket.svg",word:"\u05d7\u05dc\u05dc\u05d9\u05ea"},{image:"planet-earth.svg",word:"\u05db\u05d3\u05d5\u05e8   \u05d4\u05d0\u05e8\u05e5"},{image:"comet.svg",word:"\u05e9\u05d1\u05d9\u05d8"},{image:"moon.svg",word:"\u05d9\u05e8\u05d7"}]},{category:"fairy-tale",words:[{image:"knight.svg",word:"\u05d0\u05d1\u05d9\u05e8"},{image:"armor.svg",word:"\u05e9\u05e8\u05d9\u05d5\u05df"},{image:"magic-lamp.svg",word:"\u05de\u05e0\u05d5\u05e8\u05ea  \u05e7\u05e1\u05dd"},{image:"mermaid.svg",word:"\u05d1\u05ea \u05d9\u05dd"},{image:"dragon.svg",word:"\u05d3\u05e8\u05e7\u05d5\u05df"},{image:"wizard.svg",word:"\u05e7\u05d5\u05e1\u05dd"},{image:"shield.svg",word:"\u05de\u05d2\u05df"},{image:"castle.svg",word:"\u05d8\u05d9\u05e8\u05d4"},{image:"flag.svg",word:"\u05d3\u05d2\u05dc"},{image:"unicorn.svg",word:"\u05d7\u05d3\u05e7\u05e8\u05df"},{image:"queen.svg",word:"\u05de\u05dc\u05db\u05d4"},{image:"king.svg",word:"\u05de\u05dc\u05da"},{image:"rainbow.svg",word:"\u05e7\u05e9\u05ea     \u05d1\u05e2\u05e0\u05df"},{image:"crown.svg",word:"\u05db\u05ea\u05e8"},{image:"frog.svg",word:"\u05e6\u05e4\u05e8\u05d3\u05e2"},{image:"palace.svg",word:"\u05d0\u05e8\u05de\u05d5\u05df"},{image:"princess.svg",word:"\u05e0\u05e1\u05d9\u05db\u05d4"},{image:"sword.svg",word:"\u05d7\u05e8\u05d1"}]},{category:"animals",words:[{image:"poo.svg",word:"\u05e7\u05e7\u05d9"},{image:"raccoon.svg",word:"\u05e8\u05e7\u05d5\u05df"},{image:"butterfly.svg",word:"\u05e4\u05e8\u05e4\u05e8"},{image:"gorilla.svg",word:"\u05d2\u05d5\u05e8\u05d9\u05dc\u05d4"},{image:"toucan.svg",word:"\u05d8\u05d5\u05e7\u05df"},{image:"cow.svg",word:"\u05e4\u05e8\u05d4"},{image:"lobster.svg",word:"\u05dc\u05d5\u05d1\u05e1\u05d8\u05e8"},{image:"pet-shop.svg",word:"\u05d7\u05e0\u05d5\u05ea   \u05d7\u05d9\u05d5\u05ea"},{image:"sheep.svg",word:"\u05db\u05d1\u05e9\u05d4"},{image:"pet-shampoo.svg",word:"\u05e9\u05de\u05e4\u05d5"},{image:"ball-of-wool.svg",word:"\u05db\u05d3\u05d5\u05e8   \u05e6\u05de\u05e8"},{image:"chicken.svg",word:"\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05ea"},{image:"swan.svg",word:"\u05d1\u05e8\u05d1\u05d5\u05e8"},{image:"pet-food-1.svg",word:"\u05d0\u05d5\u05db\u05dc"},{image:"lion.svg",word:"\u05d0\u05e8\u05d9\u05d4"},{image:"diploma.svg",word:"\u05ea\u05e2\u05d5\u05d3\u05d4"},{image:"spider.svg",word:"\u05e2\u05db\u05d1\u05d9\u05e9"},{image:"turtle.svg",word:"\u05e6\u05d1"},{image:"rabbit.svg",word:"\u05d0\u05e8\u05e0\u05d1\u05ea"},{image:"horse.svg",word:"\u05e1\u05d5\u05e1"},{image:"cage.svg",word:"\u05db\u05dc\u05d5\u05d1"},{image:"parrot.svg",word:"\u05ea\u05d5\u05db\u05d9"},{image:"dog.svg",word:"\u05db\u05dc\u05d1"},{image:"collar.svg",word:"\u05e7\u05d5\u05dc\u05e8"},{image:"goat.svg",word:"\u05e2\u05d6"},{image:"snail.svg",word:"\u05d7\u05d9\u05dc\u05d6\u05d5\u05df"},{image:"bear.svg",word:"\u05d3\u05d1"},{image:"injection.svg",word:"\u05d6\u05e8\u05d9\u05e7\u05d4"},{image:"award.svg",word:"\u05e4\u05e8\u05e1"},{image:"pig.svg",word:"\u05d7\u05d6\u05d9\u05e8"},{image:"cat.svg",word:"\u05d7\u05ea\u05d5\u05dc"},{image:"fox.svg",word:"\u05e9\u05d5\u05e2\u05dc"},{image:"giraffe.svg",word:"\u05d2\u05d9\u05e8\u05e4\u05d4"},{image:"dove.svg",word:"\u05d9\u05d5\u05e0\u05d4"},{image:"leash.svg",word:"\u05e8\u05e6\u05d5\u05e2\u05d4"},{image:"pet-food.svg",word:"\u05d0\u05d5\u05db\u05dc"},{image:"canary.svg",word:"\u05db\u05e0\u05e8\u05d9\u05ea"},{image:"squirrel.svg",word:"\u05e1\u05e0\u05d0\u05d9"},{image:"kennel.svg",word:"\u05de\u05dc\u05d5\u05e0\u05d4"},{image:"grass.svg",word:"\u05d3\u05e9\u05d0"},{image:"comb.svg",word:"\u05de\u05e1\u05e8\u05e7"},{image:"hamster.svg",word:"\u05d0\u05d5\u05d2\u05e8"},{image:"wolf.svg",word:"\u05d6\u05d0\u05d1"}]},{category:"medicine",words:[{image:"doctor-woman.svg",word:"\u05e8\u05d5\u05e4\u05d0\u05d4"},{image:"kidneys.svg",word:"\u05db\u05dc\u05d9\u05d5\u05ea"},{image:"ambulance-2.svg",word:"\u05de\u05e1\u05d5\u05e7"},{image:"doctor.svg",word:"\u05e8\u05d5\u05e4\u05d0"},{image:"liver.svg",word:"\u05db\u05d1\u05d3"},{image:"nose.svg",word:"\u05d0\u05e3"},{image:"brain.svg",word:"\u05de\u05d5\u05d7"},{image:"ambulance.svg",word:"\u05d0\u05de\u05d1\u05d5\u05dc\u05e0\u05e1"},{image:"hospital.svg",word:"\u05d1\u05d9\u05ea    \u05d7\u05d5\u05dc\u05d9\u05dd"},{image:"stomach.svg",word:"\u05e7\u05d9\u05d1\u05d4"},{image:"injection.svg",word:"\u05d6\u05e8\u05d9\u05e7\u05d4"},{image:"crutches.svg",word:"\u05e7\u05d1\u05d9\u05d9\u05dd"},{image:"lungs.svg",word:"\u05e8\u05d0\u05d5\u05ea"},{image:"eye.svg",word:"\u05e2\u05d9\u05df"},{image:"pill.svg",word:"\u05db\u05d3\u05d5\u05e8"},{image:"cough-syrup.svg",word:"\u05ea\u05e8\u05d5\u05e4\u05d4"},{image:"ear.svg",word:"\u05d0\u05d5\u05d6\u05df"},{image:"heat.svg",word:"\u05d7\u05d5\u05dd"},{image:"heart.svg",word:"\u05dc\u05d1"}]},{category:"food",words:[{image:"eggs.svg",word:"\u05d1\u05d9\u05e6\u05d9\u05dd"},{image:"tomato.svg",word:"\u05e2\u05d2\u05d1\u05e0\u05d9\u05d4"},{image:"raspberries.svg",word:"\u05e4\u05d8\u05dc"},{image:"onion.svg",word:"\u05d1\u05e6\u05dc"},{image:"mango.svg",word:"\u05de\u05e0\u05d2\u05d5"},{image:"bell-pepper.svg",word:"\u05d2\u05de\u05d1\u05d4"},{image:"steak.svg",word:"\u05e1\u05d8\u05d9\u05d9\u05e7"},{image:"pineapple.svg",word:"\u05d0\u05e0\u05e0\u05e1"},{image:"carrot.svg",word:"\u05d2\u05d6\u05e8"},{image:"beet.svg",word:"\u05e1\u05dc\u05e7"},{image:"mushrooms.svg",word:"\u05e4\u05d8\u05e8\u05d9\u05d5\u05ea"},{image:"potato.svg",word:"\u05ea\u05e4\u05d5\u05d7   \u05d0\u05d3\u05de\u05d4"},{image:"corn.svg",word:"\u05ea\u05d9\u05e8\u05e1"},{image:"bread.svg",word:"\u05dc\u05d7\u05dd"},{image:"peach.svg",word:"\u05d0\u05e4\u05e8\u05e1\u05e7"},{image:"olives.svg",word:"\u05d6\u05d9\u05ea\u05d9\u05dd"},{image:"bread-1.svg",word:"\u05dc\u05d7\u05dd"},{image:"broccoli.svg",word:"\u05d1\u05e8\u05d5\u05e7\u05d5\u05dc\u05d9"},{image:"fish.svg",word:"\u05d3\u05d2"},{image:"cucumbers.svg",word:"\u05de\u05dc\u05e4\u05e4\u05d5\u05df"},{image:"kiwi.svg",word:"\u05e7\u05d9\u05d5\u05d9"},{image:"brussels-sprouts.svg",word:"\u05db\u05e8\u05d5\u05d1"},{image:"toast.svg",word:"\u05d8\u05d5\u05e1\u05d8"},{image:"sausage-1.svg",word:"\u05e0\u05e7\u05e0\u05d9\u05e7\u05d9\u05d4"},{image:"radish.svg",word:"\u05e6\u05e0\u05d5\u05df"},{image:"pumpkin.svg",word:"\u05d3\u05dc\u05e2\u05ea"},{image:"sausage-2.svg",word:"\u05e0\u05e7\u05e0\u05d9\u05e7"},{image:"cabbage-1.svg",word:"\u05db\u05e8\u05d5\u05d1"},{image:"hot-pepper.svg",word:"\u05e4\u05dc\u05e4\u05dc   \u05d7\u05e8\u05d9\u05e3"},{image:"cabbage.svg",word:"\u05db\u05e8\u05d5\u05d1"},{image:"strawberry.svg",word:"\u05ea\u05d5\u05ea"},{image:"eggplant.svg",word:"\u05d7\u05e6\u05d9\u05dc"},{image:"banana.svg",word:"\u05d1\u05e0\u05e0\u05d4"},{image:"lemon.svg",word:"\u05dc\u05d9\u05de\u05d5\u05df"},{image:"peas.svg",word:"\u05d0\u05e4\u05d5\u05e0\u05d4"},{image:"pear.svg",word:"\u05d0\u05d2\u05e1"},{image:"avocado.svg",word:"\u05d0\u05d1\u05d5\u05e7\u05d3\u05d5"},{image:"garlic.svg",word:"\u05e9\u05d5\u05dd"},{image:"cheese.svg",word:"\u05d2\u05d1\u05d9\u05e0\u05d4"},{image:"ribs.svg",word:"\u05d1\u05e9\u05e8"},{image:"pomegranate.svg",word:"\u05e8\u05d9\u05de\u05d5\u05df"},{image:"apple.svg",word:"\u05ea\u05e4\u05d5\u05d7"},{image:"grapes.svg",word:"\u05e2\u05e0\u05d1\u05d9\u05dd"},{image:"orange.svg",word:"\u05ea\u05e4\u05d5\u05d6"},{image:"watermelon.svg",word:"\u05d0\u05d1\u05d8\u05d9\u05d7"},{image:"cherry.svg",word:"\u05d3\u05d5\u05d1\u05d3\u05d1\u05df"}]},{category:"fruits-and-vegetables",words:[{image:"008-pepper.svg",word:"\u05d2\u05de\u05d1\u05d4"},{image:"010-beet.svg",word:"\u05e1\u05dc\u05e7"},{image:"043-banana.svg",word:"\u05d1\u05e0\u05e0\u05d4"},{image:"023-salad.svg",word:"\u05e1\u05dc\u05d8"},{image:"018-onion.svg",word:"\u05d1\u05e6\u05dc"},{image:"029-lemon.svg",word:"\u05dc\u05d9\u05de\u05d5\u05df"},{image:"039-mango.svg",word:"\u05de\u05e0\u05d2\u05d5"},{image:"015-dill.svg",word:"\u05e9\u05de\u05d9\u05e8"},{image:"034-beans.svg",word:"\u05e9\u05e2\u05d5\u05e2\u05d9\u05ea"},{image:"004-spinach.svg",word:"\u05ea\u05e8\u05d3"},{image:"019-garlic.svg",word:"\u05e9\u05d5\u05dd"},{image:"044-cherry.svg",word:"\u05d3\u05d5\u05d1\u05d3\u05d1\u05df"},{image:"030-kiwi.svg",word:"\u05e7\u05d9\u05d5\u05d9"},{image:"045-cabbage.svg",word:"\u05db\u05e8\u05d5\u05d1"},{image:"006-potato.svg",word:"\u05ea\u05e4\u05d5\u05d7   \u05d0\u05d3\u05de\u05d4"},{image:"046-pomegranate.svg",word:"\u05e8\u05d9\u05de\u05d5\u05df"},{image:"020-zucchini.svg",word:"\u05e7\u05d9\u05e9\u05d5\u05d0"},{image:"012-cucumber.svg",word:"\u05de\u05dc\u05e4\u05e4\u05d5\u05df"},{image:"017-hot-pepper.svg",word:"\u05e4\u05dc\u05e4\u05dc   \u05d7\u05e8\u05d9\u05e3"},{image:"041-coconut.svg",word:"\u05e7\u05d5\u05e7\u05d5\u05e1"},{image:"011-radish.svg",word:"\u05e6\u05e0\u05d5\u05df"},{image:"049-brussels-sprouts.svg",word:"\u05e0\u05d1\u05d8\u05d9\u05dd"},{image:"002-cauliflower.svg",word:"\u05db\u05e8\u05d5\u05d1\u05d9\u05ea"},{image:"005-mushroom.svg",word:"\u05e4\u05d8\u05e8\u05d9\u05d5\u05ea"},{image:"001-tomato.svg",word:"\u05e2\u05d2\u05d1\u05e0\u05d9\u05d4"},{image:"007-pumpkin.svg",word:"\u05d3\u05dc\u05e2\u05ea"},{image:"022-celery.svg",word:"\u05e1\u05dc\u05e8\u05d9"},{image:"047-cabbage.svg",word:"\u05db\u05e8\u05d5\u05d1"},{image:"033-apple.svg",word:"\u05ea\u05e4\u05d5\u05d7"},{image:"038-melon.svg",word:"\u05de\u05dc\u05d5\u05df"},{image:"024-onion.svg",word:"\u05d1\u05e6\u05dc"},{image:"021-eggplant.svg",word:"\u05d7\u05e6\u05d9\u05dc"},{image:"048-peas.svg",word:"\u05d0\u05e4\u05d5\u05e0\u05d4"},{image:"025-raspberries.svg",word:"\u05e4\u05d8\u05dc"},{image:"003-broccoli.svg",word:"\u05d1\u05e8\u05d5\u05e7\u05d5\u05dc\u05d9"},{image:"013-carrot.svg",word:"\u05d2\u05d6\u05e8"},{image:"035-pear.svg",word:"\u05d0\u05d2\u05e1"},{image:"028-pineapple.svg",word:"\u05d0\u05e0\u05e0\u05e1"},{image:"032-avocado.svg",word:"\u05d0\u05d1\u05d5\u05e7\u05d3\u05d5"},{image:"009-radish.svg",word:"\u05e6\u05e0\u05d5\u05df"},{image:"050-corn.svg",word:"\u05ea\u05d9\u05e8\u05e1"},{image:"016-asparagus.svg",word:"\u05d0\u05e1\u05e4\u05e8\u05d2\u05d5\u05e1"},{image:"037-watermelon.svg",word:"\u05d0\u05d1\u05d8\u05d9\u05d7"},{image:"027-strawberry.svg",word:"\u05ea\u05d5\u05ea"},{image:"042-grapes.svg",word:"\u05e2\u05e0\u05d1\u05d9\u05dd"},{image:"031-orange.svg",word:"\u05ea\u05e4\u05d5\u05d6"},{image:"036-peach.svg",word:"\u05d0\u05e4\u05e8\u05e1\u05e7"}]},{category:"kitchen",words:[{image:"sunflower-oil.svg",word:"\u05e9\u05de\u05df"},{image:"toaster.svg",word:"\u05de\u05e6\u05e0\u05dd"},{image:"oven-mitts.svg",word:"\u05db\u05e4\u05e4\u05d4"},{image:"frying-pan.svg",word:"\u05de\u05d7\u05d1\u05ea"},{image:"fork.svg",word:"\u05de\u05d6\u05dc\u05d2"},{image:"oven.svg",word:"\u05ea\u05e0\u05d5\u05e8"},{image:"electric-kettle.svg",word:"\u05e7\u05d5\u05de\u05e7\u05d5\u05dd"},{image:"kitchen.svg",word:"\u05de\u05d8\u05d1\u05d7"},{image:"dishwasher.svg",word:"\u05de\u05d3\u05d9\u05d7"},{image:"fridge.svg",word:"\u05de\u05e7\u05e8\u05e8"},{image:"pot.svg",word:"\u05e1\u05d9\u05e8"},{image:"microwave-oven.svg",word:"\u05de\u05d9\u05e7\u05e8\u05d5"},{image:"mixer.svg",word:"\u05de\u05d9\u05e7\u05e1\u05e8"}]},{category:"devices",words:[{image:"smartphone.svg",word:"\u05d8\u05dc\u05e4\u05d5\u05df"},{image:"television.svg",word:"\u05d8\u05dc\u05d5\u05d9\u05d6\u05d9\u05d4"},{image:"compact-camera.svg",word:"\u05de\u05e6\u05dc\u05de\u05d4"},{image:"vacuum-cleaner.svg",word:"\u05e9\u05d5\u05d0\u05d1   \u05d0\u05d1\u05e7"},{image:"headphones.svg",word:"\u05d0\u05d5\u05d6\u05e0\u05d9\u05d5\u05ea"},{image:"fan.svg",word:"\u05de\u05d0\u05d5\u05e8\u05e8"},{image:"speaker.svg",word:"\u05e8\u05de\u05e7\u05d5\u05dc"},{image:"smartwatch.svg",word:"\u05e9\u05e2\u05d5\u05df"},{image:"iron.svg",word:"\u05de\u05d2\u05d4\u05e5"},{image:"refrigerator.svg",word:"\u05de\u05e7\u05e8\u05e8"},{image:"washing-machine.svg",word:"\u05de\u05db\u05d5\u05e0\u05ea  \u05db\u05d1\u05d9\u05e1\u05d4"},{image:"tablet.svg",word:"\u05d8\u05d0\u05d1\u05dc\u05d8"},{image:"desk-lamp.svg",word:"\u05de\u05e0\u05d5\u05e8\u05d4"}]}],A=r(172);r(100);var F=function(e){var a=Object(i.useState)(""),r=Object(c.a)(a,2),o=r[0],s=r[1],g=""===e.value?"letter emptyletter":"letter";return Object(t.jsx)(A.a,{id:"txt"+e.idx,label:"",defaultValue:e.disabled?e.value:"",size:"small",disabled:e.disabled,autoFocus:e.autoFocus,variant:"outlined",className:g,inputProps:{maxLength:1},style:{paddingBottom:4,marginLeft:2,marginRight:2},inputRef:e.referer,error:0!==o.length,onChange:function(a){a.preventDefault(),a.target.value.match(e.value)?(s(""),a.target.disabled=!0,e.handleSceneSolved(e.idx,!0)):(s("\u05d8\u05e2\u05d5\u05ea"),e.handleSceneSolved(e.idx,!1))}.bind(this)})};r(101);var M=function(e){var a=this;window.dataLayer.push({event:"pageview",page:{url:"/app/game",title:"game scene"}});var r=Object(i.useState)([]),s=Object(c.a)(r,2),g=s[0],n=s[1],m=Object(i.useState)(""),d=Object(c.a)(m,2),v=d[0],h=d[1],p=Object(i.useState)(""),f=Object(c.a)(p,2),x=f[0],y=f[1],S=Object(i.useState)([]),N=Object(c.a)(S,2),A=N[0],M=N[1],J=Object(i.useState)([]),P=Object(c.a)(J,2),W=P[0],z=P[1],E=o.a.useState(!1),D=Object(c.a)(E,2),B=D[0],R=D[1],q=o.a.useState(!1),V=Object(c.a)(q,2),X=V[0],_=V[1],K=Object(l.f)(),H=T()(),Q=H.width,U=H.height,Y=Object(i.useRef)(Object(k.a)(new Array(3)).map((function(){return o.a.createRef()}))),Z=O.a.parse(e.location.search),$=Z.category,ee=Z.level;function ae(e,a){var r=JSON.parse(localStorage.getItem("currentWordTextFieldsSolved"));r[e]=a,localStorage.setItem("currentWordTextFieldsSolved",JSON.stringify(r));if(r.every((function(e){return!0===e})))te(),console.log("Scene Solved!"),localStorage.removeItem("currentWordTextFieldsSolved");else if(R(!1),!0===a){for(var t=e+1;Y.current.length<e&&Y.current[t]&&Y.current[t].className.includes("emptyletter");)t++;Y.current[t]&&Y.current[t].current.focus(),te()}}var re=function(e){var a="";if(Y.current)for(var r=0;r<Y.current.length;r++)a+=Y.current[r].current.value;"word"===e&&""!==a?window.dataLayer.push({event:"event",eventProps:{category:"game",action:"solved",label:"/"+$+"/"+a}}):"category"===e&&window.dataLayer.push({event:"event",eventProps:{category:"game",action:"solved",label:"/"+$}})},te=function(){var e=JSON.parse(localStorage.getItem("wordsSolvedArray"));if(null!==e){for(var a=0;a<e.length;a++)if(-1===e[a]){e[a]=1,localStorage.setItem("wordsSolvedArray",JSON.stringify(e)),re("word");break}R(!0);var r=setTimeout((function(){R(!1);if(e.every((function(e){return 1===e}))){re("category"),ie(),_(!0);var a=setTimeout((function(){_(!1),localStorage.removeItem("wordsSolvedArray"),K.push({pathname:"/app"})}),6e3);return function(){return clearTimeout(a)}}R(!1),window.location.reload()}),5e3);return function(){return clearTimeout(r)}}};Object(i.useEffect)((function(){!function(){if(g.length<=0)for(var e=0;e<L.length;e++)if(L[e].category===$){var a=Object(k.a)(L[e].words);n(a);var r=JSON.parse(localStorage.getItem("wordsSolvedArray"));null===r&&(r=new Array(a.length).fill(0),localStorage.setItem("wordsSolvedArray",JSON.stringify(r)));break}}()}),[g,$]),Object(i.useEffect)((function(){!function(){if(!(""!==v||g.length<=0)){localStorage.removeItem("currentWordTextFieldsSolved");var e=Math.floor(Math.random()*g.length),r=JSON.parse(localStorage.getItem("wordsSolvedArray"));if(r&&r.length>0){for(;1===r[e];)e=Math.floor(Math.random()*g.length);r[e]=-1,localStorage.setItem("wordsSolvedArray",JSON.stringify(r))}var i="/"+$+"/"+g[e].image,s=g[e].word,n=0;switch(window.dataLayer.push({event:"event",eventProps:{category:"game",action:"word",label:"/"+$+"/"+s}}),y(i),h(s),ee){case"first-letter":n=0;break;case"last-letter":n=s.length-1;break;case"middle-letter":n=Math.floor(s.length/2);var c=s.charAt(n);" "===c&&(n-=1,c=s.charAt(n));break;case"entire-word":n=-1}var l=s.split(""),m=new Array(l.length).fill(!1);Y.current=Y.current.splice(0,l.length);for(var d=0;d<l.length;d++)Y.current[d]=Y.current[d]||o.a.createRef();for(var w=new Array(l.length),u=0;u<l.length;u++){var b=l[u],j=-1!==n&&u!==n,p=-1===n?0===u:u===n;" "!==b?(w[u]=Object(t.jsx)(F,{idx:u,disabled:j,autoFocus:p,value:b,handleSceneSolved:ae.bind(a),referer:Y.current[u]},u),m[u]=j):(w[u]=Object(t.jsx)(F,{idx:u,disabled:!0,value:"",handleSceneSolved:ae.bind(a),referer:Y.current[u]},u),m[u]=!0)}localStorage.setItem("currentWordTextFieldsSolved",JSON.stringify(m)),M(w)}}()}));var ie=function(){for(var e="\u05db\u05dc     \u05d4\u05db\u05d1\u05d5\u05d3!".split(""),a=new Array(e.length),r=0;r<e.length;r++){var i=e[r];a[r]=" "!==i?Object(t.jsx)(F,{idx:r,disabled:!0,value:i},r):Object(t.jsx)(F,{idx:r,disabled:!0,value:""},r)}z(a)};return Object(t.jsx)("div",{className:"home",children:Object(t.jsxs)("div",{className:"game-body",children:[B?Object(t.jsx)(C.a,{width:Q,height:U}):null,X?Object(t.jsx)(w.a,{className:"game-card",style:{height:.8*U,display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:Object(t.jsxs)(u.a,{children:[Object(t.jsx)(j.a,{component:"img",image:"/trophy.svg"}),W]})}):Object(t.jsxs)(w.a,{className:"game-card",children:[Object(t.jsxs)(u.a,{children:[Object(t.jsx)(j.a,{component:"img",height:"30%",image:x}),Object(t.jsx)(b.a,{className:"card-content",children:A})]}),Object(t.jsx)(I.a,{children:Object(t.jsxs)("div",{className:"actions",children:[Object(t.jsx)(G.a,{size:"small",color:"primary",onClick:function(){window.dataLayer.push({event:"event",eventProps:{category:"game",action:"word sound",label:"/"+$+"/"+v}})},children:Object(t.jsx)("img",{width:"30",height:"30",src:"/volume.svg",alt:"\u05e0\u05d2\u05df"})}),Object(t.jsx)(G.a,{size:"small",color:"primary",onClick:function(){window.dataLayer.push({event:"event",eventProps:{category:"game",action:"change word",label:"/"+$+"/"+v}}),window.location.reload()},children:Object(t.jsx)("img",{width:"30",height:"30",src:"/reload.svg",alt:"\u05d8\u05e2\u05df"})})]})})]})]})})},J=r(58),P=r.n(J);r(124);var W=function(){return window.dataLayer.push({event:"pageview",page:{url:"/app/about",title:"about"}}),Object(t.jsx)("div",{className:"about",children:Object(t.jsx)("div",{className:"about-body",children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(b.a,{children:[Object(t.jsx)(h.a,{className:"title",color:"textSecondary",gutterBottom:!0,children:"\u05d0\u05d5\u05d3\u05d5\u05ea \u05d4\u05de\u05e9\u05d7\u05e7"}),Object(t.jsx)(h.a,{variant:"h5",component:"h2",children:"\u05e9\u05dc\u05d5\u05dd \u05db\u05d9\u05ea\u05d4 \u05d0 - \u05de\u05e9\u05d7\u05e7 \u05dc\u05d9\u05de\u05d5\u05d3 \u05d0\u05d9\u05d5\u05ea"}),Object(t.jsxs)(h.a,{className:"pos",color:"textSecondary",children:["\u05de\u05e9\u05d7\u05e7\u05d9\u05dd \u05dc\u05db\u05d9\u05ea\u05d4 \u05d0, \u05dc\u05d9\u05de\u05d5\u05d3 \u05d0\u05d9\u05d5\u05ea \u05d5\u05db\u05ea\u05d9\u05d1\u05d4 \u05e0\u05db\u05d5\u05e0\u05d4 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea",Object(t.jsx)("br",{}),Object(t.jsx)("br",{})]}),Object(t.jsxs)(h.a,{variant:"body1",component:"p",children:["\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05de\u05e9\u05d7\u05e7 \u05dc\u05dc\u05d9\u05de\u05d5\u05d3 \u05d0\u05d9\u05d5\u05ea \u05d5\u05db\u05ea\u05d9\u05d1\u05d4 \u05d1\u05e2\u05d1\u05e8\u05d9\u05ea \u05dc\u05d9\u05dc\u05d3\u05d9 \u05db\u05d9\u05ea\u05d4 \u05d0', \u05db\u05d9\u05ea\u05d4 \u05d1' \u05d5\u05d2\u05df \u05d7\u05d5\u05d1\u05d4. \u05d1\u05de\u05e9\u05d7\u05e7 \u05e0\u05d9\u05ea\u05df \u05dc\u05de\u05e6\u05d5\u05d0 \u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d5\u05ea \u05e9\u05d5\u05e0\u05d5\u05ea \u05db\u05d2\u05d5\u05df \u05d0\u05d2\u05d3\u05d5\u05ea, \u05d0\u05d4\u05d1\u05d4, \u05d0\u05d5\u05db\u05dc, \u05d1\u05e2\u05dc\u05d9 \u05d7\u05d9\u05d9\u05dd, \u05de\u05d3\u05e2 \u05d5\u05d7\u05dc\u05dc, \u05db\u05dc\u05d9\u05dd \u05d5\u05e2\u05d5\u05d3. \u05dc\u05db\u05dc \u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4 \u05e0\u05d9\u05ea\u05df \u05dc\u05d1\u05d7\u05d5\u05e8 \u05d1\u05d9\u05df 4 \u05e8\u05de\u05d5\u05ea \u05e7\u05d5\u05e9\u05d9 \u05e9\u05d5\u05e0\u05d5\u05ea, \u05d4\u05d7\u05dc \u05de\u05d0\u05d9\u05d5\u05ea \u05d4\u05d0\u05d5\u05ea \u05d4\u05e4\u05d5\u05ea\u05d7\u05ea \u05e9\u05dc \u05db\u05dc \u05de\u05d9\u05dc\u05d4, \u05d3\u05e8\u05da \u05d0\u05d9\u05d5\u05ea \u05d0\u05d5\u05ea \u05e1\u05d5\u05d2\u05e8\u05ea \u05d5\u05d0\u05d5\u05ea \u05d0\u05de\u05e6\u05e2\u05d9\u05ea \u05e9\u05dc \u05db\u05dc \u05de\u05d9\u05dc\u05d4 \u05d5\u05e2\u05d3 \u05dc\u05d0\u05d9\u05d5\u05ea \u05d4\u05de\u05d9\u05dc\u05d4 \u05db\u05d5\u05dc\u05d4. \u05dc\u05db\u05dc \u05de\u05d9\u05dc\u05d4 \u05de\u05d5\u05e4\u05d9\u05e2\u05d4 \u05ea\u05de\u05d5\u05e0\u05d4 \u05d5\u05e6\u05dc\u05d9\u05dc \u05d0\u05d5\u05ea\u05d5 \u05e0\u05d9\u05ea\u05df \u05dc\u05e9\u05de\u05d5\u05e2, \u05d5\u05e2\u05dc \u05d4\u05ea\u05dc\u05de\u05d9\u05d3 \u05dc\u05d0\u05d9\u05d9\u05ea \u05d0\u05ea \u05d4\u05de\u05d9\u05dc\u05d4 \u05d4\u05de\u05d5\u05e4\u05d9\u05e2\u05d4 \u05e2\u05dc \u05d4\u05de\u05e1\u05da.",Object(t.jsx)("br",{}),Object(t.jsx)("br",{})]}),Object(t.jsx)(P.a,{className:"MuiCardMedia-root MuiCardMedia-media",url:"https://youtu.be/vcsEV-oIaKA",playing:"true",allowfullscreen:"false",loop:"true",width:"100%"}),Object(t.jsxs)(h.a,{variant:"caption",component:"p",children:[Object(t.jsx)("br",{}),'\u05d4\u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d1\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4 \u05e2\u05d5\u05e6\u05d1\u05d5 \u05e2"\u05d9 ',Object(t.jsx)("a",{href:"https://www.flaticon.com/authors/nikita-golubev",title:"Nikita Golubev",rel:"noreferrer",target:"_blank",children:"Nikita Golubev"})," \u05de ",Object(t.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",rel:"noreferrer",target:"_blank",children:" www.flaticon.com"}),Object(t.jsx)("br",{})]})]})})})})};r(125);var z=function(){return Object(t.jsxs)("div",{className:"dashboard",children:[Object(t.jsx)(l.b,{exact:!0,path:"/app",component:f}),Object(t.jsx)(l.b,{exact:!0,path:"/app/level",component:y}),Object(t.jsx)(l.b,{exact:!0,path:"/app/game",component:M}),Object(t.jsx)(l.b,{exact:!0,path:"/app/about",component:W})]})};r(126);var E=function(){return Object(t.jsxs)("div",{className:"footer",children:[Object(t.jsx)("div",{className:"footer-line"}),Object(t.jsxs)("div",{className:"footer-text",children:["\u05d1 ",Object(t.jsx)("span",{className:"footer-heart",children:"\u2665"})," \u05dc\u05e2\u05de\u05dc\u05d9\u05d4 \u05d5\u05d0\u05d9\u05ea\u05df \u05de\u05d0\u05d1\u05d0 \xa9 2020"]})]})};r(127);var D=function(e){return Object(t.jsx)("div",{className:"menu-container "+(e.open?"menu-height-100":"menu-height-0"),children:e.open?Object(t.jsx)("div",{className:"menu-list",children:e.children}):null})};r(128);var B=function(e){var a=Object(i.useState)(!1),r=Object(c.a)(a,2),o=r[0],s=r[1];function g(e){e.preventDefault(),s(!o)}return Object(t.jsxs)("div",{className:"menu-item-container",children:[Object(t.jsx)("div",{id:e.id,className:"menu-item "+(o?"menu-item-hover":"menu-item-no-hover"),onMouseEnter:g,onMouseLeave:g,onClick:e.onClick,children:e.children}),Object(t.jsx)("div",{className:"menu-item-line"})]})};r(129);var R=function(e){return Object(i.useEffect)((function(){}),[e.open]),Object(t.jsxs)("div",{className:"menu-button-container",onClick:function(a){a.preventDefault(),e.onClick(a)},children:[Object(t.jsx)("div",{className:"menu-button-line menu-button-line-top "+(e.open?"menu-button-line-top-open":"menu-button-line-top-close")}),Object(t.jsx)("div",{className:"menu-button-line "+(e.open?"menu-button-line-middle-open":"menu-button-line-middle-close")}),Object(t.jsx)("div",{className:"menu-button-line menu-button-line-bottom "+(e.open?"menu-button-line-bottom-open":"menu-button-line-bottom-closes")})]})};r(130);d.a.initialize({gtmId:"GTM-MLWXFXB"});var q=function(){window.dataLayer.push({event:"pageview",page:{url:"/",title:"homepage"}});var e=Object(l.f)(),a=Object(i.useState)(!1),r=Object(c.a)(a,2),o=r[0],s=r[1],g=["\u05de\u05b4\u05e9\u05c2\u05b0\u05d7\u05b8\u05e7 \u05d7\u05b8\u05d3\u05b8\u05e9\u05c1","\u05d0\u05d5\u05b9\u05d3\u05d5\u05b9\u05ea"].map((function(e,a){return Object(t.jsx)(B,{id:a,delay:"".concat(.1*a,"s"),onClick:n,children:e},a)}));function n(a){switch(a.preventDefault(),a.target.id){case"0":e.push({pathname:"/"}),s(!o);break;case"1":e.push({pathname:"/app/about"}),s(!o)}}return Object(t.jsxs)("div",{className:"app",children:[Object(t.jsxs)("div",{className:"content",children:[Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)(R,{open:o,onClick:function(e){e.preventDefault(),s(!o)},color:"white"}),Object(t.jsx)("div",{className:"logo",children:"\u05e9\u05dc\u05d5\u05dd \u05db\u05d9\u05ea\u05d4 \u05d0 - \u05de\u05e9\u05d7\u05e7 \u05dc\u05d9\u05de\u05d5\u05d3 \u05d0\u05d9\u05d5\u05ea"})]}),Object(t.jsx)(D,{open:o,children:g}),Object(t.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(t.jsx)(l.a,{to:"/app"})}}),Object(t.jsx)(z,{})]}),Object(t.jsx)(E,{})]})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,174)).then((function(a){var r=a.getCLS,t=a.getFID,i=a.getFCP,o=a.getLCP,s=a.getTTFB;r(e),t(e),i(e),o(e),s(e)}))};g.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(n.a,{children:Object(t.jsx)("div",{className:"main",children:Object(t.jsx)(q,{})})})}),document.getElementById("root")),V()},76:function(e,a,r){},80:function(e,a,r){},84:function(e,a,r){},99:function(e,a,r){}},[[131,1,2]]]);
//# sourceMappingURL=main.b429800e.chunk.js.map