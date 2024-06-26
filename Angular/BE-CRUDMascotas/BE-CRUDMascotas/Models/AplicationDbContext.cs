﻿using Microsoft.EntityFrameworkCore;

namespace BE_CRUDMascotas.Models
{
    // Esta clase me va a permitir crear la base de datos, acceder a ella, modificar registros, etc.
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }

        public DbSet<Mascota> Mascotas { get; set;}
    }
}
