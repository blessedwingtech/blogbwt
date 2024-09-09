import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsTxtComponent } from './ads.txt.component';

describe('AdsTxtComponent', () => {
  let component: AdsTxtComponent;
  let fixture: ComponentFixture<AdsTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdsTxtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
