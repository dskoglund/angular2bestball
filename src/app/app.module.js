"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("hammerjs");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var navbar_component_1 = require("./navbar.component");
var golfer_detail_component_1 = require("./golfer-detail.component");
var app_component_1 = require("./app.component");
var golfers_component_1 = require("./golfers.component");
var golfer_service_1 = require("./golfer.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'detail/:id',
                    component: golfer_detail_component_1.GolferDetailComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'golfers',
                    component: golfers_component_1.GolfersComponent
                }
            ])
        ],
        declarations: [
            dashboard_component_1.DashboardComponent,
            navbar_component_1.NavbarComponent,
            app_component_1.AppComponent,
            golfer_detail_component_1.GolferDetailComponent,
            golfers_component_1.GolfersComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [golfer_service_1.GolferService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map