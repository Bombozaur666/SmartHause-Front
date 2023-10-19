import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ResultService } from './results.service';
import { Results } from 'src/app/models/results.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {
  @Input() device: Device;
  @Input() type:string;

  protected resultsTemp: Results[] = [];
  protected error: string|null = null;
  protected isFetching:boolean = false;
  private tab:string|null = null;

  constructor(private http: HttpClient, private res: ResultService) {}

  ngOnInit(): void {
    this.onFetch();
  }

  onFetch(): void {
    this.isFetching = true;
    if (this.device.type == '') {
    this.res.fetchResults(this.device.id, this.device.type)
      
    }
  };

}
