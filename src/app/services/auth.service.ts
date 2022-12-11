import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  register(username: string, name: string, password: string) {
    console.log('registering');
    return this.apiService.post('/auth/register', { username, name, password }).subscribe((data) => {
      console.log(data);
    });
  }

  login(username: string, password: string) {
    return this.apiService.post('/auth/login', { username, password });
  }

  checkUsername(username: string) {
    return this.apiService.get(`/auth/check/username/${username}`);
  }

  refresh() {
    return this.apiService.post('/auth/refresh', {});
  }

  logout() {
    return this.apiService.post('/auth/logout', {});
  }
}
