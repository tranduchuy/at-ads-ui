(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-vip-payment-vip-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/vip-payment/vip-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"main-title\">\r\n    HƯỚNG DẪN THANH TOÁN & NÂNG CẤP TÀI KHOẢN <span\r\n      style=\"color: yellow; font-weight: bolder; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">VIP</span>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <p><span style=\"color: goldenrod; font-weight: bold\">Nâng cấp VIP:</span> Vui lòng lựa thực hiện theo hướng dẫn bên\r\n      dưới.</p>\r\n\r\n    <div class=\"choose-accounts-websites\">\r\n\r\n      <div class=\"choose-accounts-websites-main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\"\r\n        fxLayoutGap=\"40px\" fxLayoutAlign=\"start\">\r\n\r\n        <div class=\"accounts\" fxFlex=\"50\">\r\n          <mat-radio-group aria-labelledby=\"accounts-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedAccount\">\r\n            <label id=\"accounts-label\">Tài khoản Google Ads của bạn</label>\r\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let account of accounts\" [value]=\"account.adsId\"\r\n              (change)=\"onSelectAccount($event)\">\r\n              <span *ngIf=\"account.isFree == true\">{{account.adsId}}</span>\r\n              <span *ngIf=\"account.isFree == false\" class=\"vip-account\">\r\n                <span class=\"vip-account\">{{account.adsId}}</span>\r\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\r\n                <span class=\"vip-expiration\"\r\n                  *ngIf=\"selectedAccount && websites[account.adsId].length > 0\">({{websites[account.adsId][0].expiredAt | date: 'dd/MM/yyyy'}})</span>\r\n              </span>\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <span style=\"color: gray\" *ngIf=\"accounts.length === 0 && !isProcessing\">Bạn chưa kết nối tài khoản nào. Vui lòng kết nối <a routerLink=\"/them-tai-khoan-moi\"\r\n              style=\"text-decoration: underline !important\">tại đây</a>!</span>\r\n        </div>\r\n\r\n        <div class=\"websites\">\r\n          <mat-radio-group aria-labelledby=\"websites-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedWebsite\">\r\n            <label id=\"websites-label\">Website của bạn</label>\r\n            <mat-radio-button class=\"example-radio-button\"\r\n              *ngFor=\"let website of websites[selectedAccount]; let i = index\" [value]=\"website.domain\"\r\n              (change)=\"onSelectAccountWebsite(i)\">\r\n              <a href=\"{{website.domain}}\" target=\"_blank\">{{website.domain}}</a>\r\n              <span *ngIf=\"website.isExpired === false\">\r\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\r\n                <span class=\"vip-expiration\">({{website.expiredAt | date: 'dd/MM/yyyy'}})</span>\r\n              </span>\r\n              <span *ngIf=\"website.isExpired === true\" class=\"free-label\" style=\"margin-left: 10px\">FREE</span>\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <span *ngIf=\"!selectedWebsite && !isProcessing && accounts.length > 0\" style=\"color: gray\">Tài khoản này hiện\r\n            chưa có website nào.\r\n            Vui lòng thêm <a [routerLink]=\"['/quan-ly-website', selectedAccountId]\"\r\n              style=\"text-decoration: underline !important\">tại\r\n              đây</a>!</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n      <!--<p class=\"payment-title\">Vui lòng lựa chọn hình thức thanh toán</p>-->\r\n      <!--<p class=\"payment-buttons\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">-->\r\n      <!--<button mat-raised-button color=\"accent\" matTooltip=\"Sắp ra mắt\" disabled>CHUYỂN KHOẢN-->\r\n      <!--VCB</button>-->\r\n      <!--<button mat-raised-button color=\"basic\" matTooltip=\"Sắp ra mắt\" disabled>-->\r\n      <!--<img src=\"https://seeklogo.net/wp-content/uploads/2015/11/paypal-logo-preview.png\" class=\"paypal-logo\" alt=\"\">-->\r\n      <!--</button>-->\r\n      <!--</p>-->\r\n\r\n      <div class=\"website-code\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\" *ngIf=\"selectedWebsite\">\r\n        <div class=\"website-code-title\">Vui lòng chuyển khoản theo nội dung sau:</div>\r\n        <div class=\"website-code-content\" [(ngModel)]=\"selectedWebsiteCode\" ngDefaultControl>{{selectedWebsiteCode}}\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"advisement\">\r\n        Nếu bạn mua <span style=\"color: #039be5; font-weight: bold\">Gói 1 tháng</span>, vui lòng chuyển khoản số tiền\r\n        <span style=\"color: crimson; font-weight: bold\">500.000\r\n          VNĐ</span>. Các gói\r\n        khác vui lòng xem số tiền bên dưới.\r\n      </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"instruction\">\r\n      <p style=\"font-size: 16px; font-weight: bold\">Hướng dẫn</p>\r\n      <mat-divider></mat-divider>\r\n      <br>\r\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon>\r\n      <span style=\"color: red; font-weight: bold\">\"Chuyển khoản\"</span> theo nội dung bên trên. Hệ\r\n      thống sẽ tự động kiểm tra và nâng cấp VIP cho bạn.\r\n      <br>\r\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon> Nếu gói VIP đang còn thời hạn,\r\n      hệ thống sẽ tự\r\n      động thêm thời hạn VIP cho bạn.\r\n    </div>\r\n\r\n    <div class=\"packages\">\r\n      <p class=\"packages-title\">\r\n        Vui lòng chuyển khoản nâng cấp VIP theo số tiền và thông tin sau\r\n      </p>\r\n\r\n      <mat-table [dataSource]=\"packages\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> Gói </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <!-- <img src=\"../../../assets/icons/golden-shield.png\" alt=\"\" class=\"vip-logo\"> -->\r\n            <span class=\"vip-label\" style=\"margin-right: 10px\">VIP</span>\r\n            <span style=\"color: #039be5; font-weight: bold\">{{element.name}}</span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"price\">\r\n          <mat-header-cell *matHeaderCellDef> Số tiền </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            {{element.price}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"recommendance\">\r\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <span *ngIf=\"element.recommendance\" style=\"font-weight: bold\">\r\n              <span *ngIf=\"element.recommendance === 'Khuyên dùng'\" style=\"color: #44b543\">\r\n                {{element.recommendance}} - {{element.discount}}\r\n              </span>\r\n              <span *ngIf=\"element.recommendance === 'Yêu thích'\" style=\"color: deeppink\">\r\n                {{element.recommendance}} - {{element.discount}}\r\n              </span>\r\n              <span *ngIf=\"element.recommendance === 'HOT'\" style=\"color: crimson\">\r\n                <span class=\"packages-vip-label\"\r\n                  style=\"background: crimson; color: white; font-weight: bold\">{{element.recommendance}}</span>{{element.discount}}\r\n              </span>\r\n            </span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"packagesCols; sticky: true\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: packagesCols;\"></mat-row>\r\n      </mat-table>\r\n\r\n    </div>\r\n\r\n    <div class=\"casher\">\r\n      <p class=\"casher-title\">Thông tin tài khoản nhận tiền</p>\r\n      <mat-divider></mat-divider>\r\n      <ul>\r\n        <li>\r\n          <b>Ngân hàng:</b> Vietcombank\r\n        </li>\r\n        <li>\r\n          <b>Chủ tài khoản:</b> Nguyen Binh Long\r\n        </li>\r\n        <li>\r\n          <b>Số tài khoản:</b> 0331000419983\r\n        </li>\r\n        <li>\r\n          <b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/vip-payment/vip-payment-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/vip-payment/vip-payment-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: VipPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPaymentRoutingModule", function() { return VipPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vip_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vip-payment.component */ "./src/app/main/vip-payment/vip-payment.component.ts");




var VipPaymentRoutingModule = /** @class */ (function () {
    function VipPaymentRoutingModule() {
    }
    VipPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _vip_payment_component__WEBPACK_IMPORTED_MODULE_3__["VipPaymentComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VipPaymentRoutingModule);
    return VipPaymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/vip-payment/vip-payment.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/vip-payment/vip-payment.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding: 142px 30px 35px 30px;\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.container .example-radio-button {\n  margin: 5px;\n}\n.container .vip-logo {\n  height: 30px;\n  width: 30px;\n  margin: -5px 10px 0 -5px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .vip-account {\n  color: goldenrod;\n  font-weight: bold;\n}\n.container .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n}\n.container .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .choose-accounts-websites {\n  width: 85%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding-bottom: 20px;\n  background: white;\n  box-shadow: 1px 1px 4px silver;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main {\n  padding: 35px 0 30px 0;\n  width: 65%;\n  margin: 0 auto;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul li {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main label {\n  text-align: left;\n  padding: 5px;\n}\n.container .inner .choose-accounts-websites .payment-title {\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .payment-buttons {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .payment-buttons button {\n  height: 45px;\n  width: 200px;\n  border-radius: 0;\n}\n.container .inner .choose-accounts-websites .payment-buttons .paypal-logo {\n  height: 65px;\n  margin-top: -10px;\n  width: 100px;\n}\n.container .inner .choose-accounts-websites .website-code {\n  padding: 10px 0 10px 0;\n}\n.container .inner .choose-accounts-websites .website-code .website-code-content {\n  background: rgba(3, 155, 229, 0.1);\n  color: #039be5;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n.container .inner .choose-accounts-websites .advisement {\n  width: 100%;\n  text-align: center;\n}\n.container .inner .instruction {\n  padding-top: 60px;\n}\n.container .inner .packages .packages-title {\n  font-weight: bold;\n  padding-top: 10px;\n}\n.container .inner .packages .packages-vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 4px 6px 4px 6px;\n  border-radius: 0;\n  font-weight: bolder;\n  margin-right: 10px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 1px 1px 2px silver;\n}\n.container .inner .packages mat-table {\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .packages mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .packages mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .packages mat-table mat-row:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .casher {\n  padding-top: 40px;\n}\n.container .inner .casher .casher-title {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .casher ul li {\n  padding-top: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites {\n    width: 100%;\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites .choose-accounts-websites-main {\n    width: 100%;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons {\n    padding-top: 10px;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons button {\n    width: 150px;\n    font-size: 12px;\n    padding-left: 10px;\n  }\n  .container .inner .instruction {\n    padding-top: 30px;\n  }\n  .container .inner .casher {\n    padding-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC9DOlxcVXNlcnNcXE1pbmggVHVlXFxEZXNrdG9wXFxjbGlja1xcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHZpcC1wYXltZW50XFx2aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC92aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7RUFDQSwrUEFBQTtFQWdCQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2RKO0FEaUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2ZKO0FEa0JFO0VBQ0UsV0FBQTtBQ2hCSjtBRG1CRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDakJKO0FEb0JFO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ3BCSjtBRHdCRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUN0Qko7QUR5QkU7RUFDRSwrUEFBQTtFQWdCQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtBQ3RDSjtBRHlDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0FDdkNKO0FEMENFO0VBQ0UsYUFBQTtBQ3hDSjtBRDBDSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUN4Q047QUQwQ007RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDeENSO0FEeUNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDdkNWO0FEeUNVO0VBQ0UsaUJBQUE7QUN2Q1o7QUQyQ1E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUN6Q1Y7QUQ2Q007RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDM0NSO0FEOENNO0VBQ0UsaUJBQUE7QUM1Q1I7QUQ4Q1E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDNUNWO0FEK0NRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzdDVjtBRGlETTtFQUNFLHNCQUFBO0FDL0NSO0FEb0RRO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDbERWO0FEc0RNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDcERSO0FEd0RJO0VBQ0UsaUJBQUE7QUN0RE47QUQwRE07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDeERSO0FEMkRNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSw4QkFBQTtBQ3pEUjtBRDRETTtFQUNFLDhCQUFBO0FDMURSO0FENERRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDMURWO0FENkRRO0VBQ0UsZ0JBQUE7QUMzRFY7QUQ2RFU7RUFDRSxrQ0FBQTtBQzNEWjtBRGlFSTtFQUNFLGlCQUFBO0FDL0ROO0FEaUVNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDL0RSO0FEbUVRO0VBQ0UsZ0JBQUE7QUNqRVY7QUR3RUE7RUFFSTtJQUNFLGFBQUE7RUN0RUo7RUR1RUk7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ3JFTjtFRHVFTTtJQUNFLFdBQUE7RUNyRVI7RUR3RU07SUFDRSxpQkFBQTtFQ3RFUjtFRHdFUTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUN0RVY7RUQyRUk7SUFDRSxpQkFBQTtFQ3pFTjtFRDRFSTtJQUNFLGlCQUFBO0VDMUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5tYWluLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcclxuICAgICAgICAjZmVkYjM3IDAlLFxyXG4gICAgICAgICNmZGI5MzEgOCUsXHJcbiAgICAgICAgIzlmNzkyOCAzMCUsXHJcbiAgICAgICAgIzhhNmUyZiA0MCUsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgODAlXHJcbiAgICAgICksXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcclxuICAgICAgICAjZmZmZmZmIDAlLFxyXG4gICAgICAgICNmZmZmYWMgOCUsXHJcbiAgICAgICAgI2QxYjQ2NCAyNSUsXHJcbiAgICAgICAgIzVkNGExZiA2Mi41JSxcclxuICAgICAgICAjNWQ0YTFmIDEwMCVcclxuICAgICAgKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnZpcC1sb2dvIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAtNXB4IDEwcHggMCAtNXB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XHJcbiAgfVxyXG5cclxuICAudmlwLWV4cGlyYXRpb24ge1xyXG4gICAgLy9mb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xyXG4gICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8vcGFkZGluZzogM3B4IDRweCAzcHggNHB4O1xyXG4gIH1cclxuXHJcbiAgLnZpcC1hY2NvdW50IHtcclxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC52aXAtbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcclxuICAgICAgICAjZmVkYjM3IDAlLFxyXG4gICAgICAgICNmZGI5MzEgOCUsXHJcbiAgICAgICAgIzlmNzkyOCAzMCUsXHJcbiAgICAgICAgIzhhNmUyZiA0MCUsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgODAlXHJcbiAgICAgICksXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcclxuICAgICAgICAjZmZmZmZmIDAlLFxyXG4gICAgICAgICNmZmZmYWMgOCUsXHJcbiAgICAgICAgI2QxYjQ2NCAyNSUsXHJcbiAgICAgICAgIzVkNGExZiA2Mi41JSxcclxuICAgICAgICAjNWQ0YTFmIDEwMCVcclxuICAgICAgKTtcclxuICAgIGNvbG9yOiBsaWdodHllbGxvdztcclxuICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG5cclxuICAuZnJlZS1sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG5cclxuICAuaW5uZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDAgMzBweCAwO1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXltZW50LXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXltZW50LWJ1dHRvbnMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXlwYWwtbG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53ZWJzaXRlLWNvZGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcblxyXG4gICAgICAgIC53ZWJzaXRlLWNvZGUtdGl0bGUge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlYnNpdGUtY29kZS1jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XHJcbiAgICAgICAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmlzZW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnN0cnVjdGlvbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWNrYWdlcyB7XHJcbiAgICAgIC5wYWNrYWdlcy10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYWNrYWdlcy12aXAtbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDZweCA0cHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0LXRhYmxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XHJcblxyXG4gICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0LXJvdyB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXNoZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcbiAgICAgIC5jYXNoZXItdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmlubmVyIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBheW1lbnQtYnV0dG9ucyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmluc3RydWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhc2hlciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC52aXAtbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogLTVweCAxMHB4IDAgLTVweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG59XG4uY29udGFpbmVyIC52aXAtZXhwaXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudmlwLWFjY291bnQge1xuICBjb2xvcjogZ29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRhaW5lciAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XG4gIHBhZGRpbmc6IDM1cHggMCAzMHB4IDA7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB1bCBsaSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIGJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIC5wYXlwYWwtbG9nbyB7XG4gIGhlaWdodDogNjVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLndlYnNpdGUtY29kZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC53ZWJzaXRlLWNvZGUgLndlYnNpdGUtY29kZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuYWR2aXNlbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgY29sb3I6IGRhcmtibHVlO1xuICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIC5jYXNoZXItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB1bCBsaSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/vip-payment/vip-payment.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/vip-payment/vip-payment.component.ts ***!
  \***********************************************************/
/*! exports provided: VipPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPaymentComponent", function() { return VipPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adwords_account_list_adwords_account_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adwords-account-list/adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");






var VipPaymentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VipPaymentComponent, _super);
    function VipPaymentComponent(_adwordsAccountListService, _fuseProgressBarService) {
        var _this = _super.call(this) || this;
        _this._adwordsAccountListService = _adwordsAccountListService;
        _this._fuseProgressBarService = _fuseProgressBarService;
        _this.packagesCols = ['name', 'price', 'recommendance'];
        _this.packages = [
            {
                name: '1 tháng (~30 ngày)',
                price: '500.000 VNĐ',
                recommendance: '',
                discount: ''
            },
            {
                name: '3 tháng (~90 ngày)',
                price: '1.350.000 VNĐ',
                recommendance: 'Khuyên dùng',
                discount: 'Giảm 10%'
            },
            {
                name: '6 tháng (~180 ngày)',
                price: '2.400.000 VNĐ',
                recommendance: 'Yêu thích',
                discount: 'Giảm 20%'
            },
            {
                name: '12 tháng (~365 ngày)',
                price: '3.000.000 VNĐ',
                recommendance: 'HOT',
                discount: 'Giảm 40%'
            },
        ];
        _this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_5__["AdsAccountIdPipe"]();
        _this.accounts = [];
        _this.websites = [];
        _this.selectedAccount = '';
        _this.selectedAccountId = '';
        _this.selectedWebsite = '';
        _this.selectedWebsiteCode = '';
        _this.isProcessing = false;
        return _this;
    }
    VipPaymentComponent.prototype.ngOnInit = function () {
        this.getAccountList();
    };
    VipPaymentComponent.prototype.getAccountList = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        var sub = this._adwordsAccountListService.getAccounts()
            .subscribe(function (res) {
            var data = JSON.parse(JSON.stringify(res.data.accounts));
            _this.accounts = (data || [])
                .map(function (item) {
                return {
                    id: item.id,
                    adsId: _this.adsAccountIdPipe.transform(item.adsId),
                    isFree: item.isFree
                };
            });
            setTimeout(function () {
                if (_this.accounts.length > 0) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var account = data_1[_i];
                        _this.websites[_this.adsAccountIdPipe.transform(account.adsId)] = account.websites;
                    }
                    _this.selectedAccount = _this.accounts[0].adsId;
                    _this.selectedAccountId = _this.accounts.find(function (item) { return item.adsId === _this.selectedAccount; }).id;
                    if (_this.websites[_this.selectedAccount].length > 0) {
                        _this.selectedWebsite = _this.websites[_this.selectedAccount][0].domain;
                        _this.selectedWebsiteCode = _this.websites[_this.selectedAccount][0].code;
                    }
                }
                _this._fuseProgressBarService.hide();
                _this.isProcessing = false;
            }, 0);
        }, function (error) {
            _this._fuseProgressBarService.hide();
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    VipPaymentComponent.prototype.onSelectAccount = function (event) {
        var _this = this;
        this.selectedAccount = event.value;
        this.selectedAccountId = this.accounts.find(function (item) { return item.adsId === _this.selectedAccount; }).id;
        if (this.websites[this.selectedAccount].length > 0) {
            this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
            this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
        }
        else {
            this.selectedWebsite = '';
            this.selectedWebsiteCode = '';
        }
    };
    VipPaymentComponent.prototype.onSelectAccountWebsite = function (accountWebsiteIndex) {
        this.selectedWebsiteCode = this.websites[this.selectedAccount][accountWebsiteIndex].code;
    };
    VipPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vip-payment',
            template: __webpack_require__(/*! raw-loader!./vip-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html"),
            styles: [__webpack_require__(/*! ./vip-payment.component.scss */ "./src/app/main/vip-payment/vip-payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adwords_account_list_adwords_account_list_service__WEBPACK_IMPORTED_MODULE_2__["AdwordsAccountListService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"]])
    ], VipPaymentComponent);
    return VipPaymentComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_4__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/vip-payment/vip-payment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/vip-payment/vip-payment.module.ts ***!
  \********************************************************/
/*! exports provided: VipPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPaymentModule", function() { return VipPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _vip_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vip-payment.component */ "./src/app/main/vip-payment/vip-payment.component.ts");
/* harmony import */ var _vip_payment_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vip-payment-routing.module */ "./src/app/main/vip-payment/vip-payment-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



















var VipPaymentModule = /** @class */ (function () {
    function VipPaymentModule() {
    }
    VipPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_vip_payment_component__WEBPACK_IMPORTED_MODULE_16__["VipPaymentComponent"]],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxGroupModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"],
                _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_12__["SelectTextModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"],
                app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_15__["AdsAccountIdModule"],
                _vip_payment_routing_module__WEBPACK_IMPORTED_MODULE_17__["VipPaymentRoutingModule"]
            ],
            providers: [_vip_payment_component__WEBPACK_IMPORTED_MODULE_16__["VipPaymentComponent"]]
        })
    ], VipPaymentModule);
    return VipPaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-vip-payment-vip-payment-module-es5.js.map