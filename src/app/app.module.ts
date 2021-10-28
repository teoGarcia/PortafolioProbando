import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { BarraNavegacionComponent } from './Components/barra-navegacion/barra-navegacion.component';
import { DatosPersonalesComponent } from './Components/datos-personales/datos-personales.component';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { EstudiosComponent } from './Components/estudios/estudios.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraNavegacionComponent,
    DatosPersonalesComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EstudiosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [

    appRoutingProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
