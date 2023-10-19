import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ResultService } from './results.service';
import { Results } from 'src/app/models/results.model';
import { DeviceService } from '../device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {
  private device: Device;
  private id:number;


  protected resultsTemp: Results[] = [];
  protected error: string|null = null;
  protected isFetching:boolean = false;
  private tab:string|null = null;

  constructor(private http: HttpClient, 
              private res: ResultService,
              private dev: DeviceService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.device = this.dev.getDevice(this.id);
    this.onFetch();
  }

  onFetch(): void {
    this.isFetching = true;
    console.log(this.device);
  };

}
