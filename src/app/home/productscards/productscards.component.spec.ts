import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscardsComponent } from './productscards.component';

describe('ProductscardsComponent', () => {
  let component: ProductscardsComponent;
  let fixture: ComponentFixture<ProductscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductscardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
