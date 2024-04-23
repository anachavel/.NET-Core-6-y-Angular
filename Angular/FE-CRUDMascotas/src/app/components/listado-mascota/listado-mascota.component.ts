import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const listaMascotas: Mascota[] = [
  { nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 28 },
  { nombre: 'Kurama', edad: 1, raza: 'Shiba Inu', color: 'Marrón', peso: 7 },
  { nombre: 'Peluso', edad: 2, raza: 'Pomerania', color: 'Marrón', peso: 4 },
  { nombre: 'Croqueta', edad: 4, raza: 'Shiba Inu', color: 'Negro', peso: 12 },
  { nombre: 'Mark', edad: 1, raza: 'Callejero', color: 'Blanco', peso: 11 },
  { nombre: 'Aquiles', edad: 5, raza: 'Labrador', color: 'Negro', peso: 35 },
  { nombre: 'Mike', edad: 6, raza: 'Callejero', color: 'Blanco', peso: 15 }
];


@Component({
  selector: 'app-listado-mascota', // Para renderizar este componente, tenemos que utilizar este selector.
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listaMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'; // Para ponerlo en español
  }

}
