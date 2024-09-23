import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerminosComponent } from './form-terminos.component';

describe('FormTerminosComponent', () => {
  let component: FormTerminosComponent;
  let fixture: ComponentFixture<FormTerminosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTerminosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTerminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
