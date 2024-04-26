import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-listado-mascota', // Para renderizar este componente, tenemos que utilizar este selector.
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false; // Para iniciar el spinner desactivado

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Paginación
  @ViewChild(MatSort) sort!: MatSort; // Ordenación

  constructor(private snackBar: MatSnackBar, private _mascotaService: MascotaService) { } // Los servicios se ponen empezando por "_"

  ngOnInit(): void {
    // Cuando se inicializa este componente, voy a ejecutar el siguiente método:
    this.obtenerMascotas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por página'; // Para ponerlo en español
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerMascotas() {
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }

  eliminarMascota(id: number) {
    this.loading = true;
    this._mascotaService.deleteMascota(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerMascotas();
    });  
  }

  mensajeExito() {
    this.snackBar.open('La mascota fue eliminada correctamente', '', {
      duration: 4000,
      horizontalPosition: 'center'
    });
  }
}
