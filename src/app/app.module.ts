import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GitPipe } from './git.pipe';
import { GitDirectDirective } from './git-direct.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitDetailsComponent,
    GitPipe,
    GitDirectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
