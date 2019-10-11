import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesViewHomePage } from './parties-view-home.page';

describe('PartiesViewHomePage', () => {
  let component: PartiesViewHomePage;
  let fixture: ComponentFixture<PartiesViewHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesViewHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesViewHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
