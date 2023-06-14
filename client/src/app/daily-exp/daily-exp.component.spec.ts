import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpComponent } from './daily-exp.component';

describe('DailyExpComponent', () => {
  let component: DailyExpComponent;
  let fixture: ComponentFixture<DailyExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
