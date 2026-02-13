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

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<CodeSnippetDto>> GetById(int id)
    {
        var snippet = await codeSnippetService.GetByIdAsync(id);

        if (snippet == null)
            return NotFound(new ProblemDetails
            {
                Title = "Code snippet not found",
                Detail = $"Code snippet with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

        return Ok(snippet);
    }

    [HttpPost]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Create([FromBody] CreateCodeSnippetDto createDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var snippet = await codeSnippetService.CreateAsync(createDto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = snippet.Id },
            snippet);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(CodeSnippetDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<CodeSnippetDto>> Update(int id, [FromBody] UpdateCodeSnippetDto updateDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var snippet = await codeSnippetService.UpdateAsync(id, updateDto);

        if (snippet == null)
            return NotFound(new ProblemDetails
            {
                Title = "Code snippet not found",
                Detail = $"Code snippet with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

        return Ok(snippet);
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await codeSnippetService.DeleteAsync(id);

        if (!result)
            return NotFound(new ProblemDetails
            {
                Title = "Code snippet not found",
                Detail = $"Code snippet with ID {id} does not exist.",
                Status = StatusCodes.Status404NotFound
            });

        return NoContent();
    }

    [HttpHead("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Exists(int id)
    {
        var exists = await codeSnippetService.ExistsAsync(id);

        return exists ? Ok() : NotFound();
    }
}