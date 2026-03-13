using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Keeper.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddFolderCodeSnippetRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CodeSnippets_Folders_FolderEntityId",
                table: "CodeSnippets");

            migrationBuilder.DropIndex(
                name: "IX_CodeSnippets_FolderEntityId",
                table: "CodeSnippets");

            migrationBuilder.DropColumn(
                name: "FolderEntityId",
                table: "CodeSnippets");

            migrationBuilder.CreateIndex(
                name: "IX_CodeSnippets_FolderId",
                table: "CodeSnippets",
                column: "FolderId");

            migrationBuilder.AddForeignKey(
                name: "FK_CodeSnippets_Folders_FolderId",
                table: "CodeSnippets",
                column: "FolderId",
                principalTable: "Folders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CodeSnippets_Folders_FolderId",
                table: "CodeSnippets");

            migrationBuilder.DropIndex(
                name: "IX_CodeSnippets_FolderId",
                table: "CodeSnippets");

            migrationBuilder.AddColumn<Guid>(
                name: "FolderEntityId",
                table: "CodeSnippets",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CodeSnippets_FolderEntityId",
                table: "CodeSnippets",
                column: "FolderEntityId");

            migrationBuilder.AddForeignKey(
                name: "FK_CodeSnippets_Folders_FolderEntityId",
                table: "CodeSnippets",
                column: "FolderEntityId",
                principalTable: "Folders",
                principalColumn: "Id");
        }
    }
}
