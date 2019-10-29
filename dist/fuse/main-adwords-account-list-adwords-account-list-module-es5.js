(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\" *ngIf=\"isTitle1Displayed === true\">\n    <span fxFlex=\"75\">QUẢN LÝ TÀI KHOẢN GOOGLE ADS & WEBSITE</span>\n    <a [routerLink]=\"'/them-tai-khoan-moi'\" mat-button class=\"add-account-button\">\n      <mat-icon>library_add</mat-icon> Thêm tài khoản mới\n    </a>\n  </div>\n\n  <div class=\"title2\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"isTitle2Displayed === true\">\n    QUẢN LÝ TÀI KHOẢN GOOGLE ADS & WEBSITE\n  </div>\n\n  <div class=\"inner\">\n    <form>\n\n      <div class=\"table-container\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"task\">\n            <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật dữ liệu\"\n                (click)=\"checkAccountAcceptance(element.adsId, element.isConnected, element.connectType)\"\n                [disabled]=\"isProcessing\">\n                <mat-icon>sync</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <mat-header-cell *matHeaderCellDef> Ngày kết nối </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adwords\">\n            <mat-header-cell *matHeaderCellDef>\n              <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" style=\"height: 18px; width: 18px; margin-right: 5px\">\n              Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div fxLayout=\"row\">\n                <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản chưa có website nào.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"65\">\n\n                  <span class=\"ads-account\"\n                    matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\n\n                  <!-- <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\n                    style=\"padding-left:0\">\n                    FREE - Nâng cấp VIP\n                  </a> -->\n\n                </p>\n                <div fxLayout=\"row\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo click ảo\"\n                    (click)=\"navigateToSpamClickReport(element.accountId, element.adsId)\">\n                    <mat-icon>data_usage</mat-icon>\n                  </button>\n                  <a [routerLink]=\"['/gan-tracking/website', element.accountId]\" mat-icon-button color=\"accent\"\n                    matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\n                    <mat-icon>code</mat-icon>\n                  </a>\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản Google Ads\"\n                    (click)=\"openRemoveAccountConfirmDialog(element.accountId)\" [disabled]=\"isProcessing\">\n                    <mat-icon style=\"color: silver\">close</mat-icon>\n                  </button>\n                </div>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"accepted\">\n            <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\"\n                *ngIf=\"element.connectType !== 'GOOGLE_ADS_ID' || element.isConnected === true\">\n                <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\n              </button>\n              <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\"\n                *ngIf=\"element.connectType === 'GOOGLE_ADS_ID' && element.isConnected === false\">\n                <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\n              </button>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"website\">\n            <mat-header-cell *matHeaderCellDef> Website của tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n              <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\n                <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\"\n                  fxLayoutAlign=\"center center\">\n                  <div style=\"padding-left: 5px\" fxFlex=\"55\">\n                    <span>{{i+1}}</span>.\n                    <a href=\"{{website.domain}}\" target=\"_blank\">\n                      {{website.domain}}</a>\n                  </div>\n                  <div fxFlex=\"35\">\n                    <!-- <a *ngIf=\"website.isExpired === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\">\n                      FREE - Nâng cấp VIP\n                    </a> -->\n                    <!-- <div *ngIf=\"website.isExpired === false\">\n                      <a routerLink=\"/nang-cap-vip\">\n                        <span class=\"vip-label\" matTooltip=\"Nhấn để gia hạn thêm VIP\">VIP</span>\n                      </a>\n                      <span class=\"vip-expiration\">({{(website.expiredAt | date: 'dd/MM/yyyy') || 'Unknown'}})</span>\n                    </div> -->\n                  </div>\n                  <div fxFlex=\"10\">\n                    <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\n                      matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\n                      <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n              <button (click)=\"navigateToWebsiteManagement(element.accountId, element.campaignNumber)\" mat-button\n                class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\" *ngIf=\"element.websites.length < 2\">\n                <mat-icon>add_circle_outline</mat-icon> Thêm Website\n              </button>\n              <span *ngIf=\"element.websites.length >= 2\">\n                <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\n                  <mat-icon>add_circle_outline</mat-icon> Thêm Website\n                </button>\n                <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\n                  đã đạt tối đa.</span>\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n    </form>\n  </div>\n\n</div>"

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

module.exports = "@charset \"UTF-8\";\n.container {\n  width: 100%;\n  background: url('gg-material_1.png');\n  background-size: 100% 100%;\n  background-position: center center;\n  background-attachment: fixed;\n}\n.container .title1 {\n  padding: 86px 20px 16px 0px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .title2 {\n  padding: 90px 20px 24px 25px;\n  background-color: #000000 !important;\n  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%) !important;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner mat-icon {\n  font-size: 20px;\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 250px;\n  overflow: auto;\n  border-left: 0.5px solid #d2d2d2;\n  border-radius: 3px;\n  box-shadow: 1px 1px 4px silver;\n  padding: 10px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 20px;\n}\n.container .inner .table-container {\n  box-shadow: 1px 1px 4px black;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-container li {\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  margin-right: 10px;\n  display: inline-block;\n  width: 100px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container ​mat-header-cell,\n.container .inner .table-container mat-cell {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .table-container mat-header-cell,\n.container .inner .table-container mat-cell {\n  justify-content: left;\n}\n.container .inner .table-container mat-header-cell:nth-child(1),\n.container .inner .table-container mat-cell:nth-child(1) {\n  flex: 0 0 8%;\n}\n.container .inner .table-container mat-header-cell:nth-child(2),\n.container .inner .table-container mat-cell:nth-child(2) {\n  flex: 0 0 12%;\n}\n.container .inner .table-container mat-header-cell:nth-child(3),\n.container .inner .table-container mat-cell:nth-child(3) {\n  flex: 0 0 22%;\n}\n.container .inner .table-container mat-header-cell:nth-child(4),\n.container .inner .table-container mat-cell:nth-child(4) {\n  justify-content: center;\n  flex: 0 0 14%;\n}\n.container .inner .table-container mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-container mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-container mat-row,\n.container .inner .table-container mat-header-row {\n  min-width: 1200px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #039be5;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .title1,\n.title2 {\n    font-size: 14px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9hZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBREVGO0FDQUU7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0dJO0VBQ0UsZUFBQTtBREROO0FDSUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBREZOO0FDS0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBREhOO0FDTUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QURKTjtBQ09JO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7QURMTjtBQ1FJO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEckJOO0FDd0JJO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBRHhCTjtBQzRCSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FEMUJOO0FDNEJNO0VBQ0UsZUFBQTtBRDFCUjtBQzhCSTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FENUJOO0FDOEJNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FENUJSO0FDOEJRO0VBQ0Usa0NBQUE7QUQ1QlY7QUNnQ007RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FEOUJSO0FDaUNNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FEL0JSO0FDa0NNOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtBRGhDUjtBQ21DTTs7RUFFRSxxQkFBQTtBRGpDUjtBQ29DTTs7RUFFRSxZQUFBO0FEbENSO0FDcUNNOztFQUVFLGFBQUE7QURuQ1I7QUNzQ007O0VBRUUsYUFBQTtBRHBDUjtBQ3VDTTs7RUFFRSx1QkFBQTtFQUNBLGFBQUE7QURyQ1I7QUN3Q007RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEdENSO0FDeUNNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEdkNSO0FDMENNO0VBQ0UsZ0JBQUE7QUR4Q1I7QUMyQ007O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FEekNSO0FDNkNJO0VBQ0UsZUFBQTtBRDNDTjtBQzhDSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBRDVDTjtBQytDSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRDdDTjtBQ2dESTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FEOUNOO0FDaURJO0VBQ0UsYUFBQTtBRC9DTjtBQ2tESTtFQUNFLFVBQUE7QURoRE47QUNrRE07RUFDRSxXQUFBO0FEaERSO0FDb0RJO0VBQ0UsY0FBQTtBRGxETjtBQ3FESTtFQUNFLFdBQUE7QURuRE47QUNzREk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBRHBETjtBQ3lEQTtFQUNFOztJQUVFLDBCQUFBO0VEdERGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2Fkd29yZHMtYWNjb3VudC1saXN0L2Fkd29yZHMtYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2dnLW1hdGVyaWFsXzEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5jb250YWluZXIgLnRpdGxlMSB7XG4gIHBhZGRpbmc6IDg2cHggMjBweCAxNnB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudGl0bGUyIHtcbiAgcGFkZGluZzogOTBweCAyMHB4IDI0cHggMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjMDAwMDAwIDAlLCAjMmMzZTUwIDc0JSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhdXRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1pY29uIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWV4cGlyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLWRvbWFpbi1idXR0b24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGkge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgLmFkcy1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciDigIttYXQtaGVhZGVyLWNlbGwsXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCA4JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDMpIHtcbiAgZmxleDogMCAwIDIyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg0KSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDQpIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCAxNCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1jZWxsOm50aC1jaGlsZCg1KSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXJvdyxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1yb3cge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5mby1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLXNlcnZpY2Uge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZnJlZS1zZXJ2aWNlIHtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5idXR0b24tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZyB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAudHJhY2tpbmctYnV0dG9uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5uby10cmFja2luZyB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGl0bGUxLFxuLnRpdGxlMiB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZ2ctbWF0ZXJpYWxfMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXG4gIC50aXRsZTEge1xuICAgIHBhZGRpbmc6IDg2cHggMjBweCAxNnB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzJjM2U1MCA3NCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC50aXRsZTIge1xuICAgIHBhZGRpbmc6IDkwcHggMjBweCAyNHB4IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMyYzNlNTAgNzQlKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAud2Vic2l0ZS1saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCAjZDJkMmQyO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuY2F1dGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAudmlwLWljb24ge1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICB9XG5cbiAgICAuZnJlZS1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgLnZpcC1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxuICAgICAgICAgICNmZWRiMzcgMCUsXG4gICAgICAgICAgI2ZkYjkzMSA4JSxcbiAgICAgICAgICAjOWY3OTI4IDMwJSxcbiAgICAgICAgICAjOGE2ZTJmIDQwJSxcbiAgICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICAgKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxuICAgICAgICAgICNmZmZmZmYgMCUsXG4gICAgICAgICAgI2ZmZmZhYyA4JSxcbiAgICAgICAgICAjZDFiNDY0IDI1JSxcbiAgICAgICAgICAjNWQ0YTFmIDYyLjUlLFxuICAgICAgICAgICM1ZDRhMWYgMTAwJVxuICAgICAgICApO1xuICAgICAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICAgICAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICB9XG5cbiAgICAudmlwLWV4cGlyYXRpb24ge1xuICAgICAgLy9mb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIC8vcGFkZGluZzogM3B4IDRweCAzcHggNHB4O1xuICAgIH1cblxuICAgIC5hZGQtZG9tYWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtY29udGFpbmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IGJsYWNrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgbGkge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIOKAi21hdC1oZWFkZXItY2VsbCxcbiAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbCxcbiAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgZmxleDogMCAwIDglO1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgIH1cblxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgzKSxcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGZsZXg6IDAgMCAyMiU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoNCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMCAwIDE0JTtcbiAgICAgIH1cblxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIG1hdC1yb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBtYXQtcm93LFxuICAgICAgbWF0LWhlYWRlci1yb3cge1xuICAgICAgICBtaW4td2lkdGg6IDEyMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudmlwLXNlcnZpY2Uge1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuZnJlZS1zZXJ2aWNlIHtcbiAgICAgIGNvbG9yOiBjb3JhbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5idXR0b24tYXJlYSB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudHJhY2tpbmcge1xuICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmctYnV0dG9uIHtcbiAgICAgIGNvbG9yOiByZWQ7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm8tdHJhY2tpbmcge1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgfVxuXG4gICAgLmNsZWFyIHtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50aXRsZTEsXG4gIC50aXRsZTIge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

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
        _this.isTitle1Displayed = false;
        _this.isTitle2Displayed = false;
        _this.userHasAccount = false;
        return _this;
    }
    AdwordsAccountListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.accounts);
        this.user = JSON.parse(this._sessionService.user);
        this.getAccounts();
    };
    AdwordsAccountListComponent.prototype.setTitleDisplaying = function () {
        var _this = this;
        var userLicenceType = this.user.licence.type;
        var sub = this._sessionService.checkIfUserHasAccount()
            .subscribe(function (userHasAccount) {
            if (userHasAccount) {
                if (userLicenceType !== 'CUSTOM') {
                    _this.isTitle1Displayed = false;
                    _this.isTitle2Displayed = true;
                }
                else {
                    _this.isTitle1Displayed = true;
                    _this.isTitle2Displayed = false;
                }
            }
            else {
                _this.isTitle1Displayed = true;
                _this.isTitle2Displayed = false;
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
                name: 'remove',
                message: 'Ngắt kết nối tài khoản Google Ads thành công'
            });
            // this._sessionService.notifyListAccountsChanged('remove');
            // _.remove(this.accounts, account => account.accountId === accountId);
            // this._sessionService.completeRemovingAccount(accountId);
            // this.dataSource = new MatTableDataSource(this.accounts);
            _this.isProcessing = false;
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
                name: 'remove',
                message: res.messages[0]
            });
            _this.isProcessing = false;
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
                _this.setTitleDisplaying();
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



/***/ })

}]);
//# sourceMappingURL=main-adwords-account-list-adwords-account-list-module-es5.js.map