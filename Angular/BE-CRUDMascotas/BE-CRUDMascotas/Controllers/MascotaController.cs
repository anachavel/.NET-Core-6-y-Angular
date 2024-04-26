using BE_CRUDMascotas.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BE_CRUDMascotas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MascotaController : ControllerBase
    {
        private readonly AplicationDbContext _context; // "_context" es para que el contexto pueda ser utilizado

        public MascotaController(AplicationDbContext context)
        {
            _context = context;
        }



        // Hay que añadir el siguiente atributo para cuando quiera acceder a esa petición desde Postman por ejemplo.
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listMascotas = await _context.Mascotas.ToListAsync(); // Coloco "await" para que espere ya que es asíncrono
                return Ok(listMascotas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var mascota = await _context.Mascotas.FindAsync(id);
                if (mascota == null)
                {
                    return NotFound();
                }

                return Ok(mascota);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var mascota = await _context.Mascotas.FindAsync(id);
                if (mascota == null)
                {
                    return NotFound();
                }
                
                _context.Mascotas.Remove(mascota);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Mascota mascota)
        {
            try
            {
                mascota.FechaCreacion = DateTime.Now;
                _context.Add(mascota);
                await _context.SaveChangesAsync();
                // Para que devuelva el mensaje "201"
                return CreatedAtAction("Get", new { id = mascota.Id }, mascota); // La mascota viene sin id, pero se le asigna cuando entre a la base de datos
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Mascota mascota)
        {
            try
            {
                if (id != mascota.Id)
                {
                    return BadRequest();
                }

                var mascotaItem = await _context.Mascotas.FindAsync(id);

                if (mascotaItem == null)
                {
                    return NotFound();
                }

                mascotaItem.Nombre = mascota.Nombre;
                mascotaItem.Raza = mascota.Raza;
                mascotaItem.Edad = mascota.Edad;
                mascotaItem.Peso = mascota.Peso;
                mascotaItem.Color = mascota.Color;

                await _context.SaveChangesAsync();

                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
