import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesPage } from './parties.page';

describe('PartiesPage', () => {
  let component: PartiesPage;
  let fixture: ComponentFixture<PartiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
