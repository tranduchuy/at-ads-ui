(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-add-adwords-accounts-add-adwords-accounts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/add-adwords-accounts/add-adwords-accounts.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">\n    KẾT NỐI TÀI KHOẢN GOOGLE ADS CỦA BẠN\n  </div>\n  <div class=\"inner\">\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"50px\" fxLayoutGap.xs=\"10px\">\n      <div gdArea=\"connect-button\" class=\"connect-by-email\" fxFlex=\"40\">\n        <h5><strong><span class=\"step\">1</span> KẾT NỐI NHANH BẰNG GMAIL</strong></h5>\n        <p class=\"note\"> Sử dụng tài khoản Gmail quản lý Google Ads, bấm kết nối nhanh để hoàn tất\n          quá\n          trình kết nối</p>\n        <div class=\"loginWithGoogle\">\n\n          <button mat-raised-button (click)=\"showAccountListByEmail()\" [disabled]=\"isProcessing || disableAllControls\"\n            *ngIf=\"!isAccountListShown\" class=\"connect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\"\n              style=\"margin-right: 8px\">Kết nối nhanh\n            bằng\n            Gmail</button>\n\n          <button mat-raised-button (click)=\"isAccountListShown = false; selectedAccount = ''\"\n            [disabled]=\"isProcessing || disableAllControls\" *ngIf=\"isAccountListShown\"\n            class=\"disconnect-by-email-button\">\n            <img src=\"https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png\" alt=\"\">Hủy kết nối nhanh\n            bằng Gmail</button>\n\n        </div>\n      </div>\n\n      <div gdArea=\"input-side\" class=\"connect-by-id\" fxFlex=\"60\">\n\n        <h5><strong><span class=\"step\">2</span> KẾT NỐI THÔNG QUA MÃ GOOGLE ADS ID</strong></h5>\n        <p class=\"note\"><strong>Bước 1: </strong> Đăng nhập <b><a\n              href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">Awords.google.com</a></b>, ID tài\n          khoản Google Ads của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink; font-weight: bold\">VD:\n            552-999-5152</span>\n          là\n          ID\n          tài khoản Google Ads của bạn</p>\n\n        <form [formGroup]=\"form\" novalidate>\n          <div fxLayout=\"row\">\n            <app-input-text [formControlName]=\"'adWordId'\" [title]=\"'Google Ads ID'\"\n              [placeholder]=\"'Ví dụ: 5456445193 hoặc 545-644-5193'\" [pristine]=\"true\"\n              [errors]=\"getMessageErrors('adWordId')\" (keypress)=\"onPressId($event.keyCode)\"\n              [isDisabled]=\"isProcessing || disableAllControls\">\n            </app-input-text>\n            <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"Kết nối\"\n              (click)=\"onClickBtnSubmit()\" [disabled]=\"isProcessing || disableAllControls\">\n              <mat-icon matSuffix class=\"add_box\" style=\"font-size: 20px\">wifi</mat-icon>\n              Kết nối\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n\n    <div class=\"limit-account-notify\" *ngIf=\"isLimitAccountNotificationShown && !isProcessing\">\n      <div class=\"limit-account-notify-content\">\n        Số lần kết nối tài khoản Google Ads của bạn đã hết. Vui lòng nâng cấp thêm <a routerLink=\"/nang-cap-vip\">tại\n          đây</a>\n      </div>\n    </div>\n\n    <div class=\"ads-account-list\" *ngIf=\"isAccountListShown && !isProcessing\">\n\n      <div class=\"ads-account-list-title\" fxLayout=\"row\" fxLayoutAlgin=\"center center\">\n        <img src=\"../../../assets/icons/gg-ads.png\" alt=\"\">\n        <span>VUI\n          LÒNG LỰA CHỌN TÀI\n          KHOẢN\n          GOOGLE ADS CỦA BẠN</span>\n      </div>\n\n      <mat-form-field>\n        <mat-icon matPrefix style=\"font-size: 20px; color: rgba(0,0,0,0.6);\">search</mat-icon>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Tìm kiếm\">\n      </mat-form-field>\n\n      <div class=\"ads-account-list-wrapper\">\n\n        <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"order\">\n            <mat-header-cell *matHeaderCellDef> # </mat-header-cell>\n            <mat-cell *matCellDef=\"let element; let i = index\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{i + 1}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"adsId\">\n            <mat-header-cell *matHeaderCellDef>Google Ads ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              <b>{{element.googleAdId}}</b>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Tên tài khoản </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n              {{element.name || 'Chưa có'}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"selection\">\n            <mat-header-cell *matHeaderCellDef> Chọn tại đây </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" [class.disabled-cell]=\"!element.availableToConnect\">\n\n              <mat-radio-button value=\"{element.googleAdId, adsName: element.name}\" *ngIf=\"!element.availableToConnect\"\n                matTooltip=\"{{element.reason}}\" disabled></mat-radio-button>\n\n              <mat-radio-button [value]=\"{googleAdId: element.googleAdId, adsName: element.name}\"\n                *ngIf=\"element.availableToConnect\" (change)=\"selectAccount($event)\"></mat-radio-button>\n\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"adsAccountColumns; sticky: true\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: adsAccountColumns;\"></mat-row>\n        </mat-table>\n\n      </div>\n\n      <p class=\"div-connect-account-button\">\n        <button mat-raised-button color=\"accent\" [disabled]=\"!selectedAccount || isProcessing\"\n          (click)=\"connectAccountByEmail()\" style=\"height: 45px\">\n          <mat-icon>wifi</mat-icon> Kết nối tài khoản\n        </button>\n      </p>\n    </div>\n\n    <div gdArea=\"content\" *ngIf=\"isConnected\" class=\"instruction-steps\">\n      <h5><strong><span class=\"step\">3</span> CHẤP NHẬN QUYỀN QUẢN LÝ HỆ THỐNG GOOGLE ADS</strong></h5>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Đăng nhập vào tài khoản Google Ads của bạn tại trang <b><a\n            href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">Adwords.google.com</a></b> và nhấn vào biểu\n        tượng ở\n        menu\n        bên góc trái - phía trên màn hình. Tại mục <span class=\"step-highline\">CÀI ĐẶT</span> nhấn chọn <span\n          class=\"step-highline\">Truy cập tài khoản</span></p>\n      <p class=\"text-center\"><img src=\"/assets/images/adwords-caidat-b1-moi.jpg?v=1\" class=\"instruction-image1\"></p>\n      <p class=\"instruction-step\"><strong>Bước 2: </strong> Nhấn vào <span class=\"step-highline\"> NGƯỜI QUẢN LÝ\n        </span> và chọn\n        <span class=\"step-highline\">CHẤP NHẬN</span> (nếu bạn\n        không thấy nút Người Quản Lý, vui lòng chờ khoảng 5 phút)</p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step2.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"instruction-step\"><strong>Bước 3: </strong>Một thông báo hiện ra, bạn chọn\n        <span class=\"step-highline\">CẤP QUYỀN TRUY CẬP</span></p>\n      <p class=\"text-center\">\n        <img src=\"../../../assets/images/connect-ads-account-step3.PNG\" class=\"instruction-image\">\n      </p>\n      <p class=\"text-center\" style=\"padding-top: 20px\">\n        <button mat-raised-button [disabled]=\"isProcessing\" aria-label=\"TÔI ĐÃ HOÀN TẤT KẾT NỐI\"\n          [disabled]=\"isProcessing\" (click)=\"completeAccountConnection()\"\n          style=\"background-color: #44b543; color: white\">\n          <mat-icon matSuffix class=\"done_outline\" style=\"font-size: 20px\">check</mat-icon>\n          TÔI ĐÃ HOÀN TẤT KẾT NỐI\n        </button>\n\n      </p>\n      <!-- <div gdArea=\"content\">\n            <h4><strong><span class=\"step\">[2]</span>  Vui lòng đồng ý yêu cầu kết nối</strong></h4>\n            <p><strong>Bước 1: </strong> Đăng nhập <a href=\"https://ads.google.com/intl/vi_VN/home/\" target=\"_blank\">adwords.google.com</a>, ID tài\n              khoản adwords của bạn sẽ nằm ở góc phải trên cùng. <span style=\"color: deeppink;\">VD: 552-999-5152</span> là ID\n              tài khoản Adwords của bạn</p>\n          </div> -->\n    </div>\n  </div>"

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

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container h5 {\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .title {\n  background-color: #ffffb5;\n  background-image: linear-gradient(315deg, #ffffb5 0%, #247ba0 74%);\n  text-shadow: 1px 1px 2px black;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  padding: 60px 30px 0 45px;\n  height: 27vh;\n}\n.container .inner {\n  font-size: 13px;\n  min-height: 550px;\n  background: white;\n  position: relative;\n  top: -16vh;\n  padding: 20px;\n  padding-left: 30px;\n  margin: 40px 30px 30px 30px;\n  border-radius: 7px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: formAni 0.4s ease-out;\n  animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .note {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .submit-button {\n  height: 58px;\n  margin: 2px;\n  margin-top: 4px;\n  margin-right: 0;\n  width: 120px;\n}\n.container .inner .message {\n  border: 1px solid #d2d2d2;\n  box-shadow: 1px 1px 2px silver;\n  background-color: white;\n  min-width: 350px;\n  margin-bottom: 10px;\n}\n.container .inner .message .message-title {\n  padding: 10px;\n  font-size: 18px;\n  font-style: tahoma;\n}\n.container .inner .message .message-title img {\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n}\n.container .inner .message .message-text {\n  padding: 10px;\n}\n.container .inner .step {\n  padding: 2.5px 6px 2.5px 6px;\n  border-radius: 50%;\n  background: #039be5;\n  color: white;\n  font-weight: bold;\n  font-size: 10px;\n  margin-right: 8px;\n}\n.container .inner .box {\n  padding: 30px;\n}\n.container .inner .loginWithGoogle {\n  display: table;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.container .inner .loginWithGoogle button {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.container .inner .loginWithGoogle button img {\n  height: 24px;\n  width: 24px;\n  margin-top: -5px;\n  margin-right: 5px;\n}\n.container .inner .loginWithGoogle button:disabled img {\n  opacity: 0.4;\n}\n.container .inner .loginWithGoogle .connect-by-emai-button {\n  background: white;\n  color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .loginWithGoogle .disconnect-by-email-button {\n  background: #cf493c;\n  color: white;\n}\n.container .inner .limit-account-notify {\n  text-align: center;\n  width: 100%;\n  background: lightyellow;\n  padding: 20px;\n  margin-top: 20px;\n  border-left: 4px solid darkorange;\n  border-radius: 5px;\n}\n.container .inner .ads-account-list {\n  margin-top: 20px;\n  border-radius: 7px;\n  padding: 30px;\n  padding-bottom: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .ads-account-list .div-connect-account-button {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 15px;\n}\n.container .inner .ads-account-list .div-connect-account-button button mat-icon {\n  font-size: 20px;\n}\n.container .inner .ads-account-list .ads-account-list-title {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.container .inner .ads-account-list .ads-account-list-title span {\n  font-weight: bold;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .ads-account-list .ads-account-list-title img {\n  width: 16px;\n  height: 16px;\n  margin-right: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper {\n  max-height: 300px;\n  overflow: auto;\n  border: 0.5px solid #eee;\n  border-radius: 7px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table {\n  box-shadow: none;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  -webkit-animation: rowAppearance 0.4s linear;\n  animation: rowAppearance 0.4s linear;\n}\n@-webkit-keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes rowAppearance {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row:hover {\n  background-color: rgba(3, 155, 229, 0.05);\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  color: #40a5ec;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table .disabled-cell {\n  color: silver;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:nth-child(1),\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:nth-child(1) {\n  -webkit-box-flex: 0;\n          flex: 0 0 12%;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell:last-child,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell:last-child {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-cell,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-cell {\n  font-size: 12px;\n}\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-header-row,\n.container .inner .ads-account-list .ads-account-list-wrapper mat-table mat-row {\n  min-width: 400px;\n}\n.container .inner .g-sign-in-button {\n  width: 250px;\n  background: #2d77f3;\n}\n.container .inner .g-sign-in-button {\n  height: 40px;\n  border-width: 0;\n  border-radius: 2px;\n  white-space: nowrap;\n  /* box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05); */\n  /* transition-property: background-color, box-shadow; */\n  /* transition-duration: 150ms; */\n  /* transition-timing-function: ease-in-out; */\n  padding: 0;\n  margin: 10px;\n  display: inline-block;\n  width: 210px;\n  background-color: #4285f4;\n  color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  -webkit-transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;\n}\n.container .inner .text-container {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: \"Roboto\", arial, sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.21px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  width: 166px;\n  padding-top: 10px;\n}\n.container .inner .instruction-steps {\n  margin-top: 40px;\n  -webkit-animation: instructionAni 0.4s ease-out;\n  animation: instructionAni 0.4s ease-out;\n}\n@-webkit-keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes instructionAni {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .instruction-steps .instruction-step {\n  font-size: 12px;\n  line-height: 20px;\n}\n.container .inner .instruction-steps .instruction-step .step-highline {\n  color: rgba(0, 0, 0, 0.8);\n  font-weight: bold;\n  margin: 0 5px;\n}\n.container .inner .instruction-steps img {\n  margin: 15px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.container .inner .instruction-steps .instruction-image {\n  height: 50%;\n  width: 50%;\n}\n@media screen and (max-width: 600px) {\n  .container .title {\n    padding: 45px 20px 25vh 20px;\n    text-align: center;\n  }\n  .container .inner {\n    margin: 10px;\n  }\n  .container .inner .instruction-steps {\n    margin-top: 10px;\n    text-align: justify;\n  }\n  .container .inner .instruction-steps img {\n    margin: 10px;\n    height: 90% !important;\n    width: 90% !important;\n  }\n  .container .inner .ads-account-list {\n    padding: 10px;\n    padding-top: 20px;\n  }\n  .container .inner .ads-account-list .ads-account-list-title {\n    text-align: center;\n  }\n  .container .submit-button {\n    padding: 0;\n    padding-right: 5px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FkZC1hZHdvcmRzLWFjY291bnRzL2FkZC1hZHdvcmRzLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxrRUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREdJO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDRE47RURHSTtJQUNFLGdDQUFBO1lBQUEsd0JBQUE7RUNETjtBQUNGO0FETEk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNETjtFREdJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0ROO0FBQ0Y7QURLSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0hOO0FETUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0pOO0FET0k7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTE47QURPTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRE9RO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEU007RUFDRSxhQUFBO0FDUFI7QURXSTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1ROO0FEV0k7RUFDRSxhQUFBO0FDVE47QURXSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ROO0FEV007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEV1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNUVjtBRGFVO0VBQ0UsWUFBQTtBQ1haO0FEZ0JNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ2RSO0FEaUJNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDZlI7QURtQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0VBQUE7QUNsQk47QURvQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNsQlI7QURxQlU7RUFDRSxlQUFBO0FDbkJaO0FEd0JNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ3RCUjtBRHdCUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDdEJWO0FEeUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3ZCVjtBRDJCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUN6QlI7QUQyQlE7RUFDRSxnQkFBQTtBQ3pCVjtBRDJCVTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSw0Q0FBQTtFQUNBLG9DQUFBO0FDMUJaO0FEMkJZO0VBQ0U7SUFDRSxVQUFBO0VDekJkO0VEMkJZO0lBQ0UsVUFBQTtFQ3pCZDtBQUNGO0FEbUJZO0VBQ0U7SUFDRSxVQUFBO0VDekJkO0VEMkJZO0lBQ0UsVUFBQTtFQ3pCZDtBQUNGO0FENEJZO0VBQ0UseUNBQUE7QUMxQmQ7QUQ4QlU7RUFDRSxjQUFBO0FDNUJaO0FEK0JVO0VBQ0UsYUFBQTtBQzdCWjtBRGdDVTs7RUFFRSxtQkFBQTtVQUFBLGFBQUE7QUM5Qlo7QURpQ1U7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQy9CWjtBRGtDVTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ2hDWjtBRG1DVTs7RUFFRSxlQUFBO0FDakNaO0FEb0NVOztFQUVFLGdCQUFBO0FDbENaO0FEd0NJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDdENOO0FEd0NJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSx1REFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUZBQUE7RUFBQSwyRUFBQTtBQ3RDTjtBRHlDSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDdkNOO0FEMENJO0VBQ0UsZ0JBQUE7RUFFQSwrQ0FBQTtFQUNBLHVDQUFBO0FDekNOO0FEMENNO0VBQ0U7SUFDRSxVQUFBO0VDeENSO0VEMENNO0lBQ0UsVUFBQTtFQ3hDUjtBQUNGO0FEa0NNO0VBQ0U7SUFDRSxVQUFBO0VDeENSO0VEMENNO0lBQ0UsVUFBQTtFQ3hDUjtBQUNGO0FEMkNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDekNSO0FEMkNRO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUN6Q1Y7QUQ2Q007RUFDRSxZQUFBO0VBQ0Esd0VBQUE7QUMzQ1I7QUQ4Q007RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQzVDUjtBRGtEQTtFQUVJO0lBQ0UsNEJBQUE7SUFDQSxrQkFBQTtFQ2hESjtFRGtERTtJQUNFLFlBQUE7RUNoREo7RURrREk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDaEROO0VEa0RNO0lBQ0UsWUFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7RUNoRFI7RURvREk7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUNsRE47RURvRE07SUFDRSxrQkFBQTtFQ2xEUjtFRHNERTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUNwREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRkLWFkd29yZHMtYWNjb3VudHMvYWRkLWFkd29yZHMtYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcblxuICBoNSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZiNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNjBweCAzMHB4IDAgNDVweDtcbiAgICBoZWlnaHQ6IDI3dmg7XG4gIH1cblxuICAuaW5uZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTZ2aDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW46IDQwcHggMzBweCAzMHB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgQGtleWZyYW1lcyBmb3JtQW5pIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICBcbiAgICAubm90ZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIH1cblxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cblxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG1pbi13aWR0aDogMzUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC1zdHlsZTogdGFob21hO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWVzc2FnZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RlcCB7XG4gICAgICBwYWRkaW5nOiAyLjVweCA2cHggMi41cHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogIzAzOWJlNTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLmxvZ2luV2l0aEdvb2dsZSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29ubmVjdC1ieS1lbWFpLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgfVxuXG4gICAgICAuZGlzY29ubmVjdC1ieS1lbWFpbC1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2Y0OTNjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbWl0LWFjY291bnQtbm90aWZ5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZGFya29yYW5nZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuYWRzLWFjY291bnQtbGlzdCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gICAgICAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIHtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcblxuICAgICAgICBtYXQtdGFibGUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAgICAgICBtYXQtcm93IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3dBcHBlYXJhbmNlIDAuNHMgbGluZWFyO1xuICAgICAgICAgICAgQGtleWZyYW1lcyByb3dBcHBlYXJhbmNlIHtcbiAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWNlbGwge1xuICAgICAgICAgICAgY29sb3I6ICM0MGE1ZWM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRpc2FibGVkLWNlbGwge1xuICAgICAgICAgICAgY29sb3I6IHNpbHZlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuICAgICAgICAgIG1hdC1jZWxsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgMTIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkLFxuICAgICAgICAgIG1hdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1oZWFkZXItY2VsbCxcbiAgICAgICAgICBtYXQtY2VsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWhlYWRlci1yb3csXG4gICAgICAgICAgbWF0LXJvdyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMyZDc3ZjM7XG4gICAgfVxuICAgIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvKiBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgKi9cbiAgICAgIC8qIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7ICovXG4gICAgICAvKiB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtczsgKi9cbiAgICAgIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgKi9cbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjIxOHMsIGJvcmRlci1jb2xvciAwLjIxOHMsIGJveC1zaGFkb3cgMC4yMThzO1xuICAgIH1cblxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjIxcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTY2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluc3RydWN0aW9uQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgICBhbmltYXRpb246IGluc3RydWN0aW9uQW5pIDAuNHMgZWFzZS1vdXQ7XG4gICAgICBAa2V5ZnJhbWVzIGluc3RydWN0aW9uQW5pIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5zdHJ1Y3Rpb24tc3RlcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgLnN0ZXAtaGlnaGxpbmUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgIH1cblxuICAgICAgLmluc3RydWN0aW9uLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDQ1cHggMjBweCAyNXZoIDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pbm5lciB7XG4gICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgIC5pbnN0cnVjdGlvbi1zdGVwcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAgICAgICAuYWRzLWFjY291bnQtbGlzdC10aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbn1cbi5jb250YWluZXIgaDUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmI1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmZmZmI1IDAlLCAjMjQ3YmEwIDc0JSk7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA2MHB4IDMwcHggMCA0NXB4O1xuICBoZWlnaHQ6IDI3dmg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWluLWhlaWdodDogNTUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE2dmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luOiA0MHB4IDMwcHggMzBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN1Ym1pdC1idXR0b24ge1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBzaWx2ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLm1lc3NhZ2UgLm1lc3NhZ2UtdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IHRhaG9tYTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRpdGxlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5tZXNzYWdlIC5tZXNzYWdlLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnN0ZXAge1xuICBwYWRkaW5nOiAyLjVweCA2cHggMi41cHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMzliZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYm94IHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5sb2dpbldpdGhHb29nbGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmxvZ2luV2l0aEdvb2dsZSBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIGJ1dHRvbjpkaXNhYmxlZCBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5jb25uZWN0LWJ5LWVtYWktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29udGFpbmVyIC5pbm5lciAubG9naW5XaXRoR29vZ2xlIC5kaXNjb25uZWN0LWJ5LWVtYWlsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNjZjQ5M2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5saW1pdC1hY2NvdW50LW5vdGlmeSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmRpdi1jb25uZWN0LWFjY291bnQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuZGl2LWNvbm5lY3QtYWNjb3VudC1idXR0b24gYnV0dG9uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC10aXRsZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXRpdGxlIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtcm93IHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvd0FwcGVhcmFuY2UgMC40cyBsaW5lYXI7XG4gIGFuaW1hdGlvbjogcm93QXBwZWFyYW5jZSAwLjRzIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm93QXBwZWFyYW5jZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDE1NSwgMjI5LCAwLjA1KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1jZWxsIHtcbiAgY29sb3I6ICM0MGE1ZWM7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSAuZGlzYWJsZWQtY2VsbCB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDEpLFxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGw6bnRoLWNoaWxkKDEpIHtcbiAgZmxleDogMCAwIDEyJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItY2VsbDpsYXN0LWNoaWxkLFxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWNlbGw6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtaGVhZGVyLWNlbGwsXG4uY29udGFpbmVyIC5pbm5lciAuYWRzLWFjY291bnQtbGlzdCAuYWRzLWFjY291bnQtbGlzdC13cmFwcGVyIG1hdC10YWJsZSBtYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5hZHMtYWNjb3VudC1saXN0IC5hZHMtYWNjb3VudC1saXN0LXdyYXBwZXIgbWF0LXRhYmxlIG1hdC1oZWFkZXItcm93LFxuLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3Qtd3JhcHBlciBtYXQtdGFibGUgbWF0LXJvdyB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAuZy1zaWduLWluLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzJkNzdmMztcbn1cbi5jb250YWluZXIgLmlubmVyIC5nLXNpZ24taW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7ICovXG4gIC8qIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7ICovXG4gIC8qIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zOyAqL1xuICAvKiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7ICovXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjE4cywgYm9yZGVyLWNvbG9yIDAuMjE4cywgYm94LXNoYWRvdyAwLjIxOHM7XG59XG4uY29udGFpbmVyIC5pbm5lciAudGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDE2NnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwcyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnN0cnVjdGlvbkFuaSAwLjRzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGluc3RydWN0aW9uQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGluc3RydWN0aW9uQW5pIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIC5pbnN0cnVjdGlvbi1zdGVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5pbnN0cnVjdGlvbi1zdGVwcyAuaW5zdHJ1Y3Rpb24tc3RlcCAuc3RlcC1oaWdobGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIGltZyB7XG4gIG1hcmdpbjogMTVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLmluc3RydWN0aW9uLXN0ZXBzIC5pbnN0cnVjdGlvbi1pbWFnZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC50aXRsZSB7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDI1dmggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAuaW5zdHJ1Y3Rpb24tc3RlcHMgaW1nIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3Qge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLmFkcy1hY2NvdW50LWxpc3QgLmFkcy1hY2NvdW50LWxpc3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udGFpbmVyIC5zdWJtaXQtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"

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
                if (error.error.messages[0] === 'Bạn không có tài khoản hợp lệ.') {
                    this._dialogService._openErrorDialog({ messages: ['Chúng tôi không tìm thấy tài khoản Google Ads nào trong Gmail của bạn.'] }, true);
                }
                else {
                    this._dialogService._openErrorDialog(error.error, true);
                }
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