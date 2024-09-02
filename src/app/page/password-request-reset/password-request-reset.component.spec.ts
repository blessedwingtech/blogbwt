import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequestResetComponent } from './password-request-reset.component';

describe('PasswordRequestResetComponent', () => {
  let component: PasswordRequestResetComponent;
  let fixture: ComponentFixture<PasswordRequestResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordRequestResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRequestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
