using Keeper.Application.Interfaces;
using Keeper.Application.Models.Folder;
using Microsoft.AspNetCore.Mvc;

namespace Keeper.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FolderController(IFolderService folderService) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(IReadOnlyList<FolderDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IReadOnlyList<FolderDto>>> GetAll(CancellationToken ct)
    {
        var folders = await folderService.GetAllAsync(ct);
        return Ok(folders);
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<FolderDto>> GetById(Guid id, CancellationToken ct)
    {
        return Ok(await folderService.GetByIdAsync(id, ct));
    }

    [HttpGet("{id:guid}/languages")]
    [ProducesResponseType(typeof(IReadOnlyDictionary<string, decimal>), StatusCodes.Status200OK)]
    public async Task<ActionResult> GetLanguagesByFolderId(Guid id, CancellationToken ct)
    {
        var languages = await folderService.GetFolderLanguages(id, ct);
        return Ok(languages);
    }

    [HttpPost]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Create([FromBody] CreateFolderDto createDto, CancellationToken ct)
    {
        var folder = await folderService.CreateAsync(createDto, ct);
        return Ok(folder);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Update(Guid id, [FromBody] UpdateFolderDto updateDto, CancellationToken ct)
    {
        return Ok(await folderService.UpdateAsync(id, updateDto, ct));
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct)
    {
        await folderService.DeleteAsync(id, ct);
        return NoContent();
    }
}