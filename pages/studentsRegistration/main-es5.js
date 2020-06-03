function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/student-register/student-register.component */
    "./src/app/pages/student-register/student-register.component.ts");
    /* harmony import */


    var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/students/students.component */
    "./src/app/pages/students/students.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'student-register',
      component: _pages_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_4__["StudentRegisterComponent"]
    }, {
      path: 'students',
      component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./servicees/loader.service */
    "./src/app/servicees/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/loader/loader.component */
    "./src/app/components/loader/loader.component.ts");

    function AppComponent_app_loader_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(sLoader) {
        _classCallCheck(this, AppComponent);

        this.sLoader = sLoader;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_loader_0_Template, 1, 0, "app-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sLoader.visibleLoader);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  margin-bottom: 70px;\n}\n@media (max-width: 500px) {\n  .container[_ngcontent-%COMP%] {\n    margin-bottom: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFORjtJQU9JLG9CQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/loader/loader.component */
    "./src/app/components/loader/loader.component.ts");
    /* harmony import */


    var _servicees_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./servicees/loader.service */
    "./src/app/servicees/loader.service.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/student-register/student-register.component */
    "./src/app/pages/student-register/student-register.component.ts");
    /* harmony import */


    var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/students/students.component */
    "./src/app/pages/students/students.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_servicees_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _pages_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_10__["StudentRegisterComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_11__["StudentsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _pages_student_register_student_register_component__WEBPACK_IMPORTED_MODULE_10__["StudentRegisterComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_11__["StudentsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_servicees_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 25,
      vars: 0,
      consts: [[1, "copyright"], [1, "icons"], ["href", ""], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M475.1,0H36.9C16.5,0,0,16.5,0,36.9v438.1C0,495.5,16.5,512,36.9,512h438.1c20.4,0,36.9-16.5,36.9-36.9V36.9C512,16.5,495.5,0,475.1,0z M372.9,199.6c0.1,2.5,0.2,5.1,0.2,7.6c0,77.6-59.1,167.2-167.2,167.2h0h0c-33.2,0-64.1-9.7-90.1-26.4c4.6,0.5,9.3,0.8,14,0.8c27.5,0,52.9-9.4,73-25.2c-25.7-0.5-47.4-17.5-54.9-40.8c3.6,0.7,7.3,1.1,11,1.1c5.4,0,10.6-0.7,15.5-2.1c-26.9-5.4-47.1-29.1-47.1-57.6c0-0.3,0-0.5,0-0.8c7.9,4.4,17,7.1,26.6,7.3c-15.8-10.5-26.1-28.5-26.1-48.9c0-10.8,2.9-20.9,8-29.5c29,35.6,72.3,58.9,121.1,61.4c-1-4.3-1.5-8.8-1.5-13.4c0-32.4,26.3-58.8,58.8-58.8c16.9,0,32.2,7.1,42.9,18.6c13.4-2.6,26-7.5,37.3-14.3c-4.4,13.7-13.7,25.2-25.8,32.5c11.9-1.4,23.2-4.6,33.7-9.3C394.3,181,384.4,191.3,372.9,199.6z"], ["d", "M437,0H75C33.6,0,0,33.6,0,75v362c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M257,390\n\tc-74.4,0-135-60.6-135-135s60.6-135,135-135s135,60.6,135,135S331.4,390,257,390z M407,150c-24.8,0-45-20.2-45-45s20.2-45,45-45\n\ts45,20.2,45,45S431.8,150,407,150z"], ["d", "M407,90c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S415.3,90,407,90z"], ["d", "M257,150c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S314.9,150,257,150z"], ["d", "M224.1,304l83.3-48l-83.3-48V304z"], ["d", "M475.1,0H36.9C16.5,0,0,16.5,0,36.9v438.1C0,495.5,16.5,512,36.9,512h438.1c20.4,0,36.9-16.5,36.9-36.9V36.9\n\tC512,16.5,495.5,0,475.1,0z M416,256.3c0,0,0,51.9-6.6,77c-3.7,13.7-14.5,24.5-28.2,28.2C356.1,368,256,368,256,368\n\ts-99.9,0-125.2-6.9c-13.7-3.7-24.5-14.5-28.2-28.2C96,308.2,96,256,96,256s0-51.9,6.6-76.9c3.7-13.7,14.8-24.8,28.2-28.5\n\tC155.9,144,256,144,256,144s100.1,0,125.2,6.9c13.7,3.7,24.5,14.5,28.2,28.2C416.2,204.1,416,256.3,416,256.3z"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 638.7 636.7", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 638.7 636.7"], ["d", "M603.7-1H34.3C14.8-1-1,14.8-1,34.3v569.4c0,19.5,15.8,35.3,35.3,35.3h306.5V391.5h-83.1v-96.9h83.1v-71.3\n\tc0-82.7,50.5-127.7,124.2-127.7c35.3,0,65.7,2.6,74.5,3.8v86.4h-50.9c-40.1,0-47.9,19.1-47.9,47.1v61.7h95.9l-12.5,96.9h-83.4V639\n\th162.8c19.5,0,35.3-15.8,35.3-35.3l0,0V34.3C639,14.8,623.2-1,603.7-1z"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA9 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u062F\u0649 \u0634\u0631\u0643\u0629 \u0637\u0644\u0627\u0626\u0639 \u0627\u0644\u0645\u0628\u062F\u0639\u064A\u0646 \u0627\u0644\u0645\u062D\u062F\u0648\u062F\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 71px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  margin: 0;\n  background-image: linear-gradient(561deg, rgba(234, 234, 234, 0.02) 0%, rgba(234, 234, 234, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 100.002%), linear-gradient(320deg, rgba(39, 39, 39, 0.03) 0%, rgba(39, 39, 39, 0.03) 20%, rgba(232, 232, 232, 0.03) 20%, rgba(232, 232, 232, 0.03) 40%, rgba(33, 33, 33, 0.03) 40%, rgba(33, 33, 33, 0.03) 60%, rgba(84, 84, 84, 0.03) 60%, rgba(84, 84, 84, 0.03) 80%, rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%), linear-gradient(348deg, rgba(174, 174, 174, 0.03) 0%, rgba(174, 174, 174, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 25%, rgba(191, 191, 191, 0.03) 25%, rgba(191, 191, 191, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 50%, rgba(227, 227, 227, 0.03) 50%, rgba(227, 227, 227, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 75%, rgba(162, 162, 162, 0.03) 75%, rgba(162, 162, 162, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 100%), linear-gradient(600deg, rgba(38, 38, 38, 0.02) 0%, rgba(38, 38, 38, 0.02) 25%, rgba(106, 106, 106, 0.02) 25%, rgba(106, 106, 106, 0.02) 50%, rgba(28, 28, 28, 0.02) 50%, rgba(28, 28, 28, 0.02) 75%, rgba(66, 66, 66, 0.02) 75%, rgba(66, 66, 66, 0.02) 100%), linear-gradient(382deg, rgba(38, 38, 38, 0.03) 0%, rgba(38, 38, 38, 0.03) 25%, rgba(211, 211, 211, 0.03) 25%, rgba(211, 211, 211, 0.03) 50%, rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%, rgba(24, 24, 24, 0.03) 75%, rgba(24, 24, 24, 0.03) 100%), linear-gradient(296deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 100.002%), linear-gradient(528deg, rgba(20, 20, 20, 0.01) 0%, rgba(20, 20, 20, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 100.002%), linear-gradient(335deg, rgba(191, 85, 105, 0.5), rgba(22, 22, 22, 0.5));\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 500px) {\n  section[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\nsection[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  padding-right: 80px;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 800px) {\n  section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    padding-right: 20px;\n  }\n}\n@media (max-width: 720px) {\n  section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    height: 60px;\n    padding-right: 0;\n  }\n}\nsection[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #fff;\n}\n@media (max-width: 400px) {\n  section[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n}\n@media (max-width: 720px) {\n  section[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media (max-width: 500px) {\n  section[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 100%;\n    justify-content: center;\n  }\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  padding-left: 80px;\n}\n@media (max-width: 800px) {\n  section[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 35px;\n  padding: 5px;\n  transition: 0.3s;\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\nsection[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDR3RkFqSFk7RUFrSFosb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN4R0Y7QUQwR0U7RUFmRjtJQWdCSSxhQUFBO0VDdkdGO0FBQ0Y7QUR5R0U7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDdkdKO0FEeUdJO0VBUEY7SUFRSSxtQkFBQTtFQ3RHSjtBQUNGO0FEd0dJO0VBWEY7SUFZSSxVQUFBO0VDckdKO0FBQ0Y7QUR1R0k7RUFmRjtJQWdCSSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNwR0o7QUFDRjtBRHNHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3BHTjtBRHNHTTtFQUxGO0lBTUksZUFBQTtFQ25HTjtBQUNGO0FEdUdFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNyR0o7QUR1R0k7RUFORjtJQU9JLFVBQUE7RUNwR0o7QUFDRjtBRHNHSTtFQVZGO0lBV0ksWUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtFQ25HSjtBQUNGO0FEcUdJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkdOO0FEcUdNO0VBUkY7SUFTSSxrQkFBQTtFQ2xHTjtBQUNGO0FEb0dNO0VBQ0UsY0FBQTtBQ2xHUjtBRG9HUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDbEdWO0FEb0dVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xHWjtBRG9HWTtFQUNFLHFCQUFBO0FDbEdkO0FEcUdZO0VBQ0UsVUFBQTtBQ25HZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmFkaWVudF9iZzogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNTYxZGVnLFxyXG4gICAgcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjAyKSAwJSxcclxuICAgIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgMTYuNjY3JSxcclxuICAgIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wMikgMTYuNjY3JSxcclxuICAgIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wMikgMzMuMzM0JSxcclxuICAgIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4wMikgMzMuMzM0JSxcclxuICAgIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4wMikgNTAuMDAxJSxcclxuICAgIHJnYmEoMTU0LCAxNTQsIDE1NCwgMC4wMikgNTAuMDAxJSxcclxuICAgIHJnYmEoMTU0LCAxNTQsIDE1NCwgMC4wMikgNjYuNjY4JSxcclxuICAgIHJnYmEoNzcsIDc3LCA3NywgMC4wMikgNjYuNjY4JSxcclxuICAgIHJnYmEoNzcsIDc3LCA3NywgMC4wMikgODMuMzM1JSxcclxuICAgIHJnYmEoMTAsIDEwLCAxMCwgMC4wMikgODMuMzM1JSxcclxuICAgIHJnYmEoMTAsIDEwLCAxMCwgMC4wMikgMTAwLjAwMiVcclxuICApLFxyXG4gIGxpbmVhci1ncmFkaWVudChcclxuICAgIDMyMGRlZyxcclxuICAgIHJnYmEoMzksIDM5LCAzOSwgMC4wMykgMCUsXHJcbiAgICByZ2JhKDM5LCAzOSwgMzksIDAuMDMpIDIwJSxcclxuICAgIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC4wMykgMjAlLFxyXG4gICAgcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjAzKSA0MCUsXHJcbiAgICByZ2JhKDMzLCAzMywgMzMsIDAuMDMpIDQwJSxcclxuICAgIHJnYmEoMzMsIDMzLCAzMywgMC4wMykgNjAlLFxyXG4gICAgcmdiYSg4NCwgODQsIDg0LCAwLjAzKSA2MCUsXHJcbiAgICByZ2JhKDg0LCA4NCwgODQsIDAuMDMpIDgwJSxcclxuICAgIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4wMykgODAlLFxyXG4gICAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjAzKSAxMDAlXHJcbiAgKSxcclxuICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAzNDhkZWcsXHJcbiAgICByZ2JhKDE3NCwgMTc0LCAxNzQsIDAuMDMpIDAlLFxyXG4gICAgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSAxMi41JSxcclxuICAgIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4wMykgMTIuNSUsXHJcbiAgICByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMDMpIDI1JSxcclxuICAgIHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4wMykgMjUlLFxyXG4gICAgcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjAzKSAzNy41JSxcclxuICAgIHJnYmEoMjMsIDIzLCAyMywgMC4wMykgMzcuNSUsXHJcbiAgICByZ2JhKDIzLCAyMywgMjMsIDAuMDMpIDUwJSxcclxuICAgIHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wMykgNTAlLFxyXG4gICAgcmdiYSgyMjcsIDIyNywgMjI3LCAwLjAzKSA2Mi41JSxcclxuICAgIHJnYmEoNzEsIDcxLCA3MSwgMC4wMykgNjIuNSUsXHJcbiAgICByZ2JhKDcxLCA3MSwgNzEsIDAuMDMpIDc1JSxcclxuICAgIHJnYmEoMTYyLCAxNjIsIDE2MiwgMC4wMykgNzUlLFxyXG4gICAgcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjAzKSA4Ny41JSxcclxuICAgIHJnYmEoODUsIDg1LCA4NSwgMC4wMykgODcuNSUsXHJcbiAgICByZ2JhKDg1LCA4NSwgODUsIDAuMDMpIDEwMCVcclxuICApLFxyXG4gIGxpbmVhci1ncmFkaWVudChcclxuICAgIDYwMGRlZyxcclxuICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4wMikgMCUsXHJcbiAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMDIpIDI1JSxcclxuICAgIHJnYmEoMTA2LCAxMDYsIDEwNiwgMC4wMikgMjUlLFxyXG4gICAgcmdiYSgxMDYsIDEwNiwgMTA2LCAwLjAyKSA1MCUsXHJcbiAgICByZ2JhKDI4LCAyOCwgMjgsIDAuMDIpIDUwJSxcclxuICAgIHJnYmEoMjgsIDI4LCAyOCwgMC4wMikgNzUlLFxyXG4gICAgcmdiYSg2NiwgNjYsIDY2LCAwLjAyKSA3NSUsXHJcbiAgICByZ2JhKDY2LCA2NiwgNjYsIDAuMDIpIDEwMCVcclxuICApLFxyXG4gIGxpbmVhci1ncmFkaWVudChcclxuICAgIDM4MmRlZyxcclxuICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4wMykgMCUsXHJcbiAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMDMpIDI1JSxcclxuICAgIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4wMykgMjUlLFxyXG4gICAgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjAzKSA1MCUsXHJcbiAgICByZ2JhKDQsIDQsIDQsIDAuMDMpIDUwJSxcclxuICAgIHJnYmEoNCwgNCwgNCwgMC4wMykgNzUlLFxyXG4gICAgcmdiYSgyNCwgMjQsIDI0LCAwLjAzKSA3NSUsXHJcbiAgICByZ2JhKDI0LCAyNCwgMjQsIDAuMDMpIDEwMCVcclxuICApLFxyXG4gIGxpbmVhci1ncmFkaWVudChcclxuICAgIDI5NmRlZyxcclxuICAgIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wMykgMCUsXHJcbiAgICByZ2JhKDI1MywgMjUzLCAyNTMsIDAuMDMpIDE0LjI4NiUsXHJcbiAgICByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMDMpIDE0LjI4NiUsXHJcbiAgICByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMDMpIDI4LjU3MiUsXHJcbiAgICByZ2JhKDQ2LCA0NiwgNDYsIDAuMDMpIDI4LjU3MiUsXHJcbiAgICByZ2JhKDQ2LCA0NiwgNDYsIDAuMDMpIDQyLjg1OCUsXHJcbiAgICByZ2JhKDY4LCA2OCwgNjgsIDAuMDMpIDQyLjg1OCUsXHJcbiAgICByZ2JhKDY4LCA2OCwgNjgsIDAuMDMpIDU3LjE0NCUsXHJcbiAgICByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMDMpIDU3LjE0NCUsXHJcbiAgICByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMDMpIDcxLjQzJSxcclxuICAgIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC4wMykgNzEuNDMlLFxyXG4gICAgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjAzKSA4NS43MTYlLFxyXG4gICAgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSA4NS43MTYlLFxyXG4gICAgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSAxMDAuMDAyJVxyXG4gICksXHJcbiAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgNTI4ZGVnLFxyXG4gICAgcmdiYSgyMCwgMjAsIDIwLCAwLjAxKSAwJSxcclxuICAgIHJnYmEoMjAsIDIwLCAyMCwgMC4wMSkgMTQuMjg2JSxcclxuICAgIHJnYmEoMjMsIDIzLCAyMywgMC4wMSkgMTQuMjg2JSxcclxuICAgIHJnYmEoMjMsIDIzLCAyMywgMC4wMSkgMjguNTcyJSxcclxuICAgIHJnYmEoMTksIDE5LCAxOSwgMC4wMSkgMjguNTcyJSxcclxuICAgIHJnYmEoMTksIDE5LCAxOSwgMC4wMSkgNDIuODU4JSxcclxuICAgIHJnYmEoMTM0LCAxMzQsIDEzNCwgMC4wMSkgNDIuODU4JSxcclxuICAgIHJnYmEoMTM0LCAxMzQsIDEzNCwgMC4wMSkgNTcuMTQ0JSxcclxuICAgIHJnYmEoNCwgNCwgNCwgMC4wMSkgNTcuMTQ0JSxcclxuICAgIHJnYmEoNCwgNCwgNCwgMC4wMSkgNzEuNDMlLFxyXG4gICAgcmdiYSgyNTQsIDI1NCwgMjU0LCAwLjAxKSA3MS40MyUsXHJcbiAgICByZ2JhKDI1NCwgMjU0LCAyNTQsIDAuMDEpIDg1LjcxNiUsXHJcbiAgICByZ2JhKDg3LCA4NywgODcsIDAuMDEpIDg1LjcxNiUsXHJcbiAgICByZ2JhKDg3LCA4NywgODcsIDAuMDEpIDEwMC4wMDIlXHJcbiAgKSxcclxuICBsaW5lYXItZ3JhZGllbnQoMzM1ZGVnLCByZ2JhKDE5MSwgODUsIDEwNSwgMC41KSwgcmdiYSgyMiwgMjIsIDIyLCAwLjUpKTtcclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDcxcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRncmFkaWVudF9iZztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcblxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmljb25zIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgZmlsbDogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJzZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDcxcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg1NjFkZWcsIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgMCUsIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgMTYuNjY3JSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjAyKSAxNi42NjclLCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDIpIDMzLjMzNCUsIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4wMikgMzMuMzM0JSwgcmdiYSgxNjEsIDE2MSwgMTYxLCAwLjAyKSA1MC4wMDElLCByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuMDIpIDUwLjAwMSUsIHJnYmEoMTU0LCAxNTQsIDE1NCwgMC4wMikgNjYuNjY4JSwgcmdiYSg3NywgNzcsIDc3LCAwLjAyKSA2Ni42NjglLCByZ2JhKDc3LCA3NywgNzcsIDAuMDIpIDgzLjMzNSUsIHJnYmEoMTAsIDEwLCAxMCwgMC4wMikgODMuMzM1JSwgcmdiYSgxMCwgMTAsIDEwLCAwLjAyKSAxMDAuMDAyJSksIGxpbmVhci1ncmFkaWVudCgzMjBkZWcsIHJnYmEoMzksIDM5LCAzOSwgMC4wMykgMCUsIHJnYmEoMzksIDM5LCAzOSwgMC4wMykgMjAlLCByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuMDMpIDIwJSwgcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjAzKSA0MCUsIHJnYmEoMzMsIDMzLCAzMywgMC4wMykgNDAlLCByZ2JhKDMzLCAzMywgMzMsIDAuMDMpIDYwJSwgcmdiYSg4NCwgODQsIDg0LCAwLjAzKSA2MCUsIHJnYmEoODQsIDg0LCA4NCwgMC4wMykgODAlLCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMDMpIDgwJSwgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjAzKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDM0OGRlZywgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSAwJSwgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSAxMi41JSwgcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjAzKSAxMi41JSwgcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjAzKSAyNSUsIHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4wMykgMjUlLCByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMDMpIDM3LjUlLCByZ2JhKDIzLCAyMywgMjMsIDAuMDMpIDM3LjUlLCByZ2JhKDIzLCAyMywgMjMsIDAuMDMpIDUwJSwgcmdiYSgyMjcsIDIyNywgMjI3LCAwLjAzKSA1MCUsIHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wMykgNjIuNSUsIHJnYmEoNzEsIDcxLCA3MSwgMC4wMykgNjIuNSUsIHJnYmEoNzEsIDcxLCA3MSwgMC4wMykgNzUlLCByZ2JhKDE2MiwgMTYyLCAxNjIsIDAuMDMpIDc1JSwgcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjAzKSA4Ny41JSwgcmdiYSg4NSwgODUsIDg1LCAwLjAzKSA4Ny41JSwgcmdiYSg4NSwgODUsIDg1LCAwLjAzKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDYwMGRlZywgcmdiYSgzOCwgMzgsIDM4LCAwLjAyKSAwJSwgcmdiYSgzOCwgMzgsIDM4LCAwLjAyKSAyNSUsIHJnYmEoMTA2LCAxMDYsIDEwNiwgMC4wMikgMjUlLCByZ2JhKDEwNiwgMTA2LCAxMDYsIDAuMDIpIDUwJSwgcmdiYSgyOCwgMjgsIDI4LCAwLjAyKSA1MCUsIHJnYmEoMjgsIDI4LCAyOCwgMC4wMikgNzUlLCByZ2JhKDY2LCA2NiwgNjYsIDAuMDIpIDc1JSwgcmdiYSg2NiwgNjYsIDY2LCAwLjAyKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDM4MmRlZywgcmdiYSgzOCwgMzgsIDM4LCAwLjAzKSAwJSwgcmdiYSgzOCwgMzgsIDM4LCAwLjAzKSAyNSUsIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4wMykgMjUlLCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMDMpIDUwJSwgcmdiYSg0LCA0LCA0LCAwLjAzKSA1MCUsIHJnYmEoNCwgNCwgNCwgMC4wMykgNzUlLCByZ2JhKDI0LCAyNCwgMjQsIDAuMDMpIDc1JSwgcmdiYSgyNCwgMjQsIDI0LCAwLjAzKSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KDI5NmRlZywgcmdiYSgyNTMsIDI1MywgMjUzLCAwLjAzKSAwJSwgcmdiYSgyNTMsIDI1MywgMjUzLCAwLjAzKSAxNC4yODYlLCByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMDMpIDE0LjI4NiUsIHJnYmEoMTAzLCAxMDMsIDEwMywgMC4wMykgMjguNTcyJSwgcmdiYSg0NiwgNDYsIDQ2LCAwLjAzKSAyOC41NzIlLCByZ2JhKDQ2LCA0NiwgNDYsIDAuMDMpIDQyLjg1OCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4wMykgNDIuODU4JSwgcmdiYSg2OCwgNjgsIDY4LCAwLjAzKSA1Ny4xNDQlLCByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMDMpIDU3LjE0NCUsIHJnYmEoMTE2LCAxMTYsIDExNiwgMC4wMykgNzEuNDMlLCByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuMDMpIDcxLjQzJSwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjAzKSA4NS43MTYlLCByZ2JhKDE3NCwgMTc0LCAxNzQsIDAuMDMpIDg1LjcxNiUsIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC4wMykgMTAwLjAwMiUpLCBsaW5lYXItZ3JhZGllbnQoNTI4ZGVnLCByZ2JhKDIwLCAyMCwgMjAsIDAuMDEpIDAlLCByZ2JhKDIwLCAyMCwgMjAsIDAuMDEpIDE0LjI4NiUsIHJnYmEoMjMsIDIzLCAyMywgMC4wMSkgMTQuMjg2JSwgcmdiYSgyMywgMjMsIDIzLCAwLjAxKSAyOC41NzIlLCByZ2JhKDE5LCAxOSwgMTksIDAuMDEpIDI4LjU3MiUsIHJnYmEoMTksIDE5LCAxOSwgMC4wMSkgNDIuODU4JSwgcmdiYSgxMzQsIDEzNCwgMTM0LCAwLjAxKSA0Mi44NTglLCByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuMDEpIDU3LjE0NCUsIHJnYmEoNCwgNCwgNCwgMC4wMSkgNTcuMTQ0JSwgcmdiYSg0LCA0LCA0LCAwLjAxKSA3MS40MyUsIHJnYmEoMjU0LCAyNTQsIDI1NCwgMC4wMSkgNzEuNDMlLCByZ2JhKDI1NCwgMjU0LCAyNTQsIDAuMDEpIDg1LjcxNiUsIHJnYmEoODcsIDg3LCA4NywgMC4wMSkgODUuNzE2JSwgcmdiYSg4NywgODcsIDg3LCAwLjAxKSAxMDAuMDAyJSksIGxpbmVhci1ncmFkaWVudCgzMzVkZWcsIHJnYmEoMTkxLCA4NSwgMTA1LCAwLjUpLCByZ2JhKDIyLCAyMiwgMjIsIDAuNSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cbnNlY3Rpb24gLmNvcHlyaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBzZWN0aW9uIC5jb3B5cmlnaHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICBzZWN0aW9uIC5jb3B5cmlnaHQge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBzZWN0aW9uIC5jb3B5cmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5zZWN0aW9uIC5jb3B5cmlnaHQgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICBzZWN0aW9uIC5jb3B5cmlnaHQgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5zZWN0aW9uIC5pY29ucyB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICBzZWN0aW9uIC5pY29ucyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHNlY3Rpb24gLmljb25zIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbnNlY3Rpb24gLmljb25zIHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBzZWN0aW9uIC5pY29ucyB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5zZWN0aW9uIC5pY29ucyB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuc2VjdGlvbiAuaWNvbnMgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmljb25zIHVsIGxpIGEgc3ZnIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbnNlY3Rpb24gLmljb25zIHVsIGxpIGEgc3ZnOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuc2VjdGlvbiAuaWNvbnMgdWwgbGkgYSBzdmcgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.transparentHeader = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          window.onscroll = function () {
            if (document.querySelector('html').scrollTop === 0) {
              _this.transparentHeader = false;
            } else {
              _this.transparentHeader = true;
            }
          };
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 65,
      vars: 2,
      consts: [[1, "logo"], ["routerLink", "", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 1500 1334", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 1500 1334"], ["type", "text/css"], ["id", "SVGID_1_", "x", "-354", "y", "-447", "width", "2208", "height", "2208"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_1_", 2, "overflow", "visible"], ["d", "M671.8,929.3c-0.9,2.8-2.2,6.3-4,10.3c-1.7,4-3.6,7.9-5.5,11.6c-1.9,3.7-3.7,6.9-5.4,9.5\n      c-1.7,2.6-2.9,3.9-3.7,3.9c-1.2,0-3.5-0.8-6.9-2.4c-3.4-1.6-7-3.6-11-6.2c-4-2.5-7.8-5.5-11.5-8.8c-3.7-3.3-6.5-6.8-8.3-10.4\n      c0-0.3,0.3-1.4,0.8-3.1c0.6-1.7,1.3-3.7,2.2-5.9c1-2.3,2.1-4.8,3.2-7.5c1.1-2.7,2.3-5.3,3.5-7.8c1.2-2.5,2.4-4.7,3.6-6.7\n      c1.2-2,2.2-3.4,3.1-4.3c3.5,3.6,7,6.9,10.6,9.9c3.6,2.9,7.1,5.6,10.6,8c3.5,2.4,6.8,4.4,9.9,6c3.1,1.6,6,2.9,8.6,3.6V929.3z", 1, "darker"], ["d", "M775.9,1045.6c-0.4,2.2-1.1,4.8-2.2,7.7c-1,2.9-2.1,5.6-3.3,8.2c-1.2,2.6-2.2,4.7-3.2,6.5\n      c-1,1.8-1.7,2.6-2,2.6c-1.1,0-2.5-0.4-4.2-1.1c-1.7-0.7-3.6-1.6-5.6-2.8c-2-1.1-4.1-2.4-6.2-3.8c-2.1-1.4-4-2.9-5.8-4.3\n      c-1.8-1.5-3.3-2.9-4.6-4.2c-1.3-1.4-2-2.6-2.4-3.6c0-0.5,0.5-2,1.4-4.4c1-2.4,2.1-5,3.3-7.9c1.2-2.8,2.5-5.5,3.9-7.9\n      c1.3-2.4,2.4-3.9,3.1-4.4c1.3,1.5,3.1,3.2,5.2,5.1c2.2,1.9,4.5,3.7,7.1,5.5c2.6,1.8,5.2,3.5,7.9,5.1\n      C771,1043.6,773.5,1044.8,775.9,1045.6 M788.9,1018.6c3.4,4.2,7.6,8,12.7,11.4c5,3.3,10.1,6,15.3,7.9c-1.8,4.6-3.3,8.4-4.7,11.5\n      c-1.4,3.1-2.6,5.6-3.6,7.4c-1,1.9-1.8,3.2-2.4,4.1c-0.6,0.8-1.1,1.2-1.3,1.2c-0.7,0-1.7-0.3-3.1-0.8c-1.4-0.5-3-1.3-4.9-2.3\n      c-1.8-1-3.8-2.1-5.8-3.4c-2-1.3-4-2.7-5.8-4.1c-1.8-1.5-3.5-3-4.9-4.6c-1.4-1.6-2.4-3.2-3-4.8c0-0.6,0.4-1.9,1.2-3.9\n      c0.8-2,1.8-4.3,2.9-6.8c1.1-2.5,2.4-4.9,3.7-7.3C786.5,1021.7,787.7,1019.9,788.9,1018.6", 1, "darker"], ["d", "M1077,1009c-1,2.7-2.4,5.9-4.3,9.7c-1.9,3.8-3.8,7.5-5.8,11c-2,3.5-3.9,6.5-5.6,8.9c-1.7,2.4-3,3.6-3.8,3.6\n      c-1.2-0.1-3.4-0.9-6.6-2.6c-3.2-1.7-6.6-3.9-10.4-6.5c-3.7-2.6-7.3-5.7-10.7-9.1c-3.4-3.4-5.9-6.9-7.5-10.5c0-0.3,0.3-1.3,1-2.9\n      c0.6-1.6,1.4-3.5,2.4-5.6c1.1-2.1,2.2-4.5,3.4-7.1c1.2-2.6,2.5-5,3.8-7.4c1.3-2.3,2.6-4.5,3.8-6.3c1.2-1.9,2.3-3.2,3.2-4\n      c3.2,3.7,6.5,7,9.8,10c3.3,3,6.6,5.7,9.9,8.2c3.2,2.5,6.4,4.6,9.3,6.3c3,1.7,5.7,3,8.1,3.9L1077,1009z", 1, "darker"], ["d", "M895.5,911.9c3.9-3.2,7.8-6.1,11.6-8.9c3.8-2.8,7.2-5.6,10.2-8.3c3-2.8,5.2-5.7,6.4-8.9\n      c1.1-2.7,2.3-5.4,3.4-8.1c1.2-2.7,2.5-5.5,4.1-8.5l-0.6-1c-4.5,3.3-9,6.1-13.4,8.4c-4.4,2.4-8.7,4.3-12.8,5.8\n      c-4.1,1.5-8,2.7-11.7,3.4c-3.7,0.7-7.1,1.1-10.1,1.1c-5.8,0-11.3-0.6-16.5-1.9c-5.2-1.3-9.8-3-13.8-5.2c-4-2.2-7.1-4.7-9.5-7.5\n      c-2.3-2.8-3.5-5.8-3.5-8.8c0-1.1,0.5-2.3,1.5-3.6c1-1.3,2.5-2.4,4.3-3.4c1.9-1,4.1-1.9,6.6-2.5c2.5-0.7,5.3-1,8.3-1\n      c4.7,0,8.8,0.4,12.5,1.2c3.7,0.8,6.9,1.9,9.6,3.2c2.7,1.3,4.9,2.8,6.5,4.4c1.7,1.6,2.8,3.2,3.3,4.8c0.9,2.4,1.6,4.2,1.9,5.4\n      c0.3,1.2,0.8,1.8,1.5,1.8c0.6-0.1,0.9-0.5,1-1.1c0.1-0.6,0.1-1.1,0.1-1.5c0-1.1,0-2.6-0.1-4.5c-0.1-1.9-0.1-4.3-0.1-7.3\n      c0-2.1,0-4.2,0.1-6.2c0.1-2,0.1-3.6,0.1-4.8c0-3.1-1-5.7-3.1-7.9c-2.1-2.2-4.6-4-7.7-5.3c-3.1-1.4-6.4-2.4-10.1-3\n      c-3.6-0.6-7-1-10-1c-8.1,0-14.7,2.2-19.8,6.7c-5.1,4.5-9.1,10.8-11.9,19c-1.7,5.1-2.9,9.4-3.6,12.8c-0.7,3.4-1,6.4-1,8.9\n      c0,4.1,0.9,7.8,2.8,11.3c1.9,3.5,4.5,6.6,8,9.3c3.4,2.8,7.6,5.1,12.5,7.1c4.9,2,10.4,3.4,16.5,4.4v0.6c-4.9,5.3-9.8,10.2-14.7,14.5\n      c-4.9,4.4-9.8,8.1-14.6,11.2c-4.9,3.1-9.7,5.5-14.4,7.2c-4.8,1.7-9.4,2.5-13.8,2.5c-4.2,0-8.2-0.9-11.9-2.7c-2.1-1-4.2-2.4-6.2-3.9\n      c-0.1-0.1-0.3-0.2-0.4-0.3c-2.7-2.6-5-5.2-6.7-7.7c-1.7-2.5-3.1-4.9-4.1-7.1c-1-2.3-1.9-4.4-2.6-6.6c-1-2.9-2-6-3-9.3\n      c-1-3.3-1.9-6.7-2.7-10.2h-1c-1.4,3.4-2.6,6.6-3.6,9.6c-1,3-1.9,5.8-2.6,8.4c0.1,1.2,0.3,2.4,0.4,3.6c0.1,1.2,0.2,2.4,0.2,3.6\n      c0,3.3-0.7,6.2-2.2,8.6c-1.5,2.4-3.7,4.8-6.6,7.1c-5.9,4.6-11.5,8-16.7,10.1c-5,2-10,3.1-15.1,3.2c-0.1,0-0.3,0-0.4-0.1\n      c-2.7-0.3-5.3-0.7-7.8-1.2c-2.6-0.6-5-1.4-7.5-2.6c-2.4-1.2-4.8-2.7-7.1-4.6c-2.3-1.9-4.5-4.4-6.7-7.5l-1,0.2\n      c-1.6,6.1-2.8,11.1-3.7,15c-0.9,3.9-1.3,7-1.3,9.3c0,2.1,0.5,3.9,1.4,5.5c0.9,1.6,2.1,3.3,3.6,5.1c1.4,1.8,2.9,3.8,4.7,6.1\n      c1.7,2.3,3.4,5,5.1,8.3c2.5,5,4.2,10,5.1,14.9c0.9,5,1.3,10.2,1.3,15.5c0,4.2-0.9,9-2.6,14.3c-1.7,5.3-4.2,10.7-7.4,16.2\n      c-3.2,5.5-7,10.9-11.6,16.1c-4.5,5.2-9.6,9.9-15.3,14c-5.7,4.1-11.9,7.4-18.5,9.9c-6.7,2.5-13.7,3.7-21.2,3.7\n      c-5.4,0-10.5-0.9-15.2-2.7c-4.8-1.8-9-4.6-12.6-8.2c-3.6-3.7-6.4-8.2-8.5-13.7c-2.1-5.5-3.1-11.9-3.1-19.2c0-3.7,0.4-7.9,1.3-12.7\n      c0.9-4.7,2.5-9.9,4.9-15.5c2.4-5.6,5.5-11.6,9.6-18.1c4-6.4,9.2-13.3,15.5-20.5c0.8-0.8,1.2-1.7,1.2-2.6c0-0.4-0.2-0.7-0.6-0.8\n      s-0.8-0.2-1.2-0.2c-0.5,0-1.1,0.3-1.9,0.7c-0.8,0.5-1.8,1.3-3.1,2.5c-1.3,1.2-2.7,2.7-4.4,4.6c-1.7,1.9-3.7,4.3-5.9,7.1\n      c-9.4,12.2-16.2,24.3-20.4,36.4c-4.2,12.1-6.3,24-6.3,35.8c0,8.3,1.1,16,3.4,23.2c2.3,7.2,5.5,13.4,9.9,18.7\n      c4.3,5.3,9.6,9.4,15.9,12.4c6.3,3,13.4,4.5,21.5,4.5c6.1,0,12.2-0.9,18.3-2.7c6.1-1.8,12-4.5,17.7-7.9c5.7-3.5,11.1-7.7,16.2-12.7\n      c5.1-5,9.6-10.7,13.6-17.1c4-6.4,7.4-13.4,10.2-21c2.8-7.6,4.7-15.8,5.8-24.6c0.5-3.9,1-7.8,1.6-11.8c0.5-3.9,1-7.9,1.5-12\n      c0.5-4.1,0.9-8.3,1.2-12.5c0.3-4.2,0.4-8.6,0.4-13.1c0-1.7,0-3.3-0.1-4.7c-0.1-1.1-0.1-2-0.2-2.8c1,0,2,0.1,3.1,0.1\n      c5,0,10-1,14.9-2.9c4.9-2,9.5-4.6,13.7-8c4.3-3.4,8.1-7.4,11.5-12c3.4-4.6,6.1-9.6,8.3-14.9h0.6c1.3,3.1,3,6.4,5.4,10\n      c2.3,3.5,4.9,6.8,7.8,9.7c2.4,2.5,5,4.5,7.7,6.3c0.2,0.1,0.4,0.3,0.6,0.4c0.3,0.2,0.6,0.5,0.9,0.7c2,1.2,3.9,1.9,5.7,2.4\n      c2.8,0.9,5.8,1.4,8.9,1.4c5.9,0,11.8-1,17.7-3c5.9-2,11.9-5,17.9-9.2c6-4.1,12.2-9.3,18.5-15.7c6.3-6.3,12.8-13.9,19.5-22.6\n      C888.1,918.6,891.6,915,895.5,911.9", 1, "darker"], ["d", "M1238.4,750.5c-0.5-8-1.2-16.7-2.2-26c-1-9.4-2.3-19.2-4-29.4c-1.7-10.2-3.8-20.2-6.2-30\n      c-2.4-9.8-5.3-19.1-8.5-28c-3.3-8.9-7-16.7-11.3-23.4c-4.3-6.7-9-12-14.2-15.9c-5.2-3.9-11.1-5.9-17.4-5.9c-3,0-5.8,0.7-8.6,2.2\n      c-2.7,1.5-5.3,3.5-7.7,6.2c-2.4,2.6-4.6,5.8-6.6,9.3c-1.6,2.9-3,6-4.3,9.3c-0.7,0.6-1.5,1.3-2.2,2.4c-1.6,2.4-3,5.5-4.2,9.4\n      c-3,9.8-5.1,19.1-6.2,27.9c-1.2,8.8-1.7,17.4-1.7,25.7c0,9.9,0.6,19.1,1.8,27.7c1.2,8.6,2.8,16.7,4.6,24.2\n      c1.9,7.6,3.9,14.6,6.1,21.2c2.2,6.6,4.2,12.8,6.1,18.5c1.9,5.8,3.4,11.2,4.6,16.3c1.2,5.1,1.8,9.9,1.8,14.4c0,2-0.3,4.3-0.8,7\n      c-0.5,2.7-1.1,5.5-1.7,8.3c-0.6,2.8-1.2,5.6-1.7,8.3c-0.5,2.7-0.8,5-0.8,6.8v0.4c-0.4,2.2-0.6,4.4-0.6,6.5c0,2.4,0.2,4.5,0.5,6.3\n      c0.3,1.8,0.8,3.4,1.3,4.7l-0.2,0.8c-2.1,0.7-4,2-5.9,3.7c-1.9,1.7-3.8,3.8-5.8,6.2c-2,2.4-4,5-6.1,7.8c-2.1,2.8-4.4,5.6-6.9,8.5\n      c-4.3,4.8-8.2,8.8-12,12c-3.7,3.1-7.2,5.6-10.4,7.4c-3.2,1.8-6.1,3.1-8.9,3.8c-2.7,0.7-5.2,1.1-7.5,1.1c-4.2,0-8.2-0.9-11.9-2.7\n      c-1.1-0.6-2.3-1.2-3.4-1.9c-0.3-0.2-0.6-0.5-0.8-0.7c-2.2-1.9-4-3.6-5.5-5c-1.6-1.4-2.9-2.5-4-3.3c-1.1-0.8-2.2-1.2-3.2-1.2\n      c-1.3,0-2.4,0.5-3.4,1.6c-1,1.1-2.1,2.5-3.1,4.2c-1,1.8-2.1,3.8-3.1,6.2c-1.1,2.4-2.4,4.9-3.8,7.5c-1.4,2.6-3.1,5.3-4.9,8\n      c-1.9,2.7-4,5.3-6.5,7.9c-5.1,5.3-10,9.1-14.7,11.5c-4.7,2.3-9.2,3.5-13.6,3.5c-4.2,0-8.1-0.9-11.9-2.7c-1.7-0.8-3.3-1.8-4.8-2.9\n      c-0.2-0.2-0.5-0.4-0.7-0.6c-2.7-2.4-5.1-4.9-7.3-7.4c-2.2-2.5-4.2-5.1-6.1-7.9c-1.9-2.7-3.6-5.6-5.3-8.6c-0.9-1.6-2-2.9-3.1-4.1\n      c-1.2-1.1-2.5-1.7-4-1.7c-0.9,0-1.6,0.3-2.3,1c-0.7,0.7-1.3,1.6-1.9,2.8c-0.6,1.2-1.1,2.5-1.6,3.9c-0.5,1.5-0.9,2.9-1.4,4.4\n      c-3.8,12.3-9.2,23.2-16.1,32.9c-7,9.6-15.1,18.3-24.5,26.1c-5.7,4.7-12.3,9.8-19.9,15.1c-7.6,5.4-16.1,11.1-25.5,17.1\n      c-0.9,0.7-1.8,1.4-2.7,2.1c-0.9,0.7-1.3,1.3-1.3,1.9c0,0.4,0.2,0.6,0.6,0.7c0.4,0.1,0.8,0.1,1.2,0.1c0.7,0,1.7-0.3,2.9-1\n      c1.2-0.7,2.7-1.3,4.7-1.8c1.9-0.7,4.3-1.4,7.1-1.9c2.7-0.5,5.8-1.2,9.1-1.9c3.3-0.7,6.9-1.6,10.7-2.6c3.8-1,7.7-2.4,11.7-4\n      c4-1.7,8.1-3.7,12.2-6.1c4.1-2.4,8.1-5.3,12-8.8c3.6-3.2,6.6-6.5,9-10c2.4-3.5,4.3-6.8,5.9-10.1c1.5-3.3,2.8-6.4,3.7-9.4\n      c0.9-2.9,1.6-5.5,2.3-7.7c0.7-2.2,1.4-4,2.1-5.3c0.7-1.3,1.6-1.9,2.7-1.9c0.5,0,1.2,0.3,2.1,0.8c0.9,0.5,1.9,1.2,3,2\n      c1.1,0.8,2.2,1.8,3.4,2.9c1.2,1.1,2.3,2.2,3.2,3.2c2.1,2.1,4.1,4.2,6.2,6.2c2.1,2,4.2,3.7,6.3,5.2c2.1,1.5,4.2,2.7,6.3,3.6\n      c0.7,0.3,1.4,0.5,2.1,0.7c3,1,6.2,1.6,9.6,1.6c5.4,0,10.7-1,15.8-3.1c5.2-2.1,10.1-5.3,14.6-9.7c2.3-2.2,4.3-4.6,5.9-7.1\n      c1.6-2.6,3.1-5.1,4.3-7.6c1.3-2.5,2.4-4.9,3.4-7.2c0.9-2.3,1.9-4.3,2.8-6c0.9-1.8,1.9-3.1,2.8-4.2c1-1,2.1-1.5,3.4-1.5\n      c1.5,0,3.1,0.5,4.8,1.5c1.7,1,3.6,2.1,5.6,3.3c1.5,0.9,3,1.7,4.6,2.5c0.4,0.2,0.9,0.4,1.3,0.6c0.2,0.1,0.3,0.1,0.4,0.2\n      c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,0.9,0.4c3.4,1.4,7,2.1,11,2.1c2.9,0,5.9-0.3,9.1-0.8c3.2-0.5,6.7-1.8,10.4-3.9\n      c3.7-2.1,7.6-5.2,11.7-9.2c4.1-4.1,8.5-9.6,13-16.7c2.5-4,4.8-7.4,6.8-10.2c2-2.8,4-5.1,6-6.9c2-1.8,4.1-3.1,6.2-3.9\n      c2.2-0.8,4.7-1.2,7.6-1.2c3.7,0,7.8,0.5,12.1,1.5c4.3,1,8.7,2.4,13,4.2c2.4-1.9,4.6-4,6.6-6.5c2-2.5,3.7-5.1,5.1-7.8\n      c1.4-2.7,2.5-5.5,3.3-8.2c0.8-2.8,1.2-5.3,1.2-7.7c0-2.7-1-4.8-2.9-6.4c-1.9-1.6-4.4-3-7.3-4.1c-2.9-1.1-6.1-2.2-9.5-3.1\n      c-3.4-0.9-6.5-1.9-9.5-3c-2.9-1.1-5.4-2.5-7.3-4.2c-2-1.7-2.9-3.9-2.9-6.6c0-1.7,0.3-3.3,0.8-4.8c0.5-1.4,0.8-2.9,0.8-4.4\n      c0-0.6-0.1-1.1-0.3-1.6c-0.1-0.2-0.3-0.4-0.5-0.5c0.3-1,0.6-2.1,0.8-3.1c0.6-2.3,1.1-4.9,1.6-7.6c0.5-2.7,0.9-5.4,1.3-8.1\n      c0.4-2.7,0.7-5.3,0.9-8c0.2-2.6,0.3-5.1,0.3-7.3c0-6.1-0.7-12.3-2-18.5c-1.3-6.3-3-12.5-4.9-18.9c-2-6.3-4.1-12.8-6.4-19.4\n      c-2.3-6.5-4.5-13.2-6.4-20c-2-6.9-3.6-13.9-4.9-21.1c-1.3-7.2-2-14.6-2-22.2c0-3.9,0.2-7.3,0.7-10.4c0.5-3.1,1.2-5.9,2.1-8.5\n      c0.3-0.9,0.6-1.7,0.9-2.6c0.4-0.6,0.8-1.3,1.1-1.9c1-1.7,2.1-4,3.4-7c0.7-1.6,1.5-3.2,2.6-4.8c1.1-1.6,2.4-3.1,3.8-4.4\n      c1.4-1.3,3.1-2.4,4.9-3.3c1.8-0.9,3.8-1.3,6-1.3c5.8,0,11.1,1.8,15.9,5.4c4.8,3.6,9.3,8.6,13.3,14.8c4,6.3,7.6,13.6,10.9,21.9\n      c3.2,8.3,6.1,17.2,8.6,26.5c2.5,9.4,4.6,19,6.4,29c1.8,10,3.2,19.6,4.4,29.1c1.2,9.4,2,18.3,2.5,26.8c0.5,8.4,0.8,15.9,0.8,22.2\n      c0,1.6,0,3.3-0.1,5.3c-0.1,1.9-0.1,3.8-0.2,5.7c-0.1,1.9-0.1,3.5-0.2,4.9c-0.1,1.4-0.1,2.3-0.1,2.6c0,0.6,0,1.2,0,1.9\n      c0,0.6,0.2,0.9,0.4,0.9c0.3,0,0.6-0.3,0.9-0.9c0.3-0.6,0.5-1.2,0.7-1.9c1.1-3.3,2.1-6.7,3-10.2c0.8-3.4,1.7-6.9,2.6-10.4\n      c0.6-2.6,1-5.6,1.2-9.1c0.2-3.5,0.3-7.5,0.3-11.9C1239.1,765.1,1238.8,758.5,1238.4,750.5", 1, "darker"], ["d", "M483.2,550.7v0.4c-1.1,1.4-2.3,3.4-3.5,5.9c-1.3,2.6-2.4,5.2-3.4,7.9c-1,2.7-1.9,5.1-2.5,7.3\n      c-0.6,2.2-0.9,3.4-0.9,3.9c0,1.9,0.7,2.9,2.1,2.9c0.8,0,1.6-0.3,2.2-1c0.6-0.7,1.3-1.5,2-2.3c2.4-3.9,5.4-7.3,9-10.1\n      c3.6-2.8,7.5-5.3,11.6-7.5c4.1-2.1,8.3-4.1,12.6-5.9c4.3-1.7,8.4-3.4,12.2-5.2c3.8-1.8,7.2-3.7,10-5.7c2.8-2,5-4.4,6.4-7.2\n      c0.8-1.5,2-3.7,3.3-6.7c1.3-2.9,3.3-5.8,6.2-8.8c0.7-0.7,1-1.3,1-1.9c0-0.8-0.4-1.2-1.2-1.2c-0.4,0-1,0.2-1.9,0.6\n      c-3.6,1.9-7.5,3.9-11.8,5.9c-4.2,2-8.5,3.9-12.7,5.6c-4.2,1.7-8.4,3.2-12.5,4.3c-4.1,1.1-7.9,1.7-11.4,1.7c-1.9,0-4.4-0.4-7.5-1.2\n      c-3-0.8-6.1-2-9.1-3.6c-3-1.6-5.6-3.5-7.7-5.6c-2.2-2.2-3.2-4.6-3.2-7.4c0-2.1,1.6-4.1,4.8-6.1c3.2-2,7.8-3,14-3\n      c6.9,0,12,0.9,15.2,2.7c3.2,1.8,4.9,4.4,5.2,7.7c0.3,1.4,1,2.1,2.1,2.1c0.7,0,1.2-0.4,1.7-1.2c1.2-3.3,2.5-6.5,3.7-9.4\n      c1.1-2.8,1.7-5.6,1.7-8.5c0-3.7-2.1-6.8-6.3-9.3c-4.2-2.4-10.1-3.6-17.9-3.6c-4.7,0-8.9,0.6-12.4,1.9c-3.5,1.2-6.6,2.9-9.2,5\n      c-2.6,2.1-4.7,4.6-6.5,7.5c-1.7,2.9-3.1,6-4.1,9.4c-1.5,4.5-2.5,8.1-3,11c-0.5,2.9-0.7,5.2-0.7,6.9c0,5.4,2.1,10,6.3,13.9\n      C471.1,546.3,476.6,549,483.2,550.7", 1, "secondary_color"], ["d", "M573.9,605.3c-4.6-14.1-11.4-29.4-20.5-45.9h-1.9c-4.4,8.6-8.3,16.9-11.6,24.9c-3.3,8-6.4,15.8-9.3,23.4\n      c3.4,6.1,6.6,11.9,9.4,17.5c2.9,5.6,5.3,11.1,7.4,16.6c2.1,5.5,3.7,11,4.9,16.6c1.2,5.6,1.8,11.3,1.8,17.3c0,7.5-2.3,14.6-6.8,21.5\n      c-4.6,6.8-10.3,13.2-17.1,19.2c-15.1,12.9-29.6,22.4-43.6,28.5c-14,6.1-28.1,9.1-42.2,9.1c-2.7,0-5.6-0.1-8.7-0.4\n      c-0.3-0.1-0.6-0.1-0.8-0.2l-0.8-0.8c0.9-3.9,1.8-8,2.8-12.1c1-4.2,1.9-8.2,2.8-12.1c0.8-3.9,1.5-7.6,2-10.9\n      c0.5-3.4,0.8-6.2,0.8-8.5c0-9.9-3.3-17.5-9.8-22.8c-6.5-5.3-16.9-8-31.2-8c-5.4,0-11.5,0.6-18.2,1.9c-6.7,1.3-13.8,3.1-21.3,5.6\n      c-7.5,2.5-15.2,5.5-23.3,9c-8,3.5-16.1,7.5-24.2,12c-0.6,8.7-2.6,17.9-5.9,27.4c-3.3,9.6-7.5,19.9-12.7,31l1.9,1.9\n      c5.6-4.6,11-8.2,16.2-11c5.2-2.8,10.5-4.2,15.7-4.2c3.9,0,7.7,0.8,11.2,2.4c3.5,1.6,7,3.5,10.3,5.8c3.4,2.3,6.7,4.7,10.2,7.4\n      c3.3,2.8,6.8,5.3,10.4,7.6v1.1c-18.2,14.4-34.4,29.7-48.6,45.8c-14.2,16.1-26.1,33.1-35.9,51.1c-9.7,18-17.2,37-22.2,57\n      c-5.1,20-7.6,41.1-7.6,63.4c0,21.1,2.8,39.7,8.5,55.7c5.7,16,13.4,29.4,23.1,40.2c9.7,10.8,20.9,18.9,33.7,24.3\n      c12.8,5.4,26.3,8.2,40.6,8.2c19,0,36.7-2.9,53.2-8.7c16.5-5.8,31.5-13.5,45.1-23.2c13.6-9.6,25.7-20.7,36.2-33.1\n      c10.5-12.5,19.4-25.4,26.6-38.7c7.2-13.4,12.7-26.6,16.4-39.9c3.7-13.2,5.6-25.5,5.6-36.7c0-6.2-0.3-12.3-0.9-18.2\n      c-0.6-5.9-1.7-11.7-3.4-17.3c-1.7-5.6-4.1-10.9-7.2-15.9c-3.1-5.1-7.1-9.8-12.1-14.2c-5.9-5.2-12.8-9.4-20.7-12.5\n      c-7.9-3.2-16.2-5.6-25.1-7.3c-8.9-1.7-17.9-2.9-27.1-3.7c-9.2-0.8-18.1-1.4-26.7-1.9c-8.6-0.5-16.6-1.1-24-1.8\n      c-7.4-0.7-13.7-1.9-18.9-3.5l-1.5,2.3c2.8,2.7,7.1,4.9,13.1,6.6c5.9,1.8,12.8,3.4,20.6,4.7c7.8,1.4,16.2,2.8,25.2,4.4\n      c9,1.5,18,3.4,27,5.7c9,2.3,17.7,5.1,26,8.5c8.4,3.4,15.7,7.7,22.1,12.9c6.4,5.2,11.5,11.5,15.3,19c3.8,7.5,5.7,16.3,5.7,26.6\n      c0,10-2.1,20.1-6.4,30.3c-4.2,10.2-10.1,20.1-17.6,29.6c-7.5,9.6-16.3,18.5-26.4,26.9c-10.1,8.4-21.2,15.6-33.1,21.8\n      c-12,6.2-24.5,11.1-37.7,14.7c-13.2,3.6-26.5,5.4-39.9,5.4c-14.2,0-27.2-2.3-39.1-6.9c-11.9-4.6-22.2-10.9-30.9-19\n      c-8.7-8-15.4-17.5-20.3-28.5c-4.9-11-7.3-22.8-7.3-35.6c0-12.1,2.6-24.9,7.7-38.3c5.1-13.4,13.1-27.3,23.8-41.8\n      c10.8-14.5,24.5-29.6,41.2-45.3c16.7-15.7,36.6-32,59.8-49c2.9,1,5.9,1.7,9.1,2.4c3.2,0.7,6.1,1.2,8.6,1.5c2.6,0.3,5,0.4,7.1,0.5\n      c0.5,0,1,0,1.5,0.1c0.4,0,0.8,0,1.2,0c2.5,0.1,4.9,0.2,7.5,0.2c7.7,0,15.8-1,24.2-3c8.4-2,16.8-5,25.2-8.8\n      c8.4-3.9,16.5-8.6,24.5-14.2c8-5.6,15.4-12,22.2-19.1c4.4-4.7,8.2-9.4,11.3-14.1c3.1-4.7,5.8-9.6,8.2-14.9c2.3-5.2,4.5-10.9,6.4-17\n      c1.9-6.1,3.9-12.9,6.1-20.5c2.7-9.4,5-17.9,6.9-25.7c2-7.8,2.9-15,2.9-21.7C580.8,632.9,578.5,619.4,573.9,605.3", 1, "secondary_color"], ["d", "M1064.7,531.3c-1.7-6-4.3-11.4-7.9-16c-3.6-4.6-8.2-8.3-13.9-11c-5.7-2.7-12.5-4.1-20.5-4.1\n      c-9.2,0-18.2,1.9-26.9,5.7c-8.7,3.8-16.9,9.4-24.7,16.7c-7.8,7.3-15.1,16.1-22,26.6c-6.9,10.5-13.1,22.3-18.7,35.6l-1.2-0.4\n      c0.4-4.5,0.9-8,1-12c1-59.4-9.1-159-23.3-214.6c-2.7-10.4-6.3-20.1-11.1-28.9c-3.8-6.9-7.7-12.6-11.9-17c-4.2-4.5-8.8-6.7-13.8-6.7\n      c-3.9,0-7.4,2.2-10.4,6.5c-3.1,4.4-6.1,10.2-9.1,17.6c-1.9,4.8-3.6,10.1-4.9,16c-1.3,5.9-2.3,11.7-3.1,17.4\n      c-0.8,5.8-1.3,11.2-1.7,16.4c-0.3,5.1-0.5,9.3-0.5,12.6c0,4.9,1.2,7.4,3.5,7.4c0.8,0,1.5-0.4,2.1-1.1c0.6-0.7,1.1-2.2,1.4-4.4\n      c1.4-10.8,3-19.1,4.8-24.8c1.8-5.8,4.6-8.7,8.5-8.7c3.4,0,6.7,2.4,9.8,7.2c3.2,4.8,6.1,11.1,8.9,18.8c2.7,7.7,5.2,16.5,7.5,26.2\n      c2.3,9.7,19.7,124.8,21.3,134.6c1.6,9.9,2.9,19.4,3.7,28.5c0.8,9.2,1.3,17,1.3,23.5c0,5.3-0.6,11-1.8,17.2\n      c-1.2,6.1-2.6,11.9-4,17.5c-1.4,5.6-2.7,10.5-3.9,14.8c-1.3,4.3-2,7.3-2,9l8.6,21.4l1.2-1.2c2.6-8.2,5.5-16.5,8.7-24.9\n      c3.2-8.5,6.7-16.8,10.6-25.1c3.9-8.3,8.2-16.4,12.8-24.3c4.6-7.9,9.8-15.3,15.5-22.3c4.2-5.1,8.5-9.7,13-14\n      c4.5-4.3,9.1-8,13.9-11.1c4.8-3.1,9.8-5.6,15.1-7.3c5.3-1.8,10.7-2.6,16.5-2.6c6.4,0,11.8,1,16.4,2.9c4.5,2,8.3,4.3,11.2,7.2\n      c2.9,2.9,5,5.8,6.3,9c1.3,3.1,1.9,5.8,1.9,8.2c0,1.4-1,4.4-3,9c-2,4.6-5.3,9.7-9.8,15.6c-13.3,17-26.8,31.4-40.6,43.1\n      c-13.8,11.7-27.5,21.1-40.9,28.3c-13.4,7.2-26.5,12.4-39.1,15.5c-12.6,3.1-24.2,4.7-34.9,4.7c-8.8,0-16.6-1.1-23.2-3.3\n      c-6.6-2.2-12.5-5.8-17.5-10.6c-5-4.8-9.4-11.1-13.4-18.8c-0.8-1.6-1.5-3.3-2.3-5.1c-3.3-7.6-6.4-16.2-9.2-25.8\n      c-0.7-2.3-1.3-4.6-2-6.9c-0.6-2.1-1.2-4.2-1.7-6.4c-3.6-14.3-7.2-28.6-10.8-42.9c-3.6-14.3-6.8-27.9-9.7-40.7\n      c-2.9-12.9-5.3-24.8-7.1-35.8c-1.8-11-2.7-20.3-2.7-28v-4.5c0-1.6,0.1-2.9,0.4-4.1l-2-1.2c-6.6,12.3-11.4,23.1-14.3,32.3\n      c-2.9,9.2-4.4,17.2-4.4,23.8c0,7.4,0.9,16.1,2.7,26.2c1.8,10.1,4.1,20.7,6.9,32c2.8,11.2,5.8,22.7,9.1,34.4\n      c3.2,11.8,6.3,23.1,9.1,33.8c2.8,10.7,5.1,20.6,6.9,29.7c1.8,9.1,2.7,16.6,2.7,22.4c0,7-1.2,13.6-3.5,19.8\n      c-2.3,6.2-5.5,11.9-9.3,17.1c-3.9,5.2-8.4,9.9-13.4,14c-5.1,4.2-10.3,7.7-15.8,10.5c-5.5,2.9-10.9,5-16.4,6.5\n      c-5.5,1.5-10.5,2.2-15.2,2.2l-1.6-1.6c7.8-22.2,11.7-42.7,11.7-61.6c0-9-0.9-18.4-2.8-28.4c-1.9-9.9-4.2-20-7.1-30.1\n      c-2.9-10.1-6-20.2-9.5-30.2c-3.5-10-6.9-19.6-10.1-28.8c-3.2-9.1-6.2-17.6-9-25.4c-2.7-7.9-4.7-14.8-5.8-20.8H692\n      c-18.1,28.6-32.1,56.1-42,82.7c-9.9,26.6-14.9,52.1-14.9,76.7c0,11.2,1,21.9,3,32.1c2,10.2,5,19.6,8.9,28.3\n      c3.9,8.7,8.7,16.5,14.3,23.5c5.7,6.9,12.1,12.6,19.4,17v0.8c-9.3,13.5-24.3,28-44.7,43.5c-20.5,15.5-46.3,32-77.6,49.7\n      c-1.4,1-3.1,2.1-4.9,3.1c-1.9,1-2.9,1.9-2.9,2.7c0,0.8,0.4,1.3,1.2,1.6c0.8,0.3,1.6,0.4,2.3,0.4c1,0,3.4-0.5,7.2-1.6\n      c3.8-1.2,8-2.3,12.7-3.5c3.6-0.9,8.1-1.6,13.2-2.1c5.2-0.7,10.8-1.4,16.9-2.1c6-0.8,12.4-1.8,19.1-3c6.7-1.2,13.3-3,19.9-5.5\n      c6.6-2.4,12.9-5.5,19-9.3c6.1-3.8,11.7-8.5,16.8-14.2c5.1-5.7,10.1-12.2,15.2-19.6c5.1-7.3,9.9-16,14.4-26h1.6\n      c5.1,2.3,11.4,3.5,19.1,3.5c6,0,12.7-1.1,20.1-3.4c7.4-2.3,14.8-6,22.2-11.3c7.4-5.3,14.3-12.1,20.8-20.7\n      c6.4-8.5,11.7-19.1,15.7-31.7c2.7-8.2,4.8-16.5,6.2-24.8c1-5.9,1.7-11.6,2.4-17.2c0.1,0.2,0.2,0.5,0.4,0.7\n      c5.6,9.5,11.9,17.3,19,23.4c7.1,6,14.9,10.5,23.4,13.3c8.5,2.9,17.6,4.3,27.4,4.3c19.9,0,40.9-5.7,63.1-17.1\n      c22.2-11.4,44.8-29,67.8-52.6c5.9-6.1,10.9-12.3,15.3-18.5c4.3-6.2,8.2-13,11.5-20.2c3.3-7.2,6.3-15.2,9-24.1\n      c2.7-8.8,5.3-19,7.9-30.4c1.2-4.9,2.5-10.1,4.1-15.6c1.4-5.5,2.1-10.6,2.1-15.6C1067.2,543.8,1066.4,537.4,1064.7,531.3\n       M685.5,750.6c-6.8-4.7-12.7-10.7-17.9-18.1c-5.2-7.4-9.3-16-12.4-25.7c-3.1-9.7-4.6-20.3-4.6-31.6c0-11.8,2-24.7,5.9-38.6\n      c4-13.9,10.4-29.4,19.4-46.4h1.6c0.4,4.3,1.6,9.5,3.5,15.7c2,6.2,4.4,13,7.2,20.6c2.9,7.5,5.9,15.6,9.1,24.2\n      c3.2,8.6,6.1,17.3,8.9,26.1c2.7,8.8,5,17.7,6.8,26.5c1.8,8.8,2.7,17.3,2.7,25.3c0,6.9-0.7,12.7-2,17.3c-1.4,4.7-3.2,8.9-5.4,12.7\n      l-1.6,0.8C699.4,758.2,692.3,755.3,685.5,750.6", 1, "secondary_color"], ["d", "M871.7,1071.1c-0.6,0.7-1.1,1.1-1.4,1.1c-0.4,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.3\n      c0.2-1.2,0.5-2.6,0.7-4.3c0.4-1.7,0.8-3.4,1.3-5.2c0.5-1.8,1.1-3.5,1.8-5.1c0.7-1.6,1.7-3.1,3-4.4c4.1-4.1,8.9-7.8,14.4-11.2\n      c5.6-3.4,11.4-6.6,17.5-9.6c6.1-3,12.4-5.8,18.8-8.4c6.3-2.8,12.4-5.5,18.3-8.2c5.9-2.7,11.3-5.5,16.3-8.3c5-2.9,9.2-5.9,12.6-9.1\n      c0.7-0.7,1.3-1.1,1.6-1.1c0.2,0,0.4,0.2,0.4,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.4c-0.4,1.1-0.8,2.5-1.3,4.1c-0.5,1.8-1,3.6-1.7,5.5\n      c-0.7,1.8-1.4,3.6-2.2,5.4c-0.8,1.7-1.7,3.1-2.7,4c-3.1,3-7,5.8-11.7,8.4c-4.7,2.6-9.9,5.3-15.6,7.9c-5.7,2.6-11.7,5.4-17.9,8.3\n      c-6.3,2.9-12.5,6-18.7,9.3c-6.2,3.3-12.2,7-17.9,10.9C881.4,1061.8,876.3,1066.2,871.7,1071.1", 1, "primary_color"], ["d", "M1048.9,807.5c11.7-3.2,21.8-6.9,30.3-11.1c8.5-4.2,15.2-9,20.2-14.4v-0.2c-2.6-0.2-4.8-0.5-6.7-0.9\n      c-1.9-0.4-3.5-1-4.8-1.9c-1.3-0.8-2.2-1.9-2.8-3.3c-0.6-1.4-0.9-3.1-0.9-5.1c0-2.2,0.4-4.5,1.3-6.8c0.9-2.3,2-4.4,3.5-6.2\n      c1.5-1.9,3.3-3.4,5.4-4.6c2.1-1.2,4.3-1.8,6.8-1.8c1.7,0,3.3,0.5,4.7,1.4c1.4,0.9,2.5,2.1,3.4,3.6c0.9,1.5,1.6,3.2,2.1,5.2\n      c0.5,2,0.7,4,0.7,6c0,1.7-0.2,3.4-0.6,5v0.4c3.4,0.4,5.5,0.9,6.5,1.5c1,0.6,1.5,1.4,1.5,2.4c0,1.1-0.3,2.3-0.8,3.7\n      c-0.6,1.4-1.2,2.7-2,4h-0.6c-0.9-0.7-2.1-1.3-3.6-1.8c-1.5-0.4-3.3-0.7-5.5-0.7c-1.8,3.2-4,6-6.5,8.5c-2.5,2.5-5.3,4.8-8.1,6.8\n      c-2.8,2-5.8,3.7-8.7,5.1c-2.9,1.4-5.8,2.6-8.4,3.5c-2.7,0.9-5.1,1.6-7.2,2.1c-2.1,0.4-3.8,0.7-5,0.7c-1.3,0-2.5-0.1-3.6-0.3\n      c-1.1-0.2-2.1-0.3-3.1-0.3c-1.3,0-2.7,0.2-4.2,0.5c-1.5,0.3-2.5,0.5-3.2,0.5c-0.4,0-0.8-0.1-1.1-0.2c-0.3-0.1-0.5-0.3-0.5-0.5\n      C1047.4,808,1047.9,807.7,1048.9,807.5 M1107.4,772.3c-0.5-3.7-1.5-6.6-3.1-8.7c-1.6-2.1-3.8-3.2-6.8-3.2c-1.4,0-2.7,0.2-3.8,0.6\n      c-1.1,0.4-2,0.8-2.7,1.4c-0.7,0.5-1.3,1.1-1.7,1.7c-0.4,0.6-0.6,1.1-0.6,1.6c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.2,1.6,3.8,2.1\n      c1.6,0.5,3.6,0.9,5.8,1.1c2.3,0.2,4.8,0.3,7.5,0.3L1107.4,772.3z", 1, "primary_color"], ["d", "M509.1,839.5c-0.6,0.7-1.1,1.1-1.4,1.1c-0.4,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.3\n      c0.2-1.2,0.5-2.6,0.7-4.3c0.4-1.7,0.8-3.4,1.2-5.2c0.5-1.8,1.1-3.5,1.8-5.1c0.7-1.6,1.7-3.1,3-4.4c4-4,8.8-7.8,14.3-11.1\n      c5.5-3.4,11.3-6.6,17.4-9.5c6.1-3,12.3-5.8,18.7-8.4c6.3-2.7,12.3-5.4,18.2-8.1c5.8-2.7,11.2-5.4,16.2-8.3c5-2.8,9.1-5.9,12.5-9.1\n      c0.7-0.7,1.2-1.1,1.6-1.1c0.2,0,0.4,0.2,0.4,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.4c-0.4,1.1-0.8,2.4-1.2,4.1c-0.5,1.8-1,3.6-1.7,5.4\n      c-0.7,1.8-1.4,3.6-2.2,5.3c-0.8,1.7-1.7,3.1-2.7,4c-3.1,3-7,5.8-11.7,8.4c-4.7,2.6-9.9,5.2-15.5,7.8c-5.6,2.6-11.6,5.3-17.8,8.2\n      c-6.2,2.8-12.4,5.9-18.6,9.3c-6.2,3.3-12.1,6.9-17.7,10.9C518.7,830.3,513.7,834.7,509.1,839.5", 1, "darker"], ["d", "M669.3,475.8c-0.6,0.8-1.2,1.2-1.5,1.2c-0.4,0-0.6-0.5-0.6-1.3v-0.8c0.1-0.3,0.3-1.1,0.6-2.5\n      c0.3-1.3,0.5-2.8,0.8-4.6c0.4-1.8,0.8-3.7,1.3-5.6c0.5-1.9,1.2-3.7,1.9-5.5c0.8-1.7,1.9-3.3,3.3-4.7c4.4-4.4,9.5-8.4,15.5-12\n      c6-3.7,12.2-7.1,18.7-10.3c6.5-3.2,13.3-6.3,20.2-9.2c6.8-2.8,13.4-5.7,19.7-8.5c6.3-2.9,12.2-5.9,17.5-8.9\n      c5.3-3.1,9.8-6.3,13.4-9.8c0.8-0.8,1.3-1.2,1.7-1.2c0.3,0,0.4,0.2,0.4,0.6v0.2c-0.1,0.1-0.2,0.3-0.2,0.4c-0.4,1.2-0.8,2.6-1.3,4.4\n      c-0.5,1.9-1.1,3.9-1.8,5.9c-0.7,2-1.5,3.9-2.4,5.8c-0.9,1.9-1.9,3.3-2.9,4.3c-3.3,3.2-7.5,6.2-12.6,9c-5.1,2.8-10.6,5.6-16.7,8.5\n      c-6.1,2.8-12.5,5.8-19.2,8.8c-6.7,3.1-13.4,6.4-20.1,10c-6.7,3.6-13,7.5-19.1,11.7C679.7,465.8,674.2,470.5,669.3,475.8", 1, "darker"], ["d", "M746.1,340.6c-0.7,0.9-1.3,1.3-1.8,1.3c-0.4,0-0.7-0.5-0.7-1.5v-0.9c0.1-0.3,0.4-1.2,0.7-2.8\n      c0.3-1.5,0.6-3.2,0.9-5.3c0.4-2,1-4.2,1.5-6.3c0.6-2.2,1.3-4.3,2.2-6.2c0.9-2,2.1-3.7,3.7-5.4c5-5,10.8-9.5,17.6-13.7\n      c6.8-4.2,13.9-8.1,21.3-11.7c7.4-3.6,15.1-7.1,23-10.5c7.7-3.2,15.2-6.5,22.4-9.7c7.2-3.3,13.9-6.7,19.9-10.2\n      c6-3.5,11.1-7.2,15.2-11.2c0.9-0.9,1.5-1.3,2-1.3c0.3,0,0.4,0.2,0.4,0.7v0.2c-0.1,0.1-0.2,0.3-0.2,0.4c-0.4,1.3-1,3-1.5,5\n      c-0.6,2.2-1.3,4.4-2.1,6.7c-0.8,2.3-1.7,4.4-2.7,6.6c-1,2.1-2.1,3.8-3.3,4.9c-3.8,3.6-8.6,7.1-14.3,10.3c-5.8,3.2-12.1,6.4-19,9.6\n      c-6.9,3.2-14.2,6.6-21.9,10.1c-7.7,3.5-15.3,7.3-22.9,11.4c-7.6,4.1-14.8,8.5-21.8,13.3C757.8,329.2,751.6,334.6,746.1,340.6", 1, "darker"], ["d", "M264.8,675.4c20.6-5.6,38.3-12.2,53.2-19.7c14.9-7.5,26.7-16,35.4-25.5v-0.3c-4.5-0.3-8.4-0.9-11.8-1.6\n      c-3.4-0.7-6.2-1.8-8.4-3.3c-2.2-1.5-3.9-3.4-5-5.8c-1.1-2.4-1.6-5.4-1.6-9.1c0-4,0.8-8,2.3-12c1.5-4.1,3.6-7.7,6.2-11\n      c2.6-3.3,5.8-6,9.4-8.1c3.6-2.1,7.6-3.1,11.9-3.1c3,0,5.8,0.8,8.2,2.5c2.4,1.6,4.4,3.8,6,6.4c1.6,2.6,2.9,5.7,3.8,9.1\n      c0.9,3.5,1.3,7,1.3,10.6c0,3-0.3,5.9-1,8.9v0.7c5.9,0.7,9.7,1.5,11.4,2.6c1.7,1.1,2.6,2.5,2.6,4.3c0,1.9-0.5,4-1.5,6.5\n      c-1,2.5-2.1,4.8-3.4,7h-1c-1.6-1.3-3.8-2.4-6.4-3.1c-2.6-0.8-5.8-1.2-9.6-1.2c-3.2,5.6-7,10.6-11.4,15.1c-4.5,4.4-9.2,8.4-14.2,12\n      c-5,3.5-10.1,6.5-15.3,9.1c-5.2,2.5-10.1,4.6-14.8,6.3c-4.7,1.6-8.9,2.8-12.7,3.6c-3.8,0.8-6.7,1.2-8.7,1.2c-2.3,0-4.4-0.2-6.4-0.5\n      c-2-0.3-3.8-0.5-5.4-0.5c-2.3,0-4.7,0.3-7.4,0.8c-2.6,0.5-4.5,0.8-5.6,0.8c-0.8,0-1.4-0.1-2-0.3c-0.5-0.2-0.8-0.5-0.8-0.8\n      C262.2,676.3,263.1,675.8,264.8,675.4 M367.5,613.1c-0.9-6.5-2.7-11.6-5.5-15.4c-2.8-3.8-6.7-5.7-11.8-5.7c-2.5,0-4.7,0.3-6.6,1\n      c-1.9,0.7-3.5,1.5-4.8,2.4c-1.3,0.9-2.3,2-2.9,3.1c-0.7,1.1-1,2-1,2.8c0,2.5,0.8,4.6,2.4,6.2c1.6,1.6,3.8,2.9,6.6,3.8\n      c2.8,0.9,6.2,1.6,10.2,2c4,0.4,8.4,0.6,13.2,0.6L367.5,613.1z", 1, "darker"], ["d", "M1102.3,567c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.2,0.7-0.4,1.3c-0.3,0.6-0.6,1.3-1,2.1\n      c-0.4,0.8-0.8,1.6-1.2,2.4c-0.4,0.9-0.8,1.7-1,2.4l0.2,0.2c1.7-0.8,3.2-1.3,4.7-1.6c1.5-0.3,3-0.5,4.4-0.5c3.6,0,6.5,1.3,8.8,3.8\n      c2.3,2.5,3.4,6,3.4,10.3c0,2.9-0.4,5.6-1.1,8c-0.7,2.4-1.7,4.4-3,6.2c-1.2,1.7-2.7,3-4.3,4c-1.7,0.9-3.4,1.4-5.4,1.4\n      c-1.8,0-3.5-0.4-5.3-1.2c-1.8-0.8-3.3-2-4.8-3.5c-1.4-1.5-2.6-3.4-3.5-5.6c-0.9-2.2-1.3-4.7-1.3-7.5c0-4.1,0.8-8.3,2.5-12.5\n      C1097,573.6,1099.3,570,1102.3,567 M1097.8,580.4c-0.6,1.1-1,2.1-1.2,3c-0.2,0.9-0.3,1.7-0.3,2.4c0,1.3,0.3,2.8,0.8,4.4\n      c0.5,1.6,1.3,3,2.3,4.3c1,1.3,2.3,2.5,3.8,3.3c1.5,0.9,3.2,1.3,5.1,1.3c0.8,0,1.8-0.2,2.9-0.6c1.1-0.4,2.1-0.9,3.1-1.5\n      c1-0.6,1.8-1.4,2.4-2.3c0.7-0.9,1-1.8,1-2.7c0-1.1-0.3-2.2-0.8-3.2c-0.5-1-1.3-2-2.2-2.8c-1-0.8-2.1-1.4-3.3-1.9\n      c-1.2-0.5-2.6-0.7-4-0.7c-1.1,0-2.2,0.1-3.1,0.4c-0.9,0.3-1.7,0.5-2.3,0.8c-0.7,0.3-1.2,0.5-1.7,0.7c-0.4,0.3-0.6,0.4-0.8,0.4\n      c-0.3,0-0.6-0.3-0.8-1c-0.2-0.5-0.3-1-0.4-1.5c-0.1-0.5-0.1-1-0.1-1.3c0-0.6,0.1-1.1,0.2-1.3L1097.8,580.4z", 1, "primary_color"], ["d", "M741,1133.1c-0.6,0.7-1,1-1.4,1c-0.3,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.2c0.2-1.1,0.5-2.5,0.7-4.1\n      c0.3-1.6,0.7-3.3,1.2-5c0.5-1.7,1-3.4,1.7-4.9c0.7-1.6,1.7-2.9,2.9-4.2c3.9-3.9,8.5-7.5,13.8-10.7c5.3-3.2,10.9-6.3,16.7-9.2\n      c5.8-2.9,11.8-5.6,18-8.2c6.1-2.5,11.9-5.1,17.6-7.6c5.7-2.6,10.9-5.2,15.6-8c4.7-2.7,8.7-5.6,11.9-8.7c0.7-0.7,1.2-1,1.5-1\n      c0.2,0,0.3,0.2,0.3,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.3,1-0.7,2.3-1.2,3.9c-0.5,1.7-1,3.5-1.6,5.2c-0.6,1.8-1.3,3.5-2.1,5.1\n      c-0.8,1.7-1.7,3-2.6,3.9c-3,2.9-6.7,5.5-11.2,8.1c-4.5,2.5-9.5,5-14.9,7.5c-5.4,2.5-11.1,5.1-17.1,7.9c-6,2.7-12,5.7-17.9,8.9\n      c-5.9,3.2-11.6,6.7-17.1,10.5C750.3,1124.2,745.4,1128.4,741,1133.1", 1, "primary_color"], ["d", "M978,824.8c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.7-0.4,1.3c-0.3,0.6-0.6,1.3-1,2.1\n      c-0.4,0.8-0.8,1.6-1.2,2.4c-0.4,0.9-0.7,1.7-1,2.4l0.2,0.2c1.7-0.8,3.2-1.3,4.7-1.6c1.5-0.3,3-0.5,4.4-0.5c3.6,0,6.5,1.3,8.8,3.8\n      c2.3,2.5,3.4,6,3.4,10.3c0,2.9-0.4,5.6-1.1,8c-0.7,2.4-1.7,4.4-3,6.2c-1.2,1.7-2.7,3-4.3,4c-1.7,0.9-3.4,1.4-5.3,1.4\n      c-1.8,0-3.5-0.4-5.3-1.2c-1.8-0.8-3.3-2-4.8-3.5c-1.4-1.5-2.6-3.4-3.5-5.6c-0.9-2.2-1.3-4.7-1.3-7.5c0-4.1,0.8-8.3,2.5-12.5\n      C972.7,831.4,975,827.8,978,824.8 M973.4,838.2c-0.6,1.1-1,2.1-1.2,3c-0.2,0.9-0.3,1.7-0.3,2.4c0,1.3,0.3,2.8,0.8,4.4\n      c0.5,1.6,1.3,3,2.3,4.3c1,1.3,2.3,2.4,3.8,3.3c1.5,0.9,3.2,1.3,5.1,1.3c0.8,0,1.8-0.2,2.9-0.6c1.1-0.4,2.1-0.9,3.1-1.5\n      c1-0.6,1.8-1.4,2.4-2.3c0.7-0.9,1-1.8,1-2.7c0-1.1-0.3-2.1-0.8-3.2c-0.5-1-1.3-2-2.2-2.8c-1-0.8-2-1.4-3.3-1.9\n      c-1.2-0.5-2.6-0.7-4-0.7c-1.1,0-2.2,0.1-3.1,0.4c-0.9,0.3-1.7,0.5-2.3,0.8c-0.7,0.3-1.2,0.5-1.7,0.7c-0.4,0.3-0.6,0.4-0.8,0.4\n      c-0.3,0-0.6-0.3-0.8-0.9c-0.2-0.5-0.3-1-0.4-1.5c-0.1-0.5-0.1-1-0.1-1.3c0-0.6,0.1-1.1,0.2-1.3L973.4,838.2z", 1, "primary_color"], ["d", "M1285.7,960.4c0,0,6.9-5.8,17.6-15c10.2-9.4,24-22.5,36.8-37.1c6.7-7.2,12.6-14.8,18.5-22\n      c2.9-3.6,5.8-7.2,8.3-10.6c2.5-3.5,4.9-6.8,7-9.8c4.3-6.2,8.1-11.4,10.5-15.1c2.4-3.8,3.7-5.9,3.7-5.9c2.1-3.7,4.8-8.5,6.9-12.3\n      l1.2,0.1c0.9,4,3.5,9.3,5,13.4c0,0,1,2.5,2.8,6.8c1.7,4.3,3.9,10.5,6.6,18.1c1.3,3.8,2.8,8,4.3,12.4c1.5,4.4,2.8,9.1,4.2,14\n      c2.8,9.8,6.1,20.5,8.3,31.3c2.4,10.8,5.1,21.9,6.6,32.4c0.9,5.3,1.7,10.4,2.5,15.2c0.8,4.9,1.5,9.5,1.9,13.8c1.9,17.1,3,29,3,29\n      s-8.3,8.3-20.6,20.1c-1.5,1.5-3.2,3-4.8,4.6c-1.7,1.5-3.5,3.1-5.4,4.7c-3.7,3.2-7.5,6.5-11.5,10c-7.8,6.9-16.8,13.7-25.6,20.4\n      c-8.6,6.8-17.8,12.9-26.2,18.6c-4.2,2.8-8.1,5.6-12.1,8c-3.9,2.4-7.7,4.6-11.1,6.7c-6.9,4.1-12.4,7.5-16.6,9.6\n      c-4.1,2.2-6.4,3.4-6.4,3.4c-3.9,1.4-8.8,4.2-12.3,7.1l-1-0.7c1.2-4.7,2.2-10.2,2.2-14.2c0,0,0.3-2.6,0.9-7c0.7-4.4,1.1-11,1.8-18.6\n      c0.3-3.8,0.6-7.9,0.9-12.3c0.3-4.3,0.3-9,0.5-13.7c0.2-9.5,0.5-19.3,0-29.3c-0.3-9.9-0.7-19.5-1.7-28.6c-0.9-9.1-1.6-17.2-2.8-24.3\n      c-1.1-7-2.1-12.8-2.7-16.8c-0.3-2-0.6-3.6-0.8-4.6C1285.8,961,1285.7,960.4,1285.7,960.4", 1, "primary_color"], ["d", "M229.3,779.5c0,0-5,8.7-12.6,22.5c-0.9,1.7-1.9,3.5-3,5.4c-0.9,1.9-1.9,3.8-2.9,5.8c-2,4.1-4,8.4-6.2,12.8\n      c-2.1,4.5-4.5,9.2-6.5,14c-2,4.9-4,9.8-6,14.8c-2,5-4.1,10.1-6,15.2c-1.7,5.1-3.4,10.1-5.1,14.9c-1.6,5-3.2,9.8-4.7,14.3\n      c-1.5,4.6-2.5,8.9-3.7,13c-2.2,8.2-4,15-5.2,19.8c-0.7,2.4-1,4.3-1.3,5.6c-0.3,1.3-0.4,2-0.4,2c-0.8,4.7-1.7,10.8-2.5,15.5\n      l-1.2,0.4c-2.5-3.8-7.2-8.4-10.3-12.1c0,0-0.5-0.5-1.5-1.6c-1-1-2.4-2.5-4-4.5c-3.3-4-8.1-9.7-13.9-16.5c-2.8-3.5-6.1-7.2-9.2-11.4\n      c-3.1-4.2-6.4-8.6-9.8-13.1c-3.4-4.7-6.9-9.5-10.5-14.4c-3.3-5.1-6.7-10.2-10.1-15.3c-3.4-5.3-6.8-10.5-10.1-15.7\n      c-3.2-5.3-6.2-10.5-9.1-15.6c-5.8-10.3-11.5-20.1-15.6-28.7c-4.3-8.7-7.8-15.9-10.3-21c-1.2-2.6-2.2-4.6-2.9-6\n      c-0.7-1.4-1-2.1-1-2.1s5.5-11.9,13.9-28.9c1-2.1,2.1-4.3,3.3-6.6c1.2-2.3,2.5-4.6,3.8-7c2.6-4.7,5.4-9.7,8.3-14.9\n      c2.9-5.1,5.7-10.3,9-15.5c3.3-5.1,6.6-10.4,9.9-15.6c3.4-5.2,6.6-10.3,10-15.2c3.5-4.9,7-9.6,10.3-14.3c3.3-4.5,6.5-8.9,9.6-13\n      c3.1-4.1,6.3-7.8,9.1-11.3c5.6-6.8,10.3-12.5,13.6-16.4c1.6-2,3-3.4,4-4.5c0.9-1,1.4-1.6,1.4-1.6c3.5-3,7.7-7.7,10.3-12.2l1.3,0.4\n      c0.5,5.3,1.5,11.5,3.1,15.7c0,0,0.1,0.7,0.4,2c0.3,1.3,0.6,3.2,1.3,5.7c1.3,4.9,3.1,11.8,5.3,20.2c1.2,4.1,2.2,8.5,3.7,13.2\n      c1.5,4.6,3.1,9.5,4.8,14.5c1.7,4.9,3.4,10,5.2,15.2c1.9,5.1,4,10.3,6.1,15.4c2.1,5,4.1,10.1,6.1,15c2.1,4.9,4.5,9.7,6.6,14.2\n      c4.4,9.1,8.2,17.4,12.3,24.4c3.8,6.9,7.1,12.6,9.3,16.6c1.1,2,2,3.5,2.6,4.6C228.9,779,229.3,779.5,229.3,779.5", 1, "primary_color"], ["d", "M355.7,430.8c0,0-0.6,0.2-1.8,0.6c-1.1,0.4-2.9,0.9-4.9,1.7c-4.2,1.6-10.2,3.9-17.4,6.7\n      c-3.6,1.5-7.7,2.9-11.8,4.8c-4.1,1.9-8.4,3.8-12.9,5.9c-4.5,2.1-9.3,4.2-14,6.6c-4.7,2.5-9.4,5-14.1,7.5c-4.8,2.6-9.6,5.1-14.3,7.8\n      c-4.6,2.8-9.1,5.5-13.5,8.2c-4.4,2.7-8.7,5.4-12.8,7.9c-4,2.6-7.6,5.2-11.1,7.6c-7,4.9-12.7,9-16.8,11.8c-3.9,3-6.2,4.7-6.2,4.7\n      c-3.6,3.1-8.3,7.1-11.9,10.2l-1.2-0.5c0.6-4.5-0.1-11-0.1-15.9c0,0-0.1-3-0.3-8.2c0-5.2,0-12.6,0-21.5c0.1-4.5,0-9.5,0.2-14.6\n      c0.3-5.2,0.6-10.6,0.9-16.3c0.4-5.8,0.8-11.7,1.2-17.7c0.7-6,1.4-12.1,2.1-18.2c0.8-6.2,1.6-12.4,2.3-18.5c1-6.1,2.1-12.1,3.1-17.9\n      c1.1-5.9,2.1-11.6,3.1-16.9c1.1-5.4,2.3-10.4,3.4-15.1c2.3-9.4,4.2-17.3,5.5-22.8c1.6-5.5,2.4-8.6,2.4-8.6s2.9-1.4,8.1-3.8\n      c5.1-2.3,12.3-5.8,21.1-9.5c8.9-3.6,19.2-7.7,30.1-11.9c11-4,23-7.9,34.5-11.7c11.8-3.6,23.7-6.6,34.5-9.5c11-2.7,21.4-4.7,30-6.6\n      c8.6-1.9,16-2.9,21.1-3.7c5.1-0.8,8-1.2,8-1.2c4.6,0,10.7-1.2,15.6-2.9l0.7,1.1c-3.1,4.3-6.1,9.9-7.6,14.1c0,0-1.3,2.6-3.6,7.1\n      c-2.3,4.5-5.6,10.8-9,18.7c-3.4,7.9-7.6,16.8-11.4,26.6c-3.7,10-7.7,20.2-11.1,30.7c-3.3,10.6-6.5,20.8-9.1,30.6\n      c-2.5,9.9-4.6,18.9-6.4,26.6C357.3,420.7,355.7,430.8,355.7,430.8", 1, "primary_color"], ["d", "M676.6,244.8c0,0-2.4-0.9-6.6-2.5c-4.2-1.6-10.3-4-17.7-6.2c-7.4-2.3-16.2-5.2-25.8-7.8\n      c-9.5-2.4-20-5.1-30.6-7.3c-10.5-2-21.3-4-31.6-5.6c-10.2-1.3-19.8-2.5-28.3-3.4c-8.4-0.9-15.4-1.1-20.4-1.5\n      c-5-0.3-7.8-0.4-7.8-0.4c-4.7,0-11-0.1-15.7,0.1l-0.6-1.2c3.2-3.3,7-8.5,10.2-12.2c0,0,1.8-2.3,5-6.4c3.3-4,7.8-10,13.7-16.7\n      c5.9-6.7,12.9-14.5,20.7-23c7.9-8.1,16.7-16.7,25.6-25.4c9.1-8.3,18.5-16.6,27.6-24.4c9.1-7.5,18-14.3,25.6-20.2\n      c7.6-6.1,14.3-10.4,19-13.7c4.7-3.2,7.4-5.1,7.4-5.1s3.1,0.8,8.6,2.2c5.4,1.3,13.2,3.6,22.3,6.5c18.3,5.4,42,13.9,64.6,23.4\n      c11.3,5,22.4,9.9,32.5,14.8c10.1,5.2,19.4,10.1,27.2,14.2c7.8,4.2,14.1,8.2,18.5,10.8c4.4,2.6,6.9,4.2,6.9,4.2\n      c3.5,3,9,5.8,13.8,7.8l-0.1,1.3c-5.2,1.2-11,3.6-14.9,5.9c0,0-2.7,1.1-7.3,3.1c-4.6,2.1-11.2,4.7-18.9,8.5\n      c-7.7,3.8-16.6,8.3-25.9,13.1c-9.3,5.1-18.9,10.8-28.3,16.4c-4.7,2.7-9.3,6-13.7,8.9c-4.4,3-8.7,5.9-12.9,8.7\n      c-4.2,2.7-8.1,5.7-11.7,8.5c-3.6,2.8-7,5.4-10.2,7.8c-3.1,2.4-5.9,4.6-8.4,6.6c-2.5,2-4.6,3.9-6.3,5.4\n      C678.6,243.1,676.6,244.8,676.6,244.8", 1, "primary_color"], ["d", "M1042.1,308.6c0,0-1.2-2.2-3.4-6.2c-1.1-2-2.5-4.4-4-7.1c-1.6-2.7-3.5-5.6-5.6-9c-2.1-3.3-4.4-6.9-6.8-10.7\n      c-2.5-3.8-5-7.9-8-11.8c-2.9-4-5.9-8.2-9-12.4c-3.2-4.2-6.3-8.8-9.7-12.8c-6.8-8.3-13.7-16.9-20.6-24.6\n      c-6.9-7.6-13.6-14.7-19.5-20.9c-5.9-5.9-11.1-10.7-14.7-14.2c-3.6-3.4-5.7-5.4-5.7-5.4c-1.8-1.6-3.9-3.3-6-5.1\n      c-2.1-1.7-4.3-3.3-6.1-4.8l0.3-1.3c2.3-0.2,5-0.7,7.7-1.3c2.7-0.5,5.5-1.1,7.9-1.5c0,0,2.9-0.6,7.9-1.6c5.1-1,12.4-2.5,21.3-4\n      c8.8-1.3,19.2-2.8,30.7-4.2c11.3-1.3,23.5-2.1,36-3c12.4-0.7,24.8-0.8,36.8-1c11.9,0,22.9,0.6,32.6,0.9c9.7,0.3,17.7,1.1,23.4,1.6\n      c5.7,0.5,8.9,0.8,8.9,0.8s1.9,2.6,5.2,7.2c3.3,4.4,7.8,11.3,12.9,19.3c5.2,8.1,11.2,17.1,17,27.5c2.9,5.1,5.9,10.3,8.9,15.7\n      c1.5,2.7,3,5.3,4.4,8c1.4,2.8,2.8,5.5,4.2,8.3c11.3,21.8,20.6,44.1,27.1,60.6c6.2,16.8,9.9,27.7,9.9,27.7c0.8,4.5,2.8,10.5,5.3,15\n      l-1,0.9c-4.9-2.3-10.6-4.5-15-5.3c0,0-11.3-3.4-27.7-7.9c-16.7-4.2-38.6-9.1-60.4-12.2c-21.8-3.2-43.2-4.8-59-5.2\n      c-3.9-0.1-7.5-0.3-10.7-0.4c-3.2,0-6,0.1-8.3,0.1C1044.7,308.5,1042.1,308.6,1042.1,308.6", 1, "primary_color"], ["d", "M1281.3,592.4c0,0,1.7-9.8,4.2-25.4c0.3-1.9,0.6-4,0.9-6.1c0.2-2.1,0.5-4.2,0.7-6.5c0.5-4.5,0.9-9.3,1.4-14.2\n      c1.1-10,1.4-20.5,1.9-31.4c0.6-10.9,0.2-21.7,0-32.1c-0.2-5.2-0.2-10.3-0.5-15c-0.4-4.8-0.7-9.3-1-13.4c-0.7-8.4-1.2-15.6-1.9-20.4\n      c-0.7-4.9-1-7.7-1-7.7c-0.9-4.7-2-10.8-2.9-15.4l1.1-0.8c3.6,2.8,9.5,5.4,13.7,7.9c0,0,2.6,1.4,7.2,3.8c4.7,2.4,10.9,6.2,18.7,10.7\n      c3.9,2.3,8.1,4.8,12.6,7.5c4.5,2.7,8.9,5.8,13.7,8.9c4.8,3.2,9.7,6.5,14.7,9.9c5.1,3.4,9.8,7.2,14.8,10.9c5,3.8,10,7.6,14.8,11.3\n      c5,3.8,9.4,7.8,14,11.6c9,7.7,17.7,14.9,24.5,21.6c7,6.7,12.8,12.3,16.9,16.2c2.1,2,3.7,3.6,4.8,4.7c1,1.1,1.6,1.7,1.6,1.7\n      s-1.1,13.1-3.1,31.9c-2.5,19-6.3,43.8-12,67.8c-2.4,11.9-6,23.8-9,34.6c-1.6,5.4-2.9,10.6-4.6,15.5c-1.7,4.9-3.2,9.5-4.7,13.7\n      c-3,8.4-5.3,15.3-7.2,20.1c-2,4.8-3.1,7.5-3.1,7.5c-2.3,4-4.6,9.9-5.5,14.9l-1.3,0.1c-2.3-4.9-5.4-10.3-8.3-13.7\n      c0,0-1.5-2.4-4.2-6.7c-2.7-4.2-7-10.2-11.9-17.2c-2.5-3.5-5.1-7.2-8-11.1c-2.8-3.9-6.2-7.9-9.4-12.1c-6.6-8.2-13.3-16.8-21-25\n      c-7.5-8.2-14.5-16.2-22-23.2c-3.6-3.5-7.1-6.9-10.4-10.1c-3.3-3.2-6.3-6.1-9.4-8.7C1289.1,598.9,1281.3,592.4,1281.3,592.4", 1, "primary_color"], ["d", "M220.9,1214.6c0,5.8-1.2,10.4-3.7,13.9c-3.1,4.4-7.9,6.5-14.4,6.5c-6.4,0-11.1-2.1-14.3-6.5\n      c-2.6-3.5-3.8-8.1-3.8-13.9c0-5.7,1.2-10.3,3.8-13.8c3.1-4.3,7.8-6.4,14.3-6.4c6.4,0,11.2,2.1,14.4,6.4\n      C219.7,1204.3,220.9,1208.9,220.9,1214.6 M201.4,1182.2c0,2.5-2.1,4.6-4.7,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2-4.5,4.5-4.5\n      C199.2,1177.7,201.4,1179.7,201.4,1182.2 M212.6,1214.6c0-8.7-3.3-13.1-9.8-13.1c-6.4,0-9.6,4.4-9.6,13.1c0,8.8,3.2,13.3,9.6,13.3\n      C209.3,1227.9,212.6,1223.4,212.6,1214.6 M213.3,1182.2c0,2.5-2.1,4.6-4.5,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.5,4.6-4.5\n      C211.2,1177.7,213.3,1179.7,213.3,1182.2", 1, "st3"], ["d", "M264,1235h-35.4l5.1-7.3h21.9v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.4,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1V1235z", 1, "st3"], ["d", "M306,1231.5c-0.1,6.2-1.6,11-4.7,14.5c-3.3,4-8.1,6.1-14.4,6.1c-4.5,0-7.9-0.8-10.4-2.3l-3.7-8.2\n      c5.1,2.4,9.8,3.4,14.2,3.1c6.4-0.4,10-3.9,10.7-10.6c-2.6,1.4-5.3,2.1-8.5,2.1c-6.2,0-10.8-2.1-13.7-6.4c-2.4-3.5-3.7-7.9-3.7-13.6\n      c0-5.6,1.2-10.2,3.7-13.6c2.9-4.2,7.6-6.3,13.7-6.3c6.8,0,11.6,2.4,14.4,7.3c2,3.7,2.9,8.9,2.9,15.8c0,1.7,0,3.9-0.1,6.5\n      C306.1,1228.8,306,1230.6,306,1231.5 M298,1216.3c0-8.5-2.9-12.7-8.9-12.7c-6,0-9,4.2-9,12.7c0,8.4,3,12.6,9,12.6\n      C295,1228.9,298,1224.7,298,1216.3", 1, "st3"], ["d", "M361.5,1235H314l5.1-7.3H341v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.5,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1v17.4h12.1V1235z", 1, "st3"], ["d", "M419,1235h-59.7v-7.3h40v-3.2c0-6.8-0.6-11.7-1.9-14.7c-2-5-5.9-7.5-11.8-7.5c-4.9,0-9.4,2.3-13.5,6.9\n      l-6.1-5.6c6-5.8,12.5-8.7,19.6-8.7c9,0,15.2,3.3,18.7,9.8c2.4,4.5,3.6,11.2,3.6,19.9v3H419V1235z", 1, "st3"], ["d", "M478.1,1235h-1.2c-5.3,0-9.4-1.9-12.2-5.6c-2.1,7.5-8.7,11.9-17.3,11.9c-8.1,0-14.6-3.9-17-10.7\n      c-2.6,2.9-6.2,4.5-11.1,4.5h-2.9v-7.5h2.3c6.3,0,9.9-2.9,10.6-8.6c1.5-10.4,7.5-15.6,18-15.6c5.8,0,10.1,1.3,12.9,4\n      c2.6,2.4,4.2,6.3,5,11.6c1,5.8,4.6,8.7,11,8.7l1.8-0.2V1235z M456.7,1222.3c0-7.9-3.1-11.9-9.4-11.9c-6.3,0-9.4,3.9-9.4,11.9\n      c0,7.9,3.1,11.9,9.4,11.9C453.6,1234.1,456.7,1230.2,456.7,1222.3", 1, "st3"], ["d", "M498.7,1219.2c0,4.5-1.5,8.3-4.5,11.3c-3,2.9-7.1,4.5-12.2,4.5h-5.7v-7.5h5.3c5.8,0,8.7-3,8.7-9.1v-38.2\n      l8.5-2.5V1219.2z", 1, "st3"], ["points", "514.8,1235 506.3,1235 506.3,1180.2 514.8,1177.5 \t", 1, "st3"], ["d", "M600.8,1235h-14.5c-0.8,11.4-8.7,17.1-23.8,17.1c-10.7,0-17.9-3.3-21.8-9.9c-2.8-4.7-4-12.1-3.8-22.4l8.4-2.5\n      v7.8c0,13.9,4.8,19.3,17.3,19.3c10.3,0,15.3-4,15.3-12.1v-26.6l8.5-2.6v24.3h14.4V1235z M566.3,1209.9c0,2.5-2.1,4.6-4.6,4.6\n      c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2.1-4.5,4.5-4.5C564.2,1205.3,566.3,1207.4,566.3,1209.9", 1, "st3"], ["d", "M635.5,1235h-5.3c-5.3,0-9.4-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7h-6.4v-7.3h5.9c6,0,8.9-3,8.9-9.1v-21.3\n      l8.4-2.5v24.1c0,5.9,2.9,8.8,8.8,8.8h4.8V1235z M616.4,1247.5c0,2.5-2.1,4.6-4.6,4.6c-2.6,0-4.5-2.1-4.5-4.6s2-4.5,4.5-4.5\n      C614.3,1242.9,616.4,1245,616.4,1247.5 M628.4,1247.5c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6s2.1-4.5,4.5-4.5\n      C626.3,1242.9,628.4,1245,628.4,1247.5", 1, "st3"], ["d", "M681.2,1235h-47.6v-7.5h9.9v-15.2c0-4.9,1.6-9.1,4.7-12.4c3.2-3.4,7.7-5.1,13.3-5.1c4.8,0,9,1.8,12.6,5.3\n      l-6.3,5.7c-2.1-2.6-4.5-3.8-7.2-3.8c-5.4,0-8.6,3.8-8.6,8.9v16.7h22.9L681.2,1235z", 1, "st3"], ["d", "M736.4,1235h-47.5l5.1-7.3h21.9v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.5,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1v17.4h12.1V1235z", 1, "st3"], ["d", "M771,1235h-5.3c-5.3,0-9.4-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7h-6.4v-7.3h5.9c6,0,8.9-3,8.9-9.1v-21.3\n      l8.4-2.5v24.1c0,5.9,2.9,8.8,8.8,8.8h4.8V1235z M758.2,1247.6c0,2.5-2.1,4.6-4.5,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.4,2.1-4.5,4.6-4.5\n      C756.2,1243,758.2,1245.2,758.2,1247.6", 1, "st3"], ["d", "M830,1235h-1.2c-5.3,0-9.4-1.9-12.2-5.6c-2.1,7.5-8.7,11.9-17.3,11.9c-8.1,0-14.6-3.9-17-10.7\n      c-2.6,2.9-6.2,4.5-11.1,4.5h-2.8v-7.5h2.3c6.3,0,9.9-2.9,10.6-8.6c1.5-10.4,7.5-15.6,18-15.6c5.8,0,10.1,1.3,12.9,4\n      c2.6,2.4,4.2,6.3,5,11.6c1,5.8,4.6,8.7,11,8.7l1.8-0.2V1235z M808.7,1222.3c0-7.9-3.1-11.9-9.4-11.9c-6.3,0-9.4,3.9-9.4,11.9\n      c0,7.9,3.1,11.9,9.4,11.9C805.6,1234.1,808.7,1230.2,808.7,1222.3", 1, "st3"], ["d", "M850.6,1219.2c0,4.5-1.5,8.3-4.5,11.3c-3,2.9-7.1,4.5-12.2,4.5h-5.7v-7.5h5.3c5.8,0,8.7-3,8.7-9.1v-38.2\n      l8.5-2.5V1219.2z", 1, "st3"], ["points", "866.7,1235 858.3,1235 858.3,1180.2 866.7,1177.5 \t", 1, "st3"], ["d", "M933.7,1235h-9.8c-6.3,0-9.5-3.5-9.5-10.3v-8.1h-2.6c-8.8,0-14.3,6.2-14.3,15.1c0,8.2,5.4,13,14.3,13\n      c2.8,0,4.9-0.3,6.4-0.7c2-0.6,4.5-2.1,7.4-4.5l0.1,9.2c-4,2.3-8.6,3.5-13.9,3.5c-6.7,0-12.1-1.9-16.5-5.7\n      c-4.3-3.7-6.4-8.6-6.4-14.8c0-9.3,4.7-16.8,12.7-20.4v-2.9c0-4,1.2-7.4,3.7-10.2c2.5-2.8,6.1-4.2,10.6-4.2c4.2,0,7.8,1.6,10.6,4.9\n      l-5.6,5.5c-1.4-2.1-3.4-3.1-5.8-3.1c-3.5,0-5.3,2-5.3,6.1v1.9h15.8l4.4,7.4h-7.2v4.5c0,4.4,2,6.5,6.1,6.5h4.9V1235z", 1, "st3"], ["d", "M955,1173.6l-3.9,3.9c-1.2-1.7-2.8-2.5-4.6-2.5c-3.4,0-5.1,2-5.1,6v2.6h12.8v5.2H929l4.3-5.2h2.7v-1.8\n      c0-6.7,4.1-11.9,11.1-11.9C949.9,1169.8,952.6,1171.1,955,1173.6 M950.9,1219.2c0,4.5-1.5,8.4-4.5,11.3c-3,2.9-7,4.5-12.1,4.5h-2.6\n      v-7.3h2c5.9,0,8.8-3,8.8-9.1v-21.3l8.4-2.5V1219.2z", 1, "st3"], ["d", "M1015.5,1235h-6.6c-5.3,0-9.5-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7H976h-17.5l3.9-7.5h9v-43.9l8.5-2.5v46.4\n      h3.4c5.9,0,8.8-2.9,8.8-8.9v-39.2c1.3-0.3,4.2-1,8.4-2.1v41.5c0,5.8,2.9,8.6,8.9,8.6h6.1V1235z", 1, "st3"], ["d", "M1079.2,1235h-66.9v-7.5h11v-45.8l8.5-2.6v30.5c5.8-9.4,13.8-14.1,24.2-14.4c8.6-0.3,15.2,3.2,19.6,10.3\n      c2.6,4.4,3.9,10.2,3.9,17.2c0,1.3-0.1,3.4-0.2,6.2C1079.3,1231.6,1079.2,1233.7,1079.2,1235 M1071.3,1227.5c0.1-1.3,0.2-2.7,0.2-4\n      c0-5.6-1.2-10.4-3.5-14.6c-2.7-3.7-6.5-5.7-11.4-6c-6-0.3-11.6,2.7-16.8,8.6c-4.3,4.9-7,10.3-8.4,16H1071.3z", 1, "st3"], ["d", "M1150.3,1235h-5.8c-7,0-11.4-2.1-13.3-6.2c-2,4.2-6.4,6.2-13.1,6.2c-11.3,0-17-6.8-17-20.4\n      c0-13.2,5.7-19.8,17-19.8h18.1v23.8c0,6.1,2.9,9.1,8.7,9.1h5.3V1235z M1127.8,1201.7h-9.1c-3.5,0-6,1.2-7.3,3.5\n      c-1.2,1.9-1.8,5.1-1.8,9.5c0,4.4,0.6,7.6,1.8,9.5c1.3,2.4,3.8,3.6,7.3,3.6c3.5,0,6-1.2,7.3-3.6c1.2-2,1.8-5.2,1.8-9.5V1201.7z\n       M1120,1182.2c0,2.5-2.1,4.6-4.7,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.5,4.6-4.5C1117.9,1177.7,1120,1179.7,1120,1182.2\n       M1132,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2-4.5,4.5-4.5C1129.8,1177.7,1132,1179.7,1132,1182.2", 1, "st3"], ["d", "M1198.8,1235h-50.5v-7.3h41.9c0.1-4.5-0.1-7.8-0.4-9.7c-0.6-3.7-2-6.6-4.3-8.6c-3-2.9-7-4.3-11.9-4.3\n      c-6.4,0-11.6,2.3-15.6,7l-5.8-5.4l27.7-28.9h11.1l-19.3,20.2c1.3-0.2,2.6-0.3,3.9-0.3c6.2,0,11.3,1.9,15.5,5.6\n      c4.2,3.7,6.7,8.6,7.4,14.7C1198.7,1219.2,1198.8,1224.9,1198.8,1235", 1, "st3"], ["d", "M1246,1235h-12.7c-1.2,10.3-8.5,17.1-20,17.1c-3.8,0-7-0.8-9.5-2.4l-4-8.4c4,2.2,8.5,3.4,13.5,3.4\n      c7.2,0,11.6-4.6,11.6-12.1v-35.3l8.5-2.5v32.7h12.6V1235z", 1, "st3"], ["d", "M1315.3,1219.7c0,9.2-6.5,15.3-16.8,15.3h-54.5v-7.5h10.5V1205l8.5-2.4v25.1h17.5v-26.6l8.5-2.5v28.9h9.1\n      c5.8,0,8.7-2.9,8.7-8.7v-21.6l8.5-2.6V1219.7z M1282.9,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.6,0-4.5-2.1-4.5-4.6c0-2.6,2-4.7,4.5-4.7\n      C1280.8,1177.5,1282.9,1179.7,1282.9,1182.2 M1289,1171.9c0,2.4-2.1,4.5-4.6,4.5c-2.5,0-4.6-2.1-4.6-4.5c0-2.5,2.1-4.6,4.6-4.6\n      C1286.8,1167.3,1289,1169.4,1289,1171.9 M1294.9,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.6,2.1-4.7,4.5-4.7\n      C1292.7,1177.5,1294.9,1179.7,1294.9,1182.2", 1, "st3"], [1, "links"], [1, "hidden_500px"], ["href", "", "routerLink", "student-register"], ["href", "", "routerLink", "login"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .darker { clip-path: url(#SVGID_2_); fill: #771025; } .secondary_color { clip-path: url(#SVGID_2_); fill: #58595b; } .primary_color { clip-path: url(#SVGID_2_); fill: #ba3a51; } .st3 { clip-path: url(#SVGID_2_); fill: #414042; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0627\u0644\u0627\u0644\u062A\u062D\u0627\u0642 \u0628\u0627\u0644\u0645\u062F\u0631\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolled", ctx.transparentHeader);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 70px;\n  overflow: hidden;\n  background-color: rgba(27, 27, 27, 0.3);\n  z-index: 10;\n  transition: 0.3s ease-in-out;\n}\nheader.scrolled[_ngcontent-%COMP%] {\n  background-image: linear-gradient(561deg, rgba(234, 234, 234, 0.02) 0%, rgba(234, 234, 234, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 100.002%), linear-gradient(320deg, rgba(39, 39, 39, 0.03) 0%, rgba(39, 39, 39, 0.03) 20%, rgba(232, 232, 232, 0.03) 20%, rgba(232, 232, 232, 0.03) 40%, rgba(33, 33, 33, 0.03) 40%, rgba(33, 33, 33, 0.03) 60%, rgba(84, 84, 84, 0.03) 60%, rgba(84, 84, 84, 0.03) 80%, rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%), linear-gradient(348deg, rgba(174, 174, 174, 0.03) 0%, rgba(174, 174, 174, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 25%, rgba(191, 191, 191, 0.03) 25%, rgba(191, 191, 191, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 50%, rgba(227, 227, 227, 0.03) 50%, rgba(227, 227, 227, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 75%, rgba(162, 162, 162, 0.03) 75%, rgba(162, 162, 162, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 100%), linear-gradient(600deg, rgba(38, 38, 38, 0.02) 0%, rgba(38, 38, 38, 0.02) 25%, rgba(106, 106, 106, 0.02) 25%, rgba(106, 106, 106, 0.02) 50%, rgba(28, 28, 28, 0.02) 50%, rgba(28, 28, 28, 0.02) 75%, rgba(66, 66, 66, 0.02) 75%, rgba(66, 66, 66, 0.02) 100%), linear-gradient(382deg, rgba(38, 38, 38, 0.03) 0%, rgba(38, 38, 38, 0.03) 25%, rgba(211, 211, 211, 0.03) 25%, rgba(211, 211, 211, 0.03) 50%, rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%, rgba(24, 24, 24, 0.03) 75%, rgba(24, 24, 24, 0.03) 100%), linear-gradient(296deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 100.002%), linear-gradient(528deg, rgba(20, 20, 20, 0.01) 0%, rgba(20, 20, 20, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 100.002%), linear-gradient(335deg, rgba(191, 85, 105, 0.5), rgba(22, 22, 22, 0.5));\n  box-shadow: 0 0 14px black;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 100%;\n  padding: 8px 80px 8px 0;\n}\n@media (max-width: 800px) {\n  header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 8px 20px 8px 0;\n  }\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 100%;\n  padding-left: 80px;\n}\n@media (max-width: 800px) {\n  header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0 0 0 15px;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-items: center;\n  justify-content: flex-end;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  padding: 5px 10px;\n  font-size: 14px;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  width: 80%;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  width: 0;\n  height: 2px;\n  background-color: #fff;\n  transform: translateX(-50%);\n  transition: 0.5s ease;\n}\n@media (max-width: 500px) {\n  .hidden_500px[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ0hGO0FES0U7RUFDRSw0d0ZBQUE7RUF3R0EsMEJBQUE7QUMxR0o7QUQ2R0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDM0dKO0FENkdJO0VBTEY7SUFNSSx1QkFBQTtFQzFHSjtBQUNGO0FENEdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUMxR047QUQ0R007RUFDRSxVQUFBO0FDMUdSO0FEK0dFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQzdHSjtBRCtHSTtFQUxGO0lBTUksaUJBQUE7RUM1R0o7QUFDRjtBRDhHSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQzVHTjtBRDhHTTtFQUNFLGNBQUE7QUM1R1I7QUQ4R1E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUM1R1Y7QUQ4R1U7RUFDRSxVQUFBO0FDNUdaO0FEK0dVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQzdHWjtBRHNIRTtFQURGO0lBRUksd0JBQUE7RUNsSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5X2NvbG9yOiAjYmEzYTUxO1xyXG4kZGFya2VyX2NvbG9yOiAjNzcxMDI1O1xyXG4kc2Vjb25kcnlfY29sb3I6ICM1ODU5NWI7XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDAuMyk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgJi5zY3JvbGxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgNTYxZGVnLFxyXG4gICAgICAgIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4wMikgMCUsXHJcbiAgICAgICAgcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjAyKSAxNi42NjclLFxyXG4gICAgICAgIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wMikgMTYuNjY3JSxcclxuICAgICAgICByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDIpIDMzLjMzNCUsXHJcbiAgICAgICAgcmdiYSgxNjEsIDE2MSwgMTYxLCAwLjAyKSAzMy4zMzQlLFxyXG4gICAgICAgIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4wMikgNTAuMDAxJSxcclxuICAgICAgICByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuMDIpIDUwLjAwMSUsXHJcbiAgICAgICAgcmdiYSgxNTQsIDE1NCwgMTU0LCAwLjAyKSA2Ni42NjglLFxyXG4gICAgICAgIHJnYmEoNzcsIDc3LCA3NywgMC4wMikgNjYuNjY4JSxcclxuICAgICAgICByZ2JhKDc3LCA3NywgNzcsIDAuMDIpIDgzLjMzNSUsXHJcbiAgICAgICAgcmdiYSgxMCwgMTAsIDEwLCAwLjAyKSA4My4zMzUlLFxyXG4gICAgICAgIHJnYmEoMTAsIDEwLCAxMCwgMC4wMikgMTAwLjAwMiVcclxuICAgICAgKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDMyMGRlZyxcclxuICAgICAgICByZ2JhKDM5LCAzOSwgMzksIDAuMDMpIDAlLFxyXG4gICAgICAgIHJnYmEoMzksIDM5LCAzOSwgMC4wMykgMjAlLFxyXG4gICAgICAgIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC4wMykgMjAlLFxyXG4gICAgICAgIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC4wMykgNDAlLFxyXG4gICAgICAgIHJnYmEoMzMsIDMzLCAzMywgMC4wMykgNDAlLFxyXG4gICAgICAgIHJnYmEoMzMsIDMzLCAzMywgMC4wMykgNjAlLFxyXG4gICAgICAgIHJnYmEoODQsIDg0LCA4NCwgMC4wMykgNjAlLFxyXG4gICAgICAgIHJnYmEoODQsIDg0LCA4NCwgMC4wMykgODAlLFxyXG4gICAgICAgIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4wMykgODAlLFxyXG4gICAgICAgIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4wMykgMTAwJVxyXG4gICAgICApLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgMzQ4ZGVnLFxyXG4gICAgICAgIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC4wMykgMCUsXHJcbiAgICAgICAgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSAxMi41JSxcclxuICAgICAgICByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuMDMpIDEyLjUlLFxyXG4gICAgICAgIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4wMykgMjUlLFxyXG4gICAgICAgIHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4wMykgMjUlLFxyXG4gICAgICAgIHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4wMykgMzcuNSUsXHJcbiAgICAgICAgcmdiYSgyMywgMjMsIDIzLCAwLjAzKSAzNy41JSxcclxuICAgICAgICByZ2JhKDIzLCAyMywgMjMsIDAuMDMpIDUwJSxcclxuICAgICAgICByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMDMpIDUwJSxcclxuICAgICAgICByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMDMpIDYyLjUlLFxyXG4gICAgICAgIHJnYmEoNzEsIDcxLCA3MSwgMC4wMykgNjIuNSUsXHJcbiAgICAgICAgcmdiYSg3MSwgNzEsIDcxLCAwLjAzKSA3NSUsXHJcbiAgICAgICAgcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjAzKSA3NSUsXHJcbiAgICAgICAgcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjAzKSA4Ny41JSxcclxuICAgICAgICByZ2JhKDg1LCA4NSwgODUsIDAuMDMpIDg3LjUlLFxyXG4gICAgICAgIHJnYmEoODUsIDg1LCA4NSwgMC4wMykgMTAwJVxyXG4gICAgICApLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgNjAwZGVnLFxyXG4gICAgICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4wMikgMCUsXHJcbiAgICAgICAgcmdiYSgzOCwgMzgsIDM4LCAwLjAyKSAyNSUsXHJcbiAgICAgICAgcmdiYSgxMDYsIDEwNiwgMTA2LCAwLjAyKSAyNSUsXHJcbiAgICAgICAgcmdiYSgxMDYsIDEwNiwgMTA2LCAwLjAyKSA1MCUsXHJcbiAgICAgICAgcmdiYSgyOCwgMjgsIDI4LCAwLjAyKSA1MCUsXHJcbiAgICAgICAgcmdiYSgyOCwgMjgsIDI4LCAwLjAyKSA3NSUsXHJcbiAgICAgICAgcmdiYSg2NiwgNjYsIDY2LCAwLjAyKSA3NSUsXHJcbiAgICAgICAgcmdiYSg2NiwgNjYsIDY2LCAwLjAyKSAxMDAlXHJcbiAgICAgICksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAzODJkZWcsXHJcbiAgICAgICAgcmdiYSgzOCwgMzgsIDM4LCAwLjAzKSAwJSxcclxuICAgICAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMDMpIDI1JSxcclxuICAgICAgICByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMDMpIDI1JSxcclxuICAgICAgICByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMDMpIDUwJSxcclxuICAgICAgICByZ2JhKDQsIDQsIDQsIDAuMDMpIDUwJSxcclxuICAgICAgICByZ2JhKDQsIDQsIDQsIDAuMDMpIDc1JSxcclxuICAgICAgICByZ2JhKDI0LCAyNCwgMjQsIDAuMDMpIDc1JSxcclxuICAgICAgICByZ2JhKDI0LCAyNCwgMjQsIDAuMDMpIDEwMCVcclxuICAgICAgKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDI5NmRlZyxcclxuICAgICAgICByZ2JhKDI1MywgMjUzLCAyNTMsIDAuMDMpIDAlLFxyXG4gICAgICAgIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wMykgMTQuMjg2JSxcclxuICAgICAgICByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMDMpIDE0LjI4NiUsXHJcbiAgICAgICAgcmdiYSgxMDMsIDEwMywgMTAzLCAwLjAzKSAyOC41NzIlLFxyXG4gICAgICAgIHJnYmEoNDYsIDQ2LCA0NiwgMC4wMykgMjguNTcyJSxcclxuICAgICAgICByZ2JhKDQ2LCA0NiwgNDYsIDAuMDMpIDQyLjg1OCUsXHJcbiAgICAgICAgcmdiYSg2OCwgNjgsIDY4LCAwLjAzKSA0Mi44NTglLFxyXG4gICAgICAgIHJnYmEoNjgsIDY4LCA2OCwgMC4wMykgNTcuMTQ0JSxcclxuICAgICAgICByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMDMpIDU3LjE0NCUsXHJcbiAgICAgICAgcmdiYSgxMTYsIDExNiwgMTE2LCAwLjAzKSA3MS40MyUsXHJcbiAgICAgICAgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjAzKSA3MS40MyUsXHJcbiAgICAgICAgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjAzKSA4NS43MTYlLFxyXG4gICAgICAgIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC4wMykgODUuNzE2JSxcclxuICAgICAgICByZ2JhKDE3NCwgMTc0LCAxNzQsIDAuMDMpIDEwMC4wMDIlXHJcbiAgICAgICksXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICA1MjhkZWcsXHJcbiAgICAgICAgcmdiYSgyMCwgMjAsIDIwLCAwLjAxKSAwJSxcclxuICAgICAgICByZ2JhKDIwLCAyMCwgMjAsIDAuMDEpIDE0LjI4NiUsXHJcbiAgICAgICAgcmdiYSgyMywgMjMsIDIzLCAwLjAxKSAxNC4yODYlLFxyXG4gICAgICAgIHJnYmEoMjMsIDIzLCAyMywgMC4wMSkgMjguNTcyJSxcclxuICAgICAgICByZ2JhKDE5LCAxOSwgMTksIDAuMDEpIDI4LjU3MiUsXHJcbiAgICAgICAgcmdiYSgxOSwgMTksIDE5LCAwLjAxKSA0Mi44NTglLFxyXG4gICAgICAgIHJnYmEoMTM0LCAxMzQsIDEzNCwgMC4wMSkgNDIuODU4JSxcclxuICAgICAgICByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuMDEpIDU3LjE0NCUsXHJcbiAgICAgICAgcmdiYSg0LCA0LCA0LCAwLjAxKSA1Ny4xNDQlLFxyXG4gICAgICAgIHJnYmEoNCwgNCwgNCwgMC4wMSkgNzEuNDMlLFxyXG4gICAgICAgIHJnYmEoMjU0LCAyNTQsIDI1NCwgMC4wMSkgNzEuNDMlLFxyXG4gICAgICAgIHJnYmEoMjU0LCAyNTQsIDI1NCwgMC4wMSkgODUuNzE2JSxcclxuICAgICAgICByZ2JhKDg3LCA4NywgODcsIDAuMDEpIDg1LjcxNiUsXHJcbiAgICAgICAgcmdiYSg4NywgODcsIDg3LCAwLjAxKSAxMDAuMDAyJVxyXG4gICAgICApLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoMzM1ZGVnLCByZ2JhKDE5MSwgODUsIDEwNSwgMC41KSwgcmdiYSgyMiwgMjIsIDIyLCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYigwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHggODBweCA4cHggMDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBwYXRoIHtcclxuICAgICAgICBmaWxsOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlua3Mge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbl81MDBweCB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC4zKTtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIuc2Nyb2xsZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTYxZGVnLCByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuMDIpIDAlLCByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuMDIpIDE2LjY2NyUsIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wMikgMTYuNjY3JSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjAyKSAzMy4zMzQlLCByZ2JhKDE2MSwgMTYxLCAxNjEsIDAuMDIpIDMzLjMzNCUsIHJnYmEoMTYxLCAxNjEsIDE2MSwgMC4wMikgNTAuMDAxJSwgcmdiYSgxNTQsIDE1NCwgMTU0LCAwLjAyKSA1MC4wMDElLCByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuMDIpIDY2LjY2OCUsIHJnYmEoNzcsIDc3LCA3NywgMC4wMikgNjYuNjY4JSwgcmdiYSg3NywgNzcsIDc3LCAwLjAyKSA4My4zMzUlLCByZ2JhKDEwLCAxMCwgMTAsIDAuMDIpIDgzLjMzNSUsIHJnYmEoMTAsIDEwLCAxMCwgMC4wMikgMTAwLjAwMiUpLCBsaW5lYXItZ3JhZGllbnQoMzIwZGVnLCByZ2JhKDM5LCAzOSwgMzksIDAuMDMpIDAlLCByZ2JhKDM5LCAzOSwgMzksIDAuMDMpIDIwJSwgcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjAzKSAyMCUsIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC4wMykgNDAlLCByZ2JhKDMzLCAzMywgMzMsIDAuMDMpIDQwJSwgcmdiYSgzMywgMzMsIDMzLCAwLjAzKSA2MCUsIHJnYmEoODQsIDg0LCA4NCwgMC4wMykgNjAlLCByZ2JhKDg0LCA4NCwgODQsIDAuMDMpIDgwJSwgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjAzKSA4MCUsIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4wMykgMTAwJSksIGxpbmVhci1ncmFkaWVudCgzNDhkZWcsIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC4wMykgMCUsIHJnYmEoMTc0LCAxNzQsIDE3NCwgMC4wMykgMTIuNSUsIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4wMykgMTIuNSUsIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC4wMykgMjUlLCByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMDMpIDI1JSwgcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjAzKSAzNy41JSwgcmdiYSgyMywgMjMsIDIzLCAwLjAzKSAzNy41JSwgcmdiYSgyMywgMjMsIDIzLCAwLjAzKSA1MCUsIHJnYmEoMjI3LCAyMjcsIDIyNywgMC4wMykgNTAlLCByZ2JhKDIyNywgMjI3LCAyMjcsIDAuMDMpIDYyLjUlLCByZ2JhKDcxLCA3MSwgNzEsIDAuMDMpIDYyLjUlLCByZ2JhKDcxLCA3MSwgNzEsIDAuMDMpIDc1JSwgcmdiYSgxNjIsIDE2MiwgMTYyLCAwLjAzKSA3NSUsIHJnYmEoMTYyLCAxNjIsIDE2MiwgMC4wMykgODcuNSUsIHJnYmEoODUsIDg1LCA4NSwgMC4wMykgODcuNSUsIHJnYmEoODUsIDg1LCA4NSwgMC4wMykgMTAwJSksIGxpbmVhci1ncmFkaWVudCg2MDBkZWcsIHJnYmEoMzgsIDM4LCAzOCwgMC4wMikgMCUsIHJnYmEoMzgsIDM4LCAzOCwgMC4wMikgMjUlLCByZ2JhKDEwNiwgMTA2LCAxMDYsIDAuMDIpIDI1JSwgcmdiYSgxMDYsIDEwNiwgMTA2LCAwLjAyKSA1MCUsIHJnYmEoMjgsIDI4LCAyOCwgMC4wMikgNTAlLCByZ2JhKDI4LCAyOCwgMjgsIDAuMDIpIDc1JSwgcmdiYSg2NiwgNjYsIDY2LCAwLjAyKSA3NSUsIHJnYmEoNjYsIDY2LCA2NiwgMC4wMikgMTAwJSksIGxpbmVhci1ncmFkaWVudCgzODJkZWcsIHJnYmEoMzgsIDM4LCAzOCwgMC4wMykgMCUsIHJnYmEoMzgsIDM4LCAzOCwgMC4wMykgMjUlLCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMDMpIDI1JSwgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjAzKSA1MCUsIHJnYmEoNCwgNCwgNCwgMC4wMykgNTAlLCByZ2JhKDQsIDQsIDQsIDAuMDMpIDc1JSwgcmdiYSgyNCwgMjQsIDI0LCAwLjAzKSA3NSUsIHJnYmEoMjQsIDI0LCAyNCwgMC4wMykgMTAwJSksIGxpbmVhci1ncmFkaWVudCgyOTZkZWcsIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wMykgMCUsIHJnYmEoMjUzLCAyNTMsIDI1MywgMC4wMykgMTQuMjg2JSwgcmdiYSgxMDMsIDEwMywgMTAzLCAwLjAzKSAxNC4yODYlLCByZ2JhKDEwMywgMTAzLCAxMDMsIDAuMDMpIDI4LjU3MiUsIHJnYmEoNDYsIDQ2LCA0NiwgMC4wMykgMjguNTcyJSwgcmdiYSg0NiwgNDYsIDQ2LCAwLjAzKSA0Mi44NTglLCByZ2JhKDY4LCA2OCwgNjgsIDAuMDMpIDQyLjg1OCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4wMykgNTcuMTQ0JSwgcmdiYSgxMTYsIDExNiwgMTE2LCAwLjAzKSA1Ny4xNDQlLCByZ2JhKDExNiwgMTE2LCAxMTYsIDAuMDMpIDcxLjQzJSwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjAzKSA3MS40MyUsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC4wMykgODUuNzE2JSwgcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjAzKSA4NS43MTYlLCByZ2JhKDE3NCwgMTc0LCAxNzQsIDAuMDMpIDEwMC4wMDIlKSwgbGluZWFyLWdyYWRpZW50KDUyOGRlZywgcmdiYSgyMCwgMjAsIDIwLCAwLjAxKSAwJSwgcmdiYSgyMCwgMjAsIDIwLCAwLjAxKSAxNC4yODYlLCByZ2JhKDIzLCAyMywgMjMsIDAuMDEpIDE0LjI4NiUsIHJnYmEoMjMsIDIzLCAyMywgMC4wMSkgMjguNTcyJSwgcmdiYSgxOSwgMTksIDE5LCAwLjAxKSAyOC41NzIlLCByZ2JhKDE5LCAxOSwgMTksIDAuMDEpIDQyLjg1OCUsIHJnYmEoMTM0LCAxMzQsIDEzNCwgMC4wMSkgNDIuODU4JSwgcmdiYSgxMzQsIDEzNCwgMTM0LCAwLjAxKSA1Ny4xNDQlLCByZ2JhKDQsIDQsIDQsIDAuMDEpIDU3LjE0NCUsIHJnYmEoNCwgNCwgNCwgMC4wMSkgNzEuNDMlLCByZ2JhKDI1NCwgMjU0LCAyNTQsIDAuMDEpIDcxLjQzJSwgcmdiYSgyNTQsIDI1NCwgMjU0LCAwLjAxKSA4NS43MTYlLCByZ2JhKDg3LCA4NywgODcsIDAuMDEpIDg1LjcxNiUsIHJnYmEoODcsIDg3LCA4NywgMC4wMSkgMTAwLjAwMiUpLCBsaW5lYXItZ3JhZGllbnQoMzM1ZGVnLCByZ2JhKDE5MSwgODUsIDEwNSwgMC41KSwgcmdiYSgyMiwgMjIsIDIyLCAwLjUpKTtcbiAgYm94LXNoYWRvdzogMCAwIDE0cHggYmxhY2s7XG59XG5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCA4MHB4IDhweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGhlYWRlciAubG9nbyB7XG4gICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDA7XG4gIH1cbn1cbmhlYWRlciAubG9nbyBzdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbmhlYWRlciAubG9nbyBzdmcgcGF0aCB7XG4gIGZpbGw6ICNmZmY7XG59XG5oZWFkZXIgLmxpbmtzIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgaGVhZGVyIC5saW5rcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cbmhlYWRlciAubGlua3MgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5oZWFkZXIgLmxpbmtzIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgLmxpbmtzIHVsIGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaGVhZGVyIC5saW5rcyB1bCBsaSBhOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiA4MCU7XG59XG5oZWFkZXIgLmxpbmtzIHVsIGxpIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oaWRkZW5fNTAwcHgge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loader/loader.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/loader/loader.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 57,
      vars: 0,
      consts: [[1, "loader_div"], [1, "svg_container"], ["id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 1500 1334", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 1500 1334"], ["type", "text/css"], ["id", "SVGID_1_", "x", "-354", "y", "-447", "width", "2208", "height", "2208"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_1_", 2, "overflow", "visible"], ["d", "M671.8,929.3c-0.9,2.8-2.2,6.3-4,10.3c-1.7,4-3.6,7.9-5.5,11.6c-1.9,3.7-3.7,6.9-5.4,9.5\n      c-1.7,2.6-2.9,3.9-3.7,3.9c-1.2,0-3.5-0.8-6.9-2.4c-3.4-1.6-7-3.6-11-6.2c-4-2.5-7.8-5.5-11.5-8.8c-3.7-3.3-6.5-6.8-8.3-10.4\n      c0-0.3,0.3-1.4,0.8-3.1c0.6-1.7,1.3-3.7,2.2-5.9c1-2.3,2.1-4.8,3.2-7.5c1.1-2.7,2.3-5.3,3.5-7.8c1.2-2.5,2.4-4.7,3.6-6.7\n      c1.2-2,2.2-3.4,3.1-4.3c3.5,3.6,7,6.9,10.6,9.9c3.6,2.9,7.1,5.6,10.6,8c3.5,2.4,6.8,4.4,9.9,6c3.1,1.6,6,2.9,8.6,3.6V929.3z", 1, "darker"], ["d", "M775.9,1045.6c-0.4,2.2-1.1,4.8-2.2,7.7c-1,2.9-2.1,5.6-3.3,8.2c-1.2,2.6-2.2,4.7-3.2,6.5\n      c-1,1.8-1.7,2.6-2,2.6c-1.1,0-2.5-0.4-4.2-1.1c-1.7-0.7-3.6-1.6-5.6-2.8c-2-1.1-4.1-2.4-6.2-3.8c-2.1-1.4-4-2.9-5.8-4.3\n      c-1.8-1.5-3.3-2.9-4.6-4.2c-1.3-1.4-2-2.6-2.4-3.6c0-0.5,0.5-2,1.4-4.4c1-2.4,2.1-5,3.3-7.9c1.2-2.8,2.5-5.5,3.9-7.9\n      c1.3-2.4,2.4-3.9,3.1-4.4c1.3,1.5,3.1,3.2,5.2,5.1c2.2,1.9,4.5,3.7,7.1,5.5c2.6,1.8,5.2,3.5,7.9,5.1\n      C771,1043.6,773.5,1044.8,775.9,1045.6 M788.9,1018.6c3.4,4.2,7.6,8,12.7,11.4c5,3.3,10.1,6,15.3,7.9c-1.8,4.6-3.3,8.4-4.7,11.5\n      c-1.4,3.1-2.6,5.6-3.6,7.4c-1,1.9-1.8,3.2-2.4,4.1c-0.6,0.8-1.1,1.2-1.3,1.2c-0.7,0-1.7-0.3-3.1-0.8c-1.4-0.5-3-1.3-4.9-2.3\n      c-1.8-1-3.8-2.1-5.8-3.4c-2-1.3-4-2.7-5.8-4.1c-1.8-1.5-3.5-3-4.9-4.6c-1.4-1.6-2.4-3.2-3-4.8c0-0.6,0.4-1.9,1.2-3.9\n      c0.8-2,1.8-4.3,2.9-6.8c1.1-2.5,2.4-4.9,3.7-7.3C786.5,1021.7,787.7,1019.9,788.9,1018.6", 1, "darker"], ["d", "M1077,1009c-1,2.7-2.4,5.9-4.3,9.7c-1.9,3.8-3.8,7.5-5.8,11c-2,3.5-3.9,6.5-5.6,8.9c-1.7,2.4-3,3.6-3.8,3.6\n      c-1.2-0.1-3.4-0.9-6.6-2.6c-3.2-1.7-6.6-3.9-10.4-6.5c-3.7-2.6-7.3-5.7-10.7-9.1c-3.4-3.4-5.9-6.9-7.5-10.5c0-0.3,0.3-1.3,1-2.9\n      c0.6-1.6,1.4-3.5,2.4-5.6c1.1-2.1,2.2-4.5,3.4-7.1c1.2-2.6,2.5-5,3.8-7.4c1.3-2.3,2.6-4.5,3.8-6.3c1.2-1.9,2.3-3.2,3.2-4\n      c3.2,3.7,6.5,7,9.8,10c3.3,3,6.6,5.7,9.9,8.2c3.2,2.5,6.4,4.6,9.3,6.3c3,1.7,5.7,3,8.1,3.9L1077,1009z", 1, "darker"], ["d", "M895.5,911.9c3.9-3.2,7.8-6.1,11.6-8.9c3.8-2.8,7.2-5.6,10.2-8.3c3-2.8,5.2-5.7,6.4-8.9\n      c1.1-2.7,2.3-5.4,3.4-8.1c1.2-2.7,2.5-5.5,4.1-8.5l-0.6-1c-4.5,3.3-9,6.1-13.4,8.4c-4.4,2.4-8.7,4.3-12.8,5.8\n      c-4.1,1.5-8,2.7-11.7,3.4c-3.7,0.7-7.1,1.1-10.1,1.1c-5.8,0-11.3-0.6-16.5-1.9c-5.2-1.3-9.8-3-13.8-5.2c-4-2.2-7.1-4.7-9.5-7.5\n      c-2.3-2.8-3.5-5.8-3.5-8.8c0-1.1,0.5-2.3,1.5-3.6c1-1.3,2.5-2.4,4.3-3.4c1.9-1,4.1-1.9,6.6-2.5c2.5-0.7,5.3-1,8.3-1\n      c4.7,0,8.8,0.4,12.5,1.2c3.7,0.8,6.9,1.9,9.6,3.2c2.7,1.3,4.9,2.8,6.5,4.4c1.7,1.6,2.8,3.2,3.3,4.8c0.9,2.4,1.6,4.2,1.9,5.4\n      c0.3,1.2,0.8,1.8,1.5,1.8c0.6-0.1,0.9-0.5,1-1.1c0.1-0.6,0.1-1.1,0.1-1.5c0-1.1,0-2.6-0.1-4.5c-0.1-1.9-0.1-4.3-0.1-7.3\n      c0-2.1,0-4.2,0.1-6.2c0.1-2,0.1-3.6,0.1-4.8c0-3.1-1-5.7-3.1-7.9c-2.1-2.2-4.6-4-7.7-5.3c-3.1-1.4-6.4-2.4-10.1-3\n      c-3.6-0.6-7-1-10-1c-8.1,0-14.7,2.2-19.8,6.7c-5.1,4.5-9.1,10.8-11.9,19c-1.7,5.1-2.9,9.4-3.6,12.8c-0.7,3.4-1,6.4-1,8.9\n      c0,4.1,0.9,7.8,2.8,11.3c1.9,3.5,4.5,6.6,8,9.3c3.4,2.8,7.6,5.1,12.5,7.1c4.9,2,10.4,3.4,16.5,4.4v0.6c-4.9,5.3-9.8,10.2-14.7,14.5\n      c-4.9,4.4-9.8,8.1-14.6,11.2c-4.9,3.1-9.7,5.5-14.4,7.2c-4.8,1.7-9.4,2.5-13.8,2.5c-4.2,0-8.2-0.9-11.9-2.7c-2.1-1-4.2-2.4-6.2-3.9\n      c-0.1-0.1-0.3-0.2-0.4-0.3c-2.7-2.6-5-5.2-6.7-7.7c-1.7-2.5-3.1-4.9-4.1-7.1c-1-2.3-1.9-4.4-2.6-6.6c-1-2.9-2-6-3-9.3\n      c-1-3.3-1.9-6.7-2.7-10.2h-1c-1.4,3.4-2.6,6.6-3.6,9.6c-1,3-1.9,5.8-2.6,8.4c0.1,1.2,0.3,2.4,0.4,3.6c0.1,1.2,0.2,2.4,0.2,3.6\n      c0,3.3-0.7,6.2-2.2,8.6c-1.5,2.4-3.7,4.8-6.6,7.1c-5.9,4.6-11.5,8-16.7,10.1c-5,2-10,3.1-15.1,3.2c-0.1,0-0.3,0-0.4-0.1\n      c-2.7-0.3-5.3-0.7-7.8-1.2c-2.6-0.6-5-1.4-7.5-2.6c-2.4-1.2-4.8-2.7-7.1-4.6c-2.3-1.9-4.5-4.4-6.7-7.5l-1,0.2\n      c-1.6,6.1-2.8,11.1-3.7,15c-0.9,3.9-1.3,7-1.3,9.3c0,2.1,0.5,3.9,1.4,5.5c0.9,1.6,2.1,3.3,3.6,5.1c1.4,1.8,2.9,3.8,4.7,6.1\n      c1.7,2.3,3.4,5,5.1,8.3c2.5,5,4.2,10,5.1,14.9c0.9,5,1.3,10.2,1.3,15.5c0,4.2-0.9,9-2.6,14.3c-1.7,5.3-4.2,10.7-7.4,16.2\n      c-3.2,5.5-7,10.9-11.6,16.1c-4.5,5.2-9.6,9.9-15.3,14c-5.7,4.1-11.9,7.4-18.5,9.9c-6.7,2.5-13.7,3.7-21.2,3.7\n      c-5.4,0-10.5-0.9-15.2-2.7c-4.8-1.8-9-4.6-12.6-8.2c-3.6-3.7-6.4-8.2-8.5-13.7c-2.1-5.5-3.1-11.9-3.1-19.2c0-3.7,0.4-7.9,1.3-12.7\n      c0.9-4.7,2.5-9.9,4.9-15.5c2.4-5.6,5.5-11.6,9.6-18.1c4-6.4,9.2-13.3,15.5-20.5c0.8-0.8,1.2-1.7,1.2-2.6c0-0.4-0.2-0.7-0.6-0.8\n      s-0.8-0.2-1.2-0.2c-0.5,0-1.1,0.3-1.9,0.7c-0.8,0.5-1.8,1.3-3.1,2.5c-1.3,1.2-2.7,2.7-4.4,4.6c-1.7,1.9-3.7,4.3-5.9,7.1\n      c-9.4,12.2-16.2,24.3-20.4,36.4c-4.2,12.1-6.3,24-6.3,35.8c0,8.3,1.1,16,3.4,23.2c2.3,7.2,5.5,13.4,9.9,18.7\n      c4.3,5.3,9.6,9.4,15.9,12.4c6.3,3,13.4,4.5,21.5,4.5c6.1,0,12.2-0.9,18.3-2.7c6.1-1.8,12-4.5,17.7-7.9c5.7-3.5,11.1-7.7,16.2-12.7\n      c5.1-5,9.6-10.7,13.6-17.1c4-6.4,7.4-13.4,10.2-21c2.8-7.6,4.7-15.8,5.8-24.6c0.5-3.9,1-7.8,1.6-11.8c0.5-3.9,1-7.9,1.5-12\n      c0.5-4.1,0.9-8.3,1.2-12.5c0.3-4.2,0.4-8.6,0.4-13.1c0-1.7,0-3.3-0.1-4.7c-0.1-1.1-0.1-2-0.2-2.8c1,0,2,0.1,3.1,0.1\n      c5,0,10-1,14.9-2.9c4.9-2,9.5-4.6,13.7-8c4.3-3.4,8.1-7.4,11.5-12c3.4-4.6,6.1-9.6,8.3-14.9h0.6c1.3,3.1,3,6.4,5.4,10\n      c2.3,3.5,4.9,6.8,7.8,9.7c2.4,2.5,5,4.5,7.7,6.3c0.2,0.1,0.4,0.3,0.6,0.4c0.3,0.2,0.6,0.5,0.9,0.7c2,1.2,3.9,1.9,5.7,2.4\n      c2.8,0.9,5.8,1.4,8.9,1.4c5.9,0,11.8-1,17.7-3c5.9-2,11.9-5,17.9-9.2c6-4.1,12.2-9.3,18.5-15.7c6.3-6.3,12.8-13.9,19.5-22.6\n      C888.1,918.6,891.6,915,895.5,911.9", 1, "darker"], ["d", "M1238.4,750.5c-0.5-8-1.2-16.7-2.2-26c-1-9.4-2.3-19.2-4-29.4c-1.7-10.2-3.8-20.2-6.2-30\n      c-2.4-9.8-5.3-19.1-8.5-28c-3.3-8.9-7-16.7-11.3-23.4c-4.3-6.7-9-12-14.2-15.9c-5.2-3.9-11.1-5.9-17.4-5.9c-3,0-5.8,0.7-8.6,2.2\n      c-2.7,1.5-5.3,3.5-7.7,6.2c-2.4,2.6-4.6,5.8-6.6,9.3c-1.6,2.9-3,6-4.3,9.3c-0.7,0.6-1.5,1.3-2.2,2.4c-1.6,2.4-3,5.5-4.2,9.4\n      c-3,9.8-5.1,19.1-6.2,27.9c-1.2,8.8-1.7,17.4-1.7,25.7c0,9.9,0.6,19.1,1.8,27.7c1.2,8.6,2.8,16.7,4.6,24.2\n      c1.9,7.6,3.9,14.6,6.1,21.2c2.2,6.6,4.2,12.8,6.1,18.5c1.9,5.8,3.4,11.2,4.6,16.3c1.2,5.1,1.8,9.9,1.8,14.4c0,2-0.3,4.3-0.8,7\n      c-0.5,2.7-1.1,5.5-1.7,8.3c-0.6,2.8-1.2,5.6-1.7,8.3c-0.5,2.7-0.8,5-0.8,6.8v0.4c-0.4,2.2-0.6,4.4-0.6,6.5c0,2.4,0.2,4.5,0.5,6.3\n      c0.3,1.8,0.8,3.4,1.3,4.7l-0.2,0.8c-2.1,0.7-4,2-5.9,3.7c-1.9,1.7-3.8,3.8-5.8,6.2c-2,2.4-4,5-6.1,7.8c-2.1,2.8-4.4,5.6-6.9,8.5\n      c-4.3,4.8-8.2,8.8-12,12c-3.7,3.1-7.2,5.6-10.4,7.4c-3.2,1.8-6.1,3.1-8.9,3.8c-2.7,0.7-5.2,1.1-7.5,1.1c-4.2,0-8.2-0.9-11.9-2.7\n      c-1.1-0.6-2.3-1.2-3.4-1.9c-0.3-0.2-0.6-0.5-0.8-0.7c-2.2-1.9-4-3.6-5.5-5c-1.6-1.4-2.9-2.5-4-3.3c-1.1-0.8-2.2-1.2-3.2-1.2\n      c-1.3,0-2.4,0.5-3.4,1.6c-1,1.1-2.1,2.5-3.1,4.2c-1,1.8-2.1,3.8-3.1,6.2c-1.1,2.4-2.4,4.9-3.8,7.5c-1.4,2.6-3.1,5.3-4.9,8\n      c-1.9,2.7-4,5.3-6.5,7.9c-5.1,5.3-10,9.1-14.7,11.5c-4.7,2.3-9.2,3.5-13.6,3.5c-4.2,0-8.1-0.9-11.9-2.7c-1.7-0.8-3.3-1.8-4.8-2.9\n      c-0.2-0.2-0.5-0.4-0.7-0.6c-2.7-2.4-5.1-4.9-7.3-7.4c-2.2-2.5-4.2-5.1-6.1-7.9c-1.9-2.7-3.6-5.6-5.3-8.6c-0.9-1.6-2-2.9-3.1-4.1\n      c-1.2-1.1-2.5-1.7-4-1.7c-0.9,0-1.6,0.3-2.3,1c-0.7,0.7-1.3,1.6-1.9,2.8c-0.6,1.2-1.1,2.5-1.6,3.9c-0.5,1.5-0.9,2.9-1.4,4.4\n      c-3.8,12.3-9.2,23.2-16.1,32.9c-7,9.6-15.1,18.3-24.5,26.1c-5.7,4.7-12.3,9.8-19.9,15.1c-7.6,5.4-16.1,11.1-25.5,17.1\n      c-0.9,0.7-1.8,1.4-2.7,2.1c-0.9,0.7-1.3,1.3-1.3,1.9c0,0.4,0.2,0.6,0.6,0.7c0.4,0.1,0.8,0.1,1.2,0.1c0.7,0,1.7-0.3,2.9-1\n      c1.2-0.7,2.7-1.3,4.7-1.8c1.9-0.7,4.3-1.4,7.1-1.9c2.7-0.5,5.8-1.2,9.1-1.9c3.3-0.7,6.9-1.6,10.7-2.6c3.8-1,7.7-2.4,11.7-4\n      c4-1.7,8.1-3.7,12.2-6.1c4.1-2.4,8.1-5.3,12-8.8c3.6-3.2,6.6-6.5,9-10c2.4-3.5,4.3-6.8,5.9-10.1c1.5-3.3,2.8-6.4,3.7-9.4\n      c0.9-2.9,1.6-5.5,2.3-7.7c0.7-2.2,1.4-4,2.1-5.3c0.7-1.3,1.6-1.9,2.7-1.9c0.5,0,1.2,0.3,2.1,0.8c0.9,0.5,1.9,1.2,3,2\n      c1.1,0.8,2.2,1.8,3.4,2.9c1.2,1.1,2.3,2.2,3.2,3.2c2.1,2.1,4.1,4.2,6.2,6.2c2.1,2,4.2,3.7,6.3,5.2c2.1,1.5,4.2,2.7,6.3,3.6\n      c0.7,0.3,1.4,0.5,2.1,0.7c3,1,6.2,1.6,9.6,1.6c5.4,0,10.7-1,15.8-3.1c5.2-2.1,10.1-5.3,14.6-9.7c2.3-2.2,4.3-4.6,5.9-7.1\n      c1.6-2.6,3.1-5.1,4.3-7.6c1.3-2.5,2.4-4.9,3.4-7.2c0.9-2.3,1.9-4.3,2.8-6c0.9-1.8,1.9-3.1,2.8-4.2c1-1,2.1-1.5,3.4-1.5\n      c1.5,0,3.1,0.5,4.8,1.5c1.7,1,3.6,2.1,5.6,3.3c1.5,0.9,3,1.7,4.6,2.5c0.4,0.2,0.9,0.4,1.3,0.6c0.2,0.1,0.3,0.1,0.4,0.2\n      c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,0.9,0.4c3.4,1.4,7,2.1,11,2.1c2.9,0,5.9-0.3,9.1-0.8c3.2-0.5,6.7-1.8,10.4-3.9\n      c3.7-2.1,7.6-5.2,11.7-9.2c4.1-4.1,8.5-9.6,13-16.7c2.5-4,4.8-7.4,6.8-10.2c2-2.8,4-5.1,6-6.9c2-1.8,4.1-3.1,6.2-3.9\n      c2.2-0.8,4.7-1.2,7.6-1.2c3.7,0,7.8,0.5,12.1,1.5c4.3,1,8.7,2.4,13,4.2c2.4-1.9,4.6-4,6.6-6.5c2-2.5,3.7-5.1,5.1-7.8\n      c1.4-2.7,2.5-5.5,3.3-8.2c0.8-2.8,1.2-5.3,1.2-7.7c0-2.7-1-4.8-2.9-6.4c-1.9-1.6-4.4-3-7.3-4.1c-2.9-1.1-6.1-2.2-9.5-3.1\n      c-3.4-0.9-6.5-1.9-9.5-3c-2.9-1.1-5.4-2.5-7.3-4.2c-2-1.7-2.9-3.9-2.9-6.6c0-1.7,0.3-3.3,0.8-4.8c0.5-1.4,0.8-2.9,0.8-4.4\n      c0-0.6-0.1-1.1-0.3-1.6c-0.1-0.2-0.3-0.4-0.5-0.5c0.3-1,0.6-2.1,0.8-3.1c0.6-2.3,1.1-4.9,1.6-7.6c0.5-2.7,0.9-5.4,1.3-8.1\n      c0.4-2.7,0.7-5.3,0.9-8c0.2-2.6,0.3-5.1,0.3-7.3c0-6.1-0.7-12.3-2-18.5c-1.3-6.3-3-12.5-4.9-18.9c-2-6.3-4.1-12.8-6.4-19.4\n      c-2.3-6.5-4.5-13.2-6.4-20c-2-6.9-3.6-13.9-4.9-21.1c-1.3-7.2-2-14.6-2-22.2c0-3.9,0.2-7.3,0.7-10.4c0.5-3.1,1.2-5.9,2.1-8.5\n      c0.3-0.9,0.6-1.7,0.9-2.6c0.4-0.6,0.8-1.3,1.1-1.9c1-1.7,2.1-4,3.4-7c0.7-1.6,1.5-3.2,2.6-4.8c1.1-1.6,2.4-3.1,3.8-4.4\n      c1.4-1.3,3.1-2.4,4.9-3.3c1.8-0.9,3.8-1.3,6-1.3c5.8,0,11.1,1.8,15.9,5.4c4.8,3.6,9.3,8.6,13.3,14.8c4,6.3,7.6,13.6,10.9,21.9\n      c3.2,8.3,6.1,17.2,8.6,26.5c2.5,9.4,4.6,19,6.4,29c1.8,10,3.2,19.6,4.4,29.1c1.2,9.4,2,18.3,2.5,26.8c0.5,8.4,0.8,15.9,0.8,22.2\n      c0,1.6,0,3.3-0.1,5.3c-0.1,1.9-0.1,3.8-0.2,5.7c-0.1,1.9-0.1,3.5-0.2,4.9c-0.1,1.4-0.1,2.3-0.1,2.6c0,0.6,0,1.2,0,1.9\n      c0,0.6,0.2,0.9,0.4,0.9c0.3,0,0.6-0.3,0.9-0.9c0.3-0.6,0.5-1.2,0.7-1.9c1.1-3.3,2.1-6.7,3-10.2c0.8-3.4,1.7-6.9,2.6-10.4\n      c0.6-2.6,1-5.6,1.2-9.1c0.2-3.5,0.3-7.5,0.3-11.9C1239.1,765.1,1238.8,758.5,1238.4,750.5", 1, "darker"], ["d", "M483.2,550.7v0.4c-1.1,1.4-2.3,3.4-3.5,5.9c-1.3,2.6-2.4,5.2-3.4,7.9c-1,2.7-1.9,5.1-2.5,7.3\n      c-0.6,2.2-0.9,3.4-0.9,3.9c0,1.9,0.7,2.9,2.1,2.9c0.8,0,1.6-0.3,2.2-1c0.6-0.7,1.3-1.5,2-2.3c2.4-3.9,5.4-7.3,9-10.1\n      c3.6-2.8,7.5-5.3,11.6-7.5c4.1-2.1,8.3-4.1,12.6-5.9c4.3-1.7,8.4-3.4,12.2-5.2c3.8-1.8,7.2-3.7,10-5.7c2.8-2,5-4.4,6.4-7.2\n      c0.8-1.5,2-3.7,3.3-6.7c1.3-2.9,3.3-5.8,6.2-8.8c0.7-0.7,1-1.3,1-1.9c0-0.8-0.4-1.2-1.2-1.2c-0.4,0-1,0.2-1.9,0.6\n      c-3.6,1.9-7.5,3.9-11.8,5.9c-4.2,2-8.5,3.9-12.7,5.6c-4.2,1.7-8.4,3.2-12.5,4.3c-4.1,1.1-7.9,1.7-11.4,1.7c-1.9,0-4.4-0.4-7.5-1.2\n      c-3-0.8-6.1-2-9.1-3.6c-3-1.6-5.6-3.5-7.7-5.6c-2.2-2.2-3.2-4.6-3.2-7.4c0-2.1,1.6-4.1,4.8-6.1c3.2-2,7.8-3,14-3\n      c6.9,0,12,0.9,15.2,2.7c3.2,1.8,4.9,4.4,5.2,7.7c0.3,1.4,1,2.1,2.1,2.1c0.7,0,1.2-0.4,1.7-1.2c1.2-3.3,2.5-6.5,3.7-9.4\n      c1.1-2.8,1.7-5.6,1.7-8.5c0-3.7-2.1-6.8-6.3-9.3c-4.2-2.4-10.1-3.6-17.9-3.6c-4.7,0-8.9,0.6-12.4,1.9c-3.5,1.2-6.6,2.9-9.2,5\n      c-2.6,2.1-4.7,4.6-6.5,7.5c-1.7,2.9-3.1,6-4.1,9.4c-1.5,4.5-2.5,8.1-3,11c-0.5,2.9-0.7,5.2-0.7,6.9c0,5.4,2.1,10,6.3,13.9\n      C471.1,546.3,476.6,549,483.2,550.7", 1, "secondary_color"], ["d", "M573.9,605.3c-4.6-14.1-11.4-29.4-20.5-45.9h-1.9c-4.4,8.6-8.3,16.9-11.6,24.9c-3.3,8-6.4,15.8-9.3,23.4\n      c3.4,6.1,6.6,11.9,9.4,17.5c2.9,5.6,5.3,11.1,7.4,16.6c2.1,5.5,3.7,11,4.9,16.6c1.2,5.6,1.8,11.3,1.8,17.3c0,7.5-2.3,14.6-6.8,21.5\n      c-4.6,6.8-10.3,13.2-17.1,19.2c-15.1,12.9-29.6,22.4-43.6,28.5c-14,6.1-28.1,9.1-42.2,9.1c-2.7,0-5.6-0.1-8.7-0.4\n      c-0.3-0.1-0.6-0.1-0.8-0.2l-0.8-0.8c0.9-3.9,1.8-8,2.8-12.1c1-4.2,1.9-8.2,2.8-12.1c0.8-3.9,1.5-7.6,2-10.9\n      c0.5-3.4,0.8-6.2,0.8-8.5c0-9.9-3.3-17.5-9.8-22.8c-6.5-5.3-16.9-8-31.2-8c-5.4,0-11.5,0.6-18.2,1.9c-6.7,1.3-13.8,3.1-21.3,5.6\n      c-7.5,2.5-15.2,5.5-23.3,9c-8,3.5-16.1,7.5-24.2,12c-0.6,8.7-2.6,17.9-5.9,27.4c-3.3,9.6-7.5,19.9-12.7,31l1.9,1.9\n      c5.6-4.6,11-8.2,16.2-11c5.2-2.8,10.5-4.2,15.7-4.2c3.9,0,7.7,0.8,11.2,2.4c3.5,1.6,7,3.5,10.3,5.8c3.4,2.3,6.7,4.7,10.2,7.4\n      c3.3,2.8,6.8,5.3,10.4,7.6v1.1c-18.2,14.4-34.4,29.7-48.6,45.8c-14.2,16.1-26.1,33.1-35.9,51.1c-9.7,18-17.2,37-22.2,57\n      c-5.1,20-7.6,41.1-7.6,63.4c0,21.1,2.8,39.7,8.5,55.7c5.7,16,13.4,29.4,23.1,40.2c9.7,10.8,20.9,18.9,33.7,24.3\n      c12.8,5.4,26.3,8.2,40.6,8.2c19,0,36.7-2.9,53.2-8.7c16.5-5.8,31.5-13.5,45.1-23.2c13.6-9.6,25.7-20.7,36.2-33.1\n      c10.5-12.5,19.4-25.4,26.6-38.7c7.2-13.4,12.7-26.6,16.4-39.9c3.7-13.2,5.6-25.5,5.6-36.7c0-6.2-0.3-12.3-0.9-18.2\n      c-0.6-5.9-1.7-11.7-3.4-17.3c-1.7-5.6-4.1-10.9-7.2-15.9c-3.1-5.1-7.1-9.8-12.1-14.2c-5.9-5.2-12.8-9.4-20.7-12.5\n      c-7.9-3.2-16.2-5.6-25.1-7.3c-8.9-1.7-17.9-2.9-27.1-3.7c-9.2-0.8-18.1-1.4-26.7-1.9c-8.6-0.5-16.6-1.1-24-1.8\n      c-7.4-0.7-13.7-1.9-18.9-3.5l-1.5,2.3c2.8,2.7,7.1,4.9,13.1,6.6c5.9,1.8,12.8,3.4,20.6,4.7c7.8,1.4,16.2,2.8,25.2,4.4\n      c9,1.5,18,3.4,27,5.7c9,2.3,17.7,5.1,26,8.5c8.4,3.4,15.7,7.7,22.1,12.9c6.4,5.2,11.5,11.5,15.3,19c3.8,7.5,5.7,16.3,5.7,26.6\n      c0,10-2.1,20.1-6.4,30.3c-4.2,10.2-10.1,20.1-17.6,29.6c-7.5,9.6-16.3,18.5-26.4,26.9c-10.1,8.4-21.2,15.6-33.1,21.8\n      c-12,6.2-24.5,11.1-37.7,14.7c-13.2,3.6-26.5,5.4-39.9,5.4c-14.2,0-27.2-2.3-39.1-6.9c-11.9-4.6-22.2-10.9-30.9-19\n      c-8.7-8-15.4-17.5-20.3-28.5c-4.9-11-7.3-22.8-7.3-35.6c0-12.1,2.6-24.9,7.7-38.3c5.1-13.4,13.1-27.3,23.8-41.8\n      c10.8-14.5,24.5-29.6,41.2-45.3c16.7-15.7,36.6-32,59.8-49c2.9,1,5.9,1.7,9.1,2.4c3.2,0.7,6.1,1.2,8.6,1.5c2.6,0.3,5,0.4,7.1,0.5\n      c0.5,0,1,0,1.5,0.1c0.4,0,0.8,0,1.2,0c2.5,0.1,4.9,0.2,7.5,0.2c7.7,0,15.8-1,24.2-3c8.4-2,16.8-5,25.2-8.8\n      c8.4-3.9,16.5-8.6,24.5-14.2c8-5.6,15.4-12,22.2-19.1c4.4-4.7,8.2-9.4,11.3-14.1c3.1-4.7,5.8-9.6,8.2-14.9c2.3-5.2,4.5-10.9,6.4-17\n      c1.9-6.1,3.9-12.9,6.1-20.5c2.7-9.4,5-17.9,6.9-25.7c2-7.8,2.9-15,2.9-21.7C580.8,632.9,578.5,619.4,573.9,605.3", 1, "secondary_color"], ["d", "M1064.7,531.3c-1.7-6-4.3-11.4-7.9-16c-3.6-4.6-8.2-8.3-13.9-11c-5.7-2.7-12.5-4.1-20.5-4.1\n      c-9.2,0-18.2,1.9-26.9,5.7c-8.7,3.8-16.9,9.4-24.7,16.7c-7.8,7.3-15.1,16.1-22,26.6c-6.9,10.5-13.1,22.3-18.7,35.6l-1.2-0.4\n      c0.4-4.5,0.9-8,1-12c1-59.4-9.1-159-23.3-214.6c-2.7-10.4-6.3-20.1-11.1-28.9c-3.8-6.9-7.7-12.6-11.9-17c-4.2-4.5-8.8-6.7-13.8-6.7\n      c-3.9,0-7.4,2.2-10.4,6.5c-3.1,4.4-6.1,10.2-9.1,17.6c-1.9,4.8-3.6,10.1-4.9,16c-1.3,5.9-2.3,11.7-3.1,17.4\n      c-0.8,5.8-1.3,11.2-1.7,16.4c-0.3,5.1-0.5,9.3-0.5,12.6c0,4.9,1.2,7.4,3.5,7.4c0.8,0,1.5-0.4,2.1-1.1c0.6-0.7,1.1-2.2,1.4-4.4\n      c1.4-10.8,3-19.1,4.8-24.8c1.8-5.8,4.6-8.7,8.5-8.7c3.4,0,6.7,2.4,9.8,7.2c3.2,4.8,6.1,11.1,8.9,18.8c2.7,7.7,5.2,16.5,7.5,26.2\n      c2.3,9.7,19.7,124.8,21.3,134.6c1.6,9.9,2.9,19.4,3.7,28.5c0.8,9.2,1.3,17,1.3,23.5c0,5.3-0.6,11-1.8,17.2\n      c-1.2,6.1-2.6,11.9-4,17.5c-1.4,5.6-2.7,10.5-3.9,14.8c-1.3,4.3-2,7.3-2,9l8.6,21.4l1.2-1.2c2.6-8.2,5.5-16.5,8.7-24.9\n      c3.2-8.5,6.7-16.8,10.6-25.1c3.9-8.3,8.2-16.4,12.8-24.3c4.6-7.9,9.8-15.3,15.5-22.3c4.2-5.1,8.5-9.7,13-14\n      c4.5-4.3,9.1-8,13.9-11.1c4.8-3.1,9.8-5.6,15.1-7.3c5.3-1.8,10.7-2.6,16.5-2.6c6.4,0,11.8,1,16.4,2.9c4.5,2,8.3,4.3,11.2,7.2\n      c2.9,2.9,5,5.8,6.3,9c1.3,3.1,1.9,5.8,1.9,8.2c0,1.4-1,4.4-3,9c-2,4.6-5.3,9.7-9.8,15.6c-13.3,17-26.8,31.4-40.6,43.1\n      c-13.8,11.7-27.5,21.1-40.9,28.3c-13.4,7.2-26.5,12.4-39.1,15.5c-12.6,3.1-24.2,4.7-34.9,4.7c-8.8,0-16.6-1.1-23.2-3.3\n      c-6.6-2.2-12.5-5.8-17.5-10.6c-5-4.8-9.4-11.1-13.4-18.8c-0.8-1.6-1.5-3.3-2.3-5.1c-3.3-7.6-6.4-16.2-9.2-25.8\n      c-0.7-2.3-1.3-4.6-2-6.9c-0.6-2.1-1.2-4.2-1.7-6.4c-3.6-14.3-7.2-28.6-10.8-42.9c-3.6-14.3-6.8-27.9-9.7-40.7\n      c-2.9-12.9-5.3-24.8-7.1-35.8c-1.8-11-2.7-20.3-2.7-28v-4.5c0-1.6,0.1-2.9,0.4-4.1l-2-1.2c-6.6,12.3-11.4,23.1-14.3,32.3\n      c-2.9,9.2-4.4,17.2-4.4,23.8c0,7.4,0.9,16.1,2.7,26.2c1.8,10.1,4.1,20.7,6.9,32c2.8,11.2,5.8,22.7,9.1,34.4\n      c3.2,11.8,6.3,23.1,9.1,33.8c2.8,10.7,5.1,20.6,6.9,29.7c1.8,9.1,2.7,16.6,2.7,22.4c0,7-1.2,13.6-3.5,19.8\n      c-2.3,6.2-5.5,11.9-9.3,17.1c-3.9,5.2-8.4,9.9-13.4,14c-5.1,4.2-10.3,7.7-15.8,10.5c-5.5,2.9-10.9,5-16.4,6.5\n      c-5.5,1.5-10.5,2.2-15.2,2.2l-1.6-1.6c7.8-22.2,11.7-42.7,11.7-61.6c0-9-0.9-18.4-2.8-28.4c-1.9-9.9-4.2-20-7.1-30.1\n      c-2.9-10.1-6-20.2-9.5-30.2c-3.5-10-6.9-19.6-10.1-28.8c-3.2-9.1-6.2-17.6-9-25.4c-2.7-7.9-4.7-14.8-5.8-20.8H692\n      c-18.1,28.6-32.1,56.1-42,82.7c-9.9,26.6-14.9,52.1-14.9,76.7c0,11.2,1,21.9,3,32.1c2,10.2,5,19.6,8.9,28.3\n      c3.9,8.7,8.7,16.5,14.3,23.5c5.7,6.9,12.1,12.6,19.4,17v0.8c-9.3,13.5-24.3,28-44.7,43.5c-20.5,15.5-46.3,32-77.6,49.7\n      c-1.4,1-3.1,2.1-4.9,3.1c-1.9,1-2.9,1.9-2.9,2.7c0,0.8,0.4,1.3,1.2,1.6c0.8,0.3,1.6,0.4,2.3,0.4c1,0,3.4-0.5,7.2-1.6\n      c3.8-1.2,8-2.3,12.7-3.5c3.6-0.9,8.1-1.6,13.2-2.1c5.2-0.7,10.8-1.4,16.9-2.1c6-0.8,12.4-1.8,19.1-3c6.7-1.2,13.3-3,19.9-5.5\n      c6.6-2.4,12.9-5.5,19-9.3c6.1-3.8,11.7-8.5,16.8-14.2c5.1-5.7,10.1-12.2,15.2-19.6c5.1-7.3,9.9-16,14.4-26h1.6\n      c5.1,2.3,11.4,3.5,19.1,3.5c6,0,12.7-1.1,20.1-3.4c7.4-2.3,14.8-6,22.2-11.3c7.4-5.3,14.3-12.1,20.8-20.7\n      c6.4-8.5,11.7-19.1,15.7-31.7c2.7-8.2,4.8-16.5,6.2-24.8c1-5.9,1.7-11.6,2.4-17.2c0.1,0.2,0.2,0.5,0.4,0.7\n      c5.6,9.5,11.9,17.3,19,23.4c7.1,6,14.9,10.5,23.4,13.3c8.5,2.9,17.6,4.3,27.4,4.3c19.9,0,40.9-5.7,63.1-17.1\n      c22.2-11.4,44.8-29,67.8-52.6c5.9-6.1,10.9-12.3,15.3-18.5c4.3-6.2,8.2-13,11.5-20.2c3.3-7.2,6.3-15.2,9-24.1\n      c2.7-8.8,5.3-19,7.9-30.4c1.2-4.9,2.5-10.1,4.1-15.6c1.4-5.5,2.1-10.6,2.1-15.6C1067.2,543.8,1066.4,537.4,1064.7,531.3\n       M685.5,750.6c-6.8-4.7-12.7-10.7-17.9-18.1c-5.2-7.4-9.3-16-12.4-25.7c-3.1-9.7-4.6-20.3-4.6-31.6c0-11.8,2-24.7,5.9-38.6\n      c4-13.9,10.4-29.4,19.4-46.4h1.6c0.4,4.3,1.6,9.5,3.5,15.7c2,6.2,4.4,13,7.2,20.6c2.9,7.5,5.9,15.6,9.1,24.2\n      c3.2,8.6,6.1,17.3,8.9,26.1c2.7,8.8,5,17.7,6.8,26.5c1.8,8.8,2.7,17.3,2.7,25.3c0,6.9-0.7,12.7-2,17.3c-1.4,4.7-3.2,8.9-5.4,12.7\n      l-1.6,0.8C699.4,758.2,692.3,755.3,685.5,750.6", 1, "secondary_color"], ["d", "M871.7,1071.1c-0.6,0.7-1.1,1.1-1.4,1.1c-0.4,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.3\n      c0.2-1.2,0.5-2.6,0.7-4.3c0.4-1.7,0.8-3.4,1.3-5.2c0.5-1.8,1.1-3.5,1.8-5.1c0.7-1.6,1.7-3.1,3-4.4c4.1-4.1,8.9-7.8,14.4-11.2\n      c5.6-3.4,11.4-6.6,17.5-9.6c6.1-3,12.4-5.8,18.8-8.4c6.3-2.8,12.4-5.5,18.3-8.2c5.9-2.7,11.3-5.5,16.3-8.3c5-2.9,9.2-5.9,12.6-9.1\n      c0.7-0.7,1.3-1.1,1.6-1.1c0.2,0,0.4,0.2,0.4,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.4c-0.4,1.1-0.8,2.5-1.3,4.1c-0.5,1.8-1,3.6-1.7,5.5\n      c-0.7,1.8-1.4,3.6-2.2,5.4c-0.8,1.7-1.7,3.1-2.7,4c-3.1,3-7,5.8-11.7,8.4c-4.7,2.6-9.9,5.3-15.6,7.9c-5.7,2.6-11.7,5.4-17.9,8.3\n      c-6.3,2.9-12.5,6-18.7,9.3c-6.2,3.3-12.2,7-17.9,10.9C881.4,1061.8,876.3,1066.2,871.7,1071.1", 1, "primary_color"], ["d", "M1048.9,807.5c11.7-3.2,21.8-6.9,30.3-11.1c8.5-4.2,15.2-9,20.2-14.4v-0.2c-2.6-0.2-4.8-0.5-6.7-0.9\n      c-1.9-0.4-3.5-1-4.8-1.9c-1.3-0.8-2.2-1.9-2.8-3.3c-0.6-1.4-0.9-3.1-0.9-5.1c0-2.2,0.4-4.5,1.3-6.8c0.9-2.3,2-4.4,3.5-6.2\n      c1.5-1.9,3.3-3.4,5.4-4.6c2.1-1.2,4.3-1.8,6.8-1.8c1.7,0,3.3,0.5,4.7,1.4c1.4,0.9,2.5,2.1,3.4,3.6c0.9,1.5,1.6,3.2,2.1,5.2\n      c0.5,2,0.7,4,0.7,6c0,1.7-0.2,3.4-0.6,5v0.4c3.4,0.4,5.5,0.9,6.5,1.5c1,0.6,1.5,1.4,1.5,2.4c0,1.1-0.3,2.3-0.8,3.7\n      c-0.6,1.4-1.2,2.7-2,4h-0.6c-0.9-0.7-2.1-1.3-3.6-1.8c-1.5-0.4-3.3-0.7-5.5-0.7c-1.8,3.2-4,6-6.5,8.5c-2.5,2.5-5.3,4.8-8.1,6.8\n      c-2.8,2-5.8,3.7-8.7,5.1c-2.9,1.4-5.8,2.6-8.4,3.5c-2.7,0.9-5.1,1.6-7.2,2.1c-2.1,0.4-3.8,0.7-5,0.7c-1.3,0-2.5-0.1-3.6-0.3\n      c-1.1-0.2-2.1-0.3-3.1-0.3c-1.3,0-2.7,0.2-4.2,0.5c-1.5,0.3-2.5,0.5-3.2,0.5c-0.4,0-0.8-0.1-1.1-0.2c-0.3-0.1-0.5-0.3-0.5-0.5\n      C1047.4,808,1047.9,807.7,1048.9,807.5 M1107.4,772.3c-0.5-3.7-1.5-6.6-3.1-8.7c-1.6-2.1-3.8-3.2-6.8-3.2c-1.4,0-2.7,0.2-3.8,0.6\n      c-1.1,0.4-2,0.8-2.7,1.4c-0.7,0.5-1.3,1.1-1.7,1.7c-0.4,0.6-0.6,1.1-0.6,1.6c0,1.4,0.5,2.6,1.4,3.5c0.9,0.9,2.2,1.6,3.8,2.1\n      c1.6,0.5,3.6,0.9,5.8,1.1c2.3,0.2,4.8,0.3,7.5,0.3L1107.4,772.3z", 1, "primary_color"], ["d", "M509.1,839.5c-0.6,0.7-1.1,1.1-1.4,1.1c-0.4,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.3\n      c0.2-1.2,0.5-2.6,0.7-4.3c0.4-1.7,0.8-3.4,1.2-5.2c0.5-1.8,1.1-3.5,1.8-5.1c0.7-1.6,1.7-3.1,3-4.4c4-4,8.8-7.8,14.3-11.1\n      c5.5-3.4,11.3-6.6,17.4-9.5c6.1-3,12.3-5.8,18.7-8.4c6.3-2.7,12.3-5.4,18.2-8.1c5.8-2.7,11.2-5.4,16.2-8.3c5-2.8,9.1-5.9,12.5-9.1\n      c0.7-0.7,1.2-1.1,1.6-1.1c0.2,0,0.4,0.2,0.4,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.4c-0.4,1.1-0.8,2.4-1.2,4.1c-0.5,1.8-1,3.6-1.7,5.4\n      c-0.7,1.8-1.4,3.6-2.2,5.3c-0.8,1.7-1.7,3.1-2.7,4c-3.1,3-7,5.8-11.7,8.4c-4.7,2.6-9.9,5.2-15.5,7.8c-5.6,2.6-11.6,5.3-17.8,8.2\n      c-6.2,2.8-12.4,5.9-18.6,9.3c-6.2,3.3-12.1,6.9-17.7,10.9C518.7,830.3,513.7,834.7,509.1,839.5", 1, "darker"], ["d", "M669.3,475.8c-0.6,0.8-1.2,1.2-1.5,1.2c-0.4,0-0.6-0.5-0.6-1.3v-0.8c0.1-0.3,0.3-1.1,0.6-2.5\n      c0.3-1.3,0.5-2.8,0.8-4.6c0.4-1.8,0.8-3.7,1.3-5.6c0.5-1.9,1.2-3.7,1.9-5.5c0.8-1.7,1.9-3.3,3.3-4.7c4.4-4.4,9.5-8.4,15.5-12\n      c6-3.7,12.2-7.1,18.7-10.3c6.5-3.2,13.3-6.3,20.2-9.2c6.8-2.8,13.4-5.7,19.7-8.5c6.3-2.9,12.2-5.9,17.5-8.9\n      c5.3-3.1,9.8-6.3,13.4-9.8c0.8-0.8,1.3-1.2,1.7-1.2c0.3,0,0.4,0.2,0.4,0.6v0.2c-0.1,0.1-0.2,0.3-0.2,0.4c-0.4,1.2-0.8,2.6-1.3,4.4\n      c-0.5,1.9-1.1,3.9-1.8,5.9c-0.7,2-1.5,3.9-2.4,5.8c-0.9,1.9-1.9,3.3-2.9,4.3c-3.3,3.2-7.5,6.2-12.6,9c-5.1,2.8-10.6,5.6-16.7,8.5\n      c-6.1,2.8-12.5,5.8-19.2,8.8c-6.7,3.1-13.4,6.4-20.1,10c-6.7,3.6-13,7.5-19.1,11.7C679.7,465.8,674.2,470.5,669.3,475.8", 1, "darker"], ["d", "M746.1,340.6c-0.7,0.9-1.3,1.3-1.8,1.3c-0.4,0-0.7-0.5-0.7-1.5v-0.9c0.1-0.3,0.4-1.2,0.7-2.8\n      c0.3-1.5,0.6-3.2,0.9-5.3c0.4-2,1-4.2,1.5-6.3c0.6-2.2,1.3-4.3,2.2-6.2c0.9-2,2.1-3.7,3.7-5.4c5-5,10.8-9.5,17.6-13.7\n      c6.8-4.2,13.9-8.1,21.3-11.7c7.4-3.6,15.1-7.1,23-10.5c7.7-3.2,15.2-6.5,22.4-9.7c7.2-3.3,13.9-6.7,19.9-10.2\n      c6-3.5,11.1-7.2,15.2-11.2c0.9-0.9,1.5-1.3,2-1.3c0.3,0,0.4,0.2,0.4,0.7v0.2c-0.1,0.1-0.2,0.3-0.2,0.4c-0.4,1.3-1,3-1.5,5\n      c-0.6,2.2-1.3,4.4-2.1,6.7c-0.8,2.3-1.7,4.4-2.7,6.6c-1,2.1-2.1,3.8-3.3,4.9c-3.8,3.6-8.6,7.1-14.3,10.3c-5.8,3.2-12.1,6.4-19,9.6\n      c-6.9,3.2-14.2,6.6-21.9,10.1c-7.7,3.5-15.3,7.3-22.9,11.4c-7.6,4.1-14.8,8.5-21.8,13.3C757.8,329.2,751.6,334.6,746.1,340.6", 1, "darker"], ["d", "M264.8,675.4c20.6-5.6,38.3-12.2,53.2-19.7c14.9-7.5,26.7-16,35.4-25.5v-0.3c-4.5-0.3-8.4-0.9-11.8-1.6\n      c-3.4-0.7-6.2-1.8-8.4-3.3c-2.2-1.5-3.9-3.4-5-5.8c-1.1-2.4-1.6-5.4-1.6-9.1c0-4,0.8-8,2.3-12c1.5-4.1,3.6-7.7,6.2-11\n      c2.6-3.3,5.8-6,9.4-8.1c3.6-2.1,7.6-3.1,11.9-3.1c3,0,5.8,0.8,8.2,2.5c2.4,1.6,4.4,3.8,6,6.4c1.6,2.6,2.9,5.7,3.8,9.1\n      c0.9,3.5,1.3,7,1.3,10.6c0,3-0.3,5.9-1,8.9v0.7c5.9,0.7,9.7,1.5,11.4,2.6c1.7,1.1,2.6,2.5,2.6,4.3c0,1.9-0.5,4-1.5,6.5\n      c-1,2.5-2.1,4.8-3.4,7h-1c-1.6-1.3-3.8-2.4-6.4-3.1c-2.6-0.8-5.8-1.2-9.6-1.2c-3.2,5.6-7,10.6-11.4,15.1c-4.5,4.4-9.2,8.4-14.2,12\n      c-5,3.5-10.1,6.5-15.3,9.1c-5.2,2.5-10.1,4.6-14.8,6.3c-4.7,1.6-8.9,2.8-12.7,3.6c-3.8,0.8-6.7,1.2-8.7,1.2c-2.3,0-4.4-0.2-6.4-0.5\n      c-2-0.3-3.8-0.5-5.4-0.5c-2.3,0-4.7,0.3-7.4,0.8c-2.6,0.5-4.5,0.8-5.6,0.8c-0.8,0-1.4-0.1-2-0.3c-0.5-0.2-0.8-0.5-0.8-0.8\n      C262.2,676.3,263.1,675.8,264.8,675.4 M367.5,613.1c-0.9-6.5-2.7-11.6-5.5-15.4c-2.8-3.8-6.7-5.7-11.8-5.7c-2.5,0-4.7,0.3-6.6,1\n      c-1.9,0.7-3.5,1.5-4.8,2.4c-1.3,0.9-2.3,2-2.9,3.1c-0.7,1.1-1,2-1,2.8c0,2.5,0.8,4.6,2.4,6.2c1.6,1.6,3.8,2.9,6.6,3.8\n      c2.8,0.9,6.2,1.6,10.2,2c4,0.4,8.4,0.6,13.2,0.6L367.5,613.1z", 1, "darker"], ["d", "M1102.3,567c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.2,0.7-0.4,1.3c-0.3,0.6-0.6,1.3-1,2.1\n      c-0.4,0.8-0.8,1.6-1.2,2.4c-0.4,0.9-0.8,1.7-1,2.4l0.2,0.2c1.7-0.8,3.2-1.3,4.7-1.6c1.5-0.3,3-0.5,4.4-0.5c3.6,0,6.5,1.3,8.8,3.8\n      c2.3,2.5,3.4,6,3.4,10.3c0,2.9-0.4,5.6-1.1,8c-0.7,2.4-1.7,4.4-3,6.2c-1.2,1.7-2.7,3-4.3,4c-1.7,0.9-3.4,1.4-5.4,1.4\n      c-1.8,0-3.5-0.4-5.3-1.2c-1.8-0.8-3.3-2-4.8-3.5c-1.4-1.5-2.6-3.4-3.5-5.6c-0.9-2.2-1.3-4.7-1.3-7.5c0-4.1,0.8-8.3,2.5-12.5\n      C1097,573.6,1099.3,570,1102.3,567 M1097.8,580.4c-0.6,1.1-1,2.1-1.2,3c-0.2,0.9-0.3,1.7-0.3,2.4c0,1.3,0.3,2.8,0.8,4.4\n      c0.5,1.6,1.3,3,2.3,4.3c1,1.3,2.3,2.5,3.8,3.3c1.5,0.9,3.2,1.3,5.1,1.3c0.8,0,1.8-0.2,2.9-0.6c1.1-0.4,2.1-0.9,3.1-1.5\n      c1-0.6,1.8-1.4,2.4-2.3c0.7-0.9,1-1.8,1-2.7c0-1.1-0.3-2.2-0.8-3.2c-0.5-1-1.3-2-2.2-2.8c-1-0.8-2.1-1.4-3.3-1.9\n      c-1.2-0.5-2.6-0.7-4-0.7c-1.1,0-2.2,0.1-3.1,0.4c-0.9,0.3-1.7,0.5-2.3,0.8c-0.7,0.3-1.2,0.5-1.7,0.7c-0.4,0.3-0.6,0.4-0.8,0.4\n      c-0.3,0-0.6-0.3-0.8-1c-0.2-0.5-0.3-1-0.4-1.5c-0.1-0.5-0.1-1-0.1-1.3c0-0.6,0.1-1.1,0.2-1.3L1097.8,580.4z", 1, "primary_color"], ["d", "M741,1133.1c-0.6,0.7-1,1-1.4,1c-0.3,0-0.5-0.4-0.5-1.2v-0.7c0.1-0.2,0.3-1,0.5-2.2c0.2-1.1,0.5-2.5,0.7-4.1\n      c0.3-1.6,0.7-3.3,1.2-5c0.5-1.7,1-3.4,1.7-4.9c0.7-1.6,1.7-2.9,2.9-4.2c3.9-3.9,8.5-7.5,13.8-10.7c5.3-3.2,10.9-6.3,16.7-9.2\n      c5.8-2.9,11.8-5.6,18-8.2c6.1-2.5,11.9-5.1,17.6-7.6c5.7-2.6,10.9-5.2,15.6-8c4.7-2.7,8.7-5.6,11.9-8.7c0.7-0.7,1.2-1,1.5-1\n      c0.2,0,0.3,0.2,0.3,0.5v0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.3,1-0.7,2.3-1.2,3.9c-0.5,1.7-1,3.5-1.6,5.2c-0.6,1.8-1.3,3.5-2.1,5.1\n      c-0.8,1.7-1.7,3-2.6,3.9c-3,2.9-6.7,5.5-11.2,8.1c-4.5,2.5-9.5,5-14.9,7.5c-5.4,2.5-11.1,5.1-17.1,7.9c-6,2.7-12,5.7-17.9,8.9\n      c-5.9,3.2-11.6,6.7-17.1,10.5C750.3,1124.2,745.4,1128.4,741,1133.1", 1, "primary_color"], ["d", "M978,824.8c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.3-0.1,0.7-0.4,1.3c-0.3,0.6-0.6,1.3-1,2.1\n      c-0.4,0.8-0.8,1.6-1.2,2.4c-0.4,0.9-0.7,1.7-1,2.4l0.2,0.2c1.7-0.8,3.2-1.3,4.7-1.6c1.5-0.3,3-0.5,4.4-0.5c3.6,0,6.5,1.3,8.8,3.8\n      c2.3,2.5,3.4,6,3.4,10.3c0,2.9-0.4,5.6-1.1,8c-0.7,2.4-1.7,4.4-3,6.2c-1.2,1.7-2.7,3-4.3,4c-1.7,0.9-3.4,1.4-5.3,1.4\n      c-1.8,0-3.5-0.4-5.3-1.2c-1.8-0.8-3.3-2-4.8-3.5c-1.4-1.5-2.6-3.4-3.5-5.6c-0.9-2.2-1.3-4.7-1.3-7.5c0-4.1,0.8-8.3,2.5-12.5\n      C972.7,831.4,975,827.8,978,824.8 M973.4,838.2c-0.6,1.1-1,2.1-1.2,3c-0.2,0.9-0.3,1.7-0.3,2.4c0,1.3,0.3,2.8,0.8,4.4\n      c0.5,1.6,1.3,3,2.3,4.3c1,1.3,2.3,2.4,3.8,3.3c1.5,0.9,3.2,1.3,5.1,1.3c0.8,0,1.8-0.2,2.9-0.6c1.1-0.4,2.1-0.9,3.1-1.5\n      c1-0.6,1.8-1.4,2.4-2.3c0.7-0.9,1-1.8,1-2.7c0-1.1-0.3-2.1-0.8-3.2c-0.5-1-1.3-2-2.2-2.8c-1-0.8-2-1.4-3.3-1.9\n      c-1.2-0.5-2.6-0.7-4-0.7c-1.1,0-2.2,0.1-3.1,0.4c-0.9,0.3-1.7,0.5-2.3,0.8c-0.7,0.3-1.2,0.5-1.7,0.7c-0.4,0.3-0.6,0.4-0.8,0.4\n      c-0.3,0-0.6-0.3-0.8-0.9c-0.2-0.5-0.3-1-0.4-1.5c-0.1-0.5-0.1-1-0.1-1.3c0-0.6,0.1-1.1,0.2-1.3L973.4,838.2z", 1, "primary_color"], ["d", "M1285.7,960.4c0,0,6.9-5.8,17.6-15c10.2-9.4,24-22.5,36.8-37.1c6.7-7.2,12.6-14.8,18.5-22\n      c2.9-3.6,5.8-7.2,8.3-10.6c2.5-3.5,4.9-6.8,7-9.8c4.3-6.2,8.1-11.4,10.5-15.1c2.4-3.8,3.7-5.9,3.7-5.9c2.1-3.7,4.8-8.5,6.9-12.3\n      l1.2,0.1c0.9,4,3.5,9.3,5,13.4c0,0,1,2.5,2.8,6.8c1.7,4.3,3.9,10.5,6.6,18.1c1.3,3.8,2.8,8,4.3,12.4c1.5,4.4,2.8,9.1,4.2,14\n      c2.8,9.8,6.1,20.5,8.3,31.3c2.4,10.8,5.1,21.9,6.6,32.4c0.9,5.3,1.7,10.4,2.5,15.2c0.8,4.9,1.5,9.5,1.9,13.8c1.9,17.1,3,29,3,29\n      s-8.3,8.3-20.6,20.1c-1.5,1.5-3.2,3-4.8,4.6c-1.7,1.5-3.5,3.1-5.4,4.7c-3.7,3.2-7.5,6.5-11.5,10c-7.8,6.9-16.8,13.7-25.6,20.4\n      c-8.6,6.8-17.8,12.9-26.2,18.6c-4.2,2.8-8.1,5.6-12.1,8c-3.9,2.4-7.7,4.6-11.1,6.7c-6.9,4.1-12.4,7.5-16.6,9.6\n      c-4.1,2.2-6.4,3.4-6.4,3.4c-3.9,1.4-8.8,4.2-12.3,7.1l-1-0.7c1.2-4.7,2.2-10.2,2.2-14.2c0,0,0.3-2.6,0.9-7c0.7-4.4,1.1-11,1.8-18.6\n      c0.3-3.8,0.6-7.9,0.9-12.3c0.3-4.3,0.3-9,0.5-13.7c0.2-9.5,0.5-19.3,0-29.3c-0.3-9.9-0.7-19.5-1.7-28.6c-0.9-9.1-1.6-17.2-2.8-24.3\n      c-1.1-7-2.1-12.8-2.7-16.8c-0.3-2-0.6-3.6-0.8-4.6C1285.8,961,1285.7,960.4,1285.7,960.4", 1, "primary_color"], ["d", "M229.3,779.5c0,0-5,8.7-12.6,22.5c-0.9,1.7-1.9,3.5-3,5.4c-0.9,1.9-1.9,3.8-2.9,5.8c-2,4.1-4,8.4-6.2,12.8\n      c-2.1,4.5-4.5,9.2-6.5,14c-2,4.9-4,9.8-6,14.8c-2,5-4.1,10.1-6,15.2c-1.7,5.1-3.4,10.1-5.1,14.9c-1.6,5-3.2,9.8-4.7,14.3\n      c-1.5,4.6-2.5,8.9-3.7,13c-2.2,8.2-4,15-5.2,19.8c-0.7,2.4-1,4.3-1.3,5.6c-0.3,1.3-0.4,2-0.4,2c-0.8,4.7-1.7,10.8-2.5,15.5\n      l-1.2,0.4c-2.5-3.8-7.2-8.4-10.3-12.1c0,0-0.5-0.5-1.5-1.6c-1-1-2.4-2.5-4-4.5c-3.3-4-8.1-9.7-13.9-16.5c-2.8-3.5-6.1-7.2-9.2-11.4\n      c-3.1-4.2-6.4-8.6-9.8-13.1c-3.4-4.7-6.9-9.5-10.5-14.4c-3.3-5.1-6.7-10.2-10.1-15.3c-3.4-5.3-6.8-10.5-10.1-15.7\n      c-3.2-5.3-6.2-10.5-9.1-15.6c-5.8-10.3-11.5-20.1-15.6-28.7c-4.3-8.7-7.8-15.9-10.3-21c-1.2-2.6-2.2-4.6-2.9-6\n      c-0.7-1.4-1-2.1-1-2.1s5.5-11.9,13.9-28.9c1-2.1,2.1-4.3,3.3-6.6c1.2-2.3,2.5-4.6,3.8-7c2.6-4.7,5.4-9.7,8.3-14.9\n      c2.9-5.1,5.7-10.3,9-15.5c3.3-5.1,6.6-10.4,9.9-15.6c3.4-5.2,6.6-10.3,10-15.2c3.5-4.9,7-9.6,10.3-14.3c3.3-4.5,6.5-8.9,9.6-13\n      c3.1-4.1,6.3-7.8,9.1-11.3c5.6-6.8,10.3-12.5,13.6-16.4c1.6-2,3-3.4,4-4.5c0.9-1,1.4-1.6,1.4-1.6c3.5-3,7.7-7.7,10.3-12.2l1.3,0.4\n      c0.5,5.3,1.5,11.5,3.1,15.7c0,0,0.1,0.7,0.4,2c0.3,1.3,0.6,3.2,1.3,5.7c1.3,4.9,3.1,11.8,5.3,20.2c1.2,4.1,2.2,8.5,3.7,13.2\n      c1.5,4.6,3.1,9.5,4.8,14.5c1.7,4.9,3.4,10,5.2,15.2c1.9,5.1,4,10.3,6.1,15.4c2.1,5,4.1,10.1,6.1,15c2.1,4.9,4.5,9.7,6.6,14.2\n      c4.4,9.1,8.2,17.4,12.3,24.4c3.8,6.9,7.1,12.6,9.3,16.6c1.1,2,2,3.5,2.6,4.6C228.9,779,229.3,779.5,229.3,779.5", 1, "primary_color"], ["d", "M355.7,430.8c0,0-0.6,0.2-1.8,0.6c-1.1,0.4-2.9,0.9-4.9,1.7c-4.2,1.6-10.2,3.9-17.4,6.7\n      c-3.6,1.5-7.7,2.9-11.8,4.8c-4.1,1.9-8.4,3.8-12.9,5.9c-4.5,2.1-9.3,4.2-14,6.6c-4.7,2.5-9.4,5-14.1,7.5c-4.8,2.6-9.6,5.1-14.3,7.8\n      c-4.6,2.8-9.1,5.5-13.5,8.2c-4.4,2.7-8.7,5.4-12.8,7.9c-4,2.6-7.6,5.2-11.1,7.6c-7,4.9-12.7,9-16.8,11.8c-3.9,3-6.2,4.7-6.2,4.7\n      c-3.6,3.1-8.3,7.1-11.9,10.2l-1.2-0.5c0.6-4.5-0.1-11-0.1-15.9c0,0-0.1-3-0.3-8.2c0-5.2,0-12.6,0-21.5c0.1-4.5,0-9.5,0.2-14.6\n      c0.3-5.2,0.6-10.6,0.9-16.3c0.4-5.8,0.8-11.7,1.2-17.7c0.7-6,1.4-12.1,2.1-18.2c0.8-6.2,1.6-12.4,2.3-18.5c1-6.1,2.1-12.1,3.1-17.9\n      c1.1-5.9,2.1-11.6,3.1-16.9c1.1-5.4,2.3-10.4,3.4-15.1c2.3-9.4,4.2-17.3,5.5-22.8c1.6-5.5,2.4-8.6,2.4-8.6s2.9-1.4,8.1-3.8\n      c5.1-2.3,12.3-5.8,21.1-9.5c8.9-3.6,19.2-7.7,30.1-11.9c11-4,23-7.9,34.5-11.7c11.8-3.6,23.7-6.6,34.5-9.5c11-2.7,21.4-4.7,30-6.6\n      c8.6-1.9,16-2.9,21.1-3.7c5.1-0.8,8-1.2,8-1.2c4.6,0,10.7-1.2,15.6-2.9l0.7,1.1c-3.1,4.3-6.1,9.9-7.6,14.1c0,0-1.3,2.6-3.6,7.1\n      c-2.3,4.5-5.6,10.8-9,18.7c-3.4,7.9-7.6,16.8-11.4,26.6c-3.7,10-7.7,20.2-11.1,30.7c-3.3,10.6-6.5,20.8-9.1,30.6\n      c-2.5,9.9-4.6,18.9-6.4,26.6C357.3,420.7,355.7,430.8,355.7,430.8", 1, "primary_color"], ["d", "M676.6,244.8c0,0-2.4-0.9-6.6-2.5c-4.2-1.6-10.3-4-17.7-6.2c-7.4-2.3-16.2-5.2-25.8-7.8\n      c-9.5-2.4-20-5.1-30.6-7.3c-10.5-2-21.3-4-31.6-5.6c-10.2-1.3-19.8-2.5-28.3-3.4c-8.4-0.9-15.4-1.1-20.4-1.5\n      c-5-0.3-7.8-0.4-7.8-0.4c-4.7,0-11-0.1-15.7,0.1l-0.6-1.2c3.2-3.3,7-8.5,10.2-12.2c0,0,1.8-2.3,5-6.4c3.3-4,7.8-10,13.7-16.7\n      c5.9-6.7,12.9-14.5,20.7-23c7.9-8.1,16.7-16.7,25.6-25.4c9.1-8.3,18.5-16.6,27.6-24.4c9.1-7.5,18-14.3,25.6-20.2\n      c7.6-6.1,14.3-10.4,19-13.7c4.7-3.2,7.4-5.1,7.4-5.1s3.1,0.8,8.6,2.2c5.4,1.3,13.2,3.6,22.3,6.5c18.3,5.4,42,13.9,64.6,23.4\n      c11.3,5,22.4,9.9,32.5,14.8c10.1,5.2,19.4,10.1,27.2,14.2c7.8,4.2,14.1,8.2,18.5,10.8c4.4,2.6,6.9,4.2,6.9,4.2\n      c3.5,3,9,5.8,13.8,7.8l-0.1,1.3c-5.2,1.2-11,3.6-14.9,5.9c0,0-2.7,1.1-7.3,3.1c-4.6,2.1-11.2,4.7-18.9,8.5\n      c-7.7,3.8-16.6,8.3-25.9,13.1c-9.3,5.1-18.9,10.8-28.3,16.4c-4.7,2.7-9.3,6-13.7,8.9c-4.4,3-8.7,5.9-12.9,8.7\n      c-4.2,2.7-8.1,5.7-11.7,8.5c-3.6,2.8-7,5.4-10.2,7.8c-3.1,2.4-5.9,4.6-8.4,6.6c-2.5,2-4.6,3.9-6.3,5.4\n      C678.6,243.1,676.6,244.8,676.6,244.8", 1, "primary_color"], ["d", "M1042.1,308.6c0,0-1.2-2.2-3.4-6.2c-1.1-2-2.5-4.4-4-7.1c-1.6-2.7-3.5-5.6-5.6-9c-2.1-3.3-4.4-6.9-6.8-10.7\n      c-2.5-3.8-5-7.9-8-11.8c-2.9-4-5.9-8.2-9-12.4c-3.2-4.2-6.3-8.8-9.7-12.8c-6.8-8.3-13.7-16.9-20.6-24.6\n      c-6.9-7.6-13.6-14.7-19.5-20.9c-5.9-5.9-11.1-10.7-14.7-14.2c-3.6-3.4-5.7-5.4-5.7-5.4c-1.8-1.6-3.9-3.3-6-5.1\n      c-2.1-1.7-4.3-3.3-6.1-4.8l0.3-1.3c2.3-0.2,5-0.7,7.7-1.3c2.7-0.5,5.5-1.1,7.9-1.5c0,0,2.9-0.6,7.9-1.6c5.1-1,12.4-2.5,21.3-4\n      c8.8-1.3,19.2-2.8,30.7-4.2c11.3-1.3,23.5-2.1,36-3c12.4-0.7,24.8-0.8,36.8-1c11.9,0,22.9,0.6,32.6,0.9c9.7,0.3,17.7,1.1,23.4,1.6\n      c5.7,0.5,8.9,0.8,8.9,0.8s1.9,2.6,5.2,7.2c3.3,4.4,7.8,11.3,12.9,19.3c5.2,8.1,11.2,17.1,17,27.5c2.9,5.1,5.9,10.3,8.9,15.7\n      c1.5,2.7,3,5.3,4.4,8c1.4,2.8,2.8,5.5,4.2,8.3c11.3,21.8,20.6,44.1,27.1,60.6c6.2,16.8,9.9,27.7,9.9,27.7c0.8,4.5,2.8,10.5,5.3,15\n      l-1,0.9c-4.9-2.3-10.6-4.5-15-5.3c0,0-11.3-3.4-27.7-7.9c-16.7-4.2-38.6-9.1-60.4-12.2c-21.8-3.2-43.2-4.8-59-5.2\n      c-3.9-0.1-7.5-0.3-10.7-0.4c-3.2,0-6,0.1-8.3,0.1C1044.7,308.5,1042.1,308.6,1042.1,308.6", 1, "primary_color"], ["d", "M1281.3,592.4c0,0,1.7-9.8,4.2-25.4c0.3-1.9,0.6-4,0.9-6.1c0.2-2.1,0.5-4.2,0.7-6.5c0.5-4.5,0.9-9.3,1.4-14.2\n      c1.1-10,1.4-20.5,1.9-31.4c0.6-10.9,0.2-21.7,0-32.1c-0.2-5.2-0.2-10.3-0.5-15c-0.4-4.8-0.7-9.3-1-13.4c-0.7-8.4-1.2-15.6-1.9-20.4\n      c-0.7-4.9-1-7.7-1-7.7c-0.9-4.7-2-10.8-2.9-15.4l1.1-0.8c3.6,2.8,9.5,5.4,13.7,7.9c0,0,2.6,1.4,7.2,3.8c4.7,2.4,10.9,6.2,18.7,10.7\n      c3.9,2.3,8.1,4.8,12.6,7.5c4.5,2.7,8.9,5.8,13.7,8.9c4.8,3.2,9.7,6.5,14.7,9.9c5.1,3.4,9.8,7.2,14.8,10.9c5,3.8,10,7.6,14.8,11.3\n      c5,3.8,9.4,7.8,14,11.6c9,7.7,17.7,14.9,24.5,21.6c7,6.7,12.8,12.3,16.9,16.2c2.1,2,3.7,3.6,4.8,4.7c1,1.1,1.6,1.7,1.6,1.7\n      s-1.1,13.1-3.1,31.9c-2.5,19-6.3,43.8-12,67.8c-2.4,11.9-6,23.8-9,34.6c-1.6,5.4-2.9,10.6-4.6,15.5c-1.7,4.9-3.2,9.5-4.7,13.7\n      c-3,8.4-5.3,15.3-7.2,20.1c-2,4.8-3.1,7.5-3.1,7.5c-2.3,4-4.6,9.9-5.5,14.9l-1.3,0.1c-2.3-4.9-5.4-10.3-8.3-13.7\n      c0,0-1.5-2.4-4.2-6.7c-2.7-4.2-7-10.2-11.9-17.2c-2.5-3.5-5.1-7.2-8-11.1c-2.8-3.9-6.2-7.9-9.4-12.1c-6.6-8.2-13.3-16.8-21-25\n      c-7.5-8.2-14.5-16.2-22-23.2c-3.6-3.5-7.1-6.9-10.4-10.1c-3.3-3.2-6.3-6.1-9.4-8.7C1289.1,598.9,1281.3,592.4,1281.3,592.4", 1, "primary_color"], ["d", "M220.9,1214.6c0,5.8-1.2,10.4-3.7,13.9c-3.1,4.4-7.9,6.5-14.4,6.5c-6.4,0-11.1-2.1-14.3-6.5\n      c-2.6-3.5-3.8-8.1-3.8-13.9c0-5.7,1.2-10.3,3.8-13.8c3.1-4.3,7.8-6.4,14.3-6.4c6.4,0,11.2,2.1,14.4,6.4\n      C219.7,1204.3,220.9,1208.9,220.9,1214.6 M201.4,1182.2c0,2.5-2.1,4.6-4.7,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2-4.5,4.5-4.5\n      C199.2,1177.7,201.4,1179.7,201.4,1182.2 M212.6,1214.6c0-8.7-3.3-13.1-9.8-13.1c-6.4,0-9.6,4.4-9.6,13.1c0,8.8,3.2,13.3,9.6,13.3\n      C209.3,1227.9,212.6,1223.4,212.6,1214.6 M213.3,1182.2c0,2.5-2.1,4.6-4.5,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.5,4.6-4.5\n      C211.2,1177.7,213.3,1179.7,213.3,1182.2", 1, "st3"], ["d", "M264,1235h-35.4l5.1-7.3h21.9v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.4,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1V1235z", 1, "st3"], ["d", "M306,1231.5c-0.1,6.2-1.6,11-4.7,14.5c-3.3,4-8.1,6.1-14.4,6.1c-4.5,0-7.9-0.8-10.4-2.3l-3.7-8.2\n      c5.1,2.4,9.8,3.4,14.2,3.1c6.4-0.4,10-3.9,10.7-10.6c-2.6,1.4-5.3,2.1-8.5,2.1c-6.2,0-10.8-2.1-13.7-6.4c-2.4-3.5-3.7-7.9-3.7-13.6\n      c0-5.6,1.2-10.2,3.7-13.6c2.9-4.2,7.6-6.3,13.7-6.3c6.8,0,11.6,2.4,14.4,7.3c2,3.7,2.9,8.9,2.9,15.8c0,1.7,0,3.9-0.1,6.5\n      C306.1,1228.8,306,1230.6,306,1231.5 M298,1216.3c0-8.5-2.9-12.7-8.9-12.7c-6,0-9,4.2-9,12.7c0,8.4,3,12.6,9,12.6\n      C295,1228.9,298,1224.7,298,1216.3", 1, "st3"], ["d", "M361.5,1235H314l5.1-7.3H341v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.5,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1v17.4h12.1V1235z", 1, "st3"], ["d", "M419,1235h-59.7v-7.3h40v-3.2c0-6.8-0.6-11.7-1.9-14.7c-2-5-5.9-7.5-11.8-7.5c-4.9,0-9.4,2.3-13.5,6.9\n      l-6.1-5.6c6-5.8,12.5-8.7,19.6-8.7c9,0,15.2,3.3,18.7,9.8c2.4,4.5,3.6,11.2,3.6,19.9v3H419V1235z", 1, "st3"], ["d", "M478.1,1235h-1.2c-5.3,0-9.4-1.9-12.2-5.6c-2.1,7.5-8.7,11.9-17.3,11.9c-8.1,0-14.6-3.9-17-10.7\n      c-2.6,2.9-6.2,4.5-11.1,4.5h-2.9v-7.5h2.3c6.3,0,9.9-2.9,10.6-8.6c1.5-10.4,7.5-15.6,18-15.6c5.8,0,10.1,1.3,12.9,4\n      c2.6,2.4,4.2,6.3,5,11.6c1,5.8,4.6,8.7,11,8.7l1.8-0.2V1235z M456.7,1222.3c0-7.9-3.1-11.9-9.4-11.9c-6.3,0-9.4,3.9-9.4,11.9\n      c0,7.9,3.1,11.9,9.4,11.9C453.6,1234.1,456.7,1230.2,456.7,1222.3", 1, "st3"], ["d", "M498.7,1219.2c0,4.5-1.5,8.3-4.5,11.3c-3,2.9-7.1,4.5-12.2,4.5h-5.7v-7.5h5.3c5.8,0,8.7-3,8.7-9.1v-38.2\n      l8.5-2.5V1219.2z", 1, "st3"], ["points", "514.8,1235 506.3,1235 506.3,1180.2 514.8,1177.5 \t", 1, "st3"], ["d", "M600.8,1235h-14.5c-0.8,11.4-8.7,17.1-23.8,17.1c-10.7,0-17.9-3.3-21.8-9.9c-2.8-4.7-4-12.1-3.8-22.4l8.4-2.5\n      v7.8c0,13.9,4.8,19.3,17.3,19.3c10.3,0,15.3-4,15.3-12.1v-26.6l8.5-2.6v24.3h14.4V1235z M566.3,1209.9c0,2.5-2.1,4.6-4.6,4.6\n      c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2.1-4.5,4.5-4.5C564.2,1205.3,566.3,1207.4,566.3,1209.9", 1, "st3"], ["d", "M635.5,1235h-5.3c-5.3,0-9.4-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7h-6.4v-7.3h5.9c6,0,8.9-3,8.9-9.1v-21.3\n      l8.4-2.5v24.1c0,5.9,2.9,8.8,8.8,8.8h4.8V1235z M616.4,1247.5c0,2.5-2.1,4.6-4.6,4.6c-2.6,0-4.5-2.1-4.5-4.6s2-4.5,4.5-4.5\n      C614.3,1242.9,616.4,1245,616.4,1247.5 M628.4,1247.5c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6s2.1-4.5,4.5-4.5\n      C626.3,1242.9,628.4,1245,628.4,1247.5", 1, "st3"], ["d", "M681.2,1235h-47.6v-7.5h9.9v-15.2c0-4.9,1.6-9.1,4.7-12.4c3.2-3.4,7.7-5.1,13.3-5.1c4.8,0,9,1.8,12.6,5.3\n      l-6.3,5.7c-2.1-2.6-4.5-3.8-7.2-3.8c-5.4,0-8.6,3.8-8.6,8.9v16.7h22.9L681.2,1235z", 1, "st3"], ["d", "M736.4,1235h-47.5l5.1-7.3h21.9v-16.9c0-5.8-3.1-8.7-9.3-8.7c-5.1,0-9.1,2.6-12,7.8v-9.6c4-3.5,8-5.3,12-5.3\n      c5.3,0,9.5,1.4,12.7,4.2c3.3,2.8,4.9,6.4,4.9,11.1v17.4h12.1V1235z", 1, "st3"], ["d", "M771,1235h-5.3c-5.3,0-9.4-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7h-6.4v-7.3h5.9c6,0,8.9-3,8.9-9.1v-21.3\n      l8.4-2.5v24.1c0,5.9,2.9,8.8,8.8,8.8h4.8V1235z M758.2,1247.6c0,2.5-2.1,4.6-4.5,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.4,2.1-4.5,4.6-4.5\n      C756.2,1243,758.2,1245.2,758.2,1247.6", 1, "st3"], ["d", "M830,1235h-1.2c-5.3,0-9.4-1.9-12.2-5.6c-2.1,7.5-8.7,11.9-17.3,11.9c-8.1,0-14.6-3.9-17-10.7\n      c-2.6,2.9-6.2,4.5-11.1,4.5h-2.8v-7.5h2.3c6.3,0,9.9-2.9,10.6-8.6c1.5-10.4,7.5-15.6,18-15.6c5.8,0,10.1,1.3,12.9,4\n      c2.6,2.4,4.2,6.3,5,11.6c1,5.8,4.6,8.7,11,8.7l1.8-0.2V1235z M808.7,1222.3c0-7.9-3.1-11.9-9.4-11.9c-6.3,0-9.4,3.9-9.4,11.9\n      c0,7.9,3.1,11.9,9.4,11.9C805.6,1234.1,808.7,1230.2,808.7,1222.3", 1, "st3"], ["d", "M850.6,1219.2c0,4.5-1.5,8.3-4.5,11.3c-3,2.9-7.1,4.5-12.2,4.5h-5.7v-7.5h5.3c5.8,0,8.7-3,8.7-9.1v-38.2\n      l8.5-2.5V1219.2z", 1, "st3"], ["points", "866.7,1235 858.3,1235 858.3,1180.2 866.7,1177.5 \t", 1, "st3"], ["d", "M933.7,1235h-9.8c-6.3,0-9.5-3.5-9.5-10.3v-8.1h-2.6c-8.8,0-14.3,6.2-14.3,15.1c0,8.2,5.4,13,14.3,13\n      c2.8,0,4.9-0.3,6.4-0.7c2-0.6,4.5-2.1,7.4-4.5l0.1,9.2c-4,2.3-8.6,3.5-13.9,3.5c-6.7,0-12.1-1.9-16.5-5.7\n      c-4.3-3.7-6.4-8.6-6.4-14.8c0-9.3,4.7-16.8,12.7-20.4v-2.9c0-4,1.2-7.4,3.7-10.2c2.5-2.8,6.1-4.2,10.6-4.2c4.2,0,7.8,1.6,10.6,4.9\n      l-5.6,5.5c-1.4-2.1-3.4-3.1-5.8-3.1c-3.5,0-5.3,2-5.3,6.1v1.9h15.8l4.4,7.4h-7.2v4.5c0,4.4,2,6.5,6.1,6.5h4.9V1235z", 1, "st3"], ["d", "M955,1173.6l-3.9,3.9c-1.2-1.7-2.8-2.5-4.6-2.5c-3.4,0-5.1,2-5.1,6v2.6h12.8v5.2H929l4.3-5.2h2.7v-1.8\n      c0-6.7,4.1-11.9,11.1-11.9C949.9,1169.8,952.6,1171.1,955,1173.6 M950.9,1219.2c0,4.5-1.5,8.4-4.5,11.3c-3,2.9-7,4.5-12.1,4.5h-2.6\n      v-7.3h2c5.9,0,8.8-3,8.8-9.1v-21.3l8.4-2.5V1219.2z", 1, "st3"], ["d", "M1015.5,1235h-6.6c-5.3,0-9.5-1.6-12.4-4.7c-3,3.1-7.2,4.7-12.7,4.7H976h-17.5l3.9-7.5h9v-43.9l8.5-2.5v46.4\n      h3.4c5.9,0,8.8-2.9,8.8-8.9v-39.2c1.3-0.3,4.2-1,8.4-2.1v41.5c0,5.8,2.9,8.6,8.9,8.6h6.1V1235z", 1, "st3"], ["d", "M1079.2,1235h-66.9v-7.5h11v-45.8l8.5-2.6v30.5c5.8-9.4,13.8-14.1,24.2-14.4c8.6-0.3,15.2,3.2,19.6,10.3\n      c2.6,4.4,3.9,10.2,3.9,17.2c0,1.3-0.1,3.4-0.2,6.2C1079.3,1231.6,1079.2,1233.7,1079.2,1235 M1071.3,1227.5c0.1-1.3,0.2-2.7,0.2-4\n      c0-5.6-1.2-10.4-3.5-14.6c-2.7-3.7-6.5-5.7-11.4-6c-6-0.3-11.6,2.7-16.8,8.6c-4.3,4.9-7,10.3-8.4,16H1071.3z", 1, "st3"], ["d", "M1150.3,1235h-5.8c-7,0-11.4-2.1-13.3-6.2c-2,4.2-6.4,6.2-13.1,6.2c-11.3,0-17-6.8-17-20.4\n      c0-13.2,5.7-19.8,17-19.8h18.1v23.8c0,6.1,2.9,9.1,8.7,9.1h5.3V1235z M1127.8,1201.7h-9.1c-3.5,0-6,1.2-7.3,3.5\n      c-1.2,1.9-1.8,5.1-1.8,9.5c0,4.4,0.6,7.6,1.8,9.5c1.3,2.4,3.8,3.6,7.3,3.6c3.5,0,6-1.2,7.3-3.6c1.2-2,1.8-5.2,1.8-9.5V1201.7z\n       M1120,1182.2c0,2.5-2.1,4.6-4.7,4.6c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.5,4.6-4.5C1117.9,1177.7,1120,1179.7,1120,1182.2\n       M1132,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.5,2-4.5,4.5-4.5C1129.8,1177.7,1132,1179.7,1132,1182.2", 1, "st3"], ["d", "M1198.8,1235h-50.5v-7.3h41.9c0.1-4.5-0.1-7.8-0.4-9.7c-0.6-3.7-2-6.6-4.3-8.6c-3-2.9-7-4.3-11.9-4.3\n      c-6.4,0-11.6,2.3-15.6,7l-5.8-5.4l27.7-28.9h11.1l-19.3,20.2c1.3-0.2,2.6-0.3,3.9-0.3c6.2,0,11.3,1.9,15.5,5.6\n      c4.2,3.7,6.7,8.6,7.4,14.7C1198.7,1219.2,1198.8,1224.9,1198.8,1235", 1, "st3"], ["d", "M1246,1235h-12.7c-1.2,10.3-8.5,17.1-20,17.1c-3.8,0-7-0.8-9.5-2.4l-4-8.4c4,2.2,8.5,3.4,13.5,3.4\n      c7.2,0,11.6-4.6,11.6-12.1v-35.3l8.5-2.5v32.7h12.6V1235z", 1, "st3"], ["d", "M1315.3,1219.7c0,9.2-6.5,15.3-16.8,15.3h-54.5v-7.5h10.5V1205l8.5-2.4v25.1h17.5v-26.6l8.5-2.5v28.9h9.1\n      c5.8,0,8.7-2.9,8.7-8.7v-21.6l8.5-2.6V1219.7z M1282.9,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.6,0-4.5-2.1-4.5-4.6c0-2.6,2-4.7,4.5-4.7\n      C1280.8,1177.5,1282.9,1179.7,1282.9,1182.2 M1289,1171.9c0,2.4-2.1,4.5-4.6,4.5c-2.5,0-4.6-2.1-4.6-4.5c0-2.5,2.1-4.6,4.6-4.6\n      C1286.8,1167.3,1289,1169.4,1289,1171.9 M1294.9,1182.2c0,2.5-2.1,4.6-4.6,4.6c-2.5,0-4.5-2.1-4.5-4.6c0-2.6,2.1-4.7,4.5-4.7\n      C1292.7,1177.5,1294.9,1179.7,1294.9,1182.2", 1, "st3"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .darker { clip-path: url(#SVGID_2_); fill: #771025; } .secondary_color { clip-path: url(#SVGID_2_); fill: #58595b; } .primary_color { clip-path: url(#SVGID_2_); fill: #ba3a51; } .st3 { clip-path: url(#SVGID_2_); fill: #414042; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".loader_div[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: fade_in 0.7s cubic-bezier(0, 0, 0.15, 1.04);\n          animation: fade_in 0.7s cubic-bezier(0, 0, 0.15, 1.04);\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 250px;\n  -webkit-animation: loading 4s ease infinite;\n          animation: loading 4s ease infinite;\n}\n@media (max-width: 800px) {\n  .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media (max-width: 600px) {\n  .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 450px) {\n  .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke-width: 3;\n  stroke-dasharray: 3490;\n  stroke-dashoffset: 3490;\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.primary_color[_ngcontent-%COMP%], .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon.primary_color[_ngcontent-%COMP%] {\n  stroke: #ba3a51;\n  -webkit-animation: stroke_primary 8s ease-out infinite;\n          animation: stroke_primary 8s ease-out infinite;\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.darker[_ngcontent-%COMP%], .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon.darker[_ngcontent-%COMP%] {\n  stroke: #771025;\n  -webkit-animation: stroke_darker 8s ease-out infinite;\n          animation: stroke_darker 8s ease-out infinite;\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path.secondary_color[_ngcontent-%COMP%], .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon.secondary_color[_ngcontent-%COMP%] {\n  stroke: #58595b;\n  -webkit-animation: stroke_secondary 8s ease-out infinite;\n          animation: stroke_secondary 8s ease-out infinite;\n}\n.loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   path.st3[_ngcontent-%COMP%], .loader_div[_ngcontent-%COMP%]   .svg_container[_ngcontent-%COMP%]   polygon.st3[_ngcontent-%COMP%] {\n  stroke: #58595b;\n  -webkit-animation: stroke_secondary 8s ease-out infinite;\n          animation: stroke_secondary 8s ease-out infinite;\n}\n@-webkit-keyframes stroke_primary {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #ba3a51;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    fill: #ba3a51;\n  }\n}\n@keyframes stroke_primary {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #ba3a51;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    fill: #ba3a51;\n  }\n}\n@-webkit-keyframes stroke_secondary {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #58595b;\n  }\n  100% {\n    fill: #58595b;\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes stroke_secondary {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #58595b;\n  }\n  100% {\n    fill: #58595b;\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes stroke_darker {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #771025;\n  }\n  100% {\n    fill: #771025;\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes stroke_darker {\n  0% {\n    stroke-dashoffset: 3490;\n  }\n  50% {\n    fill: transparent;\n    stroke-dashoffset: 0;\n  }\n  60% {\n    fill: #771025;\n  }\n  100% {\n    fill: #771025;\n    stroke-dashoffset: 0;\n  }\n}\n@-webkit-keyframes fade_in {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes fade_in {\n  0% {\n    transform: scale(0.7);\n    opacity: 0.2;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes loading {\n  0% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n@keyframes loading {\n  0% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhEQUFBO1VBQUEsc0RBQUE7QUNIRjtBREtFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDSEo7QURNSTtFQUNFLFlBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDSk47QURNTTtFQUpGO0lBS0ksVUFBQTtFQ0hOO0FBQ0Y7QURLTTtFQVJGO0lBU0ksVUFBQTtFQ0ZOO0FBQ0Y7QURJTTtFQVpGO0lBYUksVUFBQTtFQ0ROO0FBQ0Y7QURHTTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRFI7QURJTTs7RUFFRSxlQW5EUTtFQW9EUixzREFBQTtVQUFBLDhDQUFBO0FDRlI7QURLTTs7RUFFRSxlQXhETztFQXlEUCxxREFBQTtVQUFBLDZDQUFBO0FDSFI7QURNTTs7RUFFRSxlQTdEUztFQThEVCx3REFBQTtVQUFBLGdEQUFBO0FDSlI7QURRSTs7RUFFRSxlQXBFVztFQXFFWCx3REFBQTtVQUFBLGdEQUFBO0FDTk47QURXQTtFQUNFO0lBQ0UsdUJBQUE7RUNSRjtFRFVBO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQ1JGO0VEVUE7SUFDRSxhQXJGWTtFQzZFZDtFRFVBO0lBQ0Usb0JBQUE7SUFDQSxhQXpGWTtFQ2lGZDtBQUNGO0FETkE7RUFDRTtJQUNFLHVCQUFBO0VDUkY7RURVQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUNSRjtFRFVBO0lBQ0UsYUFyRlk7RUM2RWQ7RURVQTtJQUNFLG9CQUFBO0lBQ0EsYUF6Rlk7RUNpRmQ7QUFDRjtBRFdBO0VBQ0U7SUFDRSx1QkFBQTtFQ1RGO0VEV0E7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VDVEY7RURXQTtJQUNFLGFBcEdhO0VDMkZmO0VEV0E7SUFDRSxhQXZHYTtJQXdHYixvQkFBQTtFQ1RGO0FBQ0Y7QURMQTtFQUNFO0lBQ0UsdUJBQUE7RUNURjtFRFdBO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQ1RGO0VEV0E7SUFDRSxhQXBHYTtFQzJGZjtFRFdBO0lBQ0UsYUF2R2E7SUF3R2Isb0JBQUE7RUNURjtBQUNGO0FEWUE7RUFDRTtJQUNFLHVCQUFBO0VDVkY7RURZQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7RUNWRjtFRFlBO0lBQ0UsYUF0SFc7RUM0R2I7RURZQTtJQUNFLGFBekhXO0lBMEhYLG9CQUFBO0VDVkY7QUFDRjtBREpBO0VBQ0U7SUFDRSx1QkFBQTtFQ1ZGO0VEWUE7SUFDRSxpQkFBQTtJQUNBLG9CQUFBO0VDVkY7RURZQTtJQUNFLGFBdEhXO0VDNEdiO0VEWUE7SUFDRSxhQXpIVztJQTBIWCxvQkFBQTtFQ1ZGO0FBQ0Y7QURhQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VDWEY7RURhQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ1hGO0FBQ0Y7QURHQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VDWEY7RURhQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ1hGO0FBQ0Y7QURjQTtFQUNFO0lBQ0UscUJBQUE7RUNaRjtFRGNBO0lBQ0UsbUJBQUE7RUNaRjtFRGNBO0lBQ0UscUJBQUE7RUNaRjtBQUNGO0FER0E7RUFDRTtJQUNFLHFCQUFBO0VDWkY7RURjQTtJQUNFLG1CQUFBO0VDWkY7RURjQTtJQUNFLHFCQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5X2NvbG9yOiAjYmEzYTUxO1xyXG4kZGFya2VyX2NvbG9yOiAjNzcxMDI1O1xyXG4kc2Vjb25kcnlfY29sb3I6ICM1ODU5NWI7XHJcblxyXG4ubG9hZGVyX2RpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbmltYXRpb246IGZhZGVfaW4gMC43cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4xNSwgMS4wNCk7XHJcblxyXG4gIC5zdmdfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGFuaW1hdGlvbjogbG9hZGluZyA0cyBlYXNlIGluZmluaXRlO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGF0aCxcclxuICAgICAgcG9seWdvbiB7XHJcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDM0OTA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhdGgucHJpbWFyeV9jb2xvcixcclxuICAgICAgcG9seWdvbi5wcmltYXJ5X2NvbG9yIHtcclxuICAgICAgICBzdHJva2U6ICRwcmltYXJ5X2NvbG9yO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3Ryb2tlX3ByaW1hcnkgOHMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhdGguZGFya2VyLFxyXG4gICAgICBwb2x5Z29uLmRhcmtlciB7XHJcbiAgICAgICAgc3Ryb2tlOiAkZGFya2VyX2NvbG9yO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3Ryb2tlX2RhcmtlciA4cyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGF0aC5zZWNvbmRhcnlfY29sb3IsXHJcbiAgICAgIHBvbHlnb24uc2Vjb25kYXJ5X2NvbG9yIHtcclxuICAgICAgICBzdHJva2U6ICRzZWNvbmRyeV9jb2xvcjtcclxuICAgICAgICBhbmltYXRpb246IHN0cm9rZV9zZWNvbmRhcnkgOHMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXRoLnN0MyxcclxuICAgIHBvbHlnb24uc3QzIHtcclxuICAgICAgc3Ryb2tlOiAkc2Vjb25kcnlfY29sb3I7XHJcbiAgICAgIGFuaW1hdGlvbjogc3Ryb2tlX3NlY29uZGFyeSA4cyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Ryb2tlX3ByaW1hcnkge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzNDkwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGZpbGw6ICRwcmltYXJ5X2NvbG9yO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgZmlsbDogJHByaW1hcnlfY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0cm9rZV9zZWNvbmRhcnkge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzNDkwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIGZpbGw6ICRzZWNvbmRyeV9jb2xvcjtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBmaWxsOiAkc2Vjb25kcnlfY29sb3I7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Ryb2tlX2RhcmtlciB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OTA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgZmlsbDogJGRhcmtlcl9jb2xvcjtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBmaWxsOiAkZGFya2VyX2NvbG9yO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVfaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG59XHJcbiIsIi5sb2FkZXJfZGl2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVfaW4gMC43cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4xNSwgMS4wNCk7XG59XG4ubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuLmxvYWRlcl9kaXYgLnN2Z19jb250YWluZXIgc3ZnIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBhbmltYXRpb246IGxvYWRpbmcgNHMgZWFzZSBpbmZpbml0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbi5sb2FkZXJfZGl2IC5zdmdfY29udGFpbmVyIHN2ZyBwYXRoLFxuLmxvYWRlcl9kaXYgLnN2Z19jb250YWluZXIgc3ZnIHBvbHlnb24ge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICBzdHJva2UtZGFzaGFycmF5OiAzNDkwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMzQ5MDtcbn1cbi5sb2FkZXJfZGl2IC5zdmdfY29udGFpbmVyIHN2ZyBwYXRoLnByaW1hcnlfY29sb3IsXG4ubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcgcG9seWdvbi5wcmltYXJ5X2NvbG9yIHtcbiAgc3Ryb2tlOiAjYmEzYTUxO1xuICBhbmltYXRpb246IHN0cm9rZV9wcmltYXJ5IDhzIGVhc2Utb3V0IGluZmluaXRlO1xufVxuLmxvYWRlcl9kaXYgLnN2Z19jb250YWluZXIgc3ZnIHBhdGguZGFya2VyLFxuLmxvYWRlcl9kaXYgLnN2Z19jb250YWluZXIgc3ZnIHBvbHlnb24uZGFya2VyIHtcbiAgc3Ryb2tlOiAjNzcxMDI1O1xuICBhbmltYXRpb246IHN0cm9rZV9kYXJrZXIgOHMgZWFzZS1vdXQgaW5maW5pdGU7XG59XG4ubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcgcGF0aC5zZWNvbmRhcnlfY29sb3IsXG4ubG9hZGVyX2RpdiAuc3ZnX2NvbnRhaW5lciBzdmcgcG9seWdvbi5zZWNvbmRhcnlfY29sb3Ige1xuICBzdHJva2U6ICM1ODU5NWI7XG4gIGFuaW1hdGlvbjogc3Ryb2tlX3NlY29uZGFyeSA4cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cbi5sb2FkZXJfZGl2IC5zdmdfY29udGFpbmVyIHBhdGguc3QzLFxuLmxvYWRlcl9kaXYgLnN2Z19jb250YWluZXIgcG9seWdvbi5zdDMge1xuICBzdHJva2U6ICM1ODU5NWI7XG4gIGFuaW1hdGlvbjogc3Ryb2tlX3NlY29uZGFyeSA4cyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzdHJva2VfcHJpbWFyeSB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzQ5MDtcbiAgfVxuICA1MCUge1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgZmlsbDogI2JhM2E1MTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBmaWxsOiAjYmEzYTUxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN0cm9rZV9zZWNvbmRhcnkge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OTA7XG4gIH1cbiAgNTAlIHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA2MCUge1xuICAgIGZpbGw6ICM1ODU5NWI7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogIzU4NTk1YjtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJva2VfZGFya2VyIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzNDkwO1xuICB9XG4gIDUwJSB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNjAlIHtcbiAgICBmaWxsOiAjNzcxMDI1O1xuICB9XG4gIDEwMCUge1xuICAgIGZpbGw6ICM3NzEwMjU7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZV9pbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/servicees/loader.service */
    "./src/app/servicees/loader.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["video"];

    function HomeComponent__svg_svg_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent__svg_svg_2_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.unmuteVideo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent__svg_svg_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent__svg_svg_3_Template__svg_svg_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.muteVideo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(sLoader) {
        _classCallCheck(this, HomeComponent);

        this.sLoader = sLoader;
        this.mutedVideo = true;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.video.nativeElement.muted = true;
          setTimeout(function () {
            _this2.sLoader.showLoader();
          }, 200);
          setTimeout(function () {
            _this2.sLoader.hideLoader();
          }, 8200);
        }
      }, {
        key: "muteVideo",
        value: function muteVideo() {
          this.mutedVideo = true;
          this.video.nativeElement.muted = true;
        }
      }, {
        key: "unmuteVideo",
        value: function unmuteVideo() {
          this.mutedVideo = false;
          this.video.nativeElement.muted = false;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        }
      },
      decls: 16,
      vars: 2,
      consts: [[1, "video_section"], [1, "sound_button"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 461.5 461.5", "style", "enable-background: new 0 0 461.5 461.5;", 0, "xml", "space", "preserve", 3, "click", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 115.3 115.3", "style", "enable-background: new 0 0 115.3 115.3;", 0, "xml", "space", "preserve", 3, "click", 4, "ngIf"], ["loop", "", "autoplay", ""], ["video", ""], ["src", "../../../assets/videos/1.mp4", "type", "video/mp4"], [1, "overlay"], ["routerLink", "student-register"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 461.5 461.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 461.5 461.5", 3, "click"], ["id", "volume-off"], ["d", "M345.5,229.5c0-45.9-25.5-84.1-63.8-102v56.1l63.8,63.8C345.5,239.7,345.5,234.6,345.5,229.5z M409.3,229.5\n          c0,22.9-5.1,45.9-12.8,66.3l38.3,38.3c17.9-30.6,25.5-68.9,25.5-107.1c0-109.7-76.5-201.4-178.5-224.4v53.6\n          C355.7,81.6,409.3,147.9,409.3,229.5z M34.4,0L1.3,33.2L121.1,153H1.3v153h102l127.5,127.5V262.6l109.6,109.6\n          c-17.9,12.8-35.7,23-58.6,30.6v53.5c35.7-7.6,66.3-23,94.4-45.9l51,51l33.1-33.1L230.8,198.9L34.4,0z M230.8,25.5l-53.6,53.6\n          l53.6,53.6V25.5z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 115.3 115.3", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 115.3 115.3", 3, "click"], ["d", "M47.9,14.3L26,30.7H6c-3.3,0-6,2.7-6,6v41.8c0,3.3,2.7,6,6,6h20l21.9,16.4c4,3,9.6,0.2,9.6-4.8v-77\n\t\tC57.5,14.1,51.8,11.3,47.9,14.3z"], ["d", "M77.3,24.1c-2.7-2.7-7.2-2.7-9.9,0c-2.7,2.7-2.7,7.2,0,9.9c13,13,13,34.1,0,47.1c-2.7,2.7-2.7,7.2,0,9.9\n\t\tc1.4,1.4,3.2,2,4.9,2s3.6-0.7,4.9-2.1C95.8,72.6,95.8,42.6,77.3,24.1z"], ["d", "M85.1,8.4c-2.7,2.7-2.7,7.2,0,9.9c10.5,10.5,16.3,24.4,16.3,39.3s-5.8,28.8-16.3,39.3c-2.7,2.7-2.7,7.2,0,9.9\n\t\tc1.4,1.4,3.2,2.1,4.9,2.1c1.8,0,3.6-0.7,4.9-2c13.1-13.1,20.4-30.6,20.4-49.2s-7.2-36-20.4-49.2C92.3,5.7,87.9,5.7,85.1,8.4z"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent__svg_svg_2_Template, 4, 0, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent__svg_svg_3_Template, 5, 0, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0645\u062F\u0627\u0631\u0633");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0637\u0644\u0627\u0626\u0639 \u0627\u0644\u0645\u0628\u062F\u0639\u064A\u0646 \u0648 \u0627\u0644\u0645\u0628\u062F\u0639\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u062A\u0631\u062D\u0628 \u0628\u0643\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mutedVideo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mutedVideo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["@charset \"UTF-8\";\n.video_section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n}\n.video_section[_ngcontent-%COMP%]   .sound_button[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 100px;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n  border: 0;\n  outline: none;\n  padding: 0;\n}\n.video_section[_ngcontent-%COMP%]   .sound_button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n.video_section[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-image: linear-gradient(180deg, #2a0000, rgba(4, 0, 255, 0.56));\n  z-index: 2;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: initial;\n  color: #fff;\n}\n@media (max-width: 800px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n}\n@media (max-width: 400px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n  }\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 45px;\n  color: #fff;\n}\n@media (max-width: 800px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n@media (max-width: 400px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 5.5vw;\n  }\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 40px;\n  border: 0;\n  background-color: #ba3a51;\n  color: #fff;\n  width: 180px;\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 18px;\n  font-family: kufi;\n  border-radius: 37px;\n  transition: 0.4s ease;\n  overflow: hidden;\n  outline: none;\n  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.49);\n}\n@media (max-width: 800px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n}\n@media (max-width: 400px) {\n  .video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #3a73ba;\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::after {\n  -webkit-animation: button_hover 0.7s ease-out;\n          animation: button_hover 0.7s ease-out;\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: \"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0637\u0627\u0644\u0628\";\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover::before {\n  content: \"\u0623\u0648 \u0627\u0644\u0637\u0627\u0644\u0628\u0629\";\n}\n.video_section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 25px;\n  left: 74px;\n  height: 8px;\n  width: 8px;\n  background-color: #fff;\n  border-radius: 50%;\n  transform: scale(0);\n}\n@-webkit-keyframes button_hover {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  20% {\n    transform: scale(50);\n    opacity: 0.4;\n  }\n  100% {\n    transform: scale(50);\n    opacity: 0;\n  }\n}\n@keyframes button_hover {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  20% {\n    transform: scale(50);\n    opacity: 0.4;\n  }\n  100% {\n    transform: scale(50);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL0M6XFxVc2Vyc1xcQWJkZWxyYWhtYW5cXERlc2t0b3BcXE5ldyBmb2xkZXJcXHJlZ2lzdGVyYXRpb25cXHN0dWRlbnRzUmVnaXN0cmF0aW9uL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FERkY7QUNJRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBREZKO0FDSUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBREZOO0FDU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURQSjtBQ1VFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUVBQUE7RUFLQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEWko7QUNjSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEWk47QUNjTTtFQU5GO0lBT0ksY0FBQTtFRFhOO0FBQ0Y7QUNhTTtFQVZGO0lBV0ksZ0JBQUE7RURWTjtBQUNGO0FDYUk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURYTjtBQ2FNO0VBTEY7SUFNSSxjQUFBO0VEVk47QUFDRjtBQ1lNO0VBVEY7SUFVSSxnQkFBQTtFRFROO0FBQ0Y7QUNZSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBMUZVO0VBMkZWLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FEVk47QUNZTTtFQWpCRjtJQWtCSSxxQkFBQTtFRFROO0FBQ0Y7QUNXTTtFQXJCRjtJQXNCSSxxQkFBQTtFRFJOO0FBQ0Y7QUNVTTtFQUNFLHlCQUFBO0FEUlI7QUNXTTtFQUNFLDZDQUFBO1VBQUEscUNBQUE7QURUUjtBQ1lNO0VBQ0UsdUJBQUE7QURWUjtBQ2FNO0VBQ0UscUJBQUE7QURYUjtBQ2NNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRFpSO0FDa0JBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RURmRjtFQ2lCQTtJQUNFLG9CQUFBO0lBQ0EsWUFBQTtFRGZGO0VDaUJBO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0VEZkY7QUFDRjtBQ0dBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RURmRjtFQ2lCQTtJQUNFLG9CQUFBO0lBQ0EsWUFBQTtFRGZGO0VDaUJBO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0VEZkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi52aWRlb19zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52aWRlb19zZWN0aW9uIC5zb3VuZF9idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi52aWRlb19zZWN0aW9uIC5zb3VuZF9idXR0b24gc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udmlkZW9fc2VjdGlvbiB2aWRlbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnZpZGVvX3NlY3Rpb24gLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYTAwMDAsIHJnYmEoNCwgMCwgMjU1LCAwLjU2KSk7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZGVvX3NlY3Rpb24gLm92ZXJsYXkgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC52aWRlb19zZWN0aW9uIC5vdmVybGF5IGgzIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC52aWRlb19zZWN0aW9uIC5vdmVybGF5IGgzIHtcbiAgICBmb250LXNpemU6IDMuNXZ3O1xuICB9XG59XG4udmlkZW9fc2VjdGlvbiAub3ZlcmxheSBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudmlkZW9fc2VjdGlvbiAub3ZlcmxheSBoMSB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAudmlkZW9fc2VjdGlvbiAub3ZlcmxheSBoMSB7XG4gICAgZm9udC1zaXplOiA1LjV2dztcbiAgfVxufVxuLnZpZGVvX3NlY3Rpb24gLm92ZXJsYXkgYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTNhNTE7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBrdWZpO1xuICBib3JkZXItcmFkaXVzOiAzN3B4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ5KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudmlkZW9fc2VjdGlvbiAub3ZlcmxheSBidXR0b24ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC52aWRlb19zZWN0aW9uIC5vdmVybGF5IGJ1dHRvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG59XG4udmlkZW9fc2VjdGlvbiAub3ZlcmxheSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3M2JhO1xufVxuLnZpZGVvX3NlY3Rpb24gLm92ZXJsYXkgYnV0dG9uOmhvdmVyOjphZnRlciB7XG4gIGFuaW1hdGlvbjogYnV0dG9uX2hvdmVyIDAuN3MgZWFzZS1vdXQ7XG59XG4udmlkZW9fc2VjdGlvbiAub3ZlcmxheSBidXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi2KrYs9is2YrZhCDYp9mE2LfYp9mE2KhcIjtcbn1cbi52aWRlb19zZWN0aW9uIC5vdmVybGF5IGJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLYo9mIINin2YTYt9in2YTYqNipXCI7XG59XG4udmlkZW9fc2VjdGlvbiAub3ZlcmxheSBidXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDc0cHg7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbkBrZXlmcmFtZXMgYnV0dG9uX2hvdmVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNTApO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDUwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59IiwiJHByaW1hcnlfY29sb3I6ICNiYTNhNTE7XHJcbiRkYXJrZXJfY29sb3I6ICM3NzEwMjU7XHJcbiRzZWNvbmRyeV9jb2xvcjogIzU4NTk1YjtcclxuXHJcbi52aWRlb19zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnNvdW5kX2J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgIHBhdGgge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aWRlbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTgwZGVnLFxyXG4gICAgICByZ2IoNDIsIDAsIDApLFxyXG4gICAgICByZ2JhKDQsIDAsIDI1NSwgMC41NilcclxuICAgICk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeV9jb2xvcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGt1Zmk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM3cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogLTFweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDkpO1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTczYmE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICBhbmltYXRpb246IGJ1dHRvbl9ob3ZlciAwLjdzIGVhc2Utb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICfYqtiz2KzZitmEINin2YTYt9in2YTYqCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJ9ij2Ygg2KfZhNi32KfZhNio2KknO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICBsZWZ0OiA3NHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidXR0b25faG92ZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg1MCk7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg1MCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_servicees_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      }, {
        video: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['video']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 56,
      vars: 0,
      consts: [[1, "centered"], [1, "img"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["type", "text/css"], ["d", "M88.9,449.9C34.4,403,0,333.5,0,256C0,114.6,114.6,0,256,0s256,114.6,256,256\n\t\t\t\t\t\t\t\t\t\t\tc0,77.5-34.4,147-88.9,193.9L88.9,449.9z", 1, "st0"], ["d", "M343.8,99.1L157,215.6l55.4,55.4h-16.6l165.6,165.6l61.6,13.4c51.8-44.7,85.5-109.8,88.6-182.9L343.8,99.1z", 1, "st1"], ["cx", "173", "cy", "202.2", "r", "20.9", 1, "st2"], ["cx", "339", "cy", "202.2", "r", "20.9", 1, "st3"], ["d", "M197.3,328.9l-48.7,5.1c-12,1.7-22.5,6.6-30.4,13.5c0,0,0,0,0,0c-9.2,8.1-14.8,19-14.8,30.9v42.4\n\t\t\tc44,23.5,96.4,37.1,152.7,37.1s108.6-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0c-7.9-6.9-18.4-11.8-30.4-13.5\n\t\t\tl-48.7-5.1L256,349.8L197.3,328.9z", 1, "st4"], ["d", "M256,349.8v108.1c56.2,0,108.7-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0\n\t\t\tc-7.9-6.9-18.4-11.8-30.4-13.5l-48.7-5.1", 1, "st5"], ["d", "M197.3,328.9c14,16.8,35.1,27.6,58.7,27.6s44.7-10.7,58.7-27.6l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255h-73\n\t\t\tv50.8c0,11.2-8.1,20.7-19.1,22.6L197.3,328.9z", 1, "st2"], ["d", "M314.7,328.9l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255H256v101.5C279.6,356.4,300.7,345.7,314.7,328.9z", 1, "st3"], ["d", "M256,295.8c-44.6,0-84.4-36.2-84.4-80.8v-44.9c0-44.6,39.8-80.8,84.4-80.8c44.6,0,84.4,36.2,84.4,80.8V215\n\t\t\tC340.4,259.6,300.6,295.8,256,295.8z", 1, "st6"], ["d", "M256,89.3v206.5c44.6,0,84.4-36.2,84.4-80.8v-44.9C340.4,125.4,300.6,89.3,256,89.3L256,89.3z", 1, "st2"], ["d", "M88.9,449.9C133.7,488.6,192.1,512,256,512s122.3-23.4,167.1-62.1v-81H88.9L88.9,449.9z", 1, "st7"], ["d", "M256,512c63.9,0,122.3-23.4,167.1-62.1v-81H256L256,512z", 1, "st8"], ["cx", "256", "cy", "456.5", "r", "29.6", 1, "st9"], ["d", "M256,427c16.3,0,29.6,13.2,29.6,29.6c0,16.3-13.2,29.6-29.6,29.6L256,427z", 1, "st10"], ["d", "M355,137.2c0-38.9-31.5-70.4-70.4-70.4h-47.3C193,66.8,157,102.7,157,147v40.5c0,8.1,6.6,14.7,14.7,14.7v-25\n\t\th36c24.9,0,77,1.9,101.2-35.8c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7c8.1,0,14.7-6.6,14.7-14.7V137.2z", 1, "st7"], ["d", "M284.6,66.8H256v107.1c20-4,40.3-12.9,52.9-32.6c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7\n\t\tc8.1,0,14.7-6.6,14.7-14.7v-50.4C355,98.3,323.5,66.8,284.6,66.8L284.6,66.8z", 1, "st11"], [1, "form"], [1, "form-group"], ["type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"], ["type", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"], [1, "button"], ["routerLink", "/students", 1, "submit"], [1, "back"], ["href", "", "routerLink", "/"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #a3d4ff; } .st1 { fill: #65b1fc; } .st2 { fill: #e09380; } .st3 { fill: #d47f6c; } .st4 { fill: #ffffff; } .st5 { fill: #e9edf5; } .st6 { fill: #faa68e; } .st7 { fill: #414952; } .st8 { fill: #23272b; } .st9 { fill: #7e8596; } .st10 { fill: #707789; } .st11 { fill: #333940; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0627\u0644\u0639\u0648\u062F\u0647 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-top: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 15px;\n  position: relative;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 0 0 11px 8px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 460px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% - 50px);\n  transform: translateX(-50%);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  padding: 3px;\n  width: 90px;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 9px rgba(0, 0, 0, 0.5);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 6px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  font-size: 12px;\n  border: 1px silver solid;\n  padding: 0 8px;\n  font-family: kufi;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px #0088ff solid;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  border: 0;\n  font-family: kufi;\n  background-color: #3561ab;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  background-color: #58595b;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: blue;\n  font-size: 12px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENJO0VBUkY7SUFTSSxXQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0VOO0FEQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0VSO0FERUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47QURHSTtFQUNFLGdCQUFBO0FDRE47QURHTTtFQUNFLG1CQUFBO0FDRFI7QURHUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNEVjtBRElRO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGVjtBRElVO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRlo7QURPTTtFQUNFLGdCQUFBO0FDTFI7QURPUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTFY7QURPVTtFQUNFLHlCQUFBO0FDTFo7QURVTTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDUlI7QURVUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgYm90dG9tOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDE5MiwgMTkyLCAxOTIpIHNvbGlkO1xyXG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseToga3VmaTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDAsIDEzNiwgMjU1KSBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgICAgIC5zdWJtaXQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBrdWZpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjFhYjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTk1YjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iYWNrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMTFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIHNlY3Rpb24gLmNlbnRlcmVkIHtcbiAgICB3aWR0aDogOTB2dztcbiAgfVxufVxuc2VjdGlvbiAuY2VudGVyZWQgLmltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuaW1nIHN2ZyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDlweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzaWx2ZXIgc29saWQ7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LWZhbWlseToga3VmaTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCAjMDA4OGZmIHNvbGlkO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuYnV0dG9uIC5zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiAwO1xuICBmb250LWZhbWlseToga3VmaTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NjFhYjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmJ1dHRvbiAuc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTk1Yjtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5iYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5iYWNrIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/student-register/student-register.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/student-register/student-register.component.ts ***!
    \**********************************************************************/

  /*! exports provided: StudentRegisterComponent */

  /***/
  function srcAppPagesStudentRegisterStudentRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentRegisterComponent", function () {
      return StudentRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentRegisterComponent_span_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0627\u0644\u0637\u0627\u0644\u0628\u0629");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StudentRegisterComponent =
    /*#__PURE__*/
    function () {
      function StudentRegisterComponent() {
        _classCallCheck(this, StudentRegisterComponent);
      }

      _createClass(StudentRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudentRegisterComponent;
    }();

    StudentRegisterComponent.ɵfac = function StudentRegisterComponent_Factory(t) {
      return new (t || StudentRegisterComponent)();
    };

    StudentRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentRegisterComponent,
      selectors: [["app-student-register"]],
      decls: 119,
      vars: 1,
      consts: [[1, "centered"], [1, "img"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["type", "text/css"], ["d", "M88.9,449.9C34.4,403,0,333.5,0,256C0,114.6,114.6,0,256,0s256,114.6,256,256\n\t\t\t\t\t\t\t\t\t\t\tc0,77.5-34.4,147-88.9,193.9L88.9,449.9z", 1, "st0"], ["d", "M343.8,99.1L157,215.6l55.4,55.4h-16.6l165.6,165.6l61.6,13.4c51.8-44.7,85.5-109.8,88.6-182.9L343.8,99.1z", 1, "st1"], ["cx", "173", "cy", "202.2", "r", "20.9", 1, "st2"], ["cx", "339", "cy", "202.2", "r", "20.9", 1, "st3"], ["d", "M197.3,328.9l-48.7,5.1c-12,1.7-22.5,6.6-30.4,13.5c0,0,0,0,0,0c-9.2,8.1-14.8,19-14.8,30.9v42.4\n\t\t\tc44,23.5,96.4,37.1,152.7,37.1s108.6-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0c-7.9-6.9-18.4-11.8-30.4-13.5\n\t\t\tl-48.7-5.1L256,349.8L197.3,328.9z", 1, "st4"], ["d", "M256,349.8v108.1c56.2,0,108.7-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0\n\t\t\tc-7.9-6.9-18.4-11.8-30.4-13.5l-48.7-5.1", 1, "st5"], ["d", "M197.3,328.9c14,16.8,35.1,27.6,58.7,27.6s44.7-10.7,58.7-27.6l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255h-73\n\t\t\tv50.8c0,11.2-8.1,20.7-19.1,22.6L197.3,328.9z", 1, "st2"], ["d", "M314.7,328.9l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255H256v101.5C279.6,356.4,300.7,345.7,314.7,328.9z", 1, "st3"], ["d", "M256,295.8c-44.6,0-84.4-36.2-84.4-80.8v-44.9c0-44.6,39.8-80.8,84.4-80.8c44.6,0,84.4,36.2,84.4,80.8V215\n\t\t\tC340.4,259.6,300.6,295.8,256,295.8z", 1, "st6"], ["d", "M256,89.3v206.5c44.6,0,84.4-36.2,84.4-80.8v-44.9C340.4,125.4,300.6,89.3,256,89.3L256,89.3z", 1, "st2"], ["d", "M88.9,449.9C133.7,488.6,192.1,512,256,512s122.3-23.4,167.1-62.1v-81H88.9L88.9,449.9z", 1, "st7"], ["d", "M256,512c63.9,0,122.3-23.4,167.1-62.1v-81H256L256,512z", 1, "st8"], ["cx", "256", "cy", "456.5", "r", "29.6", 1, "st9"], ["d", "M256,427c16.3,0,29.6,13.2,29.6,29.6c0,16.3-13.2,29.6-29.6,29.6L256,427z", 1, "st10"], ["d", "M355,137.2c0-38.9-31.5-70.4-70.4-70.4h-47.3C193,66.8,157,102.7,157,147v40.5c0,8.1,6.6,14.7,14.7,14.7v-25\n\t\th36c24.9,0,77,1.9,101.2-35.8c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7c8.1,0,14.7-6.6,14.7-14.7V137.2z", 1, "st7"], ["d", "M284.6,66.8H256v107.1c20-4,40.3-12.9,52.9-32.6c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7\n\t\tc8.1,0,14.7-6.6,14.7-14.7v-50.4C355,98.3,323.5,66.8,284.6,66.8L284.6,66.8z", 1, "st11"], [1, "form"], [1, "form-group", "sex"], [1, "radio"], [1, "part"], ["id", "male", "type", "radio", "name", "gander"], ["for", "male"], ["id", "female", "type", "radio", "name", "gander"], ["for", "female"], [1, "form-group"], [4, "ngIf"], ["type", "text", "placeholder", "\u0627\u0644\u0627\u0633\u0645"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0627\u0644\u0627\u0628"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0627\u0644\u0627\u0645"], ["name", "", "id", ""], ["value", ""], ["type", "text", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0643\u062A\u0631\u0648\u0646\u064A"], ["type", "text", "placeholder", "\u0643\u064A\u0641 \u062A\u0639\u0631\u0641\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0631\u0633\u0629"], [1, "form-group", "notes"], ["name", "", "id", "", "placeholder", "\u0645\u0644\u0627\u062D\u0638\u0627\u062A"], [1, "button"], [1, "submit"], [1, "back"]],
      template: function StudentRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #a3d4ff; } .st1 { fill: #65b1fc; } .st2 { fill: #e09380; } .st3 { fill: #d47f6c; } .st4 { fill: #ffffff; } .st5 { fill: #e9edf5; } .st6 { fill: #faa68e; } .st7 { fill: #414952; } .st8 { fill: #23272b; } .st9 { fill: #7e8596; } .st10 { fill: #707789; } .st11 { fill: #333940; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0627\u0644\u0627\u0644\u062A\u062D\u0627\u0642 \u0628\u0627\u0644\u0645\u062F\u0631\u0633\u0629 ( \u0627\u0644\u062A\u0633\u062C\u064A\u0644 )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u062C\u0646\u0633");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0630\u0643\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0627\u0646\u062B\u0649");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0627\u0633\u0645 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0627\u0644\u0637\u0627\u0644\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, StudentRegisterComponent_span_59_Template, 2, 0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0627\u0644\u0627\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0631\u0642\u0645 \u062C\u0648\u0627\u0644 \u0627\u0644\u0627\u0645");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "aaaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "bbb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "ccc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0627\u0644\u0635\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "aaaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "bbb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "ccc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "aaa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0643\u062A\u0631\u0648\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u0643\u064A\u0641 \u062A\u0639\u0631\u0641\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0631\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "textarea", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u062A\u0633\u062C\u0628\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u0627\u0644\u0639\u0648\u062F\u0647 \u0644\u0644\u0631\u0626\u064A\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 150px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n  width: 900px;\n  padding: 15px;\n  position: relative;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 0 0 11px 8px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 1000px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% - 50px);\n  transform: translateX(-50%);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  padding: 3px;\n  width: 90px;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 9px rgba(0, 0, 0, 0.5);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  width: 50%;\n  padding: 0 15px;\n}\n@media (max-width: 1050px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 550px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group.sex[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group.notes[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%] {\n  width: 60px;\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  width: 16px;\n  cursor: pointer;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  cursor: pointer;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 6px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  font-size: 12px;\n  border: 1px silver solid;\n  padding: 0 8px;\n  font-family: kufi;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px #0088ff solid;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  font-size: 12px;\n  border: 1px silver solid;\n  padding: 0 8px;\n  font-family: kufi;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px #0088ff solid;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100px;\n  font-size: 12px;\n  border: 1px silver solid;\n  padding: 0 8px;\n  font-family: kufi;\n  border-radius: 5px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px #0088ff solid;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  display: block;\n  width: 200px;\n  height: 35px;\n  border: 0;\n  font-family: kufi;\n  background-color: #3561ab;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  background-color: #58595b;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: blue;\n  font-size: 12px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudC1yZWdpc3Rlci9DOlxcVXNlcnNcXEFiZGVscmFobWFuXFxEZXNrdG9wXFxOZXcgZm9sZGVyXFxyZWdpc3RlcmF0aW9uXFxzdHVkZW50c1JlZ2lzdHJhdGlvbi9zcmNcXGFwcFxccGFnZXNcXHN0dWRlbnQtcmVnaXN0ZXJcXHN0dWRlbnQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQtcmVnaXN0ZXIvc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FDQ0o7QURDSTtFQVJGO0lBU0ksV0FBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNFTjtBREFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNFUjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRE47QURHTTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBTEY7SUFNSSxVQUFBO0VDQVI7QUFDRjtBREVRO0VBVEY7SUFVSSxXQUFBO0VDQ1I7QUFDRjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FERVE7RUFDRSxXQUFBO0FDQVY7QURHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RWO0FER1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFo7QURHWTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDRGQ7QURJWTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNGZDtBRE9RO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEUVE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05WO0FEUVU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNOWjtBRFVRO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNSVjtBRFVVO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDUlo7QURZUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZWO0FEWVU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNWWjtBRGVNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDYlI7QURlUTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYlY7QURlVTtFQUNFLHlCQUFBO0FDYlo7QURrQk07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ2hCUjtBRGtCUTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDaEJWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZGVudC1yZWdpc3Rlci9zdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTUwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3R0b206IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZXgge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm5vdGVzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhZGlvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDE5MiwgMTkyLCAxOTIpIHNvbGlkO1xyXG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseToga3VmaTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDAsIDEzNiwgMjU1KSBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDE5MiwgMTkyLCAxOTIpIHNvbGlkO1xyXG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseToga3VmaTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggcmdiKDAsIDEzNiwgMjU1KSBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNpbHZlciBzb2xpZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGt1Zmk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHJnYigwLCAxMzYsIDI1NSkgc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5zdWJtaXQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseToga3VmaTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTYxYWI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU5NWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFjayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsInNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTUwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCB7XG4gIHdpZHRoOiA5MDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMTFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBzZWN0aW9uIC5jZW50ZXJlZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmltZyBzdmcge1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICBzZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIHNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAuc2V4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuZm9ybS1ncm91cC5ub3RlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAgLnJhZGlvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIC5yYWRpbyAucGFydCB7XG4gIHdpZHRoOiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAgLnJhZGlvIC5wYXJ0IGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIC5yYWRpbyAucGFydCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc2lsdmVyIHNvbGlkO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC1mYW1pbHk6IGt1Zmk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggIzAwODhmZiBzb2xpZDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5mb3JtIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNpbHZlciBzb2xpZDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtZmFtaWx5OiBrdWZpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCAjMDA4OGZmIHNvbGlkO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNpbHZlciBzb2xpZDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtZmFtaWx5OiBrdWZpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4ICMwMDg4ZmYgc29saWQ7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmJ1dHRvbiAuc3VibWl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiBrdWZpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2MWFiO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuZm9ybSAuYnV0dG9uIC5zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1OTViO1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmJhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuc2VjdGlvbiAuY2VudGVyZWQgLmZvcm0gLmJhY2sgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-student-register',
          templateUrl: './student-register.component.html',
          styleUrls: ['./student-register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/students/students.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/students/students.component.ts ***!
    \******************************************************/

  /*! exports provided: StudentsComponent */

  /***/
  function srcAppPagesStudentsStudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsComponent", function () {
      return StudentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StudentsComponent =
    /*#__PURE__*/
    function () {
      function StudentsComponent() {
        _classCallCheck(this, StudentsComponent);
      }

      _createClass(StudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudentsComponent;
    }();

    StudentsComponent.ɵfac = function StudentsComponent_Factory(t) {
      return new (t || StudentsComponent)();
    };

    StudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StudentsComponent,
      selectors: [["app-students"]],
      decls: 172,
      vars: 0,
      consts: [[1, "centered"], [1, "img"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["type", "text/css"], ["d", "M88.9,449.9C34.4,403,0,333.5,0,256C0,114.6,114.6,0,256,0s256,114.6,256,256\n\t\t\t\t\t\t\t\t\t\t\tc0,77.5-34.4,147-88.9,193.9L88.9,449.9z", 1, "st0"], ["d", "M343.8,99.1L157,215.6l55.4,55.4h-16.6l165.6,165.6l61.6,13.4c51.8-44.7,85.5-109.8,88.6-182.9L343.8,99.1z", 1, "st1"], ["cx", "173", "cy", "202.2", "r", "20.9", 1, "st2"], ["cx", "339", "cy", "202.2", "r", "20.9", 1, "st3"], ["d", "M197.3,328.9l-48.7,5.1c-12,1.7-22.5,6.6-30.4,13.5c0,0,0,0,0,0c-9.2,8.1-14.8,19-14.8,30.9v42.4\n\t\t\tc44,23.5,96.4,37.1,152.7,37.1s108.6-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0c-7.9-6.9-18.4-11.8-30.4-13.5\n\t\t\tl-48.7-5.1L256,349.8L197.3,328.9z", 1, "st4"], ["d", "M256,349.8v108.1c56.2,0,108.7-13.6,152.7-37.1v-42.4c0-11.9-5.6-22.8-14.8-30.9c0,0,0,0,0,0\n\t\t\tc-7.9-6.9-18.4-11.8-30.4-13.5l-48.7-5.1", 1, "st5"], ["d", "M197.3,328.9c14,16.8,35.1,27.6,58.7,27.6s44.7-10.7,58.7-27.6l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255h-73\n\t\t\tv50.8c0,11.2-8.1,20.7-19.1,22.6L197.3,328.9z", 1, "st2"], ["d", "M314.7,328.9l-3.1-0.5c-11-1.9-19.1-11.4-19.1-22.6V255H256v101.5C279.6,356.4,300.7,345.7,314.7,328.9z", 1, "st3"], ["d", "M256,295.8c-44.6,0-84.4-36.2-84.4-80.8v-44.9c0-44.6,39.8-80.8,84.4-80.8c44.6,0,84.4,36.2,84.4,80.8V215\n\t\t\tC340.4,259.6,300.6,295.8,256,295.8z", 1, "st6"], ["d", "M256,89.3v206.5c44.6,0,84.4-36.2,84.4-80.8v-44.9C340.4,125.4,300.6,89.3,256,89.3L256,89.3z", 1, "st2"], ["d", "M88.9,449.9C133.7,488.6,192.1,512,256,512s122.3-23.4,167.1-62.1v-81H88.9L88.9,449.9z", 1, "st7"], ["d", "M256,512c63.9,0,122.3-23.4,167.1-62.1v-81H256L256,512z", 1, "st8"], ["cx", "256", "cy", "456.5", "r", "29.6", 1, "st9"], ["d", "M256,427c16.3,0,29.6,13.2,29.6,29.6c0,16.3-13.2,29.6-29.6,29.6L256,427z", 1, "st10"], ["d", "M355,137.2c0-38.9-31.5-70.4-70.4-70.4h-47.3C193,66.8,157,102.7,157,147v40.5c0,8.1,6.6,14.7,14.7,14.7v-25\n\t\th36c24.9,0,77,1.9,101.2-35.8c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7c8.1,0,14.7-6.6,14.7-14.7V137.2z", 1, "st7"], ["d", "M284.6,66.8H256v107.1c20-4,40.3-12.9,52.9-32.6c2.8,12.3,12.8,33.1,26.7,33.1h4.7v27.7\n\t\tc8.1,0,14.7-6.6,14.7-14.7v-50.4C355,98.3,323.5,66.8,284.6,66.8L284.6,66.8z", 1, "st11"], [1, "responsive-table"], [1, "datatable"]],
      template: function StudentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #a3d4ff; } .st1 { fill: #65b1fc; } .st2 { fill: #e09380; } .st3 { fill: #d47f6c; } .st4 { fill: #ffffff; } .st5 { fill: #e9edf5; } .st6 { fill: #faa68e; } .st7 { fill: #414952; } .st8 { fill: #23272b; } .st9 { fill: #7e8596; } .st10 { fill: #707789; } .st11 { fill: #333940; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "circle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0627\u0633\u0645 \u0627\u0644\u0637\u0627\u0644\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u0644\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062F\u0631\u0627\u0633\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0627\u0644\u0635\u0641");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0633\u0628\u0628 \u0645\u0639\u0631\u0641\u062A\u0647 \u0628\u0627\u0644\u0645\u062F\u0631\u0633\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u0644\u062F\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0645\u062D\u0645\u062F \u0639\u0644\u064A \u0627\u0644 \u0633\u0639\u0648\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "0500124310");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u0627\u0644\u0627\u0628\u062A\u062F\u0627\u0626\u064A\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u0627\u0644\u0635\u0641 \u0627\u0644\u0627\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "mohammedali@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u0627\u0644\u0641\u064A\u0633\u0628\u0648\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "0503839249");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u0644\u0627 \u064A\u0648\u062C\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 150px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n  width: 90vw;\n  padding: 15px;\n  position: relative;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 0 0 11px 8px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 1000px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% - 50px);\n  transform: translateX(-50%);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  padding: 3px;\n  width: 90px;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 9px rgba(0, 0, 0, 0.5);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\n@media (max-width: 1300px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  background-color: #f8f7f7;\n  margin: 0 auto 40px;\n  width: 1300px;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  margin: 0;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #2882ba;\n  color: #fff;\n  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.45);\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px 15px;\n}\n@media (max-width: 800px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(2n) {\n  background-color: #ebebeb;\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 0.2s;\n}\n@media (max-width: 800px) {\n  section[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\nsection[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   .responsive-table[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: #0071bb;\n  color: #fff;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZGVudHMvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcTmV3IGZvbGRlclxccmVnaXN0ZXJhdGlvblxcc3R1ZGVudHNSZWdpc3RyYXRpb24vc3JjXFxhcHBcXHBhZ2VzXFxzdHVkZW50c1xcc3R1ZGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENJO0VBUkY7SUFTSSxXQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0VOO0FEQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQ0VSO0FERUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQU47QURJTTtFQURGO0lBRUksa0JBQUE7RUNETjtBQUNGO0FESVE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRlY7QURJVTtFQUNFLFNBQUE7QUNGWjtBRElZO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7QUNGZDtBREljO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRmhCO0FESWdCO0VBSkY7SUFLSSxlQUFBO0VDRGhCO0FBQ0Y7QURNVTtFQUNFLFNBQUE7QUNKWjtBRE1ZO0VBQ0UsZ0JBQUE7QUNKZDtBRE1jO0VBQ0UseUJBQUE7QUNKaEI7QURPYztFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURPZ0I7RUFORjtJQU9JLGVBQUE7RUNKaEI7QUFDRjtBRE1nQjtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHVkZW50cy9zdHVkZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDE1MHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY2VudGVyZWQge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBib3R0b206IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXNwb25zaXZlLXRhYmxlIHtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZSB7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY3Zjc7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEzMDBweDtcclxuXHJcbiAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg4MmJhO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuXHJcbiAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgybikge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzFiYjtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxNTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIHtcbiAgd2lkdGg6IDkwdnc7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDExcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgc2VjdGlvbiAuY2VudGVyZWQge1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAuaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogY2FsYygxMDAlIC0gNTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5pbWcgc3ZnIHtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICBzZWN0aW9uIC5jZW50ZXJlZCAucmVzcG9uc2l2ZS10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB9XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAucmVzcG9uc2l2ZS10YWJsZSAuZGF0YXRhYmxlIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjdmNztcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgd2lkdGg6IDEzMDBweDtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGhlYWQge1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAucmVzcG9uc2l2ZS10YWJsZSAuZGF0YXRhYmxlIHRhYmxlIHRoZWFkIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4ODJiYTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGhlYWQgdHIgdGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBzZWN0aW9uIC5jZW50ZXJlZCAucmVzcG9uc2l2ZS10YWJsZSAuZGF0YXRhYmxlIHRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGJvZHkge1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uIC5jZW50ZXJlZCAucmVzcG9uc2l2ZS10YWJsZSAuZGF0YXRhYmxlIHRhYmxlIHRib2R5IHRyIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGJvZHkgdHI6bnRoLW9mLXR5cGUoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cbnNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIHNlY3Rpb24gLmNlbnRlcmVkIC5yZXNwb25zaXZlLXRhYmxlIC5kYXRhdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuc2VjdGlvbiAuY2VudGVyZWQgLnJlc3BvbnNpdmUtdGFibGUgLmRhdGF0YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDcxYmI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-students',
          templateUrl: './students.component.html',
          styleUrls: ['./students.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servicees/loader.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/servicees/loader.service.ts ***!
    \*********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServiceesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.visibleLoader = false;
      }

      _createClass(LoaderService, [{
        key: "showLoader",
        value: function showLoader() {
          this.visibleLoader = true;
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.visibleLoader = false;
        }
      }, {
        key: "toggleLoader",
        value: function toggleLoader() {
          this.visibleLoader = !this.visibleLoader;
        }
      }]);

      return LoaderService;
    }();

    LoaderService.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };

    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Abdelrahman\Desktop\New folder\registeration\studentsRegistration\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map