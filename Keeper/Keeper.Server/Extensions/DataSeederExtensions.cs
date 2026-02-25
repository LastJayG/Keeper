using Keeper.Data.Interfaces;
using Keeper.Data.Seeding;
using Serilog;

namespace Keeper.Server.Extensions;

public static class DataSeederExtensions
{
    public static async Task SeedDataAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;

        try
        {
            var folderRepository = services.GetRequiredService<IFolderRepository>();
            var snippetRepository = services.GetRequiredService<ICodeSnippetRepository>();
            var unitOfWork = services.GetRequiredService<IUnitOfWork>();

            await DataSeeder.SeedAsync(folderRepository, snippetRepository, unitOfWork);
        }
        catch (Exception ex)
        {
            Log.Error(ex, "An error occurred while seeding the database.");
        }
    }
}
