import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RoutesAppModules} from "./Routes";
import { PokemonComponent } from './Componentes/pokemon/pokemon.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import {TraerDatosComponent} from "./traer-datos/traer-datos.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    InicioComponent,
    TraerDatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesAppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
