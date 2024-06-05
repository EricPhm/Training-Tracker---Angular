import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCreationScreenComponent } from './challenge-creation-screen.component';

describe('ChallengeCreationScreenComponent', () => {
  let component: ChallengeCreationScreenComponent;
  let fixture: ComponentFixture<ChallengeCreationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeCreationScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeCreationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
