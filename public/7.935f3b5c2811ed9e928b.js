(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{iydT:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return P});var c=n("ofXK"),o=n("PCNd"),s=n("tyNb"),i=n("tNVQ"),r=n("Scbg"),a=n("jrsp"),l=n("fXoL"),u=n("+9sT"),h=n("/0IE"),d=n("q6qQ");function b(t,e){if(1&t&&(l.Sb(0,"span",4),l.zc(1),l.Rb()),2&t){const t=e.ngIf;l.Bb(1),l.Bc(' "',t.fullName,'" ')}}function f(t,e){1&t&&(l.Sb(0,"dax365-logout"),l.Sb(1,"span"),l.zc(2,"logout"),l.Rb(),l.Rb())}let p=(()=>{class t{constructor(t){this._authUserStateService=t,this.APP_ROUTES=a.a}ngOnInit(){this.isAuthenticated$=this._authUserStateService.selectIsAuthenticated(),this.authUserProfile$=this._authUserStateService.selectAuthUserProfile()}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(u.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["dax365-header"]],decls:10,vars:7,consts:[[1,"dax365-flex-sb-c"],[3,"routerLink"],["class","username",4,"ngIf"],[4,"ngIf"],[1,"username"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"a",1),l.Nb(2,"dax365-logo"),l.Rb(),l.Sb(3,"h5"),l.zc(4,"Shopping list"),l.Rb(),l.Rb(),l.Sb(5,"div",0),l.xc(6,b,2,1,"span",2),l.cc(7,"async"),l.xc(8,f,3,0,"dax365-logout",3),l.cc(9,"async"),l.Rb()),2&t&&(l.Bb(1),l.hc("routerLink",e.APP_ROUTES.DEFAULT),l.Bb(5),l.hc("ngIf",l.dc(7,3,e.authUserProfile$)),l.Bb(2),l.hc("ngIf",l.dc(9,5,e.isAuthenticated$)))},directives:[s.b,h.a,c.l,d.a],pipes:[c.b],styles:["[_nghost-%COMP%]{position:fixed;top:0;right:0;bottom:auto;left:0;padding:0 30px;background-color:#232d36;height:80px;z-index:1000}[_nghost-%COMP%]     dax365-logo{margin-right:30px}[_nghost-%COMP%]     dax365-logo b{margin-right:15px}.username[_ngcontent-%COMP%]{font-weight:700;display:inline-block;margin-right:20px;text-transform:uppercase}.username[_ngcontent-%COMP%], dax365-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}"]}),t})();function g(t,e){1&t&&l.Nb(0,"dax365-header",1)}const S=s.c.forChild([{path:"",component:(()=>{class t{constructor(t){this._authUserStateService=t}ngOnInit(){this.isProfileCompleted$=this._authUserStateService.selectIsProfileCompleted()}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(u.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["dax365-home"]],decls:3,vars:3,consts:[["class","dax365-flex-sb-c",4,"ngIf"],[1,"dax365-flex-sb-c"]],template:function(t,e){1&t&&(l.xc(0,g,1,0,"dax365-header",0),l.cc(1,"async"),l.Nb(2,"router-outlet")),2&t&&l.hc("ngIf",l.dc(1,1,e.isProfileCompleted$))},directives:[c.l,s.d,p],pipes:[c.b],styles:[""]}),t})(),children:[{path:"",redirectTo:a.c.SHOPPINGS,pathMatch:"full"},{path:a.c.SHOPPINGS,canLoad:[i.a],loadChildren:()=>Promise.all([n.e(3),n.e(0),n.e(12)]).then(n.bind(null,"K8XF")).then(t=>t.ShoppingsModule)},{path:a.c.COMPLETE_PROFILE,canActivate:[r.a],loadChildren:()=>Promise.all([n.e(3),n.e(0),n.e(11)]).then(n.bind(null,"o+Pj")).then(t=>t.CompleteProfileModule)}]}]);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[c.c,S,o.a]]}),t})()},q6qQ:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var c=n("wHSu"),o=n("fXoL"),s=n("UbJi"),i=n("+9sT"),r=n("jrsp"),a=n("6NWb");const l=["*"];let u=(()=>{class t{constructor(t,e,n){this._angularFireAuth=t,this._authUserStateService=e,this._coreRouterService=n,this.faSignOutAlt=c.d}logout(){this._angularFireAuth.signOut().then(()=>{this._authUserStateService.clearAuthState(),this._coreRouterService.goToLoginPage()}).catch(t=>{console.error(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(s.a),o.Mb(i.a),o.Mb(r.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["dax365-logout"]],ngContentSelectors:l,decls:3,vars:1,consts:[["type","button",3,"click"],[3,"icon"]],template:function(t,e){1&t&&(o.gc(),o.Sb(0,"button",0),o.Zb("click",function(){return e.logout()}),o.fc(1),o.Nb(2,"fa-icon",1),o.Rb()),2&t&&(o.Bb(2),o.hc("icon",e.faSignOutAlt))},directives:[a.a],styles:["fa-icon[_ngcontent-%COMP%]{color:#ecca30;margin:10px}"]}),t})()}}]);