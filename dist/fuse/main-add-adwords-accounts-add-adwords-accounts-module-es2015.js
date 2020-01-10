(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.xs=\"10px\">\n      <div gdArea=\"connect-button\" class=\"connect-button\">\n        <h5><strong><span class=\"step\">[1]</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h5>\n        <p style=\"text-align: justify\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing || disableAllControls\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\"\n            [disabled]=\"isProcessing || disableAllControls\" *ngIf=\"isAccountListShown\"\n            class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"input-side\">\n\n        <h5><strong><span class=\"step\">[2]</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h5>\n        <p style=\"text-align: justify\"><strong>Bước 1: </strong> Đăng nhập <b><a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">Awords.google.com</a></b>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink; font-weight: bold\">VD: 552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\"\n              [isDisabled]=\"isProcessing || disableAllControls\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing || disableAllControls\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"limit-account-notify\" *ngIf=\"isLimitAccountNotificationShown && !isProcessing\">\n      <div class=\"limit-account-notify-content\">\n        Số lần kết nối tài khoản Google Ads của bạn đã hết. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại\n          đây</a>\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown && !isProcessing\">\n\n      <div class=\"ads-account-list-title\" fxLayout=\"row\" fxLayoutAlgin=\"center center\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\">\n        <span>VUI\n          LÒNG LỰA CHỌN TÀI\n          KHOẢN\n          GOOGLE ADS CỦA BẠN</span>\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              <b>{{element.googleAdId}}</b>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name || 'Chưa có'}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{element.googleAdId, adsName: element.name}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button [value]=\"{googleAdId: element.googleAdId, adsName: element.name}\"\n                *ngIf=\"element.availableToConnect\" (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\" class=\"instruction-steps\">\n      <h5><strong><span class=\"step\">[3]</span> CHẤP NHẬN YÊU CẦU KẾT NỐI</strong></h5>\n      <p class=\"instruction-step\"><strong>Bước 1: </strong> Đăng nhập vào tài khoản Google Ads của bạn tại trang <b><a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">Adwords.google.com</a></b> và nhấn vào biểu tượng ở\n        menu\n        bên\n        trái </p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\" class=\"instruction-image1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Nhấn vào <span class=\"step-highline\"> NGƯỜI QUẢN LÝ\n        </span> và chọn\n        <span class=\"step-highline\">CHẤP NHẬN</span> (nếu bạn\n        không thấy nút Người Quản Lý, vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <span class=\"step-highline\">CẤP QUYỀN TRUY CẬP</span></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h4><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h4>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

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

module.exports = ".container {\n  width: 100%;\n  background: whitesmoke;\n}\n.container .title {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 45px 30px 0 45px;\n  height: 12.5vh;\n}\n.container .inner {\n  margin: 20px 45px 20px 45px;\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  color: #40a5ec;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .loginWithGoogle .note {\n  font-size: 12px;\n  font-style: italic;\n}\n.container .inner .limit-account-notify {\n  text-align: center;\n  width: 100%;\n  background: lightyellow;\n  padding: 20px;\n  margin-top: 40px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n}\n.container .inner .ads-account-list {\n  margin-top: 20px;\n  border-radius: 7px;\n  padding: 30px;\n  padding-bottom: 0;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: tableAni 0.4s ease-out;\n}\n@-webkit-keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes tableAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 15px;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-title span {\n  font-weight: bold;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .ads-account-list .ads-account-list-title img {\n  width: 16px;\n  height: 16px;\n  margin-right: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #40a5ec;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-row,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  min-width: 400px;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  -webkit-transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-steps {\n  margin-top: 40px;\n  -webkit-animation: instructionAni 0.4s ease-out;\n}\n@-webkit-keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .instruction-steps .instruction-step {\n  font-size: 13px;\n}\n.container .inner .instruction-steps .instruction-step .step-highline {\n  color: #40a5ec;\n  font-weight: bold;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.container .inner .instruction-steps img {\n  margin: 15px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .instruction-steps .instruction-image {\n  height: 50%;\n  width: 50%;\n}\n@media screen and (max-width: 600px) {\n  .container .title {\n    padding: 45px 10px 20px 20px;\n    height: 15vh;\n  }\n  .container .inner {\n    margin: 15px;\n  }\n  .container .inner .instruction-steps {\n    margin-top: 10px;\n    text-align: justify;\n  }\n  .container .inner .instruction-steps img {\n    margin: 10px;\n    height: 90% !important;\n    width: 90% !important;\n  }\n  .container .inner .ads-account-list {\n    padding: 10px;\n    padding-top: 20px;\n  }\n  .container .inner .ads-account-list .ads-account-list-title {\n    text-align: center;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsMkJBQUE7QUNESjtBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNITjtBRE1JO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKVjtBRFFNO0VBQ0UsYUFBQTtBQ05SO0FEVUk7RUFDRSxjQUFBO0FDUk47QURVSTtFQUNFLGFBQUE7QUNSTjtBRFVJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUk47QURVTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUlI7QURVUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JWO0FEWVU7RUFDRSxZQUFBO0FDVlo7QURlTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNiUjtBRGdCTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ2RSO0FEaUJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDZlI7QURtQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3RUFBQTtFQUVBLHlDQUFBO0FDbkJOO0FEb0JNO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDbEJSO0VEb0JNO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2xCUjtBQUNGO0FEWU07RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNsQlI7RURvQk07SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDbEJSO0FBQ0Y7QURxQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNuQlI7QURzQlU7RUFDRSxlQUFBO0FDcEJaO0FEeUJNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ3ZCUjtBRHlCUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDdkJWO0FEMEJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3hCVjtBRDRCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUMxQlI7QUQ0QlE7RUFDRSxnQkFBQTtBQzFCVjtBRDRCVTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSw0Q0FBQTtBQzFCWjtBRDJCWTtFQUNFO0lBQ0UsVUFBQTtFQ3pCZDtFRDJCWTtJQUNFLFVBQUE7RUN6QmQ7QUFDRjtBRG1CWTtFQUNFO0lBQ0UsVUFBQTtFQ3pCZDtFRDJCWTtJQUNFLFVBQUE7RUN6QmQ7QUFDRjtBRDRCWTtFQUNFLHlDQUFBO0FDMUJkO0FEOEJVO0VBQ0UsY0FBQTtBQzVCWjtBRCtCVTtFQUNFLGFBQUE7QUM3Qlo7QURnQ1U7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDOUJaO0FEaUNVOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUMvQlo7QURrQ1U7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNoQ1o7QURtQ1U7O0VBRUUsZUFBQTtBQ2pDWjtBRG9DVTs7RUFFRSxnQkFBQTtBQ2xDWjtBRHdDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ3RDTjtBRHdDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLG1GQUFBO0VBQUEsMkVBQUE7QUN0Q047QUR5Q0k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3ZDTjtBRDBDSTtFQUNFLGdCQUFBO0VBRUEsK0NBQUE7QUN6Q047QUQwQ007RUFDRTtJQUNFLFVBQUE7RUN4Q1I7RUQwQ007SUFDRSxVQUFBO0VDeENSO0FBQ0Y7QURrQ007RUFDRTtJQUNFLFVBQUE7RUN4Q1I7RUQwQ007SUFDRSxVQUFBO0VDeENSO0FBQ0Y7QUQyQ007RUFDRSxlQUFBO0FDekNSO0FEMkNRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3pDVjtBRDZDTTtFQUNFLFlBQUE7RUFDQSx3RUFBQTtBQzNDUjtBRDhDTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDNUNSO0FEa0RBO0VBRUk7SUFDRSw0QkFBQTtJQUNBLFlBQUE7RUNoREo7RURrREU7SUFDRSxZQUFBO0VDaERKO0VEa0RJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQ2hETjtFRGtETTtJQUNFLFlBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VDaERSO0VEb0RJO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0VDbEROO0VEb0RNO0lBQ0Usa0JBQUE7RUNsRFI7RURzREU7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDcERKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy9wYWRkaW5nOiA5NHB4IDMwcHggMjdweCAzMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHggMzBweCAwIDQ1cHg7XG4gICAgaGVpZ2h0OiAxMi41dmg7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIG1hcmdpbjogMjBweCA0NXB4IDIwcHggNDVweDtcblxuICAgIC5pbnB1dC1zaWRlIHtcbiAgICB9XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHNpbHZlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIC5tZXNzYWdlLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiB0YWhvbWE7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGVwIHtcbiAgICAgIGNvbG9yOiAjNDBhNWVjO1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICAgIC5sb2dpbldpdGhHb29nbGUge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbm5lY3QtYnktZW1haS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIH1cblxuICAgICAgLmRpc2Nvbm5lY3QtYnktZW1haWwtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NmNDkzYztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAubm90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saW1pdC1hY2NvdW50LW5vdGlmeSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGFibGVBbmkgMC40cyBlYXNlLW91dDtcbiAgICAgIEBrZXlmcmFtZXMgdGFibGVBbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHJvd0FwcGVhcmFuY2Uge1xuICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGlzYWJsZWQtY2VsbCB7XG4gICAgICAgICAgICBjb2xvcjogc2lsdmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4gICAgICAgICAgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4gICAgICAgICAgbWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsLFxuICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLXJvdyxcbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmctc2lnbi1pbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzJkNzdmMztcbiAgICB9XG4gICAgLmctc2lnbi1pbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgKi9cbiAgICAgIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zOyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cywgYm9yZGVyLWNvbG9yIDAuMjE4cywgYm94LXNoYWRvdyAwLjIxOHM7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjFweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxNjZweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5pbnN0cnVjdGlvbi1zdGVwcyB7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5zdHJ1Y3Rpb25BbmkgMC40cyBlYXNlLW91dDtcbiAgICAgIEBrZXlmcmFtZXMgaW5zdHJ1Y3Rpb25Bbmkge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnN0cnVjdGlvbi1zdGVwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuXG4gICAgICAgIC5zdGVwLWhpZ2hsaW5lIHtcbiAgICAgICAgICBjb2xvcjogIzQwYTVlYztcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICB9XG5cbiAgICAgIC5pbnN0cnVjdGlvbi1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nOiA0NXB4IDEwcHggMjBweCAyMHB4O1xuICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgIH1cbiAgICAuaW5uZXIge1xuICAgICAgbWFyZ2luOiAxNXB4O1xuXG4gICAgICAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudC1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICAgICAgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0NXB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDEyLjV2aDtcbn1cbi5jb250YWluZXIgLmlubmVyIHtcbiAgbWFyZ2luOiAyMHB4IDQ1cHggMjBweCA0NXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24ge1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IHRhaG9tYTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBjb2xvcjogIzQwYTVlYztcbn1cbi5jb250YWluZXIgLmlubmVyIC5ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uOmRpc2FibGVkIGltZyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLmNvbm5lY3QtYnktZW1haS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLmRpc2Nvbm5lY3QtYnktZW1haWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2NmNDkzYztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSAubm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxpbWl0LWFjY291bnQtbm90aWZ5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogdGFibGVBbmkgMC40cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgdGFibGVBbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIGJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC10aXRsZSBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBjb2xvcjogIzQwYTVlYztcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIC5kaXNhYmxlZC1jZWxsIHtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSksXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICBmbGV4OiAwIDAgMTIlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOmxhc3QtY2hpbGQsXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1yb3csXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgbWluLXdpZHRoOiA0MDBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmctc2lnbi1pbi1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgKi9cbiAgLyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdzsgKi9cbiAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbn1cbi5jb250YWluZXIgLmlubmVyIC50ZXh0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTY2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGluc3RydWN0aW9uQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGluc3RydWN0aW9uQW5pIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIC5pbnN0cnVjdGlvbi1zdGVwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIC5pbnN0cnVjdGlvbi1zdGVwIC5zdGVwLWhpZ2hsaW5lIHtcbiAgY29sb3I6ICM0MGE1ZWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIGltZyB7XG4gIG1hcmdpbjogMTVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIC5pbnN0cnVjdGlvbi1pbWFnZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZSB7XG4gICAgcGFkZGluZzogNDVweCAxMHB4IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDE1dmg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMgaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let AddAdwordsAccountsComponent = class AddAdwordsAccountsComponent extends _shared_components_base_editable_form_base_component__WEBPACK_IMPORTED_MODULE_2__["EditableFormBaseComponent"] {
    constructor(_fuseProgressiveBarService, _dialogService, _addAdwordsAccountsService, _sessionService, _router, http) {
        super();
        this._fuseProgressiveBarService = _fuseProgressiveBarService;
        this._dialogService = _dialogService;
        this._addAdwordsAccountsService = _addAdwordsAccountsService;
        this._sessionService = _sessionService;
        this._router = _router;
        this.http = http;
        this.isConnected = false;
        this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_10__["AdsAccountIdPipe"]();
        this.isProcessing = false;
        this.adsAccounts = [];
        this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.adsAccounts);
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
                    this.isLimitAccountNotificationShown = false;
                    this.disableAllControls = false;
                }
                else {
                    const user = JSON.parse(this._sessionService.user);
                    if (!this.isConnected) {
                        if (user.licence.type !== 'CUSTOM') {
                            this.disableAllControls = true;
                            this.isLimitAccountNotificationShown = true;
                        }
                        else {
                            this.disableAllControls = false;
                            this.isLimitAccountNotificationShown = false;
                        }
                    }
                    else {
                        this.disableAllControls = false;
                        this.isLimitAccountNotificationShown = false;
                    }
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
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleAuth2ClientID,
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
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleAuth2ClientID,
                client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
                code: googleUser['code'],
                redirect_uri: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].oauth2RedirectUri
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
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](this.adsAccounts);
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
        if (this.selectedAccount.adsName)
            return {
                adWordId: this.selectedAccount.googleAdId.replace(/\D/g, ''),
                adsName: this.selectedAccount.adsName
            };
        return {
            adWordId: this.selectedAccount.googleAdId.replace(/\D/g, '')
        };
    }
    connectAccountByEmail() {
        this.isProcessing = true;
        this.isLimitAccountNotificationShown = false;
        this._fuseProgressiveBarService.show();
        const param = this.generateConnectAccountByEmailParam();
        const sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
            .subscribe((res) => {
            this.connectedAccountId = res.data.account._id;
            this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Kết nối tài khoản Google Ads thành công']
                },
                navigatedRoute: '/gan-tracking/chien-dich',
                isNavigationReloaded: true
            });
            setTimeout(() => {
                this._fuseProgressiveBarService.hide();
                this.isProcessing = false;
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
            if (res.data.isRefresh === true) {
                this._sessionService.notifyListAccountsChanged({
                    status: 'SUCCESS',
                    data: {
                        messages: ['Kết nối tài khoản Google Ads thành công']
                    },
                    //navigatedRoute: '/danh-sach-tai-khoan',
                    isNavigationReloaded: true
                });
            }
            else {
                this._sessionService.notifyListAccountsChanged({
                    status: 'SUCCESS',
                    data: {
                        messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.']
                    },
                    isNavigationReloaded: true
                });
                this._sessionService.noticeActiveAccountConnection('Connected by id but is not refreshed');
                this.isAccountListShown = false;
                this.isConnected = true;
                setTimeout(() => {
                    this.isProcessing = false;
                }, 2000);
            }
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
        _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AddAdwordsAccountsService"],
        app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
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