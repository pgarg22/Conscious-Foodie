(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- HEADER -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <div>\n        <ion-text color=\"primary\">Basket</ion-text>\n        <ion-button class= \"main-action\" ion-button icon-only (click)=\"addItem()\">\n          <ion-icon color=\"secondary\" name=\"add\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n    <div class=\"card\"></div>\n</ion-header>\n\n<!-- CONTENT -->\n<ion-content [fullscreen]=\"true\">\n  <div class=\"card\">\n    <ion-text class=\"card-header\" color=\"primary\">Shopping List</ion-text>\n    <div class=\"card-body\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of items;let i = index\" (click)=\"viewItem(item)\">\n          <ion-button  class=\"CF-bg-color\">\n          {{item.title}}\n          <div class=\"item-note CF-bg-color\" item-end>\n            <button class=\"\" ion-button clear (click)=\"boughtTask(i)\">\n              <ion-icon color=\"secondary\" name=\"cart\"></ion-icon>\n            </button>\n            <button class=\"CF-bg-color\" ion-button clear (click)=\"deleteTask(i)\">\n              <ion-icon color=\"secondary\" name=\"trash\"></ion-icon>\n            </button>\n          </div>\n        </ion-button>\n        </ion-item>\n      </ion-list>\n      </div>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_detail_item_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-detail/item-detail.page */ "./src/app/item-detail/item-detail.page.ts");
/* harmony import */ var _grocerybank_grocerybank_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grocerybank/grocerybank.page */ "./src/app/grocerybank/grocerybank.page.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");






let Tab1Page = class Tab1Page {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.uniqueBoughtItems = [];
        this.boughtitems = [];
        this.boughtitemscount = [];
    }
    ionViewDidLoad() {
    }
    ionViewDidEnter() {
        //var = this.nativeStorage.getItem('items');
        this.componentDidLoad();
        if (this.items == null) {
            this.items = [];
        }
        this.boughtCount();
    }
    addItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _grocerybank_grocerybank_page__WEBPACK_IMPORTED_MODULE_4__["GrocerybankPage"],
                id: 'GroceryBankSelector'
            });
            modal.onDidDismiss().then((item) => {
                if (item.data.saveItem) {
                    this.saveItem(item.data.title, item.data.quantity);
                    this.changeValue();
                }
            });
            return yield modal.present();
        });
    }
    saveItem(title, quantity) {
        if (this.items == null) {
            this.items = [];
        }
        this.items.push({ title: title, quantity: quantity });
    }
    viewItem(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _item_detail_item_detail_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPage"],
                componentProps: {
                    title: item.title,
                    quantity: item.quantity,
                }
            });
            return yield modal.present();
        });
    }
    componentDidLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myItems");
            this.boughtitems = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myboughtItems");
        });
    }
    changeValue() {
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myItems", this.items);
    }
    deleteTask(index) {
        this.items.splice(index, 1);
    }
    boughtTask(index) {
        let currentDate = new Date();
        let timestamp = currentDate.getTime();
        let item = this.items[index];
        if (this.boughtitems == null) {
            this.boughtitems = [];
        }
        this.boughtitems.push({ title: item.title, quantity: item.quantity, timestamp: timestamp });
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myboughtItems", this.boughtitems);
        this.deleteTask(index);
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myItems", this.items);
    }
    boughtCount() {
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map