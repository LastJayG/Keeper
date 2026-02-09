var builder = WebApplication.CreateBuilder(args);

// You can change it to "false" in appsettings.json
var isRunOnAspire = builder.Configuration.GetSection("IsRunOnAspire").Value;
if (isRunOnAspire == "true")
{
    builder.AddServiceDefaults();
}

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddOpenApi();

var app = builder.Build();

app.MapDefaultEndpoints();

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.RoutePrefix = string.Empty; // Change string.Empty to "swagger" to remove SwaggerUI page as index page
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
