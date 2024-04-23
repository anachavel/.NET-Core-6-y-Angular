import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulos
import { SharedModule } from './shared/shared.module'; // shared.module.ts

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarMascotaComponent,
    ListadoMascotaComponent,
    VerMascotaComponent
  ],
  imports: [ // Aquí en los imports van los módulos que voy añadiendo, pero como los pasé a shared.module.ts, importo eso
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule // shared.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
