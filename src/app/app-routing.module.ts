import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengeRecordingScreenComponent } from './challenge-recording-screen/challenge-recording-screen.component';
import { ChallengeCreationScreenComponent } from './challenge-creation-screen/challenge-creation-screen.component';
import { ChallengeListingScreenComponent } from './challenge-listing-screen/challenge-listing-screen.component';


const routes: Routes = [
  {
    path: '', component: ChallengeListingScreenComponent
  },
  {
    path: 'challenge-creation', component: ChallengeCreationScreenComponent
  },
  {
    path: 'challenge-recording/:id', component: ChallengeRecordingScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
