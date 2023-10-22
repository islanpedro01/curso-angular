import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Islan Pedro';
  idade = 35;
  userData = {
    email:'islanpedro.12@hotmail.com',
    role: 'Admin'
  }
  title = 'curso-angular';
}
