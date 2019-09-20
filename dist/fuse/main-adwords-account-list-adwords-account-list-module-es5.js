(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-adwords-account-list-adwords-account-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/adwords-account-list/adwords-account-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/adwords-account-list/adwords-account-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title1\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\">\r\n    <span fxFlex=\"75\">QUẢN LÝ TÀI KHOẢN GOOGLE ADS VÀ WEBSITE</span>\r\n    <a [routerLink]=\"'/them-tai-khoan-moi'\" mat-button class=\"add-account-button\">\r\n      <mat-icon>library_add</mat-icon> Thêm tài khoản mới\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <form>\r\n\r\n      <div class=\"table-container\">\r\n\r\n        <mat-table [dataSource]=\"accounts\" class=\"mat-elevation-z8\">\r\n\r\n          <ng-container matColumnDef=\"task\">\r\n            <mat-header-cell *matHeaderCellDef> Tác vụ </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Cập nhật dữ liệu\"\r\n                (click)=\"checkAccountAcceptance(element.adsId, element.isConnected)\" [disabled]=\"isProcessing\">\r\n                <mat-icon>sync</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"date\">\r\n            <mat-header-cell *matHeaderCellDef> Ngày </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'HH:mm dd/MM/yyyy'}} </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"adwords\">\r\n            <mat-header-cell *matHeaderCellDef> Google Ads ID </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <div fxLayout=\"row\">\r\n                <p style=\"color: #4bb543\" *ngIf=\"element.isConnected && element.websites.length > 0\" fxFlex=\"70\">\r\n\r\n                  <span class=\"ads-account\"\r\n                    matTooltip=\"Tài khoản đã được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\r\n\r\n                  <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\r\n                    style=\"padding-left:0\">\r\n                    FREE - Nâng cấp VIP\r\n                  </a>\r\n\r\n                </p>\r\n                <p style=\"color: orange\" *ngIf=\"element.isConnected && element.websites.length === 0\" fxFlex=\"70\">\r\n\r\n                  <span class=\"ads-account\"\r\n                    matTooltip=\"Tài khoản chưa có website nào.\">{{element.adsId | adsAccountId}}</span>\r\n\r\n                  <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\r\n                    style=\"padding-left:0\">\r\n                    FREE - Nâng cấp VIP\r\n                  </a>\r\n\r\n                </p>\r\n                <p style=\"color: silver\" *ngIf=\"!element.isConnected\" fxFlex=\"70\">\r\n\r\n                  <span class=\"ads-account\"\r\n                    matTooltip=\"Tài khoản chưa được chấp nhận quyền quản lý hệ thống.\">{{element.adsId | adsAccountId}}</span>\r\n\r\n                  <a *ngIf=\"element.isFree === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\"\r\n                    style=\"padding-left:0\">\r\n                    FREE - Nâng cấp VIP\r\n                  </a>\r\n\r\n                </p>\r\n                <div fxLayout=\"row\" fxFlex=\"30\">\r\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Xem báo cáo tổng quan\"\r\n                    (click)=\"navigateToSpamClickReport(element.id, element.adsId)\">\r\n                    <mat-icon>notifications</mat-icon>\r\n                  </button>\r\n                  <a [routerLink]=\"['/gan-tracking/website', element.id]\" mat-icon-button color=\"accent\"\r\n                    matTooltip=\"Gắn mã tracking cho các website\" class=\"tracking-button\">\r\n                    <mat-icon>code</mat-icon>\r\n                  </a>\r\n                  <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối tài khoản Google Ads\"\r\n                    (click)=\"openRemoveAccountConfirmDialog(element.id)\" [disabled]=\"isProcessing\">\r\n                    <mat-icon style=\"color: silver\">delete</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"accepted\">\r\n            <mat-header-cell *matHeaderCellDef> Quyền quản lý </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Đã được chấp nhận\" *ngIf=\"element.isConnected\">\r\n                <mat-icon style=\"color: #4bb543\">check_circle</mat-icon>\r\n              </button>\r\n              <button mat-icon-button color=\"accent\" matTooltip=\"Chưa được chấp nhận\" *ngIf=\"!element.isConnected\">\r\n                <mat-icon style=\"color: crimson\">highlight_off</mat-icon>\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"website\">\r\n            <mat-header-cell *matHeaderCellDef> Website </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n              <ul class=\"website-list\" *ngIf=\"element.websites.length > 0\">\r\n                <li *ngFor=\"let website of element.websites, let i = index\" fxLayout=\"row\"\r\n                  fxLayoutAlign=\"center center\">\r\n                  <div style=\"padding-left: 5px\" fxFlex=\"55\">\r\n                    <span>{{i+1}}</span>.\r\n                    <a href=\"{{website.domain}}\" target=\"_blank\">\r\n                      {{website.domain}}</a>\r\n                  </div>\r\n                  <div fxFlex=\"35\">\r\n                    <a *ngIf=\"website.isExpired === true\" class=\"free-label\" routerLink=\"/nang-cap-vip\" matTooltip=\"\">\r\n                      FREE - Nâng cấp VIP\r\n                    </a>\r\n                    <div *ngIf=\"website.isExpired === false\">\r\n                      <a routerLink=\"/nang-cap-vip\">\r\n                        <span class=\"vip-label\" matTooltip=\"Nhấn để gia hạn thêm VIP\">VIP</span>\r\n                      </a>\r\n                      <span class=\"vip-expiration\">({{(website.expiredAt | date: 'dd/MM/yyyy') || 'Unknown'}})</span>\r\n                    </div>\r\n                  </div>\r\n                  <div fxFlex=\"10\">\r\n                    <button (click)=\"openRemoveWebsiteConfirmDialog(website.code)\" mat-icon-button color=\"accent\"\r\n                      matTooltip=\"Xóa website\" [disabled]=\"isProcessing\">\r\n                      <mat-icon style=\"color: silver; font-size: 20px\">delete</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <button (click)=\"navigateToWebsiteManagement(element.id, element.campaignNumber)\" mat-button\r\n                class=\"add-domain-button\" [disabled]=\"isProcessing\" color=\"accent\" *ngIf=\"element.websites.length < 2\">\r\n                <mat-icon>add_circle_outline</mat-icon> Thêm Website\r\n              </button>\r\n              <span *ngIf=\"element.websites.length >= 2\">\r\n                <button mat-button class=\"add-domain-button\" color=\"accent\" disabled>\r\n                  <mat-icon>add_circle_outline</mat-icon> Thêm Website\r\n                </button>\r\n                <span class=\"caution\"><span style=\"color: red\">*</span><b>Chú ý:</b> Số lượng website của tài khoản này\r\n                  đã đạt tối đa.</span>\r\n              </span>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <!-- <ng-container matColumnDef=\"website\">\r\n                <mat-header-cell *matHeaderCellDef> Website </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\">\r\n                  <p *ngIf=\"element.website\">\r\n                    {{element.website}}\r\n                    <button mat-icon-button color=\"accent\" matTooltip=\"Gắn tracking chiến dịch tài khoản\"\r\n                      *ngIf=\"element.tracking\" style=\"color: red\">\r\n                      <mat-icon>code</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" matTooltip=\"Ngắt kết nối Google Ads cho website này\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"accent\" matTooltip=\"Kết nối Google Ads cho website này\">\r\n                      <mat-icon>add_circle_outline</mat-icon>\r\n                    </button>\r\n                  </p>\r\n                  <button mat-button color=\"accent\" *ngIf=\"!element.website\" style=\"padding-left: 0\">\r\n                    <mat-icon>add_circle_outline</mat-icon> Thêm Website\r\n                  </button>\r\n                </mat-cell>\r\n              </ng-container>\r\n      \r\n              <ng-container matColumnDef=\"service\">\r\n                <mat-header-cell *matHeaderCellDef> Dịch vụ </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> <span [class.vip-service]=\"element.service === 'VIP (17/06/2019)'\"\r\n                    [class.free-service]=\"element.service === 'MIỄN PHÍ - NÂNG VIP'\">{{element.service}}</div> </mat-cell>\r\n              </ng-container>\r\n      \r\n              <ng-container matColumnDef=\"cost\">\r\n                <mat-header-cell *matHeaderCellDef>\r\n                  <p>\r\n                    Chi phí\r\n                    <mat-icon matBadgeColor=\"warn\" matTooltip=\"Xem báo cáo Chi phí\" class=\"info-button\">info</mat-icon>\r\n                  </p>\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.cost}} </mat-cell>\r\n              </ng-container>\r\n      \r\n              <ng-container matColumnDef=\"display\">\r\n                <mat-header-cell *matHeaderCellDef>\r\n                  <p>\r\n                    Hiển thị\r\n                    <mat-icon matBadgeColor=\"warn\" matTooltip=\"Xem báo cáo Hiển thị\" class=\"info-button\">info</mat-icon>\r\n                  </p>\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.display}} </mat-cell>\r\n              </ng-container>\r\n      \r\n              <ng-container matColumnDef=\"click\">\r\n                <mat-header-cell *matHeaderCellDef>\r\n                  <p>\r\n                    Click\r\n                    <mat-icon matBadgeColor=\"warn\" matTooltip=\"Xem báo cáo Click\" class=\"info-button\">info</mat-icon>\r\n                  </p>\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.click}} </mat-cell>\r\n              </ng-container>\r\n      \r\n              <ng-container matColumnDef=\"spamClick\">\r\n                <mat-header-cell *matHeaderCellDef>\r\n                  <p>\r\n                    Click ảo\r\n                    <mat-icon matBadgeColor=\"warn\" matTooltip=\"Xem báo cáo Click ảo\" class=\"info-button\">info</mat-icon>\r\n                  </p>\r\n                </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\"> {{element.spamClick}} </mat-cell>\r\n              </ng-container> -->\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n      </div>\r\n\r\n      <!-- <div class=\"button-area\">\r\n            <button mat-raised-button color=\"accent\" style=\"border-radius: 0\">\r\n              <mat-icon>wifi</mat-icon> KẾT NỐI TÀI KHOẢN GOOGLE ADS\r\n            </button>\r\n          </div> -->\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>"

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

module.exports = "@charset \"UTF-8\";\n.container {\n  width: 100%;\n}\n.container .title1 {\n  padding: 134px 20px 30px 0px;\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n}\n.container .inner .website-list {\n  width: 100%;\n  max-height: 250px;\n  overflow: auto;\n  border-left: 0.5px solid #d2d2d2;\n  border-radius: 5px;\n  box-shadow: 1px 1px 4px silver;\n  padding: 10px;\n}\n.container .inner .caution {\n  font-size: 12px;\n  color: gray;\n}\n.container .inner .vip-icon {\n  height: 18px;\n  width: 18px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .inner .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n  transition: 0.2s;\n}\n.container .inner .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .add-domain-button {\n  width: 40%;\n  text-align: left;\n  padding-left: 0;\n  width: 100%;\n}\n.container .inner .add-domain-button mat-icon {\n  font-size: 22px;\n}\n.container .inner .table-container {\n  box-shadow: 1px 1px 4px silver;\n  background-color: white;\n  overflow: auto;\n}\n.container .inner .table-container li {\n  transition: 0.2s;\n  height: 30px;\n}\n.container .inner .table-container li:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .table-container .ads-account {\n  font-weight: bold;\n  margin-right: 10px;\n  display: inline-block;\n  width: 100px;\n}\n.container .inner .table-container mat-table {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .table-container ​mat-header-cell,\n.container .inner .table-container mat-cell {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .table-container mat-header-cell,\n.container .inner .table-container mat-cell {\n  justify-content: left;\n}\n.container .inner .table-container mat-header-cell:nth-child(1),\n.container .inner .table-container mat-cell:nth-child(1) {\n  flex: 0 0 8%;\n}\n.container .inner .table-container mat-header-cell:nth-child(2),\n.container .inner .table-container mat-cell:nth-child(2) {\n  flex: 0 0 12%;\n}\n.container .inner .table-container mat-header-cell:nth-child(3),\n.container .inner .table-container mat-cell:nth-child(3) {\n  flex: 0 0 31%;\n}\n.container .inner .table-container mat-header-cell:nth-child(4),\n.container .inner .table-container mat-cell:nth-child(4) {\n  justify-content: center;\n  flex: 0 0 12%;\n}\n.container .inner .table-container mat-cell:nth-child(5) {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .table-container mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .table-container mat-row {\n  transition: 0.2s;\n}\n.container .inner .table-container mat-row,\n.container .inner .table-container mat-header-row {\n  min-width: 1200px;\n  width: 100%;\n}\n.container .inner .info-button {\n  cursor: pointer;\n}\n.container .inner .vip-service {\n  color: #039be5;\n  font-weight: bold;\n}\n.container .inner .free-service {\n  color: coral;\n  font-weight: bold;\n}\n.container .inner .button-area {\n  padding-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.container .inner .tracking {\n  color: orange;\n}\n.container .inner .tracking-button {\n  color: red;\n}\n.container .inner .tracking-button:disabled {\n  color: gray;\n}\n.container .inner .no-tracking {\n  color: #039be5;\n}\n.container .inner .clear {\n  clear: both;\n}\n.container .inner .footer {\n  padding-top: 15px;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 600px) {\n  .title1 {\n    text-align: center;\n    font-size: 14px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9hZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZHdvcmRzLWFjY291bnQtbGlzdC9DOlxcVXNlcnNcXE1pbmggVHVlXFxEZXNrdG9wXFxjbGlja1xcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGFkd29yZHMtYWNjb3VudC1saXN0XFxhZHdvcmRzLWFjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxXQUFBO0FERUY7QUNBRTtFQUNFLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0tJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QURITjtBQ01JO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURKTjtBQ09JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FETE47QUNRSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0FETk47QUNTSTtFQUNFLCtQQUFBO0VBZ0JBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRHRCTjtBQ3lCSTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUR6Qk47QUM2Qkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRDNCTjtBQzZCTTtFQUNFLGVBQUE7QUQzQlI7QUMrQkk7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRDdCTjtBQytCTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBRDdCUjtBQytCUTtFQUNFLGtDQUFBO0FEN0JWO0FDaUNNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRC9CUjtBQ2tDTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRGhDUjtBQ21DTTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QURqQ1I7QUNvQ007O0VBRUUscUJBQUE7QURsQ1I7QUNxQ007O0VBRUUsWUFBQTtBRG5DUjtBQ3NDTTs7RUFFRSxhQUFBO0FEcENSO0FDdUNNOztFQUVFLGFBQUE7QURyQ1I7QUN3Q007O0VBRUUsdUJBQUE7RUFDQSxhQUFBO0FEdENSO0FDeUNNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRHZDUjtBQzBDTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRHhDUjtBQzJDTTtFQUNFLGdCQUFBO0FEekNSO0FDNENNOztFQUVFLGlCQUFBO0VBQ0EsV0FBQTtBRDFDUjtBQzhDSTtFQUNFLGVBQUE7QUQ1Q047QUMrQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUQ3Q047QUNnREk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUQ5Q047QUNpREk7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBRC9DTjtBQ2tESTtFQUNFLGFBQUE7QURoRE47QUNtREk7RUFDRSxVQUFBO0FEakROO0FDbURNO0VBQ0UsV0FBQTtBRGpEUjtBQ3FESTtFQUNFLGNBQUE7QURuRE47QUNzREk7RUFDRSxXQUFBO0FEcEROO0FDdURJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QURyRE47QUMwREE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsMEJBQUE7RUR2REY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWR3b3Jkcy1hY2NvdW50LWxpc3QvYWR3b3Jkcy1hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZTEge1xuICBwYWRkaW5nOiAxMzRweCAyMHB4IDMwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLndlYnNpdGUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jYXV0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtaWNvbiB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmZyZWUtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAudmlwLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnZpcC1leHBpcmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRkLWRvbWFpbi1idXR0b24ge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkZC1kb21haW4tYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBsaSB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciAuYWRzLWFjY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIOKAi21hdC1oZWFkZXItY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDglO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDAgMTIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xuICBmbGV4OiAwIDAgMzElO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDQpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtY2VsbDpudGgtY2hpbGQoNCkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50YWJsZS1jb250YWluZXIgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGFibGUtY29udGFpbmVyIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnRhYmxlLWNvbnRhaW5lciBtYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbmZvLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC52aXAtc2VydmljZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mcmVlLXNlcnZpY2Uge1xuICBjb2xvcjogY29yYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJ1dHRvbi1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC50cmFja2luZy1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRyYWNraW5nLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm5vLXRyYWNraW5nIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50aXRsZTEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufSIsIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudGl0bGUxIHtcclxuICAgIHBhZGRpbmc6IDEzNHB4IDIwcHggMzBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pbm5lciB7XHJcbiAgICAuYWRkLWFjY291bnQtYnV0dG9uIHtcclxuICAgIH1cclxuXHJcbiAgICAud2Vic2l0ZS1saXN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkICNkMmQyZDI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXV0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAudmlwLWljb24ge1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAuZnJlZS1sYWJlbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0NGI1NDM7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAudmlwLWxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxyXG4gICAgICAgICAgI2ZlZGIzNyAwJSxcclxuICAgICAgICAgICNmZGI5MzEgOCUsXHJcbiAgICAgICAgICAjOWY3OTI4IDMwJSxcclxuICAgICAgICAgICM4YTZlMmYgNDAlLFxyXG4gICAgICAgICAgdHJhbnNwYXJlbnQgODAlXHJcbiAgICAgICAgKSxcclxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcclxuICAgICAgICAgICNmZmZmZmYgMCUsXHJcbiAgICAgICAgICAjZmZmZmFjIDglLFxyXG4gICAgICAgICAgI2QxYjQ2NCAyNSUsXHJcbiAgICAgICAgICAjNWQ0YTFmIDYyLjUlLFxyXG4gICAgICAgICAgIzVkNGExZiAxMDAlXHJcbiAgICAgICAgKTtcclxuICAgICAgY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gICAgICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAudmlwLWV4cGlyYXRpb24ge1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAvL2JhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XHJcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgLy9wYWRkaW5nOiAzcHggNHB4IDNweCA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC1kb21haW4tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHMtYWNjb3VudCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC10YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAg4oCLbWF0LWhlYWRlci1jZWxsLFxyXG4gICAgICBtYXQtY2VsbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsLFxyXG4gICAgICBtYXQtY2VsbCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxyXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZsZXg6IDAgMCA4JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcclxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTIlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDMpLFxyXG4gICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoNCksXHJcbiAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleDogMCAwIDEyJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXJvdyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXJvdyxcclxuICAgICAgbWF0LWhlYWRlci1yb3cge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tYnV0dG9uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52aXAtc2VydmljZSB7XHJcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJlZS1zZXJ2aWNlIHtcclxuICAgICAgY29sb3I6IGNvcmFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWFyZWEge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYWNraW5nIHtcclxuICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAudHJhY2tpbmctYnV0dG9uIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vLXRyYWNraW5nIHtcclxuICAgICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsZWFyIHtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRpdGxlMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











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
        // displayedColumns: string[] = ['task', 'date', 'adwords', 'website', 'service', 'cost', 'display', 'click', 'spamClick'];
        _this.displayedColumns = ['task', 'date', 'adwords', 'accepted', 'website'];
        _this.accounts = [];
        _this.getAccountsDone$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](false);
        _this.isProcessing = false;
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_9__["AdsAccountIdPipe"]();
        return _this;
    }
    AdwordsAccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAccounts();
        var sub = this._sessionService.getAcceptedAdsId()
            .subscribe(function (adsId) {
            if (adsId)
                _this.checkAccountAcceptance(adsId);
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.openRemoveAccountConfirmDialog = function (accountId) {
        var _this = this;
        var openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this.isProcessing = true;
                _this._fuseProgressiveBarService.show();
                var removeAccountSub = _this._adwordsAccountListService.removeAccount(accountId)
                    .subscribe(function (res) {
                    _this.getAccounts();
                    var getAccountDoneSub = _this.getAccountsDone$
                        .subscribe(function (isDone) {
                        if (_this.accounts.length > 0) {
                            if (accountId === _this._sessionService.activeAccountId) {
                                _this._sessionService.setActiveAccountId(_this.accounts[0].id);
                                _this._sessionService.setActiveAdsAccountId(_this.adsAccountIdPipe.transform(_this.accounts[0].adsId));
                                _this._sessionService.setAccountId(_this.accounts[0].id);
                                _this._sessionService.setAdwordId(_this.accounts[0].adsId);
                            }
                        }
                        else {
                            _this._sessionService.setActiveAccountId('');
                            _this._sessionService.setActiveAdsAccountId('');
                            _this._sessionService.setAccountId('');
                            _this._sessionService.setAdwordId('');
                        }
                        _this._fuseNavigationService.reloadNavigation();
                    });
                    _this.subscriptions.push(getAccountDoneSub);
                    setTimeout(function () {
                        _this._fuseNavigationService.reloadNavigation();
                        _this._fuseProgressiveBarService.hide();
                        _this._dialogService._openSuccessDialog({ messages: ['Ngắt kết nối tài khoản Google Ads thành công'] });
                        _this.isProcessing = false;
                    }, 0);
                }, function (error) {
                    _this._fuseProgressiveBarService.hide();
                    _this._dialogService._openErrorDialog(error.error);
                    _this.isProcessing = false;
                });
                _this.subscriptions.push(removeAccountSub);
            }
        });
        this.subscriptions.push(openConfirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.openRemoveWebsiteConfirmDialog = function (websiteId) {
        var _this = this;
        var confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
            .subscribe(function (isAccepted) {
            if (isAccepted) {
                _this._fuseProgressiveBarService.show();
                var sub = _this._adwordsAccountListService.removeWebsite(websiteId)
                    .subscribe(function (res) {
                    _this.getAccounts();
                    setTimeout(function () {
                        _this._fuseProgressiveBarService.hide();
                        _this._dialogService._openSuccessDialog(res);
                    }, 0);
                }, function (error) {
                    if (error.error.messages) {
                        _this._dialogService._openErrorDialog(error.error);
                    }
                    _this._fuseProgressiveBarService.hide();
                });
                _this.subscriptions.push(sub);
            }
        });
        this.subscriptions.push(confirmDialogSub);
    };
    AdwordsAccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountListService.getAccounts()
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.accounts = res.data.accounts;
            _this.getAccountsDone$.next(true);
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this.accounts = [];
            _this.getAccountsDone$.next(true);
        });
        this.subscriptions.push(sub);
    };
    AdwordsAccountListComponent.prototype.navigateToSpamClickReport = function (accountId, adsId) {
        this._sessionService.setActiveAccountId(accountId);
        this._sessionService.setActiveAdsAccountId(this.adsAccountIdPipe.transform(adsId));
        this._sessionService.setAccountId(accountId);
        this._sessionService.setAdwordId(this.adsAccountIdPipe.transform(adsId));
        this._fuseNavigationService.reloadNavigation();
        this._router.navigateByUrl('/bao-cao/click-ao');
    };
    AdwordsAccountListComponent.prototype.navigateToWebsiteManagement = function (accountId, campaignNumber) {
        // if (campaignNumber > 0)
        //   this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
        // else this._dialogService._openErrorDialog({ messages: ['Tài khoản hiện chưa được thêm chiến dịch.'] });
        this._router.navigateByUrl("/quan-ly-website/" + accountId);
    };
    AdwordsAccountListComponent.prototype.checkAccountAcceptance = function (adsId, isConnected) {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
            .subscribe(function (res) {
            _this.getAccounts();
            if (_this.adsAccountIdPipe.transform(adsId) === _this._sessionService.activeAdsAccountId)
                _this._sessionService.setAccountAcceptance(res.data.isConnected);
            setTimeout(function () {
                _this._fuseProgressiveBarService.hide();
                _this._fuseNavigationService.reloadNavigation();
                //this._dialogService._openSuccessDialog({ messages: ['Cập nhật tài khoản Google Ads thành công'] });
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
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