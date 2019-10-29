(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-vip-payment-vip-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/vip-payment/vip-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\">\n    HƯỚNG DẪN THANH TOÁN & NÂNG CẤP TÀI KHOẢN <span\n      style=\"color: yellow; font-weight: bolder; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">VIP</span>\n  </div>\n\n  <div class=\"inner\">\n    <p>Để nâng cấp VIP cho tài khoản Google Ads của bạn, vui lòng\n      lựa thực hiện theo hướng dẫn bên\n      dưới.</p>\n\n    <div class=\"choose-accounts-websites\">\n\n      <div class=\"choose-accounts-websites-main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\"\n        fxLayoutGap=\"40px\" fxLayoutAlign=\"start\">\n\n        <div class=\"accounts\" fxFlex=\"50\">\n          <mat-radio-group aria-labelledby=\"accounts-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedAccount\">\n            <label id=\"accounts-label\">\n              <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" class=\"ggads-icon\">\n              Tài khoản Google Ads của bạn\n            </label>\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let account of accounts\" [value]=\"account.adsId\"\n              (change)=\"onSelectAccount($event)\" fxLayout=\"row\">\n              {{account.adsId}}\n              <!-- <span *ngIf=\"account.isFree == true\">{{account.adsId}}</span>\n              <span *ngIf=\"account.isFree == false\" class=\"vip-account\">\n                <span class=\"vip-account\">{{account.adsId}}</span>\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\"\n                  *ngIf=\"selectedAccount && websites[account.adsId].length > 0\">({{websites[account.adsId][0].expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span> -->\n            </mat-radio-button>\n          </mat-radio-group>\n          <span style=\"color: gray\" *ngIf=\"accounts.length === 0 && !isProcessing\">Bạn chưa kết nối tài khoản nào. Vui\n            lòng kết nối <a routerLink=\"/them-tai-khoan-moi\" style=\"text-decoration: underline !important\">tại\n              đây</a></span>\n        </div>\n\n        <div class=\"websites\">\n          <mat-radio-group aria-labelledby=\"websites-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedWebsite\">\n            <label id=\"websites-label\">Website của tài khoản</label>\n            <mat-radio-button class=\"example-radio-button\"\n              *ngFor=\"let website of websites[selectedAccount]; let i = index\" [value]=\"website.domain\"\n              (change)=\"onSelectAccountWebsite(i)\" fxLayout=\"row\">\n              <a href=\"{{website.domain}}\" target=\"_blank\">{{website.domain}}</a>\n              <!-- <span *ngIf=\"website.isExpired === false\">\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\">({{website.expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span>\n              <span *ngIf=\"website.isExpired === true\" class=\"free-label\" style=\"margin-left: 10px\">FREE</span> -->\n            </mat-radio-button>\n          </mat-radio-group>\n          <span *ngIf=\"!selectedWebsite && !isProcessing && accounts.length > 0\" style=\"color: gray\">Tài khoản này hiện\n            chưa có website nào.\n            Vui lòng thêm <a [routerLink]=\"['/quan-ly-website', selectedAccountId]\"\n              style=\"text-decoration: underline !important\">tại\n              đây</a></span>\n        </div>\n\n      </div>\n\n      <mat-divider></mat-divider>\n\n      <!--<p class=\"payment-title\">Vui lòng lựa chọn hình thức thanh toán</p>-->\n      <!--<p class=\"payment-buttons\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">-->\n      <!--<button mat-raised-button color=\"accent\" matTooltip=\"Sắp ra mắt\" disabled>CHUYỂN KHOẢN-->\n      <!--VCB</button>-->\n      <!--<button mat-raised-button color=\"basic\" matTooltip=\"Sắp ra mắt\" disabled>-->\n      <!--<img src=\"https://seeklogo.net/wp-content/uploads/2015/11/paypal-logo-preview.png\" class=\"paypal-logo\" alt=\"\">-->\n      <!--</button>-->\n      <!--</p>-->\n\n      <div class=\"website-code\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\" *ngIf=\"selectedWebsite\">\n        <div class=\"website-code-title\">Vui lòng chuyển khoản theo nội dung sau:</div>\n        <div class=\"website-code-content\" [(ngModel)]=\"selectedWebsiteCode\" ngDefaultControl>{{selectedWebsiteCode}}\n        </div>\n      </div>\n\n      <p class=\"advisement\">\n        Nếu bạn mua <span style=\"color: #039be5; font-weight: bold\">Gói 1 tháng</span>, vui lòng chuyển khoản số tiền\n        <span style=\"color: crimson; font-weight: bold\">500.000\n          VNĐ</span>. Các gói\n        khác vui lòng xem số tiền bên dưới.\n      </p>\n\n    </div>\n\n    <div class=\"instruction\">\n      <p class=\"instruction-title\">Hướng dẫn thanh toán</p>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon>\n      <span style=\"color: red; font-weight: bold\">Chuyển khoản</span> theo nội dung bên trên. Hệ\n      thống sẽ tự động kiểm tra và nâng cấp VIP cho bạn.\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon> Nếu gói VIP đang còn thời hạn,\n      hệ thống sẽ tự\n      động thêm thời hạn VIP cho bạn.\n    </div>\n\n    <div class=\"packages\">\n      <p class=\"packages-title\">\n        Vui lòng chuyển khoản số tiền theo các <span style=\"color: #039be5\">Gói VIP</span> sau đây:\n      </p>\n\n      <div class=\"packages-table\">\n        <mat-table [dataSource]=\"packages\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Gói </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <!-- <img src=\"../../../assets/icons/golden-shield.png\" alt=\"\" class=\"vip-logo\"> -->\n              <span class=\"vip-label\" style=\"margin-right: 10px\">VIP</span>\n              <span style=\"color: #039be5; font-weight: bold\">{{element.name}}</span>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef> Số tiền </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.price}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"recommendance\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.recommendance\" style=\"font-weight: bold\">\n                <span *ngIf=\"element.recommendance === 'Khuyên dùng'\" style=\"color: #44b543\">\n                  {{element.recommendance}} - {{element.discount}}\n                </span>\n                <span *ngIf=\"element.recommendance === 'Yêu thích'\" style=\"color: deeppink\">\n                  {{element.recommendance}} - {{element.discount}}\n                </span>\n                <span *ngIf=\"element.recommendance === 'HOT'\" style=\"color: crimson\">\n                  <span class=\"packages-vip-label\"\n                    style=\"background: crimson; color: white; font-weight: bold\">{{element.recommendance}}</span>{{element.discount}}\n                </span>\n              </span>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"packagesCols; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: packagesCols;\"></mat-row>\n        </mat-table>\n      </div>\n\n    </div>\n\n    <div class=\"casher\">\n      <p class=\"casher-title\">Thông tin tài khoản nhận tiền</p>\n      <mat-divider></mat-divider>\n      <ul>\n        <li>\n          <b>Ngân hàng:</b> Vietcombank\n        </li>\n        <li>\n          <b>Chủ tài khoản:</b> Nguyen Binh Long\n        </li>\n        <li>\n          <b>Số tài khoản:</b> 0331000419983\n        </li>\n        <li>\n          <b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding: 94px 30px 27px 30px;\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.container .example-radio-button {\n  margin: 5px;\n}\n.container .ggads-icon {\n  width: 20px;\n  margin-right: 3px;\n}\n.container .vip-title1 {\n  color: goldenrod;\n  font-weight: bold;\n  text-shadow: 0.5px 1px 1.5px gray;\n  margin-right: 3px;\n}\n.container .vip-logo {\n  height: 30px;\n  width: 30px;\n  margin: -5px 10px 0 -5px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .vip-account {\n  color: goldenrod;\n  font-weight: bold;\n}\n.container .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n}\n.container .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .choose-accounts-websites {\n  width: 85%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding-bottom: 20px;\n  background: white;\n  box-shadow: 1px 1px 4px silver;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main {\n  padding: 35px 0 30px 0;\n  width: 65%;\n  margin: 0 auto;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul li {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main label {\n  text-align: left;\n  padding: 5px;\n}\n.container .inner .choose-accounts-websites .payment-title {\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .payment-buttons {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .payment-buttons button {\n  height: 45px;\n  width: 200px;\n  border-radius: 0;\n}\n.container .inner .choose-accounts-websites .payment-buttons .paypal-logo {\n  height: 65px;\n  margin-top: -10px;\n  width: 100px;\n}\n.container .inner .choose-accounts-websites .website-code {\n  padding: 10px 0 10px 0;\n}\n.container .inner .choose-accounts-websites .website-code .website-code-content {\n  background: rgba(3, 155, 229, 0.1);\n  color: #039be5;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n.container .inner .choose-accounts-websites .advisement {\n  width: 100%;\n  text-align: center;\n}\n.container .inner .instruction {\n  padding-top: 40px;\n}\n.container .inner .instruction .instruction-title {\n  font-size: 18px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .inner .packages .packages-title {\n  font-weight: bold;\n  padding-top: 10px;\n}\n.container .inner .packages .packages-vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 4px 6px 4px 6px;\n  border-radius: 0;\n  font-weight: bolder;\n  margin-right: 10px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 1px 1px 2px silver;\n}\n.container .inner .packages .packages-table {\n  overflow: auto;\n}\n.container .inner .packages .packages-table mat-table {\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .packages .packages-table mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .packages .packages-table mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .packages .packages-table mat-table mat-row:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .packages .packages-table mat-table mat-header-cell:nth-child(1),\n.container .inner .packages .packages-table mat-table mat-cell:nth-child(1) {\n  flex: 0 0 25%;\n}\n.container .inner .packages .packages-table mat-table mat-header-cell:nth-child(2),\n.container .inner .packages .packages-table mat-table mat-cell:nth-child(2) {\n  flex: 0 0 20%;\n}\n.container .inner .packages .packages-table mat-table mat-header-row,\n.container .inner .packages .packages-table mat-table mat-row {\n  min-width: 700px;\n  width: 100%;\n}\n.container .inner .casher {\n  padding-top: 40px;\n}\n.container .inner .casher .casher-title {\n  font-size: 18px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .inner .casher ul li {\n  padding-top: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites {\n    width: 100%;\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites .choose-accounts-websites-main {\n    width: 100%;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons {\n    padding-top: 10px;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons button {\n    width: 150px;\n    font-size: 12px;\n    padding-left: 10px;\n  }\n  .container .inner .instruction {\n    padding-top: 30px;\n  }\n  .container .inner .casher {\n    padding-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLCtQQUFBO0VBZ0JBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURpQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDZko7QURrQkU7RUFDRSxXQUFBO0FDaEJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDakJKO0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUNsQko7QURxQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ25CSjtBRHNCRTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUN0Qko7QUQwQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDeEJKO0FEMkJFO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esa0JBQUE7QUN4Q0o7QUQyQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7RUFDQSxrQkFBQTtBQ3pDSjtBRDRDRTtFQUNFLGFBQUE7QUMxQ0o7QUQ0Q0k7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDMUNOO0FENENNO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQzFDUjtBRDJDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3pDVjtBRDJDVTtFQUNFLGlCQUFBO0FDekNaO0FENkNRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDM0NWO0FEK0NNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQzdDUjtBRGdETTtFQUNFLGlCQUFBO0FDOUNSO0FEZ0RRO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzlDVjtBRGlEUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUMvQ1Y7QURtRE07RUFDRSxzQkFBQTtBQ2pEUjtBRHNEUTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ3BEVjtBRHdETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ3REUjtBRDBESTtFQUNFLGlCQUFBO0FDeEROO0FEMERNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDeERSO0FENkRNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzNEUjtBRDhETTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7QUM1RFI7QUQrRE07RUFDRSxjQUFBO0FDN0RSO0FEOERRO0VBQ0UsOEJBQUE7QUM1RFY7QUQ4RFU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUM1RFo7QUQrRFU7RUFDRSxnQkFBQTtBQzdEWjtBRCtEWTtFQUNFLGtDQUFBO0FDN0RkO0FEaUVVOztFQUVFLGFBQUE7QUMvRFo7QURpRVU7O0VBRUUsYUFBQTtBQy9EWjtBRGtFVTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNoRVo7QURzRUk7RUFDRSxpQkFBQTtBQ3BFTjtBRHNFTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ3BFUjtBRHdFUTtFQUNFLGdCQUFBO0FDdEVWO0FENkVBO0VBRUk7SUFDRSxhQUFBO0VDM0VKO0VENEVJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUMxRU47RUQ0RU07SUFDRSxXQUFBO0VDMUVSO0VENkVNO0lBQ0UsaUJBQUE7RUMzRVI7RUQ2RVE7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDM0VWO0VEZ0ZJO0lBQ0UsaUJBQUE7RUM5RU47RURpRkk7SUFDRSxpQkFBQTtFQy9FTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi92aXAtcGF5bWVudC92aXAtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAubWFpbi10aXRsZSB7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgI2ZlZGIzNyAwJSxcbiAgICAgICAgI2ZkYjkzMSA4JSxcbiAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICM4YTZlMmYgNDAlLFxuICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxuICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAjZmZmZmFjIDglLFxuICAgICAgICAjZDFiNDY0IDI1JSxcbiAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgIzVkNGExZiAxMDAlXG4gICAgICApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICB9XG5cbiAgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAuZ2dhZHMtaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cblxuICAudmlwLXRpdGxlMSB7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMXB4IDEuNXB4IGdyYXk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cblxuICAudmlwLWxvZ28ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW46IC01cHggMTBweCAwIC01cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG4gIH1cblxuICAudmlwLWV4cGlyYXRpb24ge1xuICAgIC8vZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIC8vYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICBjb2xvcjogIzAzOWJlNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvL3BhZGRpbmc6IDNweCA0cHggM3B4IDRweDtcbiAgfVxuXG4gIC52aXAtYWNjb3VudCB7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC52aXAtbGFiZWwge1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxuICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAjZmRiOTMxIDglLFxuICAgICAgICAjOWY3OTI4IDMwJSxcbiAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDgwJVxuICAgICAgKSxcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsXG4gICAgICAgICNmZmZmZmYgMCUsXG4gICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICNkMWI0NjQgMjUlLFxuICAgICAgICAjNWQ0YTFmIDYyLjUlLFxuICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICk7XG4gICAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICAgIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cblxuICAuZnJlZS1sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDAgMzBweCAwO1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYXltZW50LXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBheXBhbC1sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC53ZWJzaXRlLWNvZGUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xuXG4gICAgICAgIC53ZWJzaXRlLWNvZGUtdGl0bGUge1xuICAgICAgICB9XG5cbiAgICAgICAgLndlYnNpdGUtY29kZS1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHZpc2VtZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3Rpb24ge1xuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgIC5pbnN0cnVjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFja2FnZXMge1xuICAgICAgLnBhY2thZ2VzLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAucGFja2FnZXMtdmlwLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICBjb2xvcjogZGFya2JsdWU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wYWNrYWdlcy10YWJsZSB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgyKSxcbiAgICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgZmxleDogMCAwIDIwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLXJvdyxcbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FzaGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAuY2FzaGVyLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucGF5bWVudC1idXR0b25zIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnN0cnVjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2FzaGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5tYWluLXRpdGxlIHtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4uY29udGFpbmVyIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRhaW5lciAuZ2dhZHMtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi5jb250YWluZXIgLnZpcC10aXRsZTEge1xuICBjb2xvcjogZ29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAuNXB4IDFweCAxLjVweCBncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi5jb250YWluZXIgLnZpcC1sb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiAtNXB4IDEwcHggMCAtNXB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbn1cbi5jb250YWluZXIgLnZpcC1leHBpcmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC52aXAtYWNjb3VudCB7XG4gIGNvbG9yOiBnb2xkZW5yb2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudmlwLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDEuNXB4IDQuNXB4IDEuNXB4IDQuNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGFpbmVyIC5mcmVlLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzQ0YjU0MztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggc2lsdmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyB7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHtcbiAgcGFkZGluZzogMzVweCAwIDMwcHggMDtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcy1tYWluIHVsIGxpIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiBsYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LWJ1dHRvbnMgLnBheXBhbC1sb2dvIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAud2Vic2l0ZS1jb2RlIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLndlYnNpdGUtY29kZSAud2Vic2l0ZS1jb2RlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICBjb2xvcjogIzAzOWJlNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5hZHZpc2VtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIC5pbnN0cnVjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgY29sb3I6IGRhcmtibHVlO1xuICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAyNSU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXRhYmxlIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpLFxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDIpIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGFibGUgbWF0LXRhYmxlIG1hdC1oZWFkZXItcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIC5wYWNrYWdlcy10YWJsZSBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIG1pbi13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciAuY2FzaGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB1bCBsaSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"

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
                    this.selectedAccount = this.accounts[0].adsId;
                    this.selectedAccountId = this.accounts.find(item => item.adsId === this.selectedAccount).id;
                    if (this.websites[this.selectedAccount].length > 0) {
                        this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
                        this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
                    }
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