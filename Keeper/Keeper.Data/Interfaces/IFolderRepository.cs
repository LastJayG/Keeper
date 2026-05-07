using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Data.Interfaces;
public interface IFolderRepository
{
    Task<FolderEntity> CreateAsync(FolderEntity entity, CancellationToken ct);
    Task<int> CountAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct);
    Task DeleteAsync(FolderEntity entity, CancellationToken ct);
    Task<IReadOnlyList<FolderEntity>> GetAllAsync(CancellationToken ct);
    Task<IReadOnlyList<FolderEntity>> GetAsync(BaseSpecification<FolderEntity> spec, CancellationToken ct);
    Task<FolderEntity> GetByIdAsync(Guid id, CancellationToken ct);
    Task<FolderEntity> UpdateAsync(FolderEntity entity, CancellationToken ct);
}