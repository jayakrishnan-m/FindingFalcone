"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var find_falcon_component_1 = require("./find-falcon.component");
describe('FindFalconComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [find_falcon_component_1.FindFalconComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(find_falcon_component_1.FindFalconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
});
