import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  userInput!: string
  githubProfile: any;
  githubRepos: any;

  constructor(private githbService: GithubService) { }

  searchUser(){
    // get user profile
    this.githbService.getProfile(this.userInput).subscribe((data)=>{
      this.githubProfile = data;
    })

    // get user Repos
    this.githbService.getRepos(this.userInput).subscribe((data)=>{
      this.githubRepos = data;
    })
  }
  
  ngOnInit(): void {
  }

}
