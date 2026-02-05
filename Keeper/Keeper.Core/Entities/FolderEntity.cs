namespace Keeper.Core.Entities;

public sealed class FolderEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; }

    public IList<CodeSnippetEntity> CodeSnippets { get; set; }
}
