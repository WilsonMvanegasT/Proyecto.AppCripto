import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatatabitComponent } from './batatabit.component';

describe('BatatabitComponent', () => {
  let component: BatatabitComponent;
  let fixture: ComponentFixture<BatatabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatatabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatatabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
