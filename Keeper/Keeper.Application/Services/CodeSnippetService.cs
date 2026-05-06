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
    public async Task<CodeSnippetDto?> GetByIdAsync(Guid id)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id);
        return entity == null ? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.") : mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<IReadOnlyList<CodeSnippetDto>> GetAllAsync()
    {
        var entities = await codeSnippetRepository.GetAllAsync();
        return mapper.Map<IReadOnlyList<CodeSnippetDto>>(entities);
    } 
    public async Task<IReadOnlyList<CodeSnippetShortDto>> GetAllShortByFolderIdAsync(Guid folderId)
    {
        var entities = await codeSnippetRepository.GetAllByFolderIdAsync(folderId);
        return mapper.Map<IReadOnlyList<CodeSnippetShortDto>>(entities);
    }

    public async Task<IReadOnlyList<CodeSnippetDto>> GetAsync(BaseSpecification<CodeSnippetEntity> spec)
    {
        var entities = await codeSnippetRepository.GetAsync(spec);
        return mapper.Map<IReadOnlyList<CodeSnippetDto>>(entities);
    }

    public async Task<CodeSnippetDto> CreateAsync(CreateCodeSnippetDto createDto)
    {
        var entity = mapper.Map<CodeSnippetEntity>(createDto);
        await codeSnippetRepository.CreateAsync(entity);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<CodeSnippetDto?> UpdateAsync(Guid id, UpdateCodeSnippetDto updateDto)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id) ?? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.");

        var newEntity = mapper.Map<CodeSnippetEntity>(updateDto);

        await codeSnippetRepository.UpdateAsync(newEntity);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<CodeSnippetDto>(entity);
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var entity = await codeSnippetRepository.GetByIdAsync(id) ?? 
            throw new KeyNotFoundException($"Code snippet with id '{id}' was not found.");
        await codeSnippetRepository.DeleteAsync(entity);
        await unitOfWork.SaveChangesAsync();

        return true;
    }
}
