import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFalconComponent } from './find-falcon.component';
import { By } from '@angular/platform-browser';
import { ApiService } from 'src/app/_services/api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FindFalconComponent', () => {
  let component: FindFalconComponent;
  let fixture: ComponentFixture<FindFalconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFalconComponent ],
      imports: [
        HttpClientTestingModule,RouterTestingModule
      ],
      providers:[ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have a button for reset', () => {
    fixture = TestBed.createComponent(FindFalconComponent);
    let comp = fixture.componentInstance;
    let de = fixture.debugElement.query(By.css('.reset-button'));
    let element  = de.nativeElement;
    expect(element.textContent.trim()).toBe('Reset');
  });

  it('Should have a button for find falcone', () => {
    fixture = TestBed.createComponent(FindFalconComponent);
    let comp = fixture.componentInstance;
    let de = fixture.debugElement.query(By.css('.find-falcone'));
    let element  = de.nativeElement;
    expect(element.textContent.trim()).toBe('Find Falcone');

  });

  it('Should have a label for display planet and vehicle name', () => {
    fixture = TestBed.createComponent(FindFalconComponent);
    let comp = fixture.componentInstance;
    let de = fixture.debugElement.query(By.css('.no-wrap'));
  });

  it('Should have a label for display total time', () => {
    fixture = TestBed.createComponent(FindFalconComponent);
    let comp = fixture.componentInstance;
    let de = fixture.debugElement.query(By.css('.fixed-label'));
    let element  = de.nativeElement;
    expect(element.textContent.trim()).toBe('');
  });
});
