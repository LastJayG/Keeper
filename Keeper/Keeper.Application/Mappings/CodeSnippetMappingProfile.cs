using AutoMapper;
using Keeper.Application.Models.CodeSnippet;
using Keeper.Core.Entities;

namespace Keeper.Application.Mappings;

public class CodeSnippetMappingProfile : Profile
{
    public CodeSnippetMappingProfile()
    {
        CreateMap<CodeSnippetEntity, CodeSnippetDto>();
        CreateMap<CodeSnippetEntity, CodeSnippetShortDto>();
        CreateMap<CreateCodeSnippetDto, CodeSnippetEntity>();
        CreateMap<UpdateCodeSnippetDto, CodeSnippetEntity>();
    }
}
