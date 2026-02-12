using Keeper.Core.Enums;

namespace Keeper.Application.Models.CodeSnippet;

public record UpdateCodeSnippetDto(
    string Title,
    string Description,
    string Code,
    ProgrammingLanguage ProgrammingLanguage);

