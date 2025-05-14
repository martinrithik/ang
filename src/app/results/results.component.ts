import { Component,Input} from '@angular/core';
import  type { annual } from '../data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
   @Input() annua?: annual[];

}
