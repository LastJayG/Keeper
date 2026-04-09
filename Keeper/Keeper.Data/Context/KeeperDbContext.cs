using Keeper.Core.Entities;
using Keeper.Data.Configurations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Keeper.Data.Context;

public class KeeperDbContext(DbContextOptions<KeeperDbContext> options, IConfiguration configuration) : DbContext(options)
{
    public DbSet<CodeSnippetEntity> CodeSnippets { get; set; }
    public DbSet<FolderEntity> Folders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new CodeSnippetConfiguration());
        modelBuilder.ApplyConfiguration(new FolderConfiguration());

        base.OnModelCreating(modelBuilder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("keeper-db"));
    }
}
