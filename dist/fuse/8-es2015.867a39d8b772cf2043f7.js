(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nJkw:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),c=t("bujt"),i=t("Fwaw"),a=t("5GAg"),s=t("omvX"),r=t("8rEH"),d=t("zQui"),b=t("Ourk"),g=t("elxJ"),h=t("8bJo"),m=t("Mz6y"),p=t("QQfA"),v=t("hOhj"),f=t("/HVE"),_=t("IP0z"),w=t("cUpR"),A=t("SVse"),O=t("pIm3"),C=t("Mr+X"),P=t("Gi4r"),M=t("Nhcz"),x=t("/q54"),G=t("VDRc"),I=t("s7LF"),E=t("i1kN"),k=t("wd5q"),y=t("c3gj"),S=t("k1t7"),L=t("VMjx"),N=t("IheW");class T{constructor(l){this._http=l}addAdwordsAccount(l){return this._http.post(L.a.AdwordsAccount.addAccount,l)}getAccounts(){return this._http.get(L.a.AdwordsAccount.getAccounts)}getAdwordsAccountDetail(l){const n=L.a.AdwordsAccount.getAwordsAccountDetail.replace("{account_id}",l);return this._http.get(n)}checkAccountAcceptance(l){return this._http.post(L.a.AdwordsAccount.checkAccountAcceptance,l)}getAdsAccounts(){return this._http.get(L.a.AdwordsAccount.getAdsAccounts)}}T.ngInjectableDef=u.Sb({factory:function(){return new T(u.Wb(N.c))},token:T,providedIn:"root"});var D=t("H0VJ"),R=t("K9xE"),j=t("mZtN"),B=t("f3OE"),Q=t("5vgI");class U extends y.a{constructor(l,n,t,u,e,o,c){super(),this._fuseProgressiveBarService=l,this._dialogService=n,this._fuseNavigationService=t,this._addAdwordsAccountsService=u,this._sessionService=e,this._router=o,this._fuseSlashScreenService=c,this.isConnected=!1,this._adsAccountIdPipe=new Q.a,this.isProcessing=!1,this.isAccountListShown=!1,this.adsAccounts=[],this.adsAccountColumns=["order","adsId","name","selection"],this.selectedAccount=""}ngOnInit(){this.initForm()}selectAccount(l){this.selectedAccount=l.value}getAdsAccounts(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this._addAdwordsAccountsService.getAdsAccounts().subscribe(l=>{this.adsAccounts=l.data.googleAds,this.adsAccounts=(this.adsAccounts||[]).map(l=>(l.googleAdId=this._adsAccountIdPipe.transform(l.googleAdId),l)),this._fuseProgressiveBarService.hide(),this.isAccountListShown=!0,this.isProcessing=!1},l=>{this.isAccountListShown=!1,this.isProcessing=!1,this._fuseProgressiveBarService.hide(),this._dialogService._openInfoDialog("Ch\xfang t\xf4i kh\xf4ng t\xecm th\u1ea5y t\xe0i kho\u1ea3n Google Ads n\xe0o trong t\xe0i kho\u1ea3n Google c\u1ee7a b\u1ea1n!")});this.subscriptions.push(l)}generateConnectAccountByEmailParam(){return{adWordId:this.selectedAccount.replace(/[^a-zA-Z0-9 ]/g,"")}}connectAccountByEmail(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this.generateConnectAccountByEmailParam(),n=this._addAdwordsAccountsService.addAdwordsAccount(l).subscribe(l=>{if(this._fuseProgressiveBarService.hide(),this._dialogService._openInfoDialog(l.messages[0]),l.data.isRefresh)return this._fuseNavigationService.reloadNavigation(),void this._router.navigateByUrl("/danh-sach-tai-khoan");this.isConnected=!0,this.connectedAccountId=l.data.account._id,this.connectedAdsId=this._adsAccountIdPipe.transform(l.data.account.adsId),this._sessionService.setActiveAccountId(this.connectedAccountId),this._sessionService.setActiveAdsAccountId(this.connectedAdsId),this._sessionService.setAccountId(this.connectedAccountId),this._sessionService.setAdwordId(this.connectedAdsId),this._fuseNavigationService.reloadNavigation(),this.getAdsAccounts(),this.isProcessing=!1},l=>{this.isConnected=!1,this.connectedAccountId="",this.connectedAdsId="",this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)}completeAccountConnection(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this._addAdwordsAccountsService.checkAccountAcceptance({adWordId:this.connectedAdsId.replace(/\D+/g,"")}).subscribe(l=>{l.data.isConnected?(this._dialogService._openSuccessDialog({messages:["K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n Google Ads th\xe0nh c\xf4ng"]}),setTimeout(()=>{this._fuseProgressiveBarService.hide(),this._router.navigateByUrl("/gan-tracking/chien-dich")},2e3)):(this.isProcessing=!1,this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog({messages:["K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n Google Ads kh\xf4ng th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ebfm tra l\u1ea1i"]}))},l=>{this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog({messages:["T\xe0i kho\u1ea3n Google Ads kh\xf4ng t\u1ed3n t\u1ea1i"]}),this.isProcessing=!1});this.subscriptions.push(l)}post(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this.generatePostObject(),n=this._addAdwordsAccountsService.addAdwordsAccount(l).subscribe(l=>{if(this._fuseProgressiveBarService.hide(),this._dialogService._openInfoDialog(l.messages[0]),l.data.isRefresh)return this._fuseNavigationService.reloadNavigation(),void this._router.navigateByUrl("/danh-sach-tai-khoan");this.isConnected=!0,this.connectedAccountId=l.data.account._id,this.connectedAdsId=this._adsAccountIdPipe.transform(l.data.account.adsId),this._sessionService.setActiveAccountId(this.connectedAccountId),this._sessionService.setActiveAdsAccountId(this.connectedAdsId),this._sessionService.setAccountId(this.connectedAccountId),this._sessionService.setAdwordId(this.connectedAdsId),this._fuseNavigationService.reloadNavigation(),this.isAccountListShown&&this.getAdsAccounts(),this.isProcessing=!1},l=>{this.isConnected=!1,this.connectedAccountId="",this.connectedAdsId="",this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)}onClickBtnSubmit(){this.onSubmit()}initForm(){this.form=this.fb.group({adWordId:[null,[I.v.required]]})}generatePostObject(){const l=Object.assign({},this.form.value);return l.adWordId=l.adWordId.replace(/[^a-zA-Z0-9 ]/g,""),l}onPressId(l){return l>=48&&l<=57||45===l}}var W=t("iInd"),H=u.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:30px;width:100%}.submit-button[_ngcontent-%COMP%]{height:58px;margin:4px 0 2px 2px;width:120px}.message[_ngcontent-%COMP%]{border:1px solid #d2d2d2;box-shadow:1px 1px 2px silver;background-color:#fff;min-width:350px;margin-bottom:10px}.message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]{padding:10px;font-size:18px;font-style:tahoma}.message[_ngcontent-%COMP%]   .message-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px;margin-right:10px}.message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{padding:10px}.step[_ngcontent-%COMP%]{color:#039be5}.box[_ngcontent-%COMP%]{padding:30px}.loginWithGoogle[_ngcontent-%COMP%]{display:table;margin:20px auto 10px}.loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;border-radius:0}.loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:24px;width:24px;margin-top:-5px;margin-right:5px}.loginWithGoogle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   img[_ngcontent-%COMP%]{opacity:.4}.loginWithGoogle[_ngcontent-%COMP%]   .connect-by-emai-button[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.6)}.loginWithGoogle[_ngcontent-%COMP%]   .disconnect-by-email-button[_ngcontent-%COMP%]{background:#cf493c;color:#fff}.loginWithGoogle[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{font-size:12px;font-style:italic}.ads-account-list[_ngcontent-%COMP%]{padding-top:20px}.ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]{text-align:center;padding-top:10px}.ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:0}.ads-account-list[_ngcontent-%COMP%]   .div-connect-account-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-title[_ngcontent-%COMP%]{background-color:#039be5;color:#fff;box-shadow:1px 1px 4px silver;font-weight:700;padding:20px}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow:auto;background-color:#fff;box-shadow:1px 1px 4px silver}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{box-shadow:none}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:rgba(3,155,229,.1)}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{color:#039be5}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   .disabled-cell[_ngcontent-%COMP%]{color:silver}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 12%}.ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:last-child, .ads-account-list[_ngcontent-%COMP%]   .ads-account-list-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:last-child{display:flex;justify-content:center}.g-sign-in-button[_ngcontent-%COMP%]{background:#4285f4;height:40px;border-width:0;border-radius:2px;white-space:nowrap;padding:0;margin:10px;display:inline-block;width:210px;color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.25);transition:background-color 218ms,border-color 218ms,box-shadow 218ms}.text-container[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-family:Roboto,arial,sans-serif;font-weight:500;letter-spacing:.21px;font-size:14px;border:none;text-align:center;width:166px;padding-top:10px}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{padding:0 5px 0 0;font-size:12px}}"]],data:{}});function z(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,3,"button",[["class","connect-by-email-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.getAdsAccounts()&&u),u},c.d,c.b)),u.vb(1,180224,null,0,i.b,[u.n,a.h,[2,s.a]],{disabled:[0,"disabled"]},null),(l()(),u.wb(2,0,null,0,0,"img",[["alt",""],["src","https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"]],null,null,null,null,null)),(l()(),u.Ob(-1,0,["K\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"]))],function(l,n){l(n,1,0,n.component.isProcessing)},function(l,n){l(n,0,0,u.Gb(n,1).disabled||null,"NoopAnimations"===u.Gb(n,1)._animationMode)})}function K(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,3,"button",[["class","disconnect-by-email-button"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;return"click"===n&&(e.isAccountListShown=!1,u=!1!==(e.selectedAccount="")&&u),u},c.d,c.b)),u.vb(1,180224,null,0,i.b,[u.n,a.h,[2,s.a]],{disabled:[0,"disabled"]},null),(l()(),u.wb(2,0,null,0,0,"img",[["alt",""],["src","https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"]],null,null,null,null,null)),(l()(),u.Ob(-1,0,["H\u1ee7y k\u1ebft n\u1ed1i nhanh b\u1eb1ng Gmail"]))],function(l,n){l(n,1,0,n.component.isProcessing)},function(l,n){l(n,0,0,u.Gb(n,1).disabled||null,"NoopAnimations"===u.Gb(n,1)._animationMode)})}function V(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,r.e,[d.d,u.n],null,null),(l()(),u.Ob(-1,null,[" # "]))],null,null)}function F(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),u.vb(1,16384,null,0,r.a,[d.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,0,0,!n.context.$implicit.availableToConnect),l(n,2,0,n.context.index+1)})}function $(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,r.e,[d.d,u.n],null,null),(l()(),u.Ob(-1,null,[" Google Ads ID "]))],null,null)}function q(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),u.vb(1,16384,null,0,r.a,[d.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,0,0,!n.context.$implicit.availableToConnect),l(n,2,0,n.context.$implicit.googleAdId)})}function J(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,r.e,[d.d,u.n],null,null),(l()(),u.Ob(-1,null,[" T\xean "]))],null,null)}function Z(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),u.vb(1,16384,null,0,r.a,[d.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,0,0,!n.context.$implicit.availableToConnect),l(n,2,0,n.context.$implicit.name)})}function X(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,r.e,[d.d,u.n],null,null),(l()(),u.Ob(-1,null,[" Ch\u1ecdn t\u1ea1i \u0111\xe2y "]))],null,null)}function Y(l){return u.Qb(0,[(l()(),u.wb(0,16777216,null,null,2,"mat-radio-button",[["class","mat-radio-button"],["disabled",""]],[[2,"mat-radio-checked",null],[2,"mat-radio-disabled",null],[2,"_mat-animation-noopable",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null],[1,"tabindex",0],[1,"id",0]],[[null,"focus"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var e=!0;return"focus"===n&&(e=!1!==u.Gb(l,1)._inputElement.nativeElement.focus()&&e),"longpress"===n&&(e=!1!==u.Gb(l,2).show()&&e),"keydown"===n&&(e=!1!==u.Gb(l,2)._handleKeydown(t)&&e),"touchend"===n&&(e=!1!==u.Gb(l,2)._handleTouchend()&&e),e},b.b,b.a)),u.vb(1,4440064,null,0,g.a,[[2,g.b],u.n,u.i,a.h,h.d,[2,s.a]],{value:[0,"value"],disabled:[1,"disabled"]},null),u.vb(2,212992,null,0,m.d,[p.c,u.n,v.b,u.U,u.C,f.a,a.c,a.h,m.b,[2,_.b],[2,m.a],[2,w.f]],{message:[0,"message"]},null),(l()(),u.lb(0,null,null,0))],function(l,n){l(n,1,0,u.yb(1,"",n.parent.context.$implicit.googleAdId,""),""),l(n,2,0,u.yb(1,"",n.parent.context.$implicit.reason,""))},function(l,n){l(n,0,0,u.Gb(n,1).checked,u.Gb(n,1).disabled,"NoopAnimations"===u.Gb(n,1)._animationMode,"primary"===u.Gb(n,1).color,"accent"===u.Gb(n,1).color,"warn"===u.Gb(n,1).color,-1,u.Gb(n,1).id)})}function ll(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,1,"mat-radio-button",[["class","mat-radio-button"]],[[2,"mat-radio-checked",null],[2,"mat-radio-disabled",null],[2,"_mat-animation-noopable",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null],[1,"tabindex",0],[1,"id",0]],[[null,"change"],[null,"focus"]],function(l,n,t){var e=!0,o=l.component;return"focus"===n&&(e=!1!==u.Gb(l,1)._inputElement.nativeElement.focus()&&e),"change"===n&&(e=!1!==o.selectAccount(t)&&e),e},b.b,b.a)),u.vb(1,4440064,null,0,g.a,[[2,g.b],u.n,u.i,a.h,h.d,[2,s.a]],{value:[0,"value"]},{change:"change"})],function(l,n){l(n,1,0,u.yb(1,"",n.parent.context.$implicit.googleAdId,""))},function(l,n){l(n,0,0,u.Gb(n,1).checked,u.Gb(n,1).disabled,"NoopAnimations"===u.Gb(n,1)._animationMode,"primary"===u.Gb(n,1).color,"accent"===u.Gb(n,1).color,"warn"===u.Gb(n,1).color,-1,u.Gb(n,1).id)})}function nl(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,5,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[2,"disabled-cell",null]],null,null,null,null)),u.vb(1,16384,null,0,r.a,[d.d,u.n],null,null),(l()(),u.lb(16777216,null,null,1,null,Y)),u.vb(3,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.lb(16777216,null,null,1,null,ll)),u.vb(5,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,!n.context.$implicit.availableToConnect),l(n,5,0,n.context.$implicit.availableToConnect)},function(l,n){l(n,0,0,!n.context.$implicit.availableToConnect)})}function tl(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,O.d,O.a)),u.Lb(6144,null,d.k,null,[r.g]),u.vb(2,49152,null,0,r.g,[],null,null)],null,null)}function ul(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,O.e,O.b)),u.Lb(6144,null,d.m,null,[r.i]),u.vb(2,49152,null,0,r.i,[],null,null)],null,null)}function el(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,75,"div",[["class","ads-account-list"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,1,"div",[["class","ads-account-list-title"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" VUI L\xd2NG L\u1ef0A CH\u1eccN T\xc0I KHO\u1ea2N GOOGLE ADS C\u1ee6A B\u1ea0N "])),(l()(),u.wb(3,0,null,null,65,"div",[["class","ads-account-list-wrapper"]],null,null,null,null,null)),(l()(),u.wb(4,0,null,null,64,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,O.f,O.c)),u.Lb(6144,null,d.o,null,[r.k]),u.vb(6,2342912,null,4,r.k,[u.v,u.i,u.n,[8,null],[2,_.b],A.d,f.a],{dataSource:[0,"dataSource"]},null),u.Mb(603979776,1,{_contentColumnDefs:1}),u.Mb(603979776,2,{_contentRowDefs:1}),u.Mb(603979776,3,{_contentHeaderRowDefs:1}),u.Mb(603979776,4,{_contentFooterRowDefs:1}),(l()(),u.wb(11,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.vb(13,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Mb(603979776,5,{cell:0}),u.Mb(603979776,6,{headerCell:0}),u.Mb(603979776,7,{footerCell:0}),u.Lb(2048,[[1,4]],d.d,null,[r.c]),(l()(),u.lb(0,null,null,2,null,V)),u.vb(19,16384,null,0,r.f,[u.R],null,null),u.Lb(2048,[[6,4]],d.j,null,[r.f]),(l()(),u.lb(0,null,null,2,null,F)),u.vb(22,16384,null,0,r.b,[u.R],null,null),u.Lb(2048,[[5,4]],d.b,null,[r.b]),(l()(),u.wb(24,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.vb(26,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Mb(603979776,8,{cell:0}),u.Mb(603979776,9,{headerCell:0}),u.Mb(603979776,10,{footerCell:0}),u.Lb(2048,[[1,4]],d.d,null,[r.c]),(l()(),u.lb(0,null,null,2,null,$)),u.vb(32,16384,null,0,r.f,[u.R],null,null),u.Lb(2048,[[9,4]],d.j,null,[r.f]),(l()(),u.lb(0,null,null,2,null,q)),u.vb(35,16384,null,0,r.b,[u.R],null,null),u.Lb(2048,[[8,4]],d.b,null,[r.b]),(l()(),u.wb(37,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.vb(39,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Mb(603979776,11,{cell:0}),u.Mb(603979776,12,{headerCell:0}),u.Mb(603979776,13,{footerCell:0}),u.Lb(2048,[[1,4]],d.d,null,[r.c]),(l()(),u.lb(0,null,null,2,null,J)),u.vb(45,16384,null,0,r.f,[u.R],null,null),u.Lb(2048,[[12,4]],d.j,null,[r.f]),(l()(),u.lb(0,null,null,2,null,Z)),u.vb(48,16384,null,0,r.b,[u.R],null,null),u.Lb(2048,[[11,4]],d.b,null,[r.b]),(l()(),u.wb(50,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.vb(52,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Mb(603979776,14,{cell:0}),u.Mb(603979776,15,{headerCell:0}),u.Mb(603979776,16,{footerCell:0}),u.Lb(2048,[[1,4]],d.d,null,[r.c]),(l()(),u.lb(0,null,null,2,null,X)),u.vb(58,16384,null,0,r.f,[u.R],null,null),u.Lb(2048,[[15,4]],d.j,null,[r.f]),(l()(),u.lb(0,null,null,2,null,nl)),u.vb(61,16384,null,0,r.b,[u.R],null,null),u.Lb(2048,[[14,4]],d.b,null,[r.b]),(l()(),u.lb(0,null,null,2,null,tl)),u.vb(64,540672,null,0,r.h,[u.R,u.v],{columns:[0,"columns"],sticky:[1,"sticky"]},null),u.Lb(2048,[[3,4]],d.l,null,[r.h]),(l()(),u.lb(0,null,null,2,null,ul)),u.vb(67,540672,null,0,r.j,[u.R,u.v],{columns:[0,"columns"]},null),u.Lb(2048,[[2,4]],d.n,null,[r.j]),(l()(),u.wb(69,0,null,null,6,"p",[["class","div-connect-account-button"]],null,null,null,null,null)),(l()(),u.wb(70,0,null,null,5,"button",[["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.connectAccountByEmail()&&u),u},c.d,c.b)),u.vb(71,180224,null,0,i.b,[u.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),u.wb(72,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,C.b,C.a)),u.vb(73,9158656,null,0,P.b,[u.n,P.d,[8,null],[2,P.a]],null,null),(l()(),u.Ob(-1,0,["wifi"])),(l()(),u.Ob(-1,0,[" K\u1ebft n\u1ed1i t\xe0i kho\u1ea3n "]))],function(l,n){var t=n.component;l(n,6,0,t.adsAccounts),l(n,13,0,"order"),l(n,26,0,"adsId"),l(n,39,0,"name"),l(n,52,0,"selection"),l(n,64,0,t.adsAccountColumns,!0),l(n,67,0,t.adsAccountColumns),l(n,71,0,!t.selectedAccount||t.isProcessing,"accent"),l(n,73,0)},function(l,n){l(n,70,0,u.Gb(n,71).disabled||null,"NoopAnimations"===u.Gb(n,71)._animationMode),l(n,72,0,u.Gb(n,73).inline,"primary"!==u.Gb(n,73).color&&"accent"!==u.Gb(n,73).color&&"warn"!==u.Gb(n,73).color)})}function ol(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,43,"div",[["gdArea","content"]],null,null,null,null,null)),u.vb(1,671744,null,0,M.c,[u.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(l()(),u.wb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.wb(3,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),u.wb(4,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),u.wb(5,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["[3]"])),(l()(),u.Ob(-1,null,[" VUI L\xd2NG \u0110\u1ed2NG \xdd Y\xcaU C\u1ea6U K\u1ebeT N\u1ed0I"])),(l()(),u.wb(8,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),u.wb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 1: "])),(l()(),u.Ob(-1,null,[" Truy c\u1eadp l\u1ea1i t\xe0i kho\u1ea3n AdWords c\u1ee7a b\u1ea1n "])),(l()(),u.wb(12,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["adwords.google.com"])),(l()(),u.Ob(-1,null,[" v\xe0 b\u1ea5m v\xe0o icon \u1edf menu b\xean tr\xe1i "])),(l()(),u.wb(15,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),u.wb(16,0,null,null,0,"img",[["src","/assets/images/adwords-caidat-b1-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),u.wb(17,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),u.wb(18,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 2: "])),(l()(),u.Ob(-1,null,[" Sau \u0111\xf3 b\u1ea5m v\xe0o "])),(l()(),u.wb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" Ng\u01b0\u1eddi Qu\u1ea3n L\xfd "])),(l()(),u.Ob(-1,null,[" v\xe0 b\u1ea5m "])),(l()(),u.wb(24,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Ch\u1ea5p Thu\u1eadn"])),(l()(),u.Ob(-1,null,[" (n\u1ebfu b\u1ea1n kh\xf4ng th\u1ea5y ng\u01b0\u1eddi qu\u1ea3n l\xfd vui l\xf2ng ch\u1edd kho\u1ea3ng 5 ph\xfat)"])),(l()(),u.wb(27,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),u.wb(28,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b2-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),u.wb(29,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),u.wb(30,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 3: "])),(l()(),u.Ob(-1,null,["M\u1ed9t th\xf4ng b\xe1o hi\u1ec7n ra, b\u1ea1n ch\u1ecdn "])),(l()(),u.wb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["C\u1ea5p Quy\u1ec1n Truy C\u1eadp"])),(l()(),u.wb(35,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),u.wb(36,0,null,null,0,"img",[["src","./assets/images/adwords-caidat-b3-moi.jpg?v=1"]],null,null,null,null,null)),(l()(),u.wb(37,0,null,null,6,"p",[["class","text-center"],["style","padding-top: 20px"]],null,null,null,null,null)),(l()(),u.wb(38,0,null,null,5,"button",[["aria-label","T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I"],["color","warn"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.completeAccountConnection()&&u),u},c.d,c.b)),u.vb(39,180224,null,0,i.b,[u.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),u.wb(40,0,null,0,2,"mat-icon",[["class","done_outline mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,C.b,C.a)),u.vb(41,9158656,null,0,P.b,[u.n,P.d,[8,null],[2,P.a]],null,null),(l()(),u.Ob(-1,0,["done_outline"])),(l()(),u.Ob(-1,0,[" T\xd4I \u0110\xc3 HO\xc0N T\u1ea4T K\u1ebeT N\u1ed0I "]))],function(l,n){var t=n.component;l(n,1,0,"content"),l(n,39,0,t.isProcessing,"warn"),l(n,41,0)},function(l,n){l(n,38,0,u.Gb(n,39).disabled||null,"NoopAnimations"===u.Gb(n,39)._animationMode),l(n,40,0,u.Gb(n,41).inline,"primary"!==u.Gb(n,41).color&&"accent"!==u.Gb(n,41).color&&"warn"!==u.Gb(n,41).color)})}function cl(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,56,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,51,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),u.vb(2,671744,null,0,G.c,[u.n,x.j,[2,G.k],x.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),u.vb(3,1720320,null,0,G.d,[u.n,u.C,_.b,x.j,[2,G.j],x.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),(l()(),u.wb(4,0,null,null,13,"div",[["class","connect-button"],["gdArea","connect-button"]],null,null,null,null,null)),u.vb(5,671744,null,0,M.c,[u.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(l()(),u.wb(6,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),u.wb(7,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),u.wb(8,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["[1]"])),(l()(),u.Ob(-1,null,[" K\u1ebeT N\u1ed0I NHANH B\u1eb0NG GMAIL"])),(l()(),u.wb(11,0,null,null,1,"p",[["style","text-align: justify"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" S\u1eed d\u1ee5ng t\xe0i kho\u1ea3n Gmail qu\u1ea3n l\xfd Google AdWords, b\u1ea5m k\u1ebft n\u1ed1i nhanh \u0111\u1ec3 ho\xe0n t\u1ea5t qu\xe1 tr\xecnh k\u1ebft n\u1ed1i"])),(l()(),u.wb(13,0,null,null,4,"div",[["class","loginWithGoogle"]],null,null,null,null,null)),(l()(),u.lb(16777216,null,null,1,null,z)),u.vb(15,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.lb(16777216,null,null,1,null,K)),u.vb(17,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.wb(18,0,null,null,34,"div",[["class","input-side"],["gdArea","input-side"]],null,null,null,null,null)),u.vb(19,671744,null,0,M.c,[u.n,x.j,[2,M.b],x.f],{gdArea:[0,"gdArea"]},null),(l()(),u.wb(20,0,null,null,4,"h3",[],null,null,null,null,null)),(l()(),u.wb(21,0,null,null,3,"strong",[],null,null,null,null,null)),(l()(),u.wb(22,0,null,null,1,"span",[["class","step"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["[2]"])),(l()(),u.Ob(-1,null,[" K\u1ebeT N\u1ed0I TH\xd4NG QUA M\xc3 GOOGLE ADS ID"])),(l()(),u.wb(25,0,null,null,9,"p",[["style","text-align: justify"]],null,null,null,null,null)),(l()(),u.wb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 1: "])),(l()(),u.Ob(-1,null,[" \u0110\u0103ng nh\u1eadp "])),(l()(),u.wb(29,0,null,null,1,"a",[["href","https://ads.google.com/intl/vi_VN/home/"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["adwords.google.com"])),(l()(),u.Ob(-1,null,[", ID t\xe0i kho\u1ea3n Google Ads c\u1ee7a b\u1ea1n s\u1ebd n\u1eb1m \u1edf g\xf3c ph\u1ea3i tr\xean c\xf9ng. "])),(l()(),u.wb(32,0,null,null,1,"span",[["style","color: deeppink;"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["VD: 552-999-5152"])),(l()(),u.Ob(-1,null,[" l\xe0 ID t\xe0i kho\u1ea3n Google Ads c\u1ee7a b\u1ea1n"])),(l()(),u.wb(35,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==u.Gb(l,37).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Gb(l,37).onReset()&&e),e},null,null)),u.vb(36,16384,null,0,I.A,[],null,null),u.vb(37,540672,null,0,I.j,[[8,null],[8,null]],{form:[0,"form"]},null),u.Lb(2048,null,I.c,null,[I.j]),u.vb(39,16384,null,0,I.q,[[4,I.c]],null,null),(l()(),u.wb(40,0,null,null,12,"div",[["fxLayout","row"]],null,null,null,null,null)),u.vb(41,671744,null,0,G.c,[u.n,x.j,[2,G.k],x.f],{fxLayout:[0,"fxLayout"]},null),(l()(),u.wb(42,0,null,null,4,"app-input-text",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"data-id",0]],[[null,"keypress"]],function(l,n,t){var u=!0;return"keypress"===n&&(u=!1!==l.component.onPressId(t.keyCode)&&u),u},E.b,E.a)),u.vb(43,671744,null,0,I.h,[[3,I.c],[8,null],[8,null],[8,null],[2,I.y]],{name:[0,"name"]},null),u.Lb(2048,null,I.o,null,[I.h]),u.vb(45,16384,null,0,I.p,[[4,I.o]],null,null),u.vb(46,245760,null,0,k.a,[u.n,[6,I.o]],{placeholder:[0,"placeholder"],title:[1,"title"],errors:[2,"errors"],pristine:[3,"pristine"]},null),(l()(),u.wb(47,0,null,null,5,"button",[["aria-label","K\u1ebft n\u1ed1i"],["class","submit-button"],["color","accent"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onClickBtnSubmit()&&u),u},c.d,c.b)),u.vb(48,180224,null,0,i.b,[u.n,a.h,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),u.wb(49,0,null,0,2,"mat-icon",[["class","add_box mat-icon notranslate"],["matSuffix",""],["role","img"],["style","font-size: 20px"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,C.b,C.a)),u.vb(50,9158656,null,0,P.b,[u.n,P.d,[8,null],[2,P.a]],null,null),(l()(),u.Ob(-1,0,["wifi"])),(l()(),u.Ob(-1,0,[" K\u1ebft n\u1ed1i "])),(l()(),u.lb(16777216,null,null,1,null,el)),u.vb(54,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.lb(16777216,null,null,1,null,ol)),u.vb(56,16384,null,0,A.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,"row","column"),l(n,3,0,"20px"),l(n,5,0,"connect-button"),l(n,15,0,!t.isAccountListShown),l(n,17,0,t.isAccountListShown),l(n,19,0,"input-side"),l(n,37,0,t.form),l(n,41,0,"row"),l(n,43,0,"adWordId"),l(n,46,0,"V\xed d\u1ee5: 5456445193 ho\u1eb7c 545-644-5193","Google Ads ID",t.getMessageErrors("adWordId"),!0),l(n,48,0,t.isProcessing,"accent"),l(n,50,0),l(n,54,0,t.isAccountListShown),l(n,56,0,t.isConnected)},function(l,n){l(n,35,0,u.Gb(n,39).ngClassUntouched,u.Gb(n,39).ngClassTouched,u.Gb(n,39).ngClassPristine,u.Gb(n,39).ngClassDirty,u.Gb(n,39).ngClassValid,u.Gb(n,39).ngClassInvalid,u.Gb(n,39).ngClassPending),l(n,42,0,u.Gb(n,45).ngClassUntouched,u.Gb(n,45).ngClassTouched,u.Gb(n,45).ngClassPristine,u.Gb(n,45).ngClassDirty,u.Gb(n,45).ngClassValid,u.Gb(n,45).ngClassInvalid,u.Gb(n,45).ngClassPending,u.Gb(n,46).id),l(n,47,0,u.Gb(n,48).disabled||null,"NoopAnimations"===u.Gb(n,48)._animationMode),l(n,49,0,u.Gb(n,50).inline,"primary"!==u.Gb(n,50).color&&"accent"!==u.Gb(n,50).color&&"warn"!==u.Gb(n,50).color)})}function il(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,1,"app-add-adwords-accounts",[],null,null,null,cl,H)),u.vb(1,245760,null,0,U,[S.a,D.a,R.a,T,j.a,W.p,B.a],null,null)],function(l,n){l(n,1,0)},null)}var al=u.sb("app-add-adwords-accounts",U,il,{},{},[]),sl=t("NcP4"),rl=t("POq0"),dl=t("Xd0L"),bl=t("HsOI"),gl=t("bOtU");class hl{}var ml=t("FVPZ"),pl=t("ura0"),vl=t("u9T3"),fl=t("RaCk"),_l=t("Tk7p"),wl=t("5HBU"),Al=t("oapL"),Ol=t("ZwOa"),Cl=t("D1Ds"),Pl=t("/ALb"),Ml=t("02hT"),xl=t("zMNK");t.d(n,"AddAdwordsAccountsModuleNgFactory",function(){return Gl});var Gl=u.tb(e,[],function(l){return u.Db([u.Eb(512,u.l,u.gb,[[8,[o.a,al,sl.a]],[3,u.l],u.A]),u.Eb(4608,A.o,A.n,[u.x,[2,A.F]]),u.Eb(4608,I.x,I.x,[]),u.Eb(4608,I.f,I.f,[]),u.Eb(5120,u.b,function(l,n){return[x.k(l,n)]},[A.d,u.F]),u.Eb(4608,rl.c,rl.c,[]),u.Eb(4608,dl.b,dl.z,[]),u.Eb(6144,bl.d,null,[k.a]),u.Eb(5120,gl.e,gl.d,[gl.a,gl.b]),u.Eb(4608,gl.g,gl.g,[gl.e]),u.Eb(4608,p.c,p.c,[p.i,p.e,u.l,p.h,p.f,u.t,u.C,A.d,_.b,[2,A.i]]),u.Eb(5120,p.j,p.k,[p.c]),u.Eb(5120,m.b,m.c,[p.c]),u.Eb(4608,w.e,dl.c,[[2,dl.g],[2,dl.l]]),u.Eb(4608,T,T,[N.c]),u.Eb(1073742336,A.c,A.c,[]),u.Eb(1073742336,W.t,W.t,[[2,W.y],[2,W.p]]),u.Eb(1073742336,hl,hl,[]),u.Eb(1073742336,_.a,_.a,[]),u.Eb(1073742336,dl.l,dl.l,[[2,dl.d],[2,w.f]]),u.Eb(1073742336,dl.n,dl.n,[]),u.Eb(1073742336,ml.a,ml.a,[]),u.Eb(1073742336,I.w,I.w,[]),u.Eb(1073742336,I.l,I.l,[]),u.Eb(1073742336,I.u,I.u,[]),u.Eb(1073742336,x.c,x.c,[]),u.Eb(1073742336,G.g,G.g,[]),u.Eb(1073742336,pl.c,pl.c,[]),u.Eb(1073742336,M.a,M.a,[]),u.Eb(1073742336,vl.a,vl.a,[[2,x.h],u.F]),u.Eb(1073742336,fl.a,fl.a,[]),u.Eb(1073742336,_l.a,_l.a,[]),u.Eb(1073742336,wl.a,wl.a,[]),u.Eb(1073742336,f.b,f.b,[]),u.Eb(1073742336,Al.c,Al.c,[]),u.Eb(1073742336,rl.d,rl.d,[]),u.Eb(1073742336,bl.e,bl.e,[]),u.Eb(1073742336,Ol.b,Ol.b,[]),u.Eb(1073742336,P.c,P.c,[]),u.Eb(1073742336,Cl.a,Cl.a,[]),u.Eb(1073742336,dl.v,dl.v,[]),u.Eb(1073742336,i.c,i.c,[]),u.Eb(1073742336,gl.c,gl.c,[]),u.Eb(1073742336,Pl.a,Pl.a,[]),u.Eb(1073742336,Ml.b,Ml.b,[]),u.Eb(1073742336,d.p,d.p,[]),u.Eb(1073742336,r.m,r.m,[]),u.Eb(1073742336,g.c,g.c,[]),u.Eb(1073742336,a.a,a.a,[]),u.Eb(1073742336,xl.g,xl.g,[]),u.Eb(1073742336,v.c,v.c,[]),u.Eb(1073742336,p.g,p.g,[]),u.Eb(1073742336,m.e,m.e,[]),u.Eb(1073742336,e,e,[]),u.Eb(1024,W.m,function(){return[[{path:"",pathMatch:"full",component:U}]]},[]),u.Eb(256,gl.b,void 0,[]),u.Eb(256,gl.a,gl.f,[])])})}}]);