import { Component } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { DeviceService } from './devices/device.service';
import { ResultService } from './devices/results/results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartHouse';

  constructor(private http: HttpClient, private dev: DeviceService) {}
}
