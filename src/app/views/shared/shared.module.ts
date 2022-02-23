import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErroComponent } from './erro/erro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ErroComponent,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
