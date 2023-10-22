import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent   implements OnInit {
@Input() anos = 0
name = 'Islan';
age = 22;
  
  constructor(){

  }
  ngOnInit(): void {
      
  }

}
