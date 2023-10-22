import { Component, Input } from '@angular/core';
import { Results } from '../../../models/results.model';

@Component({
  selector: 'app-results-group-humidity',
  templateUrl: './results-group-humidity.component.html',
  styleUrls: ['./results-group-humidity.component.css']
})
export class ResultsGroupComponent {
  protected readonly displayedColumns: string[] = ['position', 'date', 'humidity', 'absolute_humidity'];
  @Input() results: Results[];

  onCLick():void {
    console.log(this.results);
  }
}
