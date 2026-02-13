using AutoMapper;
using Keeper.Application.Models.Folder;
using Keeper.Core.Entities;

namespace Keeper.Application.Mappings;

public class FolderMappingProfile : Profile
{
    public FolderMappingProfile()
    {
        CreateMap<FolderEntity, FolderDto>();
        CreateMap<CreateFolderDto, FolderEntity>();
        CreateMap<UpdateFolderDto, FolderEntity>();
    }
}