var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Keeper_Server>("keeper-server");

builder.Build().Run();
