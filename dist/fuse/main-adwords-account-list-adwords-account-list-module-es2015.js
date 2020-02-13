(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutGap.xs=\"10px\" fxLayoutAlign=\"space-around\"\n    fxLayoutAlign.xs=\"center center\">\n    <div fxFlex=\"70\" class=\"title1-main\">TÀI KHOẢN GOOGLE ADS & WEBSITE</div>\n    <div class=\"add-account\">\n      <button (click)=\"router.navigateByUrl('/them-tai-khoan-moi')\" mat-raised-button class=\"add-account-button\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\">\n        Kết nối tài khoản Google Ads\n      </button>\n    </div>\n  </div>\n\n  <div class=\"inner\">\n\n    <div class=\"table-container\">\n      <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật tài khoản\"\n              (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n              [disabled]=\"isProcessing\">\n              <mat-icon>sync</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef> Ngày tạo </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"adwords\">\n          <mat-header-cell *matHeaderCellDef>\n            <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggAds-icon\">\n            Tài khoản</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div fxLayout=\"row\">\n              <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa có website nào.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <div fxLayout=\"row\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                  (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                  <mat-icon>data_usage</mat-icon>\n                </button>\n                <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                  matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                  <mat-icon>code</mat-icon>\n                </a>\n                <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản\"\n                  (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                  <mat-icon style=\"color: silver\">close</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"accepted\">\n          <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n              *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n              <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n              *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n              <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n            <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n              <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div fxFlex=\"90\">\n                  <a href=\"{{website.domain}}\" target=\"_blank\">\n                    {{website.domain}}</a>\n                </div>\n                <div fxFlex=\"10\">\n                  <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                  </button>\n                </div>\n              </li>\n            </ul>\n            <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n              class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\"\n              *ngIf=\"element.websites.length < element.limitWebsite\">\n              <mat-icon>add</mat-icon>Thêm website\n            </button>\n            <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n              <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                <mat-icon>add</mat-icon>Thêm website\n              </button>\n              <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0 && isProcessing === false\" class=\"warning\">\n      <span>Bạn chưa kết nối tài khoản Google Ads nào. Vui lòng thực hiện kết nối <a\n          routerLink=\"/them-tai-khoan-moi\">tại đây</a></span>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");




let AdwordsAccountListRoutingModule = class AdwordsAccountListRoutingModule {
};
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



/***/ }),

/***/ "./src/app/main/adwords-account-list/adwords-account-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/adwords-account-list/adwords-account-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n}\n.container .title1 {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 30px 30px 0 45px;\n  padding-left: 15px;\n  height: 25vh;\n}\n.container .title1 .title1-main {\n  padding-top: 15px;\n}\n.container .title1 mat-icon {\n  font-size: 18px;\n}\n.container .title1 .add-account {\n  padding-top: 5px;\n}\n.container .title1 .add-account .add-account-button {\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  max-width: 250px;\n  color: white;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: none;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .title1 .add-account .add-account-button img {\n  width: 14px;\n  margin-right: 5px;\n  margin-top: -5px;\n  -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));\n}\n.container .title1 .add-account .add-account-button:hover {\n  background: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner {\n  margin: 30px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .warning {\n  padding: 20px;\n  background: lightyellow;\n  border-left: 4px solid darkorange;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  position: relative;\n  top: -50vh;\n  width: 60%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 30px;\n  text-align: center;\n  -webkit-animation: notificationAni 0.2s ease-out;\n  animation: notificationAni 0.2s ease-out;\n}\n.container .inner .warning mat-icon {\n  color: orange;\n  font-size: 24px;\n  margin-right: 10px;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 105px;\n  overflow: auto;\n  border-radius: 5px;\n  margin: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.container .inner .website-list li a {\n  padding-left: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 14px;\n  margin-top: 8px;\n  margin-right: -5px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .table-container {\n  min-height: 60vh;\n  background: white;\n  border-bottom: 0.5px solid #eee;\n  overflow: auto;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.container .inner .table-container li {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .inner .table-container .ads-account .ads-account-id {\n  font-size: 15px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-table .ggAds-icon {\n  height: 12px;\n  width: 12px;\n  margin-right: 8px;\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(1),\n.container .inner .table-container mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 8%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(2),\n.container .inner .table-container mat-table mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 14%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(3),\n.container .inner .table-container mat-table mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 24%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(4),\n.container .inner .table-container mat-table mat-cell:nth-child(4) {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .table-container mat-table mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(5) {\n  padding-left: 5px;\n}\n.container .inner .table-container mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .table-container mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowFadeIn 0.4s linear;\n  animation: rowFadeIn 0.4s linear;\n}\n@-webkit-keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .table-container mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-table mat-row,\n.container .inner .table-container mat-table mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #40a5ec;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 30px 20px 20vh 20px;\n    height: 40vh;\n  }\n  .container .inner {\n    margin: 15px;\n  }\n  .container .inner .table-container .ads-account .ads-account-id {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtBQ0ROO0FER007RUFDRSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDRFI7QURHUTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ0RWO0FESVE7RUFDRSxvQ0FBQTtFQUNBLHdFQUFBO0FDRlY7QURRRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FDTko7QURPSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0xOO0VET0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDTE47QUFDRjtBRERJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTE47RURPSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNMTjtBQUNGO0FEUUk7RUFDRSxlQUFBO0FDTk47QURTSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7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O0lBQ0UsWUFBQTtFQy9DSjtFRG1EUTtJQUNFLDBCQUFBO0VDakRWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG5cbiAgLnRpdGxlMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMzBweCAzMHB4IDAgNDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuXG4gICAgLnRpdGxlMS1tYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuYWRkLWFjY291bnQge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgICAgLmFkZC1hY2NvdW50LWJ1dHRvbiB7XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmlubmVyIHtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1dmg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLndhcm5pbmcge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTUwdmg7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbiAgICAgIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uQW5pIDAuMnMgZWFzZS1vdXQ7XG4gICAgICBAa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbkFuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1dmgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAud2Vic2l0ZS1saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTA1cHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgbGkge1xuICAgICAgICBhIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXV0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwdmg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5hZHMtYWNjb3VudC1pZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgIC5nZ0Fkcy1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZmxleDogMCAwIDglO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMTQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBmbGV4OiAwIDAgMjQlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSxcbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMTIlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvd0ZhZGVJbiAwLjRzIGxpbmVhcjtcbiAgICAgICAgICBhbmltYXRpb246IHJvd0ZhZGVJbiAwLjRzIGxpbmVhcjtcbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvd0ZhZGVJbiB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyxcbiAgICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuYnV0dG9uLWFyZWEge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nIHtcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogcmVkO1xuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vLXRyYWNraW5nIHtcbiAgICAgIGNvbG9yOiAjNDBhNWVjO1xuICAgIH1cblxuICAgIC5jbGVhciB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAudGl0bGUxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAyMHZoIDIwcHg7XG4gICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgfVxuXG4gICAgLmlubmVyIHtcbiAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgIC5hZHMtYWNjb3VudCB7XG4gICAgICAgICAgLmFkcy1hY2NvdW50LWlkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgNDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDI1dmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLnRpdGxlMS1tYWluIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFkZC1hY2NvdW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRkLWFjY291bnQgLmFkZC1hY2NvdW50LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudCAuYWRkLWFjY291bnQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudCAuYWRkLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIG1hcmdpbjogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXZoO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZm9ybUFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2FybmluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTB2aDtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBub3RpZmljYXRpb25BbmkgMC4ycyBlYXNlLW91dDtcbn1cbi5jb250YWluZXIgLmlubmVyIC53YXJuaW5nIG1hdC1pY29uIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5Aa2V5ZnJhbWVzIG5vdGlmaWNhdGlvbkFuaSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1dmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC53ZWJzaXRlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2F1dGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNlZWU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIGxpIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciAuYWRzLWFjY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IC5hZHMtYWNjb3VudC1pZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSAuZ2dBZHMtaWNvbiB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDglO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCAxNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDI0JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoNCkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogcm93RmFkZUluIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dGYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbmZvLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IC5hZHMtYWNjb3VudC1pZCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












let AdwordsAccountListComponent = class AdwordsAccountListComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_5__["PageBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, router, _sessionService, _fuseNavigationService) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._adwordsAccountListService = _adwordsAccountListService;
        this.router = router;
        this._sessionService = _sessionService;
        this._fuseNavigationService = _fuseNavigationService;
        this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        this.accounts = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        this.accountConnectTypes = [];
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
    }
    ngOnInit() {
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
        this.getUser();
    }
    getUser() {
        const sub = this._sessionService.getUser()
            .subscribe(user => {
            if (user) {
                this.user = JSON.parse(this._sessionService.user);
                this._sessionService.notifyListAccountsChanged();
                this.getAccounts();
            }
        });
        this.subscriptions.push(sub);
    }
    openRemoveAccountConfirmDialog(accountId) {
        const openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
            .subscribe((isAccepted) => {
            if (isAccepted) {
                this.removeAccount(accountId);
            }
        });
        this.subscriptions.push(openConfirmDialogSub);
    }
    removeAccount(accountId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe((res) => {
            this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Ngắt kết nối tài khoản Google Ads thành công']
                }
            });
            setTimeout(() => {
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(removeAccountSub);
    }
    openRemoveWebsiteConfirmDialog(websiteId) {
        const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe((isAccepted) => {
            if (isAccepted) {
                this.removeWebiste(websiteId);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    }
    removeWebiste(websiteId) {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._adwordsAccountListService.removeWebsite(websiteId)
            .subscribe((res) => {
            this._sessionService.notifyListAccountsChanged({
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
    getAccounts() {
        this._fuseProgressiveBarService.show();
        const sub = this._sessionService.getListAccounts()
            .subscribe(listAccounts => {
            if (listAccounts) {
                this.isProcessing = false;
                this._fuseProgressiveBarService.hide();
                this.accounts = listAccounts;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
            }
        });
        this.subscriptions.push(sub);
    }
    navigateToSpamClickReport(accountId, adsId) {
        this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
        this._fuseNavigationService.reloadNavigation();
        this.router.navigateByUrl('/bao-cao/click-ao');
    }
    navigateToWebsiteManagement(accountId, campaignNumber) {
        this.router.navigateByUrl(`/quan-ly-website/${accountId}`);
    }
    checkAccountAcceptance(adsId, isConnected, connectType) {
        if (connectType === app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConnectionType.byGoogleAdsId) {
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();
            const sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
                .subscribe(res => {
                if (this.adsAccountIdPipe.transform(adsId) === this._sessionService.activeAdsAccountId)
                    this._sessionService.setAccountAcceptance(res.data.isConnected);
                this._sessionService.notifyListAccountsChanged();
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
            }, (error) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
            });
            this.subscriptions.push(sub);
        }
        else {
            this._fuseProgressiveBarService.show();
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
            }, 1000);
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adwords_account_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adwords-account-list-routing.module */ "./src/app/main/adwords-account-list/adwords-account-list-routing.module.ts");
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
/* harmony import */ var _adwords_account_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _adwords_account_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adwords-account-list.component */ "./src/app/main/adwords-account-list/adwords-account-list.component.ts");



















let AdwordsAccountListModule = class AdwordsAccountListModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AdwordsAccountListService = class AdwordsAccountListService {
    constructor(_http) {
        this._http = _http;
    }
    getAccounts() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    }
    removeAccount(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.removeAccount.replace('{account_id}', accountId);
        return this._http.delete(url);
    }
    getWebsites(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.getWebsites.replace('{accountId}', accountId);
        return this._http.get(url);
    }
    removeWebsite(websiteId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].Website.removeWebsite.replace('{website_id}', websiteId);
        return this._http.delete(url);
    }
    checkAccountAcceptance(params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    }
};
AdwordsAccountListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AdwordsAccountListService);



/***/ })

}]);
//# sourceMappingURL=main-adwords-account-list-adwords-account-list-module-es2015.js.map