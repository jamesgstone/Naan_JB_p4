import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMComponent } from './left-m.component';

describe('LeftMComponent', () => {
  let component: LeftMComponent;
  let fixture: ComponentFixture<LeftMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
