(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),c=i.n(s),a=i(6),j=i.n(a),l=i(3);var r=function(e){return Object(n.jsxs)("div",{class:"preview",children:[Object(n.jsx)("h3",{children:"General Information"}),Object(n.jsx)("div",{id:"namePreview",children:e.name}),Object(n.jsx)("div",{id:"emailPreview",children:e.email}),Object(n.jsx)("div",{id:"phonePreview",children:e.phone})]})};var b=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),i=t[0],c=t[1],a=Object(s.useState)(""),j=Object(l.a)(a,2),b=j[0],o=j[1],d=Object(s.useState)(""),u=Object(l.a)(d,2),O=u[0],p=u[1],x=Object(s.useState)(!1),h=Object(l.a)(x,2),m=h[0],v=h[1],f=function(){v(!m)};return!1===m?Object(n.jsxs)("div",{className:"sectionContainer",children:[Object(n.jsx)("h2",{children:"Your Application"}),Object(n.jsx)("h3",{children:"General Information"}),Object(n.jsxs)("form",{onSubmit:function(){f()},children:[Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"name",type:"text",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"email",type:"email",value:b,onChange:function(e){return o(e.target.value)}})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"phone",type:"tel",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(n.jsx)("input",{type:"submit",id:"submitGen"})]})]}):Object(n.jsxs)("div",{className:"previewDiv",children:[Object(n.jsx)("h2",{children:"Your Application"}),Object(n.jsx)(r,{name:i,email:b,phone:O}),Object(n.jsx)("button",{class:"edit",onClick:f,children:"Edit"})]})},o=i(4),d=i(2);var u=function(e){return Object(n.jsxs)("div",{class:"preview",children:[Object(n.jsx)("h3",{children:"Education"}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.institution," "]}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.qualification," "]}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.dateCompleted," "]})]})};var O=function(){var e=Object(s.useState)({institution:"",qualification:"",dateCompleted:"",isVisible:!1}),t=Object(l.a)(e,2),i=t[0],c=t[1],a=function(){var e=!i.isVisible;c(Object(d.a)(Object(d.a)({},i),{},{isVisible:e}))};function j(e){var t=e.target,n=t.name,s=t.value;c(Object(d.a)(Object(d.a)({},i),{},Object(o.a)({},n,s)))}return!1===i.isVisible?Object(n.jsxs)("div",{className:"sectionContainer",children:[Object(n.jsx)("h3",{children:"Education"}),Object(n.jsxs)("form",{onSubmit:function(){a()},children:[Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"institution",children:"Institution Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"institution",type:"text",value:i.institution,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"qualification",children:"Qualification"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"qualification",type:"text",value:i.qualification,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"dateCompleted",children:"Date Completed"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"dateCompleted",value:i.dateCompleted,onChange:j})]}),Object(n.jsx)("input",{type:"submit",id:"submitEdu"})]})]}):Object(n.jsxs)("div",{className:"previewDiv",children:[Object(n.jsx)(u,{institution:i.institution,qualification:i.qualification,dateCompleted:i.dateCompleted}),Object(n.jsx)("button",{class:"edit",onClick:a,children:"Edit"})]})};var p=function(e){return Object(n.jsxs)("div",{class:"preview",children:[Object(n.jsx)("h3",{children:"Experience"}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.company," "]}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.position," "]}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.responsibilities," "]}),Object(n.jsxs)("div",{class:"prevData",children:[" ",e.dateFrom," - ",e.dateTo," "]})]})};var x=function(){var e=Object(s.useState)({company:"",position:"",responsibilities:"",dateFrom:"",dateTo:"",isVisible:!1}),t=Object(l.a)(e,2),i=t[0],c=t[1],a=function(){var e=!i.isVisible;c(Object(d.a)(Object(d.a)({},i),{},{isVisible:e}))};function j(e){var t=e.target,n=t.name,s=t.value;c(Object(d.a)(Object(d.a)({},i),{},Object(o.a)({},n,s)))}return!1===i.isVisible?Object(n.jsxs)("div",{className:"sectionContainer",children:[Object(n.jsx)("h3",{children:"Experience"}),Object(n.jsxs)("form",{onSubmit:function(){a()},children:[Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"companyName",children:"Company Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"company",type:"text",value:i.company,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"position",children:"Position"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{name:"position",type:"text",value:i.position,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"responsibilities",children:"Responsibilities"}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{name:"responsibilities",value:i.responsibilities,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"dateFrom",children:"Start Date"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"dateFrom",value:i.dateFrom,onChange:j})]}),Object(n.jsxs)("div",{className:"inputAndLabel",children:[Object(n.jsx)("label",{htmlFor:"dateTo",children:"End Date"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"date",name:"dateTo",value:i.dateTo,onChange:j})]}),Object(n.jsx)("input",{type:"submit",id:"submitExp"})]})]}):Object(n.jsxs)("div",{className:"previewDiv",children:[Object(n.jsx)(p,{company:i.company,position:i.position,responsibilities:i.responsibilities,dateFrom:i.dateFrom,dateTo:i.dateTo}),Object(n.jsx)("button",{class:"edit",onClick:a,children:"Edit"})]})};function h(e){return Object(n.jsx)("header",{children:Object(n.jsxs)("h1",{children:["Welcome back ",e.user]})})}h.defaultProps={user:""};var m=h;i(12);var v=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(m,{}),Object(n.jsx)(b,{}),Object(n.jsx)(O,{}),Object(n.jsx)(x,{})]})};j.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8bb9cbbb.chunk.js.map