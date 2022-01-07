import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client_id, client_secret } from './github/clientsecret';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(httpClient: HttpClientModule) { }

  // get github profile
  getProfile(userInput:string){
    let profileURL = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;
    
  }
  // get github repos
}
