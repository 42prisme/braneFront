import { Component, OnInit } from '@angular/core';
import { ProjectEntity } from '../entity/ProjectEntity';
import { ProjectService } from '../Service/ProjectService';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: ProjectEntity[] = [];
  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.service.GetAllProjects().subscribe( val => {
      this.projects = val;
    });
  }

}
