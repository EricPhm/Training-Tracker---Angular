import { Component, OnInit } from '@angular/core';
import { Challenge } from '../model/challengeModel';
import { JSDocComment } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-challenge-recording-screen',
  templateUrl: './challenge-recording-screen.component.html',
  styleUrl: './challenge-recording-screen.component.css'
})  
export class ChallengeRecordingScreenComponent implements OnInit {
  challenge: Challenge
  // for end btn show
  endBtn: boolean = false;
  // for else case in html
  elseBlock: any
  // get id from params
  id: number
  // original timer
  Org_second: any = '0' + 0
  Org_minute: any = '0' + 0
  Org_hour: any = '0' + 0
  Org_startTime: any
  // segment timer 
  Segment_second: any = '0' + 0
  Segment_minute: any = '0' + 0
  Segment_hour: any = '0' + 0
  // store duration for each segment
  Segment_time: string[] = []
  // variable hold interval
  startTime: any
  running: boolean = false
  // for showing date on html
  nextIndex: number = 1

  
  
  // get the challenge name & segments 
  // then create timer for original 
  // create timer for each segments
  constructor(private paramRoute: ActivatedRoute, private router: Router) {
    // initialize the id (required in Angular)
    this.id = -1
    this.challenge = {
      id: 0,
      name: '',
      segments: []
    }
  }

  // when first load the data
  ngOnInit(): void {
    // get id from param by using snapshot
    this.id =  Number(this.paramRoute.snapshot.paramMap.get('id'))
    if(!this.isLocalStorageAvailable()){
      return
    }

    this.getData()

  }

  private getData(): void { 
    const existingChallenges: Challenge[] = JSON.parse(localStorage.getItem('challenges') || '[]')
    this.challenge = existingChallenges.find(challenge => challenge.id === this.id) || this.challenge
  }

  // start Btn
  public handleStart(): void {
    this.endBtn = true
    this.running = true;
    // this will called each second
    // this have two timer of the original timer
    // and the segment timer ( run depends on next Btn)
    this.startTime = window.setInterval((): void => {
      this.Org_second++;
      this.Org_second = this.Org_second < 10 ? '0' + this.Org_second : this.Org_second;
      // segment timer
      this.Segment_second++;
      this.Segment_second = this.Segment_second < 10 ? '0' + this.Segment_second : this.Segment_second;

      // need to have 2 if because segment timer is different from original timer
      // original minute
      if (this.Org_second === 60) {
        this.Org_minute++;
        this.Org_minute = this.Org_minute < 10 ? '0' + this.Org_minute : this.Org_minute;
        this.Org_second = '0' + 0;
      }
      // segment minute
      if (this.Segment_second === 60) {
        this.Segment_minute++;
        this.Segment_minute = this.Segment_minute < 10 ? '0' + this.Segment_minute : this.Segment_minute;
        this.Segment_second = '0' + 0;
      }

      // original hour
      if (this.Org_minute === 60) {
        this.Org_hour++;
        this.Org_hour = this.Org_hour < 10 ? '0' + this.Org_hour : this.Org_hour;
        this.Org_minute = '0' + 0;
      }
      // segment hour
      if (this.Segment_minute === 60) {
        this.Segment_hour++;
        this.Segment_hour = this.Segment_hour < 10 ? '0' + this.Segment_hour : this.Segment_hour;
        this.Segment_minute = '0' + 0;
      }
    }, 1000);
  }

  
  public handlePause() {
    // clear interval because the data is assigned to variable
    // it does not affect the timer
    clearInterval(this.startTime)
    this.running = false
  }

  public handleNext() {
    // when user click next but no more segments
    if(this.nextIndex + 1 > this.challenge.segments.length) {
      this.running = false
    }
    // format of timer to add to Segment_time array for each segment id (00 : 00 : 00)
    const segmentTimeStr = `${this.Segment_hour} : ${this.Segment_minute} : ${this.Segment_second}`;
    this.Segment_time.push(segmentTimeStr)
    this.nextIndex++

    // reset segment timer for next segment
    this.Segment_second = '0' + 0
    this.Segment_minute = '0' + 0
    this.Segment_hour = '0' + 0
  }

  public handleEnd() {
    clearInterval(this.startTime)

    // push data for current segment
    if(this.nextIndex <= this.challenge.segments.length) {
      const segmentTimeStr = `${this.Segment_hour}:${this.Segment_minute}:${this.Segment_second}`;
      this.Segment_time.push(segmentTimeStr)
      this.nextIndex++

      // reset segment timer for next segment
      this.Segment_second = '0' + 0
      this.Segment_minute = '0' + 0
      this.Segment_hour = '0' + 0
    }
    this.running = false
    this.endBtn = false
  }

  public handleBackBtn() {
    this.router.navigateByUrl('/')
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

}
