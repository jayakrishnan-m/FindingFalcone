"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./_components/home/home.component");
var result_component_1 = require("./_components/result/result.component");
var find_falcon_component_1 = require("./_components/find-falcon/find-falcon.component");
var header_component_1 = require("./_components/header/header.component");
var footer_component_1 = require("./_components/footer/footer.component");
var buttons_1 = require("ngx-bootstrap/buttons");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var animations_1 = require("@angular/platform-browser/animations");
var api_service_1 = require("./_services/api.service");
var data_service_1 = require("./_services/data.service");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                result_component_1.ResultComponent,
                find_falcon_component_1.FindFalconComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                buttons_1.ButtonsModule.forRoot(),
                dropdown_1.BsDropdownModule.forRoot(),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                tooltip_1.TooltipModule.forRoot()
            ],
            providers: [api_service_1.ApiService, data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
