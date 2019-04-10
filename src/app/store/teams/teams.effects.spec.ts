import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TeamsEffects } from './teams.effects';

describe('TeamsEffects', () => {
  let actions$: Observable<any>;
  let effects: TeamsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeamsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TeamsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
