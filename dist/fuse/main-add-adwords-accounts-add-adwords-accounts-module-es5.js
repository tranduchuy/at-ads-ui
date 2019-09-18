(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n      <div gdArea=\"connect-button\" class=\"connect-button\">\n        <h3><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h3>\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\" [disabled]=\"isProcessing\"\n            *ngIf=\"isAccountListShown\" class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"input-side\">\n\n        <h3><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h3>\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown\">\n\n      <div class=\"ads-account-list-title\">\n        VUI LÒNG LỰA CHỌN TÀI KHOẢN GOOGLE ADS CỦA BẠN\n      </div>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"adsAccounts\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef> Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.googleAdId}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"element.availableToConnect\"\n                (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\">\n      <mat-divider></mat-divider>\n      <h3><strong><span class=\"step\">[3]</span> VUI LÒNG ĐỒNG Ý YÊU CẦU KẾT NỐI</strong></h3>\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Truy cập lại tài khoản AdWords của bạn <a\n          href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a> và bấm vào icon ở menu\n        bên\n        trái </p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Sau đó bấm vào <code> NGƯỜI QUẢN LÝ </code> và bấm\n        <code>CHẤP NHẬN</code> (nếu bạn\n        không thấy người quản lý vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <code>CẤP QUYỀN TRUY CẬP</code></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-step3\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\" [disabled]=\"isProcessing\"\n          (click)=\"completeAccountConnection()\" style=\"border-radius: 0; background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h3><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h3>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AddAdwordsAccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsRoutingModule", function() { return AddAdwordsAccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");




var AddAdwordsAccountsRoutingModule = /** @class */ (function () {
    function AddAdwordsAccountsRoutingModule() {
    }
    AddAdwordsAccountsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AddAdwordsAccountsComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddAdwordsAccountsRoutingModule);
    return AddAdwordsAccountsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title {\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 142px 30px 35px 30px;\n}\n.container .inner {\n  padding: 30px;\n  padding-top: 15px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #039be5;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .ads-account-list {\n  padding-top: 20px;\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .div-connect-account-button button {\n  border-radius: 0;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  font-weight: bold;\n  font-size: 16px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background-color: white;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #039be5;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-step3 {\n  height: 50%;\n  width: 50%;\n}\n.container .inner .instruction-step {\n  font-size: 16px;\n  padding-top: 20px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .instruction-step3 {\n    height: 100%;\n    width: 100%;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvV29yay9QZXJzb25hbC9hbnRpLXNwYW0tY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSx1Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0FKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSE47QURLTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hWO0FET007RUFDRSxhQUFBO0FDTFI7QURTSTtFQUNFLGNBQUE7QUNQTjtBRFNJO0VBQ0UsYUFBQTtBQ1BOO0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFNNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEU1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQVjtBRFdVO0VBQ0UsWUFBQTtBQ1RaO0FEY007RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDWlI7QURlTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ2JSO0FEZ0JNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDZFI7QURrQkk7RUFDRSxpQkFBQTtBQ2hCTjtBRGtCTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2hCUjtBRGtCUTtFQUNFLGdCQUFBO0FDaEJWO0FEa0JVO0VBQ0UsZUFBQTtBQ2hCWjtBRHFCTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDbkJSO0FEc0JNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ3BCUjtBRHNCUTtFQUNFLGdCQUFBO0FDcEJWO0FEc0JVO0VBQ0UsZ0JBQUE7QUNwQlo7QURzQlk7RUFDRSx3Q0FBQTtBQ3BCZDtBRHdCVTtFQUNFLGNBQUE7QUN0Qlo7QUR5QlU7RUFDRSxhQUFBO0FDdkJaO0FEMEJVOztFQUVFLGFBQUE7QUN4Qlo7QUQyQlU7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FDekJaO0FENEJVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDMUJaO0FEZ0NJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDOUJOO0FEZ0NJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkVBQUE7QUM5Qk47QURpQ0k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQy9CTjtBRGtDSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDaENOO0FEbUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDakNOO0FEc0NBO0VBRUk7SUFDRSxhQUFBO0VDcENKO0VEc0NJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNwQ047RUR1Q0U7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDckNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0MnB4IDMwcHggMzVweCAzMHB4O1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gICAgLmlucHV0LXNpZGUge1xuICAgIH1cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLm1lc3NhZ2UtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IHRhaG9tYTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2UtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLmxvZ2luV2l0aEdvb2dsZSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgfVxuXG4gICAgICAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5ub3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgIC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kaXNhYmxlZC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbiAgICAgICAgICBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xuICAgIH1cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2NnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAuaW5uZXIge1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTQycHggMzBweCAzNXB4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24ge1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IHRhaG9tYTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uOmRpc2FibGVkIGltZyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLmNvbm5lY3QtYnktZW1haS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLmRpc2Nvbm5lY3QtYnktZW1haWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2NmNDkzYztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAubm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24gYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIC5kaXNhYmxlZC1jZWxsIHtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZy1zaWduLWluLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzJkNzdmMztcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gIC8qIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7ICovXG4gIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zOyAqL1xuICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cywgYm9yZGVyLWNvbG9yIDAuMjE4cywgYm94LXNoYWRvdyAwLjIxOHM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE2NnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcDMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddAdwordsAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsComponent", function() { return AddAdwordsAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/ads-accounts/adwords-accounts.service */ "./src/app/shared/services/ads-accounts/adwords-accounts.service.ts");
















var AddAdwordsAccountsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAdwordsAccountsComponent, _super);
    function AddAdwordsAccountsComponent(_fuseProgressiveBarService, _dialogService, _fuseNavigationService, _addAdwordsAccountsService, _adwordsAccountsService, _sessionService, _router, _fuseSlashScreenService, http, _ngZone, _authService) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._fuseNavigationService = _fuseNavigationService;
        _this._addAdwordsAccountsService = _addAdwordsAccountsService;
        _this._adwordsAccountsService = _adwordsAccountsService;
        _this._sessionService = _sessionService;
        _this._router = _router;
        _this._fuseSlashScreenService = _fuseSlashScreenService;
        _this.http = http;
        _this._ngZone = _ngZone;
        _this._authService = _authService;
        _this.isConnected = false;
        _this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_12__["AdsAccountIdPipe"]();
        _this.isProcessing = false;
        _this.isAccountListShown = false;
        _this.adsAccounts = [];
        _this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        _this.selectedAccount = '';
        return _this;
    }
    AddAdwordsAccountsComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.checkAccountList();
    };
    AddAdwordsAccountsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.googleInit();
        }, 500);
    };
    AddAdwordsAccountsComponent.prototype.loginByGG = function () {
        this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
    };
    AddAdwordsAccountsComponent.prototype.checkAccountList = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._adwordsAccountsService.getAdwordsAccount()
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
        }, function (error) {
            _this.getAdsAccounts();
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].googleAuth2ClientID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email https://www.googleapis.com/auth/adwords'
            });
        });
    };
    AddAdwordsAccountsComponent.prototype.showAccountListByEmail = function () {
        var googleAccountToken = this._sessionService.getGoogleAccountToken();
        if (!googleAccountToken.accessToken || !googleAccountToken.refreshToken)
            this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
        else
            this.getAdsAccounts();
    };
    AddAdwordsAccountsComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        if (googleUser && googleUser['code']) {
            this.http.post('https://www.googleapis.com/oauth2/v4/token', {
                grant_type: 'authorization_code',
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].googleAuth2ClientID,
                client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
                code: googleUser['code'],
                redirect_uri: environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].oauth2RedirectUri
            })
                .subscribe(function (val) {
                _this._sessionService.setGoogleAccountToken(val['access_token'], val['refresh_token']);
                setTimeout(function () {
                    _this.getAdsAccounts();
                }, 500);
            }, function (response) {
                console.log('POST call in error', response);
            }, function () {
                console.log('The POST observable is now completed.');
            });
        }
        else {
            this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ google không thành công'] });
        }
    };
    AddAdwordsAccountsComponent.prototype.selectAccount = function (event) {
        this.selectedAccount = event.value;
    };
    AddAdwordsAccountsComponent.prototype.getAdsAccounts = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var googleAccountToken = this._sessionService.getGoogleAccountToken();
        var sub = this._addAdwordsAccountsService.getAdsAccounts(googleAccountToken)
            .subscribe(function (res) {
            _this.adsAccounts = res.data.googleAds;
            _this.adsAccounts = (_this.adsAccounts || []).map(function (item) {
                item.googleAdId = _this._adsAccountIdPipe.transform(item.googleAdId);
                return item;
            });
            _this._fuseProgressiveBarService.hide();
            _this.isAccountListShown = true;
            _this.isProcessing = false;
        }, function (error) {
            _this.isAccountListShown = false;
            _this.isProcessing = false;
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'unauthorized_client')
                _this.loginByGG();
            else
                _this._dialogService._openErrorDialog(error.error, true);
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.generateConnectAccountByEmailParam = function () {
        return { adWordId: this.selectedAccount.replace(/[^a-zA-Z0-9 ]/g, '') };
    };
    AddAdwordsAccountsComponent.prototype.connectAccountByEmail = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var param = this.generateConnectAccountByEmailParam();
        var sub = this._addAdwordsAccountsService.addAdwordsAccount(param)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openInfoDialog(res.messages[0]);
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            _this._sessionService.setActiveAccountId(_this.connectedAccountId);
            _this._sessionService.setActiveAdsAccountId(_this.connectedAdsId);
            _this._sessionService.setAccountId(_this.connectedAccountId);
            _this._sessionService.setAdwordId(_this.connectedAdsId);
            _this._fuseNavigationService.reloadNavigation();
            if (res.data.isRefresh) {
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
                return;
            }
            _this.isConnected = true;
            _this.selectedAccount = '';
            _this.getAdsAccounts();
            _this.isProcessing = false;
        }, function (error) {
            _this.isConnected = false;
            _this.connectedAccountId = '';
            _this.connectedAdsId = '';
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'Không xác định được lỗi')
                _this._dialogService._openErrorDialog({ messages: ['Không thể gắn tracking vào tài khoản này!<br> Có thể bạn chưa kết nối Google Ads với Appnet Technology <br> hoặc tài khoản này đã tồn tại trong hệ thống.'] }, true);
            else
                _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.completeAccountConnection = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.checkAccountAcceptance({
            adWordId: this.connectedAdsId.replace(/\D+/g, '')
        })
            .subscribe(function (res) {
            if (res.data.isConnected) {
                _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                setTimeout(function () {
                    // this._sessionService.setActiveAccountId(this.connectedAccountId);
                    // this._sessionService.setActiveAdsAccountId(this.connectedAdsId);
                    // this._sessionService.setAccountId(this.connectedAccountId);
                    // this._sessionService.setAdwordId(this.connectedAdsId);
                    // this._fuseNavigationService.reloadNavigation();
                    _this._fuseProgressiveBarService.hide();
                    _this._router.navigateByUrl('/gan-tracking/chien-dich');
                }, 2000);
            }
            else {
                _this.isProcessing = false;
                _this._fuseProgressiveBarService.hide();
                _this._dialogService._openErrorDialog({ messages: ['Hoàn tất kết nối tài khoản Google Ads thất bại.'] }, true);
            }
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog({ messages: ['Tài khoản Google Ads không tồn tại'] });
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.post = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var params = this.generatePostObject();
        var sub = this._addAdwordsAccountsService.addAdwordsAccount(params)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openInfoDialog(res.messages[0]);
            if (res.data.isRefresh) {
                _this._fuseNavigationService.reloadNavigation();
                _this._router.navigateByUrl('/danh-sach-tai-khoan');
                return;
            }
            _this.isConnected = true;
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            _this._sessionService.setActiveAccountId(_this.connectedAccountId);
            _this._sessionService.setActiveAdsAccountId(_this.connectedAdsId);
            _this._sessionService.setAccountId(_this.connectedAccountId);
            _this._sessionService.setAdwordId(_this.connectedAdsId);
            _this._fuseNavigationService.reloadNavigation();
            if (_this.isAccountListShown)
                _this.getAdsAccounts();
            _this.isProcessing = false;
        }, function (error) {
            _this.isConnected = false;
            _this.connectedAccountId = '';
            _this.connectedAdsId = '';
            _this._fuseProgressiveBarService.hide();
            _this._dialogService._openErrorDialog(error.error);
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.onClickBtnSubmit = function () {
        this.onSubmit();
    };
    AddAdwordsAccountsComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            adWordId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    AddAdwordsAccountsComponent.prototype.generatePostObject = function () {
        var params = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value);
        // required
        params.adWordId = params.adWordId.replace(/[^a-zA-Z0-9 ]/g, '');
        return params;
    };
    AddAdwordsAccountsComponent.prototype.onPressId = function (keyCode) {
        return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
    };
    AddAdwordsAccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-adwords-accounts',
            template: __webpack_require__(/*! raw-loader!./add-adwords-accounts.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html"),
            styles: [__webpack_require__(/*! ./add-adwords-accounts.component.scss */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["FuseProgressBarService"],
            _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__["FuseNavigationService"],
            _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AddAdwordsAccountsService"],
            app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_15__["AdwordsAccountsService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_11__["FuseSplashScreenService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]])
    ], AddAdwordsAccountsComponent);
    return AddAdwordsAccountsComponent;
}(_shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"]));



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddAdwordsAccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsModule", function() { return AddAdwordsAccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");
/* harmony import */ var _add_adwords_accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-adwords-accounts-routing.module */ "./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_number_input_number_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/input-number/input-number.module */ "./src/app/shared/components/input-number/input-number.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");











var AddAdwordsAccountsModule = /** @class */ (function () {
    function AddAdwordsAccountsModule() {
    }
    AddAdwordsAccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AddAdwordsAccountsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_adwords_accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddAdwordsAccountsRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _shared_components_input_number_input_number_module__WEBPACK_IMPORTED_MODULE_8__["InputNumberModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            ],
            providers: [
                _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AddAdwordsAccountsService"]
            ]
        })
    ], AddAdwordsAccountsModule);
    return AddAdwordsAccountsModule;
}());



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts ***!
  \***************************************************************************/
/*! exports provided: AddAdwordsAccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdwordsAccountsService", function() { return AddAdwordsAccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddAdwordsAccountsService = /** @class */ (function () {
    function AddAdwordsAccountsService(_http) {
        this._http = _http;
    }
    AddAdwordsAccountsService.prototype.addAdwordsAccount = function (param) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.addAccount, param);
    };
    AddAdwordsAccountsService.prototype.getAccounts = function () {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    };
    AddAdwordsAccountsService.prototype.getAdwordsAccountDetail = function (accountId) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    };
    AddAdwordsAccountsService.prototype.checkAccountAcceptance = function (params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    };
    AddAdwordsAccountsService.prototype.getAdsAccounts = function (params) {
        var url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAdsAccounts.replace('{accessToken}', params.accessToken);
        url = url.replace('{refreshToken}', params.refreshToken);
        return this._http.get(url);
    };
    AddAdwordsAccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddAdwordsAccountsService);
    return AddAdwordsAccountsService;
}());



/***/ })

}]);
//# sourceMappingURL=main-add-adwords-accounts-add-adwords-accounts-module-es5.js.map