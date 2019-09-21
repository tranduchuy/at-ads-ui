(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-vip-payment-vip-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/vip-payment/vip-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"main-title\">\r\n    HƯỚNG DẪN THANH TOÁN & NÂNG CẤP TÀI KHOẢN <span\r\n      style=\"color: yellow; font-weight: bolder; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">VIP</span>\r\n  </div>\r\n\r\n  <div class=\"inner\">\r\n    <p><span style=\"color: goldenrod; font-weight: bold\">Nâng cấp VIP:</span> Vui lòng lựa thực hiện theo hướng dẫn bên\r\n      dưới.</p>\r\n\r\n    <div class=\"choose-accounts-websites\">\r\n\r\n      <div class=\"choose-accounts-websites-main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\"\r\n        fxLayoutGap=\"40px\" fxLayoutAlign=\"start\">\r\n\r\n        <div class=\"accounts\" fxFlex=\"50\">\r\n          <mat-radio-group aria-labelledby=\"accounts-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedAccount\">\r\n            <label id=\"accounts-label\">Tài khoản Google Ads của bạn</label>\r\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let account of accounts\" [value]=\"account.adsId\"\r\n              (change)=\"onSelectAccount($event)\">\r\n              <span *ngIf=\"account.isFree == true\">{{account.adsId}}</span>\r\n              <span *ngIf=\"account.isFree == false\" class=\"vip-account\">\r\n                <span class=\"vip-account\">{{account.adsId}}</span>\r\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\r\n                <span class=\"vip-expiration\"\r\n                  *ngIf=\"selectedAccount && websites[account.adsId].length > 0\">({{websites[account.adsId][0].expiredAt | date: 'dd/MM/yyyy'}})</span>\r\n              </span>\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div class=\"websites\">\r\n          <mat-radio-group aria-labelledby=\"websites-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedWebsite\">\r\n            <label id=\"websites-label\">Website của bạn</label>\r\n            <mat-radio-button class=\"example-radio-button\"\r\n              *ngFor=\"let website of websites[selectedAccount]; let i = index\" [value]=\"website.domain\"\r\n              (change)=\"onSelectAccountWebsite(i)\">\r\n              <a href=\"{{website.domain}}\" target=\"_blank\">{{website.domain}}</a>\r\n              <span *ngIf=\"website.isExpired === false\">\r\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\r\n                <span class=\"vip-expiration\">({{website.expiredAt | date: 'dd/MM/yyyy'}})</span>\r\n              </span>\r\n              <span *ngIf=\"website.isExpired === true\" class=\"free-label\" style=\"margin-left: 10px\">FREE</span>\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <span *ngIf=\"!selectedWebsite && !isProcessing\" style=\"color: gray\">Tài khoản này hiện chưa có website nào.\r\n            Vui lòng thêm <a [routerLink]=\"['/quan-ly-website', selectedAccountId]\"\r\n              style=\"text-decoration: underline !important\">tại\r\n              đây</a>!</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n      <!--<p class=\"payment-title\">Vui lòng lựa chọn hình thức thanh toán</p>-->\r\n      <!--<p class=\"payment-buttons\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">-->\r\n      <!--<button mat-raised-button color=\"accent\" matTooltip=\"Sắp ra mắt\" disabled>CHUYỂN KHOẢN-->\r\n      <!--VCB</button>-->\r\n      <!--<button mat-raised-button color=\"basic\" matTooltip=\"Sắp ra mắt\" disabled>-->\r\n      <!--<img src=\"https://seeklogo.net/wp-content/uploads/2015/11/paypal-logo-preview.png\" class=\"paypal-logo\" alt=\"\">-->\r\n      <!--</button>-->\r\n      <!--</p>-->\r\n\r\n      <div class=\"website-code\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\" *ngIf=\"selectedWebsite\">\r\n        <div class=\"website-code-title\">Vui lòng chuyển khoản theo nội dung sau:</div>\r\n        <div class=\"website-code-content\" [(ngModel)]=\"selectedWebsiteCode\" ngDefaultControl>{{selectedWebsiteCode}}\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"advisement\">\r\n        Nếu bạn mua <span style=\"color: #039be5; font-weight: bold\">Gói 1 tháng</span>, vui lòng chuyển khoản số tiền\r\n        <span style=\"color: crimson; font-weight: bold\">500.000\r\n          VNĐ</span>. Các gói\r\n        khác vui lòng xem số tiền bên dưới.\r\n      </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"instruction\">\r\n      <p style=\"font-size: 16px; font-weight: bold\">Hướng dẫn</p>\r\n      <mat-divider></mat-divider>\r\n      <br>\r\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon>\r\n      <span style=\"color: red; font-weight: bold\">\"Chuyển khoản\"</span> theo nội dung bên trên. Hệ\r\n      thống sẽ tự động kiểm tra và nâng cấp VIP cho bạn.\r\n      <br>\r\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon> Nếu gói VIP đang còn thời hạn,\r\n      hệ thống sẽ tự\r\n      động thêm thời hạn VIP cho bạn.\r\n    </div>\r\n\r\n    <div class=\"packages\">\r\n      <p class=\"packages-title\">\r\n        Vui lòng chuyển khoản nâng cấp VIP theo số tiền và thông tin sau\r\n      </p>\r\n\r\n      <mat-table [dataSource]=\"packages\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> Gói </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <!-- <img src=\"../../../assets/icons/golden-shield.png\" alt=\"\" class=\"vip-logo\"> -->\r\n            <span class=\"vip-label\" style=\"margin-right: 10px\">VIP</span>\r\n            <span style=\"color: #039be5; font-weight: bold\">{{element.name}}</span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"price\">\r\n          <mat-header-cell *matHeaderCellDef> Số tiền </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            {{element.price}}\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"recommendance\">\r\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <span *ngIf=\"element.recommendance\" style=\"font-weight: bold\">\r\n              <span *ngIf=\"element.recommendance === 'Khuyên dùng'\" style=\"color: #44b543\">\r\n                {{element.recommendance}} - {{element.discount}}\r\n              </span>\r\n              <span *ngIf=\"element.recommendance === 'Yêu thích'\" style=\"color: deeppink\">\r\n                {{element.recommendance}} - {{element.discount}}\r\n              </span>\r\n              <span *ngIf=\"element.recommendance === 'HOT'\" style=\"color: crimson\">\r\n                <span class=\"packages-vip-label\"\r\n                  style=\"background: crimson; color: white; font-weight: bold\">{{element.recommendance}}</span>{{element.discount}}\r\n              </span>\r\n            </span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"packagesCols; sticky: true\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: packagesCols;\"></mat-row>\r\n      </mat-table>\r\n\r\n    </div>\r\n\r\n    <div class=\"casher\">\r\n      <p class=\"casher-title\">Thông tin tài khoản nhận tiền</p>\r\n      <mat-divider></mat-divider>\r\n      <ul>\r\n        <li>\r\n          <b>Ngân hàng:</b> Vietcombank\r\n        </li>\r\n        <li>\r\n          <b>Chủ tài khoản:</b> Nguyen Binh Long\r\n        </li>\r\n        <li>\r\n          <b>Số tài khoản:</b> 0331000419983\r\n        </li>\r\n        <li>\r\n          <b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vip_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vip-payment.component */ "./src/app/main/vip-payment/vip-payment.component.ts");




let VipPaymentRoutingModule = class VipPaymentRoutingModule {
};
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



/***/ }),

/***/ "./src/app/main/vip-payment/vip-payment.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/vip-payment/vip-payment.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding: 142px 30px 35px 30px;\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .main-title .vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 2px 6px 2px 6px;\n  border-radius: 2px;\n  font-weight: bolder;\n  margin-left: 5px;\n  font-size: 14px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.container .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.container .example-radio-button {\n  margin: 5px;\n}\n.container .vip-logo {\n  height: 30px;\n  width: 30px;\n  margin: -5px 10px 0 -5px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .vip-account {\n  color: goldenrod;\n  font-weight: bold;\n}\n.container .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n}\n.container .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .choose-accounts-websites {\n  width: 85%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding-bottom: 20px;\n  background: white;\n  box-shadow: 1px 1px 4px silver;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main {\n  padding: 35px 0 30px 0;\n  width: 65%;\n  margin: 0 auto;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul li {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main label {\n  text-align: left;\n  padding: 5px;\n}\n.container .inner .choose-accounts-websites .payment-title {\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .payment-buttons {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .payment-buttons button {\n  height: 45px;\n  width: 200px;\n  border-radius: 0;\n}\n.container .inner .choose-accounts-websites .payment-buttons .paypal-logo {\n  height: 65px;\n  margin-top: -10px;\n  width: 100px;\n}\n.container .inner .choose-accounts-websites .website-code {\n  padding: 10px 0 10px 0;\n}\n.container .inner .choose-accounts-websites .website-code .website-code-content {\n  background: rgba(3, 155, 229, 0.1);\n  color: #039be5;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n.container .inner .choose-accounts-websites .advisement {\n  width: 100%;\n  text-align: center;\n}\n.container .inner .instruction {\n  padding-top: 60px;\n}\n.container .inner .packages .packages-title {\n  font-weight: bold;\n  padding-top: 10px;\n}\n.container .inner .packages .packages-vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 4px 6px 4px 6px;\n  border-radius: 0;\n  font-weight: bolder;\n  margin-right: 10px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 1px 1px 2px silver;\n}\n.container .inner .packages mat-table {\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .packages mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .packages mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .packages mat-table mat-row:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .casher {\n  padding-top: 40px;\n}\n.container .inner .casher .casher-title {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .casher ul li {\n  padding-top: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites {\n    width: 100%;\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites .choose-accounts-websites-main {\n    width: 100%;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons {\n    padding-top: 10px;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons button {\n    width: 150px;\n    font-size: 12px;\n    padding-left: 10px;\n  }\n  .container .inner .instruction {\n    padding-top: 30px;\n  }\n  .container .inner .casher {\n    padding-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC9DOlxcVXNlcnNcXE1pbmggVHVlXFxEZXNrdG9wXFxjbGlja1xcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHZpcC1wYXltZW50XFx2aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC92aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7RUFDQSwrUEFBQTtFQWdCQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7QUNkTjtBRGtCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNoQko7QURtQkU7RUFDRSxXQUFBO0FDakJKO0FEb0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNsQko7QURxQkU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDckJKO0FEeUJFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLCtQQUFBO0VBZ0JBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGtCQUFBO0FDdkNKO0FEMENFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0U7RUFDRSxhQUFBO0FDekNKO0FEMkNJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ3pDTjtBRDJDTTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUN6Q1I7QUQwQ1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUN4Q1Y7QUQwQ1U7RUFDRSxpQkFBQTtBQ3hDWjtBRDRDUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQzFDVjtBRDhDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUM1Q1I7QUQrQ007RUFDRSxpQkFBQTtBQzdDUjtBRCtDUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM3Q1Y7QURnRFE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDOUNWO0FEa0RNO0VBQ0Usc0JBQUE7QUNoRFI7QURxRFE7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNuRFY7QUR1RE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNyRFI7QUR5REk7RUFDRSxpQkFBQTtBQ3ZETjtBRDJETTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUN6RFI7QUQ0RE07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLDhCQUFBO0FDMURSO0FENkRNO0VBQ0UsOEJBQUE7QUMzRFI7QUQ2RFE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUMzRFY7QUQ4RFE7RUFDRSxnQkFBQTtBQzVEVjtBRDhEVTtFQUNFLGtDQUFBO0FDNURaO0FEa0VJO0VBQ0UsaUJBQUE7QUNoRU47QURrRU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNoRVI7QURvRVE7RUFDRSxnQkFBQTtBQ2xFVjtBRHlFQTtFQUVJO0lBQ0UsYUFBQTtFQ3ZFSjtFRHdFSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDdEVOO0VEd0VNO0lBQ0UsV0FBQTtFQ3RFUjtFRHlFTTtJQUNFLGlCQUFBO0VDdkVSO0VEeUVRO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ3ZFVjtFRDRFSTtJQUNFLGlCQUFBO0VDMUVOO0VENkVJO0lBQ0UsaUJBQUE7RUMzRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vdmlwLXBheW1lbnQvdmlwLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLm1haW4tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMTQycHggMzBweCAzNXB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxyXG4gICAgICAgICNmZWRiMzcgMCUsXHJcbiAgICAgICAgI2ZkYjkzMSA4JSxcclxuICAgICAgICAjOWY3OTI4IDMwJSxcclxuICAgICAgICAjOGE2ZTJmIDQwJSxcclxuICAgICAgICB0cmFuc3BhcmVudCA4MCVcclxuICAgICAgKSxcclxuICAgICAgcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxyXG4gICAgICAgICNmZmZmZmYgMCUsXHJcbiAgICAgICAgI2ZmZmZhYyA4JSxcclxuICAgICAgICAjZDFiNDY0IDI1JSxcclxuICAgICAgICAjNWQ0YTFmIDYyLjUlLFxyXG4gICAgICAgICM1ZDRhMWYgMTAwJVxyXG4gICAgICApO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcclxuXHJcbiAgICAudmlwLWxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA2cHggMnB4IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC52aXAtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbjogLTVweCAxMHB4IDAgLTVweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgLnZpcC1leHBpcmF0aW9uIHtcclxuICAgIC8vZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvL3BhZGRpbmc6IDNweCA0cHggM3B4IDRweDtcclxuICB9XHJcblxyXG4gIC52aXAtYWNjb3VudCB7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudmlwLWxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sXHJcbiAgICAgICAgI2ZlZGIzNyAwJSxcclxuICAgICAgICAjZmRiOTMxIDglLFxyXG4gICAgICAgICM5Zjc5MjggMzAlLFxyXG4gICAgICAgICM4YTZlMmYgNDAlLFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDgwJVxyXG4gICAgICApLFxyXG4gICAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsXHJcbiAgICAgICAgI2ZmZmZmZiAwJSxcclxuICAgICAgICAjZmZmZmFjIDglLFxyXG4gICAgICAgICNkMWI0NjQgMjUlLFxyXG4gICAgICAgICM1ZDRhMWYgNjIuNSUsXHJcbiAgICAgICAgIzVkNGExZiAxMDAlXHJcbiAgICAgICk7XHJcbiAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmZyZWUtbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogIzQ0YjU0MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmlubmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XHJcbiAgICAgICAgcGFkZGluZzogMzVweCAwIDMwcHggMDtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF5bWVudC10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF5bWVudC1idXR0b25zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGF5cGFsLWxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAud2Vic2l0ZS1jb2RlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG5cclxuICAgICAgICAud2Vic2l0ZS1jb2RlLXRpdGxlIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53ZWJzaXRlLWNvZGUtY29udGVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzliZTU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZpc2VtZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5zdHJ1Y3Rpb24ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFja2FnZXMge1xyXG4gICAgICAucGFja2FnZXMtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGFja2FnZXMtdmlwLWxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC10YWJsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xyXG5cclxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1yb3cge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FzaGVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG4gICAgICAuY2FzaGVyLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXltZW50LWJ1dHRvbnMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnN0cnVjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXNoZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUge1xuICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5tYWluLXRpdGxlIC52aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgcGFkZGluZzogMnB4IDZweCAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRhaW5lciAudmlwLWxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IC01cHggMTBweCAwIC01cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAudmlwLWV4cGlyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnZpcC1hY2NvdW50IHtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC52aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmZyZWUtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICBwYWRkaW5nOiAzNXB4IDAgMzBweCAwO1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gdWwgbGkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyAucGF5cGFsLWxvZ28ge1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC53ZWJzaXRlLWNvZGUge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAud2Vic2l0ZS1jb2RlIC53ZWJzaXRlLWNvZGUtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmFkdmlzZW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy12aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgcGFkZGluZzogNHB4IDZweCA0cHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgbWF0LXRhYmxlIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciAuY2FzaGVyLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jYXNoZXIgdWwgbGkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _adwords_account_list_adwords_account_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adwords-account-list/adwords-account-list.service */ "./src/app/main/adwords-account-list/adwords-account-list.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");






let VipPaymentComponent = class VipPaymentComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_4__["PageBaseComponent"] {
    constructor(_adwordsAccountListService, _fuseProgressBarService) {
        super();
        this._adwordsAccountListService = _adwordsAccountListService;
        this._fuseProgressBarService = _fuseProgressBarService;
        this.packagesCols = ['name', 'price', 'recommendance'];
        this.packages = [
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
        this.adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_5__["AdsAccountIdPipe"]();
        this.accounts = [];
        this.websites = [];
        this.selectedAccount = '';
        this.selectedAccountId = '';
        this.selectedWebsite = '';
        this.selectedWebsiteCode = '';
        this.isProcessing = false;
    }
    ngOnInit() {
        this.getAccountList();
    }
    getAccountList() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        const sub = this._adwordsAccountListService.getAccounts()
            .subscribe(res => {
            const data = JSON.parse(JSON.stringify(res.data.accounts));
            this.accounts = (data || [])
                .map(item => {
                return {
                    id: item.id,
                    adsId: this.adsAccountIdPipe.transform(item.adsId),
                    isFree: item.isFree
                };
            });
            setTimeout(() => {
                if (this.accounts.length > 0) {
                    for (const account of data)
                        this.websites[this.adsAccountIdPipe.transform(account.adsId)] = account.websites;
                    if (this.websites[this.selectedAccount].length > 0) {
                        this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
                        this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
                    }
                    this.selectedAccount = this.accounts[0].adsId;
                    this.selectedAccountId = this.accounts.find(item => item.adsId === this.selectedAccount).id;
                }
                this._fuseProgressBarService.hide();
                this.isProcessing = false;
            }, 0);
        }, (error) => {
            this._fuseProgressBarService.hide();
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    onSelectAccount(event) {
        this.selectedAccount = event.value;
        this.selectedAccountId = this.accounts.find(item => item.adsId === this.selectedAccount).id;
        if (this.websites[this.selectedAccount].length > 0) {
            this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
            this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
        }
        else {
            this.selectedWebsite = '';
            this.selectedWebsiteCode = '';
        }
    }
    onSelectAccountWebsite(accountWebsiteIndex) {
        this.selectedWebsiteCode = this.websites[this.selectedAccount][accountWebsiteIndex].code;
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/input-textarea/input-textarea.module */ "./src/app/shared/components/input-textarea/input-textarea.module.ts");
/* harmony import */ var _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/select-text/select-text.module */ "./src/app/shared/components/select-text/select-text.module.ts");
/* harmony import */ var _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/checkbox-group/checkbox-group.module */ "./src/app/shared/components/checkbox-group/checkbox-group.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.module */ "./src/app/shared/pipes/ads-account-id/ads-account-id.module.ts");
/* harmony import */ var _vip_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vip-payment.component */ "./src/app/main/vip-payment/vip-payment.component.ts");
/* harmony import */ var _vip_payment_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vip-payment-routing.module */ "./src/app/main/vip-payment/vip-payment-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



















let VipPaymentModule = class VipPaymentModule {
};
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



/***/ })

}]);
//# sourceMappingURL=main-vip-payment-vip-payment-module-es2015.js.map