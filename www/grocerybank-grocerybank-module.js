(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grocerybank-grocerybank-module"],{

/***/ "./src/app/grocerybank/grocerybank-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/grocerybank/grocerybank-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GrocerybankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerybankPageRoutingModule", function() { return GrocerybankPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grocerybank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grocerybank.page */ "./src/app/grocerybank/grocerybank.page.ts");




const routes = [
    {
        path: '',
        component: _grocerybank_page__WEBPACK_IMPORTED_MODULE_3__["GrocerybankPage"]
    }
];
let GrocerybankPageRoutingModule = class GrocerybankPageRoutingModule {
};
GrocerybankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GrocerybankPageRoutingModule);



/***/ }),

/***/ "./src/app/grocerybank/grocerybank.module.ts":
/*!***************************************************!*\
  !*** ./src/app/grocerybank/grocerybank.module.ts ***!
  \***************************************************/
/*! exports provided: GrocerybankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerybankPageModule", function() { return GrocerybankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grocerybank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grocerybank-routing.module */ "./src/app/grocerybank/grocerybank-routing.module.ts");
/* harmony import */ var _grocerybank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocerybank.page */ "./src/app/grocerybank/grocerybank.page.ts");







let GrocerybankPageModule = class GrocerybankPageModule {
};
GrocerybankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grocerybank_routing_module__WEBPACK_IMPORTED_MODULE_5__["GrocerybankPageRoutingModule"]
        ],
        declarations: [_grocerybank_page__WEBPACK_IMPORTED_MODULE_6__["GrocerybankPage"]]
    })
], GrocerybankPageModule);



/***/ })

}]);
//# sourceMappingURL=grocerybank-grocerybank-module.js.map