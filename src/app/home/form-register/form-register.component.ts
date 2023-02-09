import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  catchInputValues() {
    let name = this.formulario.controls.name.value;
    let email = this.formulario.controls.email.value;
    let password = this.formulario.controls.password.value;
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log("success");
      this.resetar();
    }  else {
      console.log("invalid form");
    }
  }
  /* Resetando formulario apos envio */
  resetar() {
    this.formulario.reset();
  }
}