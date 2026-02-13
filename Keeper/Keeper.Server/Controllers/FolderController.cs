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
        var folder = await folderService.GetByIdAsync(id);

        if (folder == null)
            return NotFound(new ProblemDetails
            {
                Title = "Folder not found",
                Detail = $"Folder with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

        return Ok(folder);
    }

    [HttpPost]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Create([FromBody] CreateFolderDto createDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var folder = await folderService.CreateAsync(createDto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = folder.Id },
            folder);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(FolderDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<FolderDto>> Update(Guid id, [FromBody] UpdateFolderDto updateDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var folder = await folderService.UpdateAsync(id, updateDto);

        if (folder == null)
            return NotFound(new ProblemDetails
            {
                Title = "Folder not found",
                Detail = $"Folder with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

        return Ok(folder);
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await folderService.DeleteAsync(id);

        if (!result)
            return NotFound(new ProblemDetails
            {
                Title = "Folder not found",
                Detail = $"Folder with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

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