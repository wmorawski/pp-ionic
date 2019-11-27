import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTrackComponent } from './saved-track.component';

describe('SavedTrackComponent', () => {
  let component: SavedTrackComponent;
  let fixture: ComponentFixture<SavedTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTrackComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
