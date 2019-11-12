(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-upgrade-licence-upgrade-licence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/upgrade-licence/upgrade-licence.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/upgrade-licence/upgrade-licence.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <span class=\"shiny\">\n      <span class=\"inner-shiny\">Nâng cấp tài khoản</span>\n    </span>\n    <p class=\"notice\">\n      Hãy nâng cấp tài khoản của bạn để trải nghiệm những tính năng tuyệt vời nhất!\n    </p>\n  </div>\n\n  <div class=\"package-wrapper\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\">\n    <div class=\"package\">\n      <span class=\"label-base free-label\">CƠ BẢN</span>\n      <p class=\"package-price\">\n        Miễn phí\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base vip-label\">TỐI ƯU</span>\n      <p class=\"package-price\">\n        500.000 VNĐ/Tháng\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n        </ul>\n      </div>\n      <div class=\"register-package-button\" (click)=\"openUpgradeLicenceDialog('VIP1', 'Tối ưu')\" [class.no-display]=\"isRegisterButtonNotDisplayed\">\n        <button mat-raised-button color=\"accent\">Đăng ký ngay</button>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base custom-label\">ĐỐI TÁC</span>\n      <p class=\"package-price\">\n        Liên hệ\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Có 1 nhân viên hỗ trợ riêng\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/upgrade-licence/upgrade-licence-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/upgrade-licence/upgrade-licence-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UpgradeLicenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeLicenceRoutingModule", function() { return UpgradeLicenceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upgrade_licence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upgrade-licence.component */ "./src/app/main/upgrade-licence/upgrade-licence.component.ts");




var UpgradeLicenceRoutingModule = /** @class */ (function () {
    function UpgradeLicenceRoutingModule() {
    }
    UpgradeLicenceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _upgrade_licence_component__WEBPACK_IMPORTED_MODULE_3__["UpgradeLicenceComponent"]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UpgradeLicenceRoutingModule);
    return UpgradeLicenceRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/upgrade-licence/upgrade-licence.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/upgrade-licence/upgrade-licence.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.container {\n  width: 100%;\n}\n.container .no-display {\n  display: none;\n}\n.container .main-title {\n  padding: 120px 20px 250px 20px;\n  background-color: #000000;\n  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);\n  background-attachment: fixed;\n  text-align: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.container .main-title .notice {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: italic;\n}\n.container .shiny {\n  color: #f5c21b;\n  background: -webkit-gradient(linear, left top, left bottom, from(#f5c21b), to(#d17000));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  display: inline-block;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 30px !important;\n  font-weight: 900;\n  position: relative;\n  text-transform: uppercase;\n}\n.container .shiny::before {\n  -webkit-animation: flare 2s infinite;\n  -webkit-animation-timing-function: linear;\n  background-image: linear-gradient(65deg, transparent 20%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 27%, transparent 27%, transparent 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  content: \"Nâng cấp tài khoản\";\n  color: #fff;\n  display: block;\n  position: absolute;\n}\n.container .shiny::after {\n  color: #fff;\n  display: block;\n  position: absolute;\n  text-shadow: 0 1px #6e4414, 0 2px #6e4414, 0 3px #6e4414, 0 4px #6e4414, 0 5px #6e4414, 0 6px #6e4414, 0 7px #6e4414, 0 8px #6e4414, 0 9px #6e4414, 0 10px #6e4414;\n  top: 0;\n  z-index: -1;\n}\n.container .inner-shiny::after,\n.container .inner-shiny::before {\n  -webkit-animation: sparkle 5s infinite;\n  -webkit-animation-timing-function: linear;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff;\n  content: \"Nâng cấp tài khoản\";\n  display: block;\n  height: 10px;\n  opacity: 0.7;\n  position: absolute;\n  width: 10px;\n}\n.container .inner-shiny::before {\n  -webkit-animation-delay: 0.2s;\n  height: 7px;\n  left: 0.12em;\n  top: 0.8em;\n  width: 7px;\n}\n.container .inner-shiny::after {\n  top: 0.32em;\n  right: -5px;\n}\n@-webkit-keyframes flare {\n  0% {\n    background-position: -180px;\n  }\n  30% {\n    background-position: 500px;\n  }\n  100% {\n    background-position: 500px;\n  }\n}\n@-webkit-keyframes sparkle {\n  0% {\n    opacity: 0;\n  }\n  30% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.8;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.container .package-wrapper {\n  position: relative;\n  z-index: 100;\n  top: -32vh;\n}\n.container .package-wrapper .package {\n  background: white;\n  -webkit-filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.4));\n  padding-bottom: 20px;\n  width: 21vw;\n  margin: 35px;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n.container .package-wrapper .package:hover {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.container .package-wrapper .package .register-package-button {\n  width: 100%;\n}\n.container .package-wrapper .package .register-package-button button {\n  margin: 0 auto;\n  display: table;\n}\n.container .package-wrapper .package .package-price {\n  width: 100%;\n  padding-top: 20px;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n.container .package-wrapper .package .package-benefit {\n  padding: 20px;\n  padding-top: 0;\n}\n.container .package-wrapper .package .package-benefit .benefit-title {\n  font-size: 18px;\n}\n.container .package-wrapper .package .package-benefit ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .package-wrapper .package .package-benefit ul .benefit-highline {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .package-wrapper .package .package-benefit ul li {\n  padding-bottom: 5px;\n}\n.container .package-wrapper .package .package-benefit ul li mat-icon {\n  color: #44b543;\n  font-size: 18px;\n}\n.container .package-wrapper .package .label-base {\n  background: white;\n  box-shadow: 1px 1px 2px gray;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%;\n  text-align: center;\n  display: table;\n  margin: 0 auto;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.container .package-wrapper .package .free-label {\n  background-color: #63d471;\n  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);\n  color: white;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .custom-label {\n  font-weight: bold;\n  color: gold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #e0455f;\n  background-image: linear-gradient(147deg, #e0455f 0%, #44000b 74%);\n}\n@media screen and (max-width: 600px) {\n  .container .package-wrapper {\n    top: -33vh;\n  }\n  .container .package-wrapper .package {\n    width: 90vw;\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91cGdyYWRlLWxpY2VuY2UvdXBncmFkZS1saWNlbmNlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmlldHRyYW4vRGVza3RvcC9jbGljay9mcm9udGVuZC9zcmMvYXBwL21haW4vdXBncmFkZS1saWNlbmNlL3VwZ3JhZGUtbGljZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxXQUFBO0FERUY7QUNBRTtFQUNFLGFBQUE7QURFSjtBQ0NFO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0NJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ0dFO0VBQ0UsY0FBQTtFQUNBLHVGQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRERKO0FDSUU7RUFFRSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0pBQUE7RUFRQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0FEWEo7QUNjRTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrS0FBQTtFQUVBLE1BQUE7RUFDQSxXQUFBO0FEZEo7QUNpQkU7O0VBRUUsc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrSEFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEZko7QUNrQkU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURoQko7QUNtQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBRGpCSjtBQ29CRTtFQUNFO0lBQ0UsMkJBQUE7RURsQko7RUNvQkU7SUFDRSwwQkFBQTtFRGxCSjtFQ29CRTtJQUNFLDBCQUFBO0VEbEJKO0FBQ0Y7QUNxQkU7RUFDRTtJQUNFLFVBQUE7RURuQko7RUNxQkU7SUFDRSxVQUFBO0VEbkJKO0VDcUJFO0lBQ0UsWUFBQTtFRG5CSjtFQ3FCRTtJQUNFLFVBQUE7RURuQko7RUNxQkU7SUFDRSxVQUFBO0VEbkJKO0FBQ0Y7QUNzQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEcEJKO0FDc0JJO0VBQ0UsaUJBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURwQk47QUNzQk07RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FEcEJSO0FDdUJNO0VBQ0UsV0FBQTtBRHJCUjtBQ3NCUTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FEcEJWO0FDd0JNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUR0QlI7QUN5Qk07RUFDRSxhQUFBO0VBQ0EsY0FBQTtBRHZCUjtBQ3lCUTtFQUNFLGVBQUE7QUR2QlY7QUMwQlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUR4QlY7QUMwQlU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FEeEJaO0FDMkJVO0VBQ0UsbUJBQUE7QUR6Qlo7QUMwQlk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRHhCZDtBQzhCTTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FENUJSO0FDK0JNO0VBQ0UseUJBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0FEN0JSO0FDZ0NNO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0FEN0NSO0FDZ0RNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0FEOUNSO0FDb0RBO0VBRUk7SUFDRSxVQUFBO0VEbERKO0VDbURJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RURqRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXBncmFkZS1saWNlbmNlL3VwZ3JhZGUtbGljZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLm5vLWRpc3BsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHBhZGRpbmc6IDEyMHB4IDIwcHggMjUwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzAwMDAwMCAwJSwgIzA0NjE5ZiA3NCUpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUgLm5vdGljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbnRhaW5lciAuc2hpbnkge1xuICBjb2xvcjogI2Y1YzIxYjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjVjMjFiKSwgdG8oI2QxNzAwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbnRhaW5lciAuc2hpbnk6OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmbGFyZSAycyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2NWRlZywgdHJhbnNwYXJlbnQgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMjclLCB0cmFuc3BhcmVudCAyNyUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIk7Dom5nIGPhuqVwIHTDoGkga2hv4bqjblwiO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWluZXIgLnNoaW55OjphZnRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggIzZlNDQxNCwgMCAycHggIzZlNDQxNCwgMCAzcHggIzZlNDQxNCwgMCA0cHggIzZlNDQxNCwgMCA1cHggIzZlNDQxNCwgMCA2cHggIzZlNDQxNCwgMCA3cHggIzZlNDQxNCwgMCA4cHggIzZlNDQxNCwgMCA5cHggIzZlNDQxNCwgMCAxMHB4ICM2ZTQ0MTQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uY29udGFpbmVyIC5pbm5lci1zaGlueTo6YWZ0ZXIsXG4uY29udGFpbmVyIC5pbm5lci1zaGlueTo6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwYXJrbGUgNXMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAyNXB4ICNmZmYsIDAgMCAzMHB4ICNmZmYsIDAgMCAzNXB4ICNmZmY7XG4gIGNvbnRlbnQ6IFwiTsOibmcgY+G6pXAgdMOgaSBraG/huqNuXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbn1cbi5jb250YWluZXIgLmlubmVyLXNoaW55OjpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgaGVpZ2h0OiA3cHg7XG4gIGxlZnQ6IDAuMTJlbTtcbiAgdG9wOiAwLjhlbTtcbiAgd2lkdGg6IDdweDtcbn1cbi5jb250YWluZXIgLmlubmVyLXNoaW55OjphZnRlciB7XG4gIHRvcDogMC4zMmVtO1xuICByaWdodDogLTVweDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGFyZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTgwcHg7XG4gIH1cbiAgMzAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MDBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwYXJrbGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6IC0zMnZoO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAyMXZ3O1xuICBtYXJnaW46IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnJlZ2lzdGVyLXBhY2thZ2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnJlZ2lzdGVyLXBhY2thZ2UtYnV0dG9uIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1wcmljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5wYWNrYWdlLWJlbmVmaXQgLmJlbmVmaXQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIC5iZW5lZml0LWhpZ2hsaW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCB1bCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCB1bCBsaSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjNDRiNTQzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLmxhYmVsLWJhc2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2Q0NzE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM2M2Q0NzEgMCUsICMyMzMzMjkgNzQlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLmN1c3RvbS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NWY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICNlMDQ1NWYgMCUsICM0NDAwMGIgNzQlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIHtcbiAgICB0b3A6IC0zM3ZoO1xuICB9XG4gIC5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5uby1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHggMjUwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICMwMDAwMDAgMCUsICMwNDYxOWYgNzQlKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLm5vdGljZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgfVxuXG4gIC5zaGlueSB7XG4gICAgY29sb3I6ICNmNWMyMWI7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjVjMjFiKSwgdG8oI2QxNzAwMCkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC5zaGlueTo6YmVmb3JlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTgwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZsYXJlIDJzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDY1ZGVnLFxuICAgICAgdHJhbnNwYXJlbnQgMjAlLFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDIwJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAyNyUsXG4gICAgICB0cmFuc3BhcmVudCAyNyUsXG4gICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJOw6JuZyBj4bqlcCB0w6BpIGtob+G6o25cIjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuc2hpbnk6OmFmdGVyIHtcbiAgICAvLyBjb250ZW50OiBcIkNo4bq3biBDbGljayDhuqJvIDIwMTkgLSBHaeG6o20gxJHhur9uIDUwJSBwaMOtIHF14bqjbmcgY8OhbyBHb29nbGUgQWRzXCI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAjNmU0NDE0LCAwIDJweCAjNmU0NDE0LCAwIDNweCAjNmU0NDE0LCAwIDRweCAjNmU0NDE0LCAwIDVweCAjNmU0NDE0LCAwIDZweCAjNmU0NDE0LCAwIDdweCAjNmU0NDE0LFxuICAgICAgMCA4cHggIzZlNDQxNCwgMCA5cHggIzZlNDQxNCwgMCAxMHB4ICM2ZTQ0MTQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgLmlubmVyLXNoaW55OjphZnRlcixcbiAgLmlubmVyLXNoaW55OjpiZWZvcmUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGFya2xlIDVzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAyNXB4ICNmZmYsIDAgMCAzMHB4ICNmZmYsIDAgMCAzNXB4ICNmZmY7XG4gICAgY29udGVudDogXCJOw6JuZyBj4bqlcCB0w6BpIGtob+G6o25cIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxuXG4gIC5pbm5lci1zaGlueTo6YmVmb3JlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsZWZ0OiAwLjEyZW07XG4gICAgdG9wOiAwLjhlbTtcbiAgICB3aWR0aDogN3B4O1xuICB9XG5cbiAgLmlubmVyLXNoaW55OjphZnRlciB7XG4gICAgdG9wOiAwLjMyZW07XG4gICAgcmlnaHQ6IC01cHg7XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmxhcmUge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xODBweDtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4O1xuICAgIH1cbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGFya2xlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAucGFja2FnZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRvcDogLTMydmg7XG5cbiAgICAucGFja2FnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDIxdnc7XG4gICAgICBtYXJnaW46IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgIH1cblxuICAgICAgLnJlZ2lzdGVyLXBhY2thZ2UtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhY2thZ2UtcHJpY2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucGFja2FnZS1iZW5lZml0IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAgICAgLmJlbmVmaXQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICAgIC5iZW5lZml0LWhpZ2hsaW5lIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogIzQ0YjU0MztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGFiZWwtYmFzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBncmF5O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICAuZnJlZS1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2Q0NzE7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM2M2Q0NzEgMCUsICMyMzMzMjkgNzQlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC52aXAtbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sXG4gICAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICAgI2ZkYjkzMSA4JSxcbiAgICAgICAgICAgICM5Zjc5MjggMzAlLFxuICAgICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICAgICApLFxuICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxuICAgICAgICAgICAgI2ZmZmZmZiAwJSxcbiAgICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgICAjZDFiNDY0IDI1JSxcbiAgICAgICAgICAgICM1ZDRhMWYgNjIuNSUsXG4gICAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmN1c3RvbS1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogZ29sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NWY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICNlMDQ1NWYgMCUsICM0NDAwMGIgNzQlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnBhY2thZ2Utd3JhcHBlciB7XG4gICAgICB0b3A6IC0zM3ZoO1xuICAgICAgLnBhY2thZ2Uge1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/upgrade-licence/upgrade-licence.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/upgrade-licence/upgrade-licence.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpgradeLicenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeLicenceComponent", function() { return UpgradeLicenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");






var UpgradeLicenceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpgradeLicenceComponent, _super);
    function UpgradeLicenceComponent(_dialogService, _sessionService, _fuseProgressBarService) {
        var _this = _super.call(this) || this;
        _this._dialogService = _dialogService;
        _this._sessionService = _sessionService;
        _this._fuseProgressBarService = _fuseProgressBarService;
        return _this;
    }
    UpgradeLicenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fuseProgressBarService.show();
        var sub = this._sessionService.getUser()
            .subscribe(function (user) {
            if (user) {
                _this.loggedInUser = user;
                if (user.licence.type === 'CUSTOM')
                    _this.isRegisterButtonNotDisplayed = true;
                else
                    _this.isRegisterButtonNotDisplayed = false;
                _this._fuseProgressBarService.hide();
            }
        });
        this.subscriptions.push(sub);
    };
    UpgradeLicenceComponent.prototype.openUpgradeLicenceDialog = function (licenceType, licenceName) {
        this._dialogService._openUpgradeLicenceDialog(licenceType, licenceName);
    };
    UpgradeLicenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upgrade-licence',
            template: __webpack_require__(/*! raw-loader!./upgrade-licence.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/upgrade-licence/upgrade-licence.component.html"),
            styles: [__webpack_require__(/*! ./upgrade-licence.component.scss */ "./src/app/main/upgrade-licence/upgrade-licence.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_5__["FuseProgressBarService"]])
    ], UpgradeLicenceComponent);
    return UpgradeLicenceComponent;
}(app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_2__["PageBaseComponent"]));



/***/ }),

/***/ "./src/app/main/upgrade-licence/upgrade-licence.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/upgrade-licence/upgrade-licence.module.ts ***!
  \****************************************************************/
/*! exports provided: UpgradeLicenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeLicenceModule", function() { return UpgradeLicenceModule; });
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upgrade_licence_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upgrade-licence.component */ "./src/app/main/upgrade-licence/upgrade-licence.component.ts");
/* harmony import */ var _upgrade_licence_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upgrade-licence-routing.module */ "./src/app/main/upgrade-licence/upgrade-licence-routing.module.ts");



















var UpgradeLicenceModule = /** @class */ (function () {
    function UpgradeLicenceModule() {
    }
    UpgradeLicenceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_upgrade_licence_component__WEBPACK_IMPORTED_MODULE_17__["UpgradeLicenceComponent"]],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _shared_components_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxGroupModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_components_input_text_input_text_module__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                _shared_components_input_textarea_input_textarea_module__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"],
                _shared_components_select_text_select_text_module__WEBPACK_IMPORTED_MODULE_12__["SelectTextModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_14__["FuseSharedModule"],
                app_shared_pipes_ads_account_id_ads_account_id_module__WEBPACK_IMPORTED_MODULE_15__["AdsAccountIdModule"],
                _upgrade_licence_routing_module__WEBPACK_IMPORTED_MODULE_18__["UpgradeLicenceRoutingModule"]
            ],
            providers: [_upgrade_licence_component__WEBPACK_IMPORTED_MODULE_17__["UpgradeLicenceComponent"]]
        })
    ], UpgradeLicenceModule);
    return UpgradeLicenceModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-upgrade-licence-upgrade-licence-module-es5.js.map