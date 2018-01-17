import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { User } from '../_models/index';

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
        let header=new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8888/users/',body , {headers: header});
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