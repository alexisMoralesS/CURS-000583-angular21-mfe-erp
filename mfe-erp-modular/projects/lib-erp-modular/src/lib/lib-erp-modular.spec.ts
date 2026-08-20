import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibErpModular } from './lib-erp-modular';

describe('LibErpModular', () => {
  let component: LibErpModular;
  let fixture: ComponentFixture<LibErpModular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibErpModular],
    }).compileComponents();

    fixture = TestBed.createComponent(LibErpModular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
