import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedVerificationComponent } from './failed-verification.component';

describe('FailedVerificationComponent', () => {
  let component: FailedVerificationComponent;
  let fixture: ComponentFixture<FailedVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
