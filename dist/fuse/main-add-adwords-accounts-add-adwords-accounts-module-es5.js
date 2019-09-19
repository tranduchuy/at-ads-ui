(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"title\">\r\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\r\n  </div>\r\n  <div class=\"inner\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\r\n      <div gdArea=\"connect-button\" class=\"connect-button\">\r\n        <h3><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h3>\r\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\r\n          quá\r\n          trình kết nối</p>\r\n        <div class=\"loginWithGoogle\">\r\n\r\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing\"\r\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\r\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\r\n              style=\"margin-right: 8px\">Kết nối nhanh\r\n            bằng\r\n            Gmail</button>\r\n\r\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\" [disabled]=\"isProcessing\"\r\n            *ngIf=\"isAccountListShown\" class=\"disconnect-by-email-button\">\r\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\r\n            bằng Gmail</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div gdArea=\"input-side\" class=\"input-side\">\r\n\r\n        <h3><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h3>\r\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <a\r\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\r\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span>\r\n          là\r\n          ID\r\n          tài khoản Google Ads của bạn</p>\r\n\r\n        <form [formGroup]=\"form\" novalidate>\r\n          <div fxLayout=\"row\">\r\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\r\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\r\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\">\r\n            </app-input-text>\r\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\r\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing\">\r\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\r\n              Kết nối\r\n            </button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown\">\r\n\r\n      <div class=\"ads-account-list-title\">\r\n        VUI LÒNG LỰA CHỌN TÀI KHOẢN GOOGLE ADS CỦA BẠN\r\n      </div>\r\n\r\n      <div class=\"ads-account-list-wrapper\">\r\n\r\n        <mat-table [dataSource]=\"adsAccounts\" class=\"mat-elevation-z8\">\r\n\r\n          <ng-container matColumnDef=\"order\">\r\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\r\n              {{i + 1}}\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"adsId\">\r\n            <mat-header-cell *matHeaderCellDef> Google Ads ID </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\r\n              {{element.googleAdId}}\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> Tên </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\r\n              {{element.name}}\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"selection\">\r\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\r\n\r\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"!element.availableToConnect\"\r\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\r\n\r\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"element.availableToConnect\"\r\n                (change)=\"selectAccount($event)\"></mat-radio-button>\r\n\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n      </div>\r\n\r\n      <p class=\"div-connect-account-button\">\r\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\r\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\r\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\r\n        </button>\r\n      </p>\r\n    </div>\r\n\r\n    <div gdArea=\"content\" *ngIf=\"isConnected\">\r\n      <mat-divider></mat-divider>\r\n      <h3><strong><span class=\"step\">[3]</span> VUI LÒNG ĐỒNG Ý YÊU CẦU KẾT NỐI</strong></h3>\r\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Truy cập lại tài khoản AdWords của bạn <a\r\n          href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a> và bấm vào icon ở menu\r\n        bên\r\n        trái </p>\r\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\"></p>\r\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Sau đó bấm vào <code> NGƯỜI QUẢN LÝ </code> và bấm\r\n        <code>CHẤP NHẬN</code> (nếu bạn\r\n        không thấy người quản lý vui lòng chờ khoảng 5 phút)</p>\r\n      <p class=\"text-center\">\r\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\">\r\n      </p>\r\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\r\n        <code>CẤP QUYỀN TRUY CẬP</code></p>\r\n      <p class=\"text-center\">\r\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-step3\">\r\n      </p>\r\n      <p class=\"text-center\" style=\"padding-top: 20px\">\r\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\" [disabled]=\"isProcessing\"\r\n          (click)=\"completeAccountConnection()\" style=\"border-radius: 0; background-color: #44b543; color: white\">\r\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\r\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\r\n        </button>\r\n\r\n      </p>\r\n      <!-- <div gdArea=\"content\">\r\n            <h3><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h3>\r\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\r\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\r\n              tài khoản Adwords của bạn</p>\r\n          </div> -->\r\n    </div>\r\n  </div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title {\n  background: url('dark-material-bg.jpg');\n  background-size: 100% 100%;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 142px 30px 35px 30px;\n}\n.container .inner {\n  padding: 30px;\n  padding-top: 15px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #039be5;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 0;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .ads-account-list {\n  padding-top: 20px;\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .div-connect-account-button button {\n  border-radius: 0;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  font-weight: bold;\n  font-size: 16px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background-color: white;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #039be5;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-step3 {\n  height: 50%;\n  width: 50%;\n}\n.container .inner .instruction-step {\n  font-size: 16px;\n  padding-top: 20px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .instruction-step3 {\n    height: 100%;\n    width: 100%;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZGQtYWR3b3Jkcy1hY2NvdW50cy9DOlxcVXNlcnNcXE1pbmggVHVlXFxEZXNrdG9wXFxjbGlja1xcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGFkZC1hZHdvcmRzLWFjY291bnRzXFxhZGQtYWR3b3Jkcy1hY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZGQtYWR3b3Jkcy1hY2NvdW50cy9hZGQtYWR3b3Jkcy1hY2NvdW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRElJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hOO0FES007RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSFI7QURLUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNIVjtBRE9NO0VBQ0UsYUFBQTtBQ0xSO0FEU0k7RUFDRSxjQUFBO0FDUE47QURTSTtFQUNFLGFBQUE7QUNQTjtBRFNJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUE47QURTTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUFY7QURXVTtFQUNFLFlBQUE7QUNUWjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ1pSO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEa0JJO0VBQ0UsaUJBQUE7QUNoQk47QURrQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNoQlI7QURrQlE7RUFDRSxnQkFBQTtBQ2hCVjtBRGtCVTtFQUNFLGVBQUE7QUNoQlo7QURxQk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ25CUjtBRHNCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNwQlI7QURzQlE7RUFDRSxnQkFBQTtBQ3BCVjtBRHNCVTtFQUNFLGdCQUFBO0FDcEJaO0FEc0JZO0VBQ0Usd0NBQUE7QUNwQmQ7QUR3QlU7RUFDRSxjQUFBO0FDdEJaO0FEeUJVO0VBQ0UsYUFBQTtBQ3ZCWjtBRDBCVTs7RUFFRSxhQUFBO0FDeEJaO0FEMkJVOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQ3pCWjtBRDRCVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQzFCWjtBRGdDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQzlCTjtBRGdDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLDJFQUFBO0FDOUJOO0FEaUNJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUMvQk47QURrQ0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2hDTjtBRG1DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2pDTjtBRHNDQTtFQUVJO0lBQ0UsYUFBQTtFQ3BDSjtFRHNDSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDcENOO0VEdUNFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ3JDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtYWR3b3Jkcy1hY2NvdW50cy9hZGQtYWR3b3Jkcy1hY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kYXJrLW1hdGVyaWFsLWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcclxuICB9XHJcblxyXG4gIC5pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gICAgLmlucHV0LXNpZGUge1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgIC5tZXNzYWdlLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXN0eWxlOiB0YWhvbWE7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcCB7XHJcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgfVxyXG4gICAgLmJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5XaXRoR29vZ2xlIHtcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpc2Nvbm5lY3QtYnktZW1haWwtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5vdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWRzLWFjY291bnQtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgICAgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggc2lsdmVyO1xyXG5cclxuICAgICAgICBtYXQtdGFibGUge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgICBtYXQtcm93IHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtY2VsbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kaXNhYmxlZC1jZWxsIHtcclxuICAgICAgICAgICAgY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxyXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgZmxleDogMCAwIDEyJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcclxuICAgICAgICAgIG1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmctc2lnbi1pbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyZDc3ZjM7XHJcbiAgICB9XHJcbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAqL1xyXG4gICAgICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xyXG4gICAgICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtczsgKi9cclxuICAgICAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMsIGJvcmRlci1jb2xvciAwLjIxOHMsIGJveC1zaGFkb3cgMC4yMThzO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTY2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnN0cnVjdGlvbi1zdGVwMyB7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnN0cnVjdGlvbi1zdGVwIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAuaW5zdHJ1Y3Rpb24tc3RlcDMge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RhcmstbWF0ZXJpYWwtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNDJweCAzMHB4IDM1cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3VibWl0LWJ1dHRvbiB7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiAycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB3aWR0aDogMTIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogdGFob21hO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGl0bGUgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuc3RlcCB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmJveCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b246ZGlzYWJsZWQgaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiBidXR0b24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbCB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgLmRpc2FibGVkLWNlbGwge1xuICBjb2xvcjogc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmctc2lnbi1pbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgKi9cbiAgLyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgKi9cbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbn1cbi5jb250YWluZXIgLmlubmVyIC50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTY2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXAzIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgLnN1Ym1pdC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"

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