import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../../interfaces/mascota';
import { MascotaService } from '../../services/mascota.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
  loading: boolean = false;
  // NOTA: cuando en el html pongo *ngIf="loading", significa que quiero que se muestre solo cuando, en este caso, "loading" sea true

  form: FormGroup

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private _mascotaService: MascotaService) { // Inyección de dependencia
    this.form = this.fb.group({
      nombre: ['', Validators.required], // Con Validators.required indico que el campo ese tiene que ser requerido
      raza: ['', Validators.required],
      color: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarMascota() {
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
    // Enviamos el objeto al BE
    this._mascotaService.addMascota(mascota).subscribe(data => {
      this.mensajeExito();
      this.router.navigate(['/listMascotas']); // Para redireccionar a la página princimal una vez se ha creado un nuevo post de mascota
    })
  }

  mensajeExito() {
    this.snackBar.open('La mascota fue registrada correctamente', '', {
      duration: 4000,
      horizontalPosition: 'center'
    });
  }

}
