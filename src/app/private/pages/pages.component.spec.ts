import { filter, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { AppSettings } from '@app/app.settings';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { BreakpointState } from '@angular/cdk/layout';


describe('PagesComponent', () => {
  const matchObj = [
    // initially all are false
    { matchStr: '(min-width: 1024px)', result: false },
    { matchStr: '(min-width: 1366px)', result: false },
    { matchStr: '(max-width: 1366px)', result: false },
  ];
  const fakeObserve = (s: string[]): Observable<BreakpointState> =>
    from(matchObj).pipe(
      filter(match => match.matchStr === s[0]),
      map(match => ({ matches: match.result, breakpoints: {} })),
    );
  const bpSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  bpSpy.observe.and.callFake(fakeObserve);


  const spy = jasmine.createSpy();
  const testWidth = 420;
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [AppSettings],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    window.addEventListener('resize', spy);
  });

  it('does not fire resize event by default', () => {
    // expect(spy).not.toHaveBeenCalled();
    expect(window.innerWidth).not.toBe(testWidth);
  });

  describe('when resize event is fired', () => {
    beforeAll(() => {
      // window.innerWidth = testWidth;
      window.dispatchEvent(new Event('resize'));
      const resizeEvent = document.createEvent('Event');
      resizeEvent.initEvent('resize', true, true);
      window.dispatchEvent(resizeEvent);
    });

    it('updates the window width', () => {
      expect(spy).toHaveBeenCalled();
      expect(window.innerWidth).toBe(1200);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});


