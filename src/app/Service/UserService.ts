import { UserEntity } from '../entity/UserEntity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class UserService {
    url = "https://localhost:5001/UserItem";
    
    constructor(private http:HttpClient)
    { }

    GetAllUsers(): Observable<UserEntity[]> {
        return this.http.get<UserEntity[]>(this.url+"/all");
    }

    GetUser(id: number): Observable<UserEntity> {
        return this.http.get<UserEntity>(this.url+"/"+id);
    }
}