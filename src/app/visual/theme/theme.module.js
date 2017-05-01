"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var viz_header_component_1 = require("./viz-header/viz-header.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var THEME_COMPONENTS = [
    header_component_1.HeaderComponent,
    footer_component_1.FooterComponent,
    viz_header_component_1.VizHeaderComponent
];
var ThemeModule = ThemeModule_1 = (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: [],
        };
    };
    return ThemeModule;
}());
ThemeModule = ThemeModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        declarations: THEME_COMPONENTS.slice(),
        exports: THEME_COMPONENTS.slice()
    })
], ThemeModule);
exports.ThemeModule = ThemeModule;
var ThemeModule_1;
