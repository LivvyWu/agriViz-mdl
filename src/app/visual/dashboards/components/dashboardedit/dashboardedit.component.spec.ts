import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardeditComponent } from './dashboardedit.component';

describe('DashboardeditComponent', () => {
  let component: DashboardeditComponent;
  let fixture: ComponentFixture<DashboardeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
