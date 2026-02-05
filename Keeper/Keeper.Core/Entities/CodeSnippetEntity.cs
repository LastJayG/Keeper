using Keeper.Core.Enums;

namespace Keeper.Core.Entities;

public sealed class CodeSnippetEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Code { get; set; }
    public ProgrammingLanguage ProgrammingLanguage { get; set; }
    
    public Guid FolderId { get; set; }
}
