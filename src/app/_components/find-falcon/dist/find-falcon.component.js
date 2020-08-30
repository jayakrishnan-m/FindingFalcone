"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FindFalconComponent = void 0;
var core_1 = require("@angular/core");
var FindFalconComponent = /** @class */ (function () {
    function FindFalconComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.numberOfDestination = 4;
        this.selectedItems = [];
        this.planets = [];
        this.vehicles = [];
        this.availablePlanets = [];
        this.availableVehicles = [];
        this.arrivalTimeByPlanet = [];
    }
    FindFalconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.isLoading.next(true);
        this.dataService.getPlanets().subscribe(function (data) {
            _this.planets = data;
            _this.dataService.isLoading.next(false);
            _this.planets.forEach(function (element) {
                _this.availablePlanets.push({
                    name: element.name,
                    distance: element.distance,
                    available: true
                });
            });
        });
        this.dataService.isLoading.next(true);
        this.vehicles = this.dataService.getVehicles().subscribe(function (data) {
            _this.dataService.isLoading.next(false);
            _this.vehicles = data;
            _this.availableVehicles = _this.vehicles;
        });
        for (var index = 0; index < this.numberOfDestination; index++) {
            this.selectedItems[index] = {
                planets: {
                    name: 'N/A',
                    distance: 'N/A',
                    imageUrl: 'assets/img/planet-unknown.png',
                    isSet: false
                },
                vehicles: {
                    name: 'N/A',
                    speed: 'N/A',
                    maxDistance: 'N/A',
                    imageUrl: 'assets/img/vehicle-unknown.png',
                    isSet: false
                }
            };
        }
    };
    FindFalconComponent.prototype.selectDestination = function (destinationIndex, planetObj) {
        var _this = this;
        this.availablePlanets.forEach(function (element) {
            if (element.name == planetObj.name) {
                element.available = false;
            }
            if (_this.selectedItems[destinationIndex]['planets'].isSet) {
                if (element.name == _this.selectedItems[destinationIndex]['planets'].name) {
                    element.available = true;
                }
            }
        });
        this.selectedItems[destinationIndex]['planets'].name = planetObj.name;
        this.selectedItems[destinationIndex]['planets'].distance =
            planetObj.distance;
        this.selectedItems[destinationIndex]['planets'].imageUrl =
            'assets/img/planets/' + planetObj.name + '.png';
        this.selectedItems[destinationIndex]['planets'].isSet = true;
        this.resetVehiclesOnDestinationChange(destinationIndex);
    };
    FindFalconComponent.prototype.selectVehicle = function (destinationIndex, vehicleObj) {
        var _this = this;
        this.availableVehicles.forEach(function (element) {
            if (element.name == vehicleObj.name) {
                element.total_no = --element.total_no;
            }
            if (_this.selectedItems[destinationIndex]['vehicles'].isSet) {
                if (element.name == _this.selectedItems[destinationIndex]['vehicles'].name) {
                    element.total_no = ++element.total_no;
                }
            }
        });
        this.selectedItems[destinationIndex]['vehicles'].imageUrl =
            'assets/img/vehicles/' + vehicleObj.name + '.png';
        this.selectedItems[destinationIndex]['vehicles'].name = vehicleObj.name;
        this.selectedItems[destinationIndex]['vehicles'].speed = vehicleObj.speed;
        this.selectedItems[destinationIndex]['vehicles'].maxDistance =
            vehicleObj.max_distance;
        this.selectedItems[destinationIndex]['vehicles'].isSet = true;
        this.arrivalTimeByPlanet[destinationIndex] =
            this.selectedItems[destinationIndex]['planets'].distance /
                this.selectedItems[destinationIndex]['vehicles'].speed;
    };
    FindFalconComponent.prototype.resetVehiclesOnDestinationChange = function (destinationIndex) {
        var _this = this;
        this.availableVehicles.forEach(function (element) {
            if (_this.selectedItems[destinationIndex]['vehicles'].isSet) {
                if (element.name == _this.selectedItems[destinationIndex]['vehicles'].name) {
                    element.total_no = ++element.total_no;
                }
            }
        });
        this.selectedItems[destinationIndex]['vehicles'] = {
            name: 'N/A',
            speed: 'N/A',
            maxDistance: 'N/A',
            imageUrl: 'assets/img/vehicle-unknown.png',
            isSet: false
        };
    };
    FindFalconComponent.prototype.checkAllDestinationAndVehiclesAreSet = function () {
        var isReadyToFindFalcone = true;
        this.selectedItems.forEach(function (item) {
            if (!item['vehicles'].isSet || !item['planets'].isSet) {
                isReadyToFindFalcone = false;
            }
        });
        return isReadyToFindFalcone;
    };
    FindFalconComponent.prototype.getAvailablePlanets = function () {
        var result = this.availablePlanets.filter(function (item) { return item.available; });
        return result;
    };
    FindFalconComponent.prototype.getAvailableVehicles = function (distance) {
        var result = [];
        result = this.availableVehicles.filter(function (item) { return item.max_distance >= distance && item.total_no > 0; });
        return result;
    };
    FindFalconComponent.prototype.getSelectedDestinationAndVehicles = function () {
        var result = {
            planet_names: [],
            vehicle_names: []
        };
        this.selectedItems.forEach(function (item) {
            result['planet_names'].push(item['planets']['name']);
            result['vehicle_names'].push(item['vehicles']['name']);
        });
        return result;
    };
    FindFalconComponent.prototype.getTotalTime = function () {
        var totalTime = 0;
        this.arrivalTimeByPlanet.forEach(function (element) {
            totalTime += element;
        });
        return totalTime;
    };
    FindFalconComponent.prototype.findFalcone = function () {
        var _this = this;
        this.dataService.isLoading.next(true);
        if (this.checkAllDestinationAndVehiclesAreSet()) {
            this.dataService.getToken().subscribe(function (data) {
                var requestData = _this.getSelectedDestinationAndVehicles();
                requestData['token'] = data['token'];
                _this.dataService.findFalcone(requestData).subscribe(function (data) {
                    _this.dataService.isLoading.next(false);
                    if (data['status'] === 'success') {
                        data['time'] = _this.getTotalTime();
                        data['search_data'] = _this.selectedItems.filter(function (item) {
                            if (data['planet_name'] === item['planets']['name']) {
                                return item;
                            }
                        });
                        data['search_data'] = data['search_data'][0];
                    }
                    _this.dataService.updateLatestResult(data);
                    _this.router.navigate(['/result']);
                });
            });
        }
    };
    FindFalconComponent.prototype.resetData = function () {
        var _this = this;
        this.availablePlanets = [];
        this.availableVehicles = [];
        this.selectedItems = [];
        this.arrivalTimeByPlanet = [];
        this.availableVehicles = this.vehicles;
        this.planets.forEach(function (element) {
            _this.availablePlanets.push({
                name: element.name,
                distance: element.distance,
                available: true
            });
        });
        for (var index = 0; index < this.numberOfDestination; index++) {
            this.selectedItems[index] = {
                planets: {
                    name: 'N/A',
                    distance: 'N/A',
                    imageUrl: 'assets/img/planet-unknown.png',
                    isSet: false
                },
                vehicles: {
                    name: 'N/A',
                    speed: 'N/A',
                    maxDistance: 'N/A',
                    imageUrl: 'assets/img/vehicle-unknown.png',
                    isSet: false
                }
            };
        }
    };
    FindFalconComponent = __decorate([
        core_1.Component({
            selector: 'app-find-falcon',
            templateUrl: './find-falcon.component.html',
            styleUrls: ['./find-falcon.component.sass']
        })
    ], FindFalconComponent);
    return FindFalconComponent;
}());
exports.FindFalconComponent = FindFalconComponent;
