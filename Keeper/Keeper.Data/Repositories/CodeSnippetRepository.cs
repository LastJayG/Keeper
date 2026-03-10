using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Context;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Keeper.Data.Repositories;

public class CodeSnippetRepository(KeeperDbContext context, ISpecificationEvaluator<CodeSnippetEntity> specificationEvaluator) : ICodeSnippetRepository
{
    public async Task<CodeSnippetEntity> GetByIdAsync(Guid id)
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

    public async Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetLanguagesByFolderIdAsync(Guid folderId)
    {
        var snippets = await context.CodeSnippets
            .Where(s => s.FolderId == folderId)
            .GroupBy(s => s.ProgrammingLanguage)
            .Select(g => new { Language = g.Key, Count = g.Count() })
            .ToListAsync();

        var total = snippets.Sum(s => s.Count);

        if (total == 0)
            return new Dictionary<ProgrammingLanguage, decimal>();

        return snippets.ToDictionary(
            s => s.Language,
            s => Math.Round((decimal)s.Count / total * 100, 2)
        );
    }

    public async Task<int> CountAsync(BaseSpecification<CodeSnippetEntity> spec)
    {
        var query = specificationEvaluator.GetQuery(context.CodeSnippets.AsQueryable(), spec);
        return await query.CountAsync();
    }

    public async Task<CodeSnippetEntity> CreateAsync(CodeSnippetEntity entity)
    {
        await context.CodeSnippets.AddAsync(entity);
        return entity;
    }

    public async Task<CodeSnippetEntity> UpdateAsync(CodeSnippetEntity entity)
    {
        entity.UpdatedAt = DateTime.UtcNow;
        context.CodeSnippets.Update(entity);
        return entity;
    }

    public async Task DeleteAsync(CodeSnippetEntity entity)
    {
        context.CodeSnippets.Remove(entity);
    }
}
