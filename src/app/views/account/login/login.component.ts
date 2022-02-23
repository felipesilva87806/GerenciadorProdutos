import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  exibirSenhaTexto: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }  

}
