using AutoMapper;
using Keeper.Application.Interfaces;
using Keeper.Application.Models.Folder;
using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Interfaces;
using Keeper.Data.Specifications;

namespace Keeper.Application.Services;
public class FolderService(
    IFolderRepository folderRepository,
    ICodeSnippetRepository codeSnippetRepository,
    IMapper mapper,
    IUnitOfWork unitOfWork) : IFolderService
{
    public async Task<FolderDto?> GetByIdAsync(Guid id, CancellationToken ct)
    {
        var entity = await folderRepository.GetByIdAsync(id, ct);
        return mapper.Map<FolderDto>(entity) ?? throw new KeyNotFoundException($"Folder with id '{id}' was not found.");
    }

    public async Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetFolderLanguages(Guid id, CancellationToken ct)
    {
        return await codeSnippetRepository.GetLanguagesByFolderIdAsync(id, ct);
    }

    public async Task<IReadOnlyList<FolderDto>> GetAllAsync(CancellationToken ct)
    {
        var entities = await folderRepository.GetAllAsync(ct);
        return mapper.Map<IReadOnlyList<FolderDto>>(entities);
    }

    public async Task<IReadOnlyList<FolderDto>> GetAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct)
    {
        var entities = await folderRepository.GetAsync(spec, ct);
        return mapper.Map<IReadOnlyList<FolderDto>>(entities);
    }

    public async Task<FolderDto> CreateAsync(CreateFolderDto createDto, CancellationToken ct)
    {
        var entity = mapper.Map<FolderEntity>(createDto);
        await folderRepository.CreateAsync(entity, ct);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<FolderDto>(entity);
    }

    public async Task<FolderDto> UpdateAsync(Guid id, UpdateFolderDto updateDto, CancellationToken ct)
    {
        var entity = await folderRepository.GetByIdAsync(id, ct) ??
            throw new KeyNotFoundException($"Folder with id '{id}' was not found.");

        mapper.Map(updateDto, entity);

        await folderRepository.UpdateAsync(entity, ct);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<FolderDto>(entity);
    }

    public async Task<bool> DeleteAsync(Guid id, CancellationToken ct)
    {
        var entity = await folderRepository.GetByIdAsync(id, ct) ??
            throw new KeyNotFoundException($"Folder with id '{id}' was not found.");

        await folderRepository.DeleteAsync(entity, ct);
        await unitOfWork.SaveChangesAsync();

        return true;
    }
}