(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-management-website-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/website-management/website-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    WEBSITE ĐANG QUẢNG CÁO TRONG TÀI KHOẢN <b><span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n        class=\"adsId\">{{selectedAdsId}}</span></b>\n  </div>\n\n  <div class=\"inner\">\n    <p>\n      <b>Bạn cần thêm 1 website để sử dụng các tính năng của hệ thống</b>\n    </p>\n    <ul style=\"list-style: none\">\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Theo dõi khách đang truy cập website thông qua <span\n          style=\"color: crimson; font-weight: bold\">khách đang truy cập</span>.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Tích hợp tất cả các công cụ thu thập thông tin khách hàng,\n        giúp bạn\n        có nhiều thông tin khách hàng hơn.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check</mat-icon> Đồng bộ thông tin khách hàng vào tập khách hàng <span\n          style=\"color: crimson; font-weight: bold\">theo dõi</span>, dễ dàng triển khai\n        quảng cáo <span style=\"color: crimson; font-weight: bold\">bám đuôi</span>.\n      </li>\n    </ul>\n\n\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\" class=\"main-form\">\n\n      <p *ngIf=\"user.licence.type === 'CUSTOM'\"><strong>Tài Khoản Google Ads đang quảng cáo cho website này</strong></p>\n      <app-select-text (valueChanged)=\"onSelectAdsId($event)\" [itemsSource]=\"accountItemsSource\" [displayPath]=\"'text'\"\n        [valuePath]=\"'value'\" [title]=\"'Chọn tài khoản Google Ads'\" [formControlName]=\"'adsId'\"\n        [isDisabled]=\"isProcessing\" *ngIf=\"user.licence.type === 'CUSTOM'\"></app-select-text>\n\n      <div *ngIf=\"isAddingWebsiteAllowed === true\">\n        <p>\n          <strong>Vui lòng nhập tên miền website của bạn vào ô bên dưới</strong>\n        </p>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <app-input-text [formControlName]=\"'domain'\" [errors]=\"getMessageErrors('domain')\"\n            [title]=\"'Nhập tên miền của bạn'\" [isDisabled]=\"isProcessing === true\">\n          </app-input-text>\n          <button type=\"submit\" mat-raised-button color=\"accent\" class=\"add-website-button\"\n            [disabled]=\"isProcessing === true\">\n            <mat-icon>add</mat-icon> THÊM WEBSITE\n          </button>\n        </div>\n        <br><span><b><span style=\"color: crimson\">*</span>Lưu ý:</b> Tên miền phải kèm theo <span\n            style=\"color: #40a5ec; font-weight: bold\">http://</span> hoặc <span\n            style=\"color: #40a5ec; font-weight: bold\">https://</span></span>\n      </div>\n      <p *ngIf=\"isAddingWebsiteAllowed === false\" class=\"limit-website-notification\">\n        Số lượng website của tài khoản Google Ads này đã đạt tối đa. Vui\n        lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a>\n      </p>\n    </form>\n\n    <div class=\"website-list\">\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\" class=\"table-title\">\n        <p>Các website đang quảng cáo</p>\n        <button mat-button class=\"update-website-list-button\" (click)=\"getWebsites()\"\n          [disabled]=\"isProcessing\">\n          <mat-icon>sync</mat-icon>Cập nhật\n        </button>\n      </div>\n\n      <div class=\"table-wrapper\">\n        <mat-table [dataSource]=\"websites\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let i = index\"> {{i + 1}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"website\">\n            <mat-header-cell *matHeaderCellDef> Website cần gắn tracking </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a href=\"{{element.domain}}\" target=\"_blank\">{{element.domain}}</a>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"tracking\">\n            <mat-header-cell *matHeaderCellDef> Gắn tracking </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button *ngIf=\"element.isTracking === true\" mat-stroked-button color=\"accent\" class=\"tracking-status\">\n                <mat-icon>check</mat-icon> Hoàn\n                thành\n              </button>\n              <button *ngIf=\"element.isTracking === false\" mat-stroked-button\n                matTooltip=\"Nhấn để tiến hành gắn tracking\" style=\"color: crimson\" class=\"tracking-status\"\n                [routerLink]=\"['/gan-tracking/website', selectedAccountId]\">\n                <mat-icon>close</mat-icon> Chưa có\n              </button>\n              <button (click)=\"openRemoveWebsiteConfirmDialog(element.code)\" class=\"delete-button\" mat-icon-button\n                color=\"accent\" matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                <mat-icon style=\"color: silver\">delete</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n\n      <div class=\"no-website-notification\" *ngIf=\"websites.length === 0 && isProcessing === false\">\n        Chưa có ghi nhận nào\n      </div>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _website_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website-management.component */ "./src/app/main/website-management/website-management.component.ts");




let WebsiteManagementRoutingModule = class WebsiteManagementRoutingModule {
};
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



/***/ }),

/***/ "./src/app/main/website-management/website-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/website-management/website-management.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 45px 30px 0 45px;\n  height: 25vh;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n.container .inner ul li {\n  color: rgba(0, 0, 0, 0.7);\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .update-website-list-button mat-icon {\n  font-size: 18px;\n}\n.container .inner .main-form {\n  padding-bottom: 20px;\n}\n.container .inner .main-form .add-website-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  font-size: 12px;\n  min-width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .main-form .add-website-button mat-icon {\n  font-size: 16px;\n  margin-top: 5px;\n}\n.container .inner .main-form .limit-website-notification {\n  width: 100%;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  background: lightyellow;\n}\n.container .inner .no-website-notification {\n  color: gray;\n  padding: 10px;\n}\n.container .inner .website-list {\n  margin-top: 30px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n  background: white;\n}\n.container .inner .website-list .table-title {\n  color: rgba(0, 0, 0, 0.7);\n  padding: 2.5px 20px 2.5px 20px;\n  font-size: 14px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n.container .inner .website-list .table-title button {\n  font-weight: normal !important;\n}\n.container .inner .website-list .table-wrapper {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: white;\n  border: 0.5px solid #eee;\n  max-height: 500px;\n  overflow: auto;\n  box-shadow: none !important;\n}\n.container .inner .website-list .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .website-list .table-wrapper mat-row,\n.container .inner .website-list .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .website-list .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .website-list .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 45%;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) .delete-button {\n  margin-left: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .website-list .table-wrapper mat-cell mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell .tracking-status {\n  font-size: 12px;\n  border: 0;\n  padding-left: 0;\n  max-width: 100px;\n}\n.container .inner .website-list .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .website-list .table-wrapper mat-header-row,\n.container .inner .website-list .table-wrapper mat-row {\n  min-width: 650px;\n  width: 100%;\n}\n.container .inner li {\n  text-align: justify;\n  font-size: 12px;\n}\n.container .inner li mat-icon {\n  font-size: 14px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n    text-align: center;\n  }\n  .container .inner {\n    padding: 30px 15px 15px 15px;\n    margin: 15px;\n  }\n  .container .inner ul {\n    padding-left: 5px;\n    font-size: 12px;\n  }\n  .container .inner ul li {\n    padding-bottom: 10px;\n  }\n  .container .inner .main-form .add-website-button {\n    height: 35px;\n    margin-top: -5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQVVFLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDVE47QURhRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBUUEsd0NBQUE7QUNsQko7QURhTTtFQUNFLHlCQUFBO0FDWFI7QURnQkk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNkTjtFRGdCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkTjtBQUNGO0FEUUk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNkTjtFRGdCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkTjtBQUNGO0FEaUJJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNmTjtBRGtCSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2hCTjtBRGtCTTtFQUNFLGVBQUE7QUNoQlI7QURvQkk7RUFDRSxvQkFBQTtBQ2xCTjtBRG1CTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakJSO0FEbUJRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNqQlY7QURxQk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUNuQlI7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ3JCTjtBRHdCSTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDdEJOO0FEd0JNO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDdEJSO0FEd0JRO0VBQ0UsOEJBQUE7QUN0QlY7QUQwQk07RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDeEJSO0FEMEJRO0VBQ0UsZ0JBQUE7QUN4QlY7QUQyQlE7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FDekJWO0FENEJRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUVBLDRDQUFBO0FDM0JWO0FENEJVO0VBQ0U7SUFDRSxVQUFBO0VDMUJaO0VENEJVO0lBQ0UsVUFBQTtFQzFCWjtBQUNGO0FEb0JVO0VBQ0U7SUFDRSxVQUFBO0VDMUJaO0VENEJVO0lBQ0UsVUFBQTtFQzFCWjtBQUNGO0FENkJVO0VBQ0UseUNBQUE7QUMzQlo7QUQrQlE7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDN0JWO0FEZ0NROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQzlCVjtBRGtDVTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDaENaO0FEbUNVO0VBQ0UsaUJBQUE7QUNqQ1o7QURxQ1E7RUFDRSxlQUFBO0FDbkNWO0FEcUNVO0VBQ0UsZUFBQTtBQ25DWjtBRHNDVTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDcENaO0FEd0NRO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDdENWO0FEeUNROztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ3ZDVjtBRDRDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQzFDTjtBRDRDTTtFQUNFLGVBQUE7QUMxQ1I7QURnREE7RUFFSTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDOUNKO0VEaURFO0lBQ0UsNEJBQUE7SUFDQSxZQUFBO0VDL0NKO0VEaURJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDL0NOO0VEaURNO0lBQ0Usb0JBQUE7RUMvQ1I7RURvRE07SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNsRFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIC50aXRsZTEge1xuICAgIC8vIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gcGFkZGluZzogNDBweCAzMHB4IDBweCAzMHB4O1xuICAgIC8vIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmYjUgMCUsICMyNDdiYTAgNzQlKTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvL3BhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gICAgcGFkZGluZzogNDVweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI1dmg7XG5cbiAgICAuYWRzSWQge1xuICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXZoO1xuXG4gICAgdWwge1xuICAgICAgbGkge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpc3QtY2hlY2sge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIC51cGRhdGUtd2Vic2l0ZS1saXN0LWJ1dHRvbiB7XG4gICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1haW4tZm9ybSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIC5hZGQtd2Vic2l0ZS1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxpbWl0LXdlYnNpdGUtbm90aWZpY2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vLXdlYnNpdGUtbm90aWZpY2F0aW9uIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAud2Vic2l0ZS1saXN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgLnRhYmxlLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgcGFkZGluZzogMi41cHggMjBweCAyLjVweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyxcbiAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTUlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgNDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBidXR0b246bm90KC5kZWxldGUtYnV0dG9uKSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmFja2luZy1zdGF0dXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItcm93LFxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDY1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEge1xuICAgICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMzBweCAxNXB4IDE1cHggMTVweDtcbiAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWFpbi1mb3JtIHtcbiAgICAgICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmZmZiNSAwJSwgIzI0N2JhMCA3NCUpO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDVweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyNXZoO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZHNJZCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMzBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE1dmg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciB1bCBsaSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWNoZWNrIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW46IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAuYWRkLXdlYnNpdGUtYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWFpbi1mb3JtIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vLXdlYnNpdGUtbm90aWZpY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwYWRkaW5nOiAyLjVweCAyMHB4IDIuNXB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtdGl0bGUgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93IHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgNDUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMykgYnV0dG9uOm5vdCguZGVsZXRlLWJ1dHRvbikge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIC5kZWxldGUtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwgLnRyYWNraW5nLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyxcbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIG1pbi13aWR0aDogNjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgbGkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciBsaSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUxIHtcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogMzN2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgdWwgbGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_services_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/validator.service */ "./src/app/shared/services/validator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _website_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./website-management.service */ "./src/app/main/website-management/website-management.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












let WebsiteManagementComponent = class WebsiteManagementComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _sessionService, _validatorsService, _websiteManagementService, _activatedRoute, _router) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._sessionService = _sessionService;
        this._validatorsService = _validatorsService;
        this._websiteManagementService = _websiteManagementService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.displayedColumns = ['order', 'website', 'tracking'];
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        this.accounts = [];
        this.websites = [];
        this.accountItemsSource = [];
        this.selectedAdsId = '';
        this.selectedAccountId = '';
        this.isProcessing = false;
    }
    ngOnInit() {
        this.initForm();
        this.user = JSON.parse(this._sessionService.user);
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._activatedRoute.params.subscribe((params) => {
            if (params.accountId === undefined) {
                this.selectedAccountId = this._sessionService.activeAccountId;
                this.selectedAdsId = this._sessionService.activeAdsAccountId;
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }
            else {
                this.selectedAccountId = params.accountId;
                this.getAdwordsAccountDetail();
            }
        });
        this.subscriptions.push(sub);
    }
    initForm() {
        this.form = this.fb.group({
            adsId: [''],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this._validatorsService.checkDomain]]
        });
    }
    onSubmitForm() {
        this.onSubmit();
    }
    getAdwordsAccountDetail() {
        const detailSub = this._websiteManagementService.getAdwordsAccountDetail(this.selectedAccountId)
            .subscribe(res => {
            this.selectedAdsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
            this.limitWebsite = res.data.adsAccount.setting.limitWebsite;
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
            this.getAccounts();
        }, (error) => {
            this._router.navigateByUrl('/danh-sach-tai-khoan');
        });
        this.subscriptions.push(detailSub);
    }
    getWebsites(action) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
            .subscribe(res => {
            this.websites = res.data.websites;
            this.isAddingWebsiteAllowed = (this.websites || []).length < this.limitWebsite;
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
            if (this.websites.length > 0
                && this._sessionService.getValueOfDoneConfigStep() < app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.ADD_WEBSITE.value) {
                this._sessionService.completeConfigStep(app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConfigStep.ADD_WEBSITE.value);
            }
            if (action) {
                if (action.status === 'SUCCESS') {
                    this._dialogService._openSuccessDialog(action.data);
                }
                else if (action.status === 'ERROR') {
                    this._dialogService._openErrorDialog(action.data);
                }
            }
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this.websites = [];
            this.isProcessing = false;
            if (error.status === 404) {
                const data = [];
                data['select-campaign'] = {
                    accountId: this.selectedAccountId,
                    adsId: this.selectedAdsId
                };
                this._dialogService._openInfoDialog('Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch', 'tại đây', '/gan-tracking/chien-dich');
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getAccounts() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._sessionService.getListAccounts()
            .subscribe(listAccounts => {
            if (listAccounts) {
                this.accounts = listAccounts;
                if (this.accounts.length > 0) {
                    for (const item of this.accounts) {
                        if (this.adsAccountIdPipe.transform(item.adsId) !== this.selectedAdsId) {
                            this.accountItemsSource.push({
                                text: this.adsAccountIdPipe.transform(item.adsId),
                                value: item.accountId
                            });
                        }
                        else {
                            this.accountItemsSource.unshift({
                                text: this.selectedAdsId,
                                value: item.accountId
                            });
                            this.selectedAccountId = item.accountId;
                            this.getWebsites();
                        }
                        if (this.accountItemsSource.length === 1) {
                            this.form.controls['adsId'].setValue(this.accountItemsSource[0]);
                        }
                    }
                }
            }
        });
        this.subscriptions.push(sub);
    }
    generatePostObject() {
        const body = Object.assign({}, this.form.value);
        const params = {
            domain: body.domain,
            accountId: this.selectedAccountId
        };
        return params;
    }
    post() {
        this.isProcessing = true;
        const params = this.generatePostObject();
        this._fuseProgressiveBarService.show();
        const sub = this._websiteManagementService.addWebsite(params)
            .subscribe((res) => {
            this.getWebsites({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(() => {
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            this._dialogService._openErrorDialog(error.error);
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    openRemoveWebsiteConfirmDialog(websiteId) {
        const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe((isAccepted) => {
            if (isAccepted) {
                this.isProcessing = true;
                this._fuseProgressiveBarService.show();
                this.removeWebsite(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    }
    removeWebsite(websiteId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._websiteManagementService.removeWebsite(websiteId)
            .subscribe((res) => {
            this.getWebsites({
                status: 'SUCCESS',
                data: res
            });
            setTimeout(() => {
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            if (error.error.messages) {
                this._dialogService._openErrorDialog(error.error);
            }
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    onSelectAdsId(event) {
        this.selectedAdsId = event.value.text;
        this.selectedAccountId = event.value.value;
        this.getWebsites();
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _website_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website-management-routing.module */ "./src/app/main/website-management/website-management-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _website_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./website-management.component */ "./src/app/main/website-management/website-management.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");


















let WebsiteManagementModule = class WebsiteManagementModule {
};
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



/***/ })

}]);
//# sourceMappingURL=main-website-management-website-management-module-es2015.js.map