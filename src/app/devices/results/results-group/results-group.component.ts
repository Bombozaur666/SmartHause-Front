import { Component, Input } from '@angular/core';
import { Results } from '../../../models/results.model';

@Component({
  selector: 'app-results-group',
  templateUrl: './results-group.component.html',
  styleUrls: ['./results-group.component.css']
})
export class ResultsGroupComponent {
  protected readonly displayedColumns: string[] = ['position', 'date', 'value_1', 'value_2'];
  @Input() results: Results[];



}
