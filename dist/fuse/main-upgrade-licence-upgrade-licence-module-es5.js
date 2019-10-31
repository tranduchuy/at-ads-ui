(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-upgrade-licence-upgrade-licence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/upgrade-licence/upgrade-licence.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/upgrade-licence/upgrade-licence.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    NÂNG CẤP TÀI KHOẢN\n    <p class=\"notice\">\n      Hãy nâng cấp tài khoản của bạn để trải nghiệm những tính năng tuyệt vời nhất!\n    </p>\n  </div>\n\n  <div class=\"package-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n    <div class=\"package\">\n      <span class=\"label-base free-label\">CƠ BẢN</span>\n      <p class=\"package-price\">\n        Miễn phí\n      </p>\n      <div style=\"padding: 10px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <div class=\"benefit-title\">Quyền lợi</div>\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base vip-label\">TỐI ƯU</span>\n      <p class=\"package-price\">\n        500.000 VNĐ/Tháng\n      </p>\n      <div style=\"padding: 10px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <div class=\"benefit-title\">Quyền lợi</div>\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n        </ul>\n      </div>\n      <div class=\"register-package-button\" (click)=\"openUpgradeLicenceDialog('VIP1', 'Tối ưu')\">\n        <button mat-raised-button>Đăng ký ngay</button>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base custom-label\">ĐỐI TÁC</span>\n      <p class=\"package-price\">\n        Liên hệ\n      </p>\n      <div style=\"padding: 10px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <div class=\"benefit-title\">Quyền lợi</div>\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Có 1 nhân viên hỗ trợ riêng\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

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

module.exports = ".container {\n  width: 100%;\n}\n.container .main-title {\n  padding-top: 120px;\n  padding-bottom: 170px;\n  background-color: #0cbaba;\n  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);\n  background-attachment: fixed;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .main-title .notice {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: italic;\n}\n.container .package-wrapper {\n  position: relative;\n  z-index: 100;\n  top: -22vh;\n}\n.container .package-wrapper .package {\n  background: white;\n  -webkit-filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.6));\n          filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.6));\n  padding-bottom: 20px;\n  width: 21vw;\n  margin: 35px;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n.container .package-wrapper .package:hover {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.container .package-wrapper .package .register-package-button {\n  width: 100%;\n}\n.container .package-wrapper .package .register-package-button button {\n  margin: 0 auto;\n  display: table;\n  background: #44b543;\n  color: white;\n}\n.container .package-wrapper .package .package-price {\n  width: 100%;\n  padding-top: 20px;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n.container .package-wrapper .package .package-benefit {\n  padding: 20px;\n}\n.container .package-wrapper .package .package-benefit .benefit-title {\n  font-size: 18px;\n}\n.container .package-wrapper .package .package-benefit ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .package-wrapper .package .package-benefit ul .benefit-highline {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .package-wrapper .package .package-benefit ul li {\n  padding-bottom: 5px;\n}\n.container .package-wrapper .package .package-benefit ul li mat-icon {\n  color: #44b543;\n}\n.container .package-wrapper .package .label-base {\n  background: white;\n  box-shadow: 1px 1px 2px gray;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%;\n  text-align: center;\n  display: table;\n  margin: 0 auto;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.container .package-wrapper .package .free-label {\n  background-color: #63d471;\n  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);\n  color: white;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .custom-label {\n  font-weight: bold;\n  color: gold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #e0455f;\n  background-image: linear-gradient(147deg, #e0455f 0%, #44000b 74%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3VwZ3JhZGUtbGljZW5jZS91cGdyYWRlLWxpY2VuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdXBncmFkZS1saWNlbmNlL3VwZ3JhZGUtbGljZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0VBQUE7RUFFQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0RKO0FER0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ROO0FES0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSEo7QURLSTtFQUNFLGlCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSE47QURLTTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNIUjtBRE1NO0VBQ0UsV0FBQTtBQ0pSO0FES1E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hWO0FET007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUU07RUFDRSxhQUFBO0FDTlI7QURRUTtFQUNFLGVBQUE7QUNOVjtBRFNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDUFY7QURTVTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNQWjtBRFVVO0VBQ0UsbUJBQUE7QUNSWjtBRFNZO0VBQ0UsY0FBQTtBQ1BkO0FEYU07RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1hSO0FEY007RUFDRSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRGVNO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0FDNUJSO0FEK0JNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0FDN0JSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91cGdyYWRlLWxpY2VuY2UvdXBncmFkZS1saWNlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5tYWluLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE3MHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYmFiYTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMGNiYWJhIDAlLCAjMzgwMDM2IDc0JSk7XG5cbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuXG4gICAgLm5vdGljZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIH1cbiAgfVxuXG4gIC5wYWNrYWdlLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG9wOiAtMjJ2aDtcblxuICAgIC5wYWNrYWdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMnB4IDJweCByZ2JhKDAsMCwwLDAuNikpO1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB3aWR0aDogMjF2dztcbiAgICAgIG1hcmdpbjogMzVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICAucmVnaXN0ZXItcGFja2FnZS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDRiNTQzO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGFja2FnZS1wcmljZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wYWNrYWdlLWJlbmVmaXQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5iZW5lZml0LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgICAuYmVuZWZpdC1oaWdobGluZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM0NGI1NDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sYWJlbC1iYXNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGdyYXk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5mcmVlLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzZDQ3MTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzYzZDQ3MSAwJSwgIzIzMzMyOSA3NCUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnZpcC1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSxcbiAgICAgICAgICAgICNmZWRiMzcgMCUsXG4gICAgICAgICAgICAjZmRiOTMxIDglLFxuICAgICAgICAgICAgIzlmNzkyOCAzMCUsXG4gICAgICAgICAgICAjOGE2ZTJmIDQwJSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDgwJVxuICAgICAgICAgICksXG4gICAgICAgICAgcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgICAgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsXG4gICAgICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAgICAgI2ZmZmZhYyA4JSxcbiAgICAgICAgICAgICNkMWI0NjQgMjUlLFxuICAgICAgICAgICAgIzVkNGExZiA2Mi41JSxcbiAgICAgICAgICAgICM1ZDRhMWYgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuY3VzdG9tLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBnb2xkO1xuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDU1ZjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2UwNDU1ZiAwJSwgIzQ0MDAwYiA3NCUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNiYWJhO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMGNiYWJhIDAlLCAjMzgwMDM2IDc0JSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSAubm90aWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdG9wOiAtMjJ2aDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMjF2dztcbiAgbWFyZ2luOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5yZWdpc3Rlci1wYWNrYWdlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5yZWdpc3Rlci1wYWNrYWdlLWJ1dHRvbiBidXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogdGFibGU7XG4gIGJhY2tncm91bmQ6ICM0NGI1NDM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1wcmljZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCAuYmVuZWZpdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5wYWNrYWdlLWJlbmVmaXQgdWwgLmJlbmVmaXQtaGlnaGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIGxpIG1hdC1pY29uIHtcbiAgY29sb3I6ICM0NGI1NDM7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLmxhYmVsLWJhc2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggZ3JheTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAuZnJlZS1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2M2Q0NzE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM2M2Q0NzEgMCUsICMyMzMzMjkgNzQlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnZpcC1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNmZWRiMzcgMCUsICNmZGI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOGE2ZTJmIDQwJSwgdHJhbnNwYXJlbnQgODAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjZmZmZmZmIDAlLCAjZmZmZmFjIDglLCAjZDFiNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLmN1c3RvbS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NWY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICNlMDQ1NWYgMCUsICM0NDAwMGIgNzQlKTtcbn0iXX0= */"

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




var UpgradeLicenceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpgradeLicenceComponent, _super);
    function UpgradeLicenceComponent(_dialogService) {
        var _this = _super.call(this) || this;
        _this._dialogService = _dialogService;
        return _this;
    }
    UpgradeLicenceComponent.prototype.ngOnInit = function () {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
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