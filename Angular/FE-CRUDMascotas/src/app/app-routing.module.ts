import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  // Componentes
  { path: '', redirectTo: 'listaMascota', pathMatch: 'full' },
  { path: 'listaMascota', component: ListadoMascotaComponent }, // Para que me dirija cuando vaya a http://localhost:4200/list-mascota
  { path: 'agregarMascota', component: AgregarEditarMascotaComponent },
  { path: 'editarMascota/:id', component: AgregarEditarMascotaComponent }, // Poniendo ":" antes de "id", estoy diciendo que la id puede variar
  { path: 'verMascota/:id', component: VerMascotaComponent },
  // Es IMPORTANTE que lo siguiente sea lo último en la lista:
  { path: '**', redirectTo: 'listaMascota', pathMatch: 'full' } // "**" es para decir: "Si no hace match con nada..."
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
