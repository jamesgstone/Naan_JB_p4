import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMComponent } from './right-m.component';

describe('RightMComponent', () => {
  let component: RightMComponent;
  let fixture: ComponentFixture<RightMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
