import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ii } from '../data.model';
type Data={
  eii:number,
  eai:number,
  eer:number,
  ed:number
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  eii='';
  eai='';
  eer='';
  ed='';
  @Output()info=new EventEmitter<Ii>();
  onSubmit(){
    this.info.emit({
        initialInvestment:+this.eii,
      annualInvestment:+this.eai,
      expectedReturn:+this.eer,
      duration:+this.ed
    }
    
    );
  }

}
