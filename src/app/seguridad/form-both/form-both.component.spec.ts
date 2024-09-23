import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBothComponent } from './form-both.component';

describe('FormBothComponent', () => {
  let component: FormBothComponent;
  let fixture: ComponentFixture<FormBothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
