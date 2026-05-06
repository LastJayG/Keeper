using Keeper.Application.Models.Folder;
using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Specifications;

namespace Keeper.Application.Interfaces;

public interface IFolderService
{
    Task<FolderDto?> GetByIdAsync(Guid id, CancellationToken ct);
    Task<IReadOnlyList<FolderDto>> GetAllAsync(CancellationToken ct);
    Task<IReadOnlyList<FolderDto>> GetAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct);
    Task<FolderDto> CreateAsync(CreateFolderDto createDto, CancellationToken ct);
    Task<FolderDto?> UpdateAsync(Guid id, UpdateFolderDto updateDto, CancellationToken ct);
    Task<bool> DeleteAsync(Guid id, CancellationToken ct);
    Task<IReadOnlyDictionary<ProgrammingLanguage, decimal>> GetFolderLanguages(Guid id, CancellationToken ct);
}