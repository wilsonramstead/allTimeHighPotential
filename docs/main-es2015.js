(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



class AppComponent {
    constructor() {
        this.title = 'public';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"], ["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap", "rel", "stylesheet"], [1, "mainContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: [".mainContainer[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to left, #3ad9f5, #b79dfd);\n  padding: 2%;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL2FsbFRpbWVIaWdoVHJhY2tlci9wdWJsaWMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBR0Esc0RBQUE7RUFDQSxXQUFBO0VBRUEsaUNBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyNTQ0ZjMsICNkYjQ3M2MpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzNhZDlmNSwgI2I3OWRmZCk7XG4gIHBhZGRpbmc6IDIlO1xuXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiLm1haW5Db250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjM2FkOWY1LCAjYjc5ZGZkKTtcbiAgcGFkZGluZzogMiU7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HomeComponent_h4_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeAssetType("crypto"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Switch to Crypto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_h4_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crypto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeAssetType("stock"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Switch to Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_select_20_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getPriceInfo($event.target.value); })("ngModelChange", function HomeComponent_select_20_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.newAsset.assetName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Apple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nvidia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tesla");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Unity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.newAsset.assetName);
} }
function HomeComponent_select_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_select_21_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getPriceInfo($event.target.value); })("ngModelChange", function HomeComponent_select_21_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.newAsset.assetName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cosmos Hub (Atom)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Avalanche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bitcoin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cardano");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ethereum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Polygon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Solana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vechain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.newAsset.assetName);
} }
function HomeComponent_div_36_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asset_r19["assetName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r19["todayAssetPrice"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r18.pricesDictionary[asset_r19["assetName"]][0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asset_r19["assetAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r19["todayValue"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r19["previousALTvalue"], "");
} }
function HomeComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ATH Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Current Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Share #");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Current Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Potential Value (ATH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_36_div_20_Template, 20, 6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.allAssets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.totalCurrentValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.totalATHvalue);
} }
function HomeComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ATH Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Holdings Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Current Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Potential Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asset_r22["assetName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r22["todayAssetPrice"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r21.pricesDictionary[asset_r22["assetName"]][0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asset_r22["assetAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r22["todayValue"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", asset_r22["previousALTvalue"], "");
} }
function HomeComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_37_div_1_Template, 45, 6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Current Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Potential Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allAssets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r7.totalCurrentValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r7.totalATHvalue, "");
} }
class HomeComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getScreenSize();
        this.assetType = 'stock';
        this.allAssets = [];
        this.totalCurrentValue = 0;
        this.totalATHvalue = 0;
        this.pricesDictionary = { 'Apple': [180.96, 0, 'AAPL'], 'atom': [44.45, 0], 'Avalanche': [144.96, 0, 'X:AVAXUSD'], 'Bitcoin': [69044.77, 0, 'X:BTCUSD'], 'Cardano': [3.09, 0, 'X:ADAUSD'], 'Ethereum': [4878.26, 0, 'X:ETHUSD'], 'Facebook': [382.18, 0, 'META'], 'Microsoft': [339.89, 0, 'MSFT'], 'Nvidia': [333.49, 0, 'NVDA'], 'Polygon': [2.92, 0, 'X:MATICUSD'], 'Solana': [259.96, 0, 'X:SOLUSD'], 'Sand': [8.40, 0, 'X:SANDUSD'], 'Tesla': [409.97, 0, 'TSLA'], 'Unity': [201.12, 0, 'U'], 'Vechain': [0.280991, 0, 'X:VETUSD'] };
        this.newAsset = { 'assetName': '', 'assetAmount': 0, 'todayValue': 0, 'previousATHvalue': 0, };
    }
    addAsset() {
        this.newAsset.previousALTvalue = parseFloat(String(Number(this.newAsset.assetAmount) * Number(this.pricesDictionary[this.newAsset.assetName][0]))).toFixed(2);
        this.totalATHvalue = parseFloat(String(Number(this.totalATHvalue) + Number(this.newAsset.previousALTvalue))).toFixed(2);
        this.newAsset.todayAssetPrice = parseFloat(String(this.pricesDictionary[this.newAsset.assetName][1])).toFixed(2);
        this.newAsset.todayValue = parseFloat(String(this.newAsset.assetAmount * this.pricesDictionary[this.newAsset.assetName][1])).toFixed(2);
        this.totalCurrentValue = parseFloat(String(Number(this.totalCurrentValue) + Number(this.newAsset.todayValue))).toFixed(2);
        this.allAssets.push(this.newAsset);
        this.newAsset = { 'assetName': '', 'assetAmount': 0, 'todayValue': 0, 'previousATHvalue': 0, };
    }
    changeAssetType(input) {
        this.assetType = input;
    }
    clearAssets() {
        this.allAssets = [];
        this.totalCurrentValue = 0;
        this.totalATHvalue = 0;
    }
    getPriceInfo(selectedOption) {
        this.http.get('https://api.polygon.io/v2/aggs/ticker/' + this.pricesDictionary[selectedOption][2] + '/prev?adjusted=true&apiKey=ZniEFUGxWV3dk4HeEpD5vQoVE2J56qbc', {}).subscribe(data => {
            this.pricesDictionary[selectedOption][1] = data.results[0]['c']; // this is returning the close price of previous day close price, api reference: https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoticker__prev
        });
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth >= 641) {
            this.mobile = 'no';
        }
        else {
            this.mobile = 'yes';
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 38, vars: 9, consts: [[1, "homeContainer"], [1, "header"], [1, "innerBox"], [1, "assetForm"], [1, "upperSection"], ["class", "fancyLabel", 4, "ngIf"], ["class", "buttonNormal", 3, "click", 4, "ngIf"], [1, "assetInput"], [1, "left"], [1, "right"], ["name", "newAsset.assetName", "required", "", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["type", "number", "name", "newAsset.assetAmount", "required", "", 3, "ngModel", "ngModelChange"], [1, "assetButtons"], [1, "buttonGreen", 3, "click"], [1, "buttonRed", 3, "click"], [1, "fancyLabel"], ["class", "container", 4, "ngIf"], ["class", "mobileContainer", 4, "ngIf"], [1, "buttonNormal", 3, "click"], ["name", "newAsset.assetName", "required", "", 3, "ngModel", "change", "ngModelChange"], ["value", "Apple"], ["value", "Microsoft"], ["value", "Facebook"], ["value", "Nvidia"], ["value", "Tesla"], ["value", "Unity"], ["value", "Atom"], ["value", "Avalanche"], ["value", "Bitcoin"], ["value", "Cardano"], ["value", "Ethereum"], ["value", "Polygon"], ["value", "Sand"], ["value", "Solana"], ["value", "Vechain"], [1, "container"], [1, "row", "headerColumn", 2, "border-bottom", "3px solid black"], [1, "col"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row", "headerColumn", 2, "border-top", "3px solid black"], [1, "row"], [1, "mobileContainer"], [4, "ngFor", "ngForOf"], [1, "row", 2, "border-bottom", "2px solid black", "padding-bottom", "1px", "background", "rgba(255, 255, 255, 0.466)"], [1, "col", 2, "border-right", "2px solid black"], [1, "row", 2, "border-bottom", "2px solid black", "padding-bottom", "1px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "See Your All Time High Potential");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select your stock/crypto below and input your share amount.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_h4_11_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_button_12_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_h4_13_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_button_14_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Asset Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_select_20_Template, 13, 1, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_select_21_Template, 19, 1, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_27_listener($event) { return ctx.newAsset.assetAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_29_listener() { return ctx.addAsset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_31_listener() { return ctx.clearAssets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Clear Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Your Asset List:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_div_36_Template, 37, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_div_37_Template, 20, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assetType == "crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newAsset.assetAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile == "yes");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media only screen and (min-width: 321px) {\n  .homeContainer[_ngcontent-%COMP%] {\n    height: 98vh;\n    width: 100%;\n    border: 2px solid white;\n    overflow: auto;\n    padding-bottom: 2%;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.5% 1%;\n    text-align: center;\n    border-bottom: 5px solid white;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: 400;\n  }\n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n  }\n\n  .innerBox[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 400px;\n    text-align: left;\n  }\n\n  .mobileContainer[_ngcontent-%COMP%] {\n    text-align: left;\n    min-height: 400px;\n    width: 96%;\n    padding-bottom: 50px;\n  }\n  .mobileContainer[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.425);\n  }\n  .mobileContainer[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n\n  .headerColumn[_ngcontent-%COMP%] {\n    background: #a1a1a160;\n  }\n\n  .assetForm[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .assetForm[_ngcontent-%COMP%]   .upperSection[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n  }\n  .assetForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    border-radius: 15px;\n    min-height: 30px;\n    background: none;\n    width: 150px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .buttonNormal[_ngcontent-%COMP%] {\n    background: #ececece1;\n  }\n  .assetForm[_ngcontent-%COMP%]   .buttonRed[_ngcontent-%COMP%] {\n    background: #fd9f9fee;\n  }\n  .assetForm[_ngcontent-%COMP%]   .buttonGreen[_ngcontent-%COMP%] {\n    background: #96ff9be8;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.87);\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 30px;\n    width: 120px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 50%;\n    font-size: 1.2rem;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.87);\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 30px;\n    width: 120px;\n    font-size: 1rem;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetButtons[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: inline-block;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n\n  .fancyLabel[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #202020;\n    padding-bottom: 15px;\n    margin-top: 10px;\n    font-size: 1.8rem;\n    font-weight: 400;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e6bc00, 0 0 40px #e6bc00, 0 0 50px #e6bc00, 0 0 60px #e6bc00, 0 0 70px #e6bc00;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n@media only screen and (min-width: 481px) {\n  \n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 165px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 165px;\n  }\n}\n@media only screen and (min-width: 641px) {\n  \n  .mobileContainer[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .assetForm[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .assetForm[_ngcontent-%COMP%]   .upperSection[_ngcontent-%COMP%] {\n    margin-bottom: 2%;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    text-align: right;\n    margin-right: 10px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.87);\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 30px;\n    width: 120px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 250px;\n    font-size: 1.2rem;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 10px;\n  }\n  .assetForm[_ngcontent-%COMP%]   .assetInput[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.87);\n    border: 2px solid black;\n    border-radius: 10px;\n    height: 30px;\n    width: 120px;\n    font-size: 1rem;\n  }\n\n  .assetButtons[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    visibility: unset;\n    border: 2px solid black;\n    background: #eeeeeec5;\n  }\n  .container[_ngcontent-%COMP%]   .headerColumn[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-weight: 700;\n  }\n  .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n    padding-top: 1%;\n    height: 50px;\n  }\n  .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-weight: 400;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    border: 4px solid black;\n    background: #eeeeeec5;\n  }\n  .container[_ngcontent-%COMP%]   .headerColumn[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 0.8rem;\n  }\n  .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 0.8rem;\n  }\n}\n@media only screen and (min-width: 961px) {\n  \n}\n@media only screen and (min-width: 1025px) {\n  \n}\n@media only screen and (min-width: 1281px) {\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL2FsbFRpbWVIaWdoVHJhY2tlci9wdWJsaWMvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFHQSx1QkFBQTtJQUlBLGNBQUE7SUFDQSxrQkFBQTtFQ0pGOztFRE1BO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtFQ0hGO0VESUU7SUFDRSxnQkFBQTtFQ0ZKO0VESUU7SUFDRSxnQkFBQTtFQ0ZKOztFREtBO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNGRjs7RURJQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUNERjtFREVFO0lBQ0Usc0NBQUE7RUNBSjtFRENJO0lBQ0Usa0JBQUE7RUNDTjs7RURHQTtJQUNFLHFCQUFBO0VDQUY7O0VERUE7SUFDRSxrQkFBQTtFQ0NGO0VEQ0U7SUFDRSxpQkFBQTtFQ0NKO0VEQ0U7SUFDRSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNDSjtFRENFO0lBQ0UscUJBQUE7RUNDSjtFRENFO0lBQ0UscUJBQUE7RUNDSjtFRENFO0lBQ0UscUJBQUE7RUNDSjtFRENFO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNDSjtFREFJO0lBQ0UscUJBQUE7RUNFTjtFREFJO0lBQ0UscUNBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNFTjtFREFJO0lBQ0UsZ0JBQUE7RUNFTjtFRERNO0lBQ0UsaUJBQUE7RUNHUjtFREFJOztJQUVFLHFCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDRU47RURBSTtJQUNFLGlCQUFBO0VDRU47RURETTtJQUNFLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ0dSO0VEQ0U7SUFDRSxnQkFBQTtJQUNBLHFCQUFBO0VDQ0o7RURBSTtJQUNFLGlCQUFBO0VDRU47O0VERUE7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1JQUFBO0VDQ0Y7O0VERUE7SUFDRSxrQkFBQTtFQ0NGO0FBQ0Y7QURDQTtFQUNFLDJFQUFBO0VBR0U7SUFDRSxxQkFBQTtFQ0RKO0VER0k7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ0ROO0VER0k7SUFDRSxZQUFBO0VDRE47QUFDRjtBREtBO0VBQ0UsOEZBQUE7RUFFQTtJQUNFLGtCQUFBO0VDSkY7O0VET0E7SUFDRSxrQkFBQTtFQ0pGO0VETUU7SUFDRSxpQkFBQTtFQ0pKO0VET0k7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDTE47RURNTTtJQUNFLGlCQUFBO0VDSlI7RURPSTtJQUNFLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDTE47RURPSTs7SUFFRSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ0xOO0VET0k7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDTE47RURNTTtJQUNFLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ0pSOztFRFVBO0lBQ0UscUJBQUE7RUNQRjs7RURVQTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtFQ1BGO0VEUUU7SUFDRSxnQkFBQTtFQ05KO0VEUUU7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDTko7RURPSTtJQUNFLGdCQUFBO0VDTE47O0VEVUE7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0VDUEY7RURRRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNOSjtFRFNJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQ1BOO0FBQ0Y7QURXQTtFQUNFLHlEQUFBO0FDVEY7QURXQTtFQUNFLGlEQUFBO0FDVEY7QURXQTtFQUNFLGdDQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMXB4KSB7XG4gIC5ob21lQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDk4dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM2YmU3ZmQsICNlN2RlZmQpO1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG5cbiAgICAvLyBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjUlIDElO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuICAuaW5uZXJCb3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLm1vYmlsZUNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogOTYlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIC5jb2wge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyNSk7XG4gICAgICBoNiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhlYWRlckNvbHVtbiB7XG4gICAgYmFja2dyb3VuZDogI2ExYTFhMTYwO1xuICB9XG4gIC5hc3NldEZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC51cHBlclNlY3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLmJ1dHRvbk5vcm1hbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjZTE7XG4gICAgfVxuICAgIC5idXR0b25SZWQge1xuICAgICAgYmFja2dyb3VuZDogI2ZkOWY5ZmVlO1xuICAgIH1cbiAgICAuYnV0dG9uR3JlZW4ge1xuICAgICAgYmFja2dyb3VuZDogIzk2ZmY5YmU4O1xuICAgIH1cbiAgICAuYXNzZXRJbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgaDYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgaDYge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubGVmdCxcbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFzc2V0QnV0dG9ucyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mYW5jeUxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNlNmJjMDAsXG4gICAgICAwIDAgNDBweCAjZTZiYzAwLCAwIDAgNTBweCAjZTZiYzAwLCAwIDAgNjBweCAjZTZiYzAwLCAwIDAgNzBweCAjZTZiYzAwO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAvKiBwb3J0cmFpdCBlLXJlYWRlcnMgKE5vb2svS2luZGxlKSwgc21hbGxlciB0YWJsZXRzIEAgNjAwIG9yIEAgNjQwIHdpZGUuICovXG5cbiAgLmFzc2V0Rm9ybSB7XG4gICAgLmFzc2V0SW5wdXQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAucmlnaHQgc2VsZWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcbiAgLyogcG9ydHJhaXQgdGFibGV0cywgcG9ydHJhaXQgaVBhZCwgbGFuZHNjYXBlIGUtcmVhZGVycywgbGFuZHNjYXBlIDgwMHg0ODAgb3IgODU0eDQ4MCBwaG9uZXMgKi9cblxuICAubW9iaWxlQ29udGFpbmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuYXNzZXRGb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAudXBwZXJTZWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIH1cbiAgICAuYXNzZXRJbnB1dCB7XG4gICAgICAubGVmdCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG4gICAgICAubGVmdCxcbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hc3NldEJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IHVuc2V0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNlZWVlZWVjNTtcbiAgICAuaGVhZGVyQ29sdW1uIC5jb2wgaDYge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZWM1O1xuICAgIC5oZWFkZXJDb2x1bW4gLmNvbCBoNiB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07IC8vIC0tLS0tLT09PT09PT09PT09XG4gICAgfVxuICAgIC5jb2wge1xuICAgICAgaDYge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgLy8gLS0tLS0tPT09PT09PT09PT1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYxcHgpIHtcbiAgLyogdGFibGV0LCBsYW5kc2NhcGUgaVBhZCwgbG8tcmVzIGxhcHRvcHMgYW5kcyBkZXNrdG9wcyAqL1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgKi9cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIC8qIGhpLXJlcyBsYXB0b3BzIGFuZCBkZXNrdG9wcyAqL1xufVxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCkge1xuICAuaG9tZUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA5OHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNSUgMSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcbiAgfVxuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIC5pbm5lckJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5tb2JpbGVDb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuICAubW9iaWxlQ29udGFpbmVyIC5jb2wge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MjUpO1xuICB9XG4gIC5tb2JpbGVDb250YWluZXIgLmNvbCBoNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmhlYWRlckNvbHVtbiB7XG4gICAgYmFja2dyb3VuZDogI2ExYTFhMTYwO1xuICB9XG5cbiAgLmFzc2V0Rm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hc3NldEZvcm0gLnVwcGVyU2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIH1cbiAgLmFzc2V0Rm9ybSBidXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuYXNzZXRGb3JtIC5idXR0b25Ob3JtYWwge1xuICAgIGJhY2tncm91bmQ6ICNlY2VjZWNlMTtcbiAgfVxuICAuYXNzZXRGb3JtIC5idXR0b25SZWQge1xuICAgIGJhY2tncm91bmQ6ICNmZDlmOWZlZTtcbiAgfVxuICAuYXNzZXRGb3JtIC5idXR0b25HcmVlbiB7XG4gICAgYmFja2dyb3VuZDogIzk2ZmY5YmU4O1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0SW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IGg2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCAubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IC5sZWZ0IGg2IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IC5sZWZ0LFxuLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCAucmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0SW5wdXQgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IC5yaWdodCBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldEJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0QnV0dG9ucyBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLmZhbmN5TGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNlNmJjMDAsIDAgMCA0MHB4ICNlNmJjMDAsIDAgMCA1MHB4ICNlNmJjMDAsIDAgMCA2MHB4ICNlNmJjMDAsIDAgMCA3MHB4ICNlNmJjMDA7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgLyogcG9ydHJhaXQgZS1yZWFkZXJzIChOb29rL0tpbmRsZSksIHNtYWxsZXIgdGFibGV0cyBAIDYwMCBvciBAIDY0MCB3aWRlLiAqL1xuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCAucmlnaHQgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDE2NXB4O1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0SW5wdXQgaW5wdXQge1xuICAgIHdpZHRoOiAxNjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkge1xuICAvKiBwb3J0cmFpdCB0YWJsZXRzLCBwb3J0cmFpdCBpUGFkLCBsYW5kc2NhcGUgZS1yZWFkZXJzLCBsYW5kc2NhcGUgODAweDQ4MCBvciA4NTR4NDgwIHBob25lcyAqL1xuICAubW9iaWxlQ29udGFpbmVyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuYXNzZXRGb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFzc2V0Rm9ybSAudXBwZXJTZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgfVxuICAuYXNzZXRGb3JtIC5hc3NldElucHV0IC5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCAubGVmdCBoNiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLmFzc2V0Rm9ybSAuYXNzZXRJbnB1dCAubGVmdCxcbi5hc3NldEZvcm0gLmFzc2V0SW5wdXQgLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0SW5wdXQgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hc3NldEZvcm0gLmFzc2V0SW5wdXQgLnJpZ2h0IHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmFzc2V0QnV0dG9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgdmlzaWJpbGl0eTogdW5zZXQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZWM1O1xuICB9XG4gIC5jb250YWluZXIgLmhlYWRlckNvbHVtbiAuY29sIGg2IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5jb250YWluZXIgLmNvbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuY29sIGg2IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZWM1O1xuICB9XG4gIC5jb250YWluZXIgLmhlYWRlckNvbHVtbiAuY29sIGg2IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC5jb250YWluZXIgLmNvbCBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjFweCkge1xuICAvKiB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzICovXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAvKiBiaWcgbGFuZHNjYXBlIHRhYmxldHMsIGxhcHRvcHMsIGFuZCBkZXNrdG9wcyAqL1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wilsonramstead/Desktop/allTimeHighTracker/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map