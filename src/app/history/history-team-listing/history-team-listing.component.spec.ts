import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamListingComponent } from './history-team-listing.component';

describe('HistoryTeamListingComponent', () => {
  let component: HistoryTeamListingComponent;
  let fixture: ComponentFixture<HistoryTeamListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTeamListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTeamListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
