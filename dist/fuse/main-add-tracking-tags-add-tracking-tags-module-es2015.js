(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-tracking-tags-add-tracking-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/select-campaigns/select-campaigns.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    GẮN TRACKING THEO DÕI CHIẾN DỊCH TÀI KHOẢN <span\n      style=\"color: yellow; font-weight: bolder\">{{sessionService.activeAdsAccountId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"usage\">\n      <b>Công dụng của Tracking:</b> Tracking là đoạn mã nhỏ, tích hợp vào trong quảng cáo Google Ads để theo dõi hoạt\n      động\n      bấm quảng cáo.\n    </p>\n\n    <div class=\"tracking-example\">\n      <img mat-card-image src=\"../../../../assets/images/select-tracking1.png\" alt=\"Photo about tracking\">\n    </div>\n\n    <p class=\"title2\">\n      <span style=\"color: #40a5ec\">[GẮN MÃ]</span> CHỌN CHIẾN DỊCH CẦN GẮN MÃ <span\n        style=\"color: #40a5ec; font-weight: bold\">(NÊN CHỌN TẤT CẢ)</span>\n    </p>\n\n    <form class=\"form\">\n\n      <mat-form-field *ngIf=\"hasCampaign === true\">\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"table-wrapper\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let i = index\"> {{i+1}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Chiến dịch </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <mat-header-cell *matHeaderCellDef> Trạng thái </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.status === 'Hoạt động'\"\n                style=\"color: #40a5ec; font-weight: bold\">{{element.status}}</span>\n              <span *ngIf=\"element.status !== 'Hoạt động'\"\n                style=\"color: silver; font-weight: bold\">{{element.status}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"tracking\">\n            <mat-header-cell *matHeaderCellDef>\n              <p>\n                <mat-checkbox (change)=\"onSelectAllCampaign($event)\" style=\"margin-right: 5px\"\n                  matTooltip=\"Chọn/ Bỏ chọn tất cả\" [checked]=\"selectedCampaigns.length === numberOfEnableCampaigns\">\n                </mat-checkbox> Gắn mã\n              </p>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n\n              <mat-checkbox (change)=\"onSelectCampaign($event, element.id)\"\n                [checked]=\"selectedCampaigns.includes(element.id)\" *ngIf=\"element.status === 'Hoạt động'\">\n              </mat-checkbox>\n\n              <mat-checkbox *ngIf=\"element.status !== 'Hoạt động'\" disabled></mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p style=\"text-align: center\" *ngIf=\"campaignList.length > 0 && !isProcessing\">\n        <button (click)=\"addCampaignTracking()\" mat-raised-button class=\"submit-button\" [disabled]=\"isProcessing\">\n          <mat-icon style=\"font-size: 20px\">location_searching</mat-icon> GẮN MÃ TRACKING\n        </button>\n      </p>\n\n      <p class=\"notification\" *ngIf=\"hasCampaign === false\">\n        Chúng tôi không tìm thấy chiến dịch nào trên tài khoản Google Ads này. Vui lòng <a (click)=\"getOriginalCampaigns()\"\n          class=\"link-button\">thử lại</a> hoặc <a class=\"link-button\" (click)=\"showSupportInfoDialog()\">liên\n          hệ</a> với hỗ trợ viên để được giúp đỡ.\n      </p>\n\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-tracking-tags/tracking-website/tracking-website.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title1\">\n    GẮN MÃ TRACKING VÀO WEBSITE TÀI KHOẢN <span style=\"color: yellow\">{{adsId}}</span>\n  </div>\n\n  <div class=\"inner\">\n    <p class=\"info\">\n      <span class=\"bold-text\">Tại sao cần gắn mã:</span> Hệ thống đưa vào mã tracking để phát hiện số điện thoại truy cập vào website của bạn.\n      Bạn\n      có thể bỏ mã vào bất cứ vị trí nào trong website. Tuy nhiên tốt nhất hãy bỏ mã vào trong\n      <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span>\n    </p>\n\n    <div style=\"padding-top: 10px\">\n      <span class=\"step\"><span class=\"bold-text\">Bước 1:</span> Copy mã tracking</span>\n      <div fxLayout=\"row\" style=\"padding-top: 10px\">\n        <input class=\"key\" type=\"text\" #inputKey\n          value='&lt;script type=\"text/javascript\" src=\"{{hostTracking}}?key={{key}}\"&gt;&lt;/script&gt;' readonly>\n        <button mat-icon-button (click)=\"copyKey(inputKey.value)\" class=\"copy-button\" matTooltip=\"Nhấn vào để sao chép\">\n          <mat-icon style=\"font-size: 20px\">file_copy</mat-icon>\n        </button>\n      </div>\n      <p style=\"padding-top: 10px; line-height: 30px\">\n        <span class=\"step\"><span class=\"bold-text\">Bước 2:</span> Mở các website của bạn và gắn mã vào trong thẻ\n          <span class=\"hightline\">&lt;head&gt;[mã tracking]&lt;/head&gt;</span></span>\n      </p>\n      <div style=\"padding-top: 10px\">\n        <span class=\"step\"><span class=\"bold-text\">Bước 3:</span> Kiểm tra mã</span>\n        <p>\n          <button mat-raised-button color=\"accent\" (click)=\"checkWebsiteTracking()\">\n            BẤM ĐỂ KIỂM TRA MÃ\n          </button>\n        </p>\n      </div>\n    </div>\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 60px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .title2 {\n  margin-top: 50px;\n  font-weight: bold;\n  text-align: justify;\n}\n.container .inner .usage {\n  text-align: justify;\n  padding-top: 20px;\n}\n.container .inner .link-button {\n  color: #40a5ec;\n  cursor: pointer;\n  text-decoration: underline !important;\n}\n.container .inner .tracking-example {\n  margin-top: 20px;\n}\n.container .inner .tracking-example img {\n  width: 100%;\n  -webkit-filter: drop-shadow(1px 1px 1px silver);\n          filter: drop-shadow(1px 1px 1px silver);\n  opacity: 0.9;\n}\n.container .inner .table-title {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n  padding-top: 20px;\n}\n.container .inner .notification {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  background-color: #eee;\n  width: 80%;\n  margin-top: 30px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-left: 5px solid darkorange;\n}\n.container .inner .table-wrapper {\n  max-height: 500px;\n  border: 0.5px solid #eee;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(3),\n.container .inner .table-wrapper mat-cell:nth-child(3) {\n  flex: 0 0 40%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(5),\n.container .inner .table-wrapper mat-cell:nth-child(5) {\n  flex: 0 0 20%;\n  padding-left: 20px;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #40a5ec;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .submit-button {\n  margin: 0 auto;\n  margin-top: 10px;\n  background-color: #44b543;\n  color: white;\n}\n.container .inner .enable-status {\n  color: #40a5ec;\n}\n.container .inner .disabled-status {\n  color: silver;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .submit-button {\n    font-size: 12px;\n  }\n  .container .inner .notification {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy9zZWxlY3QtY2FtcGFpZ25zL3NlbGVjdC1jYW1wYWlnbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURBRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRENFO0VBQ0UsNEJBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtBQ0ZOO0FESU07RUFDRSxXQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLFlBQUE7QUNGUjtBRE1JO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0pOO0FET0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7QUNMTjtBRFFJO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ05OO0FEUU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNNO0VBQ0UsZ0JBQUE7QUNQUjtBRFVNO0VBQ0UseUNBQUE7QUNSUjtBRFdNOztFQUVFLGFBQUE7QUNUUjtBRFlNOztFQUVFLGFBQUE7QUNWUjtBRGFNOztFQUVFLGFBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEY007RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1pSO0FEZU07RUFDRSxlQUFBO0FDYlI7QURnQk07O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FDZFI7QURrQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNoQk47QURtQkk7RUFDRSxjQUFBO0FDakJOO0FEb0JJO0VBQ0UsYUFBQTtBQ2xCTjtBRHVCQTtFQUVJO0lBQ0UsYUFBQTtFQ3JCSjtFRHVCSTtJQUNFLGVBQUE7RUNyQk47RUR3Qkk7SUFDRSxXQUFBO0VDdEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3NlbGVjdC1jYW1wYWlnbnMvc2VsZWN0LWNhbXBhaWducy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCA2MHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC50aXRsZTIge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG5cbiAgICAudXNhZ2Uge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5saW5rLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nLWV4YW1wbGUge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHggc2lsdmVyKTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWJsZS10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgIH1cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICBmbGV4OiAwIDAgMTAlO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgZmxleDogMCAwIDQwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg1KSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQwYTVlYztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3csXG4gICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NGI1NDM7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVuYWJsZS1zdGF0dXMge1xuICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgfVxuXG4gICAgLmRpc2FibGVkLXN0YXR1cyB7XG4gICAgICBjb2xvcjogc2lsdmVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggNjBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50aXRsZTIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmlubmVyIC51c2FnZSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpbmstYnV0dG9uIHtcbiAgY29sb3I6ICM0MGE1ZWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1leGFtcGxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4IHNpbHZlcik7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgZmxleDogMCAwIDIwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzQwYTVlYztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93IHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZW5hYmxlLXN0YXR1cyB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmRpc2FibGVkLXN0YXR1cyB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLm5vdGlmaWNhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

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
        this.isProcessing = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](this.campaignList);
    }
    ngOnInit() {
        this._fuseProgressBarService.show();
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
            setTimeout(() => {
                this._dialogService._openSuccessDialog(res);
                this._fuseProgressBarService.hide();
                this._fuseSplashScreenService.hide();
                this.isProcessing = false;
                this._router.navigateByUrl(`/gan-tracking/website/${this.sessionService.activeAccountId}`);
            }, 0);
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
                this.campaignList = [];
                this.trackingCampaignList = [];
                this.hasCampaign = false;
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            }
            this._fuseProgressBarService.hide();
            this._fuseSplashScreenService.hide();
        });
        this.subscriptions.push(sub);
    }
    getTrackingCampaigns() {
        const sub = this._addTrackingTagsService.getTrackingCampaigns()
            .subscribe(res => {
            this.trackingCampaignList = res.data.campaignIds;
            this.selectedCampaigns = this.trackingCampaignList;
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
    SĐT, Zalo, Viber 093.757.3139
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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 30px 30px 15px 30px;\n}\n.container .inner .info {\n  line-height: 30px;\n}\n.container .inner .hightline {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 5px;\n  background-color: #eee;\n  color: deeppink;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.container .inner .bold-text {\n  font-weight: bold;\n}\n.container .inner .key {\n  padding: 10px;\n  padding-right: 0;\n  width: 50%;\n  border-right: 0;\n  border-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background: #eee;\n  color: deeppink;\n}\n.container .inner .code {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.container .inner .copy-button {\n  border-radius: 0;\n  color: gray;\n  padding-left: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border: 0;\n  background: #eee;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .key {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC10cmFja2luZy10YWdzL3RyYWNraW5nLXdlYnNpdGUvdHJhY2tpbmctd2Vic2l0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFO0VBQ0UsNEJBQUE7QUNBSjtBREVJO0VBQ0UsaUJBQUE7QUNBTjtBREdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0FDRE47QURRSTtFQUNFLGlCQUFBO0FDTk47QURTSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNERBQUE7RUFHQSxnQkFBQTtFQUNBLGVBQUE7QUNUTjtBRFlJO0VBQ0UsNERBQUE7QUNWTjtBRGFJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDWE47QURnQkE7RUFFSTtJQUNFLGFBQUE7RUNkSjtFRGdCSTtJQUNFLFdBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtdHJhY2tpbmctdGFncy90cmFja2luZy13ZWJzaXRlL3RyYWNraW5nLXdlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMzBweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC5pbmZvIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5oaWdodGxpbmUge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBjb2xvcjogZGVlcHBpbms7XG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBcbiAgICB9XG5cbiAgICAuYm9sZC10ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5rZXkge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgIC8vIGNvbG9yOiBza3libHVlO1xuICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICB9XG5cbiAgICAuY29kZSB7XG4gICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgLmNvcHktYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmtleSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluZm8ge1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5oaWdodGxpbmUge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogZGVlcHBpbms7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmtleSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBjb2xvcjogZGVlcHBpbms7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNvcHktYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5rZXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

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
        _add_tracking_tags_service__WEBPACK_IMPORTED_MODULE_8__["AddTrackingTagsService"]])
], TrackingWebsiteComponent);



/***/ })

}]);
//# sourceMappingURL=main-add-tracking-tags-add-tracking-tags-module-es2015.js.map