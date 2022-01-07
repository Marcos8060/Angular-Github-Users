import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-profile',
  templateUrl: './github-profile-profile.component.html',
  styleUrls: ['./github-profile-profile.component.css']
})
export class GithubProfileProfileComponent implements OnInit {
  @Input() githubProfile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
