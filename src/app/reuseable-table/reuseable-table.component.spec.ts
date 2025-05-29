import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableTableComponent } from './reuseable-table.component';

describe('ReuseableTableComponent', () => {
  let component: ReuseableTableComponent;
  let fixture: ComponentFixture<ReuseableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseableTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
