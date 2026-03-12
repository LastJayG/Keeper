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

// Database
var keeperDb = postgres.AddDatabase("keeper-db");

// Server
var server = builder.AddProject<Projects.Keeper_Server>("keeper-server")
    .WaitFor(keeperDb)
    .WithEnvironment("ConnectionStrings:keeper-db", keeperConnectionString);

// Client
var client = builder.AddViteApp("keeper-client", "../keeper.client")
    .WithEnvironment("VITE_API_URL", server.GetEndpoint("http"))
    .WithExternalHttpEndpoints()
    .WaitFor(server);

builder.Build().Run();
