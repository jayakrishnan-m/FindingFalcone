"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var loader_component_1 = require("./loader.component");
describe('LoaderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [loader_component_1.LoaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(loader_component_1.LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
});
