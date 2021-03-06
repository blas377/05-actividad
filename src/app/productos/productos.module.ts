import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponentProductos } from './main/main.component';
@NgModule({
  declarations: [
    MainComponentProductos,
    ListadoComponent,
    FormularioComponent
  ],
  exports: [
    MainComponentProductos
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class ProductosModule { }
