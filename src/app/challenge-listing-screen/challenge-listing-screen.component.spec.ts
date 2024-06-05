import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListingScreenComponent } from './challenge-listing-screen.component';

describe('ChallengeListingScreenComponent', () => {
  let component: ChallengeListingScreenComponent;
  let fixture: ComponentFixture<ChallengeListingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeListingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeListingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
