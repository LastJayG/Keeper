using Keeper.Core.Enums;
using Keeper.Core.Interfaces;

namespace Keeper.Core.Entities;

public sealed class CodeSnippetEntity : ITrackableEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Code { get; set; }
    public ProgrammingLanguage ProgrammingLanguage { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    
    public Guid FolderId { get; set; }
}
