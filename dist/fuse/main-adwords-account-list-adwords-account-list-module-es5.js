(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\" fxLayoutGap.xs=\"10px\" fxLayoutAlign=\"space-around\"\n    fxLayoutAlign.xs=\"center center\">\n    <div fxFlex=\"70\" class=\"title1-main\">TÀI KHOẢN GOOGLE ADS & WEBSITE</div>\n    <div class=\"add-account\">\n      <button (click)=\"router.navigateByUrl('/them-tai-khoan-moi')\" mat-raised-button class=\"add-account-button\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\">\n        Kết nối tài khoản Google Ads\n      </button>\n    </div>\n  </div>\n\n  <div class=\"inner\">\n\n    <div class=\"table-container\">\n      <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"task\">\n          <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật tài khoản\"\n              (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n              [disabled]=\"isProcessing\">\n              <mat-icon>sync</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef> Ngày tạo </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"adwords\">\n          <mat-header-cell *matHeaderCellDef>\n            <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggAds-icon\">\n            Tài khoản</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <div fxLayout=\"row\">\n              <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"75\"\n                fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa có website nào.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"75\" fxFlex.xs=\"55\">\n                <span class=\"ads-account\" matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">\n                  <span class=\"ads-account-id\">{{element.adsId | adsAccountId}}</span>\n                  <span class=\"ads-account-name\">{{element.adsName}}</span>\n                </span>\n              </p>\n              <div fxLayout=\"row\" fxFlex=\"25\" fxLayoutAlign=\"center center\">\n                <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                  (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                  <mat-icon>data_usage</mat-icon>\n                </button>\n                <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                  matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                  <mat-icon>code</mat-icon>\n                </a>\n                <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản\"\n                  (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                  <mat-icon style=\"color: silver\">close</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"accepted\">\n          <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n              *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n              <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n            </button>\n            <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n              *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n              <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"website\">\n          <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n            <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n              <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div fxFlex=\"90\">\n                  <a href=\"{{website.domain}}\" target=\"_blank\">\n                    {{website.domain}}</a>\n                </div>\n                <div fxFlex=\"10\">\n                  <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver\">delete</mat-icon>\n                  </button>\n                </div>\n              </li>\n            </ul>\n            <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n              class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\"\n              *ngIf=\"element.websites.length < element.limitWebsite\">\n              <mat-icon>add</mat-icon>Thêm website\n            </button>\n            <span *ngIf=\"element.websites.length >= element.limitWebsite\">\n              <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                <mat-icon>add</mat-icon>Thêm website\n              </button>\n              <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                đã đạt tối đa. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại đây</a></span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div *ngIf=\"dataSource.filteredData.length === 0 && isProcessing === false\" class=\"warning\">\n      <span>Bạn chưa kết nối tài khoản Google Ads nào. Vui lòng thực hiện kết nối <a\n          routerLink=\"/them-tai-khoan-moi\">tại đây</a></span>\n    </div>\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n  background-color: #00a1e0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%2300a1e0' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%231095d2' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231889c3' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%231c7eb5' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%231e72a7' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%231f6799' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n}\n.container .title1 {\n  color: white;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  font-size: 16px;\n  font-weight: bold;\n  padding: 30px 30px 0 45px;\n  padding-left: 15px;\n  height: 25vh;\n}\n.container .title1 .title1-main {\n  padding-top: 15px;\n}\n.container .title1 mat-icon {\n  font-size: 18px;\n}\n.container .title1 .add-account {\n  padding-top: 5px;\n}\n.container .title1 .add-account .add-account-button {\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  max-width: 250px;\n  color: white;\n  background: rgba(255, 255, 255, 0.3);\n  box-shadow: none;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.container .title1 .add-account .add-account-button img {\n  width: 14px;\n  margin-right: 5px;\n  margin-top: -5px;\n  -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));\n}\n.container .title1 .add-account .add-account-button:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.container .inner {\n  margin: 30px;\n  position: relative;\n  top: -15vh;\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .warning {\n  padding: 20px;\n  background: lightyellow;\n  border-left: 4px solid darkorange;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  position: relative;\n  top: -50vh;\n  width: 60%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 30px;\n  text-align: center;\n  -webkit-animation: notificationAni 0.2s ease-out;\n  animation: notificationAni 0.2s ease-out;\n}\n.container .inner .warning mat-icon {\n  color: orange;\n  font-size: 24px;\n  margin-right: 10px;\n}\n@-webkit-keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes notificationAni {\n  from {\n    -webkit-transform: translateY(5vh);\n            transform: translateY(5vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 105px;\n  overflow: auto;\n  border-radius: 5px;\n  margin: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n}\n.container .inner .website-list li a {\n  padding-left: 5px;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 14px;\n  margin-top: 8px;\n  margin-right: -5px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n  margin-left: 5px;\n}\n.container .inner .table-container {\n  min-height: 60vh;\n  background: white;\n  border-bottom: 0.5px solid #eee;\n  overflow: auto;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.container .inner .table-container li {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.05);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  width: 140px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .inner .table-container .ads-account .ads-account-id {\n  font-size: 15px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container mat-table .ggAds-icon {\n  height: 12px;\n  width: 12px;\n  margin-right: 8px;\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(1),\n.container .inner .table-container mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 8%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(2),\n.container .inner .table-container mat-table mat-cell:nth-child(2) {\n  -webkit-box-flex: 0;\n          flex: 0 0 14%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(3),\n.container .inner .table-container mat-table mat-cell:nth-child(3) {\n  -webkit-box-flex: 0;\n          flex: 0 0 24%;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(4),\n.container .inner .table-container mat-table mat-cell:nth-child(4) {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .table-container mat-table mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-table mat-header-cell:nth-child(5) {\n  padding-left: 5px;\n}\n.container .inner .table-container mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .table-container mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowFadeIn 0.4s linear;\n  animation: rowFadeIn 0.4s linear;\n}\n@-webkit-keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .table-container mat-table mat-header-cell,\n.container .inner .table-container mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .table-container mat-table mat-icon {\n  font-size: 16px;\n}\n.container .inner .table-container mat-table mat-row,\n.container .inner .table-container mat-table mat-header-row {\n  min-width: 1000px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #40a5ec;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .container .title1 {\n    text-align: center;\n    padding: 30px 20px 20vh 20px;\n    height: 40vh;\n  }\n  .container .inner {\n    margin: 10px;\n  }\n  .container .inner .table-container .ads-account .ads-account-id {\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsdWZBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBRElNO0VBQ0UsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0ZSO0FESVE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUNGVjtBREtRO0VBQ0Usb0NBQUE7QUNIVjtBRFNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNQSjtBRFFJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTk47RURRSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNOTjtBQUNGO0FEQUk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNOTjtFRFFJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ05OO0FBQ0Y7QURTSTtFQUNFLGVBQUE7QUNQTjtBRFVJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQVFBLGdEQUFBO0VBQ0Esd0NBQUE7QUNmTjtBRFFNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ05SO0FEV007RUFDRTtJQUNFLGtDQUFBO1lBQUEsMEJBQUE7RUNUUjtFRFdNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ1RSO0FBQ0Y7QURHTTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1RSO0VEV007SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDVFI7QUFDRjtBRGFJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1hOO0FEY1E7RUFDRSxpQkFBQTtBQ1pWO0FEaUJJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmTjtBRGlCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRG1CSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQ2xCTjtBRG9CTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxZQUFBO0FDbEJSO0FEb0JRO0VBQ0UsbUNBQUE7QUNsQlY7QURzQk07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDcEJSO0FEc0JRO0VBQ0UsZUFBQTtBQ3BCVjtBRHdCTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ3RCUjtBRHdCUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN0QlY7QUR5QlE7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQ3ZCVjtBRDBCUTs7RUFFRSxtQkFBQTtVQUFBLFlBQUE7QUN4QlY7QUQyQlE7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDekJWO0FENEJROztFQUVFLG1CQUFBO1VBQUEsYUFBQTtBQzFCVjtBRDZCUTs7RUFFRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7VUFBQSxhQUFBO0FDM0JWO0FEOEJRO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQzVCVjtBRCtCUTtFQUNFLGlCQUFBO0FDN0JWO0FEZ0NRO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDOUJWO0FEaUNRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNoQ1Y7QURpQ1U7RUFDRTtJQUNFLFVBQUE7RUMvQlo7RURpQ1U7SUFDRSxVQUFBO0VDL0JaO0FBQ0Y7QUR5QlU7RUFDRTtJQUNFLFVBQUE7RUMvQlo7RURpQ1U7SUFDRSxVQUFBO0VDL0JaO0FBQ0Y7QURtQ1E7O0VBRUUsZUFBQTtBQ2pDVjtBRG9DUTtFQUNFLGVBQUE7QUNsQ1Y7QURxQ1E7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FDbkNWO0FEd0NJO0VBQ0UsZUFBQTtBQ3RDTjtBRHlDSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3ZDTjtBRDBDSTtFQUNFLGFBQUE7QUN4Q047QUQyQ0k7RUFDRSxVQUFBO0FDekNOO0FEMkNNO0VBQ0UsV0FBQTtBQ3pDUjtBRDZDSTtFQUNFLGNBQUE7QUMzQ047QUQ4Q0k7RUFDRSxXQUFBO0FDNUNOO0FEK0NJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDN0NOO0FEa0RBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsWUFBQTtFQ2hESjtFRG1ERTtJQUNFLFlBQUE7RUNqREo7RURxRFE7SUFDRSwwQkFBQTtFQ25EVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9hZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWUwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCA4MDAgODAwJyUzRSUzQ2cgJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzAwYTFlMCcgY3g9JzQwMCcgY3k9JzQwMCcgcj0nNjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMTA5NWQyJyBjeD0nNDAwJyBjeT0nNDAwJyByPSc1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxODg5YzMnIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzQwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzFjN2ViNScgY3g9JzQwMCcgY3k9JzQwMCcgcj0nMzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMWU3MmE3JyBjeD0nNDAwJyBjeT0nNDAwJyByPScyMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxZjY3OTknIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzEwMCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIC50aXRsZTEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMCA0NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBoZWlnaHQ6IDI1dmg7XG5cbiAgICAudGl0bGUxLW1haW4ge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5hZGQtYWNjb3VudCB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuXG4gICAgICAuYWRkLWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXZoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC53YXJuaW5nIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC01MHZoO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbm90aWZpY2F0aW9uQW5pIDAuMnMgZWFzZS1vdXQ7XG4gICAgICBhbmltYXRpb246IG5vdGlmaWNhdGlvbkFuaSAwLjJzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndlYnNpdGUtbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwNXB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLWRvbWFpbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuXG4gICAgICBsaSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGhlaWdodDogMzBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAuYWRzLWFjY291bnQtaWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICAgICAuZ2dBZHMtaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsLFxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIGZsZXg6IDAgMCA4JTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgZmxleDogMCAwIDE0JTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgZmxleDogMCAwIDI0JTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiByb3dGYWRlSW4gMC40cyBsaW5lYXI7XG4gICAgICAgICAgQGtleWZyYW1lcyByb3dGYWRlSW4ge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWhlYWRlci1jZWxsLFxuICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1yb3csXG4gICAgICAgIG1hdC1oZWFkZXItcm93IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLWJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi1hcmVhIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC50cmFja2luZyB7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgIH1cblxuICAgIC50cmFja2luZy1idXR0b24ge1xuICAgICAgY29sb3I6IHJlZDtcblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uby10cmFja2luZyB7XG4gICAgICBjb2xvcjogIzQwYTVlYztcbiAgICB9XG5cbiAgICAuY2xlYXIge1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjB2aCAyMHB4O1xuICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgIH1cblxuICAgIC5pbm5lciB7XG4gICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgIC50YWJsZS1jb250YWluZXIge1xuICAgICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICAgIC5hZHMtYWNjb3VudC1pZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFlMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlMjUnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIDAgODAwIDgwMCclM0UlM0NnICUzRSUzQ2NpcmNsZSBmaWxsPSclMjMwMGExZTAnIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzYwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzEwOTVkMicgY3g9JzQwMCcgY3k9JzQwMCcgcj0nNTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMTg4OWMzJyBjeD0nNDAwJyBjeT0nNDAwJyByPSc0MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxYzdlYjUnIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzMwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzFlNzJhNycgY3g9JzQwMCcgY3k9JzQwMCcgcj0nMjAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMWY2Nzk5JyBjeD0nNDAwJyBjeT0nNDAwJyByPScxMDAnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgNDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDI1dmg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLnRpdGxlMS1tYWluIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFpbmVyIC50aXRsZTEgLmFkZC1hY2NvdW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSAuYWRkLWFjY291bnQgLmFkZC1hY2NvdW50LWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudCAuYWRkLWFjY291bnQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuLmNvbnRhaW5lciAudGl0bGUxIC5hZGQtYWNjb3VudCAuYWRkLWFjY291bnQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBtYXJnaW46IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTV2aDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndhcm5pbmcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwdmg7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbm90aWZpY2F0aW9uQW5pIDAuMnMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogbm90aWZpY2F0aW9uQW5pIDAuMnMgZWFzZS1vdXQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2FybmluZyBtYXQtaWNvbiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQGtleWZyYW1lcyBub3RpZmljYXRpb25Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLWRvbWFpbi1idXR0b24ge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLWRvbWFpbi1idXR0b24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhdXRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZWVlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBsaSB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIC5hZHMtYWNjb3VudCAuYWRzLWFjY291bnQtaWQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgLmdnQWRzLWljb24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgMTQlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gIGZsZXg6IDAgMCAyNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoNSkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm93RmFkZUluIDAuNHMgbGluZWFyO1xuICBhbmltYXRpb246IHJvd0ZhZGVJbiAwLjRzIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm93RmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIG1hdC1yb3csXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbmZvLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjB2aCAyMHB4O1xuICAgIGhlaWdodDogNDB2aDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IC5hZHMtYWNjb3VudC1pZCB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/constants/generals */ "./src/app/shared/constants/generals.ts");












var AdwordsAccountListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdwordsAccountListComponent, _super);
    function AdwordsAccountListComponent(_fuseProgressiveBarService, _dialogService, _adwordsAccountListService, router, _sessionService, _fuseNavigationService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._adwordsAccountListService = _adwordsAccountListService;
        _this.router = router;
        _this._sessionService = _sessionService;
        _this._fuseNavigationService = _fuseNavigationService;
        _this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        _this.accounts = [];
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"]();
        _this.accountConnectTypes = [];
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        return _this;
    }
    AdwordsAccountListComponent.prototype.ngOnInit = function () {
        this._fuseProgressiveBarService.show();
        this.isProcessing = true;
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
            _this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Ngắt kết nối tài khoản Google Ads thành công']
                }
            });
            setTimeout(function () {
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
            _this._sessionService.notifyListAccountsChanged({
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
    AdwordsAccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this._fuseProgressiveBarService.show();
        var sub = this._sessionService.getListAccounts()
            .subscribe(function (listAccounts) {
            if (listAccounts) {
                _this.isProcessing = false;
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
        this.router.navigateByUrl('/bao-cao/click-ao');
    };
    AdwordsAccountListComponent.prototype.navigateToWebsiteManagement = function (accountId, campaignNumber) {
        this.router.navigateByUrl("/quan-ly-website/" + accountId);
    };
    AdwordsAccountListComponent.prototype.checkAccountAcceptance = function (adsId, isConnected, connectType) {
        var _this = this;
        if (connectType === app_shared_constants_generals__WEBPACK_IMPORTED_MODULE_11__["Generals"].AccountConnectionType.byGoogleAdsId) {
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