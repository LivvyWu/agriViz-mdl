import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcreateComponent } from './dashboardcreate.component';

describe('DashboardcreatComponent', () => {
  let component: DashboardcreateComponent;
  let fixture: ComponentFixture<DashboardcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
