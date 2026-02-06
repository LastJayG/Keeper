using Keeper.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Keeper.Data.Configurations;

public class FolderConfiguration : IEntityTypeConfiguration<FolderEntity>
{
    public void Configure(EntityTypeBuilder<FolderEntity> builder)
    {
        builder.HasKey(f => f.Id);

        builder
            .Property(cs => cs.CreatedAt)
            .HasDefaultValueSql("NOW()");

        builder
           .Property(cs => cs.UpdatedAt)
           .HasDefaultValueSql("NOW()");

        builder
            .HasMany(f => f.CodeSnippets)
            .WithOne(cs => cs.Folder);
    }
}
