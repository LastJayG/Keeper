using Keeper.Application.Models.CodeSnippet;
using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Application.Interfaces;

public interface ICodeSnippetService
{
    Task<CodeSnippetDto?> GetByIdAsync(int id);
    Task<IReadOnlyList<CodeSnippetDto>> GetAllAsync();
    Task<IReadOnlyList<CodeSnippetDto>> GetAsync(BaseSpecification<CodeSnippetEntity> spec);
    Task<CodeSnippetDto> CreateAsync(CreateCodeSnippetDto createDto);
    Task<CodeSnippetDto?> UpdateAsync(int id, UpdateCodeSnippetDto updateDto);
    Task<bool> DeleteAsync(int id);
    Task<bool> ExistsAsync(int id);
}
