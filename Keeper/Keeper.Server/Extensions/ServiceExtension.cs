using Keeper.Data.Context;

namespace Keeper.Server.Extensions;

public static class ServiceExtension
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddDbContext<KeeperDbContext>();
        return services;
    }
}
