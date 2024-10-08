import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPictureComponent } from './add-picture.component';

describe('AddPictureComponent', () => {
  let component: AddPictureComponent;
  let fixture: ComponentFixture<AddPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
