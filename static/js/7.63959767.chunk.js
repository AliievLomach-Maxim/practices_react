"use strict";(self.webpackChunkpractices_react=self.webpackChunkpractices_react||[]).push([[7],{6007:function(r,e,t){t.r(e),t.d(e,{default:function(){return G}});var n=t(4165),a=t(5861),o=t(9439),i=t(2791),c=t(7689),s=t(5218),l=t(2482),u=t(168),d=t(7621),f=t(9504),p=t(890),v=t(6151),h=t(1582),m=t(3366),x=t(7462),b=t(8182),g=t(4419),Z=t(6934),w=t(1402),j=t(9201),y=t(184),S=(0,j.Z)((0,y.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),k=t(5878),A=t(1217);function R(r){return(0,A.Z)("MuiAvatar",r)}(0,k.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var P=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],I=(0,Z.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme,t=r.ownerState;return(0,x.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,x.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))})),D=(0,Z.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),M=(0,Z.ZP)(S,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});var z,C=i.forwardRef((function(r,e){var t=(0,w.Z)({props:r,name:"MuiAvatar"}),n=t.alt,a=t.children,c=t.className,s=t.component,l=void 0===s?"div":s,u=t.imgProps,d=t.sizes,f=t.src,p=t.srcSet,v=t.variant,h=void 0===v?"circular":v,Z=(0,m.Z)(t,P),j=null,S=function(r){var e=r.crossOrigin,t=r.referrerPolicy,n=r.src,a=r.srcSet,c=i.useState(!1),s=(0,o.Z)(c,2),l=s[0],u=s[1];return i.useEffect((function(){if(n||a){u(!1);var r=!0,o=new Image;return o.onload=function(){r&&u("loaded")},o.onerror=function(){r&&u("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=n,a&&(o.srcset=a),function(){r=!1}}}),[e,t,n,a]),l}((0,x.Z)({},u,{src:f,srcSet:p})),k=f||p,A=k&&"error"!==S,z=(0,x.Z)({},t,{colorDefault:!A,component:l,variant:h}),C=function(r){var e=r.classes,t={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,g.Z)(t,R,e)}(z);return j=A?(0,y.jsx)(D,(0,x.Z)({alt:n,src:f,srcSet:p,sizes:d,ownerState:z,className:C.img},u)):null!=a?a:k&&n?n[0]:(0,y.jsx)(M,{ownerState:z,className:C.fallback}),(0,y.jsx)(I,(0,x.Z)({as:l,ownerState:z,className:(0,b.Z)(C.root,c),ref:e},Z,{children:j}))})),_={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},N=t(1747),F=t(9434),E=t(3101),O=function(r){return r.comments},q=t(4768),B=(0,t(7691).ZP)(N.Z)(z||(z=(0,u.Z)(["\n    width: '100%';\n    font-family: IBM Plex Sans, sans-serif;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    padding: 12px;\n    border-radius: 12px 12px 0 12px;\n    color: #afb8c1;\n    background: #24292f;\n    border: 1px solid #424a53;\n    box-shadow: 0px 2px 2px #24292f;\n\n    &:hover {\n        border-color: #3399ff;\n    }\n\n    &:focus {\n        border-color: #3399ff;\n        box-shadow: 0 0 0 3px #007fff;\n    }\n"]))),T=function(r){var e=r.post,t=e._id,c=e.title,s=e.body,l=(0,F.v9)(E.a).profile,u=(0,F.v9)(O).comments,m=(0,i.useState)(null),x=(0,o.Z)(m,2),b=x[0],g=x[1];(0,i.useEffect)((function(){var r;(null===u||void 0===u||null===(r=u[0])||void 0===r?void 0:r.postId)===t?g(u):g(null)}),[t,u]);var Z=(0,F.I0)(),w=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:Z((0,q.x)(t));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,y.jsx)(d.Z,{p:2,sx:{boxShadow:"0 0 12px inset gray",m:2},children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(p.Z,{variant:"h5",children:c}),(0,y.jsx)(p.Z,{variant:"subtitle1",children:s}),!b&&(0,y.jsx)(v.Z,{onClick:w,sx:{mb:1},children:"Show comments"}),b&&b.map((function(r){return(0,y.jsx)(d.Z,{p:2,sx:{boxShadow:"0 0 12px  gray",m:2},children:(0,y.jsx)(f.Z,{children:(0,y.jsxs)(h.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,y.jsx)(C,{sx:{bgcolor:_[900]},src:r.creator.image}),(0,y.jsxs)(h.Z,{spacing:.1,children:[(0,y.jsx)(p.Z,{variant:"subtitle1",color:"GrayText",children:r.creator.firstName}),(0,y.jsx)(p.Z,{variant:"subtitle1",children:r.body})]})]})})},r._id)})),(0,y.jsx)("form",{onSubmit:function(r){r.preventDefault(),Z((0,q._)({id:t,body:{body:r.target[0].value,userId:l._id}})).unwrap().then((function(){return Z((0,q.x)(t))})),r.target.reset()},children:(0,y.jsxs)(h.Z,{direction:"column",spacing:1,children:[(0,y.jsx)(B,{minRows:1,placeholder:"Add comment..."}),(0,y.jsx)(v.Z,{sx:{width:130},type:"submit",children:"Add comment"})]})})]})})},G=function(){var r=(0,i.useState)(null),e=(0,o.Z)(r,2),t=e[0],u=e[1],d=(0,c.UO)().id;(0,i.useEffect)((function(){f(d)}),[d]);var f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.C8)(e);case 3:t=r.sent,a=t.posts,u(a),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),s.Am.error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}();return t&&t.map((function(r){return(0,y.jsx)(T,{post:r},r._id)}))}}}]);
//# sourceMappingURL=7.63959767.chunk.js.map