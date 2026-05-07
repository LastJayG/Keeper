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
    public async Task<ActionResult<IReadOnlyList<CodeSnippetDto>>> GetAll(CancellationToken ct)
    {
        var snippets = await codeSnippetService.GetAllAsync(ct);
        return Ok(snippets);
    }

    [HttpGet("{folderId:guid}/short")]
    [ProducesResponseType(typeof(IReadOnlyList<CodeSnippetDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IReadOnlyList<CodeSnippetDto>>> GetAllShortByFolderId(Guid folderId, CancellationToken ct)
    {
        var snippets = await codeSnippetService.GetAllShortByFolderIdAsync(folderId, ct);
        return Ok(snippets);
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<CodeSnippetDto>> GetById(Guid id, CancellationToken ct)
    {
        var snippet = await codeSnippetService.GetByIdAsync(id, ct);
        return Ok(snippet);
    }

    [HttpPost]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Create([FromBody] CreateCodeSnippetDto createDto, CancellationToken ct)
    {
        var snippet = await codeSnippetService.CreateAsync(createDto, ct);
        return Ok(snippet);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Update(Guid id, [FromBody] UpdateCodeSnippetDto updateDto, CancellationToken ct)
    {
        var snippet = await codeSnippetService.UpdateAsync(id, updateDto, ct);
        return Ok(snippet);
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct)
    {
        await codeSnippetService.DeleteAsync(id, ct);
        return NoContent();
    }
}