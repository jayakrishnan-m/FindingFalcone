"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var api_service_1 = require("./api.service");
describe('ApiService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [api_service_1.ApiService]
        });
        service = testing_1.TestBed.inject(api_service_1.ApiService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
