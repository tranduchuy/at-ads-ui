(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-website-management-website-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/website-management/website-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/website-management/website-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\">\n    WEBSITE ĐANG QUẢNG CÁO TRONG TÀI KHOẢN <b><span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n        style=\"color:yellow\">{{selectedAdsId}}</span></b>\n  </div>\n\n  <div class=\"inner\">\n    <p style=\"margin-top: 30px\">\n      <b>Bạn cần thêm 1 website để sử dụng các tính năng của hệ thống</b>\n    </p>\n    <ul style=\"list-style: none\">\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Theo dõi khách đang truy cập website thông qua <span\n          style=\"color: red; font-weight: bold\">khách đang truy cập</span>.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Tích hợp tất cả các công cụ thu thập thông tin khách hàng,\n        giúp bạn\n        có nhiều thông tin khách hàng hơn.\n      </li>\n      <li>\n        <mat-icon class=\"list-check\">check_circle</mat-icon> Đồng bộ thông tin khách hàng vào tập khách hàng <span\n          style=\"color: red; font-weight: bold\">theo dõi</span>, dễ dàng triển khai\n        quảng cáo <span style=\"color: red; font-weight: bold\">bám đuôi</span>.\n      </li>\n    </ul>\n\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 30px\">\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitForm()\">\n\n      <p *ngIf=\"user.licence.type === 'CUSTOM'\"><strong>Tài Khoản Google Ads đang quảng cáo cho website này</strong></p>\n      <app-select-text (valueChanged)=\"onSelectAdsId($event)\" [itemsSource]=\"accountItemsSource\" [displayPath]=\"'text'\"\n        [valuePath]=\"'value'\" [title]=\"'Chọn tài khoản Google Ads'\" [formControlName]=\"'adsId'\"\n        [isDisabled]=\"isProcessing\" *ngIf=\"user.licence.type === 'CUSTOM'\"></app-select-text>\n\n      <div *ngIf=\"isAddingWebsiteAllowed === true\">\n        <p>\n          <strong>Vui lòng nhập tên miền website của bạn vào ô bên dưới</strong>\n        </p>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <app-input-text [formControlName]=\"'domain'\" [errors]=\"getMessageErrors('domain')\"\n            [title]=\"'Nhập tên miền của bạn'\" [isDisabled]=\"isProcessing === true\">\n          </app-input-text>\n          <button type=\"submit\" mat-raised-button color=\"accent\" class=\"add-website-button\"\n            [disabled]=\"isProcessing === true\">\n            THÊM WEBSITE\n          </button>\n        </div>\n        <br><span><b><span style=\"color: red\">*</span>Lưu ý:</b> Tên miền phải kèm theo <span\n            style=\"color: #039be5\">http://</span> hoặc <span style=\"color: #039be5\">https://</span></span>\n      </div>\n      <p *ngIf=\"isAddingWebsiteAllowed === false\" class=\"limit-website-notification\">\n        <span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản Google Ads này đã đạt tối đa. Vui\n        lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a>\n      </p>\n    </form>\n\n    <hr style=\"border: 0.5px solid #DCDCDC; margin-top: 30px; margin-bottom: 20px\">\n\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutAlign=\"start center\">\n      <p><strong>CÁC WEBSITE TRONG TÀI KHOẢN <span [(ngModel)]=\"selectedAdsId\" ngDefaultControl\n            style=\"color: #039be5\">{{selectedAdsId}}</span></strong></p>\n      <button mat-button class=\"update-website-list-button\" color=\"accent\" (click)=\"getWebsites()\"\n        [disabled]=\"isProcessing\">\n        <mat-icon style=\"font-size: 18px\">sync</mat-icon>Cập nhật\n      </button>\n    </div>\n\n    <div class=\"table-wrapper\">\n      <mat-table [dataSource]=\"websites\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"order\">\n          <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n          <mat-cell *matCellDef=\"let i = index\"> {{i + 1}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website cần gắn tracking </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <a href=\"{{element.domain}}\" target=\"_blank\">{{element.domain}}</a>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"tracking\">\n          <mat-header-cell *matHeaderCellDef> Gắn tracking </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button *ngIf=\"element.isTracking === true\" mat-stroked-button color=\"accent\">\n              <mat-icon style=\"font-size: 20px\">check</mat-icon> Hoàn\n              thành\n            </button>\n            <a *ngIf=\"element.isTracking === false\" mat-stroked-button matTooltip=\"Nhấn để tiến hành gắn tracking\"\n              style=\"color: crimson; border: 0; padding-left: 0\"\n              [routerLink]=\"['/gan-tracking/website', selectedAccountId]\">\n              <mat-icon style=\"font-size: 20px\">close</mat-icon> Chưa có\n            </a>\n            <button (click)=\"openRemoveWebsiteConfirmDialog(element.code)\" class=\"delete-button\" mat-icon-button\n              color=\"accent\" matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n              <mat-icon style=\"color: silver; margin-top: -5px\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 94px 30px 27px 30px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner {\n  padding: 15px 30px 15px 30px;\n}\n.container .inner .list-check {\n  font-size: 16px;\n  color: green;\n}\n.container .inner .update-website-list-button {\n  max-height: 40px;\n  max-width: 120px;\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-top: 2px;\n}\n.container .inner .add-website-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  padding-left: 5px;\n  font-size: 12px;\n}\n.container .inner .limit-website-notification {\n  width: 100%;\n  padding: 20px;\n  border-left: 5px solid orangered;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .table-wrapper {\n  background-color: white;\n  box-shadow: 2px 2px 5px silver;\n  max-height: 500px;\n  margin-top: 10px;\n  overflow: auto;\n}\n.container .inner .table-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .table-wrapper mat-row,\n.container .inner .table-wrapper mat-header-row {\n  min-width: 800px;\n  width: 100%;\n}\n.container .inner .table-wrapper mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-wrapper mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(1),\n.container .inner .table-wrapper mat-cell:nth-child(1) {\n  flex: 0 0 10%;\n}\n.container .inner .table-wrapper mat-header-cell:nth-child(2),\n.container .inner .table-wrapper mat-cell:nth-child(2) {\n  flex: 0 0 75%;\n}\n.container .inner .table-wrapper mat-cell:nth-child(3) button:not(.delete-button) {\n  width: 100%;\n  text-align: left !important;\n  border: 0;\n  padding-left: 0;\n}\n.container .inner .table-wrapper mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner li {\n  text-align: justify;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner ul {\n    padding-left: 0px;\n    font-size: 12px;\n  }\n  .container .inner .add-website-button {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vd2Vic2l0ZS1tYW5hZ2VtZW50L3dlYnNpdGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZFQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSw0QkFBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRk47QURLSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQ0hOO0FETUk7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNKTjtBRE1NO0VBQ0UsZ0JBQUE7QUNKUjtBRE9NOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQ0xSO0FEUU07RUFDRSxnQkFBQTtBQ05SO0FEU007RUFDRSx3Q0FBQTtBQ1BSO0FEVU07O0VBRUUsYUFBQTtBQ1JSO0FEV007O0VBRUUsYUFBQTtBQ1RSO0FEYVE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1hWO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGlCSTtFQUNFLG1CQUFBO0FDZk47QURvQkE7RUFFSTtJQUNFLGFBQUE7RUNsQko7RURvQkk7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNsQk47RURxQkk7SUFDRSxZQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3dlYnNpdGUtbWFuYWdlbWVudC93ZWJzaXRlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcblxuICAgIC5saXN0LWNoZWNrIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgICB9XG5cbiAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHNpbHZlcjtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICBtYXQtdGFibGUge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93LFxuICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LXJvdyB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgZmxleDogMCAwIDEwJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGJ1dHRvbjpub3QoLmRlbGV0ZS1idXR0b24pIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saXN0LWNoZWNrIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudXBkYXRlLXdlYnNpdGUtbGlzdC1idXR0b24ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC13ZWJzaXRlLWJ1dHRvbiB7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saW1pdC13ZWJzaXRlLW5vdGlmaWNhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIG9yYW5nZXJlZDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggc2lsdmVyO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1oZWFkZXItcm93IHtcbiAgbWluLXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtd3JhcHBlciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogMCAwIDc1JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS13cmFwcGVyIG1hdC1jZWxsOm50aC1jaGlsZCgzKSBidXR0b246bm90KC5kZWxldGUtYnV0dG9uKSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLXdyYXBwZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgbGkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5hZGQtd2Vic2l0ZS1idXR0b24ge1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufSJdfQ== */"

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
    WebsiteManagementComponent.prototype.getWebsites = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._websiteManagementService.getWebsiteTrackingInfo(this.selectedAccountId)
            .subscribe(function (res) {
            _this.websites = res.data.websites;
            _this.isAddingWebsiteAllowed = (_this.websites || []).length < _this.limitWebsite;
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
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
                _this._dialogService._openInfoDialog('Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ', '', '', 'select-campaign', data);
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
            _this.getWebsites();
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openSuccessDialog(res);
            _this.isProcessing = false;
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
                var sub = _this._websiteManagementService.removeWebsite(websiteId)
                    .subscribe(function (res) {
                    _this.getWebsites();
                    _this._fuseProgressiveBarService.hide();
                    _this._dialogService._openSuccessDialog(res);
                }, function (error) {
                    if (error.error.messages) {
                        _this._dialogService._openErrorDialog(error.error);
                    }
                    _this._fuseProgressiveBarService.hide();
                    _this.isProcessing = false;
                });
                _this.subscriptions.push(sub);
            }
        });
        this.subscriptions.push(confirmDialogSub);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WebsiteManagementService = /** @class */ (function () {
    function WebsiteManagementService(_http) {
        this._http = _http;
    }
    WebsiteManagementService.prototype.getAdwordsAccounts = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    };
    WebsiteManagementService.prototype.removeWebsite = function (websiteId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    };
    WebsiteManagementService.prototype.getWebsites = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    };
    WebsiteManagementService.prototype.addWebsite = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.addWebsite, params);
    };
    WebsiteManagementService.prototype.getWebsiteTrackingInfo = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsiteTrackingInfo.replace('{account_id}', accountId);
        return this._http.get(url);
    };
    WebsiteManagementService.prototype.getAdwordsAccountDetail = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    };
    WebsiteManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteManagementService);
    return WebsiteManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=main-website-management-website-management-module-es5.js.map