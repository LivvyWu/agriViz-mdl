import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCreateComponent } from './chartcreate.component';

describe('ChartCreateComponent', () => {
  let component: ChartCreateComponent;
  let fixture: ComponentFixture<ChartCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
