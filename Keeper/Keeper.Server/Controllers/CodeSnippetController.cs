using Keeper.Application.Interfaces;
using Keeper.Application.Models.CodeSnippet;
using Microsoft.AspNetCore.Mvc;

namespace Keeper.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CodeSnippetController(ICodeSnippetService codeSnippetService) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(IReadOnlyList<CodeSnippetDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IReadOnlyList<CodeSnippetDto>>> GetAll()
    {
        var snippets = await codeSnippetService.GetAllAsync();
        return Ok(snippets);
    }

    [HttpGet("{folderId:guid}/short")]
    [ProducesResponseType(typeof(IReadOnlyList<CodeSnippetDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IReadOnlyList<CodeSnippetDto>>> GetAllShortByFolderId(Guid folderId)
    {
        var snippets = await codeSnippetService.GetAllShortByFolderIdAsync(folderId);
        return Ok(snippets);
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<CodeSnippetDto>> GetById(Guid id)
    {
        var snippet = await codeSnippetService.GetByIdAsync(id);
        return Ok(snippet);
    }

    [HttpPost]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Create([FromBody] CreateCodeSnippetDto createDto)
    {
        var snippet = await codeSnippetService.CreateAsync(createDto);
        return Ok(snippet);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Update(Guid id, [FromBody] UpdateCodeSnippetDto updateDto)
    {
        var snippet = await codeSnippetService.UpdateAsync(id, updateDto);
        return Ok(snippet);
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id)
    {
        await codeSnippetService.DeleteAsync(id);
        return NoContent();
    }

    [HttpHead("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Exists(Guid id)
    {
        var exists = await codeSnippetService.ExistsAsync(id);
        return exists ? Ok() : NotFound();
    }
}