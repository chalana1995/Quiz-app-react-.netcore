using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuizAPI.Migrations
{
    public partial class _2ndmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Optiona4",
                table: "Questions",
                newName: "Option4");

            migrationBuilder.RenameColumn(
                name: "Optiona3",
                table: "Questions",
                newName: "Option3");

            migrationBuilder.RenameColumn(
                name: "Optiona2",
                table: "Questions",
                newName: "Option2");

            migrationBuilder.RenameColumn(
                name: "Optiona1",
                table: "Questions",
                newName: "Option1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Option4",
                table: "Questions",
                newName: "Optiona4");

            migrationBuilder.RenameColumn(
                name: "Option3",
                table: "Questions",
                newName: "Optiona3");

            migrationBuilder.RenameColumn(
                name: "Option2",
                table: "Questions",
                newName: "Optiona2");

            migrationBuilder.RenameColumn(
                name: "Option1",
                table: "Questions",
                newName: "Optiona1");
        }
    }
}
