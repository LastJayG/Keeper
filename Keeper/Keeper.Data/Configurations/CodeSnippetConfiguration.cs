using Keeper.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Keeper.Data.Configurations;

public class CodeSnippetConfiguration : IEntityTypeConfiguration<CodeSnippetEntity>
{
    public void Configure(EntityTypeBuilder<CodeSnippetEntity> builder)
    {
        builder.HasKey(cs => cs.Id);

        builder
           .Property(cs => cs.CreatedAt)
           .HasDefaultValueSql("NOW()");

        builder
           .Property(cs => cs.UpdatedAt)
           .HasDefaultValueSql("NOW()");

        builder
           .HasOne(cs => cs.Folder)
           .WithMany(f => f.CodeSnippets);
    }
}
