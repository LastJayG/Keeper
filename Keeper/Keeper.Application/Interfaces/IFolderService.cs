using Keeper.Application.Models.Folder;
using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Specifications;

namespace Keeper.Application.Interfaces;

public interface IFolderService
{
    Task<FolderDto?> GetByIdAsync(Guid id);
    Task<IReadOnlyList<FolderDto>> GetAllAsync();
    Task<IReadOnlyList<FolderDto>> GetAsync(BaseSpecification<FolderEntity> spec);
    Task<FolderDto> CreateAsync(CreateFolderDto createDto);
    Task<FolderDto?> UpdateAsync(Guid id, UpdateFolderDto updateDto);
    Task<bool> DeleteAsync(Guid id);
    Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetFolderLanguages(Guid id);
}