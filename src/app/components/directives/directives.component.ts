import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  size = 40
  color = 'red'
  font = 'Arial'
  classes = ['text-green-600', 'text-5xl']

}
