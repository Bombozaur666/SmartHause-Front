import { Component, Input } from '@angular/core';
import { Results } from 'src/app/models/results.model';

@Component({
  selector: 'app-results-group-temperature',
  templateUrl: './results-group-temperature.component.html',
  styleUrls: ['./results-group-temperature.component.css']
})
export class ResultsGroupTemperatureComponent {
  protected readonly displayedColumns: string[] = ['position', 'date', 'temperature', 'heat_index'];
  @Input() results: Results[];
}
