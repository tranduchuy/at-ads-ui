(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"15px\">\n    <span fxFlex=\"75\">QUẢN LÝ TÀI KHOẢN GOOGLE ADS & WEBSITE</span>\n    <a [routerLink]=\"'/them-tai-khoan-moi'\" mat-raised-button color=\"warn\" class=\"add-account-button\">\n      <mat-icon>library_add</mat-icon> Thêm tài khoản mới\n    </a>\n  </div>\n\n  <div class=\"inner\">\n    <form>\n\n      <div class=\"table-container\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"task\">\n            <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật tài khoản\"\n                (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n                [disabled]=\"isProcessing\">\n                <mat-icon>sync</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef> Ngày kết nối </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adwords\">\n            <mat-header-cell *matHeaderCellDef>\n              <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggAds-icon\">\n              Tài khoản</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div fxLayout=\"row\">\n                <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"75\">\n                  <span class=\"ads-account\" matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">\n                    <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                    <span class=\"ads-account-name\">{{element.adsName}}</span>\n                  </span>\n                </p>\n                <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"75\">\n                  <span class=\"ads-account\" matTooltip=\"Tài khoản chưa có website nào.\">\n                    <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                    <span class=\"ads-account-name\">{{element.adsName}}</span>\n                  </span>\n                </p>\n                <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"75\">\n                  <span class=\"ads-account\" matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">\n                    <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                    <span class=\"ads-account-name\">{{element.adsName}}</span>\n                  </span>\n                </p>\n                <div fxLayout=\"row\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                    (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                    <mat-icon>data_usage</mat-icon>\n                  </button>\n                  <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                    <mat-icon>code</mat-icon>\n                  </a>\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản\"\n                    (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver\">close</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"accepted\">\n            <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n                *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n                <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n              </button>\n              <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n                *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n                <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"website\">\n            <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n              <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n                <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\"\n                  fxLayoutAlign=\"center center\">\n                  <div fxFlex=\"90\">\n                    <a href=\"{{website.domain}}\" target=\"_blank\">\n                      {{website.domain}}</a>\n                  </div>\n                  <div fxFlex=\"10\">\n                    <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                      matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                      <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n              <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n                class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\"\n                *ngIf=\"element.websites.length < element.limitWebsite\">\n                <mat-icon>add</mat-icon>Thêm website\n              </button>\n              <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n                <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                  <mat-icon>add</mat-icon>Thêm website\n                </button>\n                <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                  đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n    </form>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdwordsAccountListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListRoutingModule", function() { return AdwordsAccountListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");




var AdwordsAccountListRoutingModule = /** @class */ (function () {
    function AdwordsAccountListRoutingModule() {
    }
    AdwordsAccountListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AdwordsAccountListComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdwordsAccountListRoutingModule);
    return AdwordsAccountListRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  background: white;\n}\n.container .title1 {\n  padding: 86px 20px 16px 0px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .title1 .add-account-button {\n  text-shadow: none;\n}\n.container .title2 {\n  padding: 90px 20px 24px 25px;\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 105px;\n  overflow: auto;\n  border-radius: 5px;\n  margin: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.container .inner .website-list li a {\n  padding-left: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 14px;\n  margin-top: 8px;\n  margin-right: -5px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .table-container {\n  border-bottom: 0.5px solid #eee;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-container li {\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  display: flex;\n  flex-direction: column;\n}\n.container .inner .table-container .ads-account .ads-account-id {\n  font-size: 15px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-table .ggAds-icon {\n  height: 16px;\n  width: 16px;\n  margin-right: 8px;\n  -webkit-filter: drop-shadow(0.2px 0.7px 0.7px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(0.2px 0.7px 0.7px rgba(0, 0, 0, 0.4));\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  display: flex;\n  justify-content: left;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(1),\n.container .inner .table-container mat-table mat-cell:nth-child(1) {\n  flex: 0 0 8%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(2),\n.container .inner .table-container mat-table mat-cell:nth-child(2) {\n  flex: 0 0 14%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(3),\n.container .inner .table-container mat-table mat-cell:nth-child(3) {\n  flex: 0 0 24%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(4),\n.container .inner .table-container mat-table mat-cell:nth-child(4) {\n  justify-content: center;\n  flex: 0 0 12%;\n}\n.container .inner .table-container mat-table mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(5) {\n  padding-left: 5px;\n}\n.container .inner .table-container mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-container mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-container mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-table mat-row,\n.container .inner .table-container mat-table mat-header-row {\n  min-width: 1200px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #039be5;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .container .title1,\n.container .title2 {\n    font-size: 14px !important;\n    text-align: center;\n  }\n  .container .table-container .ads-account .ads-account-id {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FER0U7RUFDRSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNESjtBREtJO0VBQ0UsZUFBQTtBQ0hOO0FETUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSk47QURPUTtFQUNFLGlCQUFBO0FDTFY7QURVSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUk47QURVTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEYUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNYTjtBRGNJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7QUNaTjtBRGVJO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDNUJOO0FEK0JJO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQy9CTjtBRG1DSTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDakNOO0FEbUNNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDakNSO0FEbUNRO0VBQ0Usa0NBQUE7QUNqQ1Y7QURxQ007RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDbkNSO0FEcUNRO0VBQ0UsZUFBQTtBQ25DVjtBRHVDTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ3JDUjtBRDJDUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0FDekNWO0FENENROztFQUVFLGFBQUE7RUFDQSxxQkFBQTtBQzFDVjtBRDZDUTs7RUFFRSxZQUFBO0FDM0NWO0FEOENROztFQUVFLGFBQUE7QUM1Q1Y7QUQrQ1E7O0VBRUUsYUFBQTtBQzdDVjtBRGdEUTs7RUFFRSx1QkFBQTtFQUNBLGFBQUE7QUM5Q1Y7QURpRFE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDL0NWO0FEa0RRO0VBQ0UsaUJBQUE7QUNoRFY7QURtRFE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNqRFY7QURvRFE7RUFDRSxnQkFBQTtBQ2xEVjtBRHFEUTtFQUNFLGVBQUE7QUNuRFY7QURzRFE7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDcERWO0FEeURJO0VBQ0UsZUFBQTtBQ3ZETjtBRDBESTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3hETjtBRDJESTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ3pETjtBRDRESTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDMUROO0FENkRJO0VBQ0UsYUFBQTtBQzNETjtBRDhESTtFQUNFLFVBQUE7QUM1RE47QUQ4RE07RUFDRSxXQUFBO0FDNURSO0FEZ0VJO0VBQ0UsY0FBQTtBQzlETjtBRGlFSTtFQUNFLFdBQUE7QUMvRE47QURrRUk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ2hFTjtBRHFFQTtFQUVJOztJQUVFLDBCQUFBO0lBQ0Esa0JBQUE7RUNuRUo7RUR3RU07SUFDRSwwQkFBQTtFQ3RFUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9hZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgLnRpdGxlMSB7XG4gICAgcGFkZGluZzogODZweCAyMHB4IDE2cHggMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG5cbiAgICAuYWRkLWFjY291bnQtYnV0dG9uIHtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50aXRsZTIge1xuICAgIHBhZGRpbmc6IDkwcHggMjBweCAyNHB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9hZHdvcmQtYmczLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC53ZWJzaXRlLWxpc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIGEge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLWRvbWFpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnZpcC1pY29uIHtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gICAgfVxuXG4gICAgLmZyZWUtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC52aXAtbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICNmZGI5MzEgOCUsXG4gICAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgdHJhbnNwYXJlbnQgODAlXG4gICAgICAgICksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcbiAgICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgI2QxYjQ2NCAyNSUsXG4gICAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgfVxuXG4gICAgLnZpcC1leHBpcmF0aW9uIHtcbiAgICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAvL3BhZGRpbmc6IDNweCA0cHggM3B4IDRweDtcbiAgICB9XG5cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICBsaSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5hZHMtYWNjb3VudC1pZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAvL2ZpbHRlcjogZHJvcC1zaGFkb3coMC41cHggMXB4IDFweCBzaWx2ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdnQWRzLWljb24ge1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuMnB4IDAuN3B4IDAuN3B4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDglO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMjQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMTIlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyxcbiAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudmlwLXNlcnZpY2Uge1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZnJlZS1zZXJ2aWNlIHtcbiAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudHJhY2tpbmcge1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmctYnV0dG9uIHtcbiAgICAgIGNvbG9yOiByZWQ7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm8tdHJhY2tpbmcge1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgfVxuXG4gICAgLmNsZWFyIHtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZTEsXG4gICAgLnRpdGxlMiB7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIC5hZHMtYWNjb3VudCB7XG4gICAgICAgIC5hZHMtYWNjb3VudC1pZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiA4NnB4IDIwcHggMTZweCAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRkLWFjY291bnQtYnV0dG9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC50aXRsZTIge1xuICBwYWRkaW5nOiA5MHB4IDIwcHggMjRweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5pbm5lciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2F1dGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWljb24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcmVlLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtZXhwaXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGkge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIC5hZHMtYWNjb3VudCAuYWRzLWFjY291bnQtaWQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgLmdnQWRzLWljb24ge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjJweCAwLjdweCAwLjdweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDglO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCAxNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDI0JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoNCkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mby1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLXNlcnZpY2Uge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1zZXJ2aWNlIHtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEsXG4uY29udGFpbmVyIC50aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IC5hZHMtYWNjb3VudC1pZCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdwordsAccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListComponent", function() { return AdwordsAccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var AdwordsAccountListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdwordsAccountListComponent, _super);
    function AdwordsAccountListComponent(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, _router, _sessionService, _fuseNavigationService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._adwordsAccountListService = _adwordsAccountListService;
        _this._router = _router;
        _this._sessionService = _sessionService;
        _this._fuseNavigationService = _fuseNavigationService;
        _this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        _this.accounts = [];
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        _this.accountConnectTypes = [];
        _this.isProcessing = false;
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        return _this;
    }
    AdwordsAccountListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
        this.getUser();
    };
    AdwordsAccountListComponent.prototype.getUser = function () {
        var _this = this;
        var sub = this._sessionService.getUser()
            .subscribe(function (user) {
            if (user) {
                _this.user = JSON.parse(_this._sessionService.user);
                _this._sessionService.notifyListAccountsChanged();
                _this.getAccounts();
            }
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.openRemoveAccountConfirmDialog = function (accountId) {
        var _this = this;
        var openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.removeAccount(accountId);
            }
        });
        this.subscriptions.push(openConfirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.removeAccount = function (accountId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe(function (res) {
            // this._sessionService.notifyListAccountsChanged({
            //   name: 'remove',
            //   message: 'Ngắt kết nối tài khoản Google Ads thành công'
            // });
            // this._sessionService.notifyListAccountsChanged('remove');
            // _.remove(this.accounts, account => account.accountId === accountId);
            // this._sessionService.completeRemovingAccount(accountId);
            // this.dataSource = new MatTableDataSource(this.accounts);
            _this._sessionService.notifyListAccountsChanged();
            setTimeout(function () {
                _this._dialogService._openSuccessDialog({ messages: ['Ngắt kết nối tài khoản Google Ads thành công'] });
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(removeAccountSub);
    };
    AdwordsAccountListComponent.prototype.openRemoveWebsiteConfirmDialog = function (websiteId) {
        var _this = this;
        var confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.removeWebiste(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.removeWebiste = function (websiteId) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountListService.removeWebsite(websiteId)
            .subscribe(function (res) {
            // this._sessionService.notifyListAccountsChanged({
            //   name: 'remove',
            //   message: res.messages[0]
            // });
            _this._sessionService.notifyListAccountsChanged();
            setTimeout(function () {
                _this._dialogService._openSuccessDialog(res);
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
    AdwordsAccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this._fuseProgressiveBarService.show();
        var sub = this._sessionService.getListAccounts()
            .subscribe(function (listAccounts) {
            if (listAccounts) {
                _this._fuseProgressiveBarService.hide();
                _this.accounts = listAccounts;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](_this.accounts);
            }
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.navigateToSpamClickReport = function (accountId, adsId) {
        this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
        this._fuseNavigationService.reloadNavigation();
        this._router.navigateByUrl('/bao-cao/click-ao');
    };
    AdwordsAccountListComponent.prototype.navigateToWebsiteManagement = function (accountId, campaignNumber) {
        this._router.navigateByUrl("/quan-ly-website/" + accountId);
    };
    AdwordsAccountListComponent.prototype.checkAccountAcceptance = function (adsId, isConnected, connectType) {
        var _this = this;
        if (connectType === 'GOOGLE_ADS_ID') {
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();
            var sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
                .subscribe(function (res) {
                if (_this.adsAccountIdPipe.transform(adsId) === _this._sessionService.activeAdsAccountId)
                    _this._sessionService.setAccountAcceptance(res.data.isConnected);
                _this._sessionService.notifyListAccountsChanged();
                _this._fuseProgressiveBarService.hide();
                _this.isProcessing = false;
            }, function (error) {
                _this._fuseProgressiveBarService.hide();
                _this._dialogService._openErrorDialog(error.error);
                _this.isProcessing = false;
            });
            this.subscriptions.push(sub);
        }
        else {
            this._fuseProgressiveBarService.show();
            setTimeout(function () {
                _this._fuseProgressiveBarService.hide();
            }, 1000);
        }
    };
    AdwordsAccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adwords-account-list',
            template: __webpack_require__(/*! raw-loader!./adwords-account-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html"),
            styles: [__webpack_require__(/*! ./adwords-account-list.component.scss */ "./src/app/main/adwords-account-list/adwords-account-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__["FuseProgressBarService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__["AdwordsAccountListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["FuseNavigationService"]])
    ], AdwordsAccountListComponent);
    return AdwordsAccountListComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdwordsAccountListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListModule", function() { return AdwordsAccountListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adwords-account-list-routing.module */ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts");
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
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");



















var AdwordsAccountListModule = /** @class */ (function () {
    function AdwordsAccountListModule() {
    }
    AdwordsAccountListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__["AdwordsAccountListComponent"]],
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
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__["FuseSharedModule"],
                app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__["AdsAccountIdModule"],
                _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdwordsAccountListRoutingModule"]
            ],
            providers: [_adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__["AdwordsAccountListService"]]
        })
    ], AdwordsAccountListModule);
    return AdwordsAccountListModule;
}());



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.service.ts ***!
  \***************************************************************************/
/*! exports provided: AdwordsAccountListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdwordsAccountListService", function() { return AdwordsAccountListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdwordsAccountListService = /** @class */ (function () {
    function AdwordsAccountListService(_http) {
        this._http = _http;
    }
    AdwordsAccountListService.prototype.getAccounts = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    };
    AdwordsAccountListService.prototype.removeAccount = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.removeAccount.replace('{account_id}', accountId);
        return this._http.delete(url);
    };
    AdwordsAccountListService.prototype.getWebsites = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    };
    AdwordsAccountListService.prototype.removeWebsite = function (websiteId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    };
    AdwordsAccountListService.prototype.checkAccountAcceptance = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    };
    AdwordsAccountListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdwordsAccountListService);
    return AdwordsAccountListService;
}());



/***/ })

}]);
//# sourceMappingURL=main-adwords-account-list-adwords-account-list-module-es5.js.map