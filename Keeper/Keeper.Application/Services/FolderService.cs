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
    public async Task<FolderDto?> GetByIdAsync(Guid id)
    {
        var entity = await folderRepository.GetByIdAsync(id);
        return entity == null ? null : mapper.Map<FolderDto>(entity);
    }

    public async Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetFolderLanguages(Guid id)
    {
        return await codeSnippetRepository.GetLanguagesByFolderIdAsync(id);
    }

    public async Task<IReadOnlyList<FolderDto>> GetAllAsync()
    {
        var entities = await folderRepository.GetAllAsync();
        return mapper.Map<IReadOnlyList<FolderDto>>(entities);
    }

    public async Task<IReadOnlyList<FolderDto>> GetAsync(BaseSpecification<FolderEntity> spec)
    {
        var entities = await folderRepository.GetAsync(spec);
        return mapper.Map<IReadOnlyList<FolderDto>>(entities);
    }

    public async Task<FolderDto> CreateAsync(CreateFolderDto createDto)
    {
        var entity = mapper.Map<FolderEntity>(createDto);
        await folderRepository.CreateAsync(entity);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<FolderDto>(entity);
    }

    public async Task<FolderDto?> UpdateAsync(Guid id, UpdateFolderDto updateDto)
    {
        var entity = await folderRepository.GetByIdAsync(id);
        if (entity == null)
            return null;

        mapper.Map(updateDto, entity);

        await folderRepository.UpdateAsync(entity);
        await unitOfWork.SaveChangesAsync();

        return mapper.Map<FolderDto>(entity);
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var entity = await folderRepository.GetByIdAsync(id);
        if (entity == null)
            return false;

        await folderRepository.DeleteAsync(entity);
        await unitOfWork.SaveChangesAsync();

        return true;
    }

    public async Task<bool> ExistsAsync(Guid id)
    {
        var entity = await folderRepository.GetByIdAsync(id);
        return entity != null;
    }
}