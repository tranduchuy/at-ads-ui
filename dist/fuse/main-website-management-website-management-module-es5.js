(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-management-website-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/website-management/website-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    WEBSITE ĐANG QUẢNG CÁO TRONG TÀI KHOẢN <b><span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n        class=\"adsId\">{{selectedAdsId}}</span></b>\n  </div>\n\n  <div class=\"inner\">\n    <p>\n      <b>Bạn cần thêm 1 website để sử dụng các tính năng của hệ thống</b>\n    </p>\n    <ul style=\"list-style: none\">\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Theo dõi khách đang truy cập website thông qua <span\n          style=\"color: crimson; font-weight: bold\">khách đang truy cập</span>.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Tích hợp tất cả các công cụ thu thập thông tin khách hàng,\n        giúp bạn\n        có nhiều thông tin khách hàng hơn.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Đồng bộ thông tin khách hàng vào tập khách hàng <span\n          style=\"color: crimson; font-weight: bold\">theo dõi</span>, dễ dàng triển khai\n        quảng cáo <span style=\"color: crimson; font-weight: bold\">bám đuôi</span>.\n      </li>\n    </ul>\n\n\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"main-form\">\n\n      <p *ngIf=\"user.licence.type === 'CUSTOM'\"><strong>Tài Khoản Google Ads đang quảng cáo cho website này</strong></p>\n      <app-select-text (valueChanged)=\"onSelectAdsId($event)\" [itemsSource]=\"accountItemsSource\" [displayPath]=\"'text'\"\n        [valuePath]=\"'value'\" [title]=\"'Chọn tài khoản Google Ads'\" [formControlName]=\"'adsId'\"\n        [isDisabled]=\"isProcessing\" *ngIf=\"user.licence.type === 'CUSTOM'\"></app-select-text>\n\n      <div *ngIf=\"isAddingWebsiteAllowed === true\">\n        <p>\n          <strong>Vui lòng nhập tên miền website của bạn vào ô bên dưới</strong>\n        </p>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <app-input-text [formControlName]=\"'domain'\" [errors]=\"getMessageErrors('domain')\"\n            [title]=\"'Nhập tên miền của bạn'\" [isDisabled]=\"isProcessing === true\">\n          </app-input-text>\n          <button type=\"submit\" mat-raised-button color=\"accent\" class=\"add-website-button\"\n            [disabled]=\"isProcessing === true\">\n            <mat-icon>add</mat-icon> THÊM WEBSITE\n          </button>\n        </div>\n        <br><span><b><span style=\"color: crimson\">*</span>Lưu ý:</b> Tên miền phải kèm theo <span\n            style=\"color: #40a5ec; font-weight: bold\">http://</span> hoặc <span\n            style=\"color: #40a5ec; font-weight: bold\">https://</span></span>\n      </div>\n      <p *ngIf=\"isAddingWebsiteAllowed === false\" class=\"limit-website-notification\">\n        Số lượng website của tài khoản Google Ads này đã đạt tối đa. Vui\n        lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a>\n      </p>\n    </form>\n\n    <div class=\"website-list\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\" class=\"table-title\">\n        <p>Các website đang quảng cáo</p>\n        <button mat-button class=\"update-website-list-button\" (click)=\"getWebsites()\"\n          [disabled]=\"isProcessing\">\n          <mat-icon>sync</mat-icon>Cập nhật\n        </button>\n      </div>\n\n      <div class=\"table-wrapper\">\n        <mat-table [dataSource]=\"websites\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let i = index\"> {{i + 1}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"website\">\n            <mat-header-cell *matHeaderCellDef> Website </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a href=\"{{element.domain}}\" target=\"_blank\">{{element.domain}}</a>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"tracking\">\n            <mat-header-cell *matHeaderCellDef> Gắn tracking </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button *ngIf=\"element.isTracking === true\" mat-stroked-button color=\"accent\" class=\"tracking-status\">\n                <mat-icon>check</mat-icon> Hoàn\n                thành\n              </button>\n              <button *ngIf=\"element.isTracking === false\" mat-stroked-button\n                matTooltip=\"Nhấn để tiến hành gắn tracking\" style=\"color: crimson\" class=\"tracking-status\"\n                [routerLink]=\"['/gan-tracking/website', selectedAccountId]\">\n                <mat-icon>close</mat-icon> Chưa có\n              </button>\n              <button (click)=\"openRemoveWebsiteConfirmDialog(element.code)\" class=\"delete-button\" mat-icon-button\n                color=\"accent\" matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                <mat-icon style=\"color: silver\">delete</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n\n      <div class=\"no-website-notification\" *ngIf=\"websites.length === 0 && isProcessing === false\">\n        Chưa có ghi nhận nào\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/website-management/website-management-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/website-management/website-management-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: WebsiteManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteManagementRoutingModule", function() { return WebsiteManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _website_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website-management.component */ "./src/app/main/website-management/website-management.component.ts");




var WebsiteManagementRoutingModule = /** @class */ (function () {
    function WebsiteManagementRoutingModule() {
    }
    WebsiteManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _website_management_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteManagementComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WebsiteManagementRoutingModule);
    return WebsiteManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/website-management/website-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/website-management/website-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n.container .inner ul li {\n  color: rgba(0, 0, 0, 0.7);\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .update-website-list-button mat-icon {\n  font-size: 18px;\n}\n.container .inner .main-form {\n  padding-bottom: 20px;\n}\n.container .inner .main-form .add-website-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  font-size: 12px;\n  min-width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .main-form .add-website-button mat-icon {\n  font-size: 16px;\n  margin-top: 5px;\n}\n.container .inner .main-form .limit-website-notification {\n  width: 100%;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  background: lightyellow;\n}\n.container .inner .no-website-notification {\n  color: gray;\n  padding: 10px;\n}\n.container .inner .website-list {\n  margin-top: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 7px;\n  background: white;\n}\n.container .inner .website-list .table-title {\n  color: rgba(0, 0, 0, 0.7);\n  padding: 2.5px 20px 2.5px 20px;\n  font-size: 14px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n.container .inner .website-list .table-title button {\n  font-weight: normal !important;\n}\n.container .inner .website-list .table-wrapper {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: white;\n  border: 0.5px solid #eee;\n  max-height: 500px;\n  overflow: auto;\n  box-shadow: none !important;\n}\n.container .inner .website-list .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .website-list .table-wrapper mat-row,\n.container .inner .website-list .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .website-list .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .website-list .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 45%;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) .delete-button {\n  margin-left: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .website-list .table-wrapper mat-cell mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell .tracking-status {\n  font-size: 12px;\n  border: 0;\n  padding-left: 0;\n  max-width: 100px;\n}\n.container .inner .website-list .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .website-list .table-wrapper mat-header-row,\n.container .inner .website-list .table-wrapper mat-row {\n  min-width: 650px;\n  width: 100%;\n}\n.container .inner li {\n  text-align: justify;\n  font-size: 12px;\n}\n.container .inner li mat-icon {\n  font-size: 14px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n    text-align: center;\n  }\n  .container .inner {\n    padding: 30px 15px 15px 15px;\n    margin: 10px;\n  }\n  .container .inner ul {\n    padding-left: 5px;\n    font-size: 12px;\n  }\n  .container .inner ul li {\n    padding-bottom: 10px;\n  }\n  .container .inner .main-form .add-website-button {\n    height: 35px;\n    margin-top: -5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQU47QURJRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBUUEsd0NBQUE7RUFDQSxnQ0FBQTtBQ1RKO0FER007RUFDRSx5QkFBQTtBQ0RSO0FET0k7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNMTjtFRE9JO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0xOO0FBQ0Y7QURESTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0xOO0VET0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTE47QUFDRjtBRFFJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNOTjtBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUE47QURTTTtFQUNFLGVBQUE7QUNQUjtBRFdJO0VBQ0Usb0JBQUE7QUNUTjtBRFVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSUjtBRFVRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNSVjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0FDVlI7QURjSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDWk47QURlSTtFQUNFLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDYk47QURlTTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ2JSO0FEZVE7RUFDRSw4QkFBQTtBQ2JWO0FEaUJNO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ2ZSO0FEaUJRO0VBQ0UsZ0JBQUE7QUNmVjtBRGtCUTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNoQlY7QURtQlE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsNENBQUE7RUFDQSxvQ0FBQTtBQ2xCVjtBRG1CVTtFQUNFO0lBQ0UsVUFBQTtFQ2pCWjtFRG1CVTtJQUNFLFVBQUE7RUNqQlo7QUFDRjtBRFdVO0VBQ0U7SUFDRSxVQUFBO0VDakJaO0VEbUJVO0lBQ0UsVUFBQTtFQ2pCWjtBQUNGO0FEb0JVO0VBQ0UseUNBQUE7QUNsQlo7QURzQlE7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDcEJWO0FEdUJROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQ3JCVjtBRHlCVTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDdkJaO0FEMEJVO0VBQ0UsaUJBQUE7QUN4Qlo7QUQ0QlE7RUFDRSxlQUFBO0FDMUJWO0FENEJVO0VBQ0UsZUFBQTtBQzFCWjtBRDZCVTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDM0JaO0FEK0JRO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDN0JWO0FEZ0NROztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQzlCVjtBRG1DSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ2pDTjtBRG1DTTtFQUNFLGVBQUE7QUNqQ1I7QUR1Q0E7RUFFSTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDckNKO0VEd0NFO0lBQ0UsNEJBQUE7SUFDQSxZQUFBO0VDdENKO0VEd0NJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDdENOO0VEd0NNO0lBQ0Usb0JBQUE7RUN0Q1I7RUQyQ007SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUN6Q1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIC50aXRsZTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZiNSAwJSwgIzI0N2JhMCA3NCUpO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICAgIGhlaWdodDogMjd2aDtcblxuICAgIC5hZHNJZCB7XG4gICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG5cbiAgICB1bCB7XG4gICAgICBsaSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubGlzdC1jaGVjayB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIHtcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1mb3JtIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGltaXQtd2Vic2l0ZS1ub3RpZmljYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm8td2Vic2l0ZS1ub3RpZmljYXRpb24ge1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC53ZWJzaXRlLWxpc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAudGFibGUtdGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBwYWRkaW5nOiAyLjVweCAyMHB4IDIuNXB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93LFxuICAgICAgICBtYXQtaGVhZGVyLXJvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgNDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBidXR0b246bm90KC5kZWxldGUtYnV0dG9uKSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmFja2luZy1zdGF0dXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItcm93LFxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDY1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMzBweCAxNXB4IDE1cHggMTVweDtcbiAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWFpbi1mb3JtIHtcbiAgICAgICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZiNSAwJSwgIzI0N2JhMCA3NCUpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyN3ZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZHNJZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMzBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1dmg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgdWwgbGkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51cGRhdGUtd2Vic2l0ZS1saXN0LWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAubGltaXQtd2Vic2l0ZS1ub3RpZmljYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcGFkZGluZzogMi41cHggMjBweCAyLjVweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXRpdGxlIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgNDUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMykgYnV0dG9uOm5vdCguZGVsZXRlLWJ1dHRvbikge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIC5kZWxldGUtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwgLnRyYWNraW5nLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyxcbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIG1pbi13aWR0aDogNjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgbGkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciBsaSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogMzN2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgdWwgbGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/website-management/website-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/website-management/website-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteManagementComponent", function() { return WebsiteManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/validator.service */ "./src/app/shared/services/validator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _website_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./website-management.service */ "./src/app/main/website-management/website-management.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












var WebsiteManagementComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebsiteManagementComponent, _super);
    function WebsiteManagementComponent(_fuseProgressiveBarService, _dialogService, _sessionService, _validatorsService, _websiteManagementService, _activatedRoute, _router) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._sessionService = _sessionService;
        _this._validatorsService = _validatorsService;
        _this._websiteManagementService = _websiteManagementService;
        _this._activatedRoute = _activatedRoute;
        _this._router = _router;
        _this.displayedColumns = ['order', 'website', 'tracking'];
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        _this.accounts = [];
        _this.websites = [];
        _this.accountItemsSource = [];
        _this.selectedAdsId = '';
        _this.selectedAccountId = '';
        _this.isProcessing = false;
        return _this;
    }
    WebsiteManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.user = JSON.parse(this._sessionService.user);
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._activatedRoute.params.subscribe(function (params) {
            if (params.accountId === undefined) {
                _this.selectedAccountId = _this._sessionService.activeAccountId;
                _this.selectedAdsId = _this._sessionService.activeAdsAccountId;
                _this._fuseProgressiveBarService.hide();
                _this.isProcessing = false;
            }
            else {
                _this.selectedAccountId = params.accountId;
                _this.getAdwordsAccountDetail();
            }
        });
        this.subscriptions.push(sub);
    };
    WebsiteManagementComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            adsId: [''],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this._validatorsService.checkDomain]]
        });
    };
    WebsiteManagementComponent.prototype.onSubmitForm = function () {
        this.onSubmit();
    };
    WebsiteManagementComponent.prototype.getAdwordsAccountDetail = function () {
        var _this = this;
        var detailSub = this._websiteManagementService.getAdwordsAccountDetail(this.selectedAccountId)
            .subscribe(function (res) {
            _this.selectedAdsId = _this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
            _this.limitWebsite = res.data.adsAccount.setting.limitWebsite;
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            _this.getAccounts();
        }, function (error) {
            _this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(detailSub);
    };
    WebsiteManagementComponent.prototype.getWebsites = function (action) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
            .subscribe(function (res) {
            _this.websites = res.data.websites;
            _this.isAddingWebsiteAllowed = (_this.websites || []).length < _this.limitWebsite;
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            if (_this.websites.length > 0
                && _this._sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.ADD_WEBSITE.value) {
                _this._sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.ADD_WEBSITE.value);
            }
            if (action) {
                if (action.status === 'SUCCESS') {
                    _this._dialogService._openSuccessDialog(action.data);
                }
                else if (action.status === 'ERROR') {
                    _this._dialogService._openErrorDialog(action.data);
                }
            }
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this.websites = [];
            _this.isProcessing = false;
            if (error.status === 404) {
                var data = [];
                data['select-campaign'] = {
                    accountId: _this.selectedAccountId,
                    adsId: _this.selectedAdsId
                };
                _this._dialogService._openInfoDialog('Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                _this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    };
    WebsiteManagementComponent.prototype.getAccounts = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._sessionService.getListAccounts()
            .subscribe(function (listAccounts) {
            if (listAccounts) {
                _this.accounts = listAccounts;
                if (_this.accounts.length > 0) {
                    for (var _i = 0, _a = _this.accounts; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (_this.adsAccountIdPipe.transform(item.adsId) !== _this.selectedAdsId) {
                            _this.accountItemsSource.push({
                                text: _this.adsAccountIdPipe.transform(item.adsId),
                                value: item.accountId
                            });
                        }
                        else {
                            _this.accountItemsSource.unshift({
                                text: _this.selectedAdsId,
                                value: item.accountId
                            });
                            _this.selectedAccountId = item.accountId;
                            _this.getWebsites();
                        }
                        if (_this.accountItemsSource.length === 1) {
                            _this.form.controls['adsId'].setValue(_this.accountItemsSource[0]);
                        }
                    }
                }
            }
        });
        this.subscriptions.push(sub);
    };
    WebsiteManagementComponent.prototype.generatePostObject = function () {
        var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value);
        var params = {
            domain: body.domain,
            accountId: this.selectedAccountId
        };
        return params;
    };
    WebsiteManagementComponent.prototype.post = function () {
        var _this = this;
        this.isProcessing = true;
        var params = this.generatePostObject();
        this._fuseProgressiveBarService.show();
        var sub = this._websiteManagementService.addWebsite(params)
            .subscribe(function (res) {
            _this.getWebsites({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(function () {
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            _this._dialogService._openErrorDialog(error.error);
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    WebsiteManagementComponent.prototype.openRemoveWebsiteConfirmDialog = function (websiteId) {
        var _this = this;
        var confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.isProcessing = true;
                _this._fuseProgressiveBarService.show();
                _this.removeWebsite(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    };
    WebsiteManagementComponent.prototype.removeWebsite = function (websiteId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._websiteManagementService.removeWebsite(websiteId)
            .subscribe(function (res) {
            _this.getWebsites({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(function () {
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            if (error.error.messages) {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    WebsiteManagementComponent.prototype.onSelectAdsId = function (event) {
        this.selectedAdsId = event.value.text;
        this.selectedAccountId = event.value.value;
        this.getWebsites();
    };
    WebsiteManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-management',
            template: __webpack_require__(/*! raw-loader!./website-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html"),
            styles: [__webpack_require__(/*! ./website-management.component.scss */ "./src/app/main/website-management/website-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            app_shared_services_validator_service__WEBPACK_IMPORTED_MODULE_6__["ValidatorsService"],
            _website_management_service__WEBPACK_IMPORTED_MODULE_8__["WebsiteManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], WebsiteManagementComponent);
    return WebsiteManagementComponent;
}(_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"]));



/***/ }),

/***/ "./src/app/main/website-management/website-management.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/website-management/website-management.module.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteManagementModule", function() { return WebsiteManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _website_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website-management-routing.module */ "./src/app/main/website-management/website-management-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _website_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./website-management.component */ "./src/app/main/website-management/website-management.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");


















var WebsiteManagementModule = /** @class */ (function () {
    function WebsiteManagementModule() {
    }
    WebsiteManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_website_management_component__WEBPACK_IMPORTED_MODULE_16__["WebsiteManagementComponent"]],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__["CheckboxGroupModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
                _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__["SelectTextModule"],
                app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__["AdsAccountIdModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__["FuseSharedModule"],
                _website_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["WebsiteManagementRoutingModule"]
            ]
        })
    ], WebsiteManagementModule);
    return WebsiteManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-website-management-website-management-module-es5.js.map