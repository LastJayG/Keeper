using Keeper.Application.Models.CodeSnippet;
using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Application.Interfaces;

public interface ICodeSnippetService
{
    Task<CodeSnippetDto?> GetByIdAsync(Guid id, CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetDto>> GetAllAsync(CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetDto>> GetAsync(BaseSpecification<CodeSnippetEntity> spec, CancellationToken ct);
    Task<CodeSnippetDto> CreateAsync(CreateCodeSnippetDto createDto, CancellationToken ct);
    Task<CodeSnippetDto?> UpdateAsync(Guid id, UpdateCodeSnippetDto updateDto, CancellationToken ct);
    Task<bool> DeleteAsync(Guid id, CancellationToken ct);
    Task<IReadOnlyList<CodeSnippetShortDto>> GetAllShortByFolderIdAsync(Guid folderId, CancellationToken ct);
}
