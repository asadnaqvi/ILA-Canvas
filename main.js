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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_object_identification_object_identification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/object-identification/object-identification.component */ "./src/app/components/object-identification/object-identification.component.ts");
/* harmony import */ var _components_find_missing_character_find_missing_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/find-missing-character/find-missing-character.component */ "./src/app/components/find-missing-character/find-missing-character.component.ts");
/* harmony import */ var _components_count_objects_count_objects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/count-objects/count-objects.component */ "./src/app/components/count-objects/count-objects.component.ts");
/* harmony import */ var _components_complete_the_name_complete_the_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/complete-the-name/complete-the-name.component */ "./src/app/components/complete-the-name/complete-the-name.component.ts");
/* harmony import */ var _components_error_result_error_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error-result/error-result.component */ "./src/app/components/error-result/error-result.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_image_library_image_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/image-library/image-library.component */ "./src/app/components/image-library/image-library.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [{
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'oic',
        component: _components_object_identification_object_identification_component__WEBPACK_IMPORTED_MODULE_3__["ObjectIdentificationComponent"]
    },
    {
        path: 'fmcc',
        component: _components_find_missing_character_find_missing_character_component__WEBPACK_IMPORTED_MODULE_4__["FindMissingCharacterComponent"]
    },
    {
        path: 'coc',
        component: _components_count_objects_count_objects_component__WEBPACK_IMPORTED_MODULE_5__["CountObjectsComponent"],
        data: {
            imagePath: ''
        }
    },
    {
        path: 'ctn',
        component: _components_complete_the_name_complete_the_name_component__WEBPACK_IMPORTED_MODULE_6__["CompleteTheNameComponent"]
    },
    {
        path: 'image-library/:id',
        component: _components_image_library_image_library_component__WEBPACK_IMPORTED_MODULE_9__["ImageLibraryComponent"]
    },
    {
        path: 'image-library',
        component: _components_image_library_image_library_component__WEBPACK_IMPORTED_MODULE_9__["ImageLibraryComponent"]
    },
    {
        path: 'error',
        component: _components_error_result_error_result_component__WEBPACK_IMPORTED_MODULE_7__["ErrorResultComponent"]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
    }];
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_layout_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/layout/app.component */ "./src/app/layout/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_object_identification_object_identification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/object-identification/object-identification.component */ "./src/app/components/object-identification/object-identification.component.ts");
/* harmony import */ var _components_find_missing_character_find_missing_character_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/find-missing-character/find-missing-character.component */ "./src/app/components/find-missing-character/find-missing-character.component.ts");
/* harmony import */ var _components_count_objects_count_objects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/count-objects/count-objects.component */ "./src/app/components/count-objects/count-objects.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _layout_head_head_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/head/head.component */ "./src/app/layout/head/head.component.ts");
/* harmony import */ var _layout_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/left-nav/left-nav.component */ "./src/app/layout/left-nav/left-nav.component.ts");
/* harmony import */ var _components_complete_the_name_complete_the_name_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/complete-the-name/complete-the-name.component */ "./src/app/components/complete-the-name/complete-the-name.component.ts");
/* harmony import */ var _components_error_result_error_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/error-result/error-result.component */ "./src/app/components/error-result/error-result.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_image_library_image_library_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/image-library/image-library.component */ "./src/app/components/image-library/image-library.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









 // './layo/app.component';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_layout_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_object_identification_object_identification_component__WEBPACK_IMPORTED_MODULE_11__["ObjectIdentificationComponent"],
                _components_find_missing_character_find_missing_character_component__WEBPACK_IMPORTED_MODULE_12__["FindMissingCharacterComponent"],
                _components_count_objects_count_objects_component__WEBPACK_IMPORTED_MODULE_13__["CountObjectsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _layout_head_head_component__WEBPACK_IMPORTED_MODULE_15__["HeadComponent"],
                _layout_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_16__["LeftNavComponent"],
                _components_complete_the_name_complete_the_name_component__WEBPACK_IMPORTED_MODULE_17__["CompleteTheNameComponent"],
                _components_error_result_error_result_component__WEBPACK_IMPORTED_MODULE_18__["ErrorResultComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
                _components_image_library_image_library_component__WEBPACK_IMPORTED_MODULE_20__["ImageLibraryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"]
            ],
            providers: [],
            bootstrap: [_app_layout_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/complete-the-name/complete-the-name.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/complete-the-name/complete-the-name.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/complete-the-name/complete-the-name.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/complete-the-name/complete-the-name.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  complete-the-name works!\n</p>\n<p>Initial test commit by Siraj</p>\n"

/***/ }),

/***/ "./src/app/components/complete-the-name/complete-the-name.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/complete-the-name/complete-the-name.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompleteTheNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteTheNameComponent", function() { return CompleteTheNameComponent; });
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

var CompleteTheNameComponent = /** @class */ (function () {
    function CompleteTheNameComponent() {
    }
    CompleteTheNameComponent.prototype.ngOnInit = function () {
    };
    CompleteTheNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complete-the-name',
            template: __webpack_require__(/*! ./complete-the-name.component.html */ "./src/app/components/complete-the-name/complete-the-name.component.html"),
            styles: [__webpack_require__(/*! ./complete-the-name.component.css */ "./src/app/components/complete-the-name/complete-the-name.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompleteTheNameComponent);
    return CompleteTheNameComponent;
}());



/***/ }),

/***/ "./src/app/components/count-objects/count-objects.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/count-objects/count-objects.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/count-objects/count-objects.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/count-objects/count-objects.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Some tab content</h1>\n<p>1- Choose image from the gallery</p>\n<p>2- select how many times you want to repat that image</p>\n<p>3- click preview</p>\n<p>4- system will display preview, presenting the image repated number of times, with input box to enter count, if answer is correct, move to congrats page. if answer is false, move to error page and ask to try again. also have \"show answer button\"</p>\n<img *ngIf=\"imagePath\" [src]=\"imagePath\">\n<a mat-button routerLink=\"/image-library/coc\">Choose Image</a>\n<a mat-button routerLink=\"/error\">Go to Error Page</a>\n"

/***/ }),

/***/ "./src/app/components/count-objects/count-objects.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/count-objects/count-objects.component.ts ***!
  \*********************************************************************/
/*! exports provided: CountObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountObjectsComponent", function() { return CountObjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_image_connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/image-connector.service */ "./src/app/services/image-connector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountObjectsComponent = /** @class */ (function () {
    function CountObjectsComponent(imageConnector, route) {
        this.imageConnector = imageConnector;
        this.route = route;
        this.imagePath = "";
        // this.imageConnector.ActivityBaseImagePath.subscribe(path=>{
        //   this.imagePath=path;
        // });
        // this.route.paramMap.subscribe(param=>{
        //  this.imagePath =this.route.root.snapshot.data["imagePath"] //param.get("imagePath")
        // })
    }
    CountObjectsComponent.prototype.ngOnInit = function () {
        this.imagePath = this.imageConnector.imagePath;
    };
    CountObjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-count-objects',
            template: __webpack_require__(/*! ./count-objects.component.html */ "./src/app/components/count-objects/count-objects.component.html"),
            styles: [__webpack_require__(/*! ./count-objects.component.css */ "./src/app/components/count-objects/count-objects.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_connector_service__WEBPACK_IMPORTED_MODULE_2__["ImageConnectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CountObjectsComponent);
    return CountObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard updated on master!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/error-result/error-result.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/error-result/error-result.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/error-result/error-result.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/error-result/error-result.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Error!</h1>\n<button (click)=\"goBack()\">Go Back</button>"

/***/ }),

/***/ "./src/app/components/error-result/error-result.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/error-result/error-result.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorResultComponent", function() { return ErrorResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorResultComponent = /** @class */ (function () {
    function ErrorResultComponent(location) {
        this.location = location;
    }
    ErrorResultComponent.prototype.goBack = function () {
        this.location.back();
    };
    ErrorResultComponent.prototype.ngOnInit = function () {
    };
    ErrorResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-result',
            template: __webpack_require__(/*! ./error-result.component.html */ "./src/app/components/error-result/error-result.component.html"),
            styles: [__webpack_require__(/*! ./error-result.component.css */ "./src/app/components/error-result/error-result.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ErrorResultComponent);
    return ErrorResultComponent;
}());



/***/ }),

/***/ "./src/app/components/find-missing-character/find-missing-character.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/find-missing-character/find-missing-character.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/find-missing-character/find-missing-character.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/find-missing-character/find-missing-character.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  find-missing-character works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/find-missing-character/find-missing-character.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/find-missing-character/find-missing-character.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FindMissingCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindMissingCharacterComponent", function() { return FindMissingCharacterComponent; });
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

var FindMissingCharacterComponent = /** @class */ (function () {
    function FindMissingCharacterComponent() {
    }
    FindMissingCharacterComponent.prototype.ngOnInit = function () {
    };
    FindMissingCharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-missing-character',
            template: __webpack_require__(/*! ./find-missing-character.component.html */ "./src/app/components/find-missing-character/find-missing-character.component.html"),
            styles: [__webpack_require__(/*! ./find-missing-character.component.css */ "./src/app/components/find-missing-character/find-missing-character.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindMissingCharacterComponent);
    return FindMissingCharacterComponent;
}());



/***/ }),

/***/ "./src/app/components/image-library/image-library.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/image-library/image-library.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/image-library/image-library.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-library/image-library.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\">\n    <mat-grid-tile\n        *ngFor=\"let item of LibraryImages\">    \n      <mat-card>\n          <mat-card-header>\n              <mat-card-title>{{item.title}}</mat-card-title>\n              <mat-card-subtitle>Some text information</mat-card-subtitle>\n              <img mat-card-avatar [src]=\"item.avatar\">\n          </mat-card-header>\n          \n          <img mat-card-image [src]=\"item.path\">\n          \n          <mat-card-actions>\n            <button *ngIf=\"activityName\" class=\"primary\" mat-button (click)=\"setBaseImage(item.path)\">Add To Current Activity</button>\n          </mat-card-actions>\n          <mat-card-footer>This image is licensed to ILA-Canvas</mat-card-footer>\n\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>"

/***/ }),

/***/ "./src/app/components/image-library/image-library.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-library/image-library.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLibraryComponent", function() { return ImageLibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_image_connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/image-connector.service */ "./src/app/services/image-connector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageLibraryComponent = /** @class */ (function () {
    function ImageLibraryComponent(route, imageConnector, router, location) {
        this.route = route;
        this.imageConnector = imageConnector;
        this.router = router;
        this.location = location;
        this.LibraryImages = [];
        this.activityName = "";
    }
    ImageLibraryComponent.prototype.setBaseImage = function (path) {
        this.imageConnector.setImage(path);
        this.location.back();
    };
    ImageLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (stateParams) {
            _this.activityName = stateParams.get("id");
        });
        this.LibraryImages = [{
                title: "item 1",
                path: "assets/images/library/p1.jpeg",
                avatar: "assets/images/library/p1.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/p2.jpeg",
                avatar: "assets/images/library/p2.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/p3.jpeg",
                avatar: "assets/images/library/p3.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/coc/p4.jpeg",
                avatar: "assets/images/library/coc/p4.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/coc/c1.jpeg",
                avatar: "assets/images/library/coc/c1.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/coc/c2.jpeg",
                avatar: "assets/images/library/coc/c2.jpeg"
            },
            {
                title: "item 2",
                path: "assets/images/library/coc/c3.jpeg",
                avatar: "assets/images/library/coc/c3.jpeg"
            }
        ];
        if (this.activityName) {
            this.LibraryImages = this.LibraryImages.filter(function (item) { return item.path.indexOf("/" + _this.activityName + "/") > -1; });
        }
    };
    ImageLibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-library',
            template: __webpack_require__(/*! ./image-library.component.html */ "./src/app/components/image-library/image-library.component.html"),
            styles: [__webpack_require__(/*! ./image-library.component.css */ "./src/app/components/image-library/image-library.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_image_connector_service__WEBPACK_IMPORTED_MODULE_3__["ImageConnectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ImageLibraryComponent);
    return ImageLibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/object-identification/object-identification.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/object-identification/object-identification.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/object-identification/object-identification.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/object-identification/object-identification.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  object-identification works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/object-identification/object-identification.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/object-identification/object-identification.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ObjectIdentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectIdentificationComponent", function() { return ObjectIdentificationComponent; });
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

var ObjectIdentificationComponent = /** @class */ (function () {
    function ObjectIdentificationComponent() {
    }
    ObjectIdentificationComponent.prototype.ngOnInit = function () {
    };
    ObjectIdentificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-object-identification',
            template: __webpack_require__(/*! ./object-identification.component.html */ "./src/app/components/object-identification/object-identification.component.html"),
            styles: [__webpack_require__(/*! ./object-identification.component.css */ "./src/app/components/object-identification/object-identification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ObjectIdentificationComponent);
    return ObjectIdentificationComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404 - Page Not Found!</h1>\n<a routerLink=\"/dashboard\">Go Back To Home</a>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/layout/app.component.css":
/*!******************************************!*\
  !*** ./src/app/layout/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/app.component.html":
/*!*******************************************!*\
  !*** ./src/app/layout/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authentication\">\n\n  <!-- <app-head></app-head> -->\n  <mat-toolbar color=\"primary\" class=\"fixed-header\">\n  <mat-toolbar-row>\n      <button mat-icon-button (click)=\"drawer.toggle()\"><mat-icon>menu</mat-icon></button>\n      <h1 class=\"app-name\" routerLink=\"/\">ILA-Canvas</h1>\n      <a mat-button routerLink=\"/image-library\">Image Library</a>\n      <a mat-button >About</a>\n  </mat-toolbar-row>     \n    </mat-toolbar>\n  <mat-drawer-container class=\"app-container\" autosize>\n\n    <mat-drawer #drawer class=\"app-sidenav\" mode=\"side\">\n      <app-left-nav></app-left-nav>\n    </mat-drawer>\n    <div style=\"min-height:400px;\">\n\n      <router-outlet></router-outlet>\n\n    </div>\n  </mat-drawer-container>\n</div>\n\n<div *ngIf=\"!authentication\">\n  <app-login></app-login>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/app.component.ts ***!
  \*****************************************/
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
        this.title = 'app';
        this.authentication = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/layout/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/layout/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/layout/head/head.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/head/head.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/head/head.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/head/head.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<!-- <button mat-button [routerLink]=\" ['./logout'] \">Logout!</button> -->\n"

/***/ }),

/***/ "./src/app/layout/head/head.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/head/head.component.ts ***!
  \***********************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
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

var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
        this.title = "ILA-Canvas";
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    HeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/layout/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/layout/head/head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/layout/left-nav/left-nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/left-nav/left-nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/left-nav/left-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/left-nav/left-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-nav-list>\n      <a mat-list-item routerLink=\"\" routerLinkActive='active'>Dashboard</a>\n      <a mat-list-item routerLink=\"oic\" routerLinkActive='active'>Object Identification</a>\n      <a mat-list-item routerLink=\"fmcc\" routerLinkActive='active'>Find Missing Character</a>\n      <a mat-list-item routerLink=\"coc\" routerLinkActive='active'>Count Objects</a>\n      <a mat-list-item routerLink=\"ctn\" routerLinkActive='active'>Complete The Name</a>\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/layout/left-nav/left-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/left-nav/left-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: LeftNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function() { return LeftNavComponent; });
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

var LeftNavComponent = /** @class */ (function () {
    function LeftNavComponent() {
    }
    LeftNavComponent.prototype.ngOnInit = function () {
    };
    LeftNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-nav',
            template: __webpack_require__(/*! ./left-nav.component.html */ "./src/app/layout/left-nav/left-nav.component.html"),
            styles: [__webpack_require__(/*! ./left-nav.component.css */ "./src/app/layout/left-nav/left-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftNavComponent);
    return LeftNavComponent;
}());



/***/ }),

/***/ "./src/app/services/image-connector.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/image-connector.service.ts ***!
  \*****************************************************/
/*! exports provided: ImageConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageConnectorService", function() { return ImageConnectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageConnectorService = /** @class */ (function () {
    function ImageConnectorService() {
        this.ActivityBaseImagePath = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ImageConnectorService.prototype.setImage = function (path) {
        this.ActivityBaseImagePath.next(path);
        this.imagePath = path;
    };
    ImageConnectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageConnectorService);
    return ImageConnectorService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/asadnaqvi/ILA-Canvas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map