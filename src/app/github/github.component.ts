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

  ngOnInit(): void {
  }

  

}
