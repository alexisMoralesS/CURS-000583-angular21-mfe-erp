import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleShowDialogComponent } from './sale-show-dialog.component';

describe('SaleShowDialogComponent', () => {
  let component: SaleShowDialogComponent;
  let fixture: ComponentFixture<SaleShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleShowDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleShowDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
