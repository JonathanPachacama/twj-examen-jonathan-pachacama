import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MateriaComponent } from './Componentes/materia/materia.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MateriaComponent]
})
export class AppModule { }
