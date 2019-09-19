(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-tracking-tags-add-tracking-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title1\">\r\n    GẮN TRACKING THEO DÕI CHIẾN DỊCH TÀI KHOẢN <span\r\n      style=\"color: yellow; font-weight: bolder\">{{_sessionService.activeAdsAccountId}}</span>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <p class=\"usage\">\r\n      <b>Công dụng của Tracking:</b> Tracking là đoạn mã nhỏ, tích hợp vào trong quảng cáo Google Ads để theo dõi hoạt\r\n      động\r\n      bấm quảng cáo\r\n    </p>\r\n\r\n    <div class=\"tracking-example\">\r\n      <img mat-card-image src=\"../../../../assets/images/huong-dan-tracking.jpg\" alt=\"Photo about tracking\">\r\n    </div>\r\n\r\n    <p class=\"title2\">\r\n      <span style=\"color: #039be5\">[GẮN MÃ]</span> CHỌN CHIẾN DỊCH CẦN GẮN MÃ\r\n    </p>\r\n\r\n    <form class=\"form\">\r\n\r\n      <p class=\"table-title\">Chọn chiến dịch để gắn tracking (nên chọn tất cả)</p>\r\n\r\n      <div class=\"table-wrapper\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\r\n\r\n        <mat-table [dataSource]=\"campaignList\" class=\"mat-elevation-z8\">\r\n\r\n          <ng-container matColumnDef=\"order\">\r\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let i = index\"> {{i+1}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> Chiến dịch </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <span *ngIf=\"element.status === 'Hoạt động'\"\r\n                style=\"color: #039be5; font-weight: bold\">{{element.status}}</span>\r\n              <span *ngIf=\"element.status !== 'Hoạt động'\"\r\n                style=\"color: silver; font-weight: bold\">{{element.status}}</span>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"tracking\">\r\n            <mat-header-cell *matHeaderCellDef>\r\n              <p>\r\n                <mat-checkbox (change)=\"onSelectAllCampaign($event)\" style=\"margin-right: 5px\"\r\n                  matTooltip=\"Chọn/ Bỏ chọn tất cả\" [checked]=\"campaignList.length === selectedCampaigns.length\">\r\n                </mat-checkbox> Gắn mã\r\n              </p>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n\r\n              <mat-checkbox (change)=\"onSelectCampaign($event, element.id)\"\r\n                [checked]=\"selectedCampaigns.includes(element.id)\" *ngIf=\"element.status === 'Hoạt động'\">\r\n              </mat-checkbox>\r\n\r\n              <mat-checkbox *ngIf=\"element.status !== 'Hoạt động'\" disabled></mat-checkbox>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n      </div>\r\n\r\n      <p style=\"text-align: center\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\r\n        <button (click)=\"addCampaignTracking()\" mat-raised-button class=\"submit-button\" [disabled]=\"isProcessing\">\r\n          <mat-icon>location_searching</mat-icon> GẮN MÃ TRACKING\r\n        </button>\r\n      </p>\r\n\r\n      <p class=\"notification\" *ngIf=\"campaignList.length === 0 && !isProcessing\">\r\n        Chúng tôi không tìm thấy chiến dịch nào đang chạy. Vui lòng <a (click)=\"getOriginalCampaigns()\"\r\n          class=\"link-button\">thử lại</a> hoặc <a class=\"link-button\" (click)=\"showSupportInfoDialog()\">liên\r\n          hệ</a> với hỗ trợ viên để được giúp đỡ.\r\n      </p>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"title1\">\r\n    GẮN MÃ TRACKING VÀO WEBSITE TÀI KHOẢN <span style=\"color: yellow\">{{adsId}}</span>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <p class=\"info\">\r\n      <b>Tại sao cần gắn mã:</b> Hệ thống đưa vào mã tracking để phát hiện số điện thoại truy cập vào website của bạn.\r\n      Bạn\r\n      có thể bỏ mã vào bất cứ vị trí nào trong website. Tuy nhiên tốt nhất hãy bỏ mã vào trong\r\n      <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span>\r\n    </p>\r\n\r\n    <div style=\"padding-top: 10px\">\r\n      <span class=\"step\"><b>Bước 1:</b> Copy mã tracking</span>\r\n      <div fxLayout=\"row\" style=\"padding-top: 10px\">\r\n        <input class=\"key\" type=\"text\" #inputKey\r\n          value='&lt;script type=\"text/javascript\" src=\"{{hostTracking}}?key={{key}}\"&gt;&lt;/script&gt;' readonly>\r\n        <button mat-icon-button (click)=\"copyKey(inputKey.value)\" class=\"copy-button\" matTooltip=\"Nhấn vào để sao chép\">\r\n          <mat-icon style=\"font-size: 20px\">file_copy</mat-icon>\r\n        </button>\r\n      </div>\r\n      <p style=\"padding-top: 10px; line-height: 30px\">\r\n        <span class=\"step\"><b>Bước 2:</b> Mở các website của bạn và gắn mã vào trong thẻ\r\n          <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span></span>\r\n      </p>\r\n      <div style=\"padding-top: 10px\">\r\n        <span class=\"step\"><b>Bước 3:</b> Kiểm tra mã</span>\r\n        <p>\r\n          <button mat-raised-button color=\"accent\" style=\"border-radius: 0\" (click)=\"checkWebsiteTracking()\">\r\n            BẤM ĐỂ KIỂM TRA MÃ\r\n          </button>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 142px 60px 35px 30px;\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  margin-top: 50px;\n  font-weight: bold;\n  text-align: justify;\n}\n.container .inner .usage {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .link-button {\n  color: #039be5;\n  cursor: pointer;\n  text-decoration: underline !important;\n}\n.container .inner .tracking-example {\n  margin-top: 20px;\n}\n.container .inner .tracking-example img {\n  width: 100%;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .table-title {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n  padding-top: 20px;\n}\n.container .inner .notification {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  background-color: #eee;\n  width: 80%;\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-left: 5px solid darkorange;\n}\n.container .inner .table-wrapper {\n  max-height: 500px;\n  box-shadow: 1px 1px 4px silver;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(5),\n.container .inner .table-wrapper mat-cell:nth-child(5) {\n  flex: 0 0 20%;\n  padding-left: 20px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .submit-button {\n  margin: 0 auto;\n  margin-top: 10px;\n  background-color: #44b543;\n  color: white;\n}\n.container .inner .enable-status {\n  color: #039be5;\n}\n.container .inner .disabled-status {\n  color: silver;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL0M6XFxVc2Vyc1xcTWluaCBUdWVcXERlc2t0b3BcXGNsaWNrXFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcYWRkLXRyYWNraW5nLXRhZ3NcXHNlbGVjdC1jYW1wYWlnbnNcXHNlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYWRkLXRyYWNraW5nLXRhZ3Mvc2VsZWN0LWNhbXBhaWducy9zZWxlY3QtY2FtcGFpZ25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLDRCQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7QUNITjtBREtNO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0FDSFI7QURPSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNMTjtBRFFJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNQTjtBRFNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDUFI7QURVTTtFQUNFLGdCQUFBO0FDUlI7QURXTTtFQUNFLHdDQUFBO0FDVFI7QURZTTs7RUFFRSxhQUFBO0FDVlI7QURhTTs7RUFFRSxhQUFBO0FDWFI7QURjTTs7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGVNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDYlI7QURnQk07O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDZFI7QURrQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNoQk47QURtQkk7RUFDRSxjQUFBO0FDakJOO0FEb0JJO0VBQ0UsYUFBQTtBQ2xCTjtBRHVCQTtFQUVJO0lBQ0UsYUFBQTtFQ3JCSjtFRHVCSTtJQUNFLGVBQUE7RUNyQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRkLXRyYWNraW5nLXRhZ3Mvc2VsZWN0LWNhbXBhaWducy9zZWxlY3QtY2FtcGFpZ25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC50aXRsZTEge1xyXG4gICAgcGFkZGluZzogMTQycHggNjBweCAzNXB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xyXG5cclxuICAgIC50aXRsZTIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICAudXNhZ2Uge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGluay1idXR0b24ge1xyXG4gICAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC50cmFja2luZy1leGFtcGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtd3JhcHBlciB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIG1hdC10YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXJvdyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXJvdzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcclxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxyXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGZsZXg6IDAgMCA0MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSksXHJcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgZmxleDogMCAwIDIwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1yb3csXHJcbiAgICAgIG1hdC1oZWFkZXItcm93IHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGI1NDM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5hYmxlLXN0YXR1cyB7XHJcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXNhYmxlZC1zdGF0dXMge1xyXG4gICAgICBjb2xvcjogc2lsdmVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDE0MnB4IDYwcHggMzVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVzYWdlIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGluay1idXR0b24ge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nLWV4YW1wbGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nLWV4YW1wbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDQwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICBmbGV4OiAwIDAgMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZW5hYmxlLXN0YXR1cyB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmRpc2FibGVkLXN0YXR1cyB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let SelectCampaignsComponent = class SelectCampaignsComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _sessionService, _addTrackingTagsService, _router, _fuseSlashScreenService) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._sessionService = _sessionService;
        this._addTrackingTagsService = _addTrackingTagsService;
        this._router = _router;
        this._fuseSlashScreenService = _fuseSlashScreenService;
        this.displayedColumns = ['order', 'id', 'name', 'status', 'tracking'];
        this.isProcessing = false;
        this.campaignList = [];
        this.selectedCampaigns = [];
        this.trackingCampaignList = [];
    }
    ngOnInit() {
        const sub = this._sessionService.getAccountId()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])())
            .subscribe((accountId) => {
            if (accountId) {
                this.getOriginalCampaigns();
            }
        });
        this.subscriptions.push(sub);
    }
    onSelectAllCampaign(event) {
        if (event.checked) {
            this.selectedCampaigns = this.campaignList.map(item => item.id);
        }
        else {
            this.selectedCampaigns = [];
        }
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
        this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
    }
    addCampaignTracking() {
        const params = {
            campaignIds: this.selectedCampaigns
        };
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
        const sub = this._addTrackingTagsService.addCampaignTracking(params)
            .subscribe((res) => {
            this.getOriginalCampaigns();
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    getOriginalCampaigns() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._addTrackingTagsService.getOriginalCampaigns()
            .subscribe(res => {
            this.campaignList = res.data.campaignList;
            const sub1 = this._addTrackingTagsService.getTrackingCampaigns()
                .subscribe(res => {
                this.trackingCampaignList = res.data.campaignIds;
                this.selectedCampaigns = this.trackingCampaignList;
                this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
                setTimeout(() => {
                    this._fuseProgressiveBarService.hide();
                    this.isProcessing = false;
                }, 0);
            }, (error) => {
                this.trackingCampaignList = [];
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            });
            this.subscriptions.push(sub1);
        }, (error) => {
            if (error.error.messages) {
                this.campaignList = [];
                this.trackingCampaignList = [];
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            }
            this._fuseProgressiveBarService.hide();
        });
        this.subscriptions.push(sub);
    }
    showSupportInfoDialog() {
        this._dialogService._openInfoDialog('Vui lòng liên hệ email ha@appnet.edu.vn để được hỗ trợ thêm.');
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
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_8__["FuseSplashScreenService"]])
], SelectCampaignsComponent);



/***/ }),

/***/ "./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 142px 30px 35px 30px;\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .info {\n  line-height: 30px;\n}\n.container .inner .hightline {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 5px;\n  background-color: #eee;\n  color: deeppink;\n  font-family: \"consolas\";\n}\n.container .inner .key {\n  padding: 10px;\n  padding-right: 0;\n  width: 100%;\n  border-right: 0;\n  border-radius: 3px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  font-family: \"consolas\";\n  background: #eee;\n  color: deeppink;\n}\n.container .inner .code {\n  font-family: \"consolas\";\n}\n.container .inner .copy-button {\n  border-radius: 0;\n  color: gray;\n  padding-left: 5px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: 0;\n  background: #eee;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL0M6XFxVc2Vyc1xcTWluaCBUdWVcXERlc2t0b3BcXGNsaWNrXFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcYWRkLXRyYWNraW5nLXRhZ3NcXHRyYWNraW5nLXdlYnNpdGVcXHRyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vYWRkLXRyYWNraW5nLXRhZ3MvdHJhY2tpbmctd2Vic2l0ZS90cmFja2luZy13ZWJzaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURFRTtFQUNFLDRCQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0ROO0FEUUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBR0EsZ0JBQUE7RUFDQSxlQUFBO0FDUk47QURXSTtFQUNFLHVCQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEZUE7RUFFSTtJQUNFLGFBQUE7RUNiSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRpdGxlMSB7XHJcbiAgICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZGFyay1tYXRlcmlhbC1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGlnaHRsaW5lIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgICBmb250LWZhbWlseTogJ2NvbnNvbGFzJ1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwIHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmtleSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ2NvbnNvbGFzJztcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAvLyBjb2xvcjogc2t5Ymx1ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2RlIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdjb25zb2xhcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHktYnV0dG9uIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmlubmVyIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogMTQycHggMzBweCAzNXB4IDMwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZGFyay1tYXRlcmlhbC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mbyB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmhpZ2h0bGluZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiBkZWVwcGluaztcbiAgZm9udC1mYW1pbHk6IFwiY29uc29sYXNcIjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5rZXkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IFwiY29uc29sYXNcIjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgY29sb3I6IGRlZXBwaW5rO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvZGUge1xuICBmb250LWZhbWlseTogXCJjb25zb2xhc1wiO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvcHktYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59Il19 */"

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









let TrackingWebsiteComponent = class TrackingWebsiteComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_3__["PageBaseComponent"] {
    constructor(_activatedRoute, _matDialog, _addTrackingTagsService) {
        super();
        this._activatedRoute = _activatedRoute;
        this._matDialog = _matDialog;
        this._addTrackingTagsService = _addTrackingTagsService;
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
    copyKey(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    checkWebsiteTracking() {
        const dialogRef = this._matDialog
            .open(_check_website_tracking_dialog_check_website_tracking_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CheckWebsiteTrackingDialogComponent"], {
            autoFocus: false,
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
        _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__["AddTrackingTagsService"]])
], TrackingWebsiteComponent);



/***/ })

}]);
//# sourceMappingURL=main-add-tracking-tags-add-tracking-tags-module-es2015.js.map