"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var home_component_1 = require("./home.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [home_component_1.HomeComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('Should have a button', function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        var comp = fixture.componentInstance;
        var de = fixture.debugElement.query(platform_browser_1.By.css('button'));
        var element = de.nativeElement;
        expect(element.textContent.trim()).toBe('Start game');
    });
});
