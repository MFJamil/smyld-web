import { Component, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit  {
  title = '${app.name}';
  serverMessage = 'No message was received from the server';
  constructor(private http:HttpClient){}
  
  ngAfterViewInit() {
    this.http.get<Message>("/api").subscribe(servMessage => this.serverMessage = servMessage.text);

  }
  
}
