using Keeper.Core.Entities;
using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Keeper.Data.Repositories;

public class FolderRepository(KeeperDbContext context, ISpecificationEvaluator<FolderEntity> specificationEvaluator) : IFolderRepository
{
    public async Task<FolderEntity> GetByIdAsync(Guid id)
    {
        return await context.Folders.FindAsync(id);
    }

    public async Task<IReadOnlyList<FolderEntity>> GetAllAsync()
    {
        return await context.Folders.ToListAsync();
    }

    public async Task<IReadOnlyList<FolderEntity>> GetAsync(BaseSpecification<FolderEntity> spec)
    {
        var query = specificationEvaluator.GetQuery(context.Folders.AsQueryable(), spec);
        return await query.ToListAsync();
    }

    public async Task<int> CountAsync(BaseSpecification<FolderEntity> spec)
    {
        var query = specificationEvaluator.GetQuery(context.Folders.AsQueryable(), spec);
        return await query.CountAsync();
    }

    public async Task<FolderEntity> CreateAsync(FolderEntity entity)
    {
        await context.Folders.AddAsync(entity);
        return entity;
    }

    public async Task<FolderEntity> UpdateAsync(FolderEntity entity)
    {
        context.Folders.Update(entity);
        entity.UpdatedAt = DateTime.UtcNow;
        return entity;
    }

    public async Task DeleteAsync(FolderEntity entity)
    {
        context.Folders.Remove(entity);
    }
}
