(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-user-help-user-help-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/user-help/user-help.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/user-help/user-help.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-help works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/user-help/user-help-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/user-help/user-help-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UserHelpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHelpRoutingModule", function() { return UserHelpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-help.component */ "./src/app/main/user-help/user-help.component.ts");




let UserHelpRoutingModule = class UserHelpRoutingModule {
};
UserHelpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _user_help_component__WEBPACK_IMPORTED_MODULE_3__["UserHelpComponent"]
                }
            ])
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserHelpRoutingModule);



/***/ }),

/***/ "./src/app/main/user-help/user-help.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/user-help/user-help.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXNlci1oZWxwL3VzZXItaGVscC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/user-help/user-help.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/user-help/user-help.component.ts ***!
  \*******************************************************/
/*! exports provided: UserHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHelpComponent", function() { return UserHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserHelpComponent = class UserHelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-help',
        template: __webpack_require__(/*! raw-loader!./user-help.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/user-help/user-help.component.html"),
        styles: [__webpack_require__(/*! ./user-help.component.scss */ "./src/app/main/user-help/user-help.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserHelpComponent);



/***/ }),

/***/ "./src/app/main/user-help/user-help.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/user-help/user-help.module.ts ***!
  \****************************************************/
/*! exports provided: UserHelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHelpModule", function() { return UserHelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-help-routing.module */ "./src/app/main/user-help/user-help-routing.module.ts");
/* harmony import */ var _user_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-help.component */ "./src/app/main/user-help/user-help.component.ts");





let UserHelpModule = class UserHelpModule {
};
UserHelpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_help_component__WEBPACK_IMPORTED_MODULE_4__["UserHelpComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserHelpRoutingModule"]
        ]
    })
], UserHelpModule);



/***/ })

}]);
//# sourceMappingURL=main-user-help-user-help-module-es2015.js.map