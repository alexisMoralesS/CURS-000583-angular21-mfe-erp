import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleListTableComponent } from './sale-list-table.component';

describe('SaleListTableComponent', () => {
  let component: SaleListTableComponent;
  let fixture: ComponentFixture<SaleListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleListTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
