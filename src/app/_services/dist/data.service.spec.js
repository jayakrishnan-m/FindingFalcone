"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var data_service_1 = require("./data.service");
describe('DataService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(data_service_1.DataService);
    });
    // it('should be created', () => {
    //   expect(service).toBeTruthy();
    // });
});
