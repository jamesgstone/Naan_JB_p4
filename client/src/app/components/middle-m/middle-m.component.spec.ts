import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleMComponent } from './middle-m.component';

describe('MiddleMComponent', () => {
  let component: MiddleMComponent;
  let fixture: ComponentFixture<MiddleMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
