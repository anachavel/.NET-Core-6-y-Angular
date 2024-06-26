using BE_CRUDMascotas.Models;
using BE_CRUDMascotas.Models.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS
// Se utilizan para cuando tenemos el backend y el frontend en diferentes puertos
builder.Services.AddCors(options => options.AddPolicy("AllowWebApp",
    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

// Add context
builder.Services.AddDbContext<AplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("Conexion"));
});

// AutoMapper
builder.Services.AddAutoMapper(typeof(Program));

// Add Services
builder.Services.AddScoped<IMascotaRepository, MascotaRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowWebApp"); // A�ado esta l�nea para los CORS

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
