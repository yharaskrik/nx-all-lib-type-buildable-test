import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibComponent } from './ng-lib.component';
import { NgLib2Module } from '@all-libs/ng-lib2';

describe('NgLibComponent', () => {
  let component: NgLibComponent;
  let fixture: ComponentFixture<NgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgLibComponent],
      imports: [NgLib2Module],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
