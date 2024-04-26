import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interfaces/mascota';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {
  id: number;
  mascota!: Mascota;
  loading: boolean = false;

  // mascota$!: Observable<Mascota>; // Coloco un sbolo de $ para indicar que es un observable   --PIPE ASYNC

  constructor(private _mascotaService: MascotaService, private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    //this.mascota$ = this._mascotaService.getMascota(this.id)   --PIPE ASYNC
    this.obtenerMascota();
  }

  obtenerMascota() {
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data => {
      this.mascota = data;
      this.loading = false;
    })
  }

}
