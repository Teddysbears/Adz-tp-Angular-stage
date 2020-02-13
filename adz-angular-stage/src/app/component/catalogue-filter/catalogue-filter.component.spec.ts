import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueFilterComponent } from './catalogue-filter.component';

describe('CatalogueFilterComponent', () => {
  let component: CatalogueFilterComponent;
  let fixture: ComponentFixture<CatalogueFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
