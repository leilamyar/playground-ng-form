import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrimeNGFormComponent } from './my-prime-ngform.component';

describe('MyPrimeNGFormComponent', () => {
  let component: MyPrimeNGFormComponent;
  let fixture: ComponentFixture<MyPrimeNGFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrimeNGFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPrimeNGFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
