import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdzComponent } from './adz.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AdzComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdzComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'adz-angular-stage'`, () => {
    const fixture = TestBed.createComponent(AdzComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('adz-angular-stage');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AdzComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('adz-angular-stage app is running!');
  });
});
