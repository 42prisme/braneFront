// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { ProjectEntity } from '../entity/ProjectItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ProjectService {
    url = "https://localhost:5001/Project";
    _http:HttpClient;
    
    constructor(private http:HttpClient)
    {
        this._http = http;
    }

    GetAllProjects(): Observable<ProjectEntity[]> {
        return this._http.get<ProjectEntity[]>(this.url+"/all");
    }

    GetProject(id: number): Observable<ProjectEntity> {
        return this._http.get<ProjectEntity>(this.url+"/"+id);
    }
}