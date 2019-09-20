(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-management-website-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/website-management/website-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title1\">\r\n    WEBSITE ĐANG QUẢNG CÁO TRONG TÀI KHOẢN <b><span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\r\n        style=\"color:yellow\">{{selectedAdsId}}</span></b>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <p style=\"margin-top: 30px\">\r\n      <b>Bạn cần thêm 1 website để sử dụng các tính năng của hệ thống</b>\r\n    </p>\r\n    <ul style=\"list-style: none\">\r\n      <li>\r\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Theo dõi khách đang truy cập website thông qua <span\r\n          style=\"color: red; font-weight: bold\">Khách Đang Truy Cập</span>\r\n      </li>\r\n      <li>\r\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Tích hợp tất cả các công cụ thu thập thông tin khách hàng,\r\n        giúp bạn\r\n        có nhiều thông tin khách hàng hơn\r\n      </li>\r\n      <li>\r\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Đồng bộ thông tin khách hàng vào tập khách hàng \"<span\r\n          style=\"color: red; font-weight: bold\">THEO DÕI</span>\", dễ dàng triển khai\r\n        quảng cáo \"<span style=\"color: red; font-weight: bold\">BÁM ĐUÔI</span>\"\r\n      </li>\r\n    </ul>\r\n\r\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 30px\">\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\r\n\r\n      <p><strong>Tài Khoản Google Ads Đang Quảng Cáo Cho Website Này</strong></p>\r\n      <app-select-text (valueChanged)=\"onSelectAdsId($event)\" [itemsSource]=\"accountItemsSource\" [displayPath]=\"'text'\"\r\n        [valuePath]=\"'value'\" [title]=\"'Chọn tài khoản Google Ads'\" [formControlName]=\"'adsId'\"\r\n        [isDisabled]=\"isProcessing\"></app-select-text>\r\n\r\n      <p>\r\n        <strong>Vui lòng nhập tên miền website của bạn vào ô bên dưới</strong>\r\n      </p>\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n        <app-input-text [formControlName]=\"'domain'\" [errors]=\"getMessageErrors('domain')\"\r\n          [title]=\"'Nhập tên miền của bạn'\"></app-input-text>\r\n        <button type=\"submit\" mat-raised-button color=\"accent\" class=\"add-website-button\" [disabled]=\"isProcessing\">\r\n          THÊM WEBSITE\r\n        </button>\r\n      </div>\r\n    </form>\r\n\r\n    <br><span><b><span style=\"color: red\">*</span>Lưu ý:</b> Tên miền phải kèm theo <span\r\n        style=\"color: #039be5\">http://</span> hoặc <span style=\"color: #039be5\">https://</span></span>\r\n\r\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 20px\">\r\n\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\r\n      <p><strong>CÁC WEBSITE TRONG TÀI KHOẢN <span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\r\n            style=\"color: #039be5\">{{selectedAdsId}}</span></strong></p>\r\n      <button mat-button class=\"update-website-list-button\" color=\"accent\" (click)=\"getWebsites()\"\r\n        [disabled]=\"isProcessing\">\r\n        <mat-icon style=\"font-size: 18px\">sync</mat-icon>Cập nhật\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"table-wrapper\">\r\n      <mat-table [dataSource]=\"websites\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"order\">\r\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let i = index\"> {{i + 1}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"website\">\r\n          <mat-header-cell *matHeaderCellDef> Website cần gắn tracking </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <a href=\"{{element.domain}}\" target=\"_blank\">{{element.domain}}</a>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"tracking\">\r\n          <mat-header-cell *matHeaderCellDef> Gắn tracking </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <button *ngIf=\"element.isTracking === true\" mat-stroked-button color=\"accent\">\r\n              <mat-icon style=\"font-size: 20px\">check</mat-icon> Hoàn\r\n              thành\r\n            </button>\r\n            <a *ngIf=\"element.isTracking === false\" mat-stroked-button matTooltip=\"Nhấn để tiến hành gắn tracking\"\r\n              style=\"color: crimson; border: 0; padding-left: 0\"\r\n              [routerLink]=\"['/gan-tracking/website', selectedAccountId]\">\r\n              <mat-icon style=\"font-size: 20px\">close</mat-icon> Chưa có\r\n            </a>\r\n            <button (click)=\"openRemoveWebsiteConfirmDialog(element.code)\" class=\"delete-button\" mat-icon-button color=\"accent\" matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\r\n              <mat-icon style=\"color: silver; margin-top: -5px\">delete</mat-icon>\r\n            </button>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 142px 30px 35px 30px;\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .add-website-button {\n  height: 60px;\n  margin: 2px;\n  border-radius: 0;\n  padding-left: 5px;\n}\n.container .inner .table-wrapper {\n  background-color: white;\n  box-shadow: 2px 2px 5px silver;\n  height: 500px;\n  margin-top: 10px;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .table-wrapper mat-cell:nth-child(2) {\n  flex: 0 0 75%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner li {\n  text-align: justify;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner ul {\n    padding-left: 0px;\n    font-size: 12px;\n  }\n  .container .inner .add-website-button {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93ZWJzaXRlLW1hbmFnZW1lbnQvQzpcXFVzZXJzXFxNaW5oIFR1ZVxcRGVza3RvcFxcY2xpY2tcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx3ZWJzaXRlLW1hbmFnZW1lbnRcXHdlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi93ZWJzaXRlLW1hbmFnZW1lbnQvd2Vic2l0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtFQUVBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLDRCQUFBO0FDREo7QURHSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDRE47QURJSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNITjtBRE1JO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKTjtBRE1NO0VBQ0UsZ0JBQUE7QUNKUjtBRE9NOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ0xSO0FEUU07RUFDRSxnQkFBQTtBQ05SO0FEU007RUFDRSx3Q0FBQTtBQ1BSO0FEVU07O0VBRUUsYUFBQTtBQ1JSO0FEV007O0VBRUUsYUFBQTtBQ1RSO0FEYVE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1hWO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGlCSTtFQUNFLG1CQUFBO0FDZk47QURvQkE7RUFFSTtJQUNFLGFBQUE7RUNsQko7RURvQkk7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNsQk47RURxQkk7SUFDRSxZQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnRpdGxlMSB7XHJcbiAgICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xyXG5cclxuICAgIC5saXN0LWNoZWNrIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnVwZGF0ZS13ZWJzaXRlLWxpc3QtYnV0dG9uIHtcclxuICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc2lsdmVyO1xyXG4gICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgIG1hdC10YWJsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXJvdyxcclxuICAgICAgbWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1yb3cge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1yb3c6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXHJcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZmxleDogMCAwIDEwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcclxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmbGV4OiAwIDAgNzUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGJ1dHRvbjpub3QoLmRlbGV0ZS1idXR0b24pIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAuaW5uZXIge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpc3QtY2hlY2sge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5jb250YWluZXIgLmlubmVyIC51cGRhdGUtd2Vic2l0ZS1saXN0LWJ1dHRvbiB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBzaWx2ZXI7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCA3NSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMykgYnV0dG9uOm5vdCguZGVsZXRlLWJ1dHRvbikge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIGxpIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn0iXX0= */"

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
        this.isProcessing = false;
        this.accounts = [];
        this.websites = [];
        this.accountItemsSource = [];
        this.selectedAdsId = '';
        this.selectedAccountId = '';
        this.isProcessing = false;
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        this.initForm();
        const sub = this._activatedRoute.params.subscribe((params) => {
            if (params.accountId === undefined) {
                this.selectedAccountId = this._sessionService.activeAccountId;
                this.selectedAdsId = this._sessionService.activeAdsAccountId;
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }
            else {
                this.selectedAccountId = params.accountId;
                const detailSub = this._websiteManagementService.getAdwordsAccountDetail(this.selectedAccountId)
                    .subscribe(res => {
                    this.selectedAdsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
                    setTimeout(() => {
                        this.getAccounts();
                        this._fuseProgressiveBarService.hide();
                        this.isProcessing = false;
                    }, 0);
                }, (error) => {
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                });
                this.subscriptions.push(detailSub);
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
    getWebsites() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
            .subscribe(res => {
            this.websites = res.data.websites;
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
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
                this._dialogService._openInfoDialog('Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', '', '', 'select-campaign', data);
            }
            else
                this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    getAccounts() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._websiteManagementService.getAccounts()
            .subscribe(res => {
            this.accounts = res.data.accounts;
            if (this.accounts.length > 0) {
                for (const item of this.accounts) {
                    if (this.adsAccountIdPipe.transform(item.adsId) !== this.selectedAdsId) {
                        this.accountItemsSource.push({
                            text: this.adsAccountIdPipe.transform(item.adsId),
                            value: item.id
                        });
                    }
                    else {
                        this.accountItemsSource.unshift({
                            text: this.selectedAdsId,
                            value: item.id
                        });
                        this.selectedAccountId = item.id;
                        this.getWebsites();
                    }
                    if (this.accountItemsSource.length === 1) {
                        this.form.controls['adsId'].setValue(this.accountItemsSource[0]);
                    }
                }
            }
            else {
                this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản Google Ads');
                this._router.navigateByUrl('/them-tai-khoan-moi');
            }
            this.isProcessing = false;
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
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
            this.getWebsites();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
            }, 0);
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
                const sub = this._websiteManagementService.removeWebsite(websiteId)
                    .subscribe((res) => {
                    this.getWebsites();
                    setTimeout(() => {
                        this._fuseProgressiveBarService.hide();
                        this._dialogService._openSuccessDialog(res);
                        this.isProcessing = false;
                    }, 0);
                }, (error) => {
                    if (error.error.messages) {
                        this._dialogService._openErrorDialog(error.error);
                    }
                    this._fuseProgressiveBarService.hide();
                    this.isProcessing = false;
                });
                this.subscriptions.push(sub);
            }
        });
        this.subscriptions.push(confirmDialogSub);
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



/***/ }),

/***/ "./src/app/main/website-management/website-management.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/website-management/website-management.service.ts ***!
  \***********************************************************************/
/*! exports provided: WebsiteManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteManagementService", function() { return WebsiteManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let WebsiteManagementService = class WebsiteManagementService {
    constructor(_http) {
        this._http = _http;
    }
    getAccounts() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    }
    removeWebsite(websiteId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    }
    getWebsites(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    }
    addWebsite(params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.addWebsite, params);
    }
    getWebsiteTrackingInfo(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsiteTrackingInfo.replace('{account_id}', accountId);
        return this._http.get(url);
    }
    getAdwordsAccountDetail(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    }
};
WebsiteManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], WebsiteManagementService);



/***/ })

}]);
//# sourceMappingURL=main-website-management-website-management-module-es2015.js.map