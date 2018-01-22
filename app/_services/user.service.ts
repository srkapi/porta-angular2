import { Injectable } from '@angular/core';

import { User } from '../_models/index';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
         let body = JSON.stringify(user);
        console.log(body);
        return this.http.post('http://localhost:8888/users/',body ,{
            headers: new HttpHeaders().append('Content-type', 'application/json'),
        });
    }
    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

  /*  private _getHeaders():Headers {
        let header = new Headers({
            'Content-Type': 'application/json'
        });

        return header;
    }*/
}