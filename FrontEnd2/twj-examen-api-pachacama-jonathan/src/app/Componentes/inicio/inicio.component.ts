import { Component, OnInit} from '@angular/core';
import {pokemonInterface} from "../../Interfaces/pokemonInterface";

import {Http} from "@angular/http";
import {MovimientoClass} from "../../Clases/MovimientoClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  pokemons: pokemonInterface[] = [];
  nuevoMovimiento: MovimientoClass = new  MovimientoClass("");
  movimientos:  MovimientoClass[] = [];
  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get("http://pokeapi.co/api/v2/move/")
    //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.pokemons = respuesta.results;

        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }
  crearMovimiento(movimientos: MovimientoClass) {
    let datosAEnviar = {
      name: movimientos.name,
      url:movimientos.url

    };
    this._http.post("https://twj-2017a.mybluemix.net/noticias", datosAEnviar).subscribe(respuesta => {
        let respuestaJson = respuesta.json();
        this.movimientos.push(respuestaJson);
        this.nuevoMovimiento = new MovimientoClass();
        console.log('respuestaJson: ', respuestaJson);
      },
      error => {
        console.log("Error ", error)
      }
    )

  }
}
