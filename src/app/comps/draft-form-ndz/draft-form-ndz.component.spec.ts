import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftFormNdzComponent } from './draft-form-ndz.component';

describe('DraftFormNdzComponent', () => {
  let component: DraftFormNdzComponent;
  let fixture: ComponentFixture<DraftFormNdzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftFormNdzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftFormNdzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
