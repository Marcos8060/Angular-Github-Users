import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileProfileComponent } from './github-profile-profile.component';

describe('GithubProfileProfileComponent', () => {
  let component: GithubProfileProfileComponent;
  let fixture: ComponentFixture<GithubProfileProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
