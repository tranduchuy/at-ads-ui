(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-tracking-tags-add-tracking-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    GẮN TRACKING THEO DÕI CHIẾN DỊCH TÀI KHOẢN <span class=\"adsId\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"!isLoadingCampaigns\">\n    <p class=\"usage\">\n      <b>Công dụng của Tracking:</b> Tracking là đoạn mã nhỏ, tích hợp vào trong quảng cáo Google Ads để theo dõi hoạt\n      động\n      bấm quảng cáo.\n    </p>\n\n    <div class=\"tracking-example\">\n      <img mat-card-image src=\"../../../../assets/images/select-tracking1.png\" alt=\"Photo about tracking\">\n    </div>\n\n    <div class=\"select-tracking\" *ngIf=\"isProcessing === false\">\n      <p class=\"table-title\">\n        <span style=\"color: #40a5ec\">[GẮN MÃ]</span> CHỌN CHIẾN DỊCH CẦN GẮN MÃ <span\n          style=\"color: #40a5ec; font-weight: bold\">(NÊN CHỌN TẤT CẢ)</span>\n      </p>\n\n      <form class=\"form\">\n\n        <div class=\"searching\">\n          <mat-form-field *ngIf=\"hasCampaign === true\">\n            <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"table-wrapper\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n            <ng-container matColumnDef=\"order\">\n              <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n              <mat-cell *matCellDef=\"let i = index\"> {{i+1}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.disabled-status]=\"element.status !== 'Hoạt động'\"> {{element.id}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef> Chiến dịch </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.disabled-status]=\"element.status !== 'Hoạt động'\">\n                {{element.name}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.enabled-status]=\"element.status === 'Hoạt động'\"\n                [class.disabled-status]=\"element.status !== 'Hoạt động'\">\n                <span *ngIf=\"element.status === 'Hoạt động'\"><b>{{element.status}}</b></span>\n                <span *ngIf=\"element.status !== 'Hoạt động'\"><b>{{element.status}}</b></span>\n              </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"tracking\">\n              <mat-header-cell *matHeaderCellDef>\n                <p>\n                  <mat-checkbox (change)=\"onSelectAllCampaign($event)\" style=\"margin-right: 5px\"\n                    matTooltip=\"Chọn/ Bỏ chọn tất cả\" [checked]=\"selectedCampaigns.length === numberOfEnableCampaigns\">\n                  </mat-checkbox> Gắn mã\n                </p>\n              </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n\n                <mat-checkbox (change)=\"onSelectCampaign($event, element.id)\"\n                  [checked]=\"selectedCampaigns.includes(element.id)\" *ngIf=\"element.status === 'Hoạt động'\">\n                </mat-checkbox>\n\n                <mat-checkbox *ngIf=\"element.status !== 'Hoạt động'\" disabled></mat-checkbox>\n              </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n\n        </div>\n\n        <p style=\"text-align: center\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n          <button (click)=\"addCampaignTracking()\" mat-raised-button class=\"submit-button\" [disabled]=\"isProcessing\">\n            <mat-icon style=\"font-size: 20px\">location_searching</mat-icon> GẮN MÃ TRACKING\n          </button>\n        </p>\n\n        <p class=\"notification\" *ngIf=\"hasCampaign === false\">\n          Chúng tôi không tìm thấy chiến dịch nào trên tài khoản Google Ads này. Vui lòng <a\n            (click)=\"getOriginalCampaigns()\" class=\"link-button\">thử lại</a> hoặc <a class=\"link-button\"\n            (click)=\"showSupportInfoDialog()\">liên\n            hệ</a> với hỗ trợ viên để được giúp đỡ.\n        </p>\n\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    GẮN MÃ TRACKING CHO WEBSITE - TÀI KHOẢN <span class=\"adsId\">{{adsId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"info\">\n      <span class=\"bold-text\">Tại sao cần gắn mã tracking:\n        <br></span> Hệ thống sẽ dựa vào một đoạn mã được gắn trên website của bạn để tiến hành <span class=\"highline\">theo dõi\n        hành vi </span> của các thiết bị đang truy cập.\n      Bạn có thể nhúng mã vào bất cứ vị trí nào trong website. Tuy nhiên tốt nhất hãy nhúng mã vào trong\n      <span class=\"highline1\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span>\n    </p>\n\n    <div style=\"padding-top: 10px\">\n      <span class=\"step\"><span class=\"bold-text\">Bước 1:</span> Copy mã</span>\n      <div fxLayout=\"row\" style=\"padding-top: 10px\">\n        <input class=\"key\" type=\"text\" #inputKey\n          value='&lt;script type=\"text/javascript\" src=\"{{hostTracking}}?key={{key}}\"&gt;&lt;/script&gt;' readonly>\n        <button mat-icon-button (click)=\"copyKey(inputKey.value)\" class=\"copy-button\" matTooltip=\"Nhấn vào để copy\">\n          <mat-icon style=\"font-size: 16px\">file_copy</mat-icon>\n        </button>\n      </div>\n      <p style=\"padding-top: 10px; line-height: 30px\">\n        <span class=\"step\"><span class=\"bold-text\">Bước 2:</span> Mở các website của bạn và gắn mã vào trong thẻ\n          <span class=\"highline1\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span></span>\n      </p>\n      <div style=\"padding-top: 10px\">\n        <span class=\"step\">\n          <span class=\"bold-text\">Bước 3:</span> Kiểm tra các website đã được gắn mã\n          <a (click)=\"checkWebsiteTracking()\" style=\"cursor: pointer;\">tại đây</a>\n        </span>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddTrackingTagsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrackingTagsRoutingModule", function() { return AddTrackingTagsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");
/* harmony import */ var app_shared_services_guard_account_acceptance_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/guard/account-acceptance-guard.service */ "./src/app/shared/services/guard/account-acceptance-guard.service.ts");






var AddTrackingTagsRoutingModule = /** @class */ (function () {
    function AddTrackingTagsRoutingModule() {
    }
    AddTrackingTagsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'chien-dich',
                        pathMatch: 'full',
                        component: _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_3__["SelectCampaignsComponent"]
                    },
                    {
                        path: 'website/:accountId',
                        pathMatch: 'full',
                        component: _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_4__["TrackingWebsiteComponent"],
                        canActivate: [app_shared_services_guard_account_acceptance_guard_service__WEBPACK_IMPORTED_MODULE_5__["AccountAcceptanceGuardService"]]
                    },
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddTrackingTagsRoutingModule);
    return AddTrackingTagsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/add-tracking-tags/add-tracking-tags.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/add-tracking-tags.module.ts ***!
  \********************************************************************/
/*! exports provided: AddTrackingTagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrackingTagsModule", function() { return AddTrackingTagsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_tracking_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-tracking-tags-routing.module */ "./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






















var AddTrackingTagsModule = /** @class */ (function () {
    function AddTrackingTagsModule() {
    }
    AddTrackingTagsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_18__["SelectCampaignsComponent"], _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_20__["TrackingWebsiteComponent"]],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
                _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroupModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
                _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_15__["SelectTextModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_17__["FuseSharedModule"],
                _add_tracking_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddTrackingTagsRoutingModule"]
            ],
            entryComponents: [
            // CheckWebsiteTrackingDialogComponent
            ],
            exports: [
            // CheckWebsiteTrackingDialogComponent
            ],
            providers: [_add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_19__["AddTrackingTagsService"]]
        })
    ], AddTrackingTagsModule);
    return AddTrackingTagsModule;
}());



/***/ }),

/***/ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n  font-size: 16px;\n  font-weight: bold;\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  color: white;\n  text-shadow: 1px 1px 2px black;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  background: white;\n  position: relative;\n  top: -16vh;\n  padding: 20px;\n  padding-left: 30px;\n  margin: 40px 30px 30px 30px;\n  border-radius: 7px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .title2 {\n  padding: 0;\n  font-weight: bold;\n  text-align: justify;\n}\n.container .inner .usage {\n  text-align: justify;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n}\n.container .inner .link-button {\n  color: #40a5ec;\n  cursor: pointer;\n  text-decoration: underline !important;\n}\n.container .inner .tracking-example img {\n  width: 100%;\n  opacity: 0.9;\n}\n.container .inner .select-tracking {\n  margin-top: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 7px;\n  padding: 30px;\n  padding-bottom: 10px;\n  background: white;\n  min-height: 300px;\n}\n.container .inner .select-tracking .table-title {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .select-tracking .notification {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  background-color: lightyellow;\n  width: 80%;\n  margin-top: 80px;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n  -webkit-animation: notificationAni 0.2s ease-out;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .select-tracking .table-wrapper {\n  max-height: 500px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .select-tracking .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .select-tracking .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowFadeIn 0.4s linear;\n  animation: rowFadeIn 0.4s linear;\n}\n@-webkit-keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .select-tracking .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(5),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(5) {\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n  padding-left: 20px;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .select-tracking .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .select-tracking .table-wrapper mat-row,\n.container .inner .select-tracking .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .select-tracking .submit-button {\n  margin: 0 auto;\n  margin-top: 10px;\n  background-color: #44b543;\n  color: white;\n}\n.container .inner .select-tracking .enabled-status {\n  color: green;\n}\n.container .inner .select-tracking .disabled-status {\n  color: silver;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 25vh 20px;\n    text-align: center;\n  }\n  .container .inner {\n    margin: 10px;\n    padding: 15px;\n  }\n  .container .inner .select-tracking {\n    padding: 20px 10px 10px 10px;\n  }\n  .container .inner .select-tracking .table-title {\n    font-size: 12px;\n    text-align: center;\n  }\n  .container .inner .select-tracking .submit-button {\n    font-size: 12px;\n  }\n  .container .inner .select-tracking .notification {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NOO0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FETEk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURJSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRk47QURLSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0hOO0FETUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FDSk47QURRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTlI7QURVSTtFQUNFLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRFVNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ1JSO0FEV007RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLGdEQUFBO0FDVlI7QURXUTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1RWO0VEV1E7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDVFY7QUFDRjtBREdRO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDVFY7RURXUTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNUVjtBQUNGO0FEZ0JNO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDZFI7QURnQlE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNkVjtBRGlCUTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSx3Q0FBQTtFQUNBLGdDQUFBO0FDaEJWO0FEaUJVO0VBQ0U7SUFDRSxVQUFBO0VDZlo7RURpQlU7SUFDRSxVQUFBO0VDZlo7QUFDRjtBRFNVO0VBQ0U7SUFDRSxVQUFBO0VDZlo7RURpQlU7SUFDRSxVQUFBO0VDZlo7QUFDRjtBRGtCVTtFQUNFLHlDQUFBO0FDaEJaO0FEb0JROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ2xCVjtBRHFCUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUNuQlY7QURzQlE7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNwQlY7QUR1QlE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNyQlY7QUR3QlE7RUFDRSxlQUFBO0FDdEJWO0FEeUJROztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ3ZCVjtBRDJCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3pCUjtBRDRCTTtFQUNFLFlBQUE7QUMxQlI7QUQ2Qk07RUFDRSxhQUFBO0FDM0JSO0FEaUNBO0VBRUk7SUFDRSw0QkFBQTtJQUNBLGtCQUFBO0VDL0JKO0VEaUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUMvQko7RURpQ0k7SUFDRSw0QkFBQTtFQy9CTjtFRGlDTTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQy9CUjtFRGtDTTtJQUNFLGVBQUE7RUNoQ1I7RURtQ007SUFDRSxXQUFBO0VDakNSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDYwcHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAyN3ZoO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmYjUgMCUsICMyNDdiYTAgNzQlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuXG4gICAgLmFkc0lkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE2dmg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luOiA0MHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZTIge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudXNhZ2Uge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5saW5rLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nLWV4YW1wbGUge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0LXRyYWNraW5nIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgXG4gICAgICAudGFibGUtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICBAa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbkFuaSB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VhcmNoaW5nIHtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dGYWRlSW4ge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIGZsZXg6IDAgMCAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyxcbiAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuZW5hYmxlZC1zdGF0dXMge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlZC1zdGF0dXMge1xuICAgICAgICBjb2xvcjogc2lsdmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAudGl0bGUxIHtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyNXZoIDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbm5lciB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuc2VsZWN0LXRyYWNraW5nIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcblxuICAgICAgICAudGFibGUtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyN3ZoO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZHNJZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE2dmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luOiA0MHB4IDMwcHggMzBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC51c2FnZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpbmstYnV0dG9uIHtcbiAgY29sb3I6ICM0MGE1ZWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAubm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvd0ZhZGVJbiAwLjRzIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG59XG5Aa2V5ZnJhbWVzIHJvd0ZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICBmbGV4OiAwIDAgNDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICBmbGV4OiAwIDAgMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YjU0MztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAuZW5hYmxlZC1zdGF0dXMge1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC5kaXNhYmxlZC1zdGF0dXMge1xuICBjb2xvcjogc2lsdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyNXZoIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnN1Ym1pdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC5ub3RpZmljYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SelectCampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCampaignsComponent", function() { return SelectCampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












var SelectCampaignsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectCampaignsComponent, _super);
    function SelectCampaignsComponent(_fuseProgressBarService, _dialogService, sessionService, _addTrackingTagsService, _router, _fuseSplashScreenService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this._dialogService = _dialogService;
        _this.sessionService = sessionService;
        _this._addTrackingTagsService = _addTrackingTagsService;
        _this._router = _router;
        _this._fuseSplashScreenService = _fuseSplashScreenService;
        _this.displayedColumns = ['order', 'id', 'name', 'status', 'tracking'];
        _this.campaignList = [];
        _this.trackingCampaignList = [];
        _this.selectedCampaigns = [];
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.campaignList);
        return _this;
    }
    SelectCampaignsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        this.isLoadingCampaigns = true;
        var sub = this.sessionService.getAccountId()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (accountId) {
            if (accountId) {
                _this.getOriginalCampaigns();
            }
        });
        this.subscriptions.push(sub);
    };
    SelectCampaignsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SelectCampaignsComponent.prototype.onSelectAllCampaign = function (event) {
        var _this = this;
        if (event.checked) {
            this.selectedCampaigns = this.campaignList.map(function (item) { return item.id; });
            this.selectedCampaigns = this.selectedCampaigns.filter(function (id) { return _this.isEnableCampaign(id); });
        }
        else {
            this.selectedCampaigns = [];
        }
    };
    SelectCampaignsComponent.prototype.isEnableCampaign = function (campaignId) {
        return this.campaignList.find(function (item) { return campaignId === item.id && item.status === 'Hoạt động'; }) !== undefined;
    };
    SelectCampaignsComponent.prototype.onSelectCampaign = function (event, campaignId) {
        if (event.checked) {
            if (!this.selectedCampaigns.includes(campaignId)) {
                this.selectedCampaigns.push(campaignId);
            }
        }
        else {
            this.selectedCampaigns = this.selectedCampaigns.filter(function (item) { return item !== campaignId; });
        }
    };
    SelectCampaignsComponent.prototype.addCampaignTracking = function () {
        var _this = this;
        var sentCampaigns = [];
        for (var _i = 0, _a = this.campaignList; _i < _a.length; _i++) {
            var campagin = _a[_i];
            if (this.selectedCampaigns.indexOf(campagin.id) >= 0)
                sentCampaigns.push({
                    campaignId: campagin.id,
                    campaignName: campagin.name || ''
                });
        }
        var params = {
            campaigns: sentCampaigns
        };
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        var sub = this._addTrackingTagsService.addCampaignTracking(params)
            .subscribe(function (res) {
            //this.getOriginalCampaigns();
            if (params.campaigns.length > 0) {
                if (_this.sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value) {
                    _this.sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value);
                    _this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                    _this._fuseProgressBarService.hide();
                    _this._fuseSplashScreenService.hide();
                    _this.isProcessing = false;
                }
                else {
                    _this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                    _this._fuseProgressBarService.hide();
                    _this._fuseSplashScreenService.hide();
                    _this.isProcessing = false;
                    _this._router.navigateByUrl("/gan-tracking/website/" + _this.sessionService.activeAccountId);
                }
            }
            else {
                _this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this.isProcessing = false;
            }
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    SelectCampaignsComponent.prototype.getOriginalCampaigns = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._addTrackingTagsService.getOriginalCampaigns()
            .subscribe(function (res) {
            _this.campaignList = res.data.campaignList;
            if (_this.campaignList.length > 0)
                _this.hasCampaign = true;
            else
                _this.hasCampaign = false;
            _this.getTrackingCampaigns();
        }, function (error) {
            if (error.error.messages) {
                _this._fuseProgressBarService.hide();
                _this._fuseSplashScreenService.hide();
                _this.isProcessing = false;
                _this.campaignList = [];
                _this.trackingCampaignList = [];
                _this.hasCampaign = false;
                if (error.status === 400) {
                    _this._dialogService._openInfoDialog('Tài khoản Google Ads này chưa được chấp nhận quyền quản lý hệ thống. Vui lòng thực hiện theo hướng dẫn', 'tại đây', '/tro-giup/fI10j2DfAFexKoOQ');
                }
                else {
                    _this._dialogService._openErrorDialog(error.error);
                }
            }
        });
        this.subscriptions.push(sub);
    };
    SelectCampaignsComponent.prototype.getTrackingCampaigns = function () {
        var _this = this;
        var sub = this._addTrackingTagsService.getTrackingCampaigns()
            .subscribe(function (res) {
            _this.trackingCampaignList = res.data.campaignIds;
            _this.selectedCampaigns = _this.trackingCampaignList;
            if (_this.trackingCampaignList.length > 0) {
                if (_this.sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value) {
                    _this.sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value);
                }
            }
            _this.checkAll = _this.campaignList.every(function (item) { return _this.selectedCampaigns.includes(item.id); });
            _this.numberOfEnableCampaigns = _this.campaignList.filter(function (item) { return item.status === 'Hoạt động'; }).length;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this.campaignList);
            _this._fuseProgressBarService.hide();
            _this.isProcessing = false;
            _this.isLoadingCampaigns = false;
            _this._fuseSplashScreenService.hide();
        }, function (error) {
            _this.trackingCampaignList = [];
            _this._fuseProgressBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
            _this.isLoadingCampaigns = false;
            _this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(sub);
    };
    SelectCampaignsComponent.prototype.showSupportInfoDialog = function () {
        this._dialogService._openInfoDialog("\n    Vui l\u00F2ng li\u00EAn h\u1EC7\n    S\u0110T, Zalo, Viber 093.757.3139 (Mr. Long)\n    \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 th\u00EAm.\n    ");
    };
    SelectCampaignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-campaigns',
            template: __webpack_require__(/*! raw-loader!./select-campaigns.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html"),
            styles: [__webpack_require__(/*! ./select-campaigns.component.scss */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["FuseProgressBarService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_6__["AddTrackingTagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["FuseSplashScreenService"]])
    ], SelectCampaignsComponent);
    return SelectCampaignsComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 80vh;\n}\n.container ::ng-deep .customClass {\n  background: #57c54d !important;\n}\n.container .title1 {\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 80px 30px 0 30px;\n  height: 45vh;\n  text-align: center;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  width: 60%;\n  margin: 0 auto;\n  padding: 30px 30px 30px 30px;\n  background: white;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 7px;\n  color: rgba(0, 0, 0, 0.7);\n  position: relative;\n  z-index: 10;\n  top: -24vh;\n  height: 50vh;\n  -webkit-animation: innerAni 0.4s ease-out;\n  animation: innerAni 0.4s ease-out;\n}\n@-webkit-keyframes innerAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes innerAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .info {\n  line-height: 20px;\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .highline1 {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 3px;\n  background-color: whitesmoke;\n  color: deeppink;\n  font-size: 12px;\n}\n.container .inner .bold-text {\n  font-weight: bold;\n}\n.container .inner .highline {\n  font-weight: bold;\n  color: green;\n}\n.container .inner .key {\n  font-size: 12px;\n  padding: 10px;\n  padding-right: 0;\n  width: 100%;\n  border-right: 0;\n  border-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background: whitesmoke;\n  color: deeppink;\n}\n.container .inner .code {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.container .inner .copy-button {\n  border-radius: 0;\n  color: gray;\n  padding-left: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border: 0;\n  background: whitesmoke;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n    padding-bottom: 30px;\n    margin: 0 auto;\n    margin-top: 15px;\n    width: 95vw;\n    height: auto;\n  }\n  .container .inner .key {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3RyYWNraW5nLXdlYnNpdGUvdHJhY2tpbmctd2Vic2l0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSw4QkFBQTtBQ0NKO0FERUU7RUFPRSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDUE47QURXRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEseUNBQUE7RUFDQSxpQ0FBQTtBQ1ZKO0FEV0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNUTjtFRFdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ1ROO0FBQ0Y7QURHSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ1ROO0VEV0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDVE47QUFDRjtBRFlJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1ZOO0FEYUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEaUJJO0VBQ0UsaUJBQUE7QUNmTjtBRGtCSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRG1CSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDREQUFBO0VBR0Esc0JBQUE7RUFDQSxlQUFBO0FDbkJOO0FEc0JJO0VBQ0UsNERBQUE7QUNwQk47QUR1Qkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNyQk47QUQwQkE7RUFFSTtJQUNFLGFBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDeEJKO0VEMEJJO0lBQ0UsV0FBQTtFQ3hCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcblxuICA6Om5nLWRlZXAgLmN1c3RvbUNsYXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTdjNTRkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGl0bGUxIHtcbiAgICAvLyBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG5cbiAgICAvL2JhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3Ivc2hpbnktYmx1ZS1nZW9tZXRyaWMtYmFja2dyb3VuZC1kZXNpZ25fMTA1NS0zMTg0LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZmNlYzUgMCUsICMxNDU1N2IgNzQlKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvL3BhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgcGFkZGluZzogODBweCAzMHB4IDAgMzBweDtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmFkc0lkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHRvcDogLTI0dmg7XG4gICAgaGVpZ2h0OiA1MHZoO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGlubmVyQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiBpbm5lckFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgaW5uZXJBbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5oaWdobGluZTEge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICBjb2xvcjogZGVlcHBpbms7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgIH1cblxuICAgIC5ib2xkLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmhpZ2hsaW5lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIC5rZXkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgIC8vIGNvbG9yOiBza3libHVlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICB9XG5cbiAgICAuY29kZSB7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuY29weS1idXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB3aWR0aDogOTV2dztcbiAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgLmtleSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uY29udGFpbmVyIDo6bmctZGVlcCAuY3VzdG9tQ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiAjNTdjNTRkICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4MHB4IDMwcHggMCAzMHB4O1xuICBoZWlnaHQ6IDQ1dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRzSWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMjR2aDtcbiAgaGVpZ2h0OiA1MHZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogaW5uZXJBbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBpbm5lckFuaSAwLjRzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBpbm5lckFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluZm8ge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5oaWdobGluZTEge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogZGVlcHBpbms7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5oaWdobGluZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAua2V5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiBkZWVwcGluaztcbn1cbi5jb250YWluZXIgLmlubmVyIC5jb2RlIHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY29weS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB3aWR0aDogOTV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmtleSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TrackingWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingWebsiteComponent", function() { return TrackingWebsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-website-tracking-dialog/check-website-tracking-dialog.component */ "./src/app/main/add-tracking-tags/check-website-tracking-dialog/check-website-tracking-dialog.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");










var TrackingWebsiteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TrackingWebsiteComponent, _super);
    function TrackingWebsiteComponent(_activatedRoute, _matDialog, _addTrackingTagsService, _snackBar) {
        var _this = _super.call(this) || this;
        _this._activatedRoute = _activatedRoute;
        _this._matDialog = _matDialog;
        _this._addTrackingTagsService = _addTrackingTagsService;
        _this._snackBar = _snackBar;
        _this.hostTracking = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hostTracking;
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__["AdsAccountIdPipe"]();
        return _this;
    }
    TrackingWebsiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this._activatedRoute.params
            .subscribe(function (params) {
            _this.accountId = params.accountId;
            var detailSub = _this._addTrackingTagsService.getAdwordsAccountDetail(_this.accountId)
                .subscribe(function (res) {
                _this.adsId = _this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
                _this.key = res.data.adsAccount.key;
            });
            _this.subscriptions.push(detailSub);
        });
        this.subscriptions.push(sub);
    };
    TrackingWebsiteComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['customClass']
        });
    };
    TrackingWebsiteComponent.prototype.copyKey = function (item) {
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
        this.openSnackBar('Đã copy mã tracking', 'OK');
    };
    TrackingWebsiteComponent.prototype.checkWebsiteTracking = function () {
        var dialogRef = this._matDialog
            .open(_check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CheckWebsiteTrackingDialogComponent"], {
            autoFocus: true,
            maxWidth: '100vw !important'
        });
        return dialogRef.componentInstance.account = { accountId: this.accountId, adsId: this.adsId };
    };
    TrackingWebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tracking-website',
            template: __webpack_require__(/*! raw-loader!./tracking-website.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html"),
            styles: [__webpack_require__(/*! ./tracking-website.component.scss */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__["AddTrackingTagsService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], TrackingWebsiteComponent);
    return TrackingWebsiteComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__["PageBaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=main-add-tracking-tags-add-tracking-tags-module-es5.js.map