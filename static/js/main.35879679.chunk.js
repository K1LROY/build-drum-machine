(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{50:function(e,r,t){},51:function(e,r,t){},52:function(e,r,t){},54:function(e,r,t){},55:function(e,r,t){},56:function(e,r,t){},57:function(e,r,t){},58:function(e,r,t){},59:function(e,r,t){},60:function(e,r,t){},61:function(e,r,t){},68:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),c=t(31),i=t.n(c),d=(t(50),t(5)),a=t(89),s=t(87),u=t(37),l=t.n(u),p=t(41),g=t.n(p),m=t(34),b=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],y=(t(51),t(52),t(1)),k=function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"a"!==r&&"A"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})},x=(t(54),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"c"!==r&&"C"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),j=(t(55),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"d"!==r&&"D"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),v=(t(56),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"e"!==r&&"E"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),f=(t(57),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"q"!==r&&"Q"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),T=(t(58),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"s"!==r&&"S"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),h=(t(59),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"w"!==r&&"W"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),w=(t(60),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"x"!==r&&"X"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),O=(t(61),function(e){var r=e.clip,t=e.volume,o=e.setDisplayText,c=e.setRecording,i=Object(n.useState)({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"}),a=Object(d.a)(i,2),s=a[0],u=a[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",l),window.addEventListener("keyup",p),function(){document.removeEventListener("keydown",l),window.removeEventListener("keyup",p)}}),[]);var l=function(e){var r=e.key;"z"!==r&&"Z"!==r||(g(),u({backgroundColor:"#ff0081",boxShadow:"0 2px 25px rgba(255, 0, 130, 0.2)",height:77,marginTop:13}))},p=function(e){e.keyCode===r.keyCode&&u({backgroundColor:"grey",marginTop:10,boxShadow:"3px 3px 5px black"})},g=function(){var e=document.getElementById(r.keyTrigger);e.volume=t,e.currentTime=0,e.play(),c((function(e){return e+r.keyTrigger+" "})),o(r.id.replace(/-/g," "))};return Object(y.jsxs)("button",{onClick:g,className:"Zpad-Select",style:s,id:r.id,children:[r.keyTrigger,Object(y.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger})]})}),C=t.p+"static/media/logo.92025b54.ico",E=function(){var e=Object(n.useState)(1),r=Object(d.a)(e,2),t=r[0],o=r[1],c=Object(n.useState)(""),i=Object(d.a)(c,2),u=i[0],p=i[1],E=Object(n.useState)(""),S=Object(d.a)(E,2),L=S[0],N=S[1],I=b,D=Object(m.a)(),R="dark"===D.palette.mode?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)";return Object(y.jsxs)("div",{id:"drum-machine",className:"container-fluid",children:[Object(y.jsxs)("div",{className:"logo",children:[Object(y.jsx)("div",{className:"inner-logo",children:"Kilroy\xa0"}),Object(y.jsx)("img",{src:C,alt:"image"})]}),Object(y.jsxs)("div",{className:"col-md-6 Drum-pad",children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col drum-pad",id:"drum-0",children:Object(y.jsx)(k,{clip:I[3],clipId:I[3].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-1",children:Object(y.jsx)(x,{clip:I[8],clipId:I[8].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-2",children:Object(y.jsx)(j,{clip:I[5],clipId:I[5].keyTrigger,volume:t,setDisplayText:p,setRecording:N})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col drum-pad",id:"drum-3",children:Object(y.jsx)(v,{clip:I[2],clipId:I[2].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-4",children:Object(y.jsx)(f,{clip:I[0],clipId:I[0].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-5",children:Object(y.jsx)(T,{clip:I[4],clipId:I[4].keyTrigger,volume:t,setDisplayText:p,setRecording:N})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col drum-pad",id:"drum-6",children:Object(y.jsx)(h,{clip:I[1],clipId:I[1].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-7",children:Object(y.jsx)(w,{clip:I[7],clipId:I[7].keyTrigger,volume:t,setDisplayText:p,setRecording:N})}),Object(y.jsx)("div",{className:"col drum-pad",id:"drum-8",children:Object(y.jsx)(O,{clip:I[6],clipId:I[6].keyTrigger,volume:t,setDisplayText:p,setRecording:N})})]})]}),Object(y.jsxs)("div",{className:"col-md-6",children:[Object(y.jsx)("div",{children:Object(y.jsxs)(a.a,{spacing:2,direction:"row",sx:{mb:1,px:1},alignItems:"center",children:[Object(y.jsx)(l.a,{htmlColor:R}),Object(y.jsx)(s.a,{step:.1,max:1,min:0,value:t,onChange:function(e){o(e.target.value)},sx:{color:"dark"===D.palette.mode?"#fff":"rgba(0,0,0,0.87)","& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{width:15,height:15,backgroundColor:"#fff","&:before":{boxShadow:"0 4px 8px rgba(0,0,0,0.4)"},"&:hover, &.Mui-focusVisible, &.Mui-active":{boxShadow:"none"}}}}),Object(y.jsx)(g.a,{htmlColor:R})]})}),Object(y.jsx)("p",{id:"display",children:u}),Object(y.jsx)("h3",{children:"Recording"}),Object(y.jsx)("p",{id:"display",children:L}),Object(y.jsx)("button",{onClick:function(){var e=0,r=L.split(" "),n=setInterval((function(){var n=document.getElementById(r[e]);n.volume=t,n.currentTime=0,n.play(),e++}),300);setTimeout((function(){return clearInterval(n)}),300*r.length-1)},className:"btn btn-success recButton",children:"PLAY"}),Object(y.jsx)("button",{onClick:function(){return N("")},className:"btn btn-danger recButton",children:"CLEAR"})]})]})};var S=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(E,{})})};i.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.35879679.chunk.js.map