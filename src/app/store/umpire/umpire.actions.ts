import { Action } from '@ngrx/store';
import {Umpire} from '../../shared/models/umpire.model';

export enum UmpireActionTypes {
  AllUmpiresRequested = '[Umpires Listing] All Umpires Requested',
  AllUmpiresLoaded = '[Umpires API] All Umpires Loaded'
}

export class AllUmpiresRequested implements Action {
  readonly type = UmpireActionTypes.AllUmpiresRequested;
}
export class AllUmpiresLoaded implements Action {
  readonly type = UmpireActionTypes.AllUmpiresLoaded;
  constructor(public payload: { umpires: Umpire[] }) {}
}

export type UmpireActions =
    AllUmpiresRequested
    | AllUmpiresLoaded;
