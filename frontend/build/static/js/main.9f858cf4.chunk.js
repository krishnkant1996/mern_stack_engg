(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(e,t,a){e.exports=a(148)},123:function(e,t,a){},124:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(123),a(124),a(42)),l=a(22),s=a(20),u=a(15),m=a(17),d=a(37),p=a.n(d),g=a(190),f=a(191),h=a(192),E=a(229),v=a(57),b=a(193),y=a(232),w=a(199),C=a(189),S=a(222);function x(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(C.a,{color:"inherit",href:"http://localhost:5000/"},"products")," ",(new Date).getFullYear(),".")}var O=a(11),P=a(24),T=a.n(P),_="http://34.205.127.148:8000/api",j=localStorage.getItem("token"),I={headers:{token:" ".concat(j)}},R=function(e){return{type:"SET_ALERT",data:e}},N=function(){return localStorage.removeItem("token"),localStorage.removeItem("signIn"),function(e){e(A("/sign-in"))}},A=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},k=function(e){var t="undefined"!==typeof e.page?e.page:1,a="undefined"!==typeof e.search?e.search:"";return function(e){T.a.get(_+"/product/product-list/?page=".concat(t,"&search=").concat(a),I).then((function(t){e({type:"SET_PRODUCT",products:t.data.data})})).catch((function(t){e({type:"FETCH_PRODUCT_FAILED"})}))}},D=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var F=Object(O.b)((function(e){return{alert:e.alert.data,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{setSignIN:function(t){return e(function(e){return function(t){T.a.post(_+"/auth/sign-in",e).then((function(e){var a=e.data.message;t(R({open:!0,message:a,status:"success"})),localStorage.setItem("token",e.data.data.token),localStorage.setItem("signIn",!0),setTimeout((function(){t(A("/profile"))}),3e3)})).catch((function(e){var a=e.response.data.message;t(R({open:!0,message:a,status:"error"}))}))}}(t))},onSetAuthRedirectPath:function(){return e(A("/"))}}}))((function(e){var t=D(),a=r.a.useState({email:"",password:""}),n=Object(m.a)(a,2),o=n[0],c=n[1],i=function(e,t){c(Object(u.a)({},o,Object(s.a)({},e,t)))},l=o.email,d=o.password;return e.onSetAuthRedirectPath(),"/"!==e.authRedirectPath&&(e.history.push("/"),window.location.reload(!1)),r.a.createElement(f.a,{component:"main",maxWidth:"xs"},null,r.a.createElement(h.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(E.a,{className:t.avatar},r.a.createElement(p.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign In"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",value:l,onChange:function(e){i("email",e.target.value)}})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){i("password",e.target.value)}}))),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault(),e.setSignIN(o)}},"Sign In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(C.a,{href:"/forgot-password",variant:"body2"},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(C.a,{href:"/sign-up",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(S.a,{mt:5},r.a.createElement(x,null)))})),U=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var H=Object(O.b)((function(e){return{alert:e.alert.data,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{setSignUp:function(t){return e(function(e){return function(t){T.a.post(_+"/auth/sign-up",e).then((function(e){var a=e.data.message;t(R({open:!0,message:a,status:"success"})),setTimeout((function(){t(A("/sign-in"))}),3e3)})).catch((function(e){var a=e.response.data.message;t(R({open:!0,message:a,status:"error"}))}))}}(t))},onSetAuthRedirectPath:function(){return e(A("/"))}}}))((function(e){var t=U(),a=r.a.useState({first_name:"",last_name:"",email:"",password:""}),n=Object(m.a)(a,2),o=n[0],c=n[1],l=function(e,t){c(Object(u.a)({},o,Object(s.a)({},e,t)))},d=o.first_name,g=o.last_name,O=o.email,P=o.password,T=null;return e.onSetAuthRedirectPath(),"/"!==e.authRedirectPath&&(T=r.a.createElement(i.a,{to:e.authRedirectPath})),r.a.createElement(f.a,{component:"main",maxWidth:"xs"},T,r.a.createElement(h.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(E.a,{className:t.avatar},r.a.createElement(p.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:d,onChange:function(e){l("first_name",e.target.value)}})),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:g,onChange:function(e){l("last_name",e.target.value)}})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",value:O,onChange:function(e){l("email",e.target.value)}})),r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:P,onChange:function(e){l("password",e.target.value)}}))),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault(),e.setSignUp(o)}},"Sign Up"),r.a.createElement(b.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(C.a,{href:"/sign-in",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(S.a,{mt:5},r.a.createElement(x,null)))})),W=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var B=Object(O.b)((function(e){return{alert:e.alert.data,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{setForgotPassword:function(t){return e(function(e){return function(t){T.a.post(_+"/auth/forgot-password",e).then((function(e){var a=e.data.message;t(R({open:!0,message:a,status:"success"})),setTimeout((function(){t(A("/sign-in"))}),3e3)})).catch((function(e){var a=e.response.data.message;t(R({open:!0,message:a,status:"error"}))}))}}(t))},onSetAuthRedirectPath:function(){return e(A("/"))}}}))((function(e){var t=W(),a=r.a.useState({email:""}),n=Object(m.a)(a,2),o=n[0],c=n[1],i=o.email;return e.onSetAuthRedirectPath(),"/"!==e.authRedirectPath&&(e.history.push("/"),window.location.reload(!1)),r.a.createElement(f.a,{component:"main",maxWidth:"xs"},null,r.a.createElement(h.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(E.a,{className:t.avatar},r.a.createElement(p.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign In"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email",value:i,onChange:function(e){var t,a;t="email",a=e.target.value,c(Object(u.a)({},o,Object(s.a)({},t,a)))}}))),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault(),e.setForgotPassword(o)}},"submit"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(C.a,{href:"/sign-in",variant:"body2"},"Already have an account? Sign in")),r.a.createElement(b.a,{item:!0},r.a.createElement(C.a,{href:"/sign-up",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(S.a,{mt:5},r.a.createElement(x,null)))})),L=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var G=Object(O.b)((function(e){return{alert:e.alert.data,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{setNewPassword:function(t){return e(function(e){var t=e.code,a=e.password;return function(e){T.a.post(_+"/auth/reset-password/"+t,{password:a}).then((function(t){var a=t.data.message;e(R({open:!0,message:a,status:"success"})),setTimeout((function(){e(A("/sign-in"))}),3e3)})).catch((function(t){var a=t.response.data.message;e(R({open:!0,message:a,status:"error"}))}))}}(t))},onSetAuthRedirectPath:function(){return e(A("/"))}}}))((function(e){var t=L(),a=r.a.useState({password:""}),n=Object(m.a)(a,2),o=n[0],c=n[1],i=o.password;return e.onSetAuthRedirectPath(),"/"!==e.authRedirectPath&&(e.history.push("/"),window.location.reload(!1)),r.a.createElement(f.a,{component:"main",maxWidth:"xs"},null,r.a.createElement(h.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(E.a,{className:t.avatar},r.a.createElement(p.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"New Password"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"outlined",required:!0,fullWidth:!0,id:"password",label:"password",name:"password",autoComplete:"password",type:"password",value:i,onChange:function(e){var t,a;t="password",a=e.target.value,c(Object(u.a)({},o,Object(s.a)({},t,a)))}}))),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){t.preventDefault();var a={code:e.match.params.code,password:i};e.setNewPassword(a)}},"submit"))),r.a.createElement(S.a,{mt:5},r.a.createElement(x,null)))})),q=a(3),z=a(216),V=a(217),Y=a(218),J=a(231),M=a(221),X=a(198),$=a(219),K=a(220),Q=a(150),Z=a(200),ee=a(201),te=a(102),ae=a.n(te),ne=a(202),re=a(50),oe=r.a.createElement("div",null,r.a.createElement(Q.a,{button:!0,component:re.a,to:"/"},r.a.createElement(Z.a,null,r.a.createElement(ae.a,null)),r.a.createElement(ee.a,{primary:"Home"})),r.a.createElement(Q.a,{button:!0,component:re.a,to:"/product"},r.a.createElement(Z.a,null,r.a.createElement(ne.a,null)),r.a.createElement(ee.a,{primary:"Product"}))),ce=a(78),ie=a(224),le=a(208),se=a(209),ue=a(210),me=a(211),de=a(212),pe=a(203),ge=a(207),fe=a(205),he=a(204),Ee=a(223),ve=a(196),be=a(206),ye=a(228),we=a(227),Ce=Object(g.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{width:"100%",marginTop:e.spacing(2)}}}));var Se=Object(O.b)((function(e){return{error:e.category.error,category:e.category.category}}),(function(e){return{getCategory:function(t){return e((function(e){T.a.get(_+"/category/categoryList",I).then((function(t){e({type:"SET_CATEGORY",category:t.data.data})})).catch((function(t){e({type:"FETCH_CATEGORY_FAILED"})}))}))},addProduct:function(t){return e(function(e){return function(t){var a=e.product_name,n=e.category_id,r=e.id;r?T()({method:"put",url:_+"/product/update-product/"+r,headers:{token:localStorage.getItem("token")},data:{product_name:a,category_id:n}}).then((function(e){t(R({open:!0,message:e.data.message,status:"success"})),t(k({page:1,search:""}))})).catch((function(e){t(R({open:!0,message:e.response.data.message,status:"error"})),t({type:"FETCH_PRODUCT_FAILED"})})):T()({method:"post",url:_+"/product/add-product",headers:{token:localStorage.getItem("token")},data:{product_name:a,category_id:n}}).then((function(e){t(R({open:!0,message:e.data.message,status:"success"})),t(k({page:1,search:""}))})).catch((function(e){t(R({open:!0,message:e.response.data.message,status:"error"})),t({type:"FETCH_PRODUCT_FAILED"})}))}}(t))}}}))((function(e){var t=Ce(),a=e.category,o=e.addProduct,c=r.a.useState({id:"",product_name:"",category_id:""}),i=Object(m.a)(c,2),l=i[0],d=i[1],p=function(e,t){d(Object(u.a)({},l,Object(s.a)({},e,t)))},g=l.product_name,f=l.category_id;return Object(n.useEffect)((function(){0===e.category.length&&e.getCategory(),e.edit?d(e.data):d({id:"",product_name:"",category_id:""})}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(he.a,{id:"form-dialog-title"},"Add/Update Product"),r.a.createElement(fe.a,null,r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(ve.a,{variant:"outlined",className:t.formControl},r.a.createElement(ye.a,{htmlFor:"component-outlined"},"product name"),r.a.createElement(we.a,{id:"component-outlined",value:g,onChange:function(e){p("product_name",e.target.value)},label:"Item name"})),r.a.createElement(ve.a,{variant:"outlined",className:t.formControl},r.a.createElement(ye.a,{id:"demo-simple-select-outlined-label"},"Category"),r.a.createElement(Ee.a,{labelId:"demo-simple-select-outlined-label",id:"select-category",value:f,onChange:function(e){p("category_id",e.target.value)}},a.map((function(e){return r.a.createElement(be.a,{key:e.id,value:e.id},e.category_name)})))))),r.a.createElement(ge.a,null,r.a.createElement(w.a,{variant:"outlined",onClick:function(){e.handleClose(),d({id:"",product_name:"",category_id:""})}},"Cancel"),r.a.createElement(w.a,{variant:"outlined",onClick:function(){o(l),d({id:"",product_name:"",category_id:""}),e.handleClose()},color:"primary"},"Submit"))))})),xe=a(213),Oe=a(214),Pe=Object(g.a)((function(e){return{seeMore:{marginTop:e.spacing(3)},deleteIcon:{marginLeft:e.spacing(2)}}}));var Te=Object(O.b)((function(e){return{error:e.product.error,products:e.product.products,count:e.product.count}}),(function(e){return{getProduct:function(t){return e(k(t))},deleteProduct:function(t){return e(function(e){return function(t){T()({method:"delete",url:_+"/product/delete-product/"+e,headers:{token:localStorage.getItem("token")}}).then((function(e){t(R({open:!0,message:e.data.message,status:"success"})),t(k({page:1,search:""}))})).catch((function(e){t(R({open:!0,message:e.response.data.message,status:"error"})),t({type:"FETCH_PRODUCT_FAILED"})}))}}(t))}}}))((function(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),o=a[0],c=a[1],i=r.a.useState(!1),l=Object(m.a)(i,2),s=l[0],u=l[1],d=r.a.useState([]),p=Object(m.a)(d,2),g=p[0],f=p[1],h=Pe(),E=e.getProduct,v=e.products,C=e.deleteProduct,S=r.a.useState(1),x=Object(m.a)(S,2),O=x[0],P=x[1],T=r.a.useState(""),_=Object(m.a)(T,2),j=_[0],I=_[1];Object(n.useEffect)((function(){E({page:1,search:""})}),[E]);var R=parseInt(e.count/10);return R=e.count%10===0?R:R+1,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(y.a,{id:"standard-full-width",label:"Search",style:{margin:8},placeholder:"Search Here",fullWidth:!0,value:j,onChange:function(e){I(e.target.value),E({search:e.target.value,page:O})},margin:"normal",InputLabelProps:{shrink:!0}})),r.a.createElement(b.a,{item:!0,xs:4},r.a.createElement(w.a,{variant:"outlined",color:"primary",onClick:function(){u(!1),c(!0),f("")}},"Add Product"))),r.a.createElement(le.a,{size:"small"},r.a.createElement(se.a,null,r.a.createElement(ue.a,null,r.a.createElement(me.a,null,"Product Name"),r.a.createElement(me.a,null,"Category Name"),r.a.createElement(me.a,null,"Date"),r.a.createElement(me.a,null,"Action"))),0===v.length?r.a.createElement("caption",null,"No records foundP"):"",r.a.createElement(de.a,null,v.map((function(e){return r.a.createElement(ue.a,{key:e.id},r.a.createElement(me.a,null,e.product_name),r.a.createElement(me.a,null,e.category.category_name),r.a.createElement(me.a,null,e.createdAt),r.a.createElement(me.a,null,r.a.createElement(w.a,{onClick:function(){c(!0),u(!0),f(e)},variant:"outlined",color:"primary"},r.a.createElement(xe.a,null)),r.a.createElement(w.a,{onClick:function(){C(e.id)},variant:"outlined",color:"secondary",className:h.deleteIcon},r.a.createElement(Oe.a,null))))})))),r.a.createElement(ie.a,{count:R,page:O,onChange:function(e,t){P(t)}}),r.a.createElement(Se,{open:o,handleClose:function(){c(!1)},edit:s,data:g}))})),_e=Object(g.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(s.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var je=Object(O.b)((function(e){return{error:e.product.error,products:e.product.products}}),(function(e){return{getProduct:function(){return e(k())}}}))((function(e){var t=_e();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(Te,null)))))})),Ie=a(215),Re=Object(g.a)((function(e){return{root:{flexGrow:1},paperTitle:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},Cardroot:{minWidth:275,padding:e.spacing(5)}}}));var Ne=Object(O.b)((function(e){return{user:e.auth.user}}),(function(e){return{getUserDetails:function(){return e((function(e){T.a.get(_+"/auth/user-details",I).then((function(t){e({type:"SET_USER",user:t.data.data})})).catch((function(t){e(A("/sign-in"))}))}))}}}))((function(e){var t=e.getUserDetails,a=e.user;Object(n.useEffect)((function(){t()}),[t]);var o=Re();return r.a.createElement("div",{className:o.root},r.a.createElement(Ie.a,{className:o.Cardroot},r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:o.paperTitle},"Full Name :- ")),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:o.paper},a.first_name," "," "," ",a.last_name)),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:o.paperTitle},"Email :- ")),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:o.paper},a.email)))))})),Ae=Object(g.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(s.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var ke=Object(O.b)((function(e){return{alert:e.alert.data,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{logout:function(){return e(N())},onSetAuthRedirectPath:function(){return e(A("/"))}}}))((function(e){var t=Ae(),a=r.a.useState(!0),n=Object(m.a)(a,2),o=n[0],c=n[1];return e.onSetAuthRedirectPath(),"/"!==e.authRedirectPath&&(e.history.push("/"),window.location.reload(!1)),r.a.createElement("div",{className:t.root},null,r.a.createElement(h.a,null),r.a.createElement(z.a,{position:"absolute",className:Object(q.a)(t.appBar,o&&t.appBarShift)},r.a.createElement(V.a,{className:t.toolbar},r.a.createElement(Y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(q.a)(t.menuButton,o&&t.menuButtonHidden)},r.a.createElement($.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Product Based"),r.a.createElement(w.a,{color:"inherit",onClick:e.logout},"Logout"))),r.a.createElement(J.a,{variant:"permanent",classes:{paper:Object(q.a)(t.drawerPaper,!o&&t.drawerPaperClose)},open:o},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(Y.a,{onClick:function(){c(!1)}},r.a.createElement(K.a,null))),r.a.createElement(M.a,null),r.a.createElement(X.a,null,oe),r.a.createElement(M.a,null)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(f.a,{maxWidth:"lg",className:t.container},r.a.createElement(i.b,{exact:!0,path:"/",component:Ne}),r.a.createElement(i.b,{exact:!0,path:"/product",component:je}),r.a.createElement(S.a,{pt:4},r.a.createElement(x,null)))))})),De=a(226),Fe=a(225);function Ue(e){return r.a.createElement(Fe.a,Object.assign({elevation:6,variant:"filled"},e))}var He=Object(O.b)((function(e){return{alert:e.alert.data}}),(function(e){return{setAlert:function(t){return e(R(t))}}}))((function(e){var t=e.alert,a=t.open,n=t.status,o=t.message,c="top",i="right",l=function(){e.setAlert(Object(u.a)({},e.alert,{open:!1}))};return r.a.createElement("div",null,r.a.createElement(De.a,{open:a,autoHideDuration:6e3,anchorOrigin:{vertical:c,horizontal:i},key:"".concat(c,",").concat(i),onClose:l},r.a.createElement(Ue,{onClose:l,severity:n},o)))})),We=Object(l.a)(),Be=!!localStorage.getItem("signIn")&&localStorage.getItem("signIn"),Le=function(){return r.a.createElement(i.c,{history:We},r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/new-password/:code",component:G}),Be?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{path:"/",component:ke})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/",component:F}),r.a.createElement(i.b,{exact:!0,path:"/sign-in",component:F}),r.a.createElement(i.b,{exact:!0,path:"/sign-up",component:H}),r.a.createElement(i.b,{exact:!0,path:"/forgot-password",component:B}))),r.a.createElement(He,null)))};var Ge=function(){return r.a.createElement(Le,null)},qe=a(48),ze=a(103),Ve=function(e,t){return Object(u.a)({},e,{},t)},Ye={token:null,userId:null,error:null,loading:!1,user:{},authRedirectPath:"/"},Je=function(e,t){return Ve(e,{error:null,loading:!0})},Me=function(e,t){return Ve(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Xe=function(e,t){return Ve(e,{user:t.user})},$e=function(e,t){return Ve(e,{error:t.error,loading:!1})},Ke=function(e,t){return Ve(e,{token:null,userId:null})},Qe=function(e,t){return Ve(e,{authRedirectPath:t.path})},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Je(e);case"AUTH_SUCCESS":return Me(e,t);case"AUTH_FAIL":return $e(e,t);case"SET_USER":return Xe(e,t);case"AUTH_LOGOUT":return Ke(e);case"SET_AUTH_REDIRECT_PATH":return Qe(e,t);default:return e}},et={products:[],error:!1,count:0,building:!1},tt=function(e,t){return Ve(e,{products:t.products.data,count:t.products.count,error:!1,building:!1})},at=function(e,t){return Ve(e,{error:!0})},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCT":return tt(e,t);case"FETCH_PRODUCT_FAILED":return at(e);default:return e}},rt={category:[],error:!1,building:!1},ot=function(e,t){return Ve(e,{category:t.category,error:!1,building:!1})},ct=function(e,t){return Ve(e,{error:!0})},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return ot(e,t);case"FETCH_CATEGORY_FAILED":return ct(e);default:return e}},lt={data:{open:!1,status:"success",message:"This is a success message!"}},st=function(e,t){return Ve(e,{data:t.data})},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERT":return st(e,t);default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=Object(qe.c)({auth:Ze,product:nt,category:it,alert:ut}),dt=qe.d,pt=Object(qe.e)(mt,dt(Object(qe.a)(ze.a)));c.a.render(r.a.createElement(O.a,{store:pt},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.9f858cf4.chunk.js.map