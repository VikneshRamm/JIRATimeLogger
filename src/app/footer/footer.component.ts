import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  appVersion: string;
  dataFromServer: string;

  ngOnInit() {
    this.appVersion = version;
    this.dataFromServer = '';
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.http.get<{time: string}>('http://localhost:3000/api/time').subscribe((response) => {
      this.dataFromServer = response.time;
    }, (failureResponse) => {
      console.log('Request Filed');
    });
  }

}
