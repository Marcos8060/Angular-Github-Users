import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubProfileProfileComponent } from './github-profile-profile/github-profile-profile.component';
import { GithubProfileDataComponent } from './github-profile-data/github-profile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubProfileComponent,
    GithubProfileProfileComponent,
    GithubProfileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
