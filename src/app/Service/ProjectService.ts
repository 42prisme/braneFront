import { ProjectEntity } from '../entity/ProjectEntity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class ProjectService {
    url = "https://localhost:5001/ProjectItem";
    
    constructor(private http:HttpClient)
    { }

    GetAllProjects(): Observable<ProjectEntity[]> {
        return this.http.get<ProjectEntity[]>(this.url+"/all");
    }

    GetProject(id: number): Observable<ProjectEntity> {
        return this.http.get<ProjectEntity>(this.url+"/"+id);
    }
}