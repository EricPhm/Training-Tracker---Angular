import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeRecordingScreenComponent } from './challenge-recording-screen.component';

describe('ChallengeRecordingScreenComponent', () => {
  let component: ChallengeRecordingScreenComponent;
  let fixture: ComponentFixture<ChallengeRecordingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeRecordingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeRecordingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
