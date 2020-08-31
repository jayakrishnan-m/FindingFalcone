"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var data_service_1 = require("./data.service");
var api_service_1 = require("./api.service");
var testing_2 = require("@angular/common/http/testing");
describe('DataService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [api_service_1.ApiService],
            imports: [testing_2.HttpClientTestingModule]
        });
        service = testing_1.TestBed.inject(data_service_1.DataService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
