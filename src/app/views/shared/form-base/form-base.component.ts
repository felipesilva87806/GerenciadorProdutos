import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  template: '<div></div>',
  styles: [
  ]
})
export abstract class FormBaseComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  submetido: boolean = false;
  exibirAvisoErros: boolean = false;
  quantidade: number = 0;
  pagina: number = 1;


  constructor(formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  abstract Submit(): any;

  OnSubmit() {
    this.submetido = true;
    if (this.form.valid) {
      this.Submit();
      this.exibirAvisoErros = false;
      window.scroll(0, 0);
    } else {
      this.ExibirValidacoes(this.form);
      this.exibirAvisoErros = true;
    }
  }

  ExibirValidacoes(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const controle = form.get(field);
      if (controle instanceof FormControl) {
        controle.markAsTouched({ onlySelf: true });
      } else if (controle instanceof FormGroup) {
        this.ExibirValidacoes(controle);
      }
    });
  }

  AplicaCssErro(campo: string) {
    return { 'is-invalid': this.VerificaValidTouched(campo) }
  }

  VerificaValidTouched(campo: string) {
    return !this.RetornaCampo(campo).valid && this.RetornaCampo(campo).touched;
  }

  RetornaCampo(campo: string) : FormControl {
    return this.form.get(campo) as FormControl;
  }

}
