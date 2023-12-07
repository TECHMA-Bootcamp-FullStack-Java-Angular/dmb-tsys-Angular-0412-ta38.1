import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formLoging: FormGroup = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(60),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

    noRobot: new FormControl('', [
      Validators.required,
      Validators.pattern('^5$'),
    ]),
  });

  activeText: any[] = [];

  send() {
    this.activeText.push(this.formLoging.value);
    window.alert('Su mensaje ha sido enviado \n\n'+ this.formLoging.value.fullname );
  }
}
