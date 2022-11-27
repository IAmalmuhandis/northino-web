(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[10],{928:function(e,a,t){"use strict";var r=t(28),n=t(874),i=t(0);a.a=function(e){var a,t=e.color,c=e.size,s=Object(r.a)();switch(t){case"secondary":a=s.palette.secondary.main;break;case"error":a=s.palette.error.main;break;case"warning":a=s.palette.warning.main;break;case"info":a=s.palette.info.main;break;case"success":a=s.palette.success.main;break;default:a=s.palette.primary.main}return Object(i.jsx)(n.a,{sx:{width:c||8,height:c||8,borderRadius:"50%",bgcolor:a}})}},949:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return T}));var r=t(6),n=t(1),i=t(17),c=t(962),s=t(963),o=t(964),l=t(842),d=t(189),u=t(874),b=t(965),j=t(966),g=t(967),h=t(863),p=t(925),f=t(928),x=t(0);function O(e,a,t,r,n){return{trackingNo:e,name:a,fat:t,carbs:r,protein:n}}var m=[O(84564564,"Canva Beginners Tutorial","06/07/2022",2,40570),O(98764564,"HTML For Beginners","06/07/2022",0,180139),O(98756325,"Mobile App Development Course","06/07/2022",1,90989),O(98652366,"CSS For Beginners","06/07/2022",1,10239),O(13286564,"Digital Marketing Course","06/07/2022",1,83348),O(86739658,"Content Creation","06/07/2022",0,410780),O(13256498,"Fast Typing Course","06/07/2022",2,70999),O(98753263,"Business Management","06/07/2022",2,10570),O(98753275,"Microsoft Office Tutorial","06/07/2022",1,98063),O(98753291,"CorelDraw","06/07/2022",0,14001)];function k(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function v(e,a){return"desc"===e?function(e,t){return k(e,t,a)}:function(e,t){return-k(e,t,a)}}function w(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var r=a(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var y=[{id:"trackingNo",align:"left",disablePadding:!1,label:"Tracking No."},{id:"courseName",align:"left",disablePadding:!0,label:"Course Name"},{id:"date",align:"right",disablePadding:!1,label:"Date"},{id:"status",align:"left",disablePadding:!1,label:"Status"},{id:"amount",align:"right",disablePadding:!1,label:"Amount"}];function N(e){var a=e.order,t=e.orderBy;return Object(x.jsx)(c.a,{children:Object(x.jsx)(s.a,{children:y.map((function(e){return Object(x.jsx)(o.a,{align:e.align,padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&a,children:e.label},e.id)}))})})}var C=function(e){var a,t;switch(e.status){case 0:a="warning",t="Pending";break;case 1:a="success",t="Approved";break;case 2:a="error",t="Rejected";break;default:a="primary",t="None"}return Object(x.jsxs)(l.a,{direction:"row",spacing:1,alignItems:"center",children:[Object(x.jsx)(f.a,{color:a}),Object(x.jsx)(d.a,{children:t})]})};function T(){var e=Object(n.useState)("asc"),a=Object(r.a)(e,1)[0],t=Object(n.useState)("trackingNo"),c=Object(r.a)(t,1)[0],l=Object(n.useState)([]),d=Object(r.a)(l,1)[0];return Object(x.jsx)(u.a,{children:Object(x.jsx)(b.a,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:Object(x.jsxs)(j.a,{"aria-labelledby":"tableTitle",sx:{"& .MuiTableCell-root:first-child":{pl:2},"& .MuiTableCell-root:last-child":{pr:3}},children:[Object(x.jsx)(N,{order:a,orderBy:c}),Object(x.jsx)(g.a,{children:w(m,v(a,c)).map((function(e,a){var t,r=(t=e.trackingNo,-1!==d.indexOf(t)),n="enhanced-table-checkbox-".concat(a);return Object(x.jsxs)(s.a,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},"aria-checked":r,tabIndex:-1,selected:r,children:[Object(x.jsx)(o.a,{component:"th",id:n,scope:"row",align:"left",children:Object(x.jsx)(h.a,{color:"secondary",component:i.b,to:"",children:e.trackingNo})}),Object(x.jsx)(o.a,{align:"left",children:e.courseName}),Object(x.jsx)(o.a,{align:"right",children:e.date}),Object(x.jsx)(o.a,{align:"left",children:Object(x.jsx)(C,{status:e.status})}),Object(x.jsx)(o.a,{align:"right",children:Object(x.jsx)(p.a,{value:e.amount,displayType:"text",thousandSeparator:!0,prefix:"N"})})]},e.trackingNo)}))})]})})})}}}]);
//# sourceMappingURL=10.89abba20.chunk.js.map