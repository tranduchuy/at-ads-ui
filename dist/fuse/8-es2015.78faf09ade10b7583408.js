(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yPfU:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var a=t("NcP4"),c=t("pMnS"),i=t("8rEH"),o=t("zQui"),s=t("Z5h4"),b=t("s7LF"),r=t("r0V8"),d=t("Mz6y"),g=t("QQfA"),p=t("hOhj"),h=t("/HVE"),m=t("5GAg"),v=t("IP0z"),C=t("cUpR"),f=t("omvX"),w=t("pIm3"),_=t("SVse"),O=t("bujt"),M=t("Fwaw"),x=t("Mr+X"),P=t("Gi4r"),k=t("igqZ"),E=t("k1t7"),y=t("H0VJ"),L=t("mZtN"),T=t("pZ6u"),G=t("Z0fI"),I=t("f3OE"),S=t("/uUt");class A extends T.a{constructor(l,n,t,u,e,a){super(),this._fuseProgressiveBarService=l,this._dialogService=n,this._sessionService=t,this._addTrackingTagsService=u,this._router=e,this._fuseSlashScreenService=a,this.displayedColumns=["order","id","name","tracking"],this.isProcessing=!1,this.campaignList=[],this.selectedCampaigns=[],this.trackingCampaignList=[]}ngOnInit(){const l=this._sessionService.getAccountId().pipe(Object(S.a)()).subscribe(l=>{l&&this.getOriginalCampaigns()});this.subscriptions.push(l)}onSelectAllCampaign(l){this.selectedCampaigns=l.checked?this.campaignList.map(l=>l.id):[]}onSelectCampaign(l,n){l.checked?this.selectedCampaigns.includes(n)||this.selectedCampaigns.push(n):this.selectedCampaigns=this.selectedCampaigns.filter(l=>l!==n)}addCampaignTracking(){const l={campaignIds:this.selectedCampaigns};this._fuseProgressiveBarService.show(),this.isProcessing=!0;const n=this._addTrackingTagsService.addCampaignTracking(l).subscribe(l=>{this.getOriginalCampaigns(),setTimeout(()=>{this._dialogService._openSuccessDialog(l),this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},l=>{this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)}getOriginalCampaigns(){this.isProcessing=!0,this._fuseProgressiveBarService.show();const l=this._addTrackingTagsService.getOriginalCampaigns().subscribe(l=>{this.campaignList=l.data.campaignList;const n=this._addTrackingTagsService.getTrackingCampaigns().subscribe(l=>{this.trackingCampaignList=l.data.campaignIds,this.selectedCampaigns=this.trackingCampaignList,setTimeout(()=>{this._fuseProgressiveBarService.hide(),this.isProcessing=!1},0)},l=>{this.trackingCampaignList=[],this._fuseProgressiveBarService.hide(),this._dialogService._openErrorDialog(l.error),this.isProcessing=!1});this.subscriptions.push(n)},l=>{l.error.messages&&(this.campaignList=[],this.trackingCampaignList=[],this._dialogService._openErrorDialog(l.error),this.isProcessing=!1),this._fuseProgressiveBarService.hide()});this.subscriptions.push(l)}}var R=t("iInd"),D=u.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%]{margin-top:50px;font-weight:700;text-align:justify}.container[_ngcontent-%COMP%]   .usage[_ngcontent-%COMP%]{text-align:justify;color:gray;padding-top:20px}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]{margin-top:20px}.container[_ngcontent-%COMP%]   .tracking-example[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%]{font-weight:700;text-align:center;padding:20px 10px 10px}.container[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%]{display:table;margin:20px auto 0;text-align:center;background-color:#eee;width:80%;padding-top:20px;padding-bottom:20px;border-left:5px solid #ff8c00}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{height:500px;box-shadow:2px 2px 5px silver;background-color:#fff;overflow:auto}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-table[_ngcontent-%COMP%]{width:100%;box-shadow:none}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{transition:.2s}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(1), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(1){flex:0 0 10%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(3), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(3){flex:0 0 50%}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:nth-child(4), .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:nth-child(4){flex:0 0 20%;padding-left:20px}.container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{min-width:1000px;width:100%}.container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin:10px auto 0}.container[_ngcontent-%COMP%]   .enable-status[_ngcontent-%COMP%]{color:#1e90ff}.container[_ngcontent-%COMP%]   .disabled-status[_ngcontent-%COMP%]{color:silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:15px}.submit-button[_ngcontent-%COMP%]{font-size:12px}}"]],data:{}});function N(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.e,[o.d,u.n],null,null),(l()(),u.Ob(-1,null,[" # "]))],null,null)}function Q(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.a,[o.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.index+1)})}function H(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.e,[o.d,u.n],null,null),(l()(),u.Ob(-1,null,[" ID "]))],null,null)}function B(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.a,[o.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.id)})}function j(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.e,[o.d,u.n],null,null),(l()(),u.Ob(-1,null,[" Chi\u1ebfn d\u1ecbch "]))],null,null)}function K(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.a,[o.d,u.n],null,null),(l()(),u.Ob(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function U(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,7,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.e,[o.d,u.n],null,null),(l()(),u.wb(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),u.wb(3,16777216,null,null,3,"mat-checkbox",[["class","mat-checkbox"],["matTooltip","Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"],["style","margin-right: 5px"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var e=!0,a=l.component;return"longpress"===n&&(e=!1!==u.Gb(l,5).show()&&e),"keydown"===n&&(e=!1!==u.Gb(l,5)._handleKeydown(t)&&e),"touchend"===n&&(e=!1!==u.Gb(l,5)._handleTouchend()&&e),"change"===n&&(e=!1!==a.onSelectAllCampaign(t)&&e),e},s.b,s.a)),u.Lb(5120,null,b.n,function(l){return[l]},[r.b]),u.vb(5,212992,null,0,d.d,[g.c,u.n,p.b,u.U,u.C,h.a,m.c,m.h,d.b,[2,v.b],[2,d.a],[2,C.f]],{message:[0,"message"]},null),u.vb(6,8568832,null,0,r.b,[u.n,u.i,m.h,u.C,[8,null],[2,r.a],[2,f.a]],{checked:[0,"checked"]},{change:"change"}),(l()(),u.Ob(-1,null,[" G\u1eafn m\xe3 "]))],function(l,n){var t=n.component;l(n,5,0,"Ch\u1ecdn/ B\u1ecf ch\u1ecdn t\u1ea5t c\u1ea3"),l(n,6,0,t.selectedCampaigns.length===t.campaignList.length)},function(l,n){l(n,3,0,u.Gb(n,6).id,null,u.Gb(n,6).indeterminate,u.Gb(n,6).checked,u.Gb(n,6).disabled,"before"==u.Gb(n,6).labelPosition,"NoopAnimations"===u.Gb(n,6)._animationMode)})}function F(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.vb(1,16384,null,0,i.a,[o.d,u.n],null,null),(l()(),u.wb(2,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],function(l,n,t){var u=!0;return"change"===n&&(u=!1!==l.component.onSelectCampaign(t,l.context.$implicit.id)&&u),u},s.b,s.a)),u.Lb(5120,null,b.n,function(l){return[l]},[r.b]),u.vb(4,8568832,null,0,r.b,[u.n,u.i,m.h,u.C,[8,null],[2,r.a],[2,f.a]],{checked:[0,"checked"]},{change:"change"})],function(l,n){l(n,4,0,n.component.selectedCampaigns.includes(n.context.$implicit.id))},function(l,n){l(n,2,0,u.Gb(n,4).id,null,u.Gb(n,4).indeterminate,u.Gb(n,4).checked,u.Gb(n,4).disabled,"before"==u.Gb(n,4).labelPosition,"NoopAnimations"===u.Gb(n,4)._animationMode)})}function z(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,w.d,w.a)),u.Lb(6144,null,o.k,null,[i.g]),u.vb(2,49152,null,0,i.g,[],null,null)],null,null)}function V(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,w.e,w.b)),u.Lb(6144,null,o.m,null,[i.i]),u.vb(2,49152,null,0,i.i,[],null,null)],null,null)}function W(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,66,"div",[["class","table-wrapper"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,65,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,w.f,w.c)),u.Lb(6144,null,o.o,null,[i.k]),u.vb(3,2342912,null,4,i.k,[u.v,u.i,u.n,[8,null],[2,v.b],_.d,h.a],{dataSource:[0,"dataSource"]},null),u.Mb(603979776,1,{_contentColumnDefs:1}),u.Mb(603979776,2,{_contentRowDefs:1}),u.Mb(603979776,3,{_contentHeaderRowDefs:1}),u.Mb(603979776,4,{_contentFooterRowDefs:1}),(l()(),u.wb(8,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),u.vb(10,16384,null,3,i.c,[],{name:[0,"name"]},null),u.Mb(603979776,5,{cell:0}),u.Mb(603979776,6,{headerCell:0}),u.Mb(603979776,7,{footerCell:0}),u.Lb(2048,[[1,4]],o.d,null,[i.c]),(l()(),u.lb(0,null,null,2,null,N)),u.vb(16,16384,null,0,i.f,[u.R],null,null),u.Lb(2048,[[6,4]],o.j,null,[i.f]),(l()(),u.lb(0,null,null,2,null,Q)),u.vb(19,16384,null,0,i.b,[u.R],null,null),u.Lb(2048,[[5,4]],o.b,null,[i.b]),(l()(),u.wb(21,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),u.vb(23,16384,null,3,i.c,[],{name:[0,"name"]},null),u.Mb(603979776,8,{cell:0}),u.Mb(603979776,9,{headerCell:0}),u.Mb(603979776,10,{footerCell:0}),u.Lb(2048,[[1,4]],o.d,null,[i.c]),(l()(),u.lb(0,null,null,2,null,H)),u.vb(29,16384,null,0,i.f,[u.R],null,null),u.Lb(2048,[[9,4]],o.j,null,[i.f]),(l()(),u.lb(0,null,null,2,null,B)),u.vb(32,16384,null,0,i.b,[u.R],null,null),u.Lb(2048,[[8,4]],o.b,null,[i.b]),(l()(),u.wb(34,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),u.vb(36,16384,null,3,i.c,[],{name:[0,"name"]},null),u.Mb(603979776,11,{cell:0}),u.Mb(603979776,12,{headerCell:0}),u.Mb(603979776,13,{footerCell:0}),u.Lb(2048,[[1,4]],o.d,null,[i.c]),(l()(),u.lb(0,null,null,2,null,j)),u.vb(42,16384,null,0,i.f,[u.R],null,null),u.Lb(2048,[[12,4]],o.j,null,[i.f]),(l()(),u.lb(0,null,null,2,null,K)),u.vb(45,16384,null,0,i.b,[u.R],null,null),u.Lb(2048,[[11,4]],o.b,null,[i.b]),(l()(),u.Ob(-1,null,[' "let element" '])),(l()(),u.wb(48,0,null,null,12,null,null,null,null,null,null,null)),u.Lb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[i.c]),u.vb(50,16384,null,3,i.c,[],{name:[0,"name"]},null),u.Mb(603979776,14,{cell:0}),u.Mb(603979776,15,{headerCell:0}),u.Mb(603979776,16,{footerCell:0}),u.Lb(2048,[[1,4]],o.d,null,[i.c]),(l()(),u.lb(0,null,null,2,null,U)),u.vb(56,16384,null,0,i.f,[u.R],null,null),u.Lb(2048,[[15,4]],o.j,null,[i.f]),(l()(),u.lb(0,null,null,2,null,F)),u.vb(59,16384,null,0,i.b,[u.R],null,null),u.Lb(2048,[[14,4]],o.b,null,[i.b]),(l()(),u.lb(0,null,null,2,null,z)),u.vb(62,540672,null,0,i.h,[u.R,u.v],{columns:[0,"columns"],sticky:[1,"sticky"]},null),u.Lb(2048,[[3,4]],o.l,null,[i.h]),(l()(),u.lb(0,null,null,2,null,V)),u.vb(65,540672,null,0,i.j,[u.R,u.v],{columns:[0,"columns"]},null),u.Lb(2048,[[2,4]],o.n,null,[i.j])],function(l,n){var t=n.component;l(n,3,0,t.campaignList),l(n,10,0,"order"),l(n,23,0,"id"),l(n,36,0,"name"),l(n,50,0,"tracking"),l(n,62,0,t.displayedColumns,!0),l(n,65,0,t.displayedColumns)},null)}function q(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,6,"p",[["style","text-align: center"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,5,"button",[["class","submit-button"],["color","warn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.addCampaignTracking()&&u),u},O.d,O.b)),u.vb(2,180224,null,0,M.b,[u.n,m.h,[2,f.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),u.wb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),u.vb(4,9158656,null,0,P.b,[u.n,P.d,[8,null],[2,P.a]],null,null),(l()(),u.Ob(-1,0,["location_searching"])),(l()(),u.Ob(-1,0,[" G\u1eaeN M\xc3 TRACKING "]))],function(l,n){l(n,2,0,n.component.isProcessing,"warn"),l(n,4,0)},function(l,n){l(n,1,0,u.Gb(n,2).disabled||null,"NoopAnimations"===u.Gb(n,2)._animationMode),l(n,3,0,u.Gb(n,4).inline,"primary"!==u.Gb(n,4).color&&"accent"!==u.Gb(n,4).color&&"warn"!==u.Gb(n,4).color)})}function J(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,4,"p",[["class","notification"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" Ch\xfang t\xf4i kh\xf4ng t\xecm th\u1ea5y chi\u1ebfn d\u1ecbch n\xe0o \u0111ang ch\u1ea1y. Vui l\xf2ng th\u1eed l\u1ea1i ho\u1eb7c "])),(l()(),u.wb(2,0,null,null,1,"span",[["style","color: dodgerblue"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["li\xean h\u1ec7"])),(l()(),u.Ob(-1,null,[" v\u1edbi h\u1ed7 tr\u1ee3 vi\xean \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\xfap \u0111\u1ee1. "]))],null,null)}function Z(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,28,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,3,"div",[["class","title1"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" G\u1eaeN TRACKING THEO D\xd5I CHI\u1ebeN D\u1ecaCH T\xc0I KHO\u1ea2N "])),(l()(),u.wb(3,0,null,null,1,"span",[["style","color:black; font-weight: bolder"]],null,null,null,null,null)),(l()(),u.Ob(4,null,["",""])),(l()(),u.wb(5,0,null,null,3,"p",[["class","usage"]],null,null,null,null,null)),(l()(),u.wb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["C\xf4ng d\u1ee5ng c\u1ee7a Tracking:"])),(l()(),u.Ob(-1,null,[" Tracking l\xe0 \u0111o\u1ea1n m\xe3 nh\u1ecf, t\xedch h\u1ee3p v\xe0o trong qu\u1ea3ng c\xe1o AdWords \u0111\u1ec3 theo d\xf5i ho\u1ea1t \u0111\u1ed9ng b\u1ea5m qu\u1ea3ng c\xe1o "])),(l()(),u.wb(9,0,null,null,2,"div",[["class","tracking-example"]],null,null,null,null,null)),(l()(),u.wb(10,0,null,null,1,"img",[["alt","Photo about tracking"],["class","mat-card-image"],["mat-card-image",""],["src","../../../../assets/images/huong-dan-tracking.jpg"]],null,null,null,null,null)),u.vb(11,16384,null,0,k.a,[],null,null),(l()(),u.wb(12,0,null,null,3,"p",[["class","title2"]],null,null,null,null,null)),(l()(),u.wb(13,0,null,null,1,"span",[["style","color: dodgerblue"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["[G\u1eaeN M\xc3]"])),(l()(),u.Ob(-1,null,[" CH\u1eccN CHI\u1ebeN D\u1ecaCH C\u1ea6N G\u1eaeN M\xc3 "])),(l()(),u.wb(16,0,null,null,12,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==u.Gb(l,18).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Gb(l,18).onReset()&&e),e},null,null)),u.vb(17,16384,null,0,b.A,[],null,null),u.vb(18,4210688,null,0,b.r,[[8,null],[8,null]],null,null),u.Lb(2048,null,b.c,null,[b.r]),u.vb(20,16384,null,0,b.q,[[4,b.c]],null,null),(l()(),u.wb(21,0,null,null,1,"p",[["class","table-title"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Ch\u1ecdn chi\u1ebfn d\u1ecbch \u0111\u1ec3 g\u1eafn tracking (n\xean ch\u1ecdn t\u1ea5t c\u1ea3)"])),(l()(),u.lb(16777216,null,null,1,null,W)),u.vb(24,16384,null,0,_.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.lb(16777216,null,null,1,null,q)),u.vb(26,16384,null,0,_.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.lb(16777216,null,null,1,null,J)),u.vb(28,16384,null,0,_.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,24,0,t.campaignList.length>0&&!t.isProcessing),l(n,26,0,t.campaignList.length>0&&!t.isProcessing),l(n,28,0,0===t.campaignList.length&&!t.isProcessing)},function(l,n){l(n,4,0,n.component._sessionService.activeAdsAccountId),l(n,16,0,u.Gb(n,20).ngClassUntouched,u.Gb(n,20).ngClassTouched,u.Gb(n,20).ngClassPristine,u.Gb(n,20).ngClassDirty,u.Gb(n,20).ngClassValid,u.Gb(n,20).ngClassInvalid,u.Gb(n,20).ngClassPending)})}function $(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,1,"app-select-campaigns",[],null,null,null,Z,D)),u.vb(1,245760,null,0,A,[E.a,y.a,L.a,G.a,R.p,I.a],null,null)],function(l,n){l(n,1,0)},null)}var X=u.sb("app-select-campaigns",A,$,{},{},[]),Y=t("VDRc"),ll=t("/q54"),nl=t("5vgI"),tl=t("Cako"),ul=t("AytR");class el extends T.a{constructor(l,n,t){super(),this._activatedRoute=l,this._matDialog=n,this._addTrackingTagsService=t,this.hostTracking=ul.a.hostTracking,this.adsAccountIdPipe=new nl.a}ngOnInit(){const l=this._activatedRoute.params.subscribe(l=>{this.accountId=l.accountId;const n=this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId).subscribe(l=>{this.adsId=this.adsAccountIdPipe.transform(l.data.adsAccount.adsId),this.key=l.data.adsAccount.key});this.subscriptions.push(n)});this.subscriptions.push(l)}copyKey(l){document.addEventListener("copy",n=>{n.clipboardData.setData("text/plain",l),n.preventDefault(),document.removeEventListener("copy",null)}),document.execCommand("copy")}checkWebsiteTracking(){return this._matDialog.open(tl.a,{autoFocus:!1,maxWidth:"100vw !important"}).componentInstance.account={accountId:this.accountId,adsId:this.adsId}}}var al=t("s6ns"),cl=u.ub({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding:15px 30px;width:100%;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .title1[_ngcontent-%COMP%]{padding:15px;background-color:#f5f5f5;color:gray;font-size:16px;font-weight:700;box-shadow:2px 2px 5px silver}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:25px;line-height:30px}.container[_ngcontent-%COMP%]   .hightline[_ngcontent-%COMP%]{padding:5px;background-color:#eee;color:#ff1493}.container[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{padding:10px;width:100%;border:.5px solid silver;border-right:0;border-radius:5px 0 0 5px}.container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border-radius:0 5px 5px 0;border:.5px solid silver}@media screen and (max-width:600px){.container[_ngcontent-%COMP%]{padding:0 15px 15px}}"]],data:{}});function il(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,37,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.wb(1,0,null,null,3,"p",[["class","title1"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,[" G\u1eaeN M\xc3 TRACKING V\xc0O WEBSITE T\xc0I KHO\u1ea2N "])),(l()(),u.wb(3,0,null,null,1,"span",[["style","color: black"]],null,null,null,null,null)),(l()(),u.Ob(4,null,["",""])),(l()(),u.wb(5,0,null,null,5,"p",[["class","info"]],null,null,null,null,null)),(l()(),u.wb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["T\u1ea1i sao c\u1ea7n g\u1eafn m\xe3:"])),(l()(),u.Ob(-1,null,[" H\u1ec7 th\u1ed1ng \u0111\u01b0a v\xe0o m\xe3 tracking \u0111\u1ec3 ph\xe1t hi\u1ec7n s\u1ed1 \u0111i\u1ec7n tho\u1ea1i truy c\u1eadp v\xe0o website c\u1ee7a b\u1ea1n. B\u1ea1n c\xf3 th\u1ec3 b\u1ecf m\xe3 v\xe0o b\u1ea5t c\u1ee9 v\u1ecb tr\xed n\xe0o trong website. Tuy nhi\xean t\u1ed1t nh\u1ea5t h\xe3y b\u1ecf m\xe3 v\xe0o trong "])),(l()(),u.wb(9,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),u.wb(11,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),u.wb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 1:"])),(l()(),u.Ob(-1,null,[" Copy m\xe3 tracking "])),(l()(),u.wb(15,0,null,null,5,"div",[["fxLayout","row"],["style","padding-top: 10px"]],null,null,null,null,null)),u.vb(16,671744,null,0,Y.c,[u.n,ll.j,[2,Y.k],ll.f],{fxLayout:[0,"fxLayout"]},null),(l()(),u.wb(17,0,[["inputKey",1]],null,0,"input",[["class","key"],["readonly",""],["type","text"]],[[8,"value",0]],null,null,null,null)),(l()(),u.wb(18,0,null,null,2,"button",[["class","copy-button"],["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.copyKey(u.Gb(l,17).value)&&e),e},O.d,O.b)),u.vb(19,180224,null,0,M.b,[u.n,m.h,[2,f.a]],null,null),(l()(),u.Ob(-1,0,["copy"])),(l()(),u.wb(21,0,null,null,8,"p",[["style","padding-top: 20px; line-height: 30px"]],null,null,null,null,null)),(l()(),u.wb(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 2:"])),(l()(),u.Ob(-1,null,[" M\u1edf website "])),(l()(),u.wb(25,0,null,null,1,"a",[["href","https://hecta.vn/"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["hecta.vn"])),(l()(),u.Ob(-1,null,[" v\xe0 g\u1eafn m\xe3 v\xe0o trong th\u1ebb "])),(l()(),u.wb(28,0,null,null,1,"span",[["class","hightline"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["<head>[m\xe3 tracking]</head>"])),(l()(),u.wb(30,0,null,null,7,"div",[["style","padding-top: 20px"]],null,null,null,null,null)),(l()(),u.wb(31,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["B\u01b0\u1edbc 3:"])),(l()(),u.Ob(-1,null,[" Ki\u1ec3m tra m\xe3 "])),(l()(),u.wb(34,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.wb(35,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["style","border-radius: 0"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.checkWebsiteTracking()&&u),u},O.d,O.b)),u.vb(36,180224,null,0,M.b,[u.n,m.h,[2,f.a]],{color:[0,"color"]},null),(l()(),u.Ob(-1,0,[" B\u1ea4M \u0110\u1ec2 KI\u1ec2M TRA M\xc3 "]))],function(l,n){l(n,16,0,"row"),l(n,36,0,"accent")},function(l,n){var t=n.component;l(n,4,0,t.adsId),l(n,17,0,u.yb(2,'<script type="text/javascript" src="',t.hostTracking,"?key=",t.key,'"><\/script>')),l(n,18,0,u.Gb(n,19).disabled||null,"NoopAnimations"===u.Gb(n,19)._animationMode),l(n,35,0,u.Gb(n,36).disabled||null,"NoopAnimations"===u.Gb(n,36)._animationMode)})}function ol(l){return u.Qb(0,[(l()(),u.wb(0,0,null,null,1,"app-tracking-website",[],null,null,null,il,cl)),u.vb(1,245760,null,0,el,[R.a,al.d,G.a],null,null)],function(l,n){l(n,1,0)},null)}var sl=u.sb("app-tracking-website",el,ol,{},{},[]),bl=t("POq0"),rl=t("Xd0L"),dl=t("HsOI"),gl=t("wd5q"),pl=t("JjoW"),hl=t("IheW"),ml=t("oapL"),vl=t("ZwOa"),Cl=t("zMNK"),fl=t("KPQW"),wl=t("Sm0G"),_l=t("D1Ds"),Ol=t("1N2P"),Ml=t("L53J"),xl=t("ura0"),Pl=t("Nhcz"),kl=t("u9T3"),El=t("RaCk"),yl=t("Tk7p"),Ll=t("5HBU");class Tl{}var Gl=t("zNkS");t.d(n,"AddTrackingTagsModuleNgFactory",function(){return Il});var Il=u.tb(e,[],function(l){return u.Db([u.Eb(512,u.l,u.gb,[[8,[a.a,c.a,X,sl]],[3,u.l],u.A]),u.Eb(4608,_.o,_.n,[u.x,[2,_.F]]),u.Eb(4608,bl.c,bl.c,[]),u.Eb(4608,rl.b,rl.z,[]),u.Eb(4608,g.c,g.c,[g.i,g.e,u.l,g.h,g.f,u.t,u.C,_.d,v.b,[2,_.i]]),u.Eb(5120,g.j,g.k,[g.c]),u.Eb(5120,d.b,d.c,[g.c]),u.Eb(4608,C.e,rl.c,[[2,rl.g],[2,rl.l]]),u.Eb(4608,b.x,b.x,[]),u.Eb(4608,b.f,b.f,[]),u.Eb(6144,dl.d,null,[gl.a]),u.Eb(5120,pl.a,pl.b,[g.c]),u.Eb(5120,u.b,function(l,n){return[ll.k(l,n)]},[_.d,u.F]),u.Eb(4608,G.a,G.a,[hl.c,L.a]),u.Eb(1073742336,_.c,_.c,[]),u.Eb(1073742336,v.a,v.a,[]),u.Eb(1073742336,rl.l,rl.l,[[2,rl.d],[2,C.f]]),u.Eb(1073742336,h.b,h.b,[]),u.Eb(1073742336,rl.v,rl.v,[]),u.Eb(1073742336,M.c,M.c,[]),u.Eb(1073742336,bl.d,bl.d,[]),u.Eb(1073742336,dl.e,dl.e,[]),u.Eb(1073742336,P.c,P.c,[]),u.Eb(1073742336,ml.c,ml.c,[]),u.Eb(1073742336,vl.b,vl.b,[]),u.Eb(1073742336,o.p,o.p,[]),u.Eb(1073742336,i.l,i.l,[]),u.Eb(1073742336,m.a,m.a,[]),u.Eb(1073742336,Cl.g,Cl.g,[]),u.Eb(1073742336,p.c,p.c,[]),u.Eb(1073742336,g.g,g.g,[]),u.Eb(1073742336,d.e,d.e,[]),u.Eb(1073742336,fl.a,fl.a,[]),u.Eb(1073742336,r.d,r.d,[]),u.Eb(1073742336,r.c,r.c,[]),u.Eb(1073742336,k.b,k.b,[]),u.Eb(1073742336,b.w,b.w,[]),u.Eb(1073742336,b.l,b.l,[]),u.Eb(1073742336,b.u,b.u,[]),u.Eb(1073742336,wl.a,wl.a,[]),u.Eb(1073742336,_l.a,_l.a,[]),u.Eb(1073742336,Ol.a,Ol.a,[]),u.Eb(1073742336,rl.t,rl.t,[]),u.Eb(1073742336,rl.r,rl.r,[]),u.Eb(1073742336,pl.d,pl.d,[]),u.Eb(1073742336,Ml.a,Ml.a,[]),u.Eb(1073742336,ll.c,ll.c,[]),u.Eb(1073742336,Y.g,Y.g,[]),u.Eb(1073742336,xl.c,xl.c,[]),u.Eb(1073742336,Pl.a,Pl.a,[]),u.Eb(1073742336,kl.a,kl.a,[[2,ll.h],u.F]),u.Eb(1073742336,El.a,El.a,[]),u.Eb(1073742336,yl.a,yl.a,[]),u.Eb(1073742336,Ll.a,Ll.a,[]),u.Eb(1073742336,R.t,R.t,[[2,R.y],[2,R.p]]),u.Eb(1073742336,Tl,Tl,[]),u.Eb(1073742336,e,e,[]),u.Eb(1024,R.m,function(){return[[{path:"chien-dich",pathMatch:"full",component:A},{path:"website/:accountId",pathMatch:"full",component:el,canActivate:[Gl.a]}]]},[])])})}}]);