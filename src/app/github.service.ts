import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client_id, client_secret } from './github/clientsecret';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  // get github profile
  getProfile(userInput:string):Observable<any>{
    let profileURL = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;
    return this.httpClient.get<any>(profileURL);
  }
  // get github repos
  getRepos(userInput:string):Observable<any>{
    let profileURL = `https://api.github.com/users/${userInput}/repos?client_id=${client_id}&client_secret=${client_secret}`;
    return this.httpClient.get<any>(profileURL)
  }
}
