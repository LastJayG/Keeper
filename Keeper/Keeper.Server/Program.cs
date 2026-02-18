using Keeper.Server.Extensions;

var builder = WebApplication.CreateBuilder(args);

// You can change it to "false" in appsettings.json
var isRunOnAspire = builder.Configuration.GetSection("IsRunOnAspire").Value;
if (isRunOnAspire == "true")
{
    builder.AddServiceDefaults();
}

builder.Services.AddServices();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Keeper API",
        Version = "v1"
    });
});

var app = builder.Build();

app.MapDefaultEndpoints();

app.UseCors("AllowAll");

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Keeper API V1");
        options.RoutePrefix = "swagger"; // Change string.Empty to "swagger" to remove SwaggerUI page as index page
    });
}

app.UseAuthorization();

app.MapControllers();
app.Run();
