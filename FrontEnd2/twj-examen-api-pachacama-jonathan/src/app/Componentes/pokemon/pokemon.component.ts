import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {pokemonInterface} from "../../Interfaces/pokemonInterface";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  @Input() pokemons:pokemonInterface;
  constructor() { }

  ngOnInit()
  {
    }
  }


