using Keeper.Core.Entities;
using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Keeper.Data.Repositories;

public class FolderRepository(KeeperDbContext context, ISpecificationEvaluator<FolderEntity> specificationEvaluator) : IFolderRepository
{
    public async Task<FolderEntity> GetByIdAsync(Guid id, CancellationToken ct)
    {
        return await context.Folders.FindAsync(id, ct);
    }

    public async Task<IReadOnlyList<FolderEntity>> GetAllAsync(CancellationToken ct)
    {
        return await context.Folders.ToListAsync(ct);
    }

    public async Task<IReadOnlyList<FolderEntity>> GetAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct)
    {
        var query = specificationEvaluator.GetQuery(context.Folders.AsQueryable(), spec);
        return await query.ToListAsync();
    }

    public async Task<int> CountAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct)
    {
        var query = specificationEvaluator.GetQuery(context.Folders.AsQueryable(), spec);
        return await query.CountAsync();
    }

    public async Task<FolderEntity> CreateAsync(FolderEntity entity, CancellationToken ct)
    {
        await context.Folders.AddAsync(entity, ct);
        return entity;
    }

    public async Task<FolderEntity> UpdateAsync(FolderEntity entity, CancellationToken ct)
    {
        context.Folders.Update(entity);
        entity.UpdatedAt = DateTime.UtcNow;
        await context.SaveChangesAsync(ct);
        return entity;
    }

    public async Task DeleteAsync(FolderEntity entity, CancellationToken ct)
    {
        context.Folders.Remove(entity);
        await context.SaveChangesAsync(ct);
    }
}
