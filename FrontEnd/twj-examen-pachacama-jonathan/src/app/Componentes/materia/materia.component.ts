import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {MateriaInterface}from "../../Interfaces/MateriaInterface";
import {MateriaClass} from "../../Clases/MateriaClass";

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  @Input() materia:MateriaClass;
  materias: MateriaClass[] = [];
  nuevaMateria: MateriaClass = new MateriaClass();

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Materia/")
      .subscribe(
        respuesta => {
          let rjson: MateriaClass[] = respuesta.json();
          this.materias = rjson;

          console.log("Materias: ", this.materias);
        },
        error => {
          console.log("Error: ", error)

        }
      )
  }
//Metodo para crear nuevas materias
  crearMateria(){
    console.log("Guardo nueva Materia");
    /*
     let materia = {
     nombre:this.nuevaMateria.nombreMateria
     };
     */

    this._http
      .post("http://localhost:1337/Materia/",this.nuevaMateria)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
          this.materias.push(respuestaJson)
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
  //  Metodo para eliminar una materia
  eliminarMateria(materia: MateriaClass, indice: number) {

    console.log("Indice:", this.materias.indexOf(materia));
    console.log("Indice con index: ", indice);
    console.log("Materias : ", this.materias);
    console.log("Id de la Materia : ", materia.id);


    this._http.delete("http://localhost:1337/Materia?id=" + materia.id)
      .subscribe(respuesta => {
          this.materias.splice(indice, 1);
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
        },
        error => {
          console.log("Error ", error)
        }
      )

  }

}
