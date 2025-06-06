(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-detail-item-detail-module"],{

/***/ "./src/app/item-detail/item-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/item-detail/item-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ItemDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageRoutingModule", function() { return ItemDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-detail.page */ "./src/app/item-detail/item-detail.page.ts");




const routes = [
    {
        path: '',
        component: _item_detail_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPage"]
    }
];
let ItemDetailPageRoutingModule = class ItemDetailPageRoutingModule {
};
ItemDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/item-detail/item-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/item-detail/item-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ItemDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-detail-routing.module */ "./src/app/item-detail/item-detail-routing.module.ts");
/* harmony import */ var _item_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-detail.page */ "./src/app/item-detail/item-detail.page.ts");







let ItemDetailPageModule = class ItemDetailPageModule {
};
ItemDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailPageRoutingModule"]
        ],
        declarations: [_item_detail_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailPage"]]
    })
], ItemDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=item-detail-item-detail-module.js.map