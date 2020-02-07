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

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .title1 {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 45px 30px 0 45px;\n  height: 25vh;\n}\n.container .title1 .adsId {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  padding: 30px;\n  margin: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background: white;\n  border-radius: 7px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n.container .inner ul li {\n  color: rgba(0, 0, 0, 0.7);\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .update-website-list-button mat-icon {\n  font-size: 18px;\n}\n.container .inner .main-form {\n  padding-bottom: 20px;\n}\n.container .inner .main-form .add-website-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  font-size: 12px;\n  min-width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .inner .main-form .add-website-button mat-icon {\n  font-size: 16px;\n  margin-top: 5px;\n}\n.container .inner .main-form .limit-website-notification {\n  width: 100%;\n  padding: 20px;\n  border-left: 4px solid darkorange;\n  background: lightyellow;\n}\n.container .inner .no-website-notification {\n  color: gray;\n  padding: 10px;\n}\n.container .inner .website-list {\n  margin-top: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 7px;\n  background: white;\n}\n.container .inner .website-list .table-title {\n  color: rgba(0, 0, 0, 0.7);\n  padding: 2.5px 20px 2.5px 20px;\n  font-size: 14px;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n.container .inner .website-list .table-title button {\n  font-weight: normal !important;\n}\n.container .inner .website-list .table-wrapper {\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  background-color: white;\n  border: 0.5px solid #eee;\n  max-height: 500px;\n  overflow: auto;\n  box-shadow: none !important;\n}\n.container .inner .website-list .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .website-list .table-wrapper mat-row,\n.container .inner .website-list .table-wrapper mat-header-row {\n  min-width: 600px;\n  width: 100%;\n}\n.container .inner .website-list .table-wrapper mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .website-list .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.container .inner .website-list .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .website-list .table-wrapper mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 45%;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .website-list .table-wrapper mat-cell:nth-child(3) .delete-button {\n  margin-left: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell {\n  font-size: 12px;\n}\n.container .inner .website-list .table-wrapper mat-cell mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list .table-wrapper mat-cell .tracking-status {\n  font-size: 12px;\n  border: 0;\n  padding-left: 0;\n  max-width: 100px;\n}\n.container .inner .website-list .table-wrapper mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .website-list .table-wrapper mat-header-row,\n.container .inner .website-list .table-wrapper mat-row {\n  min-width: 650px;\n  width: 100%;\n}\n.container .inner li {\n  text-align: justify;\n  font-size: 12px;\n}\n.container .inner li mat-icon {\n  font-size: 14px;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    padding: 45px 20px 20vh 20px;\n    height: 33vh;\n    text-align: center;\n  }\n  .container .inner {\n    padding: 30px 15px 15px 15px;\n    margin: 15px;\n  }\n  .container .inner ul {\n    padding-left: 5px;\n    font-size: 12px;\n  }\n  .container .inner ul li {\n    padding-bottom: 10px;\n  }\n  .container .inner .main-form .add-website-button {\n    height: 35px;\n    margin-top: -5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQVVFLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDVE47QURhRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBUUEsd0NBQUE7RUFDQSxnQ0FBQTtBQ2xCSjtBRFlNO0VBQ0UseUJBQUE7QUNWUjtBRGdCSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ROO0VEZ0JJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ROO0FBQ0Y7QURRSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ2ROO0VEZ0JJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ROO0FBQ0Y7QURpQkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDaEJOO0FEa0JNO0VBQ0UsZUFBQTtBQ2hCUjtBRG9CSTtFQUNFLG9CQUFBO0FDbEJOO0FEbUJNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNqQlI7QURtQlE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2pCVjtBRHFCTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQ25CUjtBRHVCSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDckJOO0FEd0JJO0VBQ0UsZ0JBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN0Qk47QUR3Qk07RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUN0QlI7QUR3QlE7RUFDRSw4QkFBQTtBQ3RCVjtBRDBCTTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUN4QlI7QUQwQlE7RUFDRSxnQkFBQTtBQ3hCVjtBRDJCUTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUN6QlY7QUQ0QlE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsNENBQUE7RUFDQSxvQ0FBQTtBQzNCVjtBRDRCVTtFQUNFO0lBQ0UsVUFBQTtFQzFCWjtFRDRCVTtJQUNFLFVBQUE7RUMxQlo7QUFDRjtBRG9CVTtFQUNFO0lBQ0UsVUFBQTtFQzFCWjtFRDRCVTtJQUNFLFVBQUE7RUMxQlo7QUFDRjtBRDZCVTtFQUNFLHlDQUFBO0FDM0JaO0FEK0JROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQzdCVjtBRGdDUTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUM5QlY7QURrQ1U7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ2hDWjtBRG1DVTtFQUNFLGlCQUFBO0FDakNaO0FEcUNRO0VBQ0UsZUFBQTtBQ25DVjtBRHFDVTtFQUNFLGVBQUE7QUNuQ1o7QURzQ1U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BDWjtBRHdDUTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ3RDVjtBRHlDUTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUN2Q1Y7QUQ0Q0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUMxQ047QUQ0Q007RUFDRSxlQUFBO0FDMUNSO0FEZ0RBO0VBRUk7SUFDRSw0QkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQzlDSjtFRGlERTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQy9DSjtFRGlESTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQy9DTjtFRGlETTtJQUNFLG9CQUFBO0VDL0NSO0VEb0RNO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0VDbERSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcblxuICAudGl0bGUxIHtcbiAgICAvLyBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgLy8gZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIHBhZGRpbmc6IDQwcHggMzBweCAwcHggMzBweDtcbiAgICAvLyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy9wYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuXG4gICAgLmFkc0lkIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTV2aDtcblxuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICAgIEBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0LWNoZWNrIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluLWZvcm0ge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uby13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAgIC50YWJsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIHBhZGRpbmc6IDIuNXB4IDIwcHggMi41cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3csXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDYwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvd0FwcGVhcmFuY2Uge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIGZsZXg6IDAgMCAxNSU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICAgICAgICAgIGZsZXg6IDAgMCA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGJ1dHRvbjpub3QoLmRlbGV0ZS1idXR0b24pIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRyYWNraW5nLXN0YXR1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1yb3csXG4gICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogNjUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlMSB7XG4gICAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjB2aCAyMHB4O1xuICAgICAgaGVpZ2h0OiAzM3ZoO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAzMHB4IDE1cHggMTVweCAxNXB4O1xuICAgICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWZvcm0ge1xuICAgICAgICAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0NXB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI1dmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFkc0lkIHtcbiAgY29sb3I6IHllbGxvdztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTV2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciB1bCBsaSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWNoZWNrIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW46IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAuYWRkLXdlYnNpdGUtYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWFpbi1mb3JtIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vLXdlYnNpdGUtbm90aWZpY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwYWRkaW5nOiAyLjVweCAyMHB4IDIuNXB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtdGl0bGUgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93IHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxNSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCA0NSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSBidXR0b246bm90KC5kZWxldGUtYnV0dG9uKSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMykgLmRlbGV0ZS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1jZWxsIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtY2VsbCAudHJhY2tpbmctc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3QgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgbWluLXdpZHRoOiA2NTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciBsaSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIGxpIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyMHZoIDIwcHg7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMzBweCAxNXB4IDE1cHggMTVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgdWwge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB1bCBsaSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLm1haW4tZm9ybSAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgfVxufSJdfQ== */"

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