import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Http} from "@angular/http";
import {pokemonInterface} from "../Interfaces/pokemonInterface";

@Component({
  selector: 'app-traer-datos',
  templateUrl: './traer-datos.component.html',
  styleUrls: ['./traer-datos.component.css']
})
export class TraerDatosComponent implements OnInit {

  movimientos: pokemonInterface[] = [];
  @Output() MovimientosNodeOutput= new EventEmitter();
  constructor(private _http: Http) { }

  ngOnInit() {

    this._http
      .get("https://twj-2017a.mybluemix.net/noticias")
      .subscribe(
        respuesta=>{
          let rjson:pokemonInterface[] = respuesta.json();
          this.movimientos = rjson;
          console.log("Movimientos: ",this.movimientos);
        },
        error=>{
          console.log("Error: ",error)
        }
      )
  }


  eliminarMovimientoNodeBackend(movimiento: pokemonInterface) {

    this._http.delete("https://twj-2017a.mybluemix.net/noticias?id="+movimiento._id)
      .subscribe(
        respuesta=>{
          this.MovimientosNodeOutput.emit(movimiento);
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
  eliminarMovimientoFrontEnd(movimiento: pokemonInterface) {

    let indice = this.movimientos.indexOf(movimiento);

    this.movimientos.splice(indice,1);

  }

}
