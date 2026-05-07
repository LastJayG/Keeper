using Keeper.Core.Enums;

namespace Keeper.Application.Models.CodeSnippet;

public sealed record CodeSnippetDto(
    Guid Id,
    string Title,
    string Description,
    string Code,
    ProgrammingLanguage ProgrammingLanguage,
    DateTime CreatedAt,
    DateTime UpdatedAt,
    Guid FolderId);