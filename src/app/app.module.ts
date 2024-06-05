import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeListingScreenComponent } from './challenge-listing-screen/challenge-listing-screen.component';
import { ChallengeCreationScreenComponent } from './challenge-creation-screen/challenge-creation-screen.component';
import { ChallengeRecordingScreenComponent } from './challenge-recording-screen/challenge-recording-screen.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChallengeListingScreenComponent,
    ChallengeCreationScreenComponent,
    ChallengeRecordingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
