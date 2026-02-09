using Keeper.Core.Entities;
using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Keeper.Data.Repositories;

public class CodeSnippetRepository(KeeperDbContext context, ISpecificationEvaluator<CodeSnippetEntity> specificationEvaluator)
{
    public async Task<CodeSnippetEntity> GetByIdAsync(int id)
    {
        return await context.CodeSnippets.FindAsync(id);
    }

    public async Task<IReadOnlyList<CodeSnippetEntity>> GetAllAsync()
    {
        return await context.CodeSnippets.ToListAsync();
    }

    public async Task<IReadOnlyList<CodeSnippetEntity>> GetAsync(BaseSpecification<CodeSnippetEntity> spec)
    {
        var query = specificationEvaluator.GetQuery(context.CodeSnippets.AsQueryable(), spec);
        return await query.ToListAsync();
    }

    public async Task<int> CountAsync(BaseSpecification<CodeSnippetEntity> spec)
    {
        var query = specificationEvaluator.GetQuery(context.CodeSnippets.AsQueryable(), spec);
        return await query.CountAsync();
    }

    public async Task<CodeSnippetEntity> AddAsync(CodeSnippetEntity entity)
    {
        await context.CodeSnippets.AddAsync(entity);
        return entity;
    }

    public async Task<CodeSnippetEntity> UpdateAsync(CodeSnippetEntity entity)
    {
        context.CodeSnippets.Update(entity);
        return entity;
    }

    public async Task DeleteAsync(CodeSnippetEntity entity)
    {
        context.CodeSnippets.Remove(entity);
    }
}
