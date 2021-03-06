import { Component, OnInit } from '@angular/core';
import { ProjectEntity } from '../entity/ProjectEntity';
import { ProjectService } from '../Service/ProjectService';
import { UserEntity } from '../entity/UserEntity';
import { UserService } from '../Service/UserService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ProjectEntity[] = [];
  constructor(private project_service: ProjectService, private user_service: UserService) { }

  ngOnInit(): void {
    this.project_service.GetAllProjects().subscribe( val => {
      this.projects = val;
    });
  }

  // public populateUserEntity(): void {
  //   this.user_service.GetUser(id).subscribe( val => {
  //     console.log(val.name);
  //     return val.name;
  //   });
  // }

  public getUser(id: number): Observable<UserEntity> {
    return this.user_service.GetUser(id).pipe()
  }

}
