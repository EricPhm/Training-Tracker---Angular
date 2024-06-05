// import { Segment } from './../model/challengeModel';
import { Component } from '@angular/core';
import { Challenge } from '../model/challengeModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-challenge-creation-screen',
  templateUrl: './challenge-creation-screen.component.html',
  styleUrl: './challenge-creation-screen.component.css'
})
export class ChallengeCreationScreenComponent {
  challenge: Challenge;

  constructor(private router: Router){
    this.challenge = {
      id: 0,
      name: '',
      segments: []
    }
  }

  // add empty string to list of segments
  public handleAddSegment(): void {
    this.challenge.segments.push({ id: this.challenge.segments.length + 1, name: '' });
  }

  // take the existed challenges combine with new challenges
  // then set overwrite the local storage by set it the same name to local storage
  public handleAddChallenge(){
    if (!this.challenge.name || !this.challenge.segments) return

    // Merge the new challenge with the existing challenges from local storage
    const existingChallenges = JSON.parse(localStorage.getItem('challenges') || '[]')
    // get last id, existed in local storage
    const highestId = existingChallenges.reduce((maxId: number, ch: Challenge) => Math.max(ch.id, maxId), 0)

    // store the challenge name and segments in local storage
    const newChallenge: Challenge = {
      id: highestId + 1,
      name: this.challenge.name,
      segments: this.challenge.segments.map(segment => ({ ...segment }))
    };

    // create new array hold old array's items, then add new item in the end
    const updatedChallenge = [...existingChallenges, newChallenge]
    // same name as existed challenge list
    localStorage.setItem('challenges', JSON.stringify(updatedChallenge));
  
    // reset the challenge after add 
    this.challenge = {
      id: 0,
      name: '',
      segments: []
    }

    // route to challenge listing page
    this.router.navigateByUrl('/')
  }

  // delete the index base off index 
  public handleDeleteSegment(index: number): void {
    this.challenge.segments.splice(index,1)
    console.log("delete" + index)
  }

  public handleBackBtn() {
    this.router.navigateByUrl('/')
  }
}


