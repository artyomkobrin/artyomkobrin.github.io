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
/* harmony import */ var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'signin', component: _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
];
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

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n  :host > div.header-container {\n    flex: 0 0 100px; }\n  :host div.main-container {\n    flex: 1;\n    overflow-y: scroll;\n    background: url('slice.png') repeat-x;\n    background-size: auto 376px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMeWF2b25cXERlc2t0b3BcXGR1bW15VUkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixhQUFXO0VBQ1gsdUJBQXNCLEVBYXZCO0VBaEJEO0lBTUksZ0JBQWUsRUFDaEI7RUFQSDtJQVVJLFFBQU87SUFDUCxtQkFBa0I7SUFFakIsc0NBQStDO0lBQy9DLDRCQUEyQixFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gID4gZGl2LmhlYWRlci1jb250YWluZXIge1xyXG4gICAgZmxleDogMCAwIDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgIGRpdi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9zbGljZS5wbmcnKSByZXBlYXQteDtcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMzc2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _home_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/main/main.component */ "./src/app/home/main/main.component.ts");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _home_foother_foother_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/foother/foother.component */ "./src/app/home/foother/foother.component.ts");
/* harmony import */ var _home_main_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/main/slider/slider.component */ "./src/app/home/main/slider/slider.component.ts");
/* harmony import */ var _home_main_info_panels_info_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/main/info-panels/info-panels.component */ "./src/app/home/main/info-panels/info-panels.component.ts");
/* harmony import */ var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/signin/signin.component */ "./src/app/authentication/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
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
                _home_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _home_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_foother_foother_component__WEBPACK_IMPORTED_MODULE_6__["FootherComponent"],
                _home_main_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
                _home_main_info_panels_info_panels_component__WEBPACK_IMPORTED_MODULE_8__["InfoPanelsComponent"],
                _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
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

/***/ "./src/app/authentication/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>LOGO!</h1>\n  <h2 style=\"padding-bottom: 20px; color: #5276cf;\">Добро пожаловать!</h2>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Введите email</div>\n  </div>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"password\">\n    <div class=\"custom-placeholder\">Введите пароль</div>\n  </div>\n\n  <div style=\"justify-content: flex-end; display: flex; width: 320px\">\n    <button class=\"active-btn\" routerLink=\"/home\" (click)=\"login()\">Войти</button>\n  </div>\n\n\n  <div style=\"width: 100%;display: flex; justify-content: space-around; position: absolute; bottom: -25px\">\n    <label>Забыли пароль?</label>\n    <label>Регистрация</label>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('slice.png') repeat-x;\n  background-size: auto 376px; }\n\ndiv.container {\n  position: relative;\n  padding: 30px;\n  height: 520px;\n  width: 450px;\n  border: 2px solid grey;\n  border-radius: 5%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column; }\n\ndiv.container div.group {\n    width: 320px;\n    height: 52px;\n    position: relative; }\n\ndiv.container div.group > div.custom-placeholder {\n      position: absolute;\n      top: -10px;\n      left: 15px;\n      background: white;\n      padding: 0 5px;\n      color: #5276cf; }\n\ndiv.container div.group > input.default {\n      width: 100%;\n      height: 100%;\n      border: 1px solid grey;\n      border-radius: 5px;\n      padding: 0 20px; }\n\ndiv.container div.group > input.default:focus {\n        border: 2px solid #5276cf; }\n\n:focus::-webkit-input-placeholder {\n  color: transparent; }\n\n:focus::-moz-placeholder {\n  color: transparent; }\n\n:focus:-moz-placeholder {\n  color: transparent; }\n\n:focus:-ms-input-placeholder {\n  color: transparent; }\n\n.group {\n  margin-bottom: 30px;\n  position: relative; }\n\n.active-btn {\n  background: #fff;\n  color: #5276cf;\n  cursor: pointer;\n  font-size: 16px;\n  width: auto;\n  padding: 0 25px;\n  height: 45px;\n  border: 3px solid #5276cf;\n  border-radius: 10px;\n  font-weight: 400; }\n\n.active-btn:hover {\n    background: #5276cf;\n    color: #fff;\n    transition: all .5s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxhdXRoZW50aWNhdGlvblxcc2lnbmluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixRQUFPO0VBQ1Asc0NBQXFEO0VBQ3JELDRCQUEyQixFQUU1Qjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLHVCQUFzQixFQTZCdkI7O0FBdkNEO0lBYUksYUFBWTtJQUNaLGFBQVk7SUFDWixtQkFBa0IsRUF1QnJCOztBQXRDRDtNQWtCTSxtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLFdBQVU7TUFDVixrQkFBaUI7TUFDakIsZUFBYztNQUNkLGVBQWMsRUFDZjs7QUF4Qkw7TUEyQkksWUFBVztNQUNYLGFBQVc7TUFDWCx1QkFBc0I7TUFDdEIsbUJBQWtCO01BQ2xCLGdCQUFlLEVBTWhCOztBQXJDSDtRQWtDTSwwQkFBeUIsRUFDMUI7O0FBTUw7RUFBbUMsbUJBQWtCLEVBQUU7O0FBQ3ZEO0VBQW1DLG1CQUFrQixFQUFFOztBQUN2RDtFQUFtQyxtQkFBa0IsRUFBRTs7QUFDdkQ7RUFBbUMsbUJBQWtCLEVBQUU7O0FBR3ZEO0VBQ0Usb0JBQW1CO0VBQ25CLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQU9qQjs7QUFqQkQ7SUFhSSxvQkFBbUI7SUFDbkIsWUFBVztJQUNYLGdDQUErQixFQUNoQyIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc2xpY2UucG5nJykgcmVwZWF0LXg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDM3NnB4O1xyXG5cclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgZGl2Lmdyb3VwIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICA+IGRpdi5jdXN0b20tcGxhY2Vob2xkZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgY29sb3I6ICM1Mjc2Y2Y7XHJcbiAgICB9XHJcblxyXG4gID4gaW5wdXQuZGVmYXVsdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzUyNzZjZjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7Y29sb3I6IHRyYW5zcGFyZW50fVxyXG46Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge2NvbG9yOiB0cmFuc3BhcmVudH1cclxuOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtjb2xvcjogdHJhbnNwYXJlbnR9XHJcbjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7Y29sb3I6IHRyYW5zcGFyZW50fVxyXG5cclxuXHJcbi5ncm91cHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFjdGl2ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM1Mjc2Y2Y7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1Mjc2Y2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1Mjc2Y2Y7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
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

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.login = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/authentication/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/authentication/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>LOGO!</h1>\n  <h2 style=\"padding-bottom: 20px; color: #5276cf;\">Добро пожаловать!</h2>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Введите имя</div>\n  </div>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Введите фамилию</div>\n  </div>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Введите email</div>\n  </div>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Введите пароль</div>\n  </div>\n\n  <div class=\"group\">\n    <input class=\"default\" type=\"text\">\n    <div class=\"custom-placeholder\">Подтвердите пароль</div>\n  </div>\n\n  <div style=\"justify-content: flex-end; display: flex; width: 320px\">\n    <button class=\"active-btn\" routerLink=\"/home\" (click)=\"login()\">Регистрироваться</button>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('slice.png') repeat-x;\n  background-size: auto 376px; }\n\ndiv.container {\n  padding: 30px;\n  height: 720px;\n  width: 450px;\n  border: 2px solid grey;\n  border-radius: 5%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column; }\n\ndiv.container div.group {\n    width: 320px;\n    height: 52px;\n    position: relative; }\n\ndiv.container div.group > div.custom-placeholder {\n      position: absolute;\n      top: -10px;\n      left: 15px;\n      background: white;\n      padding: 0 5px;\n      color: #5276cf; }\n\ndiv.container div.group > input.default {\n      width: 100%;\n      height: 100%;\n      border: 1px solid grey;\n      border-radius: 5px;\n      padding: 0 20px; }\n\ndiv.container div.group > input.default:focus {\n        border: 2px solid #5276cf; }\n\n:focus::-webkit-input-placeholder {\n  color: transparent; }\n\n:focus::-moz-placeholder {\n  color: transparent; }\n\n:focus:-moz-placeholder {\n  color: transparent; }\n\n:focus:-ms-input-placeholder {\n  color: transparent; }\n\n.group {\n  margin-bottom: 30px;\n  position: relative; }\n\n.active-btn {\n  background: #fff;\n  color: #5276cf;\n  cursor: pointer;\n  font-size: 16px;\n  width: auto;\n  padding: 0 25px;\n  height: 45px;\n  border: 3px solid #5276cf;\n  border-radius: 10px;\n  font-weight: 400; }\n\n.active-btn:hover {\n    background: #5276cf;\n    color: #fff;\n    transition: all .5s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxhdXRoZW50aWNhdGlvblxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixRQUFPO0VBQ1Asc0NBQXFEO0VBQ3JELDRCQUEyQixFQUU1Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixjQUFhO0VBQ2IsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsdUJBQXNCLEVBNkJ2Qjs7QUF0Q0Q7SUFZSSxhQUFZO0lBQ1osYUFBWTtJQUNaLG1CQUFrQixFQXVCbkI7O0FBckNIO01BaUJNLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsV0FBVTtNQUNWLGtCQUFpQjtNQUNqQixlQUFjO01BQ2QsZUFBYyxFQUNmOztBQXZCTDtNQTBCTSxZQUFXO01BQ1gsYUFBVztNQUNYLHVCQUFzQjtNQUN0QixtQkFBa0I7TUFDbEIsZ0JBQWUsRUFNaEI7O0FBcENMO1FBaUNRLDBCQUF5QixFQUMxQjs7QUFPUDtFQUFtQyxtQkFBa0IsRUFBRTs7QUFDdkQ7RUFBbUMsbUJBQWtCLEVBQUU7O0FBQ3ZEO0VBQW1DLG1CQUFrQixFQUFFOztBQUN2RDtFQUFtQyxtQkFBa0IsRUFBRTs7QUFHdkQ7RUFDRSxvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBT2pCOztBQWpCRDtJQWFJLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsZ0NBQStCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zbGljZS5wbmcnKSByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMzc2cHg7XHJcblxyXG59XHJcblxyXG5kaXYuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGhlaWdodDogNzIwcHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGRpdi5ncm91cCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgPiBkaXYuY3VzdG9tLXBsYWNlaG9sZGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNTI3NmNmO1xyXG4gICAgfVxyXG5cclxuICAgID4gaW5wdXQuZGVmYXVsdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTI3NmNmO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7Y29sb3I6IHRyYW5zcGFyZW50fVxyXG46Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge2NvbG9yOiB0cmFuc3BhcmVudH1cclxuOmZvY3VzOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtjb2xvcjogdHJhbnNwYXJlbnR9XHJcbjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7Y29sb3I6IHRyYW5zcGFyZW50fVxyXG5cclxuXHJcbi5ncm91cHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFjdGl2ZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM1Mjc2Y2Y7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM1Mjc2Y2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1Mjc2Y2Y7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/authentication/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/home/foother/foother.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/foother/foother.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>© 2018-2019 AL</label>\n"

/***/ }),

/***/ "./src/app/home/foother/foother.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/foother/foother.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 0 0 30px;\n  background: #303030;\n  color: #898989;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 0.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290aGVyL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxob21lXFxmb290aGVyXFxmb290aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2IsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb290aGVyL2Zvb3RoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMCAwIDMwcHg7XHJcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcclxuICBjb2xvcjogIzg5ODk4OTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/foother/foother.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/foother/foother.component.ts ***!
  \***************************************************/
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

var FootherComponent = /** @class */ (function () {
    function FootherComponent() {
    }
    FootherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foother',
            template: __webpack_require__(/*! ./foother.component.html */ "./src/app/home/foother/foother.component.html"),
            styles: [__webpack_require__(/*! ./foother.component.scss */ "./src/app/home/foother/foother.component.scss")]
        })
    ], FootherComponent);
    return FootherComponent;
}());



/***/ }),

/***/ "./src/app/home/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">LOGO</div>\n\n<div class=\"menu\">\n  <button class=\"menu-btn\">Главная</button>\n  <button class=\"menu-btn\">Цены</button>\n  <button class=\"menu-btn\">Накрутка</button>\n  <button class=\"menu-btn\">Поддержка</button>\n  <i class=\"mdi mdi-account\"></i>\n  <i class=\"mdi mdi-account\"></i>\n</div>\n\n<div class=\"panel-panel\">\n\n  <a class=\"header-link\" *ngIf=\"false\">\n    <i class=\"material-icons\">account_balance_wallet</i>\n    <label>0</label>\n  </a>\n\n  <a class=\"header-link\" routerLink=\"/signup\">\n    <i class=\"material-icons face\">person</i>\n    Регистрация\n  </a>\n  <label class=\"line\" style=\"margin: 0 15px; opacity: 0.5;font-size: 14px;\">|</label>\n\n  <a class=\"header-link\" routerLink=\"/signin\">\n    <i class=\"material-icons face\">person</i>\n    Войти\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/home/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  background: #fff;\n  position: relative;\n  margin: 0 auto;\n  display: flex;\n  max-width: 1200px; }\n  :host > div.logo {\n    height: 100%;\n    width: 200px;\n    font-size: 60px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  :host > div.menu {\n    position: absolute;\n    bottom: 0;\n    left: 250px;\n    height: 50px; }\n  :host > div.menu > button.menu-btn {\n      font-size: 1.5rem;\n      background: transparent;\n      cursor: pointer;\n      border: none;\n      border-bottom: 3px solid transparent;\n      margin-right: 30px;\n      padding-bottom: 5px; }\n  :host > div.menu > button.menu-btn:hover {\n      transition: all .2s ease-in-out;\n      color: #5276cf;\n      border-bottom: 3px solid #5276cf; }\n  :host > div.panel-panel {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 0.5rem;\n    right: 0; }\n  a {\n  font-size: 1rem;\n  color: #b4b4b4;\n  display: flex;\n  align-items: center; }\n  a.header-link {\n  font-size: 1rem;\n  color: #b4b4b4;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none; }\n  a.header-link:hover {\n    color: #5276cf; }\n  a.header-link > i {\n    font-size: 18px;\n    margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWFkZXIvQzpcXFVzZXJzXFxMeWF2b25cXERlc2t0b3BcXGR1bW15VUkvc3JjXFxhcHBcXGhvbWVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBVztFQUNYLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGNBQWE7RUFDYixrQkFBaUIsRUEyQ2xCO0VBakREO0lBU0ksYUFBWTtJQUNaLGFBQVk7SUFDWixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsY0FBYTtJQUNiLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQixFQUNsQjtFQWhCSDtJQW1CSSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFlBQVc7SUFDWCxhQUFZLEVBaUJiO0VBdkNIO01BeUJNLGtCQUFpQjtNQUNqQix3QkFBdUI7TUFDdkIsZ0JBQWU7TUFDZixhQUFZO01BQ1oscUNBQW9DO01BQ3BDLG1CQUFrQjtNQUNsQixvQkFBbUIsRUFDcEI7RUFoQ0w7TUFtQ00sZ0NBQStCO01BQy9CLGVBQWM7TUFDZCxpQ0FBZ0MsRUFDakM7RUF0Q0w7SUEwQ0ksY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFNBQVEsRUFDVDtFQUlIO0VBQ0UsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsY0FBYTtFQUNiLG9CQUFtQixFQUNwQjtFQUdEO0VBQ0UsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFVdEI7RUFqQkQ7SUFVSSxlQUFjLEVBQ2Y7RUFYSDtJQWNJLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcblxyXG4gID4gZGl2LmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgPiBkaXYubWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICA+IGJ1dHRvbi5tZW51LWJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gYnV0dG9uLm1lbnUtYnRuOmhvdmVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgY29sb3I6ICM1Mjc2Y2Y7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTI3NmNmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiBkaXYucGFuZWwtcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogI2I0YjRiNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5hLmhlYWRlci1saW5rIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM1Mjc2Y2Y7XHJcbiAgfVxyXG5cclxuICA+IGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/home/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/home/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <app-header></app-header>\n</div>\n\n<div class=\"main-container\">\n  <app-main></app-main>\n</div>\n\n<app-foother></app-foother>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n  :host > div.header-container {\n    flex: 0 0 125px; }\n  :host div.main-container {\n    flex: 1;\n    overflow-y: scroll;\n    background: url('slice.png') repeat-x;\n    background-size: auto 376px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEx5YXZvblxcRGVza3RvcFxcZHVtbXlVSS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixhQUFXO0VBQ1gsdUJBQXNCLEVBWXZCO0VBZkQ7SUFNSSxnQkFBZSxFQUNoQjtFQVBIO0lBVUksUUFBTztJQUNQLG1CQUFrQjtJQUNsQixzQ0FBa0Q7SUFDbEQsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgPiBkaXYuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAwIDAgMTI1cHg7XHJcbiAgfVxyXG5cclxuICBkaXYubWFpbi1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NsaWNlLnBuZycpIHJlcGVhdC14O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDM3NnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/main/info-panels/info-panels.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/main/info-panels/info-panels.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"base-info-panel\">\n\n  <div class=\"image-box\">\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;margin: 0 0 28px;color: #626262;\">\n      <h2>Интернет в третьем измерении</h2>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;margin: 0 0 28px;color: #626262;\">\n      <h2>Интернет в третьем измерении</h2>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n  <div class=\"image-box\">\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n  <div class=\"image-box\">\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;margin: 0 0 28px;color: #626262;\">\n      <h2>Интернет в третьем измерении</h2>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"!showLearnMorePanel\" class=\"button-learn-more\">\n  <button class=\"active-btn\" (click)=\"showMore()\">Узнать больше</button>\n</div>\n\n<div class=\"additional-info-panel\" *ngIf=\"showLearnMorePanel\">\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;color: #626262;\">\n      <h3>Интернет в третьем измерении</h3>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n  <div class=\"image-box\" >\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n  <div class=\"image-box\">\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;margin: 0 0 28px;color: #626262;\">\n      <h2>Интернет в третьем измерении</h2>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n\n  <div class=\"text-box\">\n    <div style=\"font-size: 36px;color: #626262;\">\n      <h2>Интернет в третьем измерении</h2>\n      <p style=\"font-size: 28px\">3D графика – лучший способ увеличить привлекательность ваших онлайн-решений. Технологии\n        Blend4Web позволяют достичь этого с максимальной эффективностью.</p>\n    </div>\n  </div>\n\n  <div class=\"image-box\">\n    <img src=\"../../../assets/car.png\" style=\"height: 100%;width: 100%\">\n  </div>\n\n</div>\n\n<div *ngIf=\"showLearnMorePanel\" class=\"button-learn-more\">\n  <button class=\"active-btn\" (click)=\"showMore()\">Скрыть</button>\n</div>\n"

/***/ }),

/***/ "./src/app/home/main/info-panels/info-panels.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/main/info-panels/info-panels.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n  :host > div.base-info-panel,\n  :host div.additional-info-panel {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding: 25px 0; }\n  :host > div.base-info-panel > div.image-box,\n    :host div.additional-info-panel > div.image-box {\n      display: flex;\n      width: 600px;\n      height: 400px;\n      margin-bottom: 20px; }\n  :host > div.base-info-panel > div.text-box,\n    :host div.additional-info-panel > div.text-box {\n      display: flex;\n      width: 600px;\n      height: 400px;\n      margin-bottom: 20px;\n      padding: 30px; }\n  :host > div.button-learn-more {\n    display: flex;\n    flex: 0 0 100px;\n    align-items: center;\n    justify-content: center; }\n  .active-btn {\n  background: #fff;\n  color: #5276cf;\n  cursor: pointer;\n  font-size: 16px;\n  width: auto;\n  padding: 0 25px;\n  height: 45px;\n  border: 3px solid #5276cf;\n  border-radius: 10px;\n  font-weight: 400; }\n  .active-btn:hover {\n    background: #5276cf;\n    color: #fff;\n    transition: all .5s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL2luZm8tcGFuZWxzL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxob21lXFxtYWluXFxpbmZvLXBhbmVsc1xcaW5mby1wYW5lbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLFFBQU8sRUFrQ1I7RUFyQ0Q7O0lBT0ksY0FBYTtJQUNiLFFBQU87SUFDUCxvQkFBbUI7SUFDbkIsZ0JBQWU7SUFDZiw4QkFBNkI7SUFDN0IsZ0JBQWUsRUFpQmhCO0VBN0JIOztNQWVNLGNBQVk7TUFDWixhQUFZO01BQ1osY0FBYTtNQUNiLG9CQUFtQixFQUNwQjtFQW5CTDs7TUFzQk0sY0FBWTtNQUNaLGFBQVk7TUFDWixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLGNBQWEsRUFDZDtFQTNCTDtJQWdDSSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsd0JBQXVCLEVBQ3hCO0VBR0g7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFPakI7RUFqQkQ7SUFhSSxvQkFBbUI7SUFDbkIsWUFBVztJQUNYLGdDQUErQixFQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9pbmZvLXBhbmVscy9pbmZvLXBhbmVscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuXHJcbiAgPiBkaXYuYmFzZS1pbmZvLXBhbmVsLFxyXG4gICAgZGl2LmFkZGl0aW9uYWwtaW5mby1wYW5lbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuXHJcbiAgICA+IGRpdi5pbWFnZS1ib3gge1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdi50ZXh0LWJveCB7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gID4gZGl2LmJ1dHRvbi1sZWFybi1tb3JlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAwIDAgMTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzUyNzZjZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzUyNzZjZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNzZjZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/main/info-panels/info-panels.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/main/info-panels/info-panels.component.ts ***!
  \****************************************************************/
/*! exports provided: InfoPanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPanelsComponent", function() { return InfoPanelsComponent; });
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

var InfoPanelsComponent = /** @class */ (function () {
    function InfoPanelsComponent() {
        this.showLearnMorePanel = false;
    }
    InfoPanelsComponent.prototype.ngOnInit = function () {
    };
    InfoPanelsComponent.prototype.showMore = function () {
        this.showLearnMorePanel = !this.showLearnMorePanel;
    };
    InfoPanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-panels',
            template: __webpack_require__(/*! ./info-panels.component.html */ "./src/app/home/main/info-panels/info-panels.component.html"),
            styles: [__webpack_require__(/*! ./info-panels.component.scss */ "./src/app/home/main/info-panels/info-panels.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoPanelsComponent);
    return InfoPanelsComponent;
}());



/***/ }),

/***/ "./src/app/home/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\r\n<app-info-panels></app-info-panels>\r\n"

/***/ }),

/***/ "./src/app/home/main/main.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/main/main.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n  padding-top: 20px;\n  margin: 0 auto;\n  max-width: 1200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL0M6XFxVc2Vyc1xcTHlhdm9uXFxEZXNrdG9wXFxkdW1teVVJL3NyY1xcYXBwXFxob21lXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2Qsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/main/main.component.ts ***!
  \*********************************************/
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
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/home/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/home/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/home/main/slider/slider.component.html":
/*!********************************************************!*\
  !*** ./src/app/home/main/slider/slider.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../../assets/Безымянный.png\">\r\n"

/***/ }),

/***/ "./src/app/home/main/slider/slider.component.scss":
/*!********************************************************!*\
  !*** ./src/app/home/main/slider/slider.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 100%;\n  flex: 0 0 360px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL3NsaWRlci9DOlxcVXNlcnNcXEx5YXZvblxcRGVza3RvcFxcZHVtbXlVSS9zcmNcXGFwcFxcaG9tZVxcbWFpblxcc2xpZGVyXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsWUFBVztFQUNYLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tYWluL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAwIDAgMzYwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/main/slider/slider.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/main/slider/slider.component.ts ***!
  \******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
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

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/home/main/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/home/main/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
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