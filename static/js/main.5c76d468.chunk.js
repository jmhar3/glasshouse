(this.webpackJsonpglasshouse=this.webpackJsonpglasshouse||[]).push([[0],{133:function(A,e,t){},274:function(A,e,t){},284:function(A,e,t){},285:function(A,e,t){},286:function(A,e,t){},287:function(A,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),a=t(113),r=t.n(a),s=(t(132),t(78),t(14)),o=t(9),i=t(114),u=t(115),d=t(127),l=t(126),j=(t(133),t.p+"static/media/swatches.0a0527a7.png"),h=t.p+"static/media/list.ef4ede6b.png",C=t(8),E=t(5),b=(t(33),t(23),t(28),t(2));var g=function(){var A=Object(n.useState)(!1),e=Object(C.a)(A,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){var A=E.a.auth().onAuthStateChanged((function(A){c(!!A)}));return function(){return A()}}),[]),t?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h5",{className:"user",children:["Hello ",E.a.auth().currentUser.displayName,"!"]}),Object(b.jsx)("a",{className:"access",onClick:function(){return E.a.auth().signOut()},children:"Sign Out"})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:"user",children:"Howdy Stranger"}),Object(b.jsx)(s.b,{to:"/accountaccess",children:"Sign In"})]})};E.a.initializeApp({apiKey:"AIzaSyCJf0VUOlF1V_B9Dmwl3WYbd0zrWqJ2Vdc",authDomain:"glasshouse-jmar.firebaseapp.com",databaseURL:"https://glasshouse-jmar-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"glasshouse-jmar",storageBucket:"glasshouse-jmar.appspot.com",messagingSenderId:"891273660406",appId:"1:891273660406:web:6fd086f5afbf0290d5e9d7",measurementId:"G-SEVN8GFFP7"});var Q=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(){var A;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(A=e.call.apply(e,[this].concat(c))).state={showing:!1},A}return Object(u.a)(t,[{key:"render",value:function(){var A=this,e=this.state.showing,t=E.a.auth().currentUser;return Object(b.jsxs)("header",{onMouseEnter:function(){return A.setState({showing:!e})},onMouseLeave:function(){return A.setState({showing:!e})},children:[Object(b.jsxs)("div",{id:"menu-head",children:[Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("img",{src:j,id:"user-icon",alt:"home icon"})}),Object(b.jsx)("img",{src:h,id:"menu-button",alt:"menu",style:{display:e?"none":"block"}}),Object(b.jsx)("div",{id:"user-access",style:{display:e?"block":"none"},children:Object(b.jsx)(g,{})})]}),Object(b.jsxs)("nav",{id:"navbar",style:{display:e?"flex":"none"},children:[Object(b.jsx)(s.b,{to:"/",children:"Explore Swatches"}),null!==t?Object(b.jsx)(s.b,{to:"/creations",children:"Your Creations"}):null,Object(b.jsx)(s.b,{to:"/palette",children:"Make Your Own"})]})]})}}]),t}(n.Component),I=t(30),f=E.a.firestore(),O=(E.a.auth().currentUser,Object(n.createContext)(null)),v=function(A){var e=Object(n.useReducer)(B,[]),t=Object(C.a)(e,2),c=t[0],a=t[1];return Object(b.jsx)(O.Provider,{value:[c,a],children:A.children})},B=function(A,e){switch(e.type){case"addPanel":if(A.length<6)return[].concat(Object(I.a)(A),[e.data]);case"removePanel":if(A.length>4)return A.filter((function(A){return e.data!==A}));case"updatePanel":return A.map((function(A){return A===e.data.oldColour&&(A=e.data.newColour),A}));case"openPalette":return Object(I.a)(e.data);case"savePalette":E.a.auth().onAuthStateChanged((function(t){t&&f.collection("swatches").add({name:e.data,colours:A,creator:t.uid}).then((function(A){console.log("Document written with ID: ",A.id)})).catch((function(A){console.error("Error adding document: ",A),alert("An error occurred while saving creation.")}))}));default:return A}},p=(t.p,t.p+"static/media/garbage.6c2d8488.png"),k=function(A){var e=A.swatchName,t=A.swatchColours,c=A.swatchKey,a=A.mouseLeave,r=Object(o.e)(),s=Object(n.useContext)(O),i=Object(C.a)(s,2),u=(i[0],i[1]);return Object(b.jsxs)("div",{className:"swatch-card",onMouseEnter:function(){document.querySelector("body").style.background="linear-gradient(to right, ".concat(t.join(", "),")")},onMouseLeave:a,children:[Object(b.jsx)("div",{className:"card-head",children:Object(b.jsx)("h4",{className:"swatch-name",onClick:function(A){u({type:"openPalette",data:t}),r.push("/palette")},children:e})}),Object(b.jsx)("div",{className:"swatch-colours",children:t.map((function(A,e){return Object(b.jsx)("div",{className:"colour-div",style:{background:A}},e)}))})]},c)},x=t(53),J=t.n(x),m=function(A){var e=A.swatchData,t=J()(),c=Object(n.useState)(t),a=Object(C.a)(c,2),r=a[0],s=(a[1],function(){document.querySelector("body").style.background=r});return Object(n.useEffect)(s),Object(b.jsx)("div",{id:"featured-swatches",children:e.map((function(A,e){return Object(b.jsx)(k,{swatchKey:e,swatchName:A.name,swatchColours:A.colours,mouseLeave:s})}))})},S=(t(79),function(){var A=Object(n.useState)([]),e=Object(C.a)(A,2),t=e[0],c=e[1],a=E.a.firestore();Object(n.useEffect)((function(){a.collection("swatches").get().then((function(A){var e=function(){var e=A.docs[t];c((function(A){return[].concat(Object(I.a)(A),[e.data()])}))};for(var t in A.docs)e()}))}),[]);var r=Object(n.useContext)(O),o=Object(C.a)(r,2),i=(o[0],o[1]);return Object(n.useEffect)((function(){fetch("http://colormind.io/api/",{method:"POST",body:JSON.stringify({model:"default"})}).then((function(A){return A.json()})).then((function(A){return A.result.forEach((function(A,e){return i({type:"addPanel",data:"RGB(".concat(A.join(", "),")")})}))}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"homepage",children:[Object(b.jsx)(s.b,{to:"/palette",className:"action-button",children:"Make Your Own"}),Object(b.jsx)("span",{className:"page-title",children:Object(b.jsx)("h1",{className:"title",children:"Explore"})}),Object(b.jsx)(m,{swatchData:t})]}),Object(b.jsx)("footer",{id:"footer",children:Object(b.jsxs)("p",{children:["Special thanks to ",Object(b.jsx)("a",{href:"http://colormind.io/",children:"ColorMind"})," + ",Object(b.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"}),"."]})})]})}),N=function(){var A=Object(n.useState)([]),e=Object(C.a)(A,2),t=e[0],c=e[1],a=E.a.firestore(),r=E.a.auth().currentUser;return Object(n.useEffect)((function(){null!==r?a.collection("swatches").where("creator","==",r.uid).get().then((function(A){var e=function(){var e=A.docs[t];c((function(A){return[].concat(Object(I.a)(A),[e.data()])})),console.log(e.id)};for(var t in A.docs)e()})).catch((function(A){console.log("Error getting documents: ",A)})):console.log("No user is signed in.")}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"creations-page",children:[Object(b.jsx)("div",{className:"page-title",children:Object(b.jsx)("h1",{className:"title",children:"Creations"})}),Object(b.jsx)(m,{swatchData:t})]}),Object(b.jsx)("footer",{id:"footer",children:Object(b.jsxs)("p",{children:["Special thanks to ",Object(b.jsx)("a",{href:"http://colormind.io/",children:"ColorMind"})," + ",Object(b.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"}),"."]})})]})},w=function(A){var e=Object(n.useState)(!0),t=Object(C.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(O),s=Object(C.a)(r,2),o=(s[0],s[1]);return Object(b.jsx)("div",{className:"palette-menu-item",onMouseEnter:function(A){a(!1)},onMouseLeave:function(A){a(!0)},onClick:function(A){o({type:"addPanel",data:J()()})},children:c?Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMFAAADBQBkjYSbAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABXtSURBVHic7d17kJ31fd/x7+/ZXUkQLq6NZWo74zrYCJLUNcbjJtR2Bc4/QrvaXTESiVtwQjO0DaZxCDVNmzbKH+0k8S3TxE7smdgpkDhiB+1qV5eQNkCcOB1nQggZe4ywS5wLxuWSApYD0u4+v/4h8AgsQNKecx7t+b5eM/pDZ8/lMzuzet56ztlzSgCrxvSu6fVLpV4StVzQlrqhRJwfEedGxHc9++eMPk84GBHfevbPN2rEA00tB6LU+5cWxz6/f/vMo31+fKBHStcDgBe3Y8eO5p633LexNu1k1HJZRHxfnLo/t7VEfLFG3BkRc2+/762f27FjR9v1KODYTtV/SCC1TbNT543Wck0t9aqI+O6u95ykv66l3hLLo5/ee8XtD3Y9Bng+AQCnkIn5ie+ryyM3RcSPRMRo13t6pI2IfaVtfm7hil1/1vUY4AgBAKeALbu3vHa5bT5cIn44hvfnso1SP7u4PPLv77hi18Ndj4HshvUfGlgVNt61cfTMJ8++vtayIyLO6nrPIJSIJ6OW/7JuafTjM9tnlrveA1kJAOjIptu3vn6kaT8bEe/seksXSi2fq2OL790zseehrrdARgIAOrB5bvKHSi23RsRrut7Sscei1Pftmdq9r+shkE3T9QDIZnx26v2lljvCwT8i4pyoZc/4rukbuh4C2QgAGKDNc5M3RcSvhJ+9o5Uo9SMTu6Z/IaqzkjAoI10PgCzGZ6d+uUT52a53nLJKvPPNX77wrK/svP+OrqdABgIABmDz7NR/LhE/0/WOU10p8YMbrrzw0AM77/+jrrfAsHO6DfpsYm7yx2stnwo/b8erlohrFqbnfrPrITDM/IMEfbR5duriEvH5iFjb9ZZV5lBpm0u8cyD0jxciQZ9s2b3lzBLx2+HgfzLW1qbduWnfphRvjgRdEADQJ23b/Hoc+bheTs6bRp5Z9ytdj4Bh5SkA6INn3+jnf3a9YxjUpr1s7+T8XV3vgGHjDAD02Lbbtq0pR37Xn15om1+9+JPXjnU9A4aNAIAee3p06f1RywVd7xgWJeJ7z13/yL/pegcMG08BQA9t2rdp7cihtQ9GxGu73jJk/va0xbHzZrbPHO56CAwLZwCgh5pDa68JB/9+eP0zaw5f3fUIGCYCAHqlRikRPtSmT2otN/qsAOgdAQA9snn35Dsj4k1d7xhiG8Znp3+g6xEwLAQA9EiJuKrrDcOulOp7DD0iAKAHLv7ktWNRy7audwy7GnHlxrs2jna9A4aBAIAeeO2rH/2nEfGKrnck8MrTnzz74q5HwDAQANADbamXdr0hi6aWy7reAMNAAEAPNLUIgMERANADAgB6oJZ6UdcbEnlb1wNgGAgAWKEtu7e8Jjz/P0ivnN41/aquR8BqJwBghZYiNnS9IZvDTet7DiskAGCFyvLIG7vekE4t39P1BFjtBACsUBNxdtcbsmlKPavrDbDaCQBYobZpz+h6QzptIwBghQQArFCpRQAM3pldD4DVTgDACtVaxrrekE1tWt9zWCEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACAhAQAACQkAAAgIQEAAAkJAABISAAAQEICAAASEgAAkJAAAICEBAAAJCQAACAhAQAACQkAAEhIAABAQgIAABISAACQkAAAgIQEAAAkJAAAICEBAAAJCQAASEgAAEBCAgAAEhIAAJCQAACA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",alt:"add colour"}):Object(b.jsx)("h4",{children:"Add Colour"})})},P=t.p+"static/media/save.adadac6c.png",D=function(){var A=Object(n.useState)(!0),e=Object(C.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)("no name creation"),r=Object(C.a)(a,2),i=r[0],u=r[1],d=Object(o.e)(),l=Object(n.useContext)(O),j=Object(C.a)(l,2),h=(j[0],j[1]),g=Object(n.useState)(!1),Q=Object(C.a)(g,2),I=Q[0],f=Q[1];return Object(n.useEffect)((function(){var A=E.a.auth().onAuthStateChanged((function(A){f(!!A)}));return function(){return A()}}),[]),I?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"text",placeholder:"Name Your Creation",id:"name-swatch",onKeyUp:function(A){u(A.target.value)},required:!0}),Object(b.jsx)("div",{className:"palette-menu-item",onMouseEnter:function(A){c(!1)},onMouseLeave:function(A){c(!0)},onClick:function(A){h({type:"savePalette",data:i}),d.push("/creations")},children:t?Object(b.jsx)("img",{src:P,alt:"save"}):Object(b.jsx)("h4",{children:"Share"})})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(s.b,{to:"/accountaccess",className:"palette-menu-item",children:"Sign In"})})},y=t(125),z=t(122),L=function(A){var e=A.key,t=A.colour,c=Object(n.useState)(!1),a=Object(C.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(!1),i=Object(C.a)(o,2),u=i[0],d=i[1],l=Object(n.useContext)(O),h=Object(C.a)(l,2),E=h[0],g=h[1];return Object(b.jsxs)("div",{className:"colour-generator",onMouseEnter:function(A){s(!0)},onMouseLeave:function(A){s(!1),d(!1)},style:{backgroundColor:t},children:[Object(b.jsx)(z.EditableInput,{value:t}),Object(b.jsxs)("div",{className:"panel-tools",style:{display:r?"flex":"none"},children:[4==E.length?null:Object(b.jsx)("img",{src:p,alt:"delete colour",onClick:function(){g({type:"removePanel",data:t})}}),Object(b.jsx)("img",{src:j,alt:"change colour",onMouseEnter:function(A){d(!0)}})]}),Object(b.jsx)("div",{style:{display:u?"block":"none"},children:Object(b.jsx)(y.a,{color:t,onChangeComplete:function(A){g({type:"updatePanel",data:{newColour:A.hex,oldColour:t}})}})})]},e)},R=function(A){var e=A.panels,t=Object(n.useContext)(O),c=Object(C.a)(t,2),a=c[0];c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"palette-menu",children:[6==a.length?null:Object(b.jsx)(w,{}),Object(b.jsx)(D,{})]}),Object(b.jsx)("div",{id:"palette-generator",children:e.map((function(A,e){return Object(b.jsx)(L,{panel:A,colour:A},e)}))})]})},M=(t(274),function(){var A=Object(n.useContext)(O),e=Object(C.a)(A,2),t=e[0];e[1];return Object(b.jsx)("div",{id:"palette-page",children:Object(b.jsx)(R,{panels:t})})}),T=t(123),H={signInFlow:"popup",signInOptions:[{provider:E.a.auth.EmailAuthProvider.PROVIDER_ID}],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};var G=function(){var A=Object(n.useState)(!1),e=Object(C.a)(A,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){var A=E.a.auth().onAuthStateChanged((function(A){c(!!A)}));return function(){return A()}}),[]),t?Object(b.jsxs)("div",{id:"logged-in",children:[Object(b.jsxs)("div",{id:"logged-in-header",children:[Object(b.jsxs)("h1",{children:["Welcome ",E.a.auth().currentUser.displayName,"!"]}),Object(b.jsx)("h4",{children:"You are signed in."})]}),Object(b.jsx)(s.b,{to:"/palette",id:"logged-in-button",children:"Start Creating"})]}):Object(b.jsx)("div",{className:"access-modal",children:Object(b.jsx)(T.FirebaseAuth,{uiConfig:H,firebaseAuth:E.a.auth()})})},U=(t(284),function(){return Object(b.jsx)("div",{id:"account-access",children:Object(b.jsx)(G,{})})}),q=function(){return Object(b.jsxs)(s.a,{basename:"/glasshouse",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(b.jsx)(o.a,{exact:!0,path:"/creations",component:N}),Object(b.jsx)(o.a,{exact:!0,path:"/palette",component:M}),Object(b.jsx)(o.a,{exact:!0,path:"/accountaccess",component:U})]})},F=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,289)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(A),n(A),c(A),a(A),r(A)}))};t(285),t(286);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),F()},78:function(A,e,t){},79:function(A,e,t){}},[[287,1,2]]]);
//# sourceMappingURL=main.5c76d468.chunk.js.map