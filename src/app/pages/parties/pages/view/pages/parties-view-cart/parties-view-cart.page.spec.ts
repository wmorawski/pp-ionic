import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesViewCartPage } from './parties-view-cart.page';

describe('PartiesViewCartPage', () => {
  let component: PartiesViewCartPage;
  let fixture: ComponentFixture<PartiesViewCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesViewCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesViewCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
