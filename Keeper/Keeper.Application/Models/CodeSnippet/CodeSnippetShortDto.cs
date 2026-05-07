using Keeper.Core.Enums;

namespace Keeper.Application.Models.CodeSnippet;

public sealed record CodeSnippetShortDto(Guid Id,
    string Title,
    ProgrammingLanguage ProgrammingLanguage,
    DateTime CreatedAt,
    Guid FolderId);
