import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL = 'https://api.github.com';
  private token = "token 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";
  

  constructor(private http: HttpClient) {}
  
  // getUsers
  async user(username?: string) {
    const options = {
      headers: {Authorization: this.token}
    };
    const endpoint = username ? `/users/${username}` : "/users";
    return this.http.get(this.BASE_URL + endpoint, options);
  }


  // getRepos
}
