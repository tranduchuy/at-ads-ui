(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-upgrade-licence-upgrade-licence-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/upgrade-licence/upgrade-licence.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/upgrade-licence/upgrade-licence.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    NÂNG CẤP TÀI KHOẢN\n    <p class=\"notice\">\n      Hãy nâng cấp tài khoản của bạn để trải nghiệm những tính năng tuyệt vời nhất!\n    </p>\n  </div>\n\n  <div class=\"package-wrapper\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\">\n    <div class=\"package\">\n      <span class=\"label-base free-label\">CƠ BẢN</span>\n      <p class=\"package-price\">\n        Miễn phí\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base vip-label\">TỐI ƯU</span>\n      <p class=\"package-price\">\n        500.000 VNĐ/Tháng\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n        </ul>\n      </div>\n      <div class=\"register-package-button\" (click)=\"openUpgradeLicenceDialog('VIP1', 'Tối ưu')\">\n        <button mat-raised-button color=\"accent\">Đăng ký ngay</button>\n      </div>\n    </div>\n    <div class=\"package\">\n      <span class=\"label-base custom-label\">ĐỐI TÁC</span>\n      <p class=\"package-price\">\n        Liên hệ\n      </p>\n      <div style=\"padding: 10px 25px 10px 25px\">\n        <mat-divider></mat-divider>\n      </div>\n      <div class=\"package-benefit\">\n        <ul>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo tần suất\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhà mạng (3G/4G)\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo tự động ít hơn 5 giây\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Tùy chỉnh danh sách IP cần chặn\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Báo cáo quản trị IP click\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo hành vi người dùng\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Chặn click ảo theo nhắm chọn vị trí\n          </li>\n          <li>\n            <mat-icon>check</mat-icon>\n            Hỗ trợ gửi bồi hoàn phí từ Google\n          </li>\n          <li class=\"benefit-highline\">\n            <mat-icon>check</mat-icon>\n            Có 1 nhân viên hỗ trợ riêng\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = ".container {\n  width: 100%;\n  height: 90vh;\n}\n.container .main-title {\n  padding: 120px 20px 250px 20px;\n  background-color: #0cbaba;\n  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);\n  text-align: center;\n  background-attachment: fixed;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  text-shadow: 1px 1px 2px black;\n}\n.container .main-title .notice {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: italic;\n}\n.container .package-wrapper {\n  position: relative;\n  z-index: 100;\n  top: -32vh;\n}\n.container .package-wrapper .package {\n  background: white;\n  -webkit-filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.4));\n          filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.4));\n  padding-bottom: 20px;\n  width: 21vw;\n  margin: 35px;\n  border-radius: 5px;\n  transition: 0.2s;\n}\n.container .package-wrapper .package:hover {\n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n.container .package-wrapper .package .register-package-button {\n  width: 100%;\n}\n.container .package-wrapper .package .register-package-button button {\n  margin: 0 auto;\n  display: table;\n}\n.container .package-wrapper .package .package-price {\n  width: 100%;\n  padding-top: 20px;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n.container .package-wrapper .package .package-benefit {\n  padding: 20px;\n  padding-top: 0;\n}\n.container .package-wrapper .package .package-benefit .benefit-title {\n  font-size: 18px;\n}\n.container .package-wrapper .package .package-benefit ul {\n  list-style: none;\n  padding-left: 0;\n}\n.container .package-wrapper .package .package-benefit ul .benefit-highline {\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.8);\n}\n.container .package-wrapper .package .package-benefit ul li {\n  padding-bottom: 5px;\n}\n.container .package-wrapper .package .package-benefit ul li mat-icon {\n  color: #44b543;\n  font-size: 18px;\n}\n.container .package-wrapper .package .label-base {\n  background: white;\n  box-shadow: 1px 1px 2px gray;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%;\n  text-align: center;\n  display: table;\n  margin: 0 auto;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.container .package-wrapper .package .free-label {\n  background-color: #63d471;\n  background-image: linear-gradient(315deg, #63d471 0%, #233329 74%);\n  color: white;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .vip-label {\n  background: radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, #8a6e2f 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  color: lightyellow;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n.container .package-wrapper .package .custom-label {\n  font-weight: bold;\n  color: gold;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #e0455f;\n  background-image: linear-gradient(147deg, #e0455f 0%, #44000b 74%);\n}\n@media screen and (max-width: 600px) {\n  .container .package-wrapper .package {\n    width: 90vw;\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3VwZ3JhZGUtbGljZW5jZS91cGdyYWRlLWxpY2VuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdXBncmFkZS1saWNlbmNlL3VwZ3JhZGUtbGljZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FDRFI7QURJTTtFQUNFLFdBQUE7QUNGUjtBREdRO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNEVjtBREtNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE1NO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNKUjtBRE1RO0VBQ0UsZUFBQTtBQ0pWO0FET1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMVjtBRE9VO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0xaO0FEUVU7RUFDRSxtQkFBQTtBQ05aO0FET1k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0xkO0FEV007RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1RSO0FEWU07RUFDRSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGFNO0VBQ0UsK1BBQUE7RUFnQkEsa0JBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0FDMUJSO0FENkJNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0FDM0JSO0FEaUNBO0VBR007SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2hDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91cGdyYWRlLWxpY2VuY2UvdXBncmFkZS1saWNlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHggMjUwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNiYWJhO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwY2JhYmEgMCUsICMzODAwMzYgNzQlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcblxuICAgIC5ub3RpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gIH1cblxuICAucGFja2FnZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRvcDogLTMydmg7XG5cbiAgICAucGFja2FnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDIxdnc7XG4gICAgICBtYXJnaW46IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgIH1cblxuICAgICAgLnJlZ2lzdGVyLXBhY2thZ2UtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhY2thZ2UtcHJpY2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucGFja2FnZS1iZW5lZml0IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAgICAgLmJlbmVmaXQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICAgIC5iZW5lZml0LWhpZ2hsaW5lIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogIzQ0YjU0MztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGFiZWwtYmFzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBncmF5O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICAuZnJlZS1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2M2Q0NzE7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM2M2Q0NzEgMCUsICMyMzMzMjkgNzQlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC52aXAtbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgICBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sXG4gICAgICAgICAgICAjZmVkYjM3IDAlLFxuICAgICAgICAgICAgI2ZkYjkzMSA4JSxcbiAgICAgICAgICAgICM5Zjc5MjggMzAlLFxuICAgICAgICAgICAgIzhhNmUyZiA0MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICAgICApLFxuICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChcbiAgICAgICAgICAgIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLFxuICAgICAgICAgICAgI2ZmZmZmZiAwJSxcbiAgICAgICAgICAgICNmZmZmYWMgOCUsXG4gICAgICAgICAgICAjZDFiNDY0IDI1JSxcbiAgICAgICAgICAgICM1ZDRhMWYgNjIuNSUsXG4gICAgICAgICAgICAjNWQ0YTFmIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmN1c3RvbS1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogZ29sZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDQ1NWY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICNlMDQ1NWYgMCUsICM0NDAwMGIgNzQlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLnBhY2thZ2Utd3JhcHBlciB7XG4gICAgICAucGFja2FnZSB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUge1xuICBwYWRkaW5nOiAxMjBweCAyMHB4IDI1MHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwY2JhYmE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwY2JhYmEgMCUsICMzODAwMzYgNzQlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUgLm5vdGljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogLTMydmg7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDIxdnc7XG4gIG1hcmdpbjogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucmVnaXN0ZXItcGFja2FnZS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucmVnaXN0ZXItcGFja2FnZS1idXR0b24gYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5wYWNrYWdlLXByaWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2UgLnBhY2thZ2UtYmVuZWZpdCAuYmVuZWZpdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5wYWNrYWdlLWJlbmVmaXQgdWwgLmJlbmVmaXQtaGlnaGxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAucGFja2FnZS1iZW5lZml0IHVsIGxpIG1hdC1pY29uIHtcbiAgY29sb3I6ICM0NGI1NDM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAubGFiZWwtYmFzZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBncmF5O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNvbnRhaW5lciAucGFja2FnZS13cmFwcGVyIC5wYWNrYWdlIC5mcmVlLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzZDQ3MTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzYzZDQ3MSAwJSwgIzIzMzMyOSA3NCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAudmlwLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI2ZlZGIzNyAwJSwgI2ZkYjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4YTZlMmYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNmZmZmZmYgMCUsICNmZmZmYWMgOCUsICNkMWI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpO1xuICBjb2xvcjogbGlnaHR5ZWxsb3c7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnBhY2thZ2Utd3JhcHBlciAucGFja2FnZSAuY3VzdG9tLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBnb2xkO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDU1ZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgI2UwNDU1ZiAwJSwgIzQ0MDAwYiA3NCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5wYWNrYWdlLXdyYXBwZXIgLnBhY2thZ2Uge1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufSJdfQ== */"

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