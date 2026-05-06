using AutoMapper;
using Keeper.Application.Interfaces;
using Keeper.Application.Models.CodeSnippet;
using Keeper.Core.Entities;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;

namespace Keeper.Application.Services;

public class CodeSnippetService(
    ICodeSnippetRepository codeSnippetRepository, 
    IMapper mapper, 
    IUnitOfWork unitOfWork) : ICodeSnippetService
{
    public async Task<CodeSnippetDto?> GetByIdAsync(Guid id, CancellationToken ct)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id, ct);
        return entity == null ? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.") : mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<IReadOnlyList<CodeSnippetDto>> GetAllAsync(CancellationToken ct)
    {
        var entities = await codeSnippetRepository.GetAllAsync(ct);
        return mapper.Map<IReadOnlyList<CodeSnippetDto>>(entities);
    } 
    public async Task<IReadOnlyList<CodeSnippetShortDto>> GetAllShortByFolderIdAsync(Guid folderId, CancellationToken ct)
    {
        var entities = await codeSnippetRepository.GetAllByFolderIdAsync(folderId, ct);
        return mapper.Map<IReadOnlyList<CodeSnippetShortDto>>(entities);
    }

    public async Task<IReadOnlyList<CodeSnippetDto>> GetAsync(BaseSpecification<CodeSnippetEntity> spec, CancellationToken ct)
    {
        var entities = await codeSnippetRepository.GetAsync(spec, ct);
        return mapper.Map<IReadOnlyList<CodeSnippetDto>>(entities);
    }

    public async Task<CodeSnippetDto> CreateAsync(CreateCodeSnippetDto createDto, CancellationToken ct)
    {
        var entity = mapper.Map<CodeSnippetEntity>(createDto);
        await codeSnippetRepository.CreateAsync(entity, ct);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<CodeSnippetDto?> UpdateAsync(Guid id, UpdateCodeSnippetDto updateDto, CancellationToken ct)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id, ct) ?? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.");

        var newEntity = mapper.Map<CodeSnippetEntity>(updateDto);

        await codeSnippetRepository.UpdateAsync(newEntity, ct);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<bool> DeleteAsync(Guid id, CancellationToken ct)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id, ct) ?? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.");
        await codeSnippetRepository.DeleteAsync(entity, ct);
        await unitOfWork.SaveChangesAsync();

        return true;
    }
}
