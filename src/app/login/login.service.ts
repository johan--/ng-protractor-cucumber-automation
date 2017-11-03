import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IUserData } from './user-data.model';

const BASE_URL: string = 'http://localhost:777';

@Injectable()
export class LoginService {

  logged = false;

  constructor(private http: HttpClient) {}

  login(): Observable<IUserData>{
    this.logged = true;
    // return this.http.post<IUserData>(`${BASE_URL}/login`,{})
    // dummy dummy dummy
    return new Observable;
  }

  isLogged(): boolean{
    return this.logged;
  }
}
