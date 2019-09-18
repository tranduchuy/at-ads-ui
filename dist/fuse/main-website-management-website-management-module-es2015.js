(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-management-website-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/website-management/website-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    WEBSITE ĐANG QUẢNG CÁO TRONG TÀI KHOẢN <b><span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n        style=\"color:yellow\">{{selectedAdsId}}</span></b>\n  </div>\n\n  <div class=\"inner\">\n    <p style=\"margin-top: 30px\">\n      <b>Bạn cần thêm 1 website để sử dụng các tính năng của hệ thống</b>\n    </p>\n    <ul style=\"list-style: none\">\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Theo dõi khách đang truy cập website thông qua <span\n          style=\"color: red; font-weight: bold\">Khách Đang Truy Cập</span>\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Tích hợp tất cả các công cụ thu thập thông tin khách hàng,\n        giúp bạn\n        có nhiều thông tin khách hàng hơn\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Đồng bộ thông tin khách hàng vào tập khách hàng \"<span\n          style=\"color: red; font-weight: bold\">THEO DÕI</span>\", dễ dàng triển khai\n        quảng cáo \"<span style=\"color: red; font-weight: bold\">BÁM ĐUÔI</span>\"\n      </li>\n    </ul>\n\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 30px\">\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <p><strong>Tài Khoản Google Ads Đang Quảng Cáo Cho Website Này</strong></p>\n      <app-select-text (valueChanged)=\"onSelectAdsId($event)\" [itemsSource]=\"accountItemsSource\" [displayPath]=\"'text'\"\n        [valuePath]=\"'value'\" [title]=\"'Chọn tài khoản Google Ads'\" [formControlName]=\"'adsId'\"\n        [isDisabled]=\"isProcessing\"></app-select-text>\n\n      <p>\n        <strong>Vui lòng nhập tên miền website của bạn vào ô bên dưới</strong>\n      </p>\n      <div fxLayout=\"row\" fxLayout.xs=\"column\">\n        <app-input-text [formControlName]=\"'domain'\" [errors]=\"getMessageErrors('domain')\"\n          [title]=\"'Nhập tên miền của bạn'\"></app-input-text>\n        <button type=\"submit\" mat-raised-button color=\"accent\" class=\"add-website-button\" [disabled]=\"isProcessing\">\n          THÊM WEBSITE\n        </button>\n      </div>\n    </form>\n\n    <br><span><b><span style=\"color: red\">*</span>Lưu ý:</b> Tên miền phải kèm theo <span\n        style=\"color: #039be5\">http://</span> hoặc <span style=\"color: #039be5\">https://</span></span>\n\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 20px\">\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\n      <p><strong>CÁC WEBSITE TRONG TÀI KHOẢN <span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n            style=\"color: #039be5\">{{selectedAdsId}}</span></strong></p>\n      <button mat-button class=\"update-website-list-button\" color=\"accent\" (click)=\"getWebsites()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 18px\">sync</mat-icon>Cập nhật\n      </button>\n    </div>\n\n    <div class=\"table-wrapper\">\n      <mat-table [dataSource]=\"websites\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"order\">\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n          <mat-cell *matCellDef=\"let i = index\"> {{i + 1}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website cần gắn tracking </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <a href=\"{{element.domain}}\" target=\"_blank\">{{element.domain}}</a>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"tracking\">\n          <mat-header-cell *matHeaderCellDef> Gắn tracking </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button *ngIf=\"element.isTracking === true\" mat-stroked-button color=\"accent\">\n              <mat-icon style=\"font-size: 20px\">check</mat-icon> Hoàn\n              thành\n            </button>\n            <a *ngIf=\"element.isTracking === false\" mat-stroked-button matTooltip=\"Nhấn để tiến hành gắn tracking\"\n              style=\"color: crimson; border: 0; padding-left: 0\"\n              [routerLink]=\"['/gan-tracking/website', selectedAccountId]\">\n              <mat-icon style=\"font-size: 20px\">close</mat-icon> Chưa có\n            </a>\n            <button (click)=\"openRemoveWebsiteConfirmDialog(element.code)\" class=\"delete-button\" mat-icon-button color=\"accent\" matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n              <mat-icon style=\"color: silver; margin-top: -5px\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 142px 30px 35px 30px;\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .add-website-button {\n  height: 60px;\n  margin: 2px;\n  border-radius: 0;\n  padding-left: 5px;\n}\n.container .inner .table-wrapper {\n  background-color: white;\n  box-shadow: 2px 2px 5px silver;\n  height: 500px;\n  margin-top: 10px;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .table-wrapper mat-cell:nth-child(2) {\n  flex: 0 0 75%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner li {\n  text-align: justify;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner ul {\n    padding-left: 0px;\n    font-size: 12px;\n  }\n  .container .inner .add-website-button {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvV29yay9QZXJzb25hbC9hbnRpLXNwYW0tY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7RUFFQSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSw0QkFBQTtBQ0RKO0FER0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSE47QURNSTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSk47QURNTTtFQUNFLGdCQUFBO0FDSlI7QURPTTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNMUjtBRFFNO0VBQ0UsZ0JBQUE7QUNOUjtBRFNNO0VBQ0Usd0NBQUE7QUNQUjtBRFVNOztFQUVFLGFBQUE7QUNSUjtBRFdNOztFQUVFLGFBQUE7QUNUUjtBRGFRO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNYVjtBRGVNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDYlI7QURpQkk7RUFDRSxtQkFBQTtBQ2ZOO0FEb0JBO0VBRUk7SUFDRSxhQUFBO0VDbEJKO0VEb0JJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDbEJOO0VEcUJJO0lBQ0UsWUFBQTtFQ25CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93ZWJzaXRlLW1hbmFnZW1lbnQvd2Vic2l0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuXG4gICAgLmxpc3QtY2hlY2sge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgIC51cGRhdGUtd2Vic2l0ZS1saXN0LWJ1dHRvbiB7XG4gICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAuYWRkLXdlYnNpdGUtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc2lsdmVyO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdyxcbiAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IDAgMCAxMCU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICAgICAgICBmbGV4OiAwIDAgNzUlO1xuICAgICAgfVxuXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICAgICAgICBidXR0b246bm90KC5kZWxldGUtYnV0dG9uKSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtd2Vic2l0ZS1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWNoZWNrIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc2lsdmVyO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgNzUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIGJ1dHRvbjpub3QoLmRlbGV0ZS1idXR0b24pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciBsaSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG59Il19 */"

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
            this._dialogService._openErrorDialog(error.error);
            this.websites = [];
            this.isProcessing = false;
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