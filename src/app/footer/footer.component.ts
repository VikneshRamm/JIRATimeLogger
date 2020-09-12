import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    const API_URL = environment.production ? '/api/time' : 'http://localhost:8080/api/time';
    console.log(environment.production);
    this.http.get<{time: string}>(API_URL).subscribe((response) => {
      this.dataFromServer = response.time;
    }, (failureResponse) => {
      console.log('Request Filed');
    });
  }

}
