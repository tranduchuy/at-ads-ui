(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"30px\">\n      <div gdArea=\"connect-button\" class=\"connect-button\">\n        <h4><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h4>\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing || disableAllControls\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\"\n            [disabled]=\"isProcessing || disableAllControls\" *ngIf=\"isAccountListShown\"\n            class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"input-side\">\n\n        <h4><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h4>\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\"\n              [isDisabled]=\"isProcessing || disableAllControls\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing || disableAllControls\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"limit-account-notify\" *ngIf=\"disableAllControls && !isProcessing\">\n      <div class=\"limit-account-notify-content\">\n        Số lần kết nối tài khoản Google Ads của bạn đã hết. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại\n          đây</a>\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown\">\n\n      <div class=\"ads-account-list-title\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" style=\"width: 20px; height: 20px; margin-right: 5px\"> VUI\n        LÒNG LỰA CHỌN TÀI\n        KHOẢN\n        GOOGLE ADS CỦA BẠN\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.googleAdId}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{element.googleAdId, adsName: element.name}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button [value]=\"{googleAdId: element.googleAdId, adsName: element.name}\"\n                *ngIf=\"element.availableToConnect\" (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\">\n      <mat-divider></mat-divider>\n      <h4><strong><span class=\"step\">[3]</span> VUI LÒNG ĐỒNG Ý YÊU CẦU KẾT NỐI</strong></h4>\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Truy cập lại tài khoản AdWords của bạn <a\n          href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a> và bấm vào icon ở menu\n        bên\n        trái </p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Sau đó bấm vào <code> NGƯỜI QUẢN LÝ </code> và bấm\n        <code>CHẤP NHẬN</code> (nếu bạn\n        không thấy người quản lý vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <code>CẤP QUYỀN TRUY CẬP</code></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-step3\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h4><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h4>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");




let AddAdwordsAccountsRoutingModule = class AddAdwordsAccountsRoutingModule {
};
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



/***/ }),

/***/ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/add-adwords-accounts/add-adwords-accounts.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n}\n.container .title {\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 94px 30px 27px 30px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #40a5ec;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .limit-account-notify {\n  text-align: center;\n  width: 100%;\n  background: lightyellow;\n  padding: 20px;\n  margin-top: 40px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n}\n.container .inner .ads-account-list {\n  padding-top: 20px;\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: bold;\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background-color: white;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #40a5ec;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: #40a5ec;\n  color: white;\n  font-weight: bold;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-step3 {\n  height: 50%;\n  width: 50%;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n}\n.container .inner .instruction-step {\n  font-size: 16px;\n  padding-top: 20px;\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .instruction-step3 {\n    height: 100%;\n    width: 100%;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSE47QURLTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hWO0FET007RUFDRSxhQUFBO0FDTFI7QURTSTtFQUNFLGNBQUE7QUNQTjtBRFNJO0VBQ0UsYUFBQTtBQ1BOO0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFNNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUFY7QURXVTtFQUNFLFlBQUE7QUNUWjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ1pSO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEa0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsaUJBQUE7QUNqQk47QURtQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNqQlI7QURvQlU7RUFDRSxlQUFBO0FDbEJaO0FEdUJNO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDckJSO0FEd0JNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnRUFBQTtBQ3RCUjtBRHdCUTtFQUNFLGdCQUFBO0FDdEJWO0FEd0JVO0VBQ0UsZ0JBQUE7QUN0Qlo7QUR3Qlk7RUFDRSx5Q0FBQTtBQ3RCZDtBRDBCVTtFQUNFLGNBQUE7QUN4Qlo7QUQyQlU7RUFDRSxhQUFBO0FDekJaO0FENEJVOztFQUVFLGFBQUE7QUMxQlo7QUQ2QlU7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FDM0JaO0FEOEJVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUM1Qlo7QURrQ0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNoQ047QURrQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLHVEQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2Q0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSwyRUFBQTtBQ2hDTjtBRG1DSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDakNOO0FEb0NJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtBQ2xDTjtBRHFDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FDbkNOO0FEd0NBO0VBRUk7SUFDRSxhQUFBO0VDdENKO0VEd0NJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUN0Q047RUR5Q0U7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDdkNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9hZHdvcmQtYmczLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICB9XG5cbiAgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgLmlucHV0LXNpZGUge1xuICAgIH1cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLm1lc3NhZ2UtdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IHRhaG9tYTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1lc3NhZ2UtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAge1xuICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLmxvZ2luV2l0aEdvb2dsZSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgfVxuXG4gICAgICAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5ub3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbWl0LWFjY291bnQtbm90aWZ5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuYWRzLWFjY291bnQtbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgICAgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIHtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGlzYWJsZWQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogc2lsdmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4gICAgICAgICAgbWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MGE1ZWM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xuICAgIH1cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2NnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4ICNGRkZGRkYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAjRkZGRkZGIGluc2V0LCAwIDFweCAzcHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC5pbm5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuaW5zdHJ1Y3Rpb24tc3RlcDMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2Fkd29yZC1iZzMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDk0cHggMzBweCAyN3B4IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB3aWR0aDogMTIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogdGFob21hO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGl0bGUgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b246ZGlzYWJsZWQgaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGltaXQtYWNjb3VudC1ub3RpZnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24gYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBjb2xvcjogIzQwYTVlYztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIC5kaXNhYmxlZC1jZWxsIHtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjNDBhNWVjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmctc2lnbi1pbi1idXR0b24ge1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQ6ICMyZDc3ZjM7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZy1zaWduLWluLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAqL1xuICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtczsgKi9cbiAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMsIGJvcmRlci1jb2xvciAwLjIxOHMsIGJveC1zaGFkb3cgMC4yMThzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNjZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcDMge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggI0ZGRkZGRiBpbnNldCwgMCAxcHggM3B4IHJnYmEoMzQsIDI1LCAyNSwgMC40KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lciAuc3VibWl0LWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/base/editable-form-base.component */ "./src/app/shared/components/base/editable-form-base.component.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fuse/components/navigation/navigation.service */ "./src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");














let AddAdwordsAccountsComponent = class AddAdwordsAccountsComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _fuseNavigationService, _addAdwordsAccountsService, _sessionService, _router, http) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._fuseNavigationService = _fuseNavigationService;
        this._addAdwordsAccountsService = _addAdwordsAccountsService;
        this._sessionService = _sessionService;
        this._router = _router;
        this.http = http;
        this.isConnected = false;
        this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_11__["AdsAccountIdPipe"]();
        this.isProcessing = false;
        this.adsAccounts = [];
        this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.adsAccounts);
    }
    ngOnInit() {
        this.initForm();
        this.googleInit();
        this.checkAccountList();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    loginByGG() {
        this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
    }
    hasValue(value) {
        return value !== null && value !== undefined;
    }
    checkAccountList() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._sessionService.getListAccounts()
            .subscribe(listAccounts => {
            if (listAccounts) {
                if (listAccounts.length === 0) {
                    this.showAccountListByEmail();
                    console.log('check account list');
                    this.disableAllControls = false;
                }
                else {
                    const user = JSON.parse(this._sessionService.user);
                    if (user.licence.type !== 'CUSTOM')
                        this.disableAllControls = true;
                    else
                        this.disableAllControls = false;
                    this._fuseProgressiveBarService.hide();
                    this.isProcessing = false;
                }
            }
        });
        this.subscriptions.push(sub);
    }
    googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].googleAuth2ClientID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email https://www.googleapis.com/auth/adwords'
            });
        });
    }
    showAccountListByEmail() {
        this.checkRefreshToken();
    }
    onSignIn(googleUser) {
        if (googleUser && googleUser['code']) {
            this.http.post('https://www.googleapis.com/oauth2/v4/token', {
                grant_type: 'authorization_code',
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].googleAuth2ClientID,
                client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
                code: googleUser['code'],
                redirect_uri: environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].oauth2RedirectUri
            })
                .subscribe((val) => {
                this._sessionService.setGoogleAccountToken(val['access_token'], val['refresh_token']);
                setTimeout(() => {
                    this.updateAccessTokenRefreshToken();
                }, 500);
            }, response => {
                console.log('POST call in error', response);
            }, () => {
                console.log('The POST observable is now completed.');
            });
        }
        else {
            this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ google không thành công'] });
        }
    }
    selectAccount(event) {
        this.selectedAccount = event.value;
    }
    checkRefreshToken() {
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        const sub = this._addAdwordsAccountsService.checkRefreshToken()
            .subscribe(res => {
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
            this.getAccountsFromGoogleAds();
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
            this.isAccountListShown = false;
            this.loginByGG();
        });
        this.subscriptions.push(sub);
    }
    updateAccessTokenRefreshToken() {
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        const params = this._sessionService.getGoogleAccountToken();
        const sub = this._addAdwordsAccountsService.updateAccessTokenRefreshToken(params)
            .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
            this.getAccountsFromGoogleAds();
        }, (error) => {
            this._dialogService._openErrorDialog(error.error, true);
            this._fuseProgressiveBarService.hide();
            this.isAccountListShown = false;
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    getAccountsFromGoogleAds() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._addAdwordsAccountsService.getAccountsFromGoogleAds()
            .subscribe(res => {
            this.adsAccounts = res.data.googleAds;
            this.adsAccounts = (this.adsAccounts || []).map(item => {
                item.googleAdId = this._adsAccountIdPipe.transform(item.googleAdId);
                return item;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.adsAccounts);
            this._fuseProgressiveBarService.hide();
            this.isAccountListShown = true;
            this.isProcessing = false;
        }, (error) => {
            this.isAccountListShown = false;
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'unauthorized_client') {
                this.loginByGG();
            }
            else {
                this._dialogService._openErrorDialog(error.error, true);
            }
        });
        this.subscriptions.push(sub);
    }
    generateConnectAccountByEmailParam() {
        return {
            adWordId: this.selectedAccount.googleAdId.replace(/\D/g, ''),
            adsName: this.selectedAccount.adsName || ''
        };
    }
    connectAccountByEmail() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const param = this.generateConnectAccountByEmailParam();
        const sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
            .subscribe((res) => {
            this.connectedAccountId = res.data.account._id;
            this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged();
            setTimeout(() => {
                this._fuseNavigationService.reloadNavigation();
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                this._router.navigateByUrl('/gan-tracking/chien-dich');
            }, 2000);
        }, (error) => {
            this.isConnected = false;
            this.connectedAccountId = '';
            this.connectedAdsId = '';
            this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'Không xác định được lỗi') {
                this._dialogService._openErrorDialog({
                    messages: [
                        `Không thể gắn tracking vào tài khoản này!<br> 
Có thể bạn chưa kết nối Google Ads với Appnet Technology <br> 
hoặc tài khoản này đã tồn tại trong hệ thống.
                `
                    ]
                }, true);
            }
            else {
                this._dialogService._openErrorDialog(error.error);
            }
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    completeAccountConnection() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const sub = this._addAdwordsAccountsService.checkAccountAcceptance({
            adWordId: this.connectedAdsId.replace(/\D/g, '')
        }).subscribe(res => {
            if (res.data.isConnected) {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                this._router.navigateByUrl('/gan-tracking/chien-dich');
            }
            else {
                this.isProcessing = false;
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog({ messages: ['Hoàn tất kết nối tài khoản Google Ads thất bại.'] }, true);
            }
        }, (error) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog({ messages: ['Tài khoản Google Ads không tồn tại'] });
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    post() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const params = this.generatePostObject();
        const sub = this._addAdwordsAccountsService.addAdwordsAccount(params)
            .subscribe((res) => {
            this.connectedAccountId = res.data.account._id;
            this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged();
            if (res.data.isRefresh === true) {
                setTimeout(() => {
                    this._fuseNavigationService.reloadNavigation();
                    this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                    this._router.navigateByUrl('/danh-sach-tai-khoan');
                }, 2000);
                return;
            }
            setTimeout(() => {
                this._fuseNavigationService.reloadNavigation();
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.'] });
                this.isAccountListShown = false;
                this.isConnected = true;
                this.isProcessing = false;
            }, 2000);
        }, (error) => {
            this.isConnected = false;
            this.connectedAccountId = '';
            this.connectedAdsId = '';
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    }
    onClickBtnSubmit() {
        this.onSubmit();
    }
    initForm() {
        this.form = this.fb.group({
            adWordId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    generatePostObject() {
        const params = Object.assign({}, this.form.value);
        // required
        params.adWordId = params.adWordId.replace(/\D/g, '');
        return params;
    }
    onPressId(keyCode) {
        return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
    }
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
        app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], AddAdwordsAccountsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _add_adwords_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-adwords-accounts.component */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.component.ts");
/* harmony import */ var _add_adwords_accounts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-adwords-accounts-routing.module */ "./src/app/main/add-adwords-accounts/add-adwords-accounts-routing.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/input-text/input-text.module */ "./src/app/shared/components/input-text/input-text.module.ts");
/* harmony import */ var _shared_components_input_number_input_number_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/input-number/input-number.module */ "./src/app/shared/components/input-number/input-number.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-adwords-accounts.service */ "./src/app/main/add-adwords-accounts/add-adwords-accounts.service.ts");











let AddAdwordsAccountsModule = class AddAdwordsAccountsModule {
};
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
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        ],
        providers: [
            _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AddAdwordsAccountsService"]
        ]
    })
], AddAdwordsAccountsModule);



/***/ })

}]);
//# sourceMappingURL=main-add-adwords-accounts-add-adwords-accounts-module-es2015.js.map