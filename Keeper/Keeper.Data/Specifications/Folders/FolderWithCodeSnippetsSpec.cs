using Keeper.Core.Entities;

namespace Keeper.Data.Specifications.Folders;

/// <summary>
/// Takes Folder with CodeSnippets included, OrderBy Title
/// </summary>
public class FolderWithCodeSnippetsSpec : BaseSpecification<FolderEntity>
{
    public FolderWithCodeSnippetsSpec()
    {
        AddInclude(f => f.CodeSnippets);
        OrderBy = f => f.Title;
    }

    public FolderWithCodeSnippetsSpec(int pageNumber, int pageSize) : this()
    {
        int skip = (pageNumber - 1) * pageSize;
        ApplyPaging(skip, pageSize);
    }
}
