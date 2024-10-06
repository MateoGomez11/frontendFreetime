import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConfimationComponent } from './account-confimation.component';

describe('AccountConfimationComponent', () => {
  let component: AccountConfimationComponent;
  let fixture: ComponentFixture<AccountConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountConfimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
