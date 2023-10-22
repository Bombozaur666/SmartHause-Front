import { Component, Input } from '@angular/core';
import { Results } from '../../../models/results.model';

@Component({
  selector: 'app-results-group',
  templateUrl: './results-group.component.html',
  styleUrls: ['./results-group.component.css']
})
export class ResultsGroupComponent {

  @Input() results: Results[];

  

}
