import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Challenge } from '../model/challengeModel'

@Component({
  selector: 'app-challenge-listing-screen',
  templateUrl: './challenge-listing-screen.component.html',
  styleUrl: './challenge-listing-screen.component.css'
})
export class ChallengeListingScreenComponent implements OnInit {
  challenge: Challenge[] = [];
  constructor(private router: Router){ }

  // call after the constructor
  // initialize the data - component life cycle hook
  ngOnInit(): void {
    if(!this.isLocalStorageAvailable()){
      return
    }
    const challenges_localStorage = JSON.parse(localStorage.getItem('challenges') || '[]');
    this.challenge = challenges_localStorage
  }

  // check for local storage availability first
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '_test_key_'
      localStorage.setItem(testKey, testKey)
      localStorage.removeItem(testKey)
      return true
    } catch (e) {
      console.error("Local Storage is not available")
      return false
    }
  }
  // use param to get id
  public navigateRecording(id: number): void {
    this.router.navigateByUrl('/challenge-recording/' + id)
  }

  public navigateCreateChallenge(){
    this.router.navigateByUrl('/challenge-creation')
  }

  
}
