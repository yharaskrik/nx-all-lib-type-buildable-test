import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLib2Component } from './ng-lib2.component';

describe('NgLib2Component', () => {
  let component: NgLib2Component;
  let fixture: ComponentFixture<NgLib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgLib2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
