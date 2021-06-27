import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userName(): string {
    return this.currentUserSubject.value?.UserName;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username, password })
      .pipe(map(loginResult => {        
        // login successful if there's a jwt token in the response
        const user = new User();
        if (loginResult && loginResult.token) {
          user.UserName = loginResult.username;
          user.FirstName = loginResult.firstname;
          user.LastName = loginResult.lastname;
          user.Token = loginResult.token;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User);
    this.router.navigateByUrl('/');
  }
}