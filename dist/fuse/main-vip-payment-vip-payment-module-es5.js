(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-vip-payment-vip-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/vip-payment/vip-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\">\n    HƯỚNG DẪN THANH TOÁN & NÂNG CẤP TÀI KHOẢN <span\n      style=\"color: yellow; font-weight: bolder; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">VIP</span>\n  </div>\n\n  <div class=\"inner\">\n    <p>Để nâng cấp VIP cho tài khoản Google Ads của bạn, vui lòng\n      lựa thực hiện theo hướng dẫn bên\n      dưới.</p>\n\n    <div class=\"choose-accounts-websites\">\n\n      <div class=\"choose-accounts-websites-main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\"\n        fxLayoutGap=\"40px\" fxLayoutAlign=\"start\">\n\n        <div class=\"accounts\" fxFlex=\"50\">\n          <mat-radio-group aria-labelledby=\"accounts-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedAccount\">\n            <label id=\"accounts-label\">\n              <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggads-icon\">\n              Tài khoản Google Ads của bạn\n            </label>\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let account of accounts\" [value]=\"account.adsId\"\n              (change)=\"onSelectAccount($event)\" fxLayout=\"row\">\n              <span *ngIf=\"account.isFree == true\">{{account.adsId}}</span>\n              <span *ngIf=\"account.isFree == false\" class=\"vip-account\">\n                <span class=\"vip-account\">{{account.adsId}}</span>\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\"\n                  *ngIf=\"selectedAccount && websites[account.adsId].length > 0\">({{websites[account.adsId][0].expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <span style=\"color: gray\" *ngIf=\"accounts.length === 0 && !isProcessing\">Bạn chưa kết nối tài khoản nào. Vui\n            lòng kết nối <a routerLink=\"/them-tai-khoan-moi\" style=\"text-decoration: underline !important\">tại\n              đây</a>!</span>\n        </div>\n\n        <div class=\"websites\">\n          <mat-radio-group aria-labelledby=\"websites-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedWebsite\">\n            <label id=\"websites-label\">Website của tài khoản</label>\n            <mat-radio-button class=\"example-radio-button\"\n              *ngFor=\"let website of websites[selectedAccount]; let i = index\" [value]=\"website.domain\"\n              (change)=\"onSelectAccountWebsite(i)\" fxLayout=\"row\">\n              <a href=\"{{website.domain}}\" target=\"_blank\">{{website.domain}}</a>\n              <span *ngIf=\"website.isExpired === false\">\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\">({{website.expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span>\n              <span *ngIf=\"website.isExpired === true\" class=\"free-label\" style=\"margin-left: 10px\">FREE</span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <span *ngIf=\"!selectedWebsite && !isProcessing && accounts.length > 0\" style=\"color: gray\">Tài khoản này hiện\n            chưa có website nào.\n            Vui lòng thêm <a [routerLink]=\"['/quan-ly-website', selectedAccountId]\"\n              style=\"text-decoration: underline !important\">tại\n              đây</a>!</span>\n        </div>\n\n      </div>\n\n      <mat-divider></mat-divider>\n\n      <!--<p class=\"payment-title\">Vui lòng lựa chọn hình thức thanh toán</p>-->\n      <!--<p class=\"payment-buttons\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">-->\n      <!--<button mat-raised-button color=\"accent\" matTooltip=\"Sắp ra mắt\" disabled>CHUYỂN KHOẢN-->\n      <!--VCB</button>-->\n      <!--<button mat-raised-button color=\"basic\" matTooltip=\"Sắp ra mắt\" disabled>-->\n      <!--<img src=\"https://seeklogo.net/wp-content/uploads/2015/11/paypal-logo-preview.png\" class=\"paypal-logo\" alt=\"\">-->\n      <!--</button>-->\n      <!--</p>-->\n\n      <div class=\"website-code\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\" *ngIf=\"selectedWebsite\">\n        <div class=\"website-code-title\">Vui lòng chuyển khoản theo nội dung sau:</div>\n        <div class=\"website-code-content\" [(ngModel)]=\"selectedWebsiteCode\" ngDefaultControl>{{selectedWebsiteCode}}\n        </div>\n      </div>\n\n      <p class=\"advisement\">\n        Nếu bạn mua <span style=\"color: #039be5; font-weight: bold\">Gói 1 tháng</span>, vui lòng chuyển khoản số tiền\n        <span style=\"color: crimson; font-weight: bold\">500.000\n          VNĐ</span>. Các gói\n        khác vui lòng xem số tiền bên dưới.\n      </p>\n\n    </div>\n\n    <div class=\"instruction\">\n      <p style=\"font-size: 16px; font-weight: bold\">Hướng dẫn</p>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon>\n      <span style=\"color: red; font-weight: bold\">\"Chuyển khoản\"</span> theo nội dung bên trên. Hệ\n      thống sẽ tự động kiểm tra và nâng cấp VIP cho bạn.\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon> Nếu gói VIP đang còn thời hạn,\n      hệ thống sẽ tự\n      động thêm thời hạn VIP cho bạn.\n    </div>\n\n    <div class=\"packages\">\n      <p class=\"packages-title\">\n        Vui lòng chuyển khoản nâng cấp VIP theo số tiền và thông tin sau\n      </p>\n\n      <div class=\"packages-table\">\n        <mat-table [dataSource]=\"packages\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Gói </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <!-- <img src=\"../../../assets/icons/golden-shield.png\" alt=\"\" class=\"vip-logo\"> -->\n              <span class=\"vip-label\" style=\"margin-right: 10px\">VIP</span>\n              <span style=\"color: #039be5; font-weight: bold\">{{element.name}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef> Số tiền </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.price}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"recommendance\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.recommendance\" style=\"font-weight: bold\">\n                <span *ngIf=\"element.recommendance === 'Khuyên dùng'\" style=\"color: #44b543\">\n                  {{element.recommendance}} - {{element.discount}}\n                </span>\n                <span *ngIf=\"element.recommendance === 'Yêu thích'\" style=\"color: deeppink\">\n                  {{element.recommendance}} - {{element.discount}}\n                </span>\n                <span *ngIf=\"element.recommendance === 'HOT'\" style=\"color: crimson\">\n                  <span class=\"packages-vip-label\"\n                    style=\"background: crimson; color: white; font-weight: bold\">{{element.recommendance}}</span>{{element.discount}}\n                </span>\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"packagesCols; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: packagesCols;\"></mat-row>\n        </mat-table>\n      </div>\n\n    </div>\n\n    <div class=\"casher\">\n      <p class=\"casher-title\">Thông tin tài khoản nhận tiền</p>\n      <mat-divider></mat-divider>\n      <ul>\n        <li>\n          <b>Ngân hàng:</b> Vietcombank\n        </li>\n        <li>\n          <b>Chủ tài khoản:</b> Nguyen Binh Long\n        </li>\n        <li>\n          <b>Số tài khoản:</b> 0331000419983\n        </li>\n        <li>\n          <b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding: 94px 30px 27px 30px;\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.container .example-radio-button {\n  margin: 5px;\n}\n.container .ggads-icon {\n  width: 20px;\n  margin-right: 3px;\n}\n.container .vip-title1 {\n  color: goldenrod;\n  font-weight: bold;\n  text-shadow: 0.5px 1px 1.5px gray;\n  margin-right: 3px;\n}\n.container .vip-logo {\n  height: 30px;\n  width: 30px;\n  margin: -5px 10px 0 -5px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .vip-account {\n  color: goldenrod;\n  font-weight: bold;\n}\n.container .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n}\n.container .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .choose-accounts-websites {\n  width: 85%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding-bottom: 20px;\n  background: white;\n  box-shadow: 1px 1px 4px silver;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main {\n  padding: 35px 0 30px 0;\n  width: 65%;\n  margin: 0 auto;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul li {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main label {\n  text-align: left;\n  padding: 5px;\n}\n.container .inner .choose-accounts-websites .payment-title {\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .payment-buttons {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .payment-buttons button {\n  height: 45px;\n  width: 200px;\n  border-radius: 0;\n}\n.container .inner .choose-accounts-websites .payment-buttons .paypal-logo {\n  height: 65px;\n  margin-top: -10px;\n  width: 100px;\n}\n.container .inner .choose-accounts-websites .website-code {\n  padding: 10px 0 10px 0;\n}\n.container .inner .choose-accounts-websites .website-code .website-code-content {\n  background: rgba(3, 155, 229, 0.1);\n  color: #039be5;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n.container .inner .choose-accounts-websites .advisement {\n  width: 100%;\n  text-align: center;\n}\n.container .inner .instruction {\n  padding-top: 60px;\n}\n.container .inner .packages .packages-title {\n  font-weight: bold;\n  padding-top: 10px;\n}\n.container .inner .packages .packages-vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 4px 6px 4px 6px;\n  border-radius: 0;\n  font-weight: bolder;\n  margin-right: 10px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 1px 1px 2px silver;\n}\n.container .inner .packages .packages-table {\n  overflow: auto;\n}\n.container .inner .packages .packages-table mat-table {\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .packages .packages-table mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .packages .packages-table mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .packages .packages-table mat-table mat-row:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .packages .packages-table mat-table mat-header-cell:nth-child(1),\n.container .inner .packages .packages-table mat-table mat-cell:nth-child(1) {\n  flex: 0 0 25%;\n}\n.container .inner .packages .packages-table mat-table mat-header-cell:nth-child(2),\n.container .inner .packages .packages-table mat-table mat-cell:nth-child(2) {\n  flex: 0 0 20%;\n}\n.container .inner .packages .packages-table mat-table mat-header-row,\n.container .inner .packages .packages-table mat-table mat-row {\n  min-width: 700px;\n  width: 100%;\n}\n.container .inner .casher {\n  padding-top: 40px;\n}\n.container .inner .casher .casher-title {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .casher ul li {\n  padding-top: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites {\n    width: 100%;\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites .choose-accounts-websites-main {\n    width: 100%;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons {\n    padding-top: 10px;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons button {\n    width: 150px;\n    font-size: 12px;\n    padding-left: 10px;\n  }\n  .container .inner .instruction {\n    padding-top: 30px;\n  }\n  .container .inner .casher {\n    padding-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtQQUFBO0VBZ0JBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURpQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDZko7QURrQkU7RUFDRSxXQUFBO0FDaEJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDakJKO0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUNsQko7QURxQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ25CSjtBRHNCRTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUN0Qko7QUQwQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDeEJKO0FEMkJFO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxrQkFBQTtBQ3pDSjtBRDRDRTtFQUNFLGFBQUE7QUMxQ0o7QUQ0Q0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDMUNOO0FENENNO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQzFDUjtBRDJDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3pDVjtBRDJDVTtFQUNFLGlCQUFBO0FDekNaO0FENkNRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDM0NWO0FEK0NNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQzdDUjtBRGdETTtFQUNFLGlCQUFBO0FDOUNSO0FEZ0RRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzlDVjtBRGlEUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMvQ1Y7QURtRE07RUFDRSxzQkFBQTtBQ2pEUjtBRHNEUTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ3BEVjtBRHdETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ3REUjtBRDBESTtFQUNFLGlCQUFBO0FDeEROO0FENERNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzFEUjtBRDZETTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7QUMzRFI7QUQ4RE07RUFDRSxjQUFBO0FDNURSO0FENkRRO0VBQ0UsOEJBQUE7QUMzRFY7QUQ2RFU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUMzRFo7QUQ4RFU7RUFDRSxnQkFBQTtBQzVEWjtBRDhEWTtFQUNFLGtDQUFBO0FDNURkO0FEZ0VVOztFQUVFLGFBQUE7QUM5RFo7QURnRVU7O0VBRUUsYUFBQTtBQzlEWjtBRGlFVTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUMvRFo7QURxRUk7RUFDRSxpQkFBQTtBQ25FTjtBRHFFTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ25FUjtBRHVFUTtFQUNFLGdCQUFBO0FDckVWO0FENEVBO0VBRUk7SUFDRSxhQUFBO0VDMUVKO0VEMkVJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUN6RU47RUQyRU07SUFDRSxXQUFBO0VDekVSO0VENEVNO0lBQ0UsaUJBQUE7RUMxRVI7RUQ0RVE7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDMUVWO0VEK0VJO0lBQ0UsaUJBQUE7RUM3RU47RURnRkk7SUFDRSxpQkFBQTtFQzlFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC92aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAubWFpbi10aXRsZSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgI2ZlZGIzNyAwJSxcbiAgICAgICAgI2ZkYjkzMSA4JSxcbiAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICM4YTZlMmYgNDAlLFxuICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxuICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAjZmZmZmFjIDglLFxuICAgICAgICAjZDFiNDY0IDI1JSxcbiAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgIzVkNGExZiAxMDAlXG4gICAgICApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICB9XG5cbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAuZ2dhZHMtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cblxuICAudmlwLXRpdGxlMSB7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMXB4IDEuNXB4IGdyYXk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cblxuICAudmlwLWxvZ28ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW46IC01cHggMTBweCAwIC01cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIH1cblxuICAudmlwLWV4cGlyYXRpb24ge1xuICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvL3BhZGRpbmc6IDNweCA0cHggM3B4IDRweDtcbiAgfVxuXG4gIC52aXAtYWNjb3VudCB7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC52aXAtbGFiZWwge1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxuICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAjZmRiOTMxIDglLFxuICAgICAgICAjOWY3OTI4IDMwJSxcbiAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDgwJVxuICAgICAgKSxcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsXG4gICAgICAgICNmZmZmZmYgMCUsXG4gICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICNkMWI0NjQgMjUlLFxuICAgICAgICAjNWQ0YTFmIDYyLjUlLFxuICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICk7XG4gICAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cblxuICAuZnJlZS1sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDAgMzBweCAwO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYXltZW50LXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBheXBhbC1sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC53ZWJzaXRlLWNvZGUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuXG4gICAgICAgIC53ZWJzaXRlLWNvZGUtdGl0bGUge1xuICAgICAgICB9XG5cbiAgICAgICAgLndlYnNpdGUtY29kZS1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHZpc2VtZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3Rpb24ge1xuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgfVxuXG4gICAgLnBhY2thZ2VzIHtcbiAgICAgIC5wYWNrYWdlcy10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnBhY2thZ2VzLXZpcC1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xuICAgICAgICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICAgICAgfVxuXG4gICAgICAucGFja2FnZXMtdGFibGUge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMiksXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1yb3csXG4gICAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhc2hlciB7XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgLmNhc2hlci10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXltZW50LWJ1dHRvbnMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluc3RydWN0aW9uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXNoZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUge1xuICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC5nZ2Fkcy1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmNvbnRhaW5lciAudmlwLXRpdGxlMSB7XG4gIGNvbG9yOiBnb2xkZW5yb2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMC41cHggMXB4IDEuNXB4IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmNvbnRhaW5lciAudmlwLWxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IC01cHggMTBweCAwIC01cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAudmlwLWV4cGlyYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnZpcC1hY2NvdW50IHtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC52aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmZyZWUtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBzaWx2ZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICBwYWRkaW5nOiAzNXB4IDAgMzBweCAwO1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gdWwgbGkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyAucGF5cGFsLWxvZ28ge1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC53ZWJzaXRlLWNvZGUge1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAud2Vic2l0ZS1jb2RlIC53ZWJzaXRlLWNvZGUtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmFkdmlzZW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy12aXAtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgcGFkZGluZzogNHB4IDZweCA0cHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMjUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtaGVhZGVyLXJvdyxcbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1yb3cge1xuICBtaW4td2lkdGg6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jYXNoZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jYXNoZXIgLmNhc2hlci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHVsIGxpIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jYXNoZXIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG59Il19 */"

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