import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteditComponent } from './chartedit.component';

describe('CharteditComponent', () => {
  let component: CharteditComponent;
  let fixture: ComponentFixture<CharteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
