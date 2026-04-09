using Keeper.Application;
using Keeper.Application.Interfaces;
using Keeper.Application.Services;
using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Keeper.Data.Repositories;
using Keeper.Data.Specifications;
using Keeper.Data.UnitOfWork;
using Keeper.Server.Handlers;

namespace Keeper.Server.Extensions;

public static class ServiceExtension
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", policy =>
            {
                policy.AllowAnyOrigin() 
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
        });

        services.AddDbContext<KeeperDbContext>();
        services.AddAutoMapper(typeof(AssemblyDefiner).Assembly);

        services.AddScoped(typeof(ISpecificationEvaluator<>), typeof(SpecificationEvaluator<>));

        services.AddScoped<ICodeSnippetRepository, CodeSnippetRepository>();
        services.AddScoped<IFolderRepository, FolderRepository>();

        services.AddScoped<IUnitOfWork, UnitOfWork>();

        services.AddScoped<ICodeSnippetService, CodeSnippetService>();
        services.AddScoped<IFolderService, FolderService>();

        services.AddProblemDetails();
        services.AddExceptionHandler<CustomExceptionHandler>();

        return services;
    }
}
