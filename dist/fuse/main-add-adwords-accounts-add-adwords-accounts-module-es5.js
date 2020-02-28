(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.xs=\"10px\">\n      <div gdArea=\"connect-button\" class=\"connect-by-email\" fxFlex=\"40\">\n        <h5><strong><span class=\"step\">Cách 1</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h5>\n        <p class=\"note\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing || disableAllControls\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"../../../assets/icons/gmail.png\" alt=\"\" class=\"gmail-icon\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\"\n            [disabled]=\"isProcessing || disableAllControls\" *ngIf=\"isAccountListShown\"\n            class=\"disconnect-by-email-button\">\n            <img src=\"../../../assets/icons/gmail.png\" alt=\"\" class=\"gmail-icon\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"connect-by-id\" fxFlex=\"60\">\n\n        <h5><strong><span class=\"step\">Cách 2</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h5>\n        <p class=\"note\"><strong>Bước 1: </strong> Đăng nhập <b><a href=\"https://ads.google.com/intl/vi_VN/home/\"\n              target=\"_blank\">Awords.google.com</a></b>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink; font-weight: bold\">VD:\n            552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\"\n              [isDisabled]=\"isProcessing || disableAllControls\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing || disableAllControls\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"limit-account-notify\" *ngIf=\"isLimitAccountNotificationShown && !isProcessing\">\n      <div class=\"limit-account-notify-content\">\n        Số lần kết nối tài khoản Google Ads của bạn đã hết. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại\n          đây</a>\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown && !isProcessing\">\n\n      <div class=\"ads-account-list-title\" fxLayout=\"row\" fxLayoutAlgin=\"center center\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\">\n        <span>VUI\n          LÒNG LỰA CHỌN TÀI\n          KHOẢN\n          GOOGLE ADS CỦA BẠN</span>\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              <b>{{element.googleAdId}}</b>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name || 'Chưa có'}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{element.googleAdId, adsName: element.name}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button [value]=\"{googleAdId: element.googleAdId, adsName: element.name}\"\n                *ngIf=\"element.availableToConnect\" (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\" class=\"instruction-steps\">\n      <h5><strong><span class=\"step\">3</span> CHẤP NHẬN QUYỀN QUẢN LÝ HỆ THỐNG GOOGLE ADS</strong></h5>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Đăng nhập vào tài khoản Google Ads của bạn tại trang <b><a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">Adwords.google.com</a></b> và nhấn vào biểu\n        tượng ở\n        menu\n        bên góc trái - phía trên màn hình. Tại mục <span class=\"step-highline\">CÀI ĐẶT</span> nhấn chọn <span\n          class=\"step-highline\">Truy cập tài khoản</span></p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\" class=\"instruction-image1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Nhấn vào <span class=\"step-highline\"> NGƯỜI QUẢN LÝ\n        </span> và chọn\n        <span class=\"step-highline\">CHẤP NHẬN</span> (nếu bạn\n        không thấy nút Người Quản Lý, vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <span class=\"step-highline\">CẤP QUYỀN TRUY CẬP</span></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h4><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h4>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

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

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container h5 {\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .title {\n  background-color: #00a1e0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%2300a1e0' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%231095d2' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%231889c3' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%231c7eb5' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%231e72a7' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%231f6799' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n}\n.container .inner {\n  font-size: 13px;\n  min-height: 550px;\n  background: white;\n  position: relative;\n  top: -16vh;\n  padding: 20px;\n  padding-left: 30px;\n  margin: 40px 30px 30px 30px;\n  border-radius: 7px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .note {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  padding: 2.5px 6px 2.5px 6px;\n  border-radius: 12px;\n  background: #039be5;\n  color: white;\n  font-weight: bold;\n  font-size: 10px;\n  margin-right: 8px;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle .gmail-icon {\n  width: 20px;\n  margin-right: 7px;\n  margin-top: -2.5px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: whitesmoke;\n}\n.container .inner .limit-account-notify {\n  text-align: center;\n  width: 100%;\n  background: lightyellow;\n  padding: 20px;\n  margin-top: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n}\n.container .inner .ads-account-list {\n  margin-top: 20px;\n  border-radius: 7px;\n  padding: 30px;\n  padding-bottom: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 15px;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-title span {\n  font-weight: bold;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .ads-account-list .ads-account-list-title img {\n  width: 16px;\n  height: 16px;\n  margin-right: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #40a5ec;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-row,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  min-width: 400px;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  -webkit-transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-steps {\n  margin-top: 40px;\n  -webkit-animation: instructionAni 0.4s ease-out;\n  animation: instructionAni 0.4s ease-out;\n}\n@-webkit-keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .instruction-steps .instruction-step {\n  font-size: 12px;\n  line-height: 20px;\n}\n.container .inner .instruction-steps .instruction-step .step-highline {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: bold;\n  margin: 0 5px;\n}\n.container .inner .instruction-steps img {\n  margin: 15px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .instruction-steps .instruction-image {\n  height: 50%;\n  width: 50%;\n}\n@media screen and (max-width: 600px) {\n  .container .title {\n    padding: 45px 20px 25vh 20px;\n    text-align: center;\n  }\n  .container .inner {\n    margin: 10px;\n    padding: 15px;\n  }\n  .container .inner .instruction-steps {\n    margin-top: 10px;\n    text-align: justify;\n  }\n  .container .inner .instruction-steps img {\n    margin: 10px;\n    height: 90% !important;\n    width: 90% !important;\n  }\n  .container .inner .ads-account-list {\n    padding: 10px;\n    padding-top: 20px;\n  }\n  .container .inner .ads-account-list .ads-account-list-title {\n    text-align: center;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSx1ZkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFFQSx3Q0FBQTtFQUNBLGdDQUFBO0FDRko7QURHSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0ROO0VER0k7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDRE47QUFDRjtBRExJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FESUk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNITjtBRE1JO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pOO0FETU07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSlI7QURNUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKVjtBRFFNO0VBQ0UsYUFBQTtBQ05SO0FEVUk7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRFVJO0VBQ0UsYUFBQTtBQ1JOO0FEVUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNSTjtBRFVNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFdNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRFlVO0VBQ0UsWUFBQTtBQ1ZaO0FEZU07RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDYlI7QURnQk07RUFDRSxzQkFBQTtBQ2RSO0FEa0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdFQUFBO0FDakJOO0FEbUJNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDakJSO0FEb0JVO0VBQ0UsZUFBQTtBQ2xCWjtBRHVCTTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNyQlI7QUR1QlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3JCVjtBRHdCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUN0QlY7QUQwQk07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDeEJSO0FEMEJRO0VBQ0UsZ0JBQUE7QUN4QlY7QUQwQlU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsNENBQUE7RUFDQSxvQ0FBQTtBQ3pCWjtBRDBCWTtFQUNFO0lBQ0UsVUFBQTtFQ3hCZDtFRDBCWTtJQUNFLFVBQUE7RUN4QmQ7QUFDRjtBRGtCWTtFQUNFO0lBQ0UsVUFBQTtFQ3hCZDtFRDBCWTtJQUNFLFVBQUE7RUN4QmQ7QUFDRjtBRDJCWTtFQUNFLHlDQUFBO0FDekJkO0FENkJVO0VBQ0UsY0FBQTtBQzNCWjtBRDhCVTtFQUNFLGFBQUE7QUM1Qlo7QUQrQlU7O0VBRUUsbUJBQUE7VUFBQSxhQUFBO0FDN0JaO0FEZ0NVOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUM5Qlo7QURpQ1U7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUMvQlo7QURrQ1U7O0VBRUUsZUFBQTtBQ2hDWjtBRG1DVTs7RUFFRSxnQkFBQTtBQ2pDWjtBRHVDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ3JDTjtBRHVDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLG1GQUFBO0VBQUEsMkVBQUE7QUNyQ047QUR3Q0k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3RDTjtBRHlDSTtFQUNFLGdCQUFBO0VBRUEsK0NBQUE7RUFDQSx1Q0FBQTtBQ3hDTjtBRHlDTTtFQUNFO0lBQ0UsVUFBQTtFQ3ZDUjtFRHlDTTtJQUNFLFVBQUE7RUN2Q1I7QUFDRjtBRGlDTTtFQUNFO0lBQ0UsVUFBQTtFQ3ZDUjtFRHlDTTtJQUNFLFVBQUE7RUN2Q1I7QUFDRjtBRDBDTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3hDUjtBRDBDUTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDeENWO0FENENNO0VBQ0UsWUFBQTtFQUNBLHdFQUFBO0FDMUNSO0FENkNNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUMzQ1I7QURpREE7RUFFSTtJQUNFLDRCQUFBO0lBQ0Esa0JBQUE7RUMvQ0o7RURpREU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQy9DSjtFRGlESTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUMvQ047RURpRE07SUFDRSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtFQy9DUjtFRG1ESTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtFQ2pETjtFRG1ETTtJQUNFLGtCQUFBO0VDakRSO0VEcURFO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ25ESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZGQtYWR3b3Jkcy1hY2NvdW50cy9hZGQtYWR3b3Jkcy1hY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xuXG4gIGg1IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWUwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyAlM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDBhMWUwJyBjeD0nNDAwJyBjeT0nNDAwJyByPSc2MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxMDk1ZDInIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzUwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzE4ODljMycgY3g9JzQwMCcgY3k9JzQwMCcgcj0nNDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMWM3ZWI1JyBjeD0nNDAwJyBjeT0nNDAwJyByPSczMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxZTcyYTcnIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzIwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzFmNjc5OScgY3g9JzQwMCcgY3k9JzQwMCcgcj0nMTAwJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICAgIGhlaWdodDogMjd2aDtcbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNnZoO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbjogNDBweCAzMHB4IDMwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBhbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubm90ZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIH1cblxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogdGFob21hO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWVzc2FnZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBwYWRkaW5nOiAyLjVweCA2cHggMi41cHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuICAgIC5sb2dpbldpdGhHb29nbGUge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAuZ21haWwtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIuNXB4O1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgfVxuXG4gICAgICAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saW1pdC1hY2NvdW50LW5vdGlmeSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICAgICAgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgICAgICAgbWF0LXRhYmxlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMywgMTU1LCAyMjksIDAuMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDBhNWVjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kaXNhYmxlZC1jZWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbiAgICAgICAgICBtYXQtY2VsbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgZmxleDogMCAwIDEyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbiAgICAgICAgICBtYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGwsXG4gICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItcm93LFxuICAgICAgICAgIG1hdC1yb3cge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmQ3N2YzO1xuICAgIH1cbiAgICAuZy1zaWduLWluLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAgICAgLyogdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yMThzLCBib3JkZXItY29sb3IgMC4yMThzLCBib3gtc2hhZG93IDAuMjE4cztcbiAgICB9XG5cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDE2NnB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmluc3RydWN0aW9uLXN0ZXBzIHtcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpbnN0cnVjdGlvbkFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgYW5pbWF0aW9uOiBpbnN0cnVjdGlvbkFuaSAwLjRzIGVhc2Utb3V0O1xuICAgICAgQGtleWZyYW1lcyBpbnN0cnVjdGlvbkFuaSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmluc3RydWN0aW9uLXN0ZXAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIC5zdGVwLWhpZ2hsaW5lIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgICB9XG5cbiAgICAgIC5pbnN0cnVjdGlvbi1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjV2aCAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaW5uZXIge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgLmluc3RydWN0aW9uLXN0ZXBzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQtbGlzdCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgICAgIC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmNvbnRhaW5lciBoNSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZTA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyAlM0UlM0NjaXJjbGUgZmlsbD0nJTIzMDBhMWUwJyBjeD0nNDAwJyBjeT0nNDAwJyByPSc2MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxMDk1ZDInIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzUwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzE4ODljMycgY3g9JzQwMCcgY3k9JzQwMCcgcj0nNDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0nJTIzMWM3ZWI1JyBjeD0nNDAwJyBjeT0nNDAwJyByPSczMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSclMjMxZTcyYTcnIGN4PSc0MDAnIGN5PSc0MDAnIHI9JzIwMCcvJTNFJTNDY2lyY2xlIGZpbGw9JyUyMzFmNjc5OScgY3g9JzQwMCcgY3k9JzQwMCcgcj0nMTAwJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgaGVpZ2h0OiAyN3ZoO1xufVxuLmNvbnRhaW5lciAuaW5uZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNnZoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbjogNDBweCAzMHB4IDMwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogZm9ybUFuaSAwLjRzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAubm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW46IDJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggc2lsdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiB0YWhvbWE7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10aXRsZSBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubWVzc2FnZSAubWVzc2FnZS10ZXh0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5zdGVwIHtcbiAgcGFkZGluZzogMi41cHggNnB4IDIuNXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5ib3gge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgLmdtYWlsLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIG1hcmdpbi10b3A6IC0yLjVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbjpkaXNhYmxlZCBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5jb25uZWN0LWJ5LWVtYWktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5kaXNjb25uZWN0LWJ5LWVtYWlsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG4uY29udGFpbmVyIC5pbm5lciAubGltaXQtYWNjb3VudC1ub3RpZnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5kaXYtY29ubmVjdC1hY2NvdW50LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIGJ1dHRvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC10aXRsZSBpbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMC41cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICBhbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG59XG5Aa2V5ZnJhbWVzIHJvd0FwcGVhcmFuY2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbCB7XG4gIGNvbG9yOiAjNDBhNWVjO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgLmRpc2FibGVkLWNlbGwge1xuICBjb2xvcjogc2lsdmVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCgxKSxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bGFzdC1jaGlsZCxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsLFxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLXJvdyxcbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3cge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmctc2lnbi1pbi1idXR0b24ge1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQ6ICMyZDc3ZjM7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZy1zaWduLWluLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAqL1xuICAvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93OyAqL1xuICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtczsgKi9cbiAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyAqL1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMsIGJvcmRlci1jb2xvciAwLjIxOHMsIGJveC1zaGFkb3cgMC4yMThzO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNjZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogaW5zdHJ1Y3Rpb25BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBpbnN0cnVjdGlvbkFuaSAwLjRzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBpbnN0cnVjdGlvbkFuaSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwcyAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMgLmluc3RydWN0aW9uLXN0ZXAgLnN0ZXAtaGlnaGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwcyBpbWcge1xuICBtYXJnaW46IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwcyAuaW5zdHJ1Y3Rpb24taW1hZ2Uge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAudGl0bGUge1xuICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyNXZoIDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMgaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/pipes/ads-account-id/ads-account-id.pipe */ "./src/app/shared/pipes/ads-account-id/ads-account-id.pipe.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");













var AddAdwordsAccountsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAdwordsAccountsComponent, _super);
    function AddAdwordsAccountsComponent(_fuseProgressiveBarService, _dialogService, _addAdwordsAccountsService, _sessionService, _router, http) {
        var _this = _super.call(this) || this;
        _this._fuseProgressiveBarService = _fuseProgressiveBarService;
        _this._dialogService = _dialogService;
        _this._addAdwordsAccountsService = _addAdwordsAccountsService;
        _this._sessionService = _sessionService;
        _this._router = _router;
        _this.http = http;
        _this.isConnected = false;
        _this._adsAccountIdPipe = new app_shared_pipes_ads_account_id_ads_account_id_pipe__WEBPACK_IMPORTED_MODULE_10__["AdsAccountIdPipe"]();
        _this.isProcessing = false;
        _this.adsAccounts = [];
        _this.adsAccountColumns = ['order', 'adsId', 'name', 'selection'];
        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](_this.adsAccounts);
        return _this;
    }
    AddAdwordsAccountsComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.googleInit();
        this.checkAccountList();
    };
    AddAdwordsAccountsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AddAdwordsAccountsComponent.prototype.loginByGG = function () {
        this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
    };
    AddAdwordsAccountsComponent.prototype.hasValue = function (value) {
        return value !== null && value !== undefined;
    };
    AddAdwordsAccountsComponent.prototype.checkAccountList = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._sessionService.getListAccounts()
            .subscribe(function (listAccounts) {
            if (listAccounts) {
                if (listAccounts.length === 0) {
                    _this.showAccountListByEmail();
                    _this.isLimitAccountNotificationShown = false;
                    _this.disableAllControls = false;
                }
                else {
                    var user = JSON.parse(_this._sessionService.user);
                    if (!_this.isConnected) {
                        if (user.licence.type !== 'CUSTOM') {
                            _this.disableAllControls = true;
                            _this.isLimitAccountNotificationShown = true;
                        }
                        else {
                            _this.disableAllControls = false;
                            _this.isLimitAccountNotificationShown = false;
                        }
                    }
                    else {
                        _this.disableAllControls = false;
                        _this.isLimitAccountNotificationShown = false;
                    }
                    _this._fuseProgressiveBarService.hide();
                    _this.isProcessing = false;
                }
            }
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleAuth2ClientID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email https://www.googleapis.com/auth/adwords'
            });
        });
    };
    AddAdwordsAccountsComponent.prototype.showAccountListByEmail = function () {
        this.checkRefreshToken();
    };
    AddAdwordsAccountsComponent.prototype.onSignIn = function (googleUser) {
        var _this = this;
        if (googleUser && googleUser['code']) {
            this.http.post('https://www.googleapis.com/oauth2/v4/token', {
                grant_type: 'authorization_code',
                client_id: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleAuth2ClientID,
                client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
                code: googleUser['code'],
                redirect_uri: environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].oauth2RedirectUri
            })
                .subscribe(function (val) {
                _this._sessionService.setGoogleAccountToken(val['access_token'], val['refresh_token']);
                setTimeout(function () {
                    _this.updateAccessTokenRefreshToken();
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
    AddAdwordsAccountsComponent.prototype.checkRefreshToken = function () {
        var _this = this;
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.checkRefreshToken()
            .subscribe(function (res) {
            _this.isProcessing = false;
            _this._fuseProgressiveBarService.hide();
            _this.getAccountsFromGoogleAds();
        }, function (error) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            _this.isAccountListShown = false;
            _this.loginByGG();
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.updateAccessTokenRefreshToken = function () {
        var _this = this;
        this.isProcessing = false;
        this._fuseProgressiveBarService.show();
        var params = this._sessionService.getGoogleAccountToken();
        var sub = this._addAdwordsAccountsService.updateAccessTokenRefreshToken(params)
            .subscribe(function (res) {
            _this._fuseProgressiveBarService.hide();
            _this.isProcessing = false;
            _this.getAccountsFromGoogleAds();
        }, function (error) {
            _this._dialogService._openErrorDialog(error.error, true);
            _this._fuseProgressiveBarService.hide();
            _this.isAccountListShown = false;
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.getAccountsFromGoogleAds = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.getAccountsFromGoogleAds()
            .subscribe(function (res) {
            _this.adsAccounts = res.data.googleAds;
            _this.adsAccounts = (_this.adsAccounts || []).map(function (item) {
                item.googleAdId = _this._adsAccountIdPipe.transform(item.googleAdId);
                return item;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableDataSource"](_this.adsAccounts);
            _this._fuseProgressiveBarService.hide();
            _this.isAccountListShown = true;
            _this.isProcessing = false;
        }, function (error) {
            _this.isAccountListShown = false;
            _this.isProcessing = false;
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'unauthorized_client') {
                _this.loginByGG();
            }
            else {
                if (error.error.messages[0] === 'Bạn không có tài khoản hợp lệ.') {
                    _this._dialogService._openErrorDialog({ messages: ['Chúng tôi không tìm thấy tài khoản Google Ads nào trong Gmail của bạn.'] }, true);
                }
                else {
                    _this._dialogService._openErrorDialog(error.error, true);
                }
            }
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.generateConnectAccountByEmailParam = function () {
        if (this.selectedAccount.adsName)
            return {
                adWordId: this.selectedAccount.googleAdId.replace(/\D/g, ''),
                adsName: this.selectedAccount.adsName
            };
        return {
            adWordId: this.selectedAccount.googleAdId.replace(/\D/g, '')
        };
    };
    AddAdwordsAccountsComponent.prototype.connectAccountByEmail = function () {
        var _this = this;
        this.isProcessing = true;
        this.isLimitAccountNotificationShown = false;
        this._fuseProgressiveBarService.show();
        var param = this.generateConnectAccountByEmailParam();
        var sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
            .subscribe(function (res) {
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            _this._sessionService.setActiveGoogleAdsAccount(_this.connectedAccountId, _this.connectedAdsId);
            _this._sessionService.notifyListAccountsChanged({
                status: 'SUCCESS',
                data: {
                    messages: ['Kết nối tài khoản Google Ads thành công']
                },
                navigatedRoute: '/gan-tracking/chien-dich',
                isNavigationReloaded: true
            });
            setTimeout(function () {
                _this._fuseProgressiveBarService.hide();
                _this.isProcessing = false;
            }, 2000);
        }, function (error) {
            _this.isConnected = false;
            _this.connectedAccountId = '';
            _this.connectedAdsId = '';
            _this._fuseProgressiveBarService.hide();
            if (error.error.messages[0] === 'Không xác định được lỗi') {
                _this._dialogService._openErrorDialog({
                    messages: [
                        "Kh\u00F4ng th\u1EC3 g\u1EAFn tracking v\u00E0o t\u00E0i kho\u1EA3n n\u00E0y!<br> \nC\u00F3 th\u1EC3 b\u1EA1n ch\u01B0a k\u1EBFt n\u1ED1i Google Ads v\u1EDBi Appnet Technology <br> \nho\u1EB7c t\u00E0i kho\u1EA3n n\u00E0y \u0111\u00E3 t\u1ED3n t\u1EA1i trong h\u1EC7 th\u1ED1ng.\n                "
                    ]
                }, true);
            }
            else {
                _this._dialogService._openErrorDialog(error.error);
            }
            _this.isProcessing = false;
        });
        this.subscriptions.push(sub);
    };
    AddAdwordsAccountsComponent.prototype.completeAccountConnection = function () {
        var _this = this;
        this.isProcessing = true;
        this._fuseProgressiveBarService.show();
        var sub = this._addAdwordsAccountsService.checkAccountAcceptance({
            adWordId: this.connectedAdsId.replace(/\D/g, '')
        }).subscribe(function (res) {
            if (res.data.isConnected) {
                _this._fuseProgressiveBarService.hide();
                _this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
                _this._router.navigateByUrl('/gan-tracking/chien-dich');
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
            _this.connectedAccountId = res.data.account._id;
            _this.connectedAdsId = _this._adsAccountIdPipe.transform(res.data.account.adsId);
            _this._sessionService.setActiveGoogleAdsAccount(_this.connectedAccountId, _this.connectedAdsId);
            if (res.data.isRefresh === true) {
                _this._sessionService.notifyListAccountsChanged({
                    status: 'SUCCESS',
                    data: {
                        messages: ['Kết nối tài khoản Google Ads thành công']
                    },
                    //navigatedRoute: '/danh-sach-tai-khoan',
                    isNavigationReloaded: true
                });
            }
            else {
                _this._sessionService.notifyListAccountsChanged({
                    status: 'SUCCESS',
                    data: {
                        messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.']
                    },
                    isNavigationReloaded: true
                });
                _this._sessionService.noticeActiveAccountConnection('Connected by id but is not refreshed');
                _this.isAccountListShown = false;
                _this.isConnected = true;
                setTimeout(function () {
                    _this.isProcessing = false;
                }, 2000);
            }
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
        params.adWordId = params.adWordId.replace(/\D/g, '');
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
            _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AddAdwordsAccountsService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            ],
            providers: [
                _add_adwords_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AddAdwordsAccountsService"]
            ]
        })
    ], AddAdwordsAccountsModule);
    return AddAdwordsAccountsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-add-adwords-accounts-add-adwords-accounts-module-es5.js.map