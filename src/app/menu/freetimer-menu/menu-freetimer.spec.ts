import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFreetimerComponent } from './menu-freetimer.component';

describe('MenuFreetimerComponent', () => {
  let component: MenuFreetimerComponent;
  let fixture: ComponentFixture<MenuFreetimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFreetimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFreetimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
