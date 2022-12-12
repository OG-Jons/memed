import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private router: Router) {
  }

  register(username: string, name: string, password: string) {
    console.log('registering');
    return this.apiService.post('/user/auth/register', { username, name, password }).subscribe((data) => {
      this.login(username, password)
    });
  }

  login(username: string, password: string) {
    return this.apiService.post('/user/auth/login', { username, password }).subscribe((data) => {
      const { accessToken } = data.body;
      localStorage.setItem('token', accessToken)
      this.router.navigate(['/'])
    });
  }

  checkUsername(username: string) {
    return this.apiService.get(`/user/auth/check/username/${username}`);
  }

  refresh() {
    return this.apiService.post('/user/auth/refresh', {});
  }

  logout() {
    // this.apiService.post('/user/auth/logout').subscribe(() => {
    //
    // })
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])

    return;
  }
}
