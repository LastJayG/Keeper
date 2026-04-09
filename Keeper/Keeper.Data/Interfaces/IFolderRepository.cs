using Keeper.Core.Entities;
using Keeper.Data.Specifications;

namespace Keeper.Data.Interfaces;
public interface IFolderRepository
{
    Task<FolderEntity> CreateAsync(FolderEntity entity);
    Task<int> CountAsync(BaseSpecification<FolderEntity> spec);
    Task DeleteAsync(FolderEntity entity);
    Task<IReadOnlyList<FolderEntity>> GetAllAsync();
    Task<IReadOnlyList<FolderEntity>> GetAsync(BaseSpecification<FolderEntity> spec);
    Task<FolderEntity> GetByIdAsync(Guid id);
    Task<FolderEntity> UpdateAsync(FolderEntity entity);
}