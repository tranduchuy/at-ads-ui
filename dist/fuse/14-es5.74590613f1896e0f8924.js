(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{CziI:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),a=e("NcP4"),c=e("pMnS"),i=e("21Lb"),u=e("OzfB"),r=e("TtEo"),d=e("LC5p"),p=e("Mr+X"),g=e("SMsm"),m=e("bujt"),s=e("UodH"),f=e("lLAP"),b=e("wFw1"),v=e("mrSG"),h=e("pZ6u"),k=e("H0VJ"),C=e("mZtN"),P=e("k1t7"),_=function(n){function l(l,e,t){var o=n.call(this)||this;return o._dialogService=l,o._sessionService=e,o._fuseProgressBarService=t,o}return v.__extends(l,n),l.prototype.ngOnInit=function(){var n=this;this._fuseProgressBarService.show();var l=this._sessionService.getUser().subscribe(function(l){l&&(n.loggedInUser=l,n.isRegisterButtonNotDisplayed="CUSTOM"===l.licence.type,n._fuseProgressBarService.hide())});this.subscriptions.push(l)},l.prototype.openUpgradeLicenceDialog=function(n,l){this._dialogService._openUpgradeLicenceDialog(n,l)},l}(h.a),x=t["\u0275crt"]({encapsulation:0,styles:[['@charset "UTF-8";.container[_ngcontent-%COMP%]{width:100%;height:100vh}.container[_ngcontent-%COMP%]   .no-display[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{box-shadow:0 1px #fff inset,0 1px 3px rgba(34,25,25,.4);background-color:#ffffb5;background-image:linear-gradient(315deg,#ffffb5 0,#247ba0 74%);background-attachment:fixed}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]{padding:70px 20px 250px;text-align:center;width:100%;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#ffffe0;font-size:22px;font-weight:700;-webkit-filter:drop-shadow(0 1px 1px #000);filter:drop-shadow(0 1px 1px #000)}.container[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .main-title-inner[_ngcontent-%COMP%]   .notice[_ngcontent-%COMP%]{color:#ffffe0;font-size:14px;font-style:italic;-webkit-filter:drop-shadow(0 1px 1px #000);filter:drop-shadow(0 1px 1px #000);font-weight:700}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]{color:orange;background:-webkit-gradient(linear,left top,left bottom,from(orange),to(darkorange));-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;font-size:26px!important;font-weight:900;position:relative;text-transform:uppercase;-webkit-filter:drop-shadow(.5px 1px 1px #000);filter:drop-shadow(.5px 1px 1px #000)}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]::before{-webkit-animation:2s linear infinite flare;background-image:linear-gradient(65deg,transparent 20%,rgba(255,255,255,.2) 20%,rgba(255,255,255,.3) 27%,transparent 27%,transparent 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;content:"N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n";color:#fff;display:block;position:absolute}.container[_ngcontent-%COMP%]   .shiny[_ngcontent-%COMP%]::after{color:#fff;display:block;position:absolute;text-shadow:0 1px #6e4414,0 2px #6e4414,0 3px #6e4414,0 4px #6e4414,0 5px #6e4414,0 6px #6e4414,0 7px #6e4414,0 8px #6e4414,0 9px #6e4414,0 10px #6e4414;top:0;z-index:-1}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::after, .container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::before{-webkit-animation:5s linear infinite sparkle;background:#fff;border-radius:100%;box-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #fff,0 0 25px #fff,0 0 30px #fff,0 0 35px #fff;content:"N\xe2ng c\u1ea5p t\xe0i kho\u1ea3n";display:block;height:10px;opacity:.7;position:absolute;width:10px}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::before{-webkit-animation-delay:.2s;height:7px;left:.12em;top:.8em;width:7px}.container[_ngcontent-%COMP%]   .inner-shiny[_ngcontent-%COMP%]::after{top:.32em;right:-5px}@-webkit-keyframes flare{0%{background-position:-180px}100%,30%{background-position:500px}}@-webkit-keyframes sparkle{0%,100%,30%,60%{opacity:0}40%{opacity:.8}}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]{position:relative;z-index:100;top:-32vh}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]{background:#fff;padding-bottom:20px;width:21vw;margin:25px;border-radius:7px;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);-webkit-transition:.2s;transition:.2s}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.free-package[_ngcontent-%COMP%]{-webkit-animation:.4s ease-out packageAnimation}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.vip-package[_ngcontent-%COMP%]{-webkit-animation:.6s ease-out packageAnimation}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package.custom-package[_ngcontent-%COMP%]{-webkit-animation:.8s ease-out packageAnimation}@-webkit-keyframes packageAnimation{from{-webkit-transform:translateY(100vh);transform:translateY(100vh)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes packageAnimation{from{-webkit-transform:translateY(100vh);transform:translateY(100vh)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .register-package-button[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .register-package-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#44b543;margin:0 auto;display:table}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-price[_ngcontent-%COMP%]{width:100%;padding-top:20px;font-size:16px;color:rgba(0,0,0,.8);text-align:center}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]{padding:0 20px 20px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%]{font-size:16px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .benefit-highline[_ngcontent-%COMP%]{font-weight:700;color:green}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:5px;font-size:12px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .package-benefit[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#44b543;font-size:16px}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .label-base[_ngcontent-%COMP%]{background:#fff;box-shadow:1px 1px 2px gray;padding-top:20px;padding-bottom:20px;width:100%;text-align:center;display:table;margin:0 auto;border-top-left-radius:5px;border-top-right-radius:5px;text-shadow:1px .8px .8px rgba(0,0,0,.5)}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .free-label[_ngcontent-%COMP%]{background-color:#63d471;background-image:linear-gradient(315deg,#63d471 0,#233329 74%);color:#fff;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-weight:700}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .vip-label[_ngcontent-%COMP%]{background:radial-gradient(ellipse farthest-corner at right bottom,#fedb37 0,#fdb931 8%,#9f7928 30%,#8a6e2f 40%,transparent 80%),radial-gradient(ellipse farthest-corner at left top,#fff 0,#ffffac 8%,#d1b464 25%,#5d4a1f 62.5%,#5d4a1f 100%);color:#ffffe0;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-weight:700}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]   .custom-label[_ngcontent-%COMP%]{font-weight:700;color:gold;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;background-color:#e0455f;background-image:linear-gradient(147deg,#e0455f 0,#44000b 74%)}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]{top:-33vh}.container[_ngcontent-%COMP%]   .package-wrapper[_ngcontent-%COMP%]   .package[_ngcontent-%COMP%]{width:90vw;margin:20px}}']],data:{}});function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,155,"div",[["class","container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,7,"div",[["class","main-title"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t["\u0275did"](2,671744,null,0,i.c,[t.ElementRef,u.j,[2,i.i],u.f],{fxLayout:[0,"fxLayout"]},null),t["\u0275did"](3,671744,null,0,i.b,[t.ElementRef,u.j,[2,i.g],u.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t["\u0275eld"](4,0,null,null,4,"div",[["class","main-title-inner"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["N\xc2NG C\u1ea4P T\xc0I KHO\u1ea2N"])),(n()(),t["\u0275eld"](7,0,null,null,1,"p",[["class","notice"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" H\xe3y n\xe2ng c\u1ea5p t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n \u0111\u1ec3 tr\u1ea3i nghi\u1ec7m nh\u1eefng t\xednh n\u0103ng tuy\u1ec7t v\u1eddi nh\u1ea5t! "])),(n()(),t["\u0275eld"](9,0,null,null,146,"div",[["class","package-wrapper"],["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](10,671744,null,0,i.c,[t.ElementRef,u.j,[2,i.i],u.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),t["\u0275did"](11,671744,null,0,i.b,[t.ElementRef,u.j,[2,i.g],u.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t["\u0275eld"](12,0,null,null,34,"div",[["class","package free-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,1,"span",[["class","label-base free-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["C\u01a0 B\u1ea2N"])),(n()(),t["\u0275eld"](15,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Mi\u1ec5n ph\xed "])),(n()(),t["\u0275eld"](17,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](18,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,r.b,r.a)),t["\u0275did"](19,49152,null,0,d.a,[],null,null),(n()(),t["\u0275eld"](20,0,null,null,26,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,25,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](22,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](23,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](24,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](27,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](28,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](29,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](32,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](33,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](34,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](37,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](38,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](39,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](42,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](43,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](44,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](47,0,null,null,53,"div",[["class","package vip-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](48,0,null,null,1,"span",[["class","label-base vip-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["T\u1ed0I \u01afU"])),(n()(),t["\u0275eld"](50,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" 500.000 VN\u0110/Th\xe1ng "])),(n()(),t["\u0275eld"](52,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](53,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,r.b,r.a)),t["\u0275did"](54,49152,null,0,d.a,[],null,null),(n()(),t["\u0275eld"](55,0,null,null,41,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](56,0,null,null,40,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](57,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](58,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](59,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](62,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](63,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](64,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](67,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](68,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](69,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](72,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](73,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](74,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](77,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](78,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](79,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](82,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](83,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](84,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo h\xe0nh vi ng\u01b0\u1eddi d\xf9ng "])),(n()(),t["\u0275eld"](87,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](88,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](89,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\u1eafm ch\u1ecdn v\u1ecb tr\xed "])),(n()(),t["\u0275eld"](92,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](93,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](94,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" H\u1ed7 tr\u1ee3 g\u1eedi b\u1ed3i ho\xe0n ph\xed t\u1eeb Google "])),(n()(),t["\u0275eld"](97,0,null,null,3,"div",[["class","register-package-button"]],[[2,"no-display",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openUpgradeLicenceDialog("VIP1","T\u1ed1i \u01b0u")&&t),t},null,null)),(n()(),t["\u0275eld"](98,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,m.d,m.b)),t["\u0275did"](99,180224,null,0,s.b,[t.ElementRef,f.h,[2,b.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["\u0110\u0103ng k\xfd ngay"])),(n()(),t["\u0275eld"](101,0,null,null,54,"div",[["class","package custom-package"]],null,null,null,null,null)),(n()(),t["\u0275eld"](102,0,null,null,1,"span",[["class","label-base custom-label"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\u0110\u1ed0I T\xc1C"])),(n()(),t["\u0275eld"](104,0,null,null,1,"p",[["class","package-price"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Li\xean h\u1ec7 "])),(n()(),t["\u0275eld"](106,0,null,null,2,"div",[["style","padding: 10px 25px 10px 25px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](107,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,r.b,r.a)),t["\u0275did"](108,49152,null,0,d.a,[],null,null),(n()(),t["\u0275eld"](109,0,null,null,46,"div",[["class","package-benefit"]],null,null,null,null,null)),(n()(),t["\u0275eld"](110,0,null,null,45,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](111,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](112,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](113,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo t\u1ea7n su\u1ea5t "])),(n()(),t["\u0275eld"](116,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](117,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](118,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\xe0 m\u1ea1ng (3G/4G) "])),(n()(),t["\u0275eld"](121,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](122,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](123,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o t\u1ef1 \u0111\u1ed9ng \xedt h\u01a1n 5 gi\xe2y "])),(n()(),t["\u0275eld"](126,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](127,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](128,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" T\xf9y ch\u1ec9nh danh s\xe1ch IP c\u1ea7n ch\u1eb7n "])),(n()(),t["\u0275eld"](131,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](132,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](133,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" B\xe1o c\xe1o qu\u1ea3n tr\u1ecb IP click "])),(n()(),t["\u0275eld"](136,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](137,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](138,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo h\xe0nh vi ng\u01b0\u1eddi d\xf9ng "])),(n()(),t["\u0275eld"](141,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](142,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](143,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" Ch\u1eb7n click \u1ea3o theo nh\u1eafm ch\u1ecdn v\u1ecb tr\xed "])),(n()(),t["\u0275eld"](146,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](147,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](148,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" H\u1ed7 tr\u1ee3 g\u1eedi b\u1ed3i ho\xe0n ph\xed t\u1eeb Google "])),(n()(),t["\u0275eld"](151,0,null,null,4,"li",[["class","benefit-highline"]],null,null,null,null,null)),(n()(),t["\u0275eld"](152,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),t["\u0275did"](153,9158656,null,0,g.b,[t.ElementRef,g.d,[8,null],[2,g.a]],null,null),(n()(),t["\u0275ted"](-1,0,["check"])),(n()(),t["\u0275ted"](-1,null,[" C\xf3 1 nh\xe2n vi\xean h\u1ed7 tr\u1ee3 ri\xeang "]))],function(n,l){n(l,2,0,"column"),n(l,3,0,"center center"),n(l,10,0,"row","column"),n(l,11,0,"center"),n(l,24,0),n(l,29,0),n(l,34,0),n(l,39,0),n(l,44,0),n(l,59,0),n(l,64,0),n(l,69,0),n(l,74,0),n(l,79,0),n(l,84,0),n(l,89,0),n(l,94,0),n(l,99,0,"accent"),n(l,113,0),n(l,118,0),n(l,123,0),n(l,128,0),n(l,133,0),n(l,138,0),n(l,143,0),n(l,148,0),n(l,153,0)},function(n,l){var e=l.component;n(l,18,0,t["\u0275nov"](l,19).vertical?"vertical":"horizontal",t["\u0275nov"](l,19).vertical,!t["\u0275nov"](l,19).vertical,t["\u0275nov"](l,19).inset),n(l,23,0,t["\u0275nov"](l,24).inline,"primary"!==t["\u0275nov"](l,24).color&&"accent"!==t["\u0275nov"](l,24).color&&"warn"!==t["\u0275nov"](l,24).color),n(l,28,0,t["\u0275nov"](l,29).inline,"primary"!==t["\u0275nov"](l,29).color&&"accent"!==t["\u0275nov"](l,29).color&&"warn"!==t["\u0275nov"](l,29).color),n(l,33,0,t["\u0275nov"](l,34).inline,"primary"!==t["\u0275nov"](l,34).color&&"accent"!==t["\u0275nov"](l,34).color&&"warn"!==t["\u0275nov"](l,34).color),n(l,38,0,t["\u0275nov"](l,39).inline,"primary"!==t["\u0275nov"](l,39).color&&"accent"!==t["\u0275nov"](l,39).color&&"warn"!==t["\u0275nov"](l,39).color),n(l,43,0,t["\u0275nov"](l,44).inline,"primary"!==t["\u0275nov"](l,44).color&&"accent"!==t["\u0275nov"](l,44).color&&"warn"!==t["\u0275nov"](l,44).color),n(l,53,0,t["\u0275nov"](l,54).vertical?"vertical":"horizontal",t["\u0275nov"](l,54).vertical,!t["\u0275nov"](l,54).vertical,t["\u0275nov"](l,54).inset),n(l,58,0,t["\u0275nov"](l,59).inline,"primary"!==t["\u0275nov"](l,59).color&&"accent"!==t["\u0275nov"](l,59).color&&"warn"!==t["\u0275nov"](l,59).color),n(l,63,0,t["\u0275nov"](l,64).inline,"primary"!==t["\u0275nov"](l,64).color&&"accent"!==t["\u0275nov"](l,64).color&&"warn"!==t["\u0275nov"](l,64).color),n(l,68,0,t["\u0275nov"](l,69).inline,"primary"!==t["\u0275nov"](l,69).color&&"accent"!==t["\u0275nov"](l,69).color&&"warn"!==t["\u0275nov"](l,69).color),n(l,73,0,t["\u0275nov"](l,74).inline,"primary"!==t["\u0275nov"](l,74).color&&"accent"!==t["\u0275nov"](l,74).color&&"warn"!==t["\u0275nov"](l,74).color),n(l,78,0,t["\u0275nov"](l,79).inline,"primary"!==t["\u0275nov"](l,79).color&&"accent"!==t["\u0275nov"](l,79).color&&"warn"!==t["\u0275nov"](l,79).color),n(l,83,0,t["\u0275nov"](l,84).inline,"primary"!==t["\u0275nov"](l,84).color&&"accent"!==t["\u0275nov"](l,84).color&&"warn"!==t["\u0275nov"](l,84).color),n(l,88,0,t["\u0275nov"](l,89).inline,"primary"!==t["\u0275nov"](l,89).color&&"accent"!==t["\u0275nov"](l,89).color&&"warn"!==t["\u0275nov"](l,89).color),n(l,93,0,t["\u0275nov"](l,94).inline,"primary"!==t["\u0275nov"](l,94).color&&"accent"!==t["\u0275nov"](l,94).color&&"warn"!==t["\u0275nov"](l,94).color),n(l,97,0,e.isRegisterButtonNotDisplayed),n(l,98,0,t["\u0275nov"](l,99).disabled||null,"NoopAnimations"===t["\u0275nov"](l,99)._animationMode),n(l,107,0,t["\u0275nov"](l,108).vertical?"vertical":"horizontal",t["\u0275nov"](l,108).vertical,!t["\u0275nov"](l,108).vertical,t["\u0275nov"](l,108).inset),n(l,112,0,t["\u0275nov"](l,113).inline,"primary"!==t["\u0275nov"](l,113).color&&"accent"!==t["\u0275nov"](l,113).color&&"warn"!==t["\u0275nov"](l,113).color),n(l,117,0,t["\u0275nov"](l,118).inline,"primary"!==t["\u0275nov"](l,118).color&&"accent"!==t["\u0275nov"](l,118).color&&"warn"!==t["\u0275nov"](l,118).color),n(l,122,0,t["\u0275nov"](l,123).inline,"primary"!==t["\u0275nov"](l,123).color&&"accent"!==t["\u0275nov"](l,123).color&&"warn"!==t["\u0275nov"](l,123).color),n(l,127,0,t["\u0275nov"](l,128).inline,"primary"!==t["\u0275nov"](l,128).color&&"accent"!==t["\u0275nov"](l,128).color&&"warn"!==t["\u0275nov"](l,128).color),n(l,132,0,t["\u0275nov"](l,133).inline,"primary"!==t["\u0275nov"](l,133).color&&"accent"!==t["\u0275nov"](l,133).color&&"warn"!==t["\u0275nov"](l,133).color),n(l,137,0,t["\u0275nov"](l,138).inline,"primary"!==t["\u0275nov"](l,138).color&&"accent"!==t["\u0275nov"](l,138).color&&"warn"!==t["\u0275nov"](l,138).color),n(l,142,0,t["\u0275nov"](l,143).inline,"primary"!==t["\u0275nov"](l,143).color&&"accent"!==t["\u0275nov"](l,143).color&&"warn"!==t["\u0275nov"](l,143).color),n(l,147,0,t["\u0275nov"](l,148).inline,"primary"!==t["\u0275nov"](l,148).color&&"accent"!==t["\u0275nov"](l,148).color&&"warn"!==t["\u0275nov"](l,148).color),n(l,152,0,t["\u0275nov"](l,153).inline,"primary"!==t["\u0275nov"](l,153).color&&"accent"!==t["\u0275nov"](l,153).color&&"warn"!==t["\u0275nov"](l,153).color)})}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-upgrade-licence",[],null,null,null,M,x)),t["\u0275did"](1,245760,null,0,_,[k.a,C.a,P.a],null,null)],function(n,l){n(l,1,0)},null)}var w=t["\u0275ccf"]("app-upgrade-licence",_,O,{},{},[]),y=e("Ip0R"),R=e("M2Lx"),L=e("Wf4p"),E=e("eDkP"),I=e("Fzqc"),T=e("v9Dh"),z=e("ZYjt"),N=e("gIcY"),A=e("seP3"),S=e("wd5q"),U=e("uGex"),G=e("dWZg"),D=e("/VYK"),Y=e("b716"),B=e("y4qS"),F=e("BHnd"),j=e("4c35"),q=e("qAlS"),H=e("6Wmm"),V=e("9It4"),Z=e("de3e"),J=e("Sm0G"),W=e("D1Ds"),K=e("1N2P"),Q=e("L53J"),X=e("hUWP"),$=e("3pJQ"),nn=e("V9q+"),ln=e("RaCk"),en=e("Tk7p"),tn=e("5HBU"),on=e("nwAg"),an=e("ZYCi"),cn=function(){return function(){}}();e.d(l,"UpgradeLicenceModuleNgFactory",function(){return un});var un=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,c.a,w]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,y.NgLocalization,y.NgLocaleLocalization,[t.LOCALE_ID,[2,y["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,R.c,R.c,[]),t["\u0275mpd"](4608,L.b,L.z,[]),t["\u0275mpd"](4608,E.c,E.c,[E.i,E.e,t.ComponentFactoryResolver,E.h,E.f,t.Injector,t.NgZone,y.DOCUMENT,I.b,[2,y.Location]]),t["\u0275mpd"](5120,E.j,E.k,[E.c]),t["\u0275mpd"](5120,T.b,T.c,[E.c]),t["\u0275mpd"](4608,z.e,L.c,[[2,L.g],[2,L.l]]),t["\u0275mpd"](4608,N.y,N.y,[]),t["\u0275mpd"](4608,N.f,N.f,[]),t["\u0275mpd"](6144,A.d,null,[S.a]),t["\u0275mpd"](5120,U.a,U.b,[E.c]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(n,l){return[u.k(n,l)]},[y.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](135680,_,_,[k.a,C.a,P.a]),t["\u0275mpd"](1073742336,y.CommonModule,y.CommonModule,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,L.l,L.l,[[2,L.d],[2,z.f]]),t["\u0275mpd"](1073742336,G.b,G.b,[]),t["\u0275mpd"](1073742336,L.v,L.v,[]),t["\u0275mpd"](1073742336,s.c,s.c,[]),t["\u0275mpd"](1073742336,R.d,R.d,[]),t["\u0275mpd"](1073742336,A.e,A.e,[]),t["\u0275mpd"](1073742336,g.c,g.c,[]),t["\u0275mpd"](1073742336,D.c,D.c,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,B.p,B.p,[]),t["\u0275mpd"](1073742336,F.m,F.m,[]),t["\u0275mpd"](1073742336,f.a,f.a,[]),t["\u0275mpd"](1073742336,j.g,j.g,[]),t["\u0275mpd"](1073742336,q.c,q.c,[]),t["\u0275mpd"](1073742336,E.g,E.g,[]),t["\u0275mpd"](1073742336,T.e,T.e,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,V.c,V.c,[]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,N.x,N.x,[]),t["\u0275mpd"](1073742336,N.m,N.m,[]),t["\u0275mpd"](1073742336,N.v,N.v,[]),t["\u0275mpd"](1073742336,Z.d,Z.d,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,W.a,W.a,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,L.t,L.t,[]),t["\u0275mpd"](1073742336,L.r,L.r,[]),t["\u0275mpd"](1073742336,U.d,U.d,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,u.c,u.c,[]),t["\u0275mpd"](1073742336,i.e,i.e,[]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,nn.a,nn.a,[[2,u.h],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,en.a,en.a,[]),t["\u0275mpd"](1073742336,tn.a,tn.a,[]),t["\u0275mpd"](1073742336,on.a,on.a,[]),t["\u0275mpd"](1073742336,an.t,an.t,[[2,an.y],[2,an.p]]),t["\u0275mpd"](1073742336,cn,cn,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,an.m,function(){return[[{path:"",pathMatch:"full",component:_}]]},[])])})}}]);