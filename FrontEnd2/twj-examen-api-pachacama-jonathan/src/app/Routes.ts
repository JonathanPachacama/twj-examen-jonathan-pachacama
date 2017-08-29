import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {TraerDatosComponent} from "./traer-datos/traer-datos.component";


export const routes: Routes = [
  {
    path: 'noticias-desde-la-api',
    component: InicioComponent,

  },
  {
    path: 'traer-datos-servidor-bluemix',
    component: TraerDatosComponent,

  },

];
export const RoutesAppModules: ModuleWithProviders = RouterModule.forRoot(routes);
