using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Data.Interfaces;
public interface ICodeSnippetRepository
{
    Task<CodeSnippetEntity> CreateAsync(CodeSnippetEntity entity);
    Task<int> CountAsync(BaseSpecification<CodeSnippetEntity> spec);
    Task DeleteAsync(CodeSnippetEntity entity);
    Task<IReadOnlyList<CodeSnippetEntity>> GetAllAsync();
    Task<IReadOnlyList<CodeSnippetEntity>> GetAsync(BaseSpecification<CodeSnippetEntity> spec);
    Task<CodeSnippetEntity> GetByIdAsync(int id);
    Task<CodeSnippetEntity> UpdateAsync(CodeSnippetEntity entity);
}