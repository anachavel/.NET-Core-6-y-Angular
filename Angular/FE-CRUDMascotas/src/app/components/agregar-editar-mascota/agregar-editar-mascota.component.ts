import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar';
  // NOTA: cuando en el html pongo *ngIf="loading", significa que quiero que se muestre solo cuando, en este caso, "loading" sea true

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute,
    private _mascotaService: MascotaService) { // Inyección de dependencia
    this.form = this.fb.group({
      nombre: ['', Validators.required], // Con Validators.required indico que el campo ese tiene que ser requerido
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerMascota(this.id);
    }
  }

  obtenerMascota(id: number) {
    this.loading = true;
    this._mascotaService.getMascota(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        raza: data.raza,
        color: data.color,
        edad: data.edad,
        peso: data.peso,
      })
      this.loading = false;
    })
  }
  agregarEditarMascota() {
    //console.log(this.form); // Para poder cepturar el formulario y ver los datos
    //const nombre = this.form.get('nombre')?.value;
    //const nombre = this.form.value.nombre // Esto es igual que lo de arriba
    //console.log(nombre);

    // Armamos el objeto
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      raza: this.form.value.raza,
      color: this.form.value.color,
      edad: this.form.value.edad,
      peso: this.form.value.peso
    }

    if (this.id != 0) {
      mascota.id = this.id;
      this.editarMascota(this.id, mascota);
    } else {
      this.agregarMascota(mascota);
    }
  }

  editarMascota(id: number, mascota: Mascota) {
    this.loading = true;
    this._mascotaService.updateMascota(id, mascota).subscribe(() => {
      this.mensajeExito('actualizada');
      this.router.navigate(['/listMascotas']);
      this.loading = true;
    })
  }

  agregarMascota(mascota: Mascota) {
    // Enviamos el objeto al BE
    this._mascotaService.addMascota(mascota).subscribe(data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listMascotas']); // Para redireccionar a la página princimal una vez se ha creado un nuevo post de mascota
    })
  }
  

  mensajeExito(texto: string) {
    this.snackBar.open(`La mascota fue ${texto} correctamente`, '', {
      duration: 4000,
      horizontalPosition: 'center'
    });
  }

}
