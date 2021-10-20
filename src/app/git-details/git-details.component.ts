import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../HTTP/http.service';
@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
    gitHubUser : any
  constructor(private http: HttpService) { }

  async findUser(user: any) {

    console.log('User ::', user);
    (await this.http.user(user)).subscribe((data: any) => {
      console.log(data);
      this.gitHubUser = { ...data };
    });


  }
  


  ngOnInit(): void {
  }

}
