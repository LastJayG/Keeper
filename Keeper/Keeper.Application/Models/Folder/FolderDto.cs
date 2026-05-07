namespace Keeper.Application.Models.Folder;

public sealed record FolderDto(
    Guid Id,
    string Title,
    DateTime CreatedAt,
    DateTime UpdatedAt);