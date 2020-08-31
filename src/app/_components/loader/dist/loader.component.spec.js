"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var loader_component_1 = require("./loader.component");
var api_service_1 = require("src/app/_services/api.service");
var testing_2 = require("@angular/common/http/testing");
describe('LoaderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [loader_component_1.LoaderComponent],
            imports: [testing_2.HttpClientTestingModule],
            providers: [api_service_1.ApiService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(loader_component_1.LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
