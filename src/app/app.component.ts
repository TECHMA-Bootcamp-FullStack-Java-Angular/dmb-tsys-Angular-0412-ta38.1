import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Componetns/login/login.component';



@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'dmb-tsys-Angular-0412-ta38.1';


}
