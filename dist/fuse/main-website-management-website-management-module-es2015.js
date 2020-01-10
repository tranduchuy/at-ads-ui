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

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 45px 30px 0 45px;\n  height: 25vh;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n.container .inner ul li {\n  color: rgba(0, 0, 0, 0.7);\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .update-website-list-button mat-icon {\n  font-size: 18px;\n}\n.container .inner .main-form {\n  padding-bottom: 20px;\n}\n.container .inner .main-form .add-website-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  font-size: 12px;\n  min-width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .main-form .add-website-button mat-icon {\n  font-size: 16px;\n  margin-top: 5px;\n}\n.container .inner .main-form .limit-website-notification {\n  width: 100%;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  background: lightyellow;\n}\n.container .inner .no-website-notification {\n  color: gray;\n  padding: 10px;\n}\n.container .inner .website-list {\n  margin-top: 30px;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n  background: white;\n}\n.container .inner .website-list .table-title {\n  color: rgba(0, 0, 0, 0.7);\n  padding: 2.5px 20px 2.5px 20px;\n  font-size: 14px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n.container .inner .website-list .table-title button {\n  font-weight: normal !important;\n}\n.container .inner .website-list .table-wrapper {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: white;\n  border: 0.5px solid #eee;\n  max-height: 500px;\n  overflow: auto;\n  box-shadow: none !important;\n}\n.container .inner .website-list .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .website-list .table-wrapper mat-row,\n.container .inner .website-list .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .website-list .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .website-list .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 45%;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) .delete-button {\n  margin-left: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .website-list .table-wrapper mat-cell mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell .tracking-status {\n  font-size: 12px;\n  border: 0;\n  padding-left: 0;\n  max-width: 100px;\n}\n.container .inner .website-list .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .website-list .table-wrapper mat-header-row,\n.container .inner .website-list .table-wrapper mat-row {\n  min-width: 650px;\n  width: 100%;\n}\n.container .inner li {\n  text-align: justify;\n  font-size: 12px;\n}\n.container .inner li mat-icon {\n  font-size: 14px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n  }\n  .container .inner {\n    padding: 30px 15px 15px 15px;\n    margin: 15px;\n  }\n  .container .inner ul {\n    padding-left: 5px;\n    font-size: 12px;\n  }\n  .container .inner ul li {\n    padding-bottom: 10px;\n  }\n  .container .inner .main-form .add-website-button {\n    height: 35px;\n    margin-top: -5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQVVFLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDVE47QURhRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBUUEsd0NBQUE7QUNsQko7QURhTTtFQUNFLHlCQUFBO0FDWFI7QURnQkk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNkTjtFRGdCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkTjtBQUNGO0FEUUk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNkTjtFRGdCSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNkTjtBQUNGO0FEaUJJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNmTjtBRGtCSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2hCTjtBRGtCTTtFQUNFLGVBQUE7QUNoQlI7QURvQkk7RUFDRSxvQkFBQTtBQ2xCTjtBRG1CTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDakJSO0FEbUJRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNqQlY7QURxQk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUNuQlI7QUR1Qkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ3JCTjtBRHdCSTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDdEJOO0FEd0JNO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDdEJSO0FEd0JRO0VBQ0UsOEJBQUE7QUN0QlY7QUQwQk07RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDeEJSO0FEMEJRO0VBQ0UsZ0JBQUE7QUN4QlY7QUQyQlE7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0FDekJWO0FENEJRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUVBLDRDQUFBO0FDM0JWO0FENEJVO0VBQ0U7SUFDRSxVQUFBO0VDMUJaO0VENEJVO0lBQ0UsVUFBQTtFQzFCWjtBQUNGO0FEb0JVO0VBQ0U7SUFDRSxVQUFBO0VDMUJaO0VENEJVO0lBQ0UsVUFBQTtFQzFCWjtBQUNGO0FENkJVO0VBQ0UseUNBQUE7QUMzQlo7QUQrQlE7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDN0JWO0FEZ0NROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQzlCVjtBRGtDVTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDaENaO0FEbUNVO0VBQ0UsaUJBQUE7QUNqQ1o7QURxQ1E7RUFDRSxlQUFBO0FDbkNWO0FEcUNVO0VBQ0UsZUFBQTtBQ25DWjtBRHNDVTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDcENaO0FEd0NRO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDdENWO0FEeUNROztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ3ZDVjtBRDRDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQzFDTjtBRDRDTTtFQUNFLGVBQUE7QUMxQ1I7QURnREE7RUFFSTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQzlDSjtFRGlERTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQy9DSjtFRGlESTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQy9DTjtFRGlETTtJQUNFLG9CQUFBO0VDL0NSO0VEb0RNO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VDbERSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcblxuICAudGl0bGUxIHtcbiAgICAvLyBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIHBhZGRpbmc6IDQwcHggMzBweCAwcHggMzBweDtcbiAgICAvLyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy9wYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuXG4gICAgLmFkc0lkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTV2aDtcblxuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0LWNoZWNrIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluLWZvcm0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uby13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAgIC50YWJsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIHBhZGRpbmc6IDIuNXB4IDIwcHggMi41cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3csXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDYwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgIEBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDE1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgZmxleDogMCAwIDQ1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgYnV0dG9uOm5vdCguZGVsZXRlLWJ1dHRvbikge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHJhY2tpbmctc3RhdHVzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLXJvdyxcbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA2NTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAudGl0bGUxIHtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgICBoZWlnaHQ6IDMzdmg7XG4gICAgfVxuXG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgICBtYXJnaW46IDE1cHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1haW4tZm9ybSB7XG4gICAgICAgIC5hZGQtd2Vic2l0ZS1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmYjU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmZmYjUgMCUsICMyNDdiYTAgNzQlKTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDQ1cHggMzBweCAwIDQ1cHg7XG4gIGhlaWdodDogMjV2aDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRzSWQge1xuICBjb2xvcjogeWVsbG93O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgdWwgbGkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAubGlzdC1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC51cGRhdGUtd2Vic2l0ZS1saXN0LWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAubGltaXQtd2Vic2l0ZS1ub3RpZmljYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcGFkZGluZzogMi41cHggMjBweCAyLjVweCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXRpdGxlIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG59XG5Aa2V5ZnJhbWVzIHJvd0FwcGVhcmFuY2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDE1JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogMCAwIDQ1JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIGJ1dHRvbjpub3QoLmRlbGV0ZS1idXR0b24pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSAuZGVsZXRlLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIC50cmFja2luZy1zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3csXG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICBtaW4td2lkdGg6IDY1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIGxpIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgbGkgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwdmggMjBweDtcbiAgICBoZWlnaHQ6IDMzdmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgdWwgbGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5tYWluLWZvcm0gLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbn0iXX0= */"

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