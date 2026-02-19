using Keeper.Core.Entities;
using Keeper.Core.Enums;
using Keeper.Data.Interfaces;
using Serilog;

namespace Keeper.Data.Seeding;

public class DataSeeder
{
    public static async Task SeedAsync(IFolderRepository folderRepository, ICodeSnippetRepository snippetRepository, IUnitOfWork unitOfWork)
    {
        var existingFolders = await folderRepository.GetAllAsync();

        if (existingFolders.Count > 0)
        {
            Log.Information("\x1b[33;1mDatabase already contains data. Skipping seeding.\x1b[0m");
            return;
        }

        Log.Information("Seeding database with initial data...");

        await SeedInitialData(folderRepository, snippetRepository, unitOfWork);

        Log.Information("\x1b[32;1mDatabase seeded successfully!\x1b[0m");
    }

    private static async Task SeedInitialData(IFolderRepository folderRepository, ICodeSnippetRepository snippetRepository, IUnitOfWork unitOfWork)
    {
        var csharpFolder = new FolderEntity
        {
            Id = Guid.Parse("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"),
            Title = "C# Snippets",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        var sqlFolder = new FolderEntity
        {
            Id = Guid.Parse("bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"),
            Title = "SQL Snippets",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        var bashFolder = new FolderEntity
        {
            Id = Guid.Parse("cccccccc-cccc-cccc-cccc-cccccccccccc"),
            Title = "Bash Scripts",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        await folderRepository.CreateAsync(csharpFolder);
        await folderRepository.CreateAsync(sqlFolder);
        await folderRepository.CreateAsync(bashFolder);

        var snippets = new List<CodeSnippetEntity>
        {
            new()
            {
                Title = "Generic Repository Pattern",
                Description = "Basic generic repository implementation for EF Core",
                Code = """
                       public class Repository<T>(DbContext context) where T : class
                       {
                           private readonly DbSet<T> _set = context.Set<T>();

                           public async Task<T?> GetByIdAsync(Guid id) => await _set.FindAsync(id);
                           public async Task AddAsync(T entity) => await _set.AddAsync(entity);
                           public void Remove(T entity) => _set.Remove(entity);
                       }
                       """,
                ProgrammingLanguage = ProgrammingLanguage.CSharp,
                FolderId = csharpFolder.Id,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Title = "Extension Method Example",
                Description = "String extension method for checking null or whitespace",
                Code = """
                       public static class StringExtensions
                       {
                           public static bool IsNullOrWhiteSpace(this string? value) =>
                               string.IsNullOrWhiteSpace(value);
                       }
                       """,
                ProgrammingLanguage = ProgrammingLanguage.CSharp,
                FolderId = csharpFolder.Id,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Title = "Pagination Query",
                Description = "SQL query with pagination using OFFSET and FETCH",
                Code = """
                       SELECT *
                       FROM Items
                       ORDER BY CreatedAt DESC
                       OFFSET (@Page - 1) * @PageSize ROWS
                       FETCH NEXT @PageSize ROWS ONLY;
                       """,
                ProgrammingLanguage = ProgrammingLanguage.SQL,
                FolderId = sqlFolder.Id,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new()
            {
                Title = "Docker Cleanup",
                Description = "Remove all stopped containers, unused images and volumes",
                Code = """
                       #!/bin/bash
                       docker rm $(docker ps -aq -f status=exited)
                       docker rmi $(docker images -q -f dangling=true)
                       docker volume rm $(docker volume ls -q -f dangling=true)
                       echo "Docker cleanup complete."
                       """,
                ProgrammingLanguage = ProgrammingLanguage.Bash,
                FolderId = bashFolder.Id,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        };

        foreach (var snippet in snippets)
        {
            await snippetRepository.CreateAsync(snippet);
        }

        await unitOfWork.SaveChangesAsync();
    }
}