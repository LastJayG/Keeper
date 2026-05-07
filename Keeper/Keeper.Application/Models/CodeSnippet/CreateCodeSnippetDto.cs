using Keeper.Core.Enums;

namespace Keeper.Application.Models.CodeSnippet;

public sealed record CreateCodeSnippetDto(
    string Title,
    string Description,
    string Code,
    ProgrammingLanguage ProgrammingLanguage,
    Guid FolderId);