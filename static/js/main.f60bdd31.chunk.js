(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{60:function(e,n,t){},61:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(0),r=t.n(c),a=t(23),o=t.n(a),s=(t(60),t(12)),l=t(13),j=t(15),b=t(14),h=(t(61),t(5)),u=t(6);function d(){var e=Object(h.a)(["\n  body {\n      font-family: 'Lato', sans-serif;\n      color: #666\n  }\n"]);return d=function(){return e},e}var f=Object(u.a)(d()),x=t(37),O=t(4),p=t(89);function m(){var e=Object(h.a)(["\n  && {\n    width: 20%;\n    height: 5%;\n    display: inline-block;\n    color: #8c363e;\n    background-color: #fff;\n    text-align: center;\n    item-align: center;\n    font-size: 1.5em;\n    margin: 6%;\n    padding: 2.5%;\n    border: 2% #fff;\n    border-radius: 3%;\n    :hover {\n      color: #fff;\n      background: #8c363e;\n    }\n  }\n\n"]);return m=function(){return e},e}function g(){var e=Object(h.a)(["\n"]);return g=function(){return e},e}function v(){var e=Object(h.a)(["\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 700;\n  width: 80%\n  margin-left: 10%\n  color: #fff;\n  border-top: 2px solid #fff;\n  text-align: center;\n  :hover {\n    color: #8c363e;\n    background: #fff;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(h.a)(["\n  font-size: 13px;\n  font-style: italic;\n  color: #fff;\n  display: block;\n  text-align: center;\n  margin-bottom: 40px\n"]);return y=function(){return e},e}function k(){var e=Object(h.a)(["\n  margin: auto;\n  margin-top: 80px\n  color: #fff;\n  width: 80%;\n  text-align: center;\n"]);return k=function(){return e},e}function w(){var e=Object(h.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 20%;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  background-color: #8c363e;\n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]);return w=function(){return e},e}var S=u.b.div(w()),z=u.b.h4(k()),C=u.b.span(y()),I=u.b.span(v()),M=u.b.span(g()),P=Object(u.b)(p.a)(m()),D=t(48),A=t.n(D),L=t(47),N=t.n(L),E=t(49),T=t.n(E),B=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).handleClick=function(){var n=e.props,t=n.path;(0,n.onItemClick)(t)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.active;return Object(i.jsx)(M,{active:e,children:Object(i.jsx)(x.b,{to:this.props.path,className:this.props.text,onClick:this.handleClick,children:Object(i.jsx)(I,{children:this.props.text})})})}}]),t}(r.a.Component),F=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=n.call(this,e)).onItemClick=function(e){i.setState({activePath:e})},i.state={activePath:e.location.pathname,items:[{path:"/about-me",name:"About",text:"About",key:1},{path:"/skills-and-interests",name:"Skills",text:"Skills and Interests",key:2},{path:"/experience",name:"Experience",text:"Experience",key:3}]},i}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.items,c=n.activePath;return Object(i.jsxs)(S,{children:[Object(i.jsx)(z,{children:"Anna Wong"}),Object(i.jsx)(C,{children:"Data Scientist"}),t.map((function(n){return Object(i.jsx)(B,{path:n.path,name:n.name,text:n.text,onItemClick:e.onItemClick,active:n.path===c},n.key)})),Object(i.jsx)(P,{"aria-label":"linkedin.com",onClick:function(){return window.open("https://www.linkedin.com/in/anna-wong-20982b146/")},children:Object(i.jsx)(N.a,{fontSize:"medium"})}),Object(i.jsx)(P,{"aria-label":"github.com",onClick:function(){return window.open("https://github.com/wongannaw")},children:Object(i.jsx)(A.a,{fontSize:"medium"})}),Object(i.jsx)(P,{"aria-label":"resume",onClick:function(){return window.open("")},children:Object(i.jsx)(T.a,{fontSize:"medium"})})]})}}]),t}(c.Component),V=Object(O.f)(F),Q=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsx)(V,{})}}]),t}(c.Component),H=t.p+"static/media/me.08b95cdb.jpg";function R(){var e=Object(h.a)(['\n  &:before {\n    content: "\u2022";\n    color: #a43f49\n  }\n  display: block;\n  font-weight: bold;\n']);return R=function(){return e},e}function U(){var e=Object(h.a)(["\n    padding: 0;\n    margin-left: 10%;\n    list-style: none;\n"]);return U=function(){return e},e}function W(){var e=Object(h.a)(["\n  margin-top: 20px;\n  margin-right: 30%;\n  margin-left: 10%;\n  font-size: 16px;\n  line-height: 24px;\n  color: #666;\n"]);return W=function(){return e},e}function J(){var e=Object(h.a)(["\n  font-size: 26px;\n  font-weight: 700;\n  color: #666;\n  letter-spacing: 0.25px;\n  margin-top: 30px;\n  margin-left: 10%;\n"]);return J=function(){return e},e}function X(){var e=Object(h.a)(["\n  background-image: url(",");\n  width: 70%;\n  height: 70%;\n  border-radius: 20%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-left: 10%;\n  display: flex;\n  @media only screen and (max-width: 60px) {\n\n  }\n"]);return X=function(){return e},e}function q(){var e=Object(h.a)(["\n  font-size: 32px;\n  font-weight: 700;\n  color: #666;\n  text-align: center;\n  margin-top: 30px;\n  border-bottom: 2px solid #a43f49;\n  width: 80%;\n"]);return q=function(){return e},e}var G=u.b.h2(q()),K=u.b.div(X(),H),Y=u.b.h4(J()),Z=u.b.p(W()),$=u.b.ul(U()),_=u.b.li(R());function ee(){var e=Object(h.a)(["\n  flex: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(["\n  display: flex;\n  height: ","px;\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n"]);return te=function(){return e},e}var ie=u.b.div(te()),ce=u.b.div(ne(),(function(e){return e.height})),re=u.b.div(ee(),(function(e){return e.size})),ae=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(ie,{children:[Object(i.jsxs)(ce,{height:100,children:[Object(i.jsx)(re,{size:1}),Object(i.jsx)(re,{size:3,children:Object(i.jsx)(G,{children:"Howdy World! I'm Anna"})})]}),Object(i.jsxs)(ce,{height:500,children:[Object(i.jsx)(re,{size:1}),Object(i.jsx)(re,{size:2,children:Object(i.jsx)(K,{})}),Object(i.jsxs)(re,{size:2,children:[Object(i.jsx)(Y,{children:"About Me"}),Object(i.jsx)(Z,{children:"Currently I am a Data Scientist working for IBM in Austin, TX. I graduated from Carnegie Mellon University in 2018 with a BSc in Statistics and Machine Learning."})]})]})]})}}]),t}(c.Component),oe=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(ie,{children:[Object(i.jsxs)(ce,{height:100,children:[Object(i.jsx)(re,{size:1}),Object(i.jsx)(re,{size:3,children:Object(i.jsx)(G,{children:"Skills and Interests"})})]}),Object(i.jsxs)(ce,{height:500,children:[Object(i.jsx)(re,{size:1}),Object(i.jsxs)(re,{size:2,children:[Object(i.jsx)(Y,{children:"Technical Skills"}),Object(i.jsxs)($,{children:[Object(i.jsx)(_,{children:"Data Analysis"}),Object(i.jsx)(_,{children:"Machine learning"}),Object(i.jsx)(_,{children:"Data visualization"}),Object(i.jsx)(_,{children:"Python"}),Object(i.jsx)(_,{children:"R"}),Object(i.jsx)(_,{children:"SQL"})]})]}),Object(i.jsxs)(re,{size:2,children:[Object(i.jsx)(Y,{children:"Interests"}),Object(i.jsxs)($,{children:[Object(i.jsx)(_,{children:"AI Ethics"}),Object(i.jsx)(_,{children:"Human Computer Interaction"}),Object(i.jsx)(_,{children:"Mentorship"}),Object(i.jsx)(_,{children:"Technology for social good"})]})]})]})]})}}]),t}(c.Component),se=t(33),le=(t(72),t(43)),je=t.n(le),be=t(50),he=t.n(be),ue=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(ie,{children:[Object(i.jsxs)(ce,{height:100,children:[Object(i.jsx)(re,{size:1}),Object(i.jsx)(re,{size:2,children:Object(i.jsx)(G,{children:"Experience"})})]}),Object(i.jsxs)(ce,{height:500,children:[Object(i.jsx)(re,{size:1}),Object(i.jsx)(re,{size:4,children:Object(i.jsxs)(se.VerticalTimeline,{children:[Object(i.jsxs)(se.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2020 - present",iconStyle:{background:"#0f62fe",color:"#fff"},icon:Object(i.jsx)(je.a,{}),children:[Object(i.jsx)("h3",{className:"vertical-timeline-element-title",children:"Data Scientist @ IBM"}),Object(i.jsx)("h4",{className:"vertical-timeline-element-subtitle",color:"#fff",children:"CIO Data Insights"}),Object(i.jsxs)("p",{children:["Data : Analysis | Warehousing | Modeling | Visualization",Object(i.jsx)("br",{}),"Python: sklearn | pandas | numpy | plotly",Object(i.jsx)("br",{}),"SQL: Presto | MySQL | postgreSQL"]})]}),Object(i.jsxs)(se.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2018 - 2020",iconStyle:{background:"#0f62fe",color:"#fff"},icon:Object(i.jsx)(je.a,{}),children:[Object(i.jsx)("h3",{className:"vertical-timeline-element-title",children:"Data Scientist @ IBM"}),Object(i.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Data Science and Insights for Customer Success"}),Object(i.jsxs)("p",{children:["Data : Pipelines | Mining | Prediction",Object(i.jsx)("br",{}),"Python : pySpark | sklearn | pandas | numpy"]})]}),Object(i.jsxs)(se.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2018",iconStyle:{background:"#cc002b",color:"#fff"},icon:Object(i.jsx)(he.a,{}),children:[Object(i.jsx)("h3",{className:"vertical-timeline-element-title",children:"Bachelor of Science in Statistics and Machine Learning"}),Object(i.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Carnegie Mellon University"}),Object(i.jsxs)("p",{children:["Statistics : Regression | Data Mining | Stochastic Modeling | Probability",Object(i.jsx)("br",{}),"Machine Learning : Natural Language Processing | Artificial Intelligence",Object(i.jsx)("br",{}),"Human Computer Interaction : User-Centered Research and Evaluation | Interface Programming"]})]})]})})]})]})}}]),t}(c.Component),de=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"colorlib-page",children:Object(i.jsxs)("div",{id:"container-wrap",children:[Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(f,{}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(Q,{}),Object(i.jsxs)(O.c,{children:[Object(i.jsx)(O.a,{exact:!0,path:"/",component:ae}),Object(i.jsx)(O.a,{exact:!0,path:"/about-me",component:ae}),Object(i.jsx)(O.a,{exact:!0,path:"/skills-and-interests",component:oe}),Object(i.jsx)(O.a,{exact:!0,path:"/experience",component:ue})]})]})]}),Object(i.jsx)("div",{id:"colorlib-main"})]})})}}]),t}(c.Component),fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,90)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(de,{})}),document.getElementById("root")),fe()}},[[74,1,2]]]);
//# sourceMappingURL=main.f60bdd31.chunk.js.map