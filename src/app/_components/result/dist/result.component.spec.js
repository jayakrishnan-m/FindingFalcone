"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var result_component_1 = require("./result.component");
var testing_2 = require("@angular/router/testing");
var api_service_1 = require("src/app/_services/api.service");
var testing_3 = require("@angular/common/http/testing");
describe('ResultComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [result_component_1.ResultComponent],
            imports: [testing_2.RouterTestingModule, testing_3.HttpClientTestingModule],
            providers: [api_service_1.ApiService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(result_component_1.ResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
