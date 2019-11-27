import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesViewMusicPage } from './parties-view-music.page';

describe('PartiesViewMusicPage', () => {
  let component: PartiesViewMusicPage;
  let fixture: ComponentFixture<PartiesViewMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesViewMusicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesViewMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
