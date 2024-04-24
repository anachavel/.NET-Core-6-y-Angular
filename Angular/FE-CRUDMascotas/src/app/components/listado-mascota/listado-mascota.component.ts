import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(listaMascotas);
  loading: boolean = false; // Para iniciar el spinner desactivado

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Paginación
  @ViewChild(MatSort) sort!: MatSort; // Ordenación

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página'; // Para ponerlo en español
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarMascota() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('La mascota fue eliminada correctamente', '', {
        duration: 4000,
        horizontalPosition: 'center'
      });
    }, 3000);  
  }
}
