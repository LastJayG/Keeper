namespace Keeper.Application.Models.Folder;

public record FolderDto(
    Guid Id,
    string Title,
    DateTime CreatedAt,
    DateTime UpdatedAt);