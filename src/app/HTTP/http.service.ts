import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_URL = 'https://api.github.com';
  private token = environment.token;
  

  constructor(private http: HttpClient) {}
  
  // getUsers
  async user(username: string) {
    const options = {
      headers: {Authorization: this.token}
    };
   
    return this.http.get(this.BASE_URL + `/users/${username}`, options);
  }


  // getRepos
}
