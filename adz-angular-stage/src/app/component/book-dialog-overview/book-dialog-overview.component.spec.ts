import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDialogOverviewComponent } from './book-dialog-overview.component';

describe('BookDialogOverviewComponent', () => {
  let component: BookDialogOverviewComponent;
  let fixture: ComponentFixture<BookDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
