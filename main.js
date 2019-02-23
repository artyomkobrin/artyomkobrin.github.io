(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <app-header></app-header>\n</div>\n\n<div class=\"main-container\">\n  <app-main></app-main>\n</div>\n\n<app-foother></app-foother>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n  :host > div.header-container {\n    flex: 0 0 100px; }\n  :host > div.main-container {\n    flex: 1;\n    background: #f6f6f6;\n    overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMeWF2b25cXERlc2t0b3BcXGR1bW15VUkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixhQUFXO0VBQ1gsdUJBQXNCLEVBV3ZCO0VBZEQ7SUFNSSxnQkFBZSxFQUNoQjtFQVBIO0lBVUksUUFBTztJQUNQLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICA+IGRpdi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDAgMCAxMDBweDtcclxuICB9XHJcblxyXG4gID4gZGl2Lm1haW4tY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dummyUI';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _foother_foother_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foother/foother.component */ "./src/app/foother/foother.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _foother_foother_component__WEBPACK_IMPORTED_MODULE_6__["FootherComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/foother/foother.component.html":
/*!************************************************!*\
  !*** ./src/app/foother/foother.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>© 2018-2019 AL</label>\n"

/***/ }),

/***/ "./src/app/foother/foother.component.scss":
/*!************************************************!*\
  !*** ./src/app/foother/foother.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 0 0 30px;\n  background: #303030;\n  color: #898989;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 0.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGhlci9DOlxcVXNlcnNcXEx5YXZvblxcRGVza3RvcFxcZHVtbXlVSS9zcmNcXGFwcFxcZm9vdGhlclxcZm9vdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3RoZXIvZm9vdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAwIDAgMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4gIGNvbG9yOiAjODk4OTg5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/foother/foother.component.ts":
/*!**********************************************!*\
  !*** ./src/app/foother/foother.component.ts ***!
  \**********************************************/
/*! exports provided: FootherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootherComponent", function() { return FootherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootherComponent = /** @class */ (function () {
    function FootherComponent() {
    }
    FootherComponent.prototype.ngOnInit = function () {
    };
    FootherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foother',
            template: __webpack_require__(/*! ./foother.component.html */ "./src/app/foother/foother.component.html"),
            styles: [__webpack_require__(/*! ./foother.component.scss */ "./src/app/foother/foother.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FootherComponent);
    return FootherComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">LOGO</div>\n<div class=\"menu\">\n  <button class=\"menu-btn\">Главная</button>\n  <button class=\"menu-btn\">Цены</button>\n  <button class=\"menu-btn\">Накрутка</button>\n  <button class=\"menu-btn\">Поддержка</button>\n  <i class=\"mdi mdi-account\"></i>\n  <i class=\"mdi mdi-account\"></i>\n</div>\n\n  <div class=\"panel-panel\">\n  <a>\n    <i class=\"material-icons\">\n      account_balance_wallet\n    </i>\n     0\n  </a>\n\n    <label class=\"line\" style=\"margin: 0 10px\">|</label>\n\n    <a>\n      <i class=\"material-icons face\">person</i>\n      <label>регистрация</label>\n    </a>\n    <label class=\"line\" style=\"margin: 0 10px\">|</label>\n  <a>\n    <i class=\"material-icons face\">person</i>\n    <label>войти</label>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  background: #fff;\n  position: relative;\n  margin: 0 auto;\n  display: flex;\n  max-width: 1200px; }\n  :host > div.logo {\n    height: 100%;\n    width: 200px;\n    font-size: 60px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  :host > div.menu {\n    position: absolute;\n    bottom: 0;\n    left: 250px; }\n  :host > div.menu > button.menu-btn {\n      font-size: 1.5rem;\n      background: transparent;\n      cursor: pointer;\n      border: none;\n      border-bottom: 3px solid transparent;\n      margin-right: 30px; }\n  :host > div.menu > button.menu-btn:hover {\n      border-bottom: 3px solid aqua; }\n  :host > div.panel-panel {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 0.5rem;\n    right: 0; }\n  a {\n  font-size: 1rem;\n  color: #b4b4b4;\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxjQUFhO0VBQ2Isa0JBQWlCLEVBeUNsQjtFQS9DRDtJQVNJLGFBQVk7SUFDWixhQUFZO0lBQ1osZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYiwwQkFBaUI7T0FBakIsdUJBQWlCO1FBQWpCLHNCQUFpQjtZQUFqQixrQkFBaUIsRUFDbEI7RUFoQkg7SUFvQkksbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxZQUFXLEVBZVo7RUFyQ0g7TUF5Qk0sa0JBQWlCO01BQ2pCLHdCQUF1QjtNQUN2QixnQkFBZTtNQUNmLGFBQVk7TUFDWixxQ0FBbUM7TUFDbkMsbUJBQWtCLEVBQ25CO0VBL0JMO01Ba0NNLDhCQUE0QixFQUM3QjtFQW5DTDtJQXdDSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsU0FBUSxFQUNUO0VBT0g7RUFHRSxnQkFBZTtFQUVmLGVBQWM7RUFFZCxjQUFhO0VBRWIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG5cclxuICA+IGRpdi5sb2dvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gID4gZGl2Lm1lbnUge1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDI1MHB4O1xyXG5cclxuICAgID4gYnV0dG9uLm1lbnUtYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICA+IGJ1dHRvbi5tZW51LWJ0bjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIGFxdWE7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgPiBkaXYucGFuZWwtcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmEge1xyXG4gIC8vaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIGNvbG9yOiAjYjRiNGI0O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n<p>main works!</p>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f6f6f6;\n  position: relative;\n  margin: 0 auto;\n  max-width: 1200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXEx5YXZvblxcRGVza3RvcFxcZHVtbXlVSS9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFFbEIsZUFBYztFQUNkLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lyavon\Desktop\dummyUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map