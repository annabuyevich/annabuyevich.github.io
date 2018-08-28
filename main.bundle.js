webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    /* These two lines are counted as one :-)       */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 10px auto;\n    vertical-align: middle;\n}\n\n.jumbotron {\n    /* These two lines are counted as one :-)       */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 10px auto;\n    background: transparent;\n    vertical-align: middle;\n}\n\n.jumbotron p {\n    font-size: 2.5rem;\n    font-weight: 600px;\n    font-family: 'Roboto', sans-serif;\n}\n\np {\n    text-align: center;\n    color: #fff;\n    font-weight: 600px;\n    text-shadow: 1px 1px #333;\n    line-height: 115%;\n}\n\n.img-circle {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: 1px solid #333333;\n    margin: 60px 0px;\n    width: 340px;\n    /* you can use % */\n    height: auto;\n}\n\nimg.resize {}\n\n@media only screen and (max-device-width: 1000px) {\n    .img-circle {\n        height: 200px;\n        margin-top: 180px;\n    }\n}\n\n@media only screen and (max-device-width: 1000px) {\n    .jumbotron p {\n        height: 200px;\n        font-size: 1.3rem;\n        margin-top: 180px;\n        width: 190px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <img src=\"assets/Graphics/me_prof-min.png\" data- src=\"assets/Graphics/me_prof.png\" alt=\"Beautiful landscape sunrise\" class=\"img-circle\">\n\n    <div class=\"jumbotron\">\n        <p>\n\n            Hi, I am Anna Buyevich. I am in my third year of studying Computer Science at the University of Illinois at Urbana-Champaign. Recently, I was a Software Engineer Intern at Medical Intelligent Objects. I worked with the Product Release Team where I gained\n            experience in software engineering and product development.\n\n\n\n\n            <app-contact></app-contact>\n\n        </p>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n<app-header>\n</app-header>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contentArea_contentArea_component__ = __webpack_require__("../../../../../src/app/contentArea/contentArea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contentArea_contentArea_component__["a" /* ContentAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__["a" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_7__contentArea_contentArea_component__["a" /* ContentAreaComponent */]
                    },
                    {
                        path: 'projects',
                        component: __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */]
                    },
                    {
                        path: 'skills',
                        component: __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__["a" /* SkillsComponent */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_7__contentArea_contentArea_component__["a" /* ContentAreaComponent */]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n    color: #fff;\n    font-size: 2.5rem;\n}\n\n.link {\n    color: #fff;\n}\n\n.link:hover {\n    color: #c9302c;\n    border: none;\n}\n\na {\n    text-align: right;\n    color: #fff;\n    margin: 10px 5px 5px 5px;\n    padding: 3px;\n}\n\na:hover {\n    color: #333;\n    text-shadow: none;\n}\n\n@media only screen and (max-device-width: 1000px) {\n    p {\n        height: 50px;\n        font-size: 1.3rem;\n        margin-top: 10px;\n        width: 190px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\n\n    Feel free to contact me at<a href=\"mailto:avbuyevich@gmail.com\" class=\"link\"> avbuyevich@gmail.com</a>\n\n</p>\n\n<button type=\"button\" class=\"btn btn-danger\">\n  <a target=\"_blank\" href=\"assets/Anna Buyevich resume.pdf\" class=\"resume\">Resume</a>\n</button>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contentArea/contentArea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contentArea/contentArea.component.html":
/***/ (function(module, exports) {

module.exports = "<app-about></app-about>"

/***/ }),

/***/ "../../../../../src/app/contentArea/contentArea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentAreaComponent = (function () {
    function ContentAreaComponent() {
    }
    ContentAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/contentArea/contentArea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contentArea/contentArea.component.css")]
        })
    ], ContentAreaComponent);
    return ContentAreaComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/contentArea.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand {\n    color: #d9534f !important;\n    background: #333 !important;\n}\n\n.jumbotron {\n    color: #333 !important;\n    background: #333 !important;\n}\n\n.navbar-inverse {\n    background: #333 !important;\n}\n\n.navbar-inverse .navbar-nav>li>a {\n    color: #d9534f;\n    font-family: 'Roboto', sans-serif !important;\n    background: #333;\n}\n\n.navbar-inverse .navbar-brand {\n    color: #d9534f;\n}\n\n.clickable {\n    font-size: 1.8em;\n    margin-top: 5%;\n    padding: 0px 10px 0px 10px;\n    color: #d9534f;\n    float: right;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.clickable:hover {\n    color: #c9302c;\n}\n\n.border {\n    border: 1px solid #333 !important;\n}\n\n.disabled {\n    pointer-events: none !important;\n    cursor: default !important;\n    color: #c9302c !important;\n    text-decoration: none !important;\n    background-color: #d9534f;\n    border-color: #d43f3a;\n}\n\n.active:hover {\n    color: #c9302c !important;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n    background-color: #d9534f;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <!-- the hamburger -->\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\" (click)=\"toggleState()\">\n\t        <span class=\"sr-only\">Toggle navigation</span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t        <span class=\"icon-bar\"></span>\n\t      </button>\n            <a routerLink=\"/\" class=\"navbar-brand\"><i class=\"fa fa-code\" aria-hidden=\"true\"></i> ANNA BUYEVICH</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\" [ngClass]=\"{ 'in': isIn}\">\n            <ul class=\"nav navbar-nav\">\n                <li><a routerLink=\"/\" routerLinkActive=\"active\">HOME</a></li>\n                <li><a routerLink=\"/projects\" routerLinkActive=\"disabled\">PROJECTS</a></li>\n                <li> <a routerLink=\"/skills\" routerLinkActive=\"disabled\">SKILLS</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <a href=\"https://github.com/annabuyevich\" class=\"clickable\"> <i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\n                <a href=\"mailto:avbuyevich@gmail.com\" class=\"clickable\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></a>\n                <a href=\"https://www.linkedin.com/in/annabuyevich/>\" class=\"clickable\"> <i class=\"fa fa-linkedin\" aria-hidden=\"true\"> </i></a>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.active = false;
        // hamburger
        this.isIn = false;
    }
    Object.defineProperty(HeaderComponent.prototype, "isActive", {
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-fourth img {\n    transition: all 0.4s ease-in-out 0.2s;\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n}\n\n.view-fourth .mask {\n    background-color: rgba(0, 0, 0, 0.8);\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    -webkit-transform: scale(0) rotate(-180deg);\n    transform: scale(0) rotate(-180deg);\n    transition: all 0.4s ease-in;\n    border-radius: 0px;\n}\n\n.view-fourth h2 {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    background: transparent;\n    margin: 20px 40px 0px 40px;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth p {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth a.info {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth img.pic {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 2.0s ease-in-out;\n}\n\n.view-fourth:hover .mask {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n    -webkit-transform: scale(1) rotate(0deg);\n    transform: scale(1) rotate(0deg);\n    transition-delay: 0.2s;\n}\n\n.view-fourth:hover img {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition-delay: 0s;\n}\n\n.view-fourth:hover h2,\n.view-fourth:hover p,\n.view-fourth:hover a.info,\n.view-fourth:hover img.pic {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n    transition-delay: 0.5s;\n}\n\n.view {\n    width: 350px;\n    height: 400px;\n    margin-top: 110px;\n}\n\n.view .mask,\n.view .content {\n    width: 350px;\n    height: 400px;\n    position: absolute;\n    overflow: hidden;\n    display: inline-block;\n    top: 0;\n    left: 0;\n}\n\n.view img {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.view img #pixel {\n    -ms-interpolation-mode: nearest-neighbor;\n        image-rendering: -webkit-optimize-contrast;\n        image-rendering: -moz-crisp-edges;\n        image-rendering: pixelated;\n}\n\n.view h2 {\n    text-transform: uppercase;\n    color: #fff;\n    text-align: center;\n    position: relative;\n    font-size: 17px;\n    padding: 10px;\n    background: #d9534f;\n    margin: 20px 0 0 0;\n}\n\n.view p {\n    font-family: Georgia, serif;\n    font-style: italic;\n    font-size: 13px;\n    position: relative;\n    color: #fff;\n    padding: 50px 5px 50px 5px;\n    text-align: center;\n    max-width: 85%;\n    display: inline-block;\n}\n\n.view a.info {\n    display: inline-block;\n    text-decoration: none;\n    padding: 7px 14px;\n    margin-top: 1px;\n    background: #d9534f;\n    color: #fff;\n    text-transform: uppercase;\n    box-shadow: 0 0 1px #111;\n}\n\n.view a.info:hover {\n    box-shadow: 0 0 5px #75767c;\n}\n\n.view-first img {\n    transition: all 0.2s linear;\n}\n\n.view-first .mask {\n    opacity: 0;\n    background-color: rgba(219, 127, 8, 0.7);\n    transition: all 0.4s ease-in-out;\n}\n\n.view-first h2 {\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n}\n\n.view-first p {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n    opacity: 0;\n    transition: all 0.2s linear;\n}\n\n.view-first img.pic {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n    opacity: 0;\n    transition: all 0.4s linear;\n}\n\n.view-first a.info {\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n}\n\n.view-first:hover img {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.view-first:hover .mask {\n    opacity: 1;\n}\n\n.view-first:hover img.pic {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n}\n\n.view-first:hover h2,\n.view-first:hover p,\n.view-first:hover a.info {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n}\n\n.view-first:hover p {\n    transition-delay: 0.1s;\n}\n\n.view-first:hover a.info {\n    transition-delay: 0.2s;\n}\n\n.view-first:hover img.pic {\n    transition-delay: 0.2s;\n}\n\n.link {\n    color: #d9534f;\n}\n\n.link:hover {\n    color: #c9302c;\n    border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main container\">\n    <!-- FOURTH EXAMPLE -->\n    <div class=\"row\">\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n            <img src=\"assets/Graphics/StudyTipsBlog.png\">\n            <div class=\" mask col-md-4   \">\n\n                <h2>StudyTipsBlog</h2>\n                <p>Allows the users to write their own study tip that contains a picture, description, and a rate of how helpful the tip is.\n\n                </p>\n                <a href=\"https://github.com/annabuyevich/StudyTipsBlog \" class=\"info \" id=\"pixel\">Learn More</a>\n            </div>\n        </div>\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n            <img src=\"assets/Graphics/healthruwords.png\">\n            <div class=\" mask col-md-4  \">\n\n                <h2>HealThruWords</h2>\n                <p>An android app that displays quotes from a <a href=\" https://market.mashape.com/healthruwords/universal-inspirational-quotes \" class=\"link\" id=\"pixel\">Mashape API,</a> contains a chat room and a bunch of other fun features.\n                </p>\n                <a href=\"https://github.com/annabuyevich/HealThruWords \" class=\"info \">Learn More</a>\n            </div>\n        </div>\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4 \">\n            <img src=\"assets/Graphics/Searchable.png\" />\n            <div class=\"mask col-md-4  \">\n                <h2>Searchable</h2>\n                <p>A text editor with complex search features. Searches Synonym, Entity, Part of Speech, Similar Word Structure, Similar Sentence Structure.</p>\n                <a href=\"https://github.com/NoteSpaceX/Searchable \" class=\"info \">Learn More</a>\n            </div>\n        </div>\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4 \">\n            <img src=\"assets/Graphics/self_driving_car.png\" />\n            <div class=\"mask col-md-4  \">\n                <h2>Self Driving Car</h2>\n                <p>A game where you can draw sand and have the car try to figure out how to go from town to the airport and back. The car uses Deep Q-Learning to figure out everything on its own.</p>\n                <a href=\"https://github.com/annabuyevich/Self-Driving-Car \" class=\"info \">Learn More</a>\n            </div>\n        </div>\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4 \">\n            <img src=\"assets/Graphics/timeslot.png\" />\n            <div class=\"mask col-md-4  \">\n                <h2>Timeslot</h2>\n                <p>Allowed users to create teams and schedule meetings appropriately. Collaborated on a CRUD Web Application at Royal Institute of Technology in Stockholm, Sweden. Tech stack included Flask and SQLite.</p>\n                <a href=\"https://github.com/annabuyevich/timeslot\" class=\"info \">Learn More</a>\n            </div>\n        </div>\n\n        <div class=\"view view-fourth col-xs-4 col-sm-4 col-md-4 col-lg-4 \">\n            <img src=\"assets/Graphics/nst.png\" />\n            <div class=\"mask col-md-4  \">\n                <h2>Neural Style Transfer for Transferring Building Texture</h2>\n                <p> Collaborated on project that used the neural style transfer algorithm to generate an image of a building using building to represent the content image and another building representing the style.\n                </p>\n                <a href=\"https://github.com/ebatuhankaynak/DeepPotato\" class=\"info \">Learn More</a>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-fourth img {\n    transition: all 0.4s ease-in-out 0.2s;\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n}\n\n.view-fourth .mask {\n    background-color: rgba(0, 0, 0, 0.8);\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    -webkit-transform: scale(0) rotate(-180deg);\n    transform: scale(0) rotate(-180deg);\n    transition: all 0.4s ease-in;\n    border-radius: 0px;\n}\n\n.view-fourth h2 {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    background: transparent;\n    margin: 20px 40px 0px 40px;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth p {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth a.info {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n}\n\n.view-fourth img.pic {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition: all 2.0s ease-in-out;\n}\n\n.view-fourth:hover .mask {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n    -webkit-transform: scale(1) rotate(0deg);\n    transform: scale(1) rotate(0deg);\n    transition-delay: 0.2s;\n}\n\n.view-fourth:hover img {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n    opacity: 0;\n    transition-delay: 0s;\n}\n\n.view-fourth:hover h2,\n.view-fourth:hover p,\n.view-fourth:hover a.info,\n.view-fourth:hover img.pic {\n    -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    filter: alpha(opacity=100);\n    opacity: 1;\n    transition-delay: 0.5s;\n}\n\n.view {\n    width: 300px;\n    height: 200px;\n    margin-left: 35px;\n}\n\n.view .mask,\n.view .content {\n    width: 300px;\n    height: 200px;\n    position: absolute;\n    overflow: hidden;\n    display: inline-block;\n    top: 0;\n    left: 0;\n}\n\n.view img {\n    display: inline-block;\n    position: relative;\n    height: 100%;\n    widows: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 100%;\n    vertical-align: middle;\n}\n\n.view h2 {\n    text-transform: uppercase;\n    color: #fff;\n    text-align: center;\n    position: relative;\n    font-size: 17px;\n    padding: 10px;\n    background: #d9534f;\n    margin: 20px 0 0 0;\n    vertical-align: middle;\n}\n\n.view img.pic {\n    display: inline-block;\n    text-decoration: none;\n    padding: 10px 14px 10px 14px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #000;\n    color: #fff;\n    text-transform: uppercase;\n    box-shadow: 0 0 1px #000;\n}\n\n.view-first img {\n    transition: all 0.2s linear;\n}\n\n.view-first .mask {\n    opacity: 0;\n    background-color: rgba(219, 127, 8, 0.7);\n    transition: all 0.4s ease-in-out;\n}\n\n.view-first h2 {\n    -webkit-transform: translateY(-100px);\n            transform: translateY(-100px);\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n}\n\n.view-first img.pic {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n    opacity: 0;\n    transition: all 0.4s linear;\n}\n\n.view-first a.info {\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n}\n\n.view-first:hover img {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n\n.view-first:hover .mask {\n    opacity: 1;\n}\n\n.view-first:hover img.pic {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n}\n\n.view-first:hover h2 {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n}\n\n.view-first:hover p {\n    transition-delay: 0.1s;\n}\n\n.view-first:hover img.pic {\n    transition-delay: 0.2s;\n}\n\n.row {\n    margin-top: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main container\">\n    <!-- FOURTH EXAMPLE -->\n    <div class=\"row\">\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/java.png\">\n            <div class=\"mask\">\n                <h2>HealThruWords</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/c++.png\" />\n            <div class=\"mask\">\n                <h2>Learned</h2>\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/python.png\" />\n            <div class=\"mask\">\n                <h2>Self-Driving Car</h2>\n                <h2>Searchable</h2>\n                <h2>NST for Transferring Building Texture</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/sql.png\" />\n            <div class=\"mask\">\n                <h2>Working at Intelligent Medical Objects</h2>\n                <h2>TimeSlot</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/javascript_jquery.png\" />\n            <div class=\"mask\">\n                <h2>StudyTipsBlog</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4\">\n            <img src=\"assets/Graphics/c_sharp.png\" />\n            <div class=\" mask \">\n                <h2>Working at Intelligent Medical Objects</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4 \">\n            <img src=\"assets/Graphics/nodejs_express.png\" />\n            <div class=\"mask \">\n                <h2>StudyTipsBlog</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4 \">\n            <img src=\"assets/Graphics/mongodb.png\" />\n            <div class=\"mask \">\n                <h2>StudyTipsBlog</h2>\n\n            </div>\n        </div>\n        <div class=\"view view-fourth col-md-4 \">\n            <img src=\"assets/Graphics/angular.png\" />\n            <div class=\"mask \">\n                <h2>Portfolio</h2>\n                <h2>Working at Intelligent Medical Objects</h2>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());

//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/skills.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/annab./Dropbox/personal-website/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map