import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascota';

/* Los servicios los usamos para 3 cosas:
    - Hacer peticiones a un BackEnd.
    - Reutilización de código.
    - Comunicación entre componentes.
*/


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private myAppUrl: string = environment.endpoint; // Las pongo privadas porque si no las ve las clases de fuera
  private myApiUrl: string = 'api/Mascota/';

  constructor(private http: HttpClient) { }

  getMascotas(): Observable<Mascota[]> { // Un observable (o promesa) devuelve un flujo de datos, aunque en este caso solo será un array de objetos
    return this.http.get < Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

}
