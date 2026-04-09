using Keeper.Core.Entities;

namespace Keeper.Data.Specifications.Folders;

/// <summary>
/// Takes Folder, OrderBy Title
/// </summary>
public class FolderSpec : BaseSpecification<FolderEntity>
{
    public FolderSpec()
    {
        OrderBy = f => f.Title;
    }

    public FolderSpec(int pageNumber, int pageSize) : this()
    {
        int skip = (pageNumber - 1) * pageSize;
        ApplyPaging(skip, pageSize);
    }
}
