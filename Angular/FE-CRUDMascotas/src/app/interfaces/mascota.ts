export interface Mascota {
  id?: number, // Pongo la id opcional porque cuando esté creando una mascota, la base de datos le va a asignar el id automáticamente.
  nombre: string,
  edad: number,
  raza: string,
  color: string,
  peso: number
}
