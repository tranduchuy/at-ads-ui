(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n      <div gdArea=\"connect-button\" class=\"connect-button\">\n        <h3><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h3>\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\" [disabled]=\"isProcessing\"\n            *ngIf=\"isAccountListShown\" class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"input-side\">\n\n        <h3><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h3>\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown\">\n\n      <div class=\"ads-account-list-title\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\" style=\"width: 20px; height: 20px\"> VUI LÒNG LỰA CHỌN TÀI KHOẢN\n        GOOGLE ADS CỦA BẠN\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.googleAdId}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button value=\"{{element.googleAdId}}\" *ngIf=\"element.availableToConnect\"\n                (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\">\n      <mat-divider></mat-divider>\n      <h3><strong><span class=\"step\">[3]</span> VUI LÒNG ĐỒNG Ý YÊU CẦU KẾT NỐI</strong></h3>\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Truy cập lại tài khoản AdWords của bạn <a\n          href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a> và bấm vào icon ở menu\n        bên\n        trái </p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Sau đó bấm vào <code> NGƯỜI QUẢN LÝ </code> và bấm\n        <code>CHẤP NHẬN</code> (nếu bạn\n        không thấy người quản lý vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <code>CẤP QUYỀN TRUY CẬP</code></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-step3\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h3><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h3>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .title {\n  background: url('adword-bg3.jpg');\n  background-size: 100% 100%;\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 94px 30px 27px 30px;\n}\n.container .inner {\n  padding: 30px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #039be5;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .ads-account-list {\n  padding-top: 20px;\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  font-weight: bold;\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  background-color: white;\n  box-shadow: 1px 1px 4px silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  transition: 0.2s;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.1);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #039be5;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: flex;\n  justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: #039be5;\n  color: white;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-step3 {\n  height: 50%;\n  width: 50%;\n}\n.container .inner .instruction-step {\n  font-size: 16px;\n  padding-top: 20px;\n}\n@media screen and (max-width: 600px) {\n  .container .inner {\n    padding: 15px;\n  }\n  .container .inner .instruction-step3 {\n    height: 100%;\n    width: 100%;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FESUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSE47QURLTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIUjtBREtRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hWO0FET007RUFDRSxhQUFBO0FDTFI7QURTSTtFQUNFLGNBQUE7QUNQTjtBRFNJO0VBQ0UsYUFBQTtBQ1BOO0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNQTjtBRFNNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUFY7QURXVTtFQUNFLFlBQUE7QUNUWjtBRGNNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ1pSO0FEZU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNiUjtBRGdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEa0JJO0VBQ0UsaUJBQUE7QUNoQk47QURrQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNoQlI7QURtQlU7RUFDRSxlQUFBO0FDakJaO0FEc0JNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BCUjtBRHVCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNyQlI7QUR1QlE7RUFDRSxnQkFBQTtBQ3JCVjtBRHVCVTtFQUNFLGdCQUFBO0FDckJaO0FEdUJZO0VBQ0Usd0NBQUE7QUNyQmQ7QUR5QlU7RUFDRSxjQUFBO0FDdkJaO0FEMEJVO0VBQ0UsYUFBQTtBQ3hCWjtBRDJCVTs7RUFFRSxhQUFBO0FDekJaO0FENEJVOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQzFCWjtBRDZCVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQzNCWjtBRGlDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQy9CTjtBRGlDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLDJFQUFBO0FDL0JOO0FEa0NJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNoQ047QURtQ0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2pDTjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2xDTjtBRHVDQTtFQUVJO0lBQ0UsYUFBQTtFQ3JDSjtFRHVDSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDckNOO0VEd0NFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ3RDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtYWR3b3Jkcy1hY2NvdW50cy9hZGQtYWR3b3Jkcy1hY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgcGFkZGluZzogMzBweDtcblxuICAgIC5pbnB1dC1zaWRlIHtcbiAgICB9XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIC5tZXNzYWdlLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiB0YWhvbWE7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICAgIC5sb2dpbldpdGhHb29nbGUge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbm5lY3QtYnktZW1haS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIH1cblxuICAgICAgLmRpc2Nvbm5lY3QtYnktZW1haWwtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NmNDkzYztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAubm90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZHMtYWNjb3VudC1saXN0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgICAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG5cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGlzYWJsZWQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogc2lsdmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4gICAgICAgICAgbWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmctc2lnbi1pbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzJkNzdmMztcbiAgICB9XG4gICAgLmctc2lnbi1pbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgKi9cbiAgICAgIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zOyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cywgYm9yZGVyLWNvbG9yIDAuMjE4cywgYm94LXNoYWRvdyAwLjIxOHM7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjFweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxNjZweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmlubmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYWR3b3JkLWJnMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOTRweCAzMHB4IDI3cHggMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW46IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiB0YWhvbWE7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10aXRsZSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10ZXh0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYm94IHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbjpkaXNhYmxlZCBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5jb25uZWN0LWJ5LWVtYWktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5kaXNjb25uZWN0LWJ5LWVtYWlsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNjZjQ5M2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLm5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiBidXR0b24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIC5kaXNhYmxlZC1jZWxsIHtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiAjMDM5YmU1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZy1zaWduLWluLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzJkNzdmMztcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gIC8qIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7ICovXG4gIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zOyAqL1xuICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cywgYm9yZGVyLWNvbG9yIDAuMjE4cywgYm94LXNoYWRvdyAwLjIxOHM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE2NnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwMyB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5pbm5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcDMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/ads-accounts/adwords-accounts.service */ "./src/app/shared/services/ads-accounts/adwords-accounts.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");















let AddAdwordsAccountsComponent = class AddAdwordsAccountsComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _fuseNavigationService, _addAdwordsAccountsService, _adwordsAccountsService, _sessionService, _router, http) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._fuseNavigationService = _fuseNavigationService;
        this._addAdwordsAccountsService = _addAdwordsAccountsService;
        this._adwordsAccountsService = _adwordsAccountsService;
        this._sessionService = _sessionService;
        this._router = _router;
        this.http = http;
        this.isConnected = false;
        this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_11__["AdsAccountIdPipe"]();
        this.isProcessing = false;
        this.isAccountListShown = false;
        this.adsAccounts = [];
        this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        this.selectedAccount = '';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableDataSource"](this.adsAccounts);
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
                if (listAccounts.length === 0)
                    this.checkRefreshToken();
                else
                    this.isProcessing = false;
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
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableDataSource"](this.adsAccounts);
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
        return { adWordId: this.selectedAccount.replace(/\D/g, '') };
    }
    connectAccountByEmail() {
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        const param = this.generateConnectAccountByEmailParam();
        const sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
            .subscribe((res) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
            this.connectedAccountId = res.data.account._id;
            this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged();
            this._router.navigateByUrl('/gan-tracking/chien-dich');
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
        })
            .subscribe(res => {
            if (res.data.isConnected) {
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                setTimeout(() => {
                    this._fuseProgressiveBarService.hide();
                    this._router.navigateByUrl('/gan-tracking/chien-dich');
                }, 2000);
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
            this._fuseProgressiveBarService.hide();
            this.connectedAccountId = res.data.account._id;
            this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);
            if (res.data.isRefresh === true) {
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
                this._sessionService.notifyListAccountsChanged();
                this._fuseNavigationService.reloadNavigation();
                this._router.navigateByUrl('/danh-sach-tai-khoan');
                return;
            }
            else {
                this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.'] });
            }
            this.isConnected = true;
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged();
            if (this.isAccountListShown === true) {
                this.isAccountListShown = false;
            }
            this.isProcessing = false;
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
        app_shared_services_ads_accounts_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_13__["AdwordsAccountsService"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AddAdwordsAccountsService = class AddAdwordsAccountsService {
    constructor(_http) {
        this._http = _http;
    }
    addAdwordsAccount(param) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.addAccount, param);
    }
    addAdwordsAccountByEmail(param) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.addAccountByEmail, param);
    }
    getAccounts() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccounts);
    }
    getAdwordsAccountDetail(accountId) {
        const url = _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAwordsAccountDetail.replace('{account_id}', accountId);
        return this._http.get(url);
    }
    checkAccountAcceptance(params) {
        return this._http.post(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkAccountAcceptance, params);
    }
    getAccountsFromGoogleAds() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.getAccountsFromGoogleAds);
    }
    checkRefreshToken() {
        return this._http.get(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.checkRefreshToken);
    }
    updateAccessTokenRefreshToken(params) {
        return this._http.put(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_2__["API"].AdwordsAccount.updateAccessTokenRefreshToken, params);
    }
};
AddAdwordsAccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AddAdwordsAccountsService);



/***/ })

}]);
//# sourceMappingURL=main-add-adwords-accounts-add-adwords-accounts-module-es2015.js.map