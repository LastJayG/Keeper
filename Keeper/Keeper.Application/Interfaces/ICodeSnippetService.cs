using System;
using Keeper.Application.Models.CodeSnippet;
using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Application.Interfaces;

public interface ICodeSnippetService
{
    Task<CodeSnippetDto?> GetByIdAsync(Guid id);
    Task<IReadOnlyList<CodeSnippetDto>> GetAllAsync();
    Task<IReadOnlyList<CodeSnippetDto>> GetAsync(BaseSpecification<CodeSnippetEntity> spec);
    Task<CodeSnippetDto> CreateAsync(CreateCodeSnippetDto createDto);
    Task<CodeSnippetDto?> UpdateAsync(Guid id, UpdateCodeSnippetDto updateDto);
    Task<bool> DeleteAsync(Guid id);
    Task<bool> ExistsAsync(Guid id);
}
