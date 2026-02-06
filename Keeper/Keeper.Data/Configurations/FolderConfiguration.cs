using Keeper.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Keeper.Data.Configurations;

public class FolderConfiguration : IEntityTypeConfiguration<FolderEntity>
{
    public void Configure(EntityTypeBuilder<FolderEntity> builder)
    {
        builder.HasKey(f => f.Id);

    }
}
