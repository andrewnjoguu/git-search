import { Component, OnInit } from '@angular/core';
import { HttpService } from './HTTP/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'git-search';
  user: any;

  constructor(private http: HttpService) {}

  async getUser() {
    (await this.http.user('andrewnjoguu')).subscribe((data: any) => {
      console.log(data);
      this.user = { ...data };
    });
  }
 ngOnInit(){
   this.getUser();
 }

}
