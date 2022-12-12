import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private jwtHelper: JwtHelperService) {
  }

  getUserID(): string {
    const { sub } = this.jwtHelper.decodeToken(this.getToken())
    return sub;
  }

  isLoggedIn(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getToken())
  }

  isAdmin() {
    const { admin } = this.jwtHelper.decodeToken(this.getToken())
    return admin
  }

  getToken(): any {
    const token = this.jwtHelper.tokenGetter()
    return token ? token : false
  }

}
