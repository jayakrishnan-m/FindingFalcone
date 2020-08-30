"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResultComponent = void 0;
var core_1 = require("@angular/core");
var ResultComponent = /** @class */ (function () {
    function ResultComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.falconeFound = true;
        this.planetName = '';
        this.vehicleName = '';
        this.distance = 0;
        this.time = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.latestResult.subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/']);
            }
            if (data['status'] == 'success') {
                _this.falconeFound = true;
                _this.planetName = data['planet_name'];
                _this.vehicleName = data['search_data']['vehicles']['name'];
                _this.distance = data['search_data']['planets']['distance'];
                _this.time = data['time'];
            }
            else {
                _this.falconeFound = false;
            }
        });
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'app-result',
            templateUrl: './result.component.html',
            styleUrls: ['./result.component.sass']
        })
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
