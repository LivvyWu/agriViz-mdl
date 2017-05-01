import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizHeaderComponent } from './viz-header.component';

describe('VizHeaderComponent', () => {
  let component: VizHeaderComponent;
  let fixture: ComponentFixture<VizHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
