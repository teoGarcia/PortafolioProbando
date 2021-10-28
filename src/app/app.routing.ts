// Importar modulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

// Importar componentes
import { InicioComponent } from "./Components/inicio/inicio.component";
import { DatosPersonalesComponent } from "./Components/datos-personales/datos-personales.component";
import { HabilidadesComponent } from "./Components/habilidades/habilidades.component";
import { ProyectosComponent } from "./Components/proyectos/proyectos.component";
import { EstudiosComponent } from "./Components/estudios/estudios.component";
import { ContactoComponent } from "./Components/contacto/contacto.component";

//  Array de rutas
const appRoutes: Routes=[
    {path: '', component: InicioComponent},
    {path: 'Datos-personales', component: DatosPersonalesComponent},
    {path: 'Habilidades', component: HabilidadesComponent},
    {path: 'Proyectos', component: ProyectosComponent},
    {path: 'Estudios', component: EstudiosComponent},
    {path: 'Contacto', component: ContactoComponent},
    {path: '**', component: InicioComponent}
];


//  Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);