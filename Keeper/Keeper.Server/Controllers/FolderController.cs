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
    public async Task<ActionResult<IReadOnlyList<FolderDto>>> GetAll()
    {
        var folders = await folderService.GetAllAsync();
        return Ok(folders);
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<FolderDto>> GetById(Guid id)
    {
        return Ok(await folderService.GetByIdAsync(id));
    }

    [HttpGet("{id:guid}/languages")]
    [ProducesResponseType(typeof(IReadOnlyDictionary<string, decimal>), StatusCodes.Status200OK)]
    public async Task<ActionResult> GetLanguagesByFolderId(Guid id)
    {
        var languages = await folderService.GetFolderLanguages(id);
        return Ok(languages);
    }

    [HttpPost]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Create([FromBody] CreateFolderDto createDto)
    {
        var folder = await folderService.CreateAsync(createDto);
        return Ok(folder);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Update(Guid id, [FromBody] UpdateFolderDto updateDto)
    {
        return Ok(await folderService.UpdateAsync(id, updateDto));
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id)
    {
        await folderService.DeleteAsync(id);
        return NoContent();
    }

    [HttpHead("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Exists(Guid id)
    {
        var exists = await folderService.ExistsAsync(id);
        return exists ? Ok() : NotFound();
    }
}