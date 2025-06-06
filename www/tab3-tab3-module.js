(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-wrapper\">\n  <canvas baseChart \n      [datasets]=\"lineChartData\" \n      [labels]=\"lineChartLabels\" \n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\" \n      [legend]=\"lineChartLegend\" \n      [chartType]=\"lineChartType\" \n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title > \n      Profile\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\"editProfile()\"><ion-icon name=\"add-circle\"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n  \n  <div class=\"card\">\n    <div class=\"header\">\n    <div class=\"avatar\">\n    <img src=\"../../assets/avatar.png\" alt=\"\">\n    </div>\n    </div>\n    </div>\n\n    <div class=\"card-body\">\n\n      <ion-button [ngModel]=\"name\" expand=\"full\" color=\"primary\">{{name}}</ion-button>\n      <ion-button [ngModel]=\"email\" expand=\"full\" color=\"secondary\">{{email}}</ion-button>\n      <ion-button [ngModel]=\"gender\" expand=\"full\" color=\"primary\">{{gender}}</ion-button>\n      <ion-button [ngModel]=\"address\" expand=\"full\" color=\"secondary\">{{address}}</ion-button>\n      <ion-button [ngModel]=\"goal\" expand=\"full\" color=\"secondary\">{{goal}}</ion-button>\n      </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.ts ***!
  \****************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LineChartComponent = class LineChartComponent {
    constructor() {
        this.lineChartData = [
            { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,0,0.28)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
    }
};
LineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/line-chart/line-chart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/line-chart/line-chart.component.scss")).default]
    })
], LineChartComponent);



/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9wcmFuamFsZ2FyZy9jb25zY2lvdXNmb29kaWUvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGNBQUE7QURDSjtBQ0FJO0VBQ0EsYUFBQTtBREVKO0FDREk7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBREdKO0FDRkk7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBRElKO0FDR0k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FEQVI7QUNDUTtFQUNBLGlCQUFBO0FEQ1I7QUNBUTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURFUjtBQ0FRO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QURFUiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iLCJcbi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIC5hdmF0YXIge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _editprofile_editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editprofile/editprofile.page */ "./src/app/editprofile/editprofile.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");






_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"];
let Tab3Page = class Tab3Page {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.getProfileSettings();
    }
    ionViewDidEnter() {
        this.getProfileSettings();
    }
    ionViewDidLoad() {
        this.getProfileSettings();
    }
    editProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editprofile_editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"],
                componentProps: {
                    name: this.name,
                    email: this.email,
                    gender: this.gender,
                    address: this.address,
                    goal: this.goal,
                }
            });
            modal.onDidDismiss().then((item) => {
                if (item.data.saveItem) {
                    this.name = item.data.name;
                    this.email = item.data.email;
                    this.gender = item.data.gender;
                    this.address = item.data.address;
                    this.goal = item.data.goal;
                    //this.changeValue();
                    this.setProfileSettings();
                }
            });
            return yield modal.present();
        });
    }
    getProfileSettings() {
        this.getName();
    }
    setProfileSettings() {
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myName", this.name);
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myEmail", this.email);
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myGender", this.gender);
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myAddress", this.address);
        Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["set"])("myGoal", this.goal);
    }
    getName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.name = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myName");
            this.email = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myEmail");
            this.gender = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myGender");
            this.address = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myAddress");
            this.goal = yield Object(_storage_service__WEBPACK_IMPORTED_MODULE_5__["get"])("myGoal");
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map