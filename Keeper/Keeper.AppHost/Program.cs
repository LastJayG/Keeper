var builder = DistributedApplication.CreateBuilder(args);

var keeperConnectionString = builder.Configuration["ConnectionStrings:keeper-db"];
var dbPassword = builder.AddParameter("postgres-password", secret: true);

// Postgres
var postgres = builder.AddPostgres("postgres")
    .WithImage("postgres:17.6")
    .WithEnvironment("POSTGRES_USER", "postgres")
    .WithEnvironment("POSTGRES_PASSWORD", dbPassword)
    .WithHostPort(2212)
    .WithDataVolume();

var keeperDb = postgres.AddDatabase("keeper-db");

builder.AddProject<Projects.Keeper_Server>("keeper-server")
    .WaitFor(keeperDb)
    .WithEnvironment("ConnectionStrings:keeper-db", keeperConnectionString);

builder.Build().Run();
