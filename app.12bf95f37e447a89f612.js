(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,n){"use strict";n.r(t);n(134),n(127),n(121),n(120),n(118),n(115),n(111),n(104),n(101),n(99),n(97),n(94),n(91)},140:function(e,t,n){(e.exports=n(139)(!1)).push([e.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""])},141:function(e,t,n){var o=n(140);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(138)(o,a);o.locals&&(e.exports=o.locals)},142:function(e,t,n){n(141),n(136),n(135),e.exports=n(74)},15:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(1);class a{constructor(e,t){this.route=e,this.router=t,this.breadCrumbs$=this.router.events.filter(e=>e instanceof o.d).distinctUntilChanged().map(()=>this.getBreadCrumbs())}getBreadCrumbs(e=this.route.snapshot,t=[],n="/console"){const{firstChild:o,routeConfig:a,url:r}=e,i=a&&a.path;return i&&"console"!==i&&(n=[n].concat(r.map(({path:e})=>e)).join("/"),t.push({label:i.replace(/\/\:(\w+-?)*\w+/g,""),url:n})),o?this.getBreadCrumbs(o,t,n):t}}},4:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s});var o=n(0),a=n(17);const r=new o.w("TRANSLATIONS"),i=new o.w("LOCALE"),l=new o.w("DEFAULT_LOCALE");class s{constructor(e,t,n){this.translations=e,this.locale=t,this.defaultLocale=n,this.locale$=new a.Subject,this.defaultLocale$=new a.Subject,this.getValue=((e,t)=>{let n=e;return(t=t.replace(/\[(\d+)\]/g,".$1")).split(".").some(e=>{if(!n||"object"!=typeof n)return!0;n=n[e]}),"object"==typeof n?n&&n.toString():n})}get(e,t,n){const{defaultLocale:o,getValue:a,locale:r,translations:i}=this;let l=a(i[r],e);return void 0===l&&o&&o!==r&&(l=a(i[o],e)),null==(l=l&&l.replace(/{([^{}]+)}/g,(e,n)=>a(t,n.trim())))?e:l}getLocale(){return this.locale}setLocale(e){this.locale=e,this.locale$.next(e)}setDefaultLocale(e){this.defaultLocale=e,this.defaultLocale$.next(e)}}},5:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s});n(0);var o=n(143),a=n(4);const r=Object.create(null),i=e=>Object(o.a)(r,"function"==typeof e?(e=>e.keys().reduce((t,n)=>{const o=n.match(/([\w-]*[\w]+)\.i18n\.json$/)[1];return Object.assign(t[o]||(t[o]={}),e(n)),t},{}))(e):e),l=()=>r;class s{static forRoot(e={}){return{ngModule:s,providers:[{provide:a.d,useFactory:l},{provide:a.b,useValue:e.locale},{provide:a.a,useValue:e.defaultLocale},a.c]}}static forChild(){return{ngModule:s}}}},55:function(e,t,n){var o={"../dashboard/dashboard.module.ngfactory":[53,0,3],"../image/image.module.ngfactory":[51,0,2],"./console/console.module.ngfactory":[52,0,5],"./login/login.module.ngfactory":[50,0,4],"./repository/image-repository.module.ngfactory":[54,0,1]};function a(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.resolve().then(function(){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(o)},a.id=55,e.exports=a},74:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(5);Object(a.b)(n(77));class r{}var i=n(15),l=n(4);class s{constructor(e,t){this.breadCrumb=e,this.translate=t}ngOnInit(){this.breadCrumb.breadCrumbs$.combineLatest(this.translate.locale$.startWith(this.translate.getLocale())).subscribe(([e])=>{document.title=this.translate.get("alauda")+" | "+e.map(({label:e})=>this.translate.get("nav_"+e)).join(" - ")})}}var u=n(1),c=o.Ma({encapsulation:2,styles:[],data:{}});function d(e){return o.fb(0,[(e()(),o.Oa(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o.Na(1,212992,null,0,u.o,[u.b,o.Y,o.l,[8,null],o.j],null,null)],function(e,t){e(t,1,0)},null)}var b=o.Ka("#app",s,function(e){return o.fb(0,[(e()(),o.Oa(0,0,null,null,1,"app",[],null,null,null,d,c)),o.Na(1,114688,null,0,s,[i.a,l.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),p=n(2),f=n(6);class h{}class g{}var m=o.La(r,[s],function(e){return o.Ua([o.Va(512,o.l,o.Ha,[[8,[b]],[3,o.l],o.F]),o.Va(5120,o.B,o.bb,[[3,o.B]]),o.Va(4608,p.l,p.k,[o.B,[2,p.p]]),o.Va(5120,o.c,o.Qa,[]),o.Va(5120,o.z,o.Wa,[]),o.Va(5120,o.A,o.Ya,[]),o.Va(4608,f.b,f.q,[p.d]),o.Va(6144,o.Q,null,[f.b]),o.Va(4608,f.e,f.f,[]),o.Va(5120,f.c,function(e,t,n,o,a,r){return[new f.j(e,t),new f.n(n),new f.m(o,a,r)]},[p.d,o.H,p.d,p.d,f.e,o.Ia]),o.Va(4608,f.d,f.d,[f.c,o.H]),o.Va(135680,f.l,f.l,[p.d]),o.Va(4608,f.k,f.k,[f.d,f.l]),o.Va(6144,o.O,null,[f.k]),o.Va(6144,f.o,null,[f.l]),o.Va(4608,o.W,o.W,[o.H]),o.Va(4608,f.g,f.g,[p.d]),o.Va(4608,f.h,f.h,[p.d]),o.Va(5120,u.a,u.x,[u.l]),o.Va(4608,u.e,u.e,[]),o.Va(6144,u.g,null,[u.e]),o.Va(135680,u.p,u.p,[u.l,o.E,o.k,o.x,u.g]),o.Va(4608,u.f,u.f,[]),o.Va(5120,u.i,u.A,[u.y]),o.Va(5120,o.b,function(e){return[e]},[u.i]),o.Va(4608,i.a,i.a,[u.a,u.l]),o.Va(5120,l.d,a.c,[]),o.Va(4608,l.c,l.c,[l.d,l.b,l.a]),o.Va(1073742336,p.c,p.c,[]),o.Va(1024,o.p,f.p,[]),o.Va(1024,o.G,function(){return[u.t()]},[]),o.Va(512,u.y,u.y,[o.x]),o.Va(1024,o.d,function(e,t){return[f.s(e),u.z(t)]},[[2,o.G],u.y]),o.Va(512,o.f,o.f,[[2,o.d]]),o.Va(131584,o.h,o.h,[o.H,o.Ia,o.x,o.p,o.l,o.f]),o.Va(1073742336,o.g,o.g,[o.h]),o.Va(1073742336,f.a,f.a,[[3,f.a]]),o.Va(1024,u.s,u.v,[[3,u.l]]),o.Va(512,u.r,u.c,[]),o.Va(512,u.b,u.b,[]),o.Va(256,p.a,"/ng-rubick/",[]),o.Va(256,u.h,{useHash:void 0},[]),o.Va(1024,p.h,u.u,[p.n,[2,p.a],u.h]),o.Va(512,p.g,p.g,[p.h]),o.Va(512,o.k,o.k,[]),o.Va(512,o.E,o.T,[o.k,[2,o.U]]),o.Va(1024,u.j,function(){return[[{path:"console",loadChildren:"./console/console.module#ConsoleModule"},{path:"login",loadChildren:"./login/login.module#LoginModule"},{path:"",redirectTo:"/console",pathMatch:"full"}]]},[]),o.Va(1024,u.l,u.w,[o.h,u.r,u.b,p.g,o.x,o.E,o.k,u.j,u.h,[2,u.q],[2,u.k]]),o.Va(1073742336,u.n,u.n,[[2,u.s],[2,u.l]]),o.Va(1073742336,h,h,[]),o.Va(1073742336,a.a,a.a,[]),o.Va(1073742336,g,g,[]),o.Va(1073742336,r,r,[]),o.Va(256,o.e,!0,[]),o.Va(256,l.b,"zh",[]),o.Va(256,l.a,"en",[])])});Object(o.Ca)(),f.i().bootstrapModuleFactory(m)},75:function(e){e.exports={alauda:"灵雀云",nav_login:"登录",nav_dashboard:"概览",nav_image:"镜像",nav_repository:"镜像仓库",nav_detail:"详情",toggle_locale:"Toggle Locale"}},76:function(e){e.exports={alauda:"Alauda",nav_login:"Login",nav_dashboard:"Dashboard",nav_image:"Image",nav_repository:"Image Repository",nav_detail:"Detail",toggle_locale:"切换语言"}},77:function(e,t,n){var o={"./core.en.i18n.json":76,"./core.zh.i18n.json":75};function a(e){var t=r(e);return n(t)}function r(e){var t=o[e];if(!(t+1)){var n=new Error('Cannot find module "'+e+'".');throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=77}},[[142,6,0]]]);