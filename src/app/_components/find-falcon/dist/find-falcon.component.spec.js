"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var find_falcon_component_1 = require("./find-falcon.component");
var platform_browser_1 = require("@angular/platform-browser");
var api_service_1 = require("src/app/_services/api.service");
var testing_2 = require("@angular/common/http/testing");
var testing_3 = require("@angular/router/testing");
describe('FindFalconComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [find_falcon_component_1.FindFalconComponent],
            imports: [
                testing_2.HttpClientTestingModule, testing_3.RouterTestingModule
            ],
            providers: [api_service_1.ApiService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Should have a button for reset', function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        var comp = fixture.componentInstance;
        var de = fixture.debugElement.query(platform_browser_1.By.css('.reset-button'));
        var element = de.nativeElement;
        expect(element.textContent.trim()).toBe('Reset');
    });
    it('Should have a button for find falcone', function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        var comp = fixture.componentInstance;
        var de = fixture.debugElement.query(platform_browser_1.By.css('.find-falcone'));
        var element = de.nativeElement;
        expect(element.textContent.trim()).toBe('Find Falcone');
    });
    it('Should have a label for display planet and vehicle name', function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        var comp = fixture.componentInstance;
        var de = fixture.debugElement.query(platform_browser_1.By.css('.no-wrap'));
    });
    it('Should have a label for display total time', function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        var comp = fixture.componentInstance;
        var de = fixture.debugElement.query(platform_browser_1.By.css('.fixed-label'));
        var element = de.nativeElement;
        expect(element.textContent.trim()).toBe('');
    });
});
