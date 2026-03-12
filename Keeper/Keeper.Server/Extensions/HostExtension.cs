using Serilog;

namespace Keeper.Server.Extensions;

public static class HostExtension
{
    public static IHostBuilder AddHostTools(this IHostBuilder builder)
    {
        // Logging
        builder.UseSerilog((context, configuration) =>
            configuration.ReadFrom.Configuration(context.Configuration));

        return builder;
    }
}