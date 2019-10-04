(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-vip-payment-vip-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/vip-payment/vip-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/vip-payment/vip-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\">\n    HƯỚNG DẪN THANH TOÁN & NÂNG CẤP TÀI KHOẢN <span\n      style=\"color: yellow; font-weight: bolder; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\">VIP</span>\n  </div>\n\n  <div class=\"inner\">\n    <p><span style=\"color: goldenrod; font-weight: bold\">Nâng cấp VIP:</span> Vui lòng lựa thực hiện theo hướng dẫn bên\n      dưới.</p>\n\n    <div class=\"choose-accounts-websites\">\n\n      <div class=\"choose-accounts-websites-main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\"\n        fxLayoutGap=\"40px\" fxLayoutAlign=\"start\">\n\n        <div class=\"accounts\" fxFlex=\"50\">\n          <mat-radio-group aria-labelledby=\"accounts-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedAccount\">\n            <label id=\"accounts-label\">Tài khoản Google Ads của bạn</label>\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let account of accounts\" [value]=\"account.adsId\"\n              (change)=\"onSelectAccount($event)\">\n              <span *ngIf=\"account.isFree == true\">{{account.adsId}}</span>\n              <span *ngIf=\"account.isFree == false\" class=\"vip-account\">\n                <span class=\"vip-account\">{{account.adsId}}</span>\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\"\n                  *ngIf=\"selectedAccount && websites[account.adsId].length > 0\">({{websites[account.adsId][0].expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <span style=\"color: gray\" *ngIf=\"accounts.length === 0 && !isProcessing\">Bạn chưa kết nối tài khoản nào. Vui lòng kết nối <a routerLink=\"/them-tai-khoan-moi\"\n              style=\"text-decoration: underline !important\">tại đây</a>!</span>\n        </div>\n\n        <div class=\"websites\">\n          <mat-radio-group aria-labelledby=\"websites-label\" class=\"example-radio-group\" [(ngModel)]=\"selectedWebsite\">\n            <label id=\"websites-label\">Website của bạn</label>\n            <mat-radio-button class=\"example-radio-button\"\n              *ngFor=\"let website of websites[selectedAccount]; let i = index\" [value]=\"website.domain\"\n              (change)=\"onSelectAccountWebsite(i)\">\n              <a href=\"{{website.domain}}\" target=\"_blank\">{{website.domain}}</a>\n              <span *ngIf=\"website.isExpired === false\">\n                <span class=\"vip-label\" style=\"margin-left: 10px\">VIP</span>\n                <span class=\"vip-expiration\">({{website.expiredAt | date: 'dd/MM/yyyy'}})</span>\n              </span>\n              <span *ngIf=\"website.isExpired === true\" class=\"free-label\" style=\"margin-left: 10px\">FREE</span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <span *ngIf=\"!selectedWebsite && !isProcessing && accounts.length > 0\" style=\"color: gray\">Tài khoản này hiện\n            chưa có website nào.\n            Vui lòng thêm <a [routerLink]=\"['/quan-ly-website', selectedAccountId]\"\n              style=\"text-decoration: underline !important\">tại\n              đây</a>!</span>\n        </div>\n\n      </div>\n\n      <mat-divider></mat-divider>\n\n      <!--<p class=\"payment-title\">Vui lòng lựa chọn hình thức thanh toán</p>-->\n      <!--<p class=\"payment-buttons\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">-->\n      <!--<button mat-raised-button color=\"accent\" matTooltip=\"Sắp ra mắt\" disabled>CHUYỂN KHOẢN-->\n      <!--VCB</button>-->\n      <!--<button mat-raised-button color=\"basic\" matTooltip=\"Sắp ra mắt\" disabled>-->\n      <!--<img src=\"https://seeklogo.net/wp-content/uploads/2015/11/paypal-logo-preview.png\" class=\"paypal-logo\" alt=\"\">-->\n      <!--</button>-->\n      <!--</p>-->\n\n      <div class=\"website-code\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center center\" *ngIf=\"selectedWebsite\">\n        <div class=\"website-code-title\">Vui lòng chuyển khoản theo nội dung sau:</div>\n        <div class=\"website-code-content\" [(ngModel)]=\"selectedWebsiteCode\" ngDefaultControl>{{selectedWebsiteCode}}\n        </div>\n      </div>\n\n      <p class=\"advisement\">\n        Nếu bạn mua <span style=\"color: #039be5; font-weight: bold\">Gói 1 tháng</span>, vui lòng chuyển khoản số tiền\n        <span style=\"color: crimson; font-weight: bold\">500.000\n          VNĐ</span>. Các gói\n        khác vui lòng xem số tiền bên dưới.\n      </p>\n\n    </div>\n\n    <div class=\"instruction\">\n      <p style=\"font-size: 16px; font-weight: bold\">Hướng dẫn</p>\n      <mat-divider></mat-divider>\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon>\n      <span style=\"color: red; font-weight: bold\">\"Chuyển khoản\"</span> theo nội dung bên trên. Hệ\n      thống sẽ tự động kiểm tra và nâng cấp VIP cho bạn.\n      <br>\n      <mat-icon style=\"font-size: 20px; margin-top: 5px\">keyboard_arrow_right</mat-icon> Nếu gói VIP đang còn thời hạn,\n      hệ thống sẽ tự\n      động thêm thời hạn VIP cho bạn.\n    </div>\n\n    <div class=\"packages\">\n      <p class=\"packages-title\">\n        Vui lòng chuyển khoản nâng cấp VIP theo số tiền và thông tin sau\n      </p>\n\n      <mat-table [dataSource]=\"packages\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Gói </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <!-- <img src=\"../../../assets/icons/golden-shield.png\" alt=\"\" class=\"vip-logo\"> -->\n            <span class=\"vip-label\" style=\"margin-right: 10px\">VIP</span>\n            <span style=\"color: #039be5; font-weight: bold\">{{element.name}}</span>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"price\">\n          <mat-header-cell *matHeaderCellDef> Số tiền </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            {{element.price}}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"recommendance\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.recommendance\" style=\"font-weight: bold\">\n              <span *ngIf=\"element.recommendance === 'Khuyên dùng'\" style=\"color: #44b543\">\n                {{element.recommendance}} - {{element.discount}}\n              </span>\n              <span *ngIf=\"element.recommendance === 'Yêu thích'\" style=\"color: deeppink\">\n                {{element.recommendance}} - {{element.discount}}\n              </span>\n              <span *ngIf=\"element.recommendance === 'HOT'\" style=\"color: crimson\">\n                <span class=\"packages-vip-label\"\n                  style=\"background: crimson; color: white; font-weight: bold\">{{element.recommendance}}</span>{{element.discount}}\n              </span>\n            </span>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"packagesCols; sticky: true\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: packagesCols;\"></mat-row>\n      </mat-table>\n\n    </div>\n\n    <div class=\"casher\">\n      <p class=\"casher-title\">Thông tin tài khoản nhận tiền</p>\n      <mat-divider></mat-divider>\n      <ul>\n        <li>\n          <b>Ngân hàng:</b> Vietcombank\n        </li>\n        <li>\n          <b>Chủ tài khoản:</b> Nguyen Binh Long\n        </li>\n        <li>\n          <b>Số tài khoản:</b> 0331000419983\n        </li>\n        <li>\n          <b>Chi nhánh:</b> VCB Chi nhánh Bến Thành Tp.HCM\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding: 142px 30px 35px 30px;\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  background-size: 100% 100%;\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.container .example-radio-button {\n  margin: 5px;\n}\n.container .vip-logo {\n  height: 30px;\n  width: 30px;\n  margin: -5px 10px 0 -5px;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n}\n.container .vip-expiration {\n  text-align: center;\n  margin-left: 5px;\n  color: #039be5;\n  font-weight: bold;\n}\n.container .vip-account {\n  color: goldenrod;\n  font-weight: bold;\n}\n.container .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  padding: 1.5px 4.5px 1.5px 4.5px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px black);\n          filter: drop-shadow(0px 1px 1px black);\n  border-radius: 2px;\n}\n.container .free-label {\n  background: #44b543;\n  color: white;\n  padding: 2px 4px 2px 4px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n  margin-left: 10px;\n  text-shadow: none;\n  -webkit-filter: drop-shadow(0px 1px 1px silver);\n          filter: drop-shadow(0px 1px 1px silver);\n  border-radius: 2px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .choose-accounts-websites {\n  width: 85%;\n  display: table;\n  margin: 0 auto;\n  margin-top: 40px;\n  padding-bottom: 20px;\n  background: white;\n  box-shadow: 1px 1px 4px silver;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main {\n  padding: 35px 0 30px 0;\n  width: 65%;\n  margin: 0 auto;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main ul li {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .choose-accounts-websites-main label {\n  text-align: left;\n  padding: 5px;\n}\n.container .inner .choose-accounts-websites .payment-title {\n  font-weight: bold;\n  text-align: center;\n}\n.container .inner .choose-accounts-websites .payment-buttons {\n  padding-top: 10px;\n}\n.container .inner .choose-accounts-websites .payment-buttons button {\n  height: 45px;\n  width: 200px;\n  border-radius: 0;\n}\n.container .inner .choose-accounts-websites .payment-buttons .paypal-logo {\n  height: 65px;\n  margin-top: -10px;\n  width: 100px;\n}\n.container .inner .choose-accounts-websites .website-code {\n  padding: 10px 0 10px 0;\n}\n.container .inner .choose-accounts-websites .website-code .website-code-content {\n  background: rgba(3, 155, 229, 0.1);\n  color: #039be5;\n  font-weight: bold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 10px;\n  font-size: 16px;\n}\n.container .inner .choose-accounts-websites .advisement {\n  width: 100%;\n  text-align: center;\n}\n.container .inner .instruction {\n  padding-top: 60px;\n}\n.container .inner .packages .packages-title {\n  font-weight: bold;\n  padding-top: 10px;\n}\n.container .inner .packages .packages-vip-label {\n  background: yellow;\n  color: darkblue;\n  padding: 4px 6px 4px 6px;\n  border-radius: 0;\n  font-weight: bolder;\n  margin-right: 10px;\n  font-size: 12px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 1px 1px 2px silver;\n}\n.container .inner .packages mat-table {\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .packages mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .packages mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .packages mat-table mat-row:hover {\n  background: rgba(3, 155, 229, 0.1);\n}\n.container .inner .casher {\n  padding-top: 40px;\n}\n.container .inner .casher .casher-title {\n  font-weight: bold;\n  font-size: 16px;\n}\n.container .inner .casher ul li {\n  padding-top: 5px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites {\n    width: 100%;\n    padding: 15px;\n  }\n  .container .inner .choose-accounts-websites .choose-accounts-websites-main {\n    width: 100%;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons {\n    padding-top: 10px;\n  }\n  .container .inner .choose-accounts-websites .payment-buttons button {\n    width: 150px;\n    font-size: 12px;\n    padding-left: 10px;\n  }\n  .container .inner .instruction {\n    padding-top: 30px;\n  }\n  .container .inner .casher {\n    padding-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3ZpcC1wYXltZW50L3ZpcC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSw2QkFBQTtFQUNBLCtQQUFBO0VBZ0JBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURpQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDZko7QURrQkU7RUFDRSxXQUFBO0FDaEJKO0FEbUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNqQko7QURvQkU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDcEJKO0FEd0JFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLCtQQUFBO0VBZ0JBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGtCQUFBO0FDdENKO0FEeUNFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7QUN2Q0o7QUQwQ0U7RUFDRSxhQUFBO0FDeENKO0FEMENJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ3hDTjtBRDBDTTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUN4Q1I7QUR5Q1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUN2Q1Y7QUR5Q1U7RUFDRSxpQkFBQTtBQ3ZDWjtBRDJDUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ3pDVjtBRDZDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQ1I7QUQ4Q007RUFDRSxpQkFBQTtBQzVDUjtBRDhDUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM1Q1Y7QUQrQ1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDN0NWO0FEaURNO0VBQ0Usc0JBQUE7QUMvQ1I7QURvRFE7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNsRFY7QURzRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNwRFI7QUR3REk7RUFDRSxpQkFBQTtBQ3RETjtBRDBETTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUN4RFI7QUQyRE07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLDhCQUFBO0FDekRSO0FENERNO0VBQ0UsOEJBQUE7QUMxRFI7QUQ0RFE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUMxRFY7QUQ2RFE7RUFDRSxnQkFBQTtBQzNEVjtBRDZEVTtFQUNFLGtDQUFBO0FDM0RaO0FEaUVJO0VBQ0UsaUJBQUE7QUMvRE47QURpRU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUMvRFI7QURtRVE7RUFDRSxnQkFBQTtBQ2pFVjtBRHdFQTtFQUVJO0lBQ0UsYUFBQTtFQ3RFSjtFRHVFSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDckVOO0VEdUVNO0lBQ0UsV0FBQTtFQ3JFUjtFRHdFTTtJQUNFLGlCQUFBO0VDdEVSO0VEd0VRO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ3RFVjtFRDJFSTtJQUNFLGlCQUFBO0VDekVOO0VENEVJO0lBQ0UsaUJBQUE7RUMxRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vdmlwLXBheW1lbnQvdmlwLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLFxuICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAjZmRiOTMxIDglLFxuICAgICAgICAjOWY3OTI4IDMwJSxcbiAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgIHRyYW5zcGFyZW50IDgwJVxuICAgICAgKSxcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsXG4gICAgICAgICNmZmZmZmYgMCUsXG4gICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICNkMWI0NjQgMjUlLFxuICAgICAgICAjNWQ0YTFmIDYyLjUlLFxuICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIH1cblxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG5cbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIC52aXAtbG9nbyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogLTVweCAxMHB4IDAgLTVweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgfVxuXG4gIC52aXAtZXhwaXJhdGlvbiB7XG4gICAgLy9mb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vcGFkZGluZzogM3B4IDRweCAzcHggNHB4O1xuICB9XG5cbiAgLnZpcC1hY2NvdW50IHtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnZpcC1sYWJlbCB7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sXG4gICAgICAgICNmZWRiMzcgMCUsXG4gICAgICAgICNmZGI5MzEgOCUsXG4gICAgICAgICM5Zjc5MjggMzAlLFxuICAgICAgICAjOGE2ZTJmIDQwJSxcbiAgICAgICAgdHJhbnNwYXJlbnQgODAlXG4gICAgICApLFxuICAgICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCxcbiAgICAgICAgI2ZmZmZmZiAwJSxcbiAgICAgICAgI2ZmZmZhYyA4JSxcbiAgICAgICAgI2QxYjQ2NCAyNSUsXG4gICAgICAgICM1ZDRhMWYgNjIuNSUsXG4gICAgICAgICM1ZDRhMWYgMTAwJVxuICAgICAgKTtcbiAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gICAgcGFkZGluZzogMS41cHggNC41cHggMS41cHggNC41cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggYmxhY2spO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuXG4gIC5mcmVlLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxcHggc2lsdmVyKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG5cbiAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMCAzMHB4IDA7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBheW1lbnQtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucGF5bWVudC1idXR0b25zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucGF5cGFsLWxvZ28ge1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndlYnNpdGUtY29kZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG5cbiAgICAgICAgLndlYnNpdGUtY29kZS10aXRsZSB7XG4gICAgICAgIH1cblxuICAgICAgICAud2Vic2l0ZS1jb2RlLWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG4gICAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkdmlzZW1lbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnN0cnVjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB9XG5cbiAgICAucGFja2FnZXMge1xuICAgICAgLnBhY2thZ2VzLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAucGFja2FnZXMtdmlwLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICBjb2xvcjogZGFya2JsdWU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gICAgICB9XG5cbiAgICAgIG1hdC10YWJsZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcblxuICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FzaGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAuY2FzaGVyLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5zdHJ1Y3Rpb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIH1cblxuICAgICAgLmNhc2hlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjZmVkYjM3IDAlLCAjZmRiOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhhNmUyZiA0MCUsIHRyYW5zcGFyZW50IDgwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI2ZmZmZmZiAwJSwgI2ZmZmZhYyA4JSwgI2QxYjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5jb250YWluZXIgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGFpbmVyIC52aXAtbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogLTVweCAxMHB4IDAgLTVweDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCBibGFjayk7XG59XG4uY29udGFpbmVyIC52aXAtZXhwaXJhdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAudmlwLWFjY291bnQge1xuICBjb2xvcjogZ29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nOiAxLjVweCA0LjVweCAxLjVweCA0LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IGJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRhaW5lciAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMXB4IHNpbHZlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB7XG4gIHBhZGRpbmc6IDM1cHggMCAzMHB4IDA7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMtbWFpbiB1bCBsaSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4gbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC5wYXltZW50LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIGJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIC5wYXlwYWwtbG9nbyB7XG4gIGhlaWdodDogNjVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLndlYnNpdGUtY29kZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzIC53ZWJzaXRlLWNvZGUgLndlYnNpdGUtY29kZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuYWR2aXNlbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyAucGFja2FnZXMtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucGFja2FnZXMgLnBhY2thZ2VzLXZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgY29sb3I6IGRhcmtibHVlO1xuICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBhY2thZ2VzIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5wYWNrYWdlcyBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIC5jYXNoZXItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmNhc2hlciB1bCBsaSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAuY2hvb3NlLWFjY291bnRzLXdlYnNpdGVzLW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5jaG9vc2UtYWNjb3VudHMtd2Vic2l0ZXMgLnBheW1lbnQtYnV0dG9ucyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmNob29zZS1hY2NvdW50cy13ZWJzaXRlcyAucGF5bWVudC1idXR0b25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuY2FzaGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"

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