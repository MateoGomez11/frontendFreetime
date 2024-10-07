import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimerComponent } from './fulltimer.component';

describe('FulltimerComponent', () => {
  let component: FulltimerComponent;
  let fixture: ComponentFixture<FulltimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulltimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
