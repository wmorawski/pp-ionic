import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersModalComponent } from './members-modal.component';

describe('MembersModalComponent', () => {
  let component: MembersModalComponent;
  let fixture: ComponentFixture<MembersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
