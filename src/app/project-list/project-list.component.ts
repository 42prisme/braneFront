import { Component, OnInit } from '@angular/core';
import { ProjectEntity } from '../entity/ProjectItem';
import { ProjectService } from '../Service/ProjectService';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ProjectEntity[] = [];
  _service: ProjectService;

  constructor(service: ProjectService) 
  { 
    this._service = service;
  }

  ngOnInit(): void {
    // this._service.GetAllProjects().subscribe( val => {
    //   this.projects = val;
    // });
  }

}
