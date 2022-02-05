import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePromotionalComponent } from './site-promotional.component';

describe('SitePromotionalComponent', () => {
  let component: SitePromotionalComponent;
  let fixture: ComponentFixture<SitePromotionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitePromotionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePromotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
