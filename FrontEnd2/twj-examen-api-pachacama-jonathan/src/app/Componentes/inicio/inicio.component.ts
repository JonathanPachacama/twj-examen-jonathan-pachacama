import { Component, OnInit,Input } from '@angular/core';
import {pokemonInterface} from "../../Interfaces/pokemonInterface";

import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  pokemons: pokemonInterface[] = [];
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

}
