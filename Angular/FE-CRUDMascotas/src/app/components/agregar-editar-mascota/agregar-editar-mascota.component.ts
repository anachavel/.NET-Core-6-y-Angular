import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading: boolean; // Declaro aquí la variable
  // También puedo ponerlo aquí todo junto: "loading: boolean = false";
  // NOTA: cuando en el html pongo *ngIf="loading", significa que quiero que se muestre solo cuando, en este caso, "loading" sea true

  constructor() {
    this.loading = false; // Inicializo aquí la variable
  }

  ngOnInit(): void {
  }

}
