(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-tracking-tags-add-tracking-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    GẮN TRACKING THEO DÕI CHIẾN DỊCH TÀI KHOẢN <span class=\"adsId\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"usage\">\n      <b>Công dụng của Tracking:</b> Tracking là đoạn mã nhỏ, tích hợp vào trong quảng cáo Google Ads để theo dõi hoạt\n      động\n      bấm quảng cáo.\n    </p>\n\n    <div class=\"tracking-example\">\n      <img mat-card-image src=\"../../../../assets/images/select-tracking1.png\" alt=\"Photo about tracking\">\n    </div>\n\n    <div class=\"select-tracking\" *ngIf=\"isProcessing === false\">\n      <p class=\"title2\">\n        <span style=\"color: #40a5ec\">[GẮN MÃ]</span> CHỌN CHIẾN DỊCH CẦN GẮN MÃ <span\n          style=\"color: #40a5ec; font-weight: bold\">(NÊN CHỌN TẤT CẢ)</span>\n      </p>\n\n      <form class=\"form\">\n\n        <div class=\"searching\">\n          <mat-form-field *ngIf=\"hasCampaign === true\">\n            <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"table-wrapper\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n            <ng-container matColumnDef=\"order\">\n              <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n              <mat-cell *matCellDef=\"let i = index\"> {{i+1}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.disabled-status]=\"element.status !== 'Hoạt động'\"> {{element.id}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef> Chiến dịch </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.disabled-status]=\"element.status !== 'Hoạt động'\">\n                {{element.name}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n              <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [class.enabled-status]=\"element.status === 'Hoạt động'\"\n                [class.disabled-status]=\"element.status !== 'Hoạt động'\">\n                <span *ngIf=\"element.status === 'Hoạt động'\"><b>{{element.status}}</b></span>\n                <span *ngIf=\"element.status !== 'Hoạt động'\"><b>{{element.status}}</b></span>\n              </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"tracking\">\n              <mat-header-cell *matHeaderCellDef>\n                <p>\n                  <mat-checkbox (change)=\"onSelectAllCampaign($event)\" style=\"margin-right: 5px\"\n                    matTooltip=\"Chọn/ Bỏ chọn tất cả\" [checked]=\"selectedCampaigns.length === numberOfEnableCampaigns\">\n                  </mat-checkbox> Gắn mã\n                </p>\n              </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n\n                <mat-checkbox (change)=\"onSelectCampaign($event, element.id)\"\n                  [checked]=\"selectedCampaigns.includes(element.id)\" *ngIf=\"element.status === 'Hoạt động'\">\n                </mat-checkbox>\n\n                <mat-checkbox *ngIf=\"element.status !== 'Hoạt động'\" disabled></mat-checkbox>\n              </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n\n        </div>\n\n        <p style=\"text-align: center\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n          <button (click)=\"addCampaignTracking()\" mat-raised-button class=\"submit-button\" [disabled]=\"isProcessing\">\n            <mat-icon style=\"font-size: 20px\">location_searching</mat-icon> GẮN MÃ TRACKING\n          </button>\n        </p>\n\n        <p class=\"notification\" *ngIf=\"hasCampaign === false\">\n          Chúng tôi không tìm thấy chiến dịch nào trên tài khoản Google Ads này. Vui lòng <a\n            (click)=\"getOriginalCampaigns()\" class=\"link-button\">thử lại</a> hoặc <a class=\"link-button\"\n            (click)=\"showSupportInfoDialog()\">liên\n            hệ</a> với hỗ trợ viên để được giúp đỡ.\n        </p>\n\n      </form>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");
/* harmony import */ var app_shared_services_guard_account_acceptance_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/guard/account-acceptance-guard.service */ "./src/app/shared/services/guard/account-acceptance-guard.service.ts");






let AddTrackingTagsRoutingModule = class AddTrackingTagsRoutingModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_tracking_tags_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-tracking-tags-routing.module */ "./src/app/main/add-tracking-tags/add-tracking-tags-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _select_campaigns_select_campaigns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./select-campaigns/select-campaigns.component */ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _tracking_website_tracking_website_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tracking-website/tracking-website.component */ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






















let AddTrackingTagsModule = class AddTrackingTagsModule {
};
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



/***/ }),

/***/ "./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 45px 30px 0 30px;\n  height: 12.5vh;\n  font-size: 16px;\n  font-weight: bold;\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  color: white;\n  text-shadow: 1px 1px 2px black;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 0 30px 15px 30px;\n}\n.container .inner .title2 {\n  padding: 0;\n  font-weight: bold;\n  text-align: justify;\n}\n.container .inner .usage {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .link-button {\n  color: #40a5ec;\n  cursor: pointer;\n  text-decoration: underline !important;\n}\n.container .inner .tracking-example {\n  margin-top: 20px;\n}\n.container .inner .tracking-example img {\n  width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  opacity: 0.9;\n  border-radius: 7px;\n}\n.container .inner .select-tracking {\n  margin-top: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 7px;\n  padding: 30px;\n  padding-bottom: 10px;\n  background: white;\n  min-height: 300px;\n}\n.container .inner .select-tracking .table-title {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n  padding-top: 20px;\n}\n.container .inner .select-tracking .notification {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  background-color: lightyellow;\n  width: 80%;\n  margin-top: 80px;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n  -webkit-animation: notificationAni 0.2s ease-out;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .select-tracking .table-wrapper {\n  max-height: 500px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .select-tracking .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .select-tracking .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .select-tracking .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell:nth-child(5),\n.container .inner .select-tracking .table-wrapper mat-cell:nth-child(5) {\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n  padding-left: 20px;\n}\n.container .inner .select-tracking .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .select-tracking .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .select-tracking .table-wrapper mat-row,\n.container .inner .select-tracking .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .select-tracking .submit-button {\n  margin: 0 auto;\n  margin-top: 10px;\n  background-color: #44b543;\n  color: white;\n}\n.container .inner .select-tracking .enabled-status {\n  color: green;\n}\n.container .inner .select-tracking .disabled-status {\n  color: silver;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 20px 20px;\n    height: 15vh;\n  }\n  .container .inner {\n    padding: 15px;\n    padding-top: 0;\n  }\n  .container .inner .select-tracking {\n    padding: 20px 10px 10px 10px;\n  }\n  .container .inner .select-tracking .title2 {\n    font-size: 12px;\n    text-align: center;\n  }\n  .container .inner .select-tracking .submit-button {\n    font-size: 12px;\n  }\n  .container .inner .select-tracking .notification {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQVFFLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNSSjtBRFVJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDUk47QURZRTtFQUNFLHlCQUFBO0FDVko7QURZSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVk47QURhSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNYTjtBRGNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ1pOO0FEZUk7RUFDRSxnQkFBQTtBQ2JOO0FEZU07RUFDRSxXQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNiUjtBRGlCSTtFQUNFLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNmTjtBRDJCTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUN6QlI7QUQ0Qk07RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLGdEQUFBO0FDM0JSO0FENEJRO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDMUJWO0VENEJRO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQzFCVjtBQUNGO0FEb0JRO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDMUJWO0VENEJRO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQzFCVjtBQUNGO0FEaUNNO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDL0JSO0FEaUNRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDL0JWO0FEa0NRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDRDQUFBO0FDaENWO0FEaUNVO0VBQ0U7SUFDRSxVQUFBO0VDL0JaO0VEaUNVO0lBQ0UsVUFBQTtFQy9CWjtBQUNGO0FEeUJVO0VBQ0U7SUFDRSxVQUFBO0VDL0JaO0VEaUNVO0lBQ0UsVUFBQTtFQy9CWjtBQUNGO0FEa0NVO0VBQ0UseUNBQUE7QUNoQ1o7QURvQ1E7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDbENWO0FEcUNROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ25DVjtBRHNDUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ3BDVjtBRHVDUTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3JDVjtBRHdDUTtFQUNFLGVBQUE7QUN0Q1Y7QUR5Q1E7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FDdkNWO0FEMkNNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDekNSO0FENENNO0VBQ0UsWUFBQTtBQzFDUjtBRDZDTTtFQUNFLGFBQUE7QUMzQ1I7QURpREE7RUFFSTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQy9DSjtFRGlERTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VDL0NKO0VEaURJO0lBQ0UsNEJBQUE7RUMvQ047RURpRE07SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUMvQ1I7RURrRE07SUFDRSxlQUFBO0VDaERSO0VEbURNO0lBQ0UsV0FBQTtFQ2pEUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgLy8gcGFkZGluZzogOTRweCA2MHB4IDI3cHggMzBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgLy8gY29sb3I6IHdoaXRlO1xuXG4gICAgLy9wYWRkaW5nOiAzNXB4IDMwcHggMHB4IDMwcHg7XG5cbiAgICBwYWRkaW5nOiA0NXB4IDMwcHggMCAzMHB4O1xuICAgIGhlaWdodDogMTIuNXZoO1xuICAgIC8vIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcblxuICAgIC5hZHNJZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDAgMzBweCAxNXB4IDMwcHg7XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuXG4gICAgLnVzYWdlIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAubGluay1idXR0b24ge1xuICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50cmFja2luZy1leGFtcGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QtdHJhY2tpbmcge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgbWluLWhlaWdodDogMzAwcHg7XG5cbiAgICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiB0YWJsZUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgLy8gQGtleWZyYW1lcyB0YWJsZUFuaSB7XG4gICAgICAvLyAgIGZyb20ge1xuICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgdG8ge1xuICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICAudGFibGUtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICBAa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbkFuaSB7XG4gICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VhcmNoaW5nIHtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgIEBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgZmxleDogMCAwIDIwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93LFxuICAgICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5lbmFibGVkLXN0YXR1cyB7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGVkLXN0YXR1cyB7XG4gICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwcHggMjBweDtcbiAgICAgIGhlaWdodDogMTV2aDtcbiAgICB9XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgLnNlbGVjdC10cmFja2luZyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XG5cbiAgICAgICAgLnRpdGxlMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogNDVweCAzMHB4IDAgMzBweDtcbiAgaGVpZ2h0OiAxMi41dmg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmYjUgMCUsICMyNDdiYTAgNzQlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFkc0lkIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC51c2FnZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpbmstYnV0dG9uIHtcbiAgY29sb3I6ICM0MGE1ZWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSksXG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAuc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC5lbmFibGVkLXN0YXR1cyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLmRpc2FibGVkLXN0YXR1cyB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuc2VsZWN0LXRyYWNraW5nIC50aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnNlbGVjdC10cmFja2luZyAuc3VibWl0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5zZWxlY3QtdHJhY2tpbmcgLm5vdGlmaWNhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












let SelectCampaignsComponent = class SelectCampaignsComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressBarService, _dialogService, sessionService, _addTrackingTagsService, _router, _fuseSplashScreenService) {
        super();
        this._fuseProgressBarService = _fuseProgressBarService;
        this._dialogService = _dialogService;
        this.sessionService = sessionService;
        this._addTrackingTagsService = _addTrackingTagsService;
        this._router = _router;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this.displayedColumns = ['order', 'id', 'name', 'status', 'tracking'];
        this.campaignList = [];
        this.trackingCampaignList = [];
        this.selectedCampaigns = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.campaignList);
    }
    ngOnInit() {
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        const sub = this.sessionService.getAccountId()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe((accountId) => {
            if (accountId) {
                this.getOriginalCampaigns();
            }
        });
        this.subscriptions.push(sub);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onSelectAllCampaign(event) {
        if (event.checked) {
            this.selectedCampaigns = this.campaignList.map(item => item.id);
            this.selectedCampaigns = this.selectedCampaigns.filter(id => this.isEnableCampaign(id));
        }
        else {
            this.selectedCampaigns = [];
        }
    }
    isEnableCampaign(campaignId) {
        return this.campaignList.find(item => campaignId === item.id && item.status === 'Hoạt động') !== undefined;
    }
    onSelectCampaign(event, campaignId) {
        if (event.checked) {
            if (!this.selectedCampaigns.includes(campaignId)) {
                this.selectedCampaigns.push(campaignId);
            }
        }
        else {
            this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId);
        }
    }
    addCampaignTracking() {
        let sentCampaigns = [];
        for (const campagin of this.campaignList)
            if (this.selectedCampaigns.indexOf(campagin.id) >= 0)
                sentCampaigns.push({
                    campaignId: campagin.id,
                    campaignName: campagin.name || ''
                });
        const params = {
            campaigns: sentCampaigns
        };
        this._fuseProgressBarService.show();
        this.isProcessing = true;
        const sub = this._addTrackingTagsService.addCampaignTracking(params)
            .subscribe((res) => {
            //this.getOriginalCampaigns();
            if (params.campaigns.length > 0) {
                if (this.sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value) {
                    this.sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value);
                    this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                    this._fuseProgressBarService.hide();
                    this._fuseSplashScreenService.hide();
                    this.isProcessing = false;
                }
                else {
                    this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                    this._fuseProgressBarService.hide();
                    this._fuseSplashScreenService.hide();
                    this.isProcessing = false;
                    this._router.navigateByUrl(`/gan-tracking/website/${this.sessionService.activeAccountId}`);
                }
            }
            else {
                this._dialogService._openSuccessDialog({ messages: ['Thiết lập thành công'] });
                this._fuseProgressBarService.hide();
                this._fuseSplashScreenService.hide();
                this.isProcessing = false;
            }
        }, (error) => {
            this._fuseProgressBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    getOriginalCampaigns() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._addTrackingTagsService.getOriginalCampaigns()
            .subscribe(res => {
            this.campaignList = res.data.campaignList;
            if (this.campaignList.length > 0)
                this.hasCampaign = true;
            else
                this.hasCampaign = false;
            this.getTrackingCampaigns();
        }, (error) => {
            if (error.error.messages) {
                this._fuseProgressBarService.hide();
                this._fuseSplashScreenService.hide();
                this.isProcessing = false;
                this.campaignList = [];
                this.trackingCampaignList = [];
                this.hasCampaign = false;
                if (error.status === 400) {
                    this._dialogService._openInfoDialog('Tài khoản chưa được chấp nhận quyền quản lý hệ thống');
                }
                else {
                    this._dialogService._openErrorDialog(error.error);
                }
            }
        });
        this.subscriptions.push(sub);
    }
    getTrackingCampaigns() {
        const sub = this._addTrackingTagsService.getTrackingCampaigns()
            .subscribe(res => {
            this.trackingCampaignList = res.data.campaignIds;
            this.selectedCampaigns = this.trackingCampaignList;
            if (this.trackingCampaignList.length > 0) {
                if (this.sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value) {
                    this.sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.SELECT_CAMPAIGN.value);
                }
            }
            this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
            this.numberOfEnableCampaigns = this.campaignList.filter(item => item.status === 'Hoạt động').length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.campaignList);
            this._fuseProgressBarService.hide();
            this.isProcessing = false;
            this._fuseSplashScreenService.hide();
        }, (error) => {
            this.trackingCampaignList = [];
            this._fuseProgressBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
            this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(sub);
    }
    showSupportInfoDialog() {
        this._dialogService._openInfoDialog(`
    Vui lòng liên hệ
    SĐT, Zalo, Viber 093.757.3139 (Mr. Long)
    để được hỗ trợ thêm.
    `);
    }
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



/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 80vh;\n}\n.container ::ng-deep .customClass {\n  background: #57c54d !important;\n}\n.container .title1 {\n  background-color: #7fcec5;\n  background-image: linear-gradient(315deg, #7fcec5 0%, #14557b 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 80px 30px 0 30px;\n  height: 45vh;\n  text-align: center;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  width: 60%;\n  margin: 0 auto;\n  padding: 30px 30px 30px 30px;\n  background: white;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 7px;\n  color: rgba(0, 0, 0, 0.7);\n  position: relative;\n  z-index: 10;\n  top: -24vh;\n  height: 50vh;\n  -webkit-animation: innerAni 0.4s ease-out;\n}\n@-webkit-keyframes innerAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes innerAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .info {\n  line-height: 20px;\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .highline1 {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 3px;\n  background-color: whitesmoke;\n  color: deeppink;\n  font-size: 12px;\n}\n.container .inner .bold-text {\n  font-weight: bold;\n}\n.container .inner .highline {\n  font-weight: bold;\n  color: green;\n}\n.container .inner .key {\n  font-size: 12px;\n  padding: 10px;\n  padding-right: 0;\n  width: 100%;\n  border-right: 0;\n  border-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background: whitesmoke;\n  color: deeppink;\n}\n.container .inner .code {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.container .inner .copy-button {\n  border-radius: 0;\n  color: gray;\n  padding-left: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border: 0;\n  background: whitesmoke;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n    padding-bottom: 30px;\n    margin: 0 auto;\n    margin-top: 15px;\n    width: 95vw;\n    height: auto;\n  }\n  .container .inner .key {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3RyYWNraW5nLXdlYnNpdGUvdHJhY2tpbmctd2Vic2l0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSw4QkFBQTtBQ0NKO0FERUU7RUFPRSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDUE47QURXRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEseUNBQUE7QUNWSjtBRFdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDVE47RURXSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNUTjtBQUNGO0FER0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNUTjtFRFdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ1ROO0FBQ0Y7QURZSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWTjtBRGFJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNYTjtBRGlCSTtFQUNFLGlCQUFBO0FDZk47QURrQkk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNoQk47QURtQkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0REFBQTtFQUdBLHNCQUFBO0VBQ0EsZUFBQTtBQ25CTjtBRHNCSTtFQUNFLDREQUFBO0FDcEJOO0FEdUJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDckJOO0FEMEJBO0VBRUk7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ3hCSjtFRDBCSTtJQUNFLFdBQUE7RUN4Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRkLXRyYWNraW5nLXRhZ3MvdHJhY2tpbmctd2Vic2l0ZS90cmFja2luZy13ZWJzaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG5cbiAgOjpuZy1kZWVwIC5jdXN0b21DbGFzcyB7XG4gICAgYmFja2dyb3VuZDogIzU3YzU0ZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpdGxlMSB7XG4gICAgLy8gcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgLy8gY29sb3I6IHdoaXRlO1xuXG4gICAgLy9iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3NoaW55LWJsdWUtZ2VvbWV0cmljLWJhY2tncm91bmQtZGVzaWduXzEwNTUtMzE4NC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmY2VjNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy9wYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIHBhZGRpbmc6IDgwcHggMzBweCAwIDMwcHg7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5hZHNJZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0b3A6IC0yNHZoO1xuICAgIGhlaWdodDogNTB2aDtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpbm5lckFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgaW5uZXJBbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgIC5oaWdobGluZTEge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgICBjb2xvcjogZGVlcHBpbms7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgIH1cblxuICAgIC5ib2xkLXRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmhpZ2hsaW5lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIC5rZXkge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgIC8vIGNvbG9yOiBza3libHVlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICB9XG5cbiAgICAuY29kZSB7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuY29weS1idXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICB3aWR0aDogOTV2dztcbiAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgLmtleSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59XG4uY29udGFpbmVyIDo6bmctZGVlcCAuY3VzdG9tQ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiAjNTdjNTRkICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZjZWM1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2ZjZWM1IDAlLCAjMTQ1NTdiIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4MHB4IDMwcHggMCAzMHB4O1xuICBoZWlnaHQ6IDQ1dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRzSWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMjR2aDtcbiAgaGVpZ2h0OiA1MHZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogaW5uZXJBbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgaW5uZXJBbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5pbmZvIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaGlnaGxpbmUxIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6IGRlZXBwaW5rO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaGlnaGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmtleSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogZGVlcHBpbms7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvcHktYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDk1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5rZXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../check-website-tracking-dialog/check-website-tracking-dialog.component */ "./src/app/main/add-tracking-tags/check-website-tracking-dialog/check-website-tracking-dialog.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-tracking-tags.service */ "./src/app/main/add-tracking-tags/add-tracking-tags.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");










let TrackingWebsiteComponent = class TrackingWebsiteComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__["PageBaseComponent"] {
    constructor(_activatedRoute, _matDialog, _addTrackingTagsService, _snackBar) {
        super();
        this._activatedRoute = _activatedRoute;
        this._matDialog = _matDialog;
        this._addTrackingTagsService = _addTrackingTagsService;
        this._snackBar = _snackBar;
        this.hostTracking = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hostTracking;
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_4__["AdsAccountIdPipe"]();
    }
    ngOnInit() {
        const sub = this._activatedRoute.params
            .subscribe((params) => {
            this.accountId = params.accountId;
            const detailSub = this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId)
                .subscribe(res => {
                this.adsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
                this.key = res.data.adsAccount.key;
            });
            this.subscriptions.push(detailSub);
        });
        this.subscriptions.push(sub);
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            panelClass: ['customClass']
        });
    }
    copyKey(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
        this.openSnackBar('Đã copy mã tracking', 'OK');
    }
    checkWebsiteTracking() {
        const dialogRef = this._matDialog
            .open(_check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CheckWebsiteTrackingDialogComponent"], {
            autoFocus: true,
            maxWidth: '100vw !important'
        });
        return dialogRef.componentInstance.account = { accountId: this.accountId, adsId: this.adsId };
    }
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



/***/ })

}]);
//# sourceMappingURL=main-add-tracking-tags-add-tracking-tags-module-es2015.js.map