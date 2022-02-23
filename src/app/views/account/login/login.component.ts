import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBaseComponent } from '../../shared/form-base/form-base.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  exibirSenhaTexto: boolean = false;

  constructor(private formBuilder: FormBuilder) {
      super(formBuilder);
     }

  override ngOnInit(): void {
    this.InicializarForm();
  }  

  InicializarForm() {
    this.form = this.formBuilder.group({
      Login: [null, [Validators.required]],
      Senha: [null, [Validators.required]]
    });
  }

  Submit() {
    // this.service.Login(this.form.value)
    //   .pipe(first())
    //   .subscribe(); 
  }

}
