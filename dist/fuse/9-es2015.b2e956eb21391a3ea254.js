(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{nJkw:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("Nhcz"),a=t("/q54"),o=t("bujt"),r=t("Fwaw"),c=t("5GAg"),h=t("omvX"),b=t("Mr+X"),d=t("Gi4r"),p=t("VDRc"),g=t("IP0z"),f=t("s7LF"),m=t("i1kN"),x=t("wd5q"),A=t("SVse"),y=t("c3gj"),_=t("k1t7"),k=t("VMjx"),v=t("IheW");class I{constructor(l){this._http=l}addAdwordsAccount(l){return this._http.post(k.a.AdwordsAccount.addAccount,l)}getAccounts(){return this._http.get(k.a.AdwordsAccount.getAccounts)}}I.ngInjectableDef=e.Mb({factory:function(){return new I(e.Qb(v.c))},token:I,providedIn:"root"});var w=t("H0VJ"),C=t("K9xE"),P=t("mZtN"),S=t("f3OE"),O=t("5vgI");class q extends y.a{constructor(l,n,t,e,u,i,s){super(),this._fuseProgressiveBarService=l,this._dialogService=n,this._fuseNavigationService=t,this._addAdwordsAccountsService=e,this._sessionService=u,this._router=i,this._fuseSlashScreenService=s,this.isConnected=!1,this._adsAccountIdPipe=new O.a}ngOnInit(){this.initForm()}completeAccountConnection(){this._router.navigateByUrl("/gan-tracking/chien-dich")}post(){const l=this.generatePostObject();this._fuseProgressiveBarService.show();const n=this._addAdwordsAccountsService.addAdwordsAccount(l).subscribe(l=>{this._dialogService._openInfoDialog(l.messages[0]),this.isConnected=!0,this._fuseNavigationService.reloadNavigation(),this._fuseProgressiveBarService.hide()},l=>{l.error.messages&&this._dialogService._openErrorDialog(l.error),this._fuseProgressiveBarService.hide()});this.subscriptions.push(n)}onClickBtnSubmit(){this.onSubmit()}initForm(){this.form=this.fb.group({adWordId:[null,[f.v.required]]})}generatePostObject(){const l=Object.assign({},this.form.value);return l.adWordId=l.adWordId.replace(/[^a-zA-Z0-9 ]/g,""),l}onPressId(l){return l>=48&&l<=57||45===l}}var M=t("iInd"),N=e.ob({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:30px;width:100%}.submit-button[_ngcontent-%COMP%]{height:58px;margin:4px 0 2px 2px;width:120px}.step[_ngcontent-%COMP%]{color:#039be5}.box[_ngcontent-%COMP%]{padding:30px}.loginWithGoogle[_ngcontent-%COMP%]{display:table;margin:20px auto 10px}.loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8b0000;background:#fff;padding:5px 10px}.g-sign-in-button[_ngcontent-%COMP%]{background:#4285f4;height:40px;border-width:0;border-radius:2px;white-space:nowrap;padding:0;margin:10px;display:inline-block;width:210px;color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.25);transition:background-color 218ms,border-color 218ms,box-shadow 218ms}.text-container[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-family:Roboto,arial,sans-serif;font-weight:500;letter-spacing:.21px;font-size:14px;border:none;text-align:center;width:166px;padding-top:10px}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{padding:0 5px 0 0;font-size:12px}}"]],data:{}});function R(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,43,"div",[["gdArea","content"]],null,null,null,null,null)),e.pb(1,671744,null,0,s.c,[e.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(l()(),e.qb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[3]"])),(l()(),e.Ib(-1,null,[" VUI L\xd2NG \u0110\u1ed2NG \xdd Y\xcaU C\u1ea6U K\u1ebeT N\u1ed0I"])),(l()(),e.qb(8,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["B\u01b0\u1edbc 1: "])),(l()(),e.Ib(-1,null,[" Truy c\u1eadp l\u1ea1i t\xe0i kho\u1ea3n AdWords c\u1ee7a b\u1ea1n "])),(l()(),e.qb(12,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["adwords.google.com"])),(l()(),e.Ib(-1,null,[" v\xe0 b\u1ea5m v\xe0o icon \u1edf menu b\xean tr\xe1i "])),(l()(),e.qb(15,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,0,"img",[["src","/assets/images/adwords-caidat-b1-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),e.qb(18,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["B\u01b0\u1edbc 2: "])),(l()(),e.Ib(-1,null,[" Sau \u0111\xf3 b\u1ea5m v\xe0o "])),(l()(),e.qb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Ng\u01b0\u1eddi Qu\u1ea3n L\xfd "])),(l()(),e.Ib(-1,null,[" v\xe0 b\u1ea5m "])),(l()(),e.qb(24,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Ch\u1ea5p Thu\u1eadn"])),(l()(),e.Ib(-1,null,[" (n\u1ebfu b\u1ea1n kh\xf4ng th\u1ea5 ng\u01b0\u1eddi qu\u1ea3n l\xfd vui l\xf2ng ch\u1edd kho\u1ea3ng 5 ph\xfat)"])),(l()(),e.qb(27,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b2-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),e.qb(29,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["B\u01b0\u1edbc 3: "])),(l()(),e.Ib(-1,null,["M\u1ed9t th\xf4ng b\xe1o hi\u1ec7n ra, b\u1ea1n ch\u1ecdn "])),(l()(),e.qb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["C\u1ea5p Quy\u1ec1n Truy C\u1eadp"])),(l()(),e.qb(35,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b3-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,6,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,5,"button",[["aria-label","T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I"],["color","warn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.completeAccountConnection()&&e),e},o.d,o.b)),e.pb(39,180224,null,0,r.b,[e.k,c.h,[2,h.a]],{color:[0,"color"]},null),(l()(),e.qb(40,0,null,0,2,"mat-icon",[["class","done_outline mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,b.b,b.a)),e.pb(41,9158656,null,0,d.b,[e.k,d.d,[8,null],[2,d.a]],null,null),(l()(),e.Ib(-1,0,["done_outline"])),(l()(),e.Ib(-1,0,[" T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I "]))],function(l,n){l(n,1,0,"content"),l(n,39,0,"warn"),l(n,41,0)},function(l,n){l(n,38,0,e.Ab(n,39).disabled||null,"NoopAnimations"===e.Ab(n,39)._animationMode),l(n,40,0,e.Ab(n,41).inline,"primary"!==e.Ab(n,41).color&&"accent"!==e.Ab(n,41).color&&"warn"!==e.Ab(n,41).color)})}function E(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,54,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,51,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),e.pb(2,671744,null,0,p.c,[e.k,a.j,[2,p.k],a.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),e.pb(3,1720320,null,0,p.d,[e.k,e.y,g.b,a.j,[2,p.j],a.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),e.qb(4,0,null,null,13,"div",[["class","connect-button"],["gdArea","connect-button"]],null,null,null,null,null)),e.pb(5,671744,null,0,s.c,[e.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(l()(),e.qb(6,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[1]"])),(l()(),e.Ib(-1,null,[" K\u1ebeT N\u1ed0I NHANH B\u1eb0NG GMAIL"])),(l()(),e.qb(11,0,null,null,1,"p",[["style","text-align: justify"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" S\u1eed d\u1ee5ng t\xe0i kho\u1ea3n Gmail qu\u1ea3n l\xfd Google AdWords, b\u1ea5m k\u1ebft n\u1ed1i nhanh \u0111\u1ec3 ho\xe0n t\u1ea5t qu\xe1 tr\xecnh k\u1ebft n\u1ed1i"])),(l()(),e.qb(13,0,null,null,4,"div",[["class","loginWithGoogle"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,3,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,o.d,o.b)),e.pb(15,180224,null,0,r.b,[e.k,c.h,[2,h.a]],null,null),(l()(),e.qb(16,0,null,0,0,"img",[["alt",""],["src","https://image.flaticon.com/icons/png/512/281/281769.png"],["style","height: 20px; width:20px; margin-top: -5px; margin-right: 8px"]],null,null,null,null,null)),(l()(),e.Ib(-1,0,["K\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"])),(l()(),e.qb(18,0,null,null,34,"div",[["class","input-side"],["gdArea","input-side"]],null,null,null,null,null)),e.pb(19,671744,null,0,s.c,[e.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(l()(),e.qb(20,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),e.qb(21,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[2]"])),(l()(),e.Ib(-1,null,[" K\u1ebeT N\u1ed0I TH\xd4NG QUA M\xc3 ADWORDS CID"])),(l()(),e.qb(25,0,null,null,9,"p",[["style","text-align: justify"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["B\u01b0\u1edbc 1: "])),(l()(),e.Ib(-1,null,[" \u0110\u0103ng nh\u1eadp "])),(l()(),e.qb(29,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["adwords.google.com"])),(l()(),e.Ib(-1,null,[", ID t\xe0i kho\u1ea3n adwords c\u1ee7a b\u1ea1n s\u1ebd n\u1eb1m \u1edf g\xf3c ph\u1ea3i tr\xean c\xf9ng. "])),(l()(),e.qb(32,0,null,null,1,"span",[["style","color: deeppink;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["VD: 552-999-5152"])),(l()(),e.Ib(-1,null,[" l\xe0 ID t\xe0i kho\u1ea3n Adwords c\u1ee7a b\u1ea1n"])),(l()(),e.qb(35,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var u=!0;return"submit"===n&&(u=!1!==e.Ab(l,37).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Ab(l,37).onReset()&&u),u},null,null)),e.pb(36,16384,null,0,f.A,[],null,null),e.pb(37,540672,null,0,f.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Fb(2048,null,f.c,null,[f.j]),e.pb(39,16384,null,0,f.q,[[4,f.c]],null,null),(l()(),e.qb(40,0,null,null,12,"div",[["fxLayout","row"]],null,null,null,null,null)),e.pb(41,671744,null,0,p.c,[e.k,a.j,[2,p.k],a.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.qb(42,0,null,null,4,"app-input-text",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"data-id",0]],[[null,"keypress"]],function(l,n,t){var e=!0;return"keypress"===n&&(e=!1!==l.component.onPressId(t.keyCode)&&e),e},m.b,m.a)),e.pb(43,671744,null,0,f.h,[[3,f.c],[8,null],[8,null],[8,null],[2,f.y]],{name:[0,"name"]},null),e.Fb(2048,null,f.o,null,[f.h]),e.pb(45,16384,null,0,f.p,[[4,f.o]],null,null),e.pb(46,245760,null,0,x.a,[e.k,[6,f.o]],{placeholder:[0,"placeholder"],title:[1,"title"],errors:[2,"errors"],pristine:[3,"pristine"]},null),(l()(),e.qb(47,0,null,null,5,"button",[["aria-label","K\u1ebft n\u1ed1i"],["class","submit-button"],["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onClickBtnSubmit()&&e),e},o.d,o.b)),e.pb(48,180224,null,0,r.b,[e.k,c.h,[2,h.a]],{color:[0,"color"]},null),(l()(),e.qb(49,0,null,0,2,"mat-icon",[["class","add_box mat-icon notranslate"],["matSuffix",""],["role","img"],["style","font-size: 20px"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,b.b,b.a)),e.pb(50,9158656,null,0,d.b,[e.k,d.d,[8,null],[2,d.a]],null,null),(l()(),e.Ib(-1,0,["wifi"])),(l()(),e.Ib(-1,0,[" K\u1ebft n\u1ed1i "])),(l()(),e.fb(16777216,null,null,1,null,R)),e.pb(54,16384,null,0,A.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,"row","column"),l(n,3,0,"20px"),l(n,5,0,"connect-button"),l(n,19,0,"input-side"),l(n,37,0,t.form),l(n,41,0,"row"),l(n,43,0,"adWordId"),l(n,46,0,"5456445193","Adwords ID",t.getMessageErrors("adWordId"),!0),l(n,48,0,"accent"),l(n,50,0),l(n,54,0,t.isConnected)},function(l,n){l(n,14,0,e.Ab(n,15).disabled||null,"NoopAnimations"===e.Ab(n,15)._animationMode),l(n,35,0,e.Ab(n,39).ngClassUntouched,e.Ab(n,39).ngClassTouched,e.Ab(n,39).ngClassPristine,e.Ab(n,39).ngClassDirty,e.Ab(n,39).ngClassValid,e.Ab(n,39).ngClassInvalid,e.Ab(n,39).ngClassPending),l(n,42,0,e.Ab(n,45).ngClassUntouched,e.Ab(n,45).ngClassTouched,e.Ab(n,45).ngClassPristine,e.Ab(n,45).ngClassDirty,e.Ab(n,45).ngClassValid,e.Ab(n,45).ngClassInvalid,e.Ab(n,45).ngClassPending,e.Ab(n,46).id),l(n,47,0,e.Ab(n,48).disabled||null,"NoopAnimations"===e.Ab(n,48)._animationMode),l(n,49,0,e.Ab(n,50).inline,"primary"!==e.Ab(n,50).color&&"accent"!==e.Ab(n,50).color&&"warn"!==e.Ab(n,50).color)})}function T(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-add-adwords-accounts",[],null,null,null,E,N)),e.pb(1,245760,null,0,q,[_.a,w.a,C.a,I,P.a,M.p,S.a],null,null)],function(l,n){l(n,1,0)},null)}var j=e.mb("app-add-adwords-accounts",q,T,{},{},[]),W=t("POq0"),L=t("Xd0L"),D=t("HsOI");t("mrSG");const G=new e.p("config"),$=new e.p("NEW_CONFIG"),V=new e.p("INITIAL_CONFIG"),B={suffix:"",prefix:"",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};var F;!function(l){l.SEPARATOR="separator",l.COMMA_SEPARATOR="comma_separator",l.DOT_SEPARATOR="dot_separator"}(F||(F={}));let K=class{constructor(l){this._config=l,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this.separator=((l,n,t,e)=>{const u=(l+="").split(t),i=u.length>1?`${t}${u[1]}`:"";let s=u[0];const a=/(\d+)(\d{3})/;for(;a.test(s);)s=s.replace(a,"$1"+n+"$2");return void 0===e?s+i:0===e?s:s+i.substr(0,e+1)}),this.percentage=(l=>Number(l)>=0&&Number(l)<=100),this.getPrecision=(l=>{const n=l.split(".");return n.length>1?Number(n[n.length-1]):1/0}),this.checkInputPrecision=((l,n,t)=>{if(n<1/0){let e;e="."===t?new RegExp(`\\.\\d{${n}}.*$`):new RegExp(`,\\d{${n}}.*$`);const u=l.match(e);u&&u[0].length-1>n?l=l.substring(0,l.length-1):0===n&&l.endsWith(t)&&(l=l.substring(0,l.length-1))}return l}),this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.validation=this._config.validation}applyMaskWithPattern(l,n){const[t,e]=n;return this.customPattern=e,this.applyMask(l,t)}applyMask(l,n,t=0,e=(()=>{})){if(null==l||void 0===n)return"";let u=0,i="",s=!1,a=!1,o=1;l.slice(0,this.prefix.length)===this.prefix&&(l=l.slice(this.prefix.length,l.length));const r=l.toString().split("");if("IP"===n&&(this.ipError=!!(r.filter(l=>"."===l).length<3&&r.length<7),n="099.099.099.099"),n.startsWith("percent")){if(l.match("[a-z]|[A-Z]")||l.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)){l=this._checkInput(l);const t=this.getPrecision(n);l=this.checkInputPrecision(l,t,".")}i=this.percentage(l)?l:l.substring(0,l.length-1)}else if(n.startsWith(F.SEPARATOR)||n.startsWith(F.DOT_SEPARATOR)||n.startsWith(F.COMMA_SEPARATOR)){(l.match("[w\u0430-\u044f\u0410-\u042f]")||l.match("[\u0401\u0451\u0410-\u044f]")||l.match("[a-z]|[A-Z]")||l.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/))&&(l=this._checkInput(l));const e=this.getPrecision(n);let u;n.startsWith(F.SEPARATOR)&&l.includes(",")&&l.endsWith(",")&&l.indexOf(",")!==l.lastIndexOf(",")&&(l=l.substring(0,l.length-1)),n.startsWith(F.DOT_SEPARATOR)&&(-1!==l.indexOf(".")&&l.indexOf(".")===l.lastIndexOf(".")&&l.indexOf(".")>3&&(l=l.replace(".",",")),l=l.length>1&&"0"===l[0]&&","!==l[1]?l.slice(1,l.length):l),n.startsWith(F.COMMA_SEPARATOR)&&(l=l.length>1&&"0"===l[0]&&"."!==l[1]?l.slice(1,l.length):l),n.startsWith(F.SEPARATOR)?(l.match(/[@#!$%^&*()_+|~=`{}\[\]:.";<>?\/]/)&&(l=l.substring(0,l.length-1)),u=(l=this.checkInputPrecision(l,e,",")).replace(/\s/g,""),i=this.separator(u," ",",",e)):n.startsWith(F.DOT_SEPARATOR)?(l.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)&&(l=l.substring(0,l.length-1)),u=(l=this.checkInputPrecision(l,e,",")).replace(/\./g,""),i=this.separator(u,".",",",e)):n.startsWith(F.COMMA_SEPARATOR)&&(u=l.replace(/,/g,""),i=this.separator(u,",",".",e));const s=i.indexOf(",")-l.indexOf(","),r=i.length-l.length;if(r>0&&","!==i[t]){a=!0;let l=0;do{this._shift.add(t+l),l++}while(l<r)}else 0!==s&&t>0&&!(i.indexOf(",")>=t&&t>3)||!(i.indexOf(".")>=t&&t>3)&&r<=0?(this._shift.clear(),a=!0,o=r,this._shift.add(t+=r)):this._shift.clear()}else for(let b=0,d=r[0];b<r.length&&u!==n.length;d=r[++b])if(this._checkSymbolMask(d,n[u])&&"?"===n[u+1])i+=d,u+=2;else if("*"===n[u+1]&&s&&this._checkSymbolMask(d,n[u+2]))i+=d,u+=3,s=!1;else if(this._checkSymbolMask(d,n[u])&&"*"===n[u+1])i+=d,s=!0;else if("?"===n[u+1]&&this._checkSymbolMask(d,n[u+2]))i+=d,u+=3;else if(this._checkSymbolMask(d,n[u])||this.hiddenInput&&this.maskAvailablePatterns[n[u]]&&this.maskAvailablePatterns[n[u]].symbol===d){if("H"===n[u]&&Number(d)>2){const l=/[*?]/g.test(n.slice(0,u+=1))?r.length:u;this._shift.add(l+this.prefix.length||0),b--;continue}if("h"===n[u]&&"2"===i&&Number(d)>3)continue;if("m"===n[u]&&Number(d)>5){const l=/[*?]/g.test(n.slice(0,u+=1))?r.length:u;this._shift.add(l+this.prefix.length||0),b--;continue}if("s"===n[u]&&Number(d)>5){const l=/[*?]/g.test(n.slice(0,u+=1))?r.length:u;this._shift.add(l+this.prefix.length||0),b--;continue}if("d"===n[u]&&Number(d)>3){const l=/[*?]/g.test(n.slice(0,u+=1))?r.length:u;this._shift.add(l+this.prefix.length||0),b--;continue}if("d"===n[u-1]&&Number(l.slice(u-1,u+1))>31)continue;if("M"===n[u]&&Number(d)>1){const l=/[*?]/g.test(n.slice(0,u+=1))?r.length:u;this._shift.add(l+this.prefix.length||0),b--;continue}if("M"===n[u-1]&&Number(l.slice(u-1,u+1))>12)continue;i+=d,u++}else if(-1!==this.maskSpecialCharacters.indexOf(n[u])){i+=n[u];const l=/[*?]/g.test(n.slice(0,++u))?r.length:u;this._shift.add(l+this.prefix.length||0),b--}else this.maskSpecialCharacters.indexOf(d)>-1&&this.maskAvailablePatterns[n[u]]&&this.maskAvailablePatterns[n[u]].optional?(u++,b--):"*"===this.maskExpression[u+1]&&this._findSpecialChar(this.maskExpression[u+2])&&this._findSpecialChar(d)===this.maskExpression[u+2]&&s?(u+=3,i+=d):"?"===this.maskExpression[u+1]&&this._findSpecialChar(this.maskExpression[u+2])&&this._findSpecialChar(d)===this.maskExpression[u+2]&&s&&(u+=3,i+=d);i.length+1===n.length&&-1!==this.maskSpecialCharacters.indexOf(n[n.length-1])&&(i+=n[n.length-1]);let c=t+1;for(;this._shift.has(c);)o++,c++;e(this._shift.has(t)?o:0,a),o<0&&this._shift.clear();let h=this.suffix?`${this.prefix}${i}${this.suffix}`:`${this.prefix}${i}`;return 0===i.length&&(h=`${this.prefix}${i}`),h}_findSpecialChar(l){return this.maskSpecialCharacters.find(n=>n===l)}_checkSymbolMask(l,n){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[n]&&this.maskAvailablePatterns[n].pattern&&this.maskAvailablePatterns[n].pattern.test(l)}_checkInput(l){return l.split("").filter(l=>l.match("\\d")||"."===l||","===l).join("")}};var H;let z=H=class{static forRoot(l){return{ngModule:H,providers:[{provide:$,useValue:l},{provide:V,useValue:B},{provide:G,useFactory:U,deps:[V,$]},K]}}static forChild(l){return{ngModule:H}}};function U(l,n){return n instanceof Function?Object.assign({},l,n()):Object.assign({},l,n)}class Z{}var J=t("cUpR"),Q=t("FVPZ"),X=t("ura0"),Y=t("u9T3"),ll=t("RaCk"),nl=t("Tk7p"),tl=t("5HBU"),el=t("/HVE"),ul=t("oapL"),il=t("ZwOa"),sl=t("D1Ds");class al{}t.d(n,"AddAdwordsAccountsModuleNgFactory",function(){return ol});var ol=e.nb(u,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[i.a,j]],[3,e.j],e.w]),e.yb(4608,A.o,A.n,[e.t,[2,A.E]]),e.yb(4608,f.x,f.x,[]),e.yb(4608,f.f,f.f,[]),e.yb(5120,e.b,function(l,n){return[a.k(l,n)]},[A.d,e.A]),e.yb(4608,W.c,W.c,[]),e.yb(4608,L.b,L.y,[]),e.yb(6144,D.d,null,[x.a]),e.yb(5120,G,U,[V,$]),e.yb(4608,K,K,[G]),e.yb(4608,I,I,[v.c]),e.yb(1073742336,A.c,A.c,[]),e.yb(1073742336,M.t,M.t,[[2,M.y],[2,M.p]]),e.yb(1073742336,Z,Z,[]),e.yb(1073742336,g.a,g.a,[]),e.yb(1073742336,L.l,L.l,[[2,L.d],[2,J.f]]),e.yb(1073742336,L.n,L.n,[]),e.yb(1073742336,Q.a,Q.a,[]),e.yb(1073742336,f.w,f.w,[]),e.yb(1073742336,f.l,f.l,[]),e.yb(1073742336,f.u,f.u,[]),e.yb(1073742336,a.c,a.c,[]),e.yb(1073742336,p.g,p.g,[]),e.yb(1073742336,X.c,X.c,[]),e.yb(1073742336,s.a,s.a,[]),e.yb(1073742336,Y.a,Y.a,[[2,a.h],e.A]),e.yb(1073742336,ll.a,ll.a,[]),e.yb(1073742336,nl.a,nl.a,[]),e.yb(1073742336,tl.a,tl.a,[]),e.yb(1073742336,el.b,el.b,[]),e.yb(1073742336,ul.c,ul.c,[]),e.yb(1073742336,W.d,W.d,[]),e.yb(1073742336,D.e,D.e,[]),e.yb(1073742336,il.b,il.b,[]),e.yb(1073742336,d.c,d.c,[]),e.yb(1073742336,sl.a,sl.a,[]),e.yb(1073742336,L.v,L.v,[]),e.yb(1073742336,r.c,r.c,[]),e.yb(1073742336,z,z,[]),e.yb(1073742336,al,al,[]),e.yb(1073742336,u,u,[]),e.yb(1024,M.m,function(){return[[{path:"",pathMatch:"full",component:q}]]},[]),e.yb(256,$,void 0,[]),e.yb(256,V,B,[])])})}}]);