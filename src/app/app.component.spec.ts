import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

import * as Nanoid from 'nanoid';

// mock console.error to avoid "Amplify has not been configured correctly" error, which is expected in unit tests.
jest.spyOn(console, 'error').mockImplementation();

// mock nanoid so that the snapshot is stable
jest.spyOn(Nanoid, 'nanoid').mockReturnValue('mockrandomvalue');

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render Authenticator as expected`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // wait for authenticator to finish rendering
    tick();
    fixture.detectChanges();

    expect(fixture.nativeElement).toMatchSnapshot();
  }));
});
