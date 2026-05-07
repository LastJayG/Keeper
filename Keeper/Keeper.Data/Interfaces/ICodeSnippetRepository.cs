using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Specifications;

namespace Keeper.Data.Interfaces;
public interface ICodeSnippetRepository
{
    Task<CodeSnippetEntity> CreateAsync(CodeSnippetEntity entity, CancellationToken ct);
    Task<int> CountAsync(BaseSpecification<CodeSnippetEntity> spec, CancellationToken ct);
    Task DeleteAsync(CodeSnippetEntity entity, CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetEntity>> GetAllAsync(CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetEntity>> GetAllByFolderIdAsync(Guid folderId, CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetEntity>> GetAsync(BaseSpecification<CodeSnippetEntity> spec, CancellationToken ct);
    Task<CodeSnippetEntity> GetByIdAsync(Guid id, CancellationToken ct);
    Task<CodeSnippetEntity> UpdateAsync(CodeSnippetEntity entity, CancellationToken ct);
    Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetLanguagesByFolderIdAsync(Guid folderId, CancellationToken ct);
}