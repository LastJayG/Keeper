using Keeper.Core.Entities;
using Keeper.Core.Enums;

namespace Keeper.Data.Specifications.CodeSnippets;

/// <summary>
/// Takes CodeSnippets with exact ProgrammingLanguage, OrderBy length
/// </summary>
public class CodeSnippetWithPLSpec : BaseSpecification<CodeSnippetEntity>
{
    public CodeSnippetWithPLSpec(ProgrammingLanguage programmingLanguage)
    {
        Criteria = cs => cs.ProgrammingLanguage == programmingLanguage;
        OrderBy = cs => cs.Code.Length;
    }

    public CodeSnippetWithPLSpec(ProgrammingLanguage programmingLanguage, int pageNumber, int pageSize) : this(programmingLanguage)
    {
        int skip = (pageSize - 1) * pageSize;
        ApplyPaging(skip, pageSize);
    }
}
