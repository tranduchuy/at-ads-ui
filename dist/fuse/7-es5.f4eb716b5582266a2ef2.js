(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nJkw:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),i=t("pMnS"),s=t("3pJQ"),a=t("OzfB"),o=t("bujt"),r=t("UodH"),c=t("lLAP"),b=t("wFw1"),d=t("Mr+X"),h=t("SMsm"),p=t("21Lb"),g=t("Fzqc"),f=t("gIcY"),m=t("i1kN"),x=t("wd5q"),v=t("Ip0R"),_=t("mrSG"),k=t("c3gj"),A=t("k1t7"),w=t("VMjx"),y=t("t/Na"),P=function(){function n(n){this._http=n}return n.prototype.addAdwordsAccount=function(n){return this._http.post(w.a.AdwordsAccount.addAccount,n)},n.prototype.getAccounts=function(){return this._http.get(w.a.AdwordsAccount.getAccounts)},n.ngInjectableDef=u.Pb({factory:function(){return new n(u.Tb(y.c))},token:n,providedIn:"root"}),n}(),C=t("H0VJ"),S=t("K9xE"),I=t("mZtN"),B=t("f3OE"),O=t("5vgI"),M=function(n){function l(l,t,u,e,i,s,a){var o=n.call(this)||this;return o._fuseProgressiveBarService=l,o._dialogService=t,o._fuseNavigationService=u,o._addAdwordsAccountsService=e,o._sessionService=i,o._router=s,o._fuseSlashScreenService=a,o.isConnected=!1,o._adsAccountIdPipe=new O.a,o.isProcessing=!1,o}return _.d(l,n),l.prototype.ngOnInit=function(){this.initForm()},l.prototype.completeAccountConnection=function(){this._router.navigateByUrl("/gan-tracking/chien-dich")},l.prototype.post=function(){var n=this,l=this.generatePostObject();this.isProcessing=!0,this._fuseProgressiveBarService.show();var t=this._addAdwordsAccountsService.addAdwordsAccount(l).subscribe(function(l){n._dialogService._openInfoDialog(l.messages[0]),n.isConnected=!0,n._sessionService.setActiveAccountId(l.data.account._id),n._sessionService.setActiveAdsAccountId(n._adsAccountIdPipe.transform(l.data.account.adsId)),n._fuseNavigationService.reloadNavigation(),n._fuseProgressiveBarService.hide(),n.isProcessing=!1},function(l){l.error.messages&&n._dialogService._openErrorDialog(l.error),n._fuseProgressiveBarService.hide(),n.isProcessing=!1});this.subscriptions.push(t)},l.prototype.onClickBtnSubmit=function(){this.onSubmit()},l.prototype.initForm=function(){this.form=this.fb.group({adWordId:[null,[f.v.required]]})},l.prototype.generatePostObject=function(){var n=_.a({},this.form.value);return n.adWordId=n.adWordId.replace(/[^a-zA-Z0-9 ]/g,""),n},l.prototype.onPressId=function(n){return n>=48&&n<=57||45===n},l}(k.a),D=t("ZYCi"),L=u.rb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:30px;width:100%}.submit-button[_ngcontent-%COMP%]{height:58px;margin:4px 0 2px 2px;width:120px}.step[_ngcontent-%COMP%]{color:#039be5}.box[_ngcontent-%COMP%]{padding:30px}.loginWithGoogle[_ngcontent-%COMP%]{display:table;margin:20px auto 10px}.loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8b0000;background:#fff;padding:5px 10px}.g-sign-in-button[_ngcontent-%COMP%]{background:#4285f4;height:40px;border-width:0;border-radius:2px;white-space:nowrap;padding:0;margin:10px;display:inline-block;width:210px;color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.25);transition:background-color 218ms,border-color 218ms,box-shadow 218ms}.text-container[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-family:Roboto,arial,sans-serif;font-weight:500;letter-spacing:.21px;font-size:14px;border:none;text-align:center;width:166px;padding-top:10px}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{padding:0 5px 0 0;font-size:12px}}"]],data:{}});function N(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,43,"div",[["gdArea","content"]],null,null,null,null,null)),u.sb(1,671744,null,0,s.c,[u.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(n()(),u.tb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),u.tb(3,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),u.tb(4,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),u.tb(5,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["[3]"])),(n()(),u.Lb(-1,null,[" VUI L\xd2NG \u0110\u1ed2NG \xdd Y\xcaU C\u1ea6U K\u1ebeT N\u1ed0I"])),(n()(),u.tb(8,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),u.tb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["B\u01b0\u1edbc 1: "])),(n()(),u.Lb(-1,null,[" Truy c\u1eadp l\u1ea1i t\xe0i kho\u1ea3n AdWords c\u1ee7a b\u1ea1n "])),(n()(),u.tb(12,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["adwords.google.com"])),(n()(),u.Lb(-1,null,[" v\xe0 b\u1ea5m v\xe0o icon \u1edf menu b\xean tr\xe1i "])),(n()(),u.tb(15,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),u.tb(16,0,null,null,0,"img",[["src","/assets/images/adwords-caidat-b1-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),u.tb(17,0,null,null,9,"p",[],null,null,null,null,null)),(n()(),u.tb(18,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["B\u01b0\u1edbc 2: "])),(n()(),u.Lb(-1,null,[" Sau \u0111\xf3 b\u1ea5m v\xe0o "])),(n()(),u.tb(21,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,[" Ng\u01b0\u1eddi Qu\u1ea3n L\xfd "])),(n()(),u.Lb(-1,null,[" v\xe0 b\u1ea5m "])),(n()(),u.tb(24,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Ch\u1ea5p Thu\u1eadn"])),(n()(),u.Lb(-1,null,[" (n\u1ebfu b\u1ea1n kh\xf4ng th\u1ea5 ng\u01b0\u1eddi qu\u1ea3n l\xfd vui l\xf2ng ch\u1edd kho\u1ea3ng 5 ph\xfat)"])),(n()(),u.tb(27,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),u.tb(28,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b2-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),u.tb(29,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),u.tb(30,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["B\u01b0\u1edbc 3: "])),(n()(),u.Lb(-1,null,["M\u1ed9t th\xf4ng b\xe1o hi\u1ec7n ra, b\u1ea1n ch\u1ecdn "])),(n()(),u.tb(33,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["C\u1ea5p Quy\u1ec1n Truy C\u1eadp"])),(n()(),u.tb(35,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),u.tb(36,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b3-moi.jpg?v=1"]],null,null,null,null,null)),(n()(),u.tb(37,0,null,null,6,"p",[["class","text-center"]],null,null,null,null,null)),(n()(),u.tb(38,0,null,null,5,"button",[["aria-label","T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I"],["color","warn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.completeAccountConnection()&&u),u},o.d,o.b)),u.sb(39,180224,null,0,r.b,[u.k,c.h,[2,b.a]],{color:[0,"color"]},null),(n()(),u.tb(40,0,null,0,2,"mat-icon",[["class","done_outline mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),u.sb(41,9158656,null,0,h.b,[u.k,h.d,[8,null],[2,h.a]],null,null),(n()(),u.Lb(-1,0,["done_outline"])),(n()(),u.Lb(-1,0,[" T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I "]))],function(n,l){n(l,1,0,"content"),n(l,39,0,"warn"),n(l,41,0)},function(n,l){n(l,38,0,u.Db(l,39).disabled||null,"NoopAnimations"===u.Db(l,39)._animationMode),n(l,40,0,u.Db(l,41).inline,"primary"!==u.Db(l,41).color&&"accent"!==u.Db(l,41).color&&"warn"!==u.Db(l,41).color)})}function R(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,54,"div",[["class","container"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,51,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),u.sb(2,671744,null,0,p.c,[u.k,a.j,[2,p.k],a.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),u.sb(3,1720320,null,0,p.d,[u.k,u.B,g.b,a.j,[2,p.j],a.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(n()(),u.tb(4,0,null,null,13,"div",[["class","connect-button"],["gdArea","connect-button"]],null,null,null,null,null)),u.sb(5,671744,null,0,s.c,[u.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(n()(),u.tb(6,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),u.tb(7,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),u.tb(8,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["[1]"])),(n()(),u.Lb(-1,null,[" K\u1ebeT N\u1ed0I NHANH B\u1eb0NG GMAIL"])),(n()(),u.tb(11,0,null,null,1,"p",[["style","text-align: justify"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,[" S\u1eed d\u1ee5ng t\xe0i kho\u1ea3n Gmail qu\u1ea3n l\xfd Google AdWords, b\u1ea5m k\u1ebft n\u1ed1i nhanh \u0111\u1ec3 ho\xe0n t\u1ea5t qu\xe1 tr\xecnh k\u1ebft n\u1ed1i"])),(n()(),u.tb(13,0,null,null,4,"div",[["class","loginWithGoogle"]],null,null,null,null,null)),(n()(),u.tb(14,0,null,null,3,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,o.d,o.b)),u.sb(15,180224,null,0,r.b,[u.k,c.h,[2,b.a]],null,null),(n()(),u.tb(16,0,null,0,0,"img",[["alt",""],["src","https://image.flaticon.com/icons/png/512/281/281769.png"],["style","height: 20px; width:20px; margin-top: -5px; margin-right: 8px"]],null,null,null,null,null)),(n()(),u.Lb(-1,0,["K\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"])),(n()(),u.tb(18,0,null,null,34,"div",[["class","input-side"],["gdArea","input-side"]],null,null,null,null,null)),u.sb(19,671744,null,0,s.c,[u.k,a.j,[2,s.b],a.f],{gdArea:[0,"gdArea"]},null),(n()(),u.tb(20,0,null,null,4,"h3",[],null,null,null,null,null)),(n()(),u.tb(21,0,null,null,3,"strong",[],null,null,null,null,null)),(n()(),u.tb(22,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["[2]"])),(n()(),u.Lb(-1,null,[" K\u1ebeT N\u1ed0I TH\xd4NG QUA M\xc3 ADWORDS CID"])),(n()(),u.tb(25,0,null,null,9,"p",[["style","text-align: justify"]],null,null,null,null,null)),(n()(),u.tb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["B\u01b0\u1edbc 1: "])),(n()(),u.Lb(-1,null,[" \u0110\u0103ng nh\u1eadp "])),(n()(),u.tb(29,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["adwords.google.com"])),(n()(),u.Lb(-1,null,[", ID t\xe0i kho\u1ea3n adwords c\u1ee7a b\u1ea1n s\u1ebd n\u1eb1m \u1edf g\xf3c ph\u1ea3i tr\xean c\xf9ng. "])),(n()(),u.tb(32,0,null,null,1,"span",[["style","color: deeppink;"]],null,null,null,null,null)),(n()(),u.Lb(-1,null,["VD: 552-999-5152"])),(n()(),u.Lb(-1,null,[" l\xe0 ID t\xe0i kho\u1ea3n Adwords c\u1ee7a b\u1ea1n"])),(n()(),u.tb(35,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0;return"submit"===l&&(e=!1!==u.Db(n,37).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.Db(n,37).onReset()&&e),e},null,null)),u.sb(36,16384,null,0,f.A,[],null,null),u.sb(37,540672,null,0,f.j,[[8,null],[8,null]],{form:[0,"form"]},null),u.Ib(2048,null,f.c,null,[f.j]),u.sb(39,16384,null,0,f.q,[[4,f.c]],null,null),(n()(),u.tb(40,0,null,null,12,"div",[["fxLayout","row"]],null,null,null,null,null)),u.sb(41,671744,null,0,p.c,[u.k,a.j,[2,p.k],a.f],{fxLayout:[0,"fxLayout"]},null),(n()(),u.tb(42,0,null,null,4,"app-input-text",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"data-id",0]],[[null,"keypress"]],function(n,l,t){var u=!0;return"keypress"===l&&(u=!1!==n.component.onPressId(t.keyCode)&&u),u},m.b,m.a)),u.sb(43,671744,null,0,f.h,[[3,f.c],[8,null],[8,null],[8,null],[2,f.y]],{name:[0,"name"]},null),u.Ib(2048,null,f.o,null,[f.h]),u.sb(45,16384,null,0,f.p,[[4,f.o]],null,null),u.sb(46,245760,null,0,x.a,[u.k,[6,f.o]],{placeholder:[0,"placeholder"],title:[1,"title"],errors:[2,"errors"],pristine:[3,"pristine"]},null),(n()(),u.tb(47,0,null,null,5,"button",[["aria-label","K\u1ebft n\u1ed1i"],["class","submit-button"],["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.onClickBtnSubmit()&&u),u},o.d,o.b)),u.sb(48,180224,null,0,r.b,[u.k,c.h,[2,b.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),u.tb(49,0,null,0,2,"mat-icon",[["class","add_box mat-icon notranslate"],["matSuffix",""],["role","img"],["style","font-size: 20px"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),u.sb(50,9158656,null,0,h.b,[u.k,h.d,[8,null],[2,h.a]],null,null),(n()(),u.Lb(-1,0,["wifi"])),(n()(),u.Lb(-1,0,[" K\u1ebft n\u1ed1i "])),(n()(),u.ib(16777216,null,null,1,null,N)),u.sb(54,16384,null,0,v.m,[u.R,u.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,"row","column"),n(l,3,0,"20px"),n(l,5,0,"connect-button"),n(l,19,0,"input-side"),n(l,37,0,t.form),n(l,41,0,"row"),n(l,43,0,"adWordId"),n(l,46,0,"5456445193","Adwords ID",t.getMessageErrors("adWordId"),!0),n(l,48,0,t.isProcessing,"accent"),n(l,50,0),n(l,54,0,t.isConnected)},function(n,l){n(l,14,0,u.Db(l,15).disabled||null,"NoopAnimations"===u.Db(l,15)._animationMode),n(l,35,0,u.Db(l,39).ngClassUntouched,u.Db(l,39).ngClassTouched,u.Db(l,39).ngClassPristine,u.Db(l,39).ngClassDirty,u.Db(l,39).ngClassValid,u.Db(l,39).ngClassInvalid,u.Db(l,39).ngClassPending),n(l,42,0,u.Db(l,45).ngClassUntouched,u.Db(l,45).ngClassTouched,u.Db(l,45).ngClassPristine,u.Db(l,45).ngClassDirty,u.Db(l,45).ngClassValid,u.Db(l,45).ngClassInvalid,u.Db(l,45).ngClassPending,u.Db(l,46).id),n(l,47,0,u.Db(l,48).disabled||null,"NoopAnimations"===u.Db(l,48)._animationMode),n(l,49,0,u.Db(l,50).inline,"primary"!==u.Db(l,50).color&&"accent"!==u.Db(l,50).color&&"warn"!==u.Db(l,50).color)})}function E(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,1,"app-add-adwords-accounts",[],null,null,null,R,L)),u.sb(1,245760,null,0,M,[A.a,C.a,S.a,P,I.a,D.p,B.a],null,null)],function(n,l){n(l,1,0)},null)}var T,W=u.pb("app-add-adwords-accounts",M,E,{},{},[]),j=t("M2Lx"),G=t("Wf4p"),V=t("seP3"),z=new u.r("config"),H=new u.r("NEW_CONFIG"),K=new u.r("INITIAL_CONFIG"),U={suffix:"",prefix:"",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};!function(n){n.SEPARATOR="separator",n.COMMA_SEPARATOR="comma_separator",n.DOT_SEPARATOR="dot_separator"}(T||(T={}));var q=function(){function n(n){this._config=n,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this.separator=function(n,l,t,u){for(var e=(n+="").split(t),i=e.length>1?""+t+e[1]:"",s=e[0],a=/(\d+)(\d{3})/;a.test(s);)s=s.replace(a,"$1"+l+"$2");return void 0===u?s+i:0===u?s:s+i.substr(0,u+1)},this.percentage=function(n){return Number(n)>=0&&Number(n)<=100},this.getPrecision=function(n){var l=n.split(".");return l.length>1?Number(l[l.length-1]):1/0},this.checkInputPrecision=function(n,l,t){if(l<1/0){var u;u="."===t?new RegExp("\\.\\d{"+l+"}.*$"):new RegExp(",\\d{"+l+"}.*$");var e=n.match(u);e&&e[0].length-1>l?n=n.substring(0,n.length-1):0===l&&n.endsWith(t)&&(n=n.substring(0,n.length-1))}return n},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.validation=this._config.validation}return n.prototype.applyMaskWithPattern=function(n,l){var t=Object(_.g)(l,2),u=t[0];return this.customPattern=t[1],this.applyMask(n,u)},n.prototype.applyMask=function(n,l,t,u){if(void 0===t&&(t=0),void 0===u&&(u=function(){}),null==n||void 0===l)return"";var e=0,i="",s=!1,a=!1,o=1;n.slice(0,this.prefix.length)===this.prefix&&(n=n.slice(this.prefix.length,n.length));var r=n.toString().split("");if("IP"===l&&(this.ipError=!!(r.filter(function(n){return"."===n}).length<3&&r.length<7),l="099.099.099.099"),l.startsWith("percent")){if(n.match("[a-z]|[A-Z]")||n.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)){n=this._checkInput(n);var c=this.getPrecision(l);n=this.checkInputPrecision(n,c,".")}i=this.percentage(n)?n:n.substring(0,n.length-1)}else if(l.startsWith(T.SEPARATOR)||l.startsWith(T.DOT_SEPARATOR)||l.startsWith(T.COMMA_SEPARATOR)){(n.match("[w\u0430-\u044f\u0410-\u042f]")||n.match("[\u0401\u0451\u0410-\u044f]")||n.match("[a-z]|[A-Z]")||n.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/))&&(n=this._checkInput(n)),c=this.getPrecision(l);var b=void 0;l.startsWith(T.SEPARATOR)&&n.includes(",")&&n.endsWith(",")&&n.indexOf(",")!==n.lastIndexOf(",")&&(n=n.substring(0,n.length-1)),l.startsWith(T.DOT_SEPARATOR)&&(-1!==n.indexOf(".")&&n.indexOf(".")===n.lastIndexOf(".")&&n.indexOf(".")>3&&(n=n.replace(".",",")),n=n.length>1&&"0"===n[0]&&","!==n[1]?n.slice(1,n.length):n),l.startsWith(T.COMMA_SEPARATOR)&&(n=n.length>1&&"0"===n[0]&&"."!==n[1]?n.slice(1,n.length):n),l.startsWith(T.SEPARATOR)?(n.match(/[@#!$%^&*()_+|~=`{}\[\]:.";<>?\/]/)&&(n=n.substring(0,n.length-1)),b=(n=this.checkInputPrecision(n,c,",")).replace(/\s/g,""),i=this.separator(b," ",",",c)):l.startsWith(T.DOT_SEPARATOR)?(n.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)&&(n=n.substring(0,n.length-1)),b=(n=this.checkInputPrecision(n,c,",")).replace(/\./g,""),i=this.separator(b,".",",",c)):l.startsWith(T.COMMA_SEPARATOR)&&(b=n.replace(/,/g,""),i=this.separator(b,",",".",c));var d=i.indexOf(",")-n.indexOf(",");if((f=i.length-n.length)>0&&","!==i[t]){a=!0;var h=0;do{this._shift.add(t+h),h++}while(h<f)}else 0!==d&&t>0&&!(i.indexOf(",")>=t&&t>3)||!(i.indexOf(".")>=t&&t>3)&&f<=0?(this._shift.clear(),a=!0,o=f,this._shift.add(t+=f)):this._shift.clear()}else for(var p=0,g=r[0];p<r.length&&e!==l.length;g=r[++p])if(this._checkSymbolMask(g,l[e])&&"?"===l[e+1])i+=g,e+=2;else if("*"===l[e+1]&&s&&this._checkSymbolMask(g,l[e+2]))i+=g,e+=3,s=!1;else if(this._checkSymbolMask(g,l[e])&&"*"===l[e+1])i+=g,s=!0;else if("?"===l[e+1]&&this._checkSymbolMask(g,l[e+2]))i+=g,e+=3;else if(this._checkSymbolMask(g,l[e])||this.hiddenInput&&this.maskAvailablePatterns[l[e]]&&this.maskAvailablePatterns[l[e]].symbol===g){if("H"===l[e]&&Number(g)>2){var f=/[*?]/g.test(l.slice(0,e+=1))?r.length:e;this._shift.add(f+this.prefix.length||0),p--;continue}if("h"===l[e]&&"2"===i&&Number(g)>3)continue;if("m"===l[e]&&Number(g)>5){f=/[*?]/g.test(l.slice(0,e+=1))?r.length:e,this._shift.add(f+this.prefix.length||0),p--;continue}if("s"===l[e]&&Number(g)>5){f=/[*?]/g.test(l.slice(0,e+=1))?r.length:e,this._shift.add(f+this.prefix.length||0),p--;continue}if("d"===l[e]&&Number(g)>3){f=/[*?]/g.test(l.slice(0,e+=1))?r.length:e,this._shift.add(f+this.prefix.length||0),p--;continue}if("d"===l[e-1]&&Number(n.slice(e-1,e+1))>31)continue;if("M"===l[e]&&Number(g)>1){f=/[*?]/g.test(l.slice(0,e+=1))?r.length:e,this._shift.add(f+this.prefix.length||0),p--;continue}if("M"===l[e-1]&&Number(n.slice(e-1,e+1))>12)continue;i+=g,e++}else-1!==this.maskSpecialCharacters.indexOf(l[e])?(i+=l[e],f=/[*?]/g.test(l.slice(0,++e))?r.length:e,this._shift.add(f+this.prefix.length||0),p--):this.maskSpecialCharacters.indexOf(g)>-1&&this.maskAvailablePatterns[l[e]]&&this.maskAvailablePatterns[l[e]].optional?(e++,p--):"*"===this.maskExpression[e+1]&&this._findSpecialChar(this.maskExpression[e+2])&&this._findSpecialChar(g)===this.maskExpression[e+2]&&s?(e+=3,i+=g):"?"===this.maskExpression[e+1]&&this._findSpecialChar(this.maskExpression[e+2])&&this._findSpecialChar(g)===this.maskExpression[e+2]&&s&&(e+=3,i+=g);i.length+1===l.length&&-1!==this.maskSpecialCharacters.indexOf(l[l.length-1])&&(i+=l[l.length-1]);for(var m=t+1;this._shift.has(m);)o++,m++;u(this._shift.has(t)?o:0,a),o<0&&this._shift.clear();var x=this.suffix?""+this.prefix+i+this.suffix:""+this.prefix+i;return 0===i.length&&(x=""+this.prefix+i),x},n.prototype._findSpecialChar=function(n){return this.maskSpecialCharacters.find(function(l){return l===n})},n.prototype._checkSymbolMask=function(n,l){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[l]&&this.maskAvailablePatterns[l].pattern&&this.maskAvailablePatterns[l].pattern.test(n)},n.prototype._checkInput=function(n){return n.split("").filter(function(n){return n.match("\\d")||"."===n||","===n}).join("")},n}(),F=function(){function n(){}var l;return l=n,n.forRoot=function(n){return{ngModule:l,providers:[{provide:H,useValue:n},{provide:K,useValue:U},{provide:z,useFactory:Z,deps:[K,H]},q]}},n.forChild=function(n){return{ngModule:l}},n}();function Z(n,l){return l instanceof Function?Object(_.a)({},n,l()):Object(_.a)({},n,l)}var $=function(){return function(){}}(),J=t("ZYjt"),Y=t("r43C"),Q=t("hUWP"),X=t("V9q+"),nn=t("RaCk"),ln=t("Tk7p"),tn=t("5HBU"),un=t("dWZg"),en=t("/VYK"),sn=t("b716"),an=t("D1Ds"),on=function(){return function(){}}();t.d(l,"AddAdwordsAccountsModuleNgFactory",function(){return rn});var rn=u.qb(e,[],function(n){return u.Ab([u.Bb(512,u.j,u.db,[[8,[i.a,W]],[3,u.j],u.z]),u.Bb(4608,v.o,v.n,[u.w,[2,v.E]]),u.Bb(4608,f.x,f.x,[]),u.Bb(4608,f.f,f.f,[]),u.Bb(5120,u.b,function(n,l){return[a.k(n,l)]},[v.d,u.D]),u.Bb(4608,j.c,j.c,[]),u.Bb(4608,G.b,G.z,[]),u.Bb(6144,V.d,null,[x.a]),u.Bb(5120,z,Z,[K,H]),u.Bb(4608,q,q,[z]),u.Bb(4608,P,P,[y.c]),u.Bb(1073742336,v.c,v.c,[]),u.Bb(1073742336,D.t,D.t,[[2,D.y],[2,D.p]]),u.Bb(1073742336,$,$,[]),u.Bb(1073742336,g.a,g.a,[]),u.Bb(1073742336,G.l,G.l,[[2,G.d],[2,J.f]]),u.Bb(1073742336,G.n,G.n,[]),u.Bb(1073742336,Y.a,Y.a,[]),u.Bb(1073742336,f.w,f.w,[]),u.Bb(1073742336,f.l,f.l,[]),u.Bb(1073742336,f.u,f.u,[]),u.Bb(1073742336,a.c,a.c,[]),u.Bb(1073742336,p.g,p.g,[]),u.Bb(1073742336,Q.c,Q.c,[]),u.Bb(1073742336,s.a,s.a,[]),u.Bb(1073742336,X.a,X.a,[[2,a.h],u.D]),u.Bb(1073742336,nn.a,nn.a,[]),u.Bb(1073742336,ln.a,ln.a,[]),u.Bb(1073742336,tn.a,tn.a,[]),u.Bb(1073742336,un.b,un.b,[]),u.Bb(1073742336,en.c,en.c,[]),u.Bb(1073742336,j.d,j.d,[]),u.Bb(1073742336,V.e,V.e,[]),u.Bb(1073742336,sn.b,sn.b,[]),u.Bb(1073742336,h.c,h.c,[]),u.Bb(1073742336,an.a,an.a,[]),u.Bb(1073742336,G.v,G.v,[]),u.Bb(1073742336,r.c,r.c,[]),u.Bb(1073742336,F,F,[]),u.Bb(1073742336,on,on,[]),u.Bb(1073742336,e,e,[]),u.Bb(1024,D.m,function(){return[[{path:"",pathMatch:"full",component:M}]]},[]),u.Bb(256,H,void 0,[]),u.Bb(256,K,U,[])])})}}]);